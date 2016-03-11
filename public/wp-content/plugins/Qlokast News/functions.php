<?php
/*
Plugin Name: Qlokast News
Plugin URI: http://wordpress.org
Description: Plugin for generating school related CPT's
Author: medieinstuututu
Version: 0.1
Author URI: 
*/

function post_type_news_init(){
	$labels = array(
        'name'                  => "News",
        'singular_name'         => "news",
        'menu_name'             => "News",
        'name_admin_bar'        => "News",
        'add_new'               => __( 'Add New', 'textdomain' ),
        'add_new_item'          => __( 'Add New news', 'textdomain' ),
        'new_item'              => __( 'New news', 'textdomain' ),
        'edit_item'             => __( 'Edit news', 'textdomain' ),
        'view_item'             => __( 'View news', 'textdomain' ),
        'all_items'             => __( 'All news', 'textdomain' ),
        'search_items'          => __( 'Search news', 'textdomain' ),
        'parent_item_colon'     => __( 'Parent news:', 'textdomain' ),
        'not_found'             => __( 'No news found.', 'textdomain' ),
        'not_found_in_trash'    => __( 'No news found in Trash.', 'textdomain' ),
        'featured_image'        => _x( 'news Cover Image', 'Overrides the “Featured Image” phrase for this post type. Added in 4.3', 'textdomain' ),
        'set_featured_image'    => _x( 'Set cover image', 'Overrides the “Set featured image” phrase for this post type. Added in 4.3', 'textdomain' ),
        'remove_featured_image' => _x( 'Remove cover image', 'Overrides the “Remove featured image” phrase for this post type. Added in 4.3', 'textdomain' ),
        'use_featured_image'    => _x( 'Use as cover image', 'Overrides the “Use as featured image” phrase for this post type. Added in 4.3', 'textdomain' ),
        'archives'              => _x( 'news archives', 'The post type archive label used in nav menus. Default “Post Archives”. Added in 4.4', 'textdomain' ),
        'insert_into_item'      => 'Insert into news',
        'uploaded_to_this_item' => _x( 'Uploaded to this news', 'Overrides the “Uploaded to this post”/”Uploaded to this page” phrase (used when viewing media attached to a post). Added in 4.4', 'textdomain' ),
        'filter_items_list'     => _x( 'Filter news list', 'Screen reader text for the filter links heading on the post type listing screen. Default “Filter posts list”/”Filter pages list”. Added in 4.4', 'textdomain' ),
        'items_list_navigation' => _x( 'news list navigation', 'Screen reader text for the pagination heading on the post type listing screen. Default “Posts list navigation”/”Pages list navigation”. Added in 4.4', 'textdomain' ),
        'items_list'            => _x( 'news list', 'Screen reader text for the items list heading on the post type listing screen. Default “Posts list”/”Pages list”. Added in 4.4', 'textdomain' ),
    );
 
    $args = array(
        'labels'             => $labels,
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'rewrite'            => array( 'slug' => 'news' ),
        'capability_type' => 'news',
        'capabilities' => array(
          'publish_posts' => 'publish_news',
          'edit_posts' => 'edit_news',
          'read_posts' => 'read_news',
          'edit_others_posts' => 'edit_others_news',
          'read_private_posts' => 'read_private_news',
          'edit_post' => 'edit_news',
          'delete_post' => 'delete_news',
          'delete_posts' => 'delete_news',
          'read_post' => 'read_news',
        ),
        'has_archive'        => true,
        'hierarchical'       => false,
        'menu_position'      => null,
        'taxonomies'           => array('news_tag'),
        'supports'           => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments')
    );
	register_post_type('news', $args);
}
add_action('init', 'post_type_news_init');

function create_news_taxonomy() {
  register_taxonomy('news_tag', 'news', array(
      'hierarchical' => true,
    // This array of options controls the labels displayed in the WordPress Admin UI
    'labels' => array(
      'name' => _x( 'News Tag', 'taxonomy general name' ),
      'singular_name' => _x( 'News Tag', 'taxonomy singular name' ),
      'search_items' =>  __( 'Search News Tag' ),
      'all_items' => __( 'All News Tag' ),
      'parent_item' => __( 'Parent News Tag' ),
      'parent_item_colon' => __( 'News Tags Year:' ),
      'edit_item' => __( 'Edit News Tag' ),
      'update_item' => __( 'Update News Tag' ),
      'add_new_item' => __( 'Add News Tag' ),
      'new_item_name' => __( 'New News Tags Name' ),
      'menu_name' => __( 'News Tag' ),
    ),
    // Control the slugs used for this taxonomy
      'rewrite' => array(
          'slug' => 'news_tag',
          'with_front' => false,
          'hierarchical' => true
    ),
  ));
}
add_action( 'init', 'create_news_taxonomy' );
