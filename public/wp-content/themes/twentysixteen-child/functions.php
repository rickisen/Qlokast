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
