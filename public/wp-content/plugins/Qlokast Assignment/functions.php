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
        'register_metabox_cb'  => 'add_sp_metaboxes',
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
