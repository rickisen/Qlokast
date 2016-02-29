<?php // User Submitted Posts - Core Functions

if (!function_exists('add_action')) die();

// auto display submitted images
function usp_auto_display_images($content) {
	global $usp_options;
	
	$location = isset($usp_options['auto_display_images']) ? $usp_options['auto_display_images'] : '';
	$markup   = isset($usp_options['auto_image_markup'])   ? $usp_options['auto_image_markup'] : '';
	
	apply_filters('usp_image_args', $args = array(
			'post_type'   => 'attachment',
			'post_parent' => get_the_ID(),
			'numberposts' => -1,
		)
	);
	$attachments = get_posts($args);
	
	if ($attachments) {
		$images = '<p>';
		foreach ($attachments as $attachment) {
			
			$title  = apply_filters('usp_image_title',  $attachment->post_title);
			
			$thumb  = apply_filters('usp_image_thumb',  wp_get_attachment_image_src($attachment->ID, 'thumbnail', false));
			$medium = apply_filters('usp_image_medium', wp_get_attachment_image_src($attachment->ID, 'medium', false));
			$large  = apply_filters('usp_image_large',  wp_get_attachment_image_src($attachment->ID, 'large', false));
			$full   = apply_filters('usp_image_full',   wp_get_attachment_image_src($attachment->ID, 'full', false));
			
			$custom_size = apply_filters('usp_image_custom_size', 'custom');
			$custom = apply_filters('usp_image_custom', wp_get_attachment_image_src($attachment->ID, $custom_size, false));
			
			$images .= usp_replace_image_vars($markup, $title, $thumb, $medium, $large, $full, $custom);
		}
		$images .= '</p>';
		
		if (usp_is_public_submission()) {
			if     ($location === 'before') $content = $images . $content;
			elseif ($location === 'after')  $content = $content . $images;
		}
	}
	
	return $content;
}
add_filter('the_content', 'usp_auto_display_images');

// replace image markup variables
function usp_replace_image_vars($markup, $title, $thumb, $medium, $large, $full, $custom) {
	
	$patterns = array();
	$patterns[0] = "/%%title%%/";
	$patterns[1] = "/%%thumb%%/";
	$patterns[2] = "/%%medium%%/";
	$patterns[3] = "/%%large%%/";
	$patterns[4] = "/%%full%%/";
	$patterns[5] = "/%%custom%%/";
	$patterns[6] = "/%%width%%/";
	$patterns[7] = "/%%height%%/";
	
	$replacements = array();
	$replacements[0] = $title;
	$replacements[1] = $thumb[0];
	$replacements[2] = $medium[0];
	$replacements[3] = $large[0];
	$replacements[4] = $full[0];
	$replacements[5] = $custom[0];
	
	if (stripos($markup, '%%thumb%%')) {
		$replacements[6] = $thumb[1];
		$replacements[7] = $thumb[2];
		
	} elseif (stripos($markup, '%%medium%%')) {
		$replacements[6] = $medium[1];
		$replacements[7] = $medium[2];
		
	} elseif (stripos($markup, '%%large%%')) {
		$replacements[6] = $large[1];
		$replacements[7] = $large[2];
		
	} elseif (stripos($markup, '%%full%%')) {
		$replacements[6] = $full[1];
		$replacements[7] = $full[2];
		
	} elseif (stripos($markup, '%%custom%%')) {
		$replacements[6] = $custom[1];
		$replacements[7] = $custom[2];
	}
	
	$image = preg_replace($patterns, $replacements, $markup);
	return $image;
}

// auto display email custom field
function usp_auto_display_email($content) {
	global $usp_options;
	
	$location = isset($usp_options['auto_display_email']) ? $usp_options['auto_display_email'] : '';
	$markup   = isset($usp_options['auto_email_markup'])  ? $usp_options['auto_email_markup'] : '';
	
	$email = apply_filters('usp_email_custom_field', get_post_meta(get_the_ID(), 'user_submit_email', true));
	
	if (!empty($email)) {
		
		$markup = preg_replace('/%%email%%/', $email, $markup);
		
		if (usp_is_public_submission()) {
			if     ($location === 'before') $content = $markup . $content;
			elseif ($location === 'after')  $content = $content . $markup;
		}
	}
	
	return $content;
}
add_filter('the_content', 'usp_auto_display_email');

// auto display url custom field
function usp_auto_display_url($content) {
	global $usp_options;
	
	$location = isset($usp_options['auto_display_url']) ? $usp_options['auto_display_url'] : '';
	$markup   = isset($usp_options['auto_url_markup'])  ? $usp_options['auto_url_markup'] : '';
	
	$url = apply_filters('usp_url_custom_field', get_post_meta(get_the_ID(), 'user_submit_url', true));
	
	if (!empty($url)) {
		
		$markup = preg_replace('/%%url%%/', $url, $markup);
		
		if (usp_is_public_submission()) {
			if     ($location === 'before') $content = $markup . $content;
			elseif ($location === 'after')  $content = $content . $markup;
		}
	}
	
	return $content;
}
add_filter('the_content', 'usp_auto_display_url');




