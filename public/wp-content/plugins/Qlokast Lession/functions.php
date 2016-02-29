<?php 
/*
Plugin Name: Qlokast Lession
Plugin URI: http://wordpress.org
Description: Plugin for generating school related CPT's
Author: medieinstuututu
Version: 0.1
Author URI: 
*/

function post_type_lession_init(){
  $labels = array(
        'name'                  => 'Lessions',
        'singular_name'         => 'Lession',
    );
 
    $args = array(
        'labels'               => $labels,
        'public'               => true,
        'show_ui'              => true,
        'show_in_menu'         => true,
        'query_var'            => true,
        'rewrite'              => array( 'slug' => 'lession' ),
        'capability_type' => 'lession',
        'capabilities' => array(
          'publish_posts' => 'publish_lession',
          'edit_posts' => 'edit_lession',
          'read_posts' => 'read_lession',
          'edit_others_posts' => 'edit_others_lessions',
          'read_private_posts' => 'read_private_lessions',
          'edit_post' => 'edit_lession',
          'delete_post' => 'delete_lession',
          'delete_posts' => 'delete_lession',
          'read_post' => 'read_lession',
        ),
        'has_archive'          => true,
        'hierarchical'         => false,
        'menu_position'        => null,
        'taxonomies'           => array('category'),
        'supports'             => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments'),
        'register_metabox_cb'  => 'add_course_parrent_metaboxes',
    );

  register_post_type('lession', $args);
}
add_action('init','post_type_lession_init');

/* to make sure that no one can publish a publicaly visible course */
function make_all_Lessions_private( $new_status, $old_status, $post ) { 
    if ( $post->post_type == 'lession' && $new_status == 'publish' && $old_status  != $new_status ) {
        $post->post_status = 'private';
        wp_update_post( $post );
    }
} 
add_action( 'transition_post_status', 'make_all_Lessions_private', 10, 3 );

/* metaboxes ==================== */
function add_course_parrent_metaboxes(){
  add_meta_box('course-parrent-metabox', 'Parrent Course', 
    'course_parrent_callback', 'lession',
    'normal','high');
}
add_action('add_meta_boxes', 'add_course_parrent_metaboxes');

function course_parrent_callback(){
  global $post;

  // creates the nonce we will recieve later, 
  echo '<input type="hidden" name="course_parrent_noncename" 
    id="course_parrent_noncename" value="'.wp_create_nonce(plugin_basename(__FILE__)).'">';

  // get the parrent if it's allready been entered
  $course_parrent = get_post(get_post_meta($post->ID,'_course_parrent', true),'OBJECT');

  // The input fields, potentially prefilled with previous data
  echo '<select name="_course_parrent">';

  // print the previously selected course (if we are editing an allredy exiting lession)
  if ($course_parrent->post_type == 'courses' ){
    echo '<option value="'.$course_parrent->ID.'">'.$course_parrent->post_title.'</option>';
  } else {
    echo '<option value="">None</option>';
  }

  echo '<option> --- </option>';

  // get the available cources that this lession could choose as a parrent
  $args = array( 'post_type' => 'courses');
  $loop = new WP_Query( $args );
  while ( $loop->have_posts() ) : $loop->the_post();
    echo '<option value="'.get_the_ID().'">'.get_the_title().'</option>';
  endwhile;

  echo '</select>';
  wp_reset_postdata(); // so we don't affect anyone elses queries

}

function save_course_parrent_meta($post_id, $post){

  if (!isset($_POST['course_parrent_noncename'])){
    return $post->ID;
  }

  // verify this is the right call we're handling
  if (!wp_verify_nonce($_POST['course_parrent_noncename'], plugin_basename(__FILE__) )){
    return $post->ID;
  }

  // verify permissions, 
  // drop if current user cant edit this lession or if he cant edit this parrent course
  if ( !current_user_can('edit_lession', $post->ID) || !current_user_can('edit_course', $_POST['_course_parrent']) ) {
    return $post->ID;
  }

  $events_meta['_course_parrent']       = $_POST['_course_parrent'];

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
add_action('save_post', 'save_course_parrent_meta', 1, 2);

