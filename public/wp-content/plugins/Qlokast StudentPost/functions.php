<?php
/*
Plugin Name: Qlokast Student Posts
Plugin URI: http://wordpress.org
Description: Plugin for generating school related CPT's
Author: medieinstuututu
Version: 0.1
Author URI: 
*/

function post_type_studentposts_init(){
  $labels = array(
        'name'                  => 'Student Posts',
        'singular_name'         => 'Student Post',
    );
 
    $args = array(
        'labels'               => $labels,
        'public'               => true,
        'show_ui'              => true,
        'show_in_menu'         => true,
        'query_var'            => true,
        'rewrite'              => array( 'slug' => 'studentposts' ),
        'capability_type' => 'studentposts',
        'capabilities' => array(
          'publish_posts'      => 'publish_studentpost',
          'edit_posts'         => 'edit_studentpost',
          'read_posts'         => 'read_studentpost',
          'edit_others_posts'  => 'edit_others_studentposts',
          'read_private_posts' => 'read_private_studentposts',
          'edit_post'          => 'edit_studentpost',
          'delete_post'        => 'delete_studentpost',
          'delete_posts'       => 'delete_studentposts',
          'read_post'          => 'read_studentpost',
        ),
        'has_archive'          => true,
        'hierarchical'         => false,
        'menu_position'        => null,
        'taxonomies'           => array('category'),
        'supports'             => array( 'title', 'editor', 'author', 'thumbnail'),
    );

  register_post_type('studentposts', $args);
}
add_action('init','post_type_studentposts_init');

/* to make sure that no one can publish a publicaly visible studentpost */
function make_all_studentposts_private( $new_status, $old_status, $post ) { 
    if ( $post->post_type == 'studentposts' && $new_status == 'publish' && $old_status  != $new_status ) {
        $post->post_status = 'private';
        wp_update_post( $post );
    }
} 
add_action( 'transition_post_status', 'make_all_studentposts_private', 10, 3 );
