<?php 
/*
Plugin Name: Qlokast Lessons
Plugin URI: http://wordpress.org
Description: Plugin for generating school related CPT's
Author: medieinstuututu
Version: 0.1
Author URI: 
*/

function post_type_lesson_init(){
  $labels = array(
        'name'                  => 'Lessons',
        'singular_name'         => 'Lesson',
    );
 
    $args = array(
        'labels'               => $labels,
        'public'               => true,
        'show_ui'              => true,
        'show_in_menu'         => true,
        'query_var'            => true,
        'rewrite'              => array( 'slug' => 'lesson' ),
        'capability_type' => 'lesson',
        'capabilities' => array(
          'publish_posts'      => 'publish_lesson',
          'edit_posts'         => 'edit_lesson',
          'read_posts'         => 'read_lesson',
          'edit_others_posts'  => 'edit_others_lessons',
          'read_private_posts' => 'read_private_lessons',
          'edit_post'          => 'edit_lesson',
          'delete_post'        => 'delete_lesson',
          'read_post'          => 'read_lesson',
        ),
        'has_archive'          => true,
        'hierarchical'         => false,
        'menu_position'        => null,
        'taxonomies'           => array(''),
        'supports'             => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments'),
        'register_metabox_cb'  => 'add_course_parent_metaboxes',
    );

  register_post_type('lesson', $args);
}
add_action('init','post_type_lesson_init');

/* to make sure that no one can publish a publicaly visible course */
function make_all_Lessons_private( $new_status, $old_status, $post ) { 
    if ( $post->post_type == 'lesson' && $new_status == 'publish' && $old_status  != $new_status ) {
        $post->post_status = 'private';
        wp_update_post( $post );
    }
} 
add_action( 'transition_post_status', 'make_all_Lessons_private', 10, 3 );

/* metaboxes ==================== */
function add_course_parent_metaboxes(){
  add_meta_box('course-parent-metabox', 'Parent Course', 
    'course_parent_callback', 'lesson',
    'normal','high');
}
add_action('add_meta_boxes', 'add_course_parent_metaboxes');

function course_parent_callback(){
  global $post;

  // creates the nonce we will recieve later, 
  echo '<input type="hidden" name="course_parent_noncename" 
    id="course_parent_noncename" value="'.wp_create_nonce(plugin_basename(__FILE__)).'">';

  // get the parent if it's allready been entered
  $course_parent = get_post(get_post_meta($post->ID,'_course_parent', true),'OBJECT');

  // The input fields, potentially prefilled with previous data
  echo '<select name="_course_parent">';

  // print the previously selected course (if we are editing an allredy exiting lesson)
  if ($course_parent->post_type == 'courses' ){
    echo '<option value="'.$course_parent->ID.'">'.$course_parent->post_title.'</option>';
  } else {
    echo '<option value="">None</option>';
  }

  echo '<option> --- </option>';

  // get the available courses that this lesson could choose as a parent
  $args = array( 'post_type' => 'courses');
  $loop = new WP_Query( $args );
  while ( $loop->have_posts() ) : $loop->the_post();
    echo '<option value="'.get_the_ID().'">'.get_the_title().'</option>';
  endwhile;

  echo '</select>';
  wp_reset_postdata(); // so we don't affect anyone elses queries

}

function save_course_parent_meta($post_id, $post){

  if (!isset($_POST['course_parent_noncename'])){
    return $post->ID;
  }

  // verify this is the right call we're handling
  if (!wp_verify_nonce($_POST['course_parent_noncename'], plugin_basename(__FILE__) )){
    return $post->ID;
  }

  // verify permissions, 
  // drop if current user cant edit this lesson or if he cant edit this parent course
  if ( !current_user_can('edit_lesson', $post->ID) || !current_user_can('edit_course', $_POST['_course_parent']) ) {
    return $post->ID;
  }

  $events_meta['_course_parent']       = $_POST['_course_parent'];

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
add_action('save_post', 'save_course_parent_meta', 1, 2);

