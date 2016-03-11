<?php
/*
Plugin Name: Qlokast Courses
Plugin URI: http://wordpress.org
Description: Plugin for generating school related CPT's
Author: medieinstuututu
Version: 0.1
Author URI: 
*/

function post_type_course_init(){
  $labels = array(
        'name'                  => 'Courses',
        'singular_name'         => 'Course',
    );
 
    $args = array(
        'labels'               => $labels,
        'public'               => true,
        'show_ui'              => true,
        'show_in_menu'         => true,
        'query_var'            => true,
        'rewrite'              => array( 'slug' => 'courses' ),
        'capability_type' => 'courses',
        'capabilities' => array(
          'publish_posts'        => 'publish_course',
          'edit_posts'           => 'edit_course',
          'read_posts'           => 'read_course',
          'edit_others_posts'    => 'edit_others_courses',
          'read_private_posts'   => 'read_private_courses',
          'edit_post'            => 'edit_course',
          'delete_post'          => 'delete_courses',
          'read_post'            => 'read_course',
        ),
        'has_archive'          => true,
        'hierarchical'         => false,
        'menu_position'        => null,
        'taxonomies'           => array('klass'),
        'supports'             => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments'),
        'register_metabox_cb'  => 'add_additional_info_metaboxes',
    );

  register_post_type('courses', $args);
}
add_action('init','post_type_course_init');

// Klass taxonomy, used for access restriction based on klass
function create_klass_taxonomy(){
   register_taxonomy(
    'klass',
    array('courses'),
    array(
      'label'        => 'Klass',
      'rewrite'      => array( 'slug' => 'klass' ),
      'hierarchical' => false
    )
  ); 
}
add_action('init', 'create_klass_taxonomy');

/* metaboxes ==================== */
function add_additional_info_metaboxes(){
  add_meta_box('additional_info-metabox', 'Additional Info', 
    'additional_info_callback', 'courses',
    'normal','high');
}
add_action('add_meta_boxes', 'add_additional_info_metaboxes');

function additional_info_callback(){
  global $post;

  // creates the nonce we will recieve later, 
  echo '<input type="hidden" name="additional_info_noncename" id="additional_info_noncename" value="'.wp_create_nonce(plugin_basename(__FILE__)).'">';

  // get the previous value if it's allready been entered
  $yearclass = get_post_meta($post->ID,'_yearclass', true);
  $yh_id = get_post_meta($post->ID,'_yh_id', true);

  // The input fields, potentially prefilled with previous data
  echo '<label for="yearclass">For students of year:</label>';
  echo '<select name="_yearclass" id="yearclass">';

  // print the previously selected year (if we are editing an allredy exiting course)
  if ($yearclass > 0 ){
    echo '<option value="'.$yearclass.'">'.$yearclass.'</option>';
  } else {
    echo '<option value="1">1</option>';
  }

  echo '<option> --- </option>';
  echo '<option value="All" > All </option>';

  // print year 1 to 4
  for ($i = 1 ; $i < 5 ; $i++) {
    echo '<option value="'.$i.'">'.$i.'</option>';
  }
  echo '</select>';

  echo '<hr>';
  echo '<label for="yh_id"> This Courses official ID </label>';
  echo '<input type="text" id="yh_id" name="_yh_id" value="'.$yh_id.'"></input>';
}

function save_additional_info($post_id, $post){
  if (!isset($_POST['additional_info_noncename'])){
    return $post->ID;
  }

  // verify this is the right call we're handling
  if (!wp_verify_nonce($_POST['additional_info_noncename'], plugin_basename(__FILE__) )){
    return $post->ID;
  }

  // drop if current user cant edit this course 
  if ( !current_user_can('edit_course', $post->ID) ) {
    return $post->ID;
  }

  $events_meta['_yearclass'] = $_POST['_yearclass'];
  $events_meta['_yh_id']     = $_POST['_yh_id'];

  foreach($events_meta as $key => $value){
    //don't store custom data twice
    if ($post->post_type == 'revision') {
      return;
    }

    // If $value is an array, make it a CSV (unlikely)
    $value = implode(',', (array)$value); 

    // If the custom field already has a value, we update it, 
    // otherwise we add a new meta, or destroy it
    if(get_post_meta($post->ID, $key, FALSE)) { 
      update_post_meta($post->ID, $key, $value);
    } else { 
      // the custom field doesn't have a value so add it
      add_post_meta($post->ID, $key, $value);
    }         

    // if we got an empty value, the user 
    // wanted to delete that field
    if(!$value) {
      delete_post_meta($post->ID, $key); 
    }
  }
}
add_action('save_post', 'save_additional_info', 1, 2);
