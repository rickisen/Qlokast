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
        'publicly_queryable'   => true,
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
          'read_post' => 'read_lession',
        ),
        'has_archive'          => true,
        'hierarchical'         => false,
        'menu_position'        => null,
        'taxonomies'           => array('category'),
        'supports'             => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt'),
        'register_metabox_cb'  => 'add_sp_metaboxes',
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
