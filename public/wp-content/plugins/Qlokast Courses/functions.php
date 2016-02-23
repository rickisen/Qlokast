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
          'publish_posts' => 'publish_course',
          'edit_posts' => 'edit_course',
          'read_posts' => 'read_course',
          'edit_others_posts' => 'edit_others_courses',
          'read_private_posts' => 'read_private_courses',
          'edit_post' => 'edit_course',
          'delete_post' => 'delete_course',
          'delete_posts' => 'delete_courses',
          'read_post' => 'read_course',
        ),
        'has_archive'          => true,
        'hierarchical'         => false,
        'menu_position'        => null,
        'taxonomies'           => array('category'),
        'supports'             => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt'),
        'register_metabox_cb'  => 'add_sp_metaboxes',
    );

  register_post_type('courses', $args);
}
add_action('init','post_type_course_init');

/* to make sure that no one can publish a publicaly visible course */
function make_all_courses_private( $new_status, $old_status, $post ) { 
    if ( $post->post_type == 'courses' && $new_status == 'publish' && $old_status  != $new_status ) {
        $post->post_status = 'private';
        wp_update_post( $post );
    }
} 
add_action( 'transition_post_status', 'make_all_courses_private', 10, 3 );
