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
          'delete_post'          => 'delete_course',
          'delete_posts'         => 'delete_courses',
          'read_post'            => 'read_course',
        ),
        'has_archive'          => true,
        'hierarchical'         => false,
        'menu_position'        => null,
        'taxonomies'           => array('category'),
        'supports'             => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt'),
        'register_metabox_cb'  => 'add_yearclass_metaboxes',
    );

  register_post_type('courses', $args);
}
add_action('init','post_type_course_init');

/* to make sure that no one can publish a publicaly visible course */
/* function make_all_courses_private( $new_status, $old_status, $post ) { */ 
/*     if ( $post->post_type == 'courses' && $new_status == 'publish' && $old_status  != $new_status ) { */
/*         $post->post_status = 'private'; */
/*         wp_update_post( $post ); */
/*     } */
/* } */ 
/* add_action( 'transition_post_status', 'make_all_courses_private', 10, 3 ); */

/* metaboxes ==================== */
function add_yearclass_metaboxes(){
  add_meta_box('yearclass-metabox', 'For Students of year', 
    'yearclass_callback', 'courses',
    'normal','high');
}
add_action('add_meta_boxes', 'add_yearclass_metaboxes');

function yearclass_callback(){
  global $post;

  // creates the nonce we will recieve later, 
  echo '<input type="hidden" name="yearclass_noncename" id="yearclass_noncename" value="'.wp_create_nonce(plugin_basename(__FILE__)).'">';

  // get the parrent if it's allready been entered
  $yearclass = get_post_meta($post->ID,'_yearclass', true);

  // The input fields, potentially prefilled with previous data
  echo '<select name="_yearclass">';

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

}

function save_yearclass_meta($post_id, $post){

  if (!isset($_POST['yearclass_noncename'])){
    return $post->ID;
  }

  // verify this is the right call we're handling
  if (!wp_verify_nonce($_POST['yearclass_noncename'], plugin_basename(__FILE__) )){
    return $post->ID;
  }

  // drop if current user cant edit this course 
  if ( !current_user_can('edit_course', $post->ID) ) {
    return $post->ID;
  }

  $events_meta['_yearclass']       = $_POST['_yearclass'];

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
add_action('save_post', 'save_yearclass_meta', 1, 2);

