<?php
/*
Plugin Name: Qlokast Assignments
Plugin URI: http://wordpress.org
Description: Plugin for generating school related CPT's
Author: medieinstuututu
Version: 0.1
Author URI: 
*/

function post_type_assignment_init(){
  $labels = array(
        'name'                  => 'Assignments',
        'singular_name'         => 'Assignment',
    );
 
    $args = array(
        'labels'               => $labels,
        'public'               => true,
        'publicly_queryable'   => true,
        'show_ui'              => true,
        'show_in_menu'         => true,
        'query_var'            => true,
        'rewrite'              => array( 'slug' => 'assignments' ),
        'capability_type' => 'assignments',
        'capabilities' => array(
          'publish_posts' => 'publish_assignment',
          'edit_posts' => 'edit_assignment',
          'read_posts' => 'read_assignment',
          'edit_others_posts' => 'edit_others_assignments',
          'read_private_posts' => 'read_private_assignments',
          'edit_post' => 'edit_assignment',
          'delete_post' => 'delete_assignment',
          'read_post' => 'read_assignment',
        ),
        'has_archive'          => true,
        'hierarchical'         => false,
        'menu_position'        => null,
        'taxonomies'           => array('category'),
        'supports'             => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt'),
        'register_metabox_cb'  => 'add_lession_course_parrent_metaboxes',
    );

  register_post_type('assignments', $args);
}
add_action('init','post_type_assignment_init');

/* to make sure that no one can publish a publicaly visible course */
function make_all_assignments_private( $new_status, $old_status, $post ) { 
    if ( $post->post_type == 'assignments' && $new_status == 'publish' && $old_status  != $new_status ) {
        $post->post_status = 'private';
        wp_update_post( $post );
    }
} 
add_action( 'transition_post_status', 'make_all_assignments_private', 10, 3 );

/* metaboxes ==================== */
function add_lession_course_parrent_metaboxes(){
  add_meta_box('lession-course-parrent-metabox', 'Parrent', 
    'lession_course_parrent_callback', 'assignments',
    'normal','high');
}
add_action('add_meta_boxes', 'add_lession_course_parrent_metaboxes');

function lession_course_parrent_callback(){
  global $post;

  // creates the nonce we will recieve later, 
  echo '<input type="hidden" name="lession_course_parrent_noncename" 
    id="lession_course_parrent_noncename" value="'.wp_create_nonce(plugin_basename(__FILE__)).'">';

  // get the parrent if it's allready been entered
  $course_parrent = get_post(get_post_meta($post->ID,'_lession_course_parrent', true),'OBJECT');

  // The input fields, potentially prefilled with previous data
  echo '<select name="_lession_course_parrent">';

  // print the previously selected course or lession (if we are editing an allredy exiting assignment)
  if ($course_parrent->post_type != 'assignments' ){
    echo '<option value="'.$course_parrent->ID.'">'.$course_parrent->post_title.'</option>';
  } else {
    echo '<option value="">None</option>';
  }

  echo '<option value=""> --- Lessions: </option>';

  // get the available courses or lessions that this lession could choose as a parrent
  $args = array( 'post_type' => 'lession');
  $loop = new WP_Query( $args );
  while ( $loop->have_posts() ) : $loop->the_post();
    echo '<option value="'.get_the_ID().'">'.get_the_title().'</option>';
  endwhile;
  wp_reset_postdata(); 

  echo '<option value=""> --- Courses: </option>';

  // and now get the courses, in case the user wants to add this as an exam
  $args = array( 'post_type' => 'courses');
  $loop = new WP_Query( $args );
  while ( $loop->have_posts() ) : $loop->the_post();
    echo '<option value="'.get_the_ID().'">'.get_the_title().'</option>';
  endwhile;

  echo '</select>';
  wp_reset_postdata(); // so we don't affect anyone elses queries

}

function save_lession_course_parrent_meta($post_id, $post){

  if (!isset($_POST['lession_course_parrent_noncename'])){
    return $post->ID;
  }

  // verify this is the right call we're handling
  if (!wp_verify_nonce($_POST['lession_course_parrent_noncename'], plugin_basename(__FILE__) )){
    return $post->ID;
  }

  // verify permissions, 
  // drop if current user cant edit this assignment 
  if ( !current_user_can('edit_assignment', $post->ID) ) {
    return $post->ID;
  }

  // or if he cant edit the parrent he is attaching to, which might be an lession or cource
  if ( !current_user_can('edit_course', $_POST['_lession_course_parrent']) && !current_user_can('edit_lession', $_POST['_lession_course_parrent'])) {
    return $post->ID;
  }

  $events_meta['_lession_course_parrent']       = $_POST['_lession_course_parrent'];

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
add_action('save_post', 'save_lession_course_parrent_meta', 1, 2);

