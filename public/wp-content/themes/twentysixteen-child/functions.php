<?php

//Removes the prefix "Private" before the_title
function asv_the_title($before = '', $after = '', $echo = true) {
	$title = asv_get_the_title();
	if ( strlen($title) > 0 ) {
		$title = apply_filters('the_title', $before . $title . $after, $before, $after);
		if ( $echo )
			echo $title;
		else
			return $title;
	}
}

function asv_get_the_title($id = 0) {
	$post = get_post($id);

	$title = $post->post_title;

	return $title;
}

//Redirects logout to frontpage
add_action('wp_logout','go_home');
function go_home(){
  wp_redirect( home_url() );
  exit();
}

//Adds dynamic login/logout to menus
add_filter('wp_nav_menu_items', 'add_login_logout_link', 10, 2); 
function add_login_logout_link($items, $args) {         
	ob_start();         
	wp_loginout('index.php');         
	$loginoutlink = ob_get_contents();         
	ob_end_clean();         
	$items .= '<li>'. $loginoutlink .'</li>';     return $items; 
}