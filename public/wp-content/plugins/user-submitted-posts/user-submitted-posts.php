<?php 
/*
	Plugin Name: User Submitted Posts
	Plugin URI: https://perishablepress.com/user-submitted-posts/
	Description: Enables your visitors to submit posts and images from anywhere on your site.
	Tags: submit, public, share, upload, images, post, posts, user, submit, user-submit, user-submitted, community, front-end, submissions, submission, frontend, front-end, front end, content, generated content, user generated, form, forms
	Author: Jeff Starr
	Author URI: http://monzilla.biz/
	Donate link: http://m0n.co/donate
	Contributors: specialk
	Requires at least: 4.1
	Tested up to: 4.4
	Stable tag: trunk
	Version: 20160215
	Text Domain: usp
	Domain Path: /languages/
	License: GPL v2 or later
*/

if (!defined('ABSPATH')) die();

$usp_wp_vers = '4.1';
$usp_version = '20160215';
$usp_plugin  = __('User Submitted Posts', 'usp');
$usp_options = get_option('usp_options');
$usp_path    = plugin_basename(__FILE__); // '/user-submitted-posts/user-submitted-posts.php';
$usp_logo    = plugins_url() . '/user-submitted-posts/images/usp-logo.jpg';
$usp_pro     = plugins_url() . '/user-submitted-posts/images/usp-pro.png';
$usp_wpurl   = 'https://wordpress.org/plugins/user-submitted-posts/';
$usp_homeurl = 'https://perishablepress.com/user-submitted-posts/';

$usp_post_meta_IsSubmission   = 'is_submission';
$usp_post_meta_SubmitterIp    = 'user_submit_ip';
$usp_post_meta_Submitter      = 'user_submit_name';
$usp_post_meta_SubmitterUrl   = 'user_submit_url';
$usp_post_meta_SubmitterEmail = 'user_submit_email';
$usp_post_meta_Image          = 'user_submit_image';

// includes
include ('library/template-tags.php');
include ('library/core-functions.php');

// i18n
function usp_i18n_init() {
	load_plugin_textdomain('usp', false, dirname(plugin_basename(__FILE__)) . '/languages/');
}
add_action('plugins_loaded', 'usp_i18n_init');

// require minimum version of WordPress
function usp_require_wp_version() {
	global $wp_version, $usp_path, $usp_plugin, $usp_wp_vers;
	if (version_compare($wp_version, $usp_wp_vers, '<')) {
		if (is_plugin_active($usp_path)) {
			deactivate_plugins($usp_path);
			$msg =  '<strong>'. $usp_plugin .'</strong> '. __('requires WordPress ', 'usp') . $usp_wp_vers . __(' or higher, and has been deactivated!', 'usp') .'<br />';
			$msg .= __('Please return to the ', 'usp') .'<a href="'. admin_url() .'">'. __('WordPress Admin area', 'usp') .'</a> '. __('to upgrade WordPress and try again.', 'usp');
			wp_die($msg);
		}
	}
}
if (isset($_GET['activate']) && $_GET['activate'] == 'true') {
	add_action('admin_init', 'usp_require_wp_version');
}

// enable shortcodes in widgets
if (isset($usp_options['enable_shortcodes']) && $usp_options['enable_shortcodes']) {
	// add_filter('the_content', 'do_shortcode', 10);
	add_filter('widget_text', 'do_shortcode', 10); 
}

// add new post status
add_filter ('post_stati', 'usp_addNewPostStatus');
function usp_addNewPostStatus($postStati) {
	$postStati['submitted'] = array(__('Submitted', 'usp'), __('User Submitted Posts', 'usp'), _n_noop('Submitted', 'Submitted'));
	return apply_filters('usp_post_status', $postStati);
}

// add submitted status clause
add_action ('parse_query', 'usp_addSubmittedStatusClause');
function usp_addSubmittedStatusClause($wp_query) {
	global $pagenow, $usp_post_meta_IsSubmission;
	if (isset($_GET['user_submitted']) && $_GET['user_submitted'] == '1') {
		if (is_admin() && $pagenow == 'edit.php') {
			set_query_var('meta_key', $usp_post_meta_IsSubmission);
			set_query_var('meta_value', 1);
			//set_query_var('post_status', 'pending');
		}
	}
}

// check if required field
function usp_check_required($field) {
	global $usp_options;
	if ($usp_options[$field] === 'show') return true;
	else return false;
}

// check for submitted post
add_action ('parse_request', 'usp_checkForPublicSubmission');
function usp_checkForPublicSubmission() {
	global $usp_options;
	if (isset($_POST['user-submitted-post'], $_POST['usp-nonce']) && !empty($_POST['user-submitted-post']) && wp_verify_nonce($_POST['usp-nonce'], 'usp-nonce')) {
		
		$title = __('User Submitted Post', 'usp');
		if (isset($_POST['user-submitted-title']) && ($usp_options['usp_title'] == 'show' || $usp_options['usp_title'] == 'optn')) 
			$title = sanitize_text_field($_POST['user-submitted-title']);
		
		$files = array();
		if (isset($_FILES['user-submitted-image'])) $files = $_FILES['user-submitted-image'];
		
		$ip = 'undefined';
		if ($usp_options['disable_ip_tracking']) $ip = 'not recorded';
		if (isset($_SERVER['REMOTE_ADDR']) && !$usp_options['disable_ip_tracking']) $ip = sanitize_text_field($_SERVER['REMOTE_ADDR']);
		
		$author = ''; $url = ''; $email = ''; $tags = ''; $captcha = ''; $verify = ''; $content = ''; $category = '';
		
		if (isset($_POST['user-submitted-name']))     $author   = sanitize_text_field($_POST['user-submitted-name']);
		if (isset($_POST['user-submitted-url']))      $url      = esc_url($_POST['user-submitted-url']);
		if (isset($_POST['user-submitted-email']))    $email    = sanitize_email($_POST['user-submitted-email']);
		if (isset($_POST['user-submitted-tags']))     $tags     = sanitize_text_field($_POST['user-submitted-tags']);
		if (isset($_POST['user-submitted-captcha']))  $captcha  = sanitize_text_field($_POST['user-submitted-captcha']);
		if (isset($_POST['user-submitted-verify']))   $verify   = sanitize_text_field($_POST['user-submitted-verify']);
		if (isset($_POST['user-submitted-content']))  $content  = usp_sanitize_content($_POST['user-submitted-content']);
		if (isset($_POST['user-submitted-category'])) $category = intval($_POST['user-submitted-category']);
		
		$result = usp_createPublicSubmission($title, $files, $ip, $author, $url, $email, $tags, $captcha, $verify, $content, $category);
		
		$post_id = false; 
		if (isset($result['id'])) $post_id = $result['id'];
		
		$error = false;
		if (isset($result['error'])) $error = array_filter(array_unique($result['error']));
		
		if ($post_id) {
			$redirect = empty($usp_options['redirect-url']) ? esc_url($_SERVER['REQUEST_URI']) : esc_url($usp_options['redirect-url']);
			if (!empty($_POST['redirect-override'])) $redirect = esc_url($_POST['redirect-override']);
			$redirect = remove_query_arg(array('usp-error'), $redirect);
			$redirect = add_query_arg(array('success' => 1, 'post_id' => $post_id), $redirect);
			do_action('usp_submit_success', $redirect);
		} else {
			if ($error) {
				$e = implode(',', $error);
				$e = trim($e, ',');
			} else {
				$e = 'error';
			}
			if (!empty($_POST['redirect-override'])) {
				$redirect = esc_url($_POST['redirect-override']);
				$redirect = remove_query_arg(array('success', 'post_id'), $redirect);
				$redirect = add_query_arg(array('usp-error' => $e), $redirect);
			} else {
				$redirect = esc_url($_SERVER['REQUEST_URI']);
				$redirect = remove_query_arg(array('success', 'post_id'), $redirect);
				$redirect = add_query_arg(array('usp-error' => $e), $redirect);
			}
			do_action('usp_submit_error', $redirect);
		}
		wp_redirect(esc_url_raw($redirect));
		exit();
	}
}

// sanitize post content
function usp_sanitize_content($content) {
	$allowed_tags = wp_kses_allowed_html('post');
	return wp_kses(stripslashes($content), $allowed_tags);
}

// set attachment as featured image
if (!current_theme_supports('post-thumbnails')) {
	add_theme_support('post-thumbnails');
	// set_post_thumbnail_size(130, 100, true); // width, height, hard crop
}
function usp_display_featured_image() {
	global $post, $usp_options;
	if (is_object($post) && usp_is_public_submission($post->ID)) {
		if ((!has_post_thumbnail()) && ($usp_options['usp_featured_images'] == 1)) {
			$attachments = get_posts(array(
				'post_type' => 'attachment', 
				'post_mime_type'=>'image', 
				'posts_per_page' => 0, 
				'post_parent' => $post->ID, 
				'order'=>'ASC'
			));
			if ($attachments) {
				foreach ($attachments as $attachment) {
					set_post_thumbnail($post->ID, $attachment->ID);
					break;
				}
			}
		}
	}
}
add_action('wp', 'usp_display_featured_image');

// display meta box with user info
function usp_add_meta_box() {
	global $post;
	if (usp_is_public_submission()) {
		$screens = array('post', 'page');
		
		$name  = get_post_meta($post->ID, 'user_submit_name', true);
		$email = get_post_meta($post->ID, 'user_submit_email', true);
		$url   = get_post_meta($post->ID, 'user_submit_url', true);
		$ip    = get_post_meta($post->ID, 'user_submit_ip', true); 
		
		if (!empty($name) || !empty($email) || !empty($url) || !empty($ip)) {
			foreach ($screens as $screen) {
				add_meta_box('usp_section_id', __('User Submitted Post Info', 'usp'), 'usp_meta_box_callback', $screen);
			}
		}
	}
}
add_action('add_meta_boxes', 'usp_add_meta_box');

function usp_meta_box_callback($post) {
	global $usp_options; 
	if (usp_is_public_submission()) {
		wp_nonce_field('usp_meta_box_nonce', 'usp_meta_box_nonce');
		
		$name  = get_post_meta($post->ID, 'user_submit_name', true);
		$email = get_post_meta($post->ID, 'user_submit_email', true);
		$url   = get_post_meta($post->ID, 'user_submit_url', true);
		$ip    = get_post_meta($post->ID, 'user_submit_ip', true); 
		
		if (!empty($name) || !empty($email) || !empty($url) || !empty($ip)) {
			echo '<ul style="margin-left:24px;list-style:square outside;">';
			if (!empty($name))  echo '<li>'. __('Submitter Name: ', 'usp')  . $name  .'</li>';
			if (!empty($email)) echo '<li>'. __('Submitter Email: ', 'usp') . $email .'</li>';
			if (!empty($url))   echo '<li>'. __('Submitter URL: ', 'usp')   . $url   .'</li>';
			if (!empty($ip) && !$usp_options['disable_ip_tracking']) echo '<li>'. __('Submitter IP: ', 'usp') . $ip .'</li>';
			echo '</ul>';
		}
	}
}

// js vars
function usp_js_vars() { 
	global $usp_options; 
	
	$usp_response = $usp_options['usp_response']; 
	$include_js   = $usp_options['usp_include_js']; 
	$display_url  = $usp_options['usp_display_url'];
	$usp_casing   = $usp_options['usp_casing'];
	
	$protocol = 'http://';
	if (is_ssl()) $protocol = 'https://';
	
	$current_url = esc_url(trailingslashit($protocol . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI']));
	$current_url = remove_query_arg(array('submission-error', 'error', 'success', 'post_id'), $current_url);
	
	$print_casing = 'false';
	if ($usp_casing) $print_casing = 'true';
	
	$display = false;
	if ($display_url !== '') {
		if (($display_url == $current_url) && ($include_js == true)) $display = true;
	} else {
		if ($include_js == true) $display = true;
	}
	if (!is_admin()) {
		if ($display) : ?>
		
		<script type="text/javascript">
			window.ParsleyConfig = { excluded: ".exclude" };
			var usp_case_sensitivity = <?php echo json_encode($print_casing); ?>;
			var usp_challenge_response = <?php echo json_encode($usp_response); ?>;
		</script>
<?php endif;
	}
}
add_action('wp_print_scripts','usp_js_vars');

// enqueue script and style
if (!function_exists('usp_enqueueResources')) {
	function usp_enqueueResources() {
		global $usp_options, $usp_version;
		
		$min_images  = $usp_options['min-images'];
		$include_js  = $usp_options['usp_include_js'];
		$form_type   = $usp_options['usp_form_version'];
		$display_url = $usp_options['usp_display_url'];
		
		$protocol = 'http://';
		if (is_ssl()) $protocol = 'https://';
		
		$current_url = esc_url(trailingslashit($protocol . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI']));
		$current_url = remove_query_arg(array('submission-error', 'error', 'success', 'post_id'), $current_url);
		
		$base_url = plugins_url() .'/'. basename(dirname(__FILE__));
		$dir_path = plugin_dir_path(__FILE__);
		
		$custom_css  = '/custom/usp.css';
		$default_css = '/resources/usp.css';
		$usp_css     = $base_url . $default_css;
		
		if ($form_type == 'custom' && file_exists($dir_path . $custom_css)) $usp_css = $base_url . $custom_css;
		
		$display_js = false;
		$display_css = false;
		
		if (empty($display_url) || $display_url == $current_url) {
			if ($include_js == true) $display_js = true;
			if ($form_type !== 'disable') $display_css = true;
		}
		if (!is_admin()) {
			if ($display_css) {
				wp_enqueue_style('usp_style', $usp_css, false, null, 'all');
			}
			if ($display_js) {
				wp_enqueue_script('usp_cookie',  $base_url .'/resources/jquery.cookie.js',      array('jquery'), null);
				wp_enqueue_script('usp_parsley', $base_url .'/resources/jquery.parsley.min.js', array('jquery'), null);
				wp_enqueue_script('usp_core',    $base_url .'/resources/jquery.usp.core.js',    array('jquery'), null);
				if ($min_images > 0) {
					wp_enqueue_script('usp_files', $base_url .'/resources/jquery.usp.files.js', array('jquery'), null);
				}
			}
		}
	}
	add_action('wp_enqueue_scripts', 'usp_enqueueResources');
}

//  enqueue admin script and style
function usp_load_admin_styles($hook) {
	global $usp_version, $pagenow;
	/*
		wp_enqueue_style($handle, $src, $deps, $ver, $media)
		wp_enqueue_script($handle, $src, $deps, $ver, $in_footer)
		$_GET['page'] = user-submitted-posts/user-submitted-posts.php
	*/
	if (is_admin()) {
		
		$base = plugins_url() .'/'. basename(dirname(__FILE__));
		
		if ($hook == 'settings_page_user-submitted-posts/user-submitted-posts') {
			wp_enqueue_style('usp_admin_styles', $base .'/resources/usp-admin.css', false, $usp_version, 'all');
			wp_enqueue_script('usp_admin_script', $base .'/resources/jquery.usp.admin.js', array('jquery'), $usp_version, false);
		}
		if ($pagenow == 'edit.php') {
			wp_enqueue_style('usp_posts_styles', $base .'/resources/usp-posts.css', false, $usp_version, 'all');
		}
	}	
}
add_action('admin_enqueue_scripts', 'usp_load_admin_styles');

// add styles for WP rich text editor
function usp_editor_style($mce_css){
    $mce_css .= ', '. plugins_url('resources/editor-style.css', __FILE__);
    return $mce_css;
}
add_filter('mce_css', 'usp_editor_style');

// shortcode
function usp_display_form($atts = array(), $content = null) {
	global $usp_options;
	
	$default = WP_PLUGIN_DIR .'/'. basename(dirname(__FILE__)) .'/views/submission-form.php';
	$custom  = WP_PLUGIN_DIR .'/'. basename(dirname(__FILE__)) .'/custom/submission-form.php';
	
	if ($atts === true) $redirect = usp_currentPageURL();
	
	ob_start();
	if ($usp_options['usp_form_version'] == 'custom' && file_exists($custom)) include($custom);
	else include($default);
	return apply_filters('usp_form_shortcode', ob_get_clean());
}
add_shortcode ('user-submitted-posts', 'usp_display_form');

// template tag
function user_submitted_posts() {
	echo usp_display_form();
}

// add usp link
add_action ('restrict_manage_posts', 'usp_outputUserSubmissionLink');
function usp_outputUserSubmissionLink() {
	global $pagenow;
	if ($pagenow == 'edit.php') {
		// echo '<a id="usp_admin_filter_posts" class="button" href="'. admin_url('edit.php?post_status=pending&amp;user_submitted=1') .'">'. __('USP', 'usp') .'</a>';
		echo '<a id="usp_admin_filter_posts" class="button" href="'. admin_url('edit.php?user_submitted=1') .'" title="Show USP Posts">'. __('USP', 'usp') .'</a>';
	}
}

// replace author
add_filter ('the_author', 'usp_replaceAuthor');
function usp_replaceAuthor($author) {
	global $post, $usp_options, $usp_post_meta_IsSubmission, $usp_post_meta_Submitter;

	$isSubmission     = get_post_meta($post->ID, $usp_post_meta_IsSubmission, true);
	$submissionAuthor = get_post_meta($post->ID, $usp_post_meta_Submitter, true);

	if ($isSubmission && !empty($submissionAuthor)) $author = $submissionAuthor;
	
	return apply_filters('usp_post_author', $author);
}

// get author
function usp_get_author($author) {
	global $usp_options;
	$error = false;
	$author_id = $usp_options['author'];
	if (!empty($author)) {
		if ($usp_options['usp_use_author'] == true) {
			$author_info = get_user_by('login', $author);
			if ($author_info) {
				$author_id = $author_info->ID;
				$author = get_the_author_meta('display_name', $author_id);
			} else {
				$error = 'required-login';
			}
		}
	} else {
		if ($usp_options['usp_use_author'] == true) {
			$error = 'required-login';
		} else {
			if ($usp_options['usp_name'] == 'show') {
				$error = 'required-name';
			}
		}
	}
	$author_data = array('author' => $author, 'author_id' => $author_id, 'error' => $error);
	return $author_data;
}

// exif_imagetype support
if (!function_exists('exif_imagetype')) {
	function exif_imagetype($filename) {
		if ((list($width, $height, $type, $attr) = getimagesize($filename)) !== false) { 
			return $type;
		} 
		return false; 
	} 
} 

function usp_check_images($files) {
	global $usp_options;
	
	$temp = false; $errr = false; $error = array();
	
	if (isset($files['tmp_name'])) $temp = array_filter($files['tmp_name']);
	if (isset($files['error']))    $errr = array_filter($files['error']);
	
	$file_count = 0;
	if (!empty($temp)) {
		foreach ($temp as $key => $value) if (is_uploaded_file($value)) $file_count++;
	}
	if ($usp_options['usp_images'] == 'show') {
		
		if ($file_count < $usp_options['min-images']) $error[] = 'file-min';
		if ($file_count > $usp_options['max-images']) $error[] = 'file-max';
		
		for ($i = 0; $i < $file_count; $i++) {
			
			$image = @getimagesize($temp[$i]);
			
			if (false === $image) {
				$error[] = 'file-type';
				break;
			} else {
				if (isset($temp[$i]) && !exif_imagetype($temp[$i])) {
					$error[] = 'file-type';
					break;
				}
				if (isset($image[0]) && !usp_width_min($image[0])) {
					$error[] = 'width-min';
					break;
				}
				if (isset($image[0]) && !usp_width_max($image[0])) {
					$error[] = 'width-max';
					break;
				}
				if (isset($image[1]) && !usp_height_min($image[1])) {
					$error[] = 'height-min';
					break;
				}
				if (isset($image[1]) && !usp_height_max($image[1])) {
					$error[] = 'height-max';
					break;
				}
				if (isset($errr[$i]) && $errr[$i] == 4) {
					$error[] = 'file-error';
					break;
				}
			}
		}
	} else {
		$files = false;
	}
	$file_data = array('error' => $error, 'file_count' => $file_count);
	return $file_data;
}

// prepare submitted post
function usp_prepare_post($title, $content, $author_id, $author, $ip) {
	global $usp_options, $usp_post_meta_Submitter, $usp_post_meta_SubmitterIp;
	
	$postData = array();
	$postData['post_title']   = $title;
	$postData['post_content'] = $content;
	$postData['post_author']  = $author_id;
	$postData['post_status']  = apply_filters('usp_post_status', 'pending');
	
	$numberApproved = $usp_options['number-approved'];
	
	if ($numberApproved == 0) {
		$postData['post_status'] = apply_filters('usp_post_publish', 'publish');
	} elseif ($numberApproved == -1) {
		$postData['post_status']  = apply_filters('usp_post_moderate', 'pending');
	} elseif ($numberApproved == -2) {
		$postData['post_status']  = apply_filters('usp_post_draft', 'draft');
	} else {
		$posts = get_posts(array('post_status' => 'publish', 'meta_key' => $usp_post_meta_Submitter, 'meta_value' => $author));
		$counter = 0;
		foreach ($posts as $post) {
			$submitterName = get_post_meta($post->ID, $usp_post_meta_Submitter, true);
			$submitterIp   = get_post_meta($post->ID, $usp_post_meta_SubmitterIp, true);
			if ($submitterName == $author && $submitterIp == $ip) $counter++;
		}
		if ($counter >= $numberApproved) $postData['post_status'] = apply_filters('usp_post_approve', 'publish');
	}
	return apply_filters('usp_post_data', $postData);
}

// check for duplicate posts
function usp_check_duplicates($title) {
	global $usp_options;
	if ($usp_options['titles_unique']) {
		$check_post = get_page_by_title($title, OBJECT, 'post');
		if ($check_post && $check_post->ID) return false;
	}
	return true;
}

// process submission
function usp_createPublicSubmission($title, $files, $ip, $author, $url, $email, $tags, $captcha, $verify, $content, $category) {
	global $usp_options, $usp_post_meta_IsSubmission, $usp_post_meta_SubmitterIp, $usp_post_meta_Submitter, $usp_post_meta_SubmitterUrl, $usp_post_meta_SubmitterEmail, $usp_post_meta_Image;
	
	// check errors
	$newPost = array('id' => false, 'error' => false);
	
	$author_data        = usp_get_author($author);
	$author             = $author_data['author'];
	$author_id          = $author_data['author_id'];
	$newPost['error'][] = $author_data['error'];
	
	$file_data = usp_check_images($files, $newPost);
	$file_count       = $file_data['file_count'];
	$newPost['error'] = array_unique(array_merge($file_data['error'], $newPost['error']));
	
	if (isset($usp_options['usp_title'])    && ($usp_options['usp_title']    == 'show') && empty($title))    $newPost['error'][] = 'required-title';
	if (isset($usp_options['usp_url'])      && ($usp_options['usp_url']      == 'show') && empty($url))      $newPost['error'][] = 'required-url';
	if (isset($usp_options['usp_tags'])     && ($usp_options['usp_tags']     == 'show') && empty($tags))     $newPost['error'][] = 'required-tags';
	if (isset($usp_options['usp_category']) && ($usp_options['usp_category'] == 'show') && empty($category)) $newPost['error'][] = 'required-category';
	if (isset($usp_options['usp_content'])  && ($usp_options['usp_content']  == 'show') && empty($content))  $newPost['error'][] = 'required-content';
	
	if (isset($usp_options['usp_captcha']) && ($usp_options['usp_captcha'] == 'show') && !usp_spamQuestion($captcha)) $newPost['error'][] = 'required-captcha';
	if (isset($usp_options['usp_email'])   && ($usp_options['usp_email']   == 'show') && !usp_validateEmail($email))  $newPost['error'][] = 'required-email';
	
	if (isset($usp_options['titles_unique']) && $usp_options['titles_unique'] && !usp_check_duplicates($title)) $newPost['error'][] = 'duplicate-title';
	if (!empty($verify)) $newPost['error'][] = 'spam-verify';
	
	foreach ($newPost['error'] as $e) {
		if (!empty($e)) {
			unset($newPost['id']);
			return $newPost;
		}
	}
	
	// submit post
	$postData = usp_prepare_post($title, $content, $author_id, $author, $ip);
	
	do_action('usp_insert_before', $postData);
	$newPost['id'] = wp_insert_post($postData);
	do_action('usp_insert_after', $newPost);
	
	if ($newPost['id']) {
		$post_id = $newPost['id'];
		wp_set_post_tags($post_id, $tags);
		wp_set_post_categories($post_id, array($category));
		usp_send_mail_alert($post_id, $title);
		do_action('usp_files_before', $files);
		
		$attach_ids = array();
		if ($files && $file_count > 0) {
			usp_include_deps();
			for ($i = 0; $i < $file_count; $i++) {
				
				$key = apply_filters('usp_file_key', 'user-submitted-image-{$i}');
				
				$_FILES[$key] = array();
				$_FILES[$key]['name']     = $files['name'][$i];
				$_FILES[$key]['tmp_name'] = $files['tmp_name'][$i];
				$_FILES[$key]['type']     = $files['type'][$i];
				$_FILES[$key]['error']    = $files['error'][$i];
				$_FILES[$key]['size']     = $files['size'][$i];
				
				$attach_id = media_handle_upload($key, $post_id);
				
				if (!is_wp_error($attach_id) && wp_attachment_is_image($attach_id)) {
					$attach_ids[] = $attach_id;
					add_post_meta($post_id, $usp_post_meta_Image, wp_get_attachment_url($attach_id));
				} else {
					wp_delete_attachment($attach_id);
					wp_delete_post($post_id, true);
					$newPost['error'][] = 'file-upload';
					unset($newPost['id']);
					return $newPost;
				}
			}
		}
		do_action('usp_files_after', $attach_ids);
		update_post_meta($post_id, $usp_post_meta_IsSubmission, true);
		
		if (!empty($author)) update_post_meta($post_id, $usp_post_meta_Submitter,      $author);
		if (!empty($url))    update_post_meta($post_id, $usp_post_meta_SubmitterUrl,   $url);
		if (!empty($email))  update_post_meta($post_id, $usp_post_meta_SubmitterEmail, $email);
		if (!empty($ip) && !$usp_options['disable_ip_tracking']) update_post_meta($post_id, $usp_post_meta_SubmitterIp, $ip);  
	} else {
		$newPost['error'][] = 'post-fail';
	}
	return apply_filters('usp_new_post', $newPost);
}

// include wp media files
function usp_include_deps() {
	if (!function_exists('media_handle_upload')) {
		require_once (ABSPATH .'/wp-admin/includes/media.php');
		require_once (ABSPATH .'/wp-admin/includes/file.php');
		require_once (ABSPATH .'/wp-admin/includes/image.php');
	}
}

// image min/max width & height
function usp_width_min($width) {
	global $usp_options;
	if (intval($width) < intval($usp_options['min-image-width'])) return false;
	else return true;
}
function usp_width_max($width) {
	global $usp_options;
	if (intval($width) > intval($usp_options['max-image-width'])) return false;
	else return true;
}
function usp_height_min($height) {
	global $usp_options;
	if (intval($height) < intval($usp_options['min-image-height'])) return false;
	else return true;
}
function usp_height_max($height) {
	global $usp_options;
	if (intval($height) > intval($usp_options['max-image-height'])) return false;
	else return true;
}

// validate email
function usp_validateEmail($email) {
	if (!is_email($email)) return false;
	$bad_stuff = array("\r", "\n", "mime-version", "content-type", "cc:", "to:");
	foreach ($bad_stuff as $bad) {
		if (strpos(strtolower($email), strtolower($bad)) !== false) {
			return false;
		}
	}
	return true;
}

// send email alert
function usp_send_mail_alert($post_id, $title) {
	global $usp_options;
	
	if ($usp_options['usp_email_alerts'] == true) {
		
		$from       = get_bloginfo('admin_email');
		$blog_url   = get_bloginfo('url');         // %%blog_url%%
		$blog_name  = get_bloginfo('name');        // %%blog_name%%
		$post_url   = get_permalink($post_id);     // %%post_url%%
		$admin_url  = admin_url();                 // %%admin_url%%
		$post_title = $title;                      // %%post_title%%
		
		$patterns = array();
		$patterns[0]  = "/%%blog_url%%/";
		$patterns[1]  = "/%%blog_name%%/";
		$patterns[2]  = "/%%post_url%%/";
		$patterns[3]  = "/%%admin_url%%/";
		$patterns[4]  = "/%%post_title%%/";
		
		$replacements = array();
		$replacements[0]  = $blog_url;
		$replacements[1]  = $blog_name;
		$replacements[2]  = $post_url;
		$replacements[3]  = $admin_url;
		$replacements[4]  = $post_title;
		
		$subject_default = $blog_name .': New user-submitted post!';
		$subject = (isset($usp_options['email_alert_subject']) && !empty($usp_options['email_alert_subject'])) ? $usp_options['email_alert_subject'] : $subject_default;
		$subject = preg_replace($patterns, $replacements, $subject);
		$subject = apply_filters('usp_mail_subject', $subject);
		
		$message_default = 'Hello, there is a new user-submitted post:'. "\r\n\n" . 'Title: '. $post_title . "\r\n\n" .'Visit Admin Area: '. $admin_url;
		$message = (isset($usp_options['email_alert_message']) && !empty($usp_options['email_alert_message'])) ? $usp_options['email_alert_message'] : $message_default;
		$message = preg_replace($patterns, $replacements, $message);
		$message = apply_filters('usp_mail_message', $message);
		
		$headers  = 'X-Mailer: User Submitted Posts'. "\n";
		$headers .= 'From: '. $blog_name .' <'. $from .'>'. "\n";
		$headers .= 'Reply-To: '. $blog_name .' <'. $from .'>'. "\n";
		$headers .= 'Content-Type: text/plain; charset='. get_option('blog_charset', 'UTF-8') . "\n";
		
		$address = $usp_options['usp_email_address'];
		
		if (!empty($address)) {
			$return = true;
			$address = explode(',', $address);
			foreach ($address as $to) {
				$to = trim($to);
				if (wp_mail($to, $subject, $message, $headers)) $return = true;
				else $return = false;
			}
			if ($return) return true;
		}
	}
	return false;
}

// challenge question
function usp_spamQuestion($input) {
	global $usp_options;
	$response = $usp_options['usp_response'];
	$response = sanitize_text_field($response);
	if ($usp_options['usp_casing'] == false) {
		return (strtoupper($input) == strtoupper($response));
	} else {
		return ($input == $response);
	}
}

// current url
function usp_currentPageURL() {
	$pageURL = 'http';
	if ($_SERVER["HTTPS"] == "on") {
		$pageURL .= "s";
	}
	$pageURL .= "://";
	if ($_SERVER["SERVER_PORT"] != "80") {
		$pageURL .= $_SERVER["SERVER_NAME"].":".$_SERVER["SERVER_PORT"].$_SERVER["REQUEST_URI"];
	} else {
		$pageURL .= $_SERVER["SERVER_NAME"].$_SERVER["REQUEST_URI"];
	}
	do_action('usp_current_page', $pageURL);
	return esc_url($pageURL);
}

// error messages
function usp_error_message() {
	global $usp_options;
	
	$min = $usp_options['min-images'];
	$max = $usp_options['max-images'];
	
	if ((int) $min > 1) $min = ' ('. $min . __(' files required', 'usp') .')';
	else $min = ' ('. $min . __(' file required', 'usp') .')';
	
	if ((int) $max > 1) $max = ' (limit: '. $max . __(' files', 'usp') .')';
	else $max = ' (limit: '. $max . __(' file', 'usp') .')';
	
	$min_width  = ' ('. $usp_options['min-image-width']  . __(' pixels', 'usp') .')';
	$max_width  = ' ('. $usp_options['max-image-width']  . __(' pixels', 'usp') .')';
	$min_height = ' ('. $usp_options['min-image-height'] . __(' pixels', 'usp') .')';
	$max_height = ' ('. $usp_options['max-image-height'] . __(' pixels', 'usp') .')';
	
	if (!empty($usp_options['error-message'])) $general_error = $usp_options['error-message'];
	else $general_error = __('An error occurred. Please go back and try again.', 'usp');
	
	if (isset($_GET['usp-error']) && !empty($_GET['usp-error'])) {
		$error_string = sanitize_text_field($_GET['usp-error']);
		$error_array = explode(',', $error_string);
		$error = array();
		foreach ($error_array as $e) {
			if     ($e == 'required-login')    $error[] = __('User login required', 'usp');
			elseif ($e == 'required-name')     $error[] = __('User name required', 'usp');
			elseif ($e == 'required-title')    $error[] = __('Post title required', 'usp');
			elseif ($e == 'required-url')      $error[] = __('Post url required', 'usp');
			elseif ($e == 'required-tags')     $error[] = __('Post tags required', 'usp');
			elseif ($e == 'required-category') $error[] = __('Post category required', 'usp');
			elseif ($e == 'required-content')  $error[] = __('Post content required', 'usp');
			elseif ($e == 'required-captcha')  $error[] = __('Correct captcha required', 'usp');
			elseif ($e == 'required-email')    $error[] = __('User email required', 'usp');
			elseif ($e == 'spam-verify')       $error[] = __('Non-empty value for hidden field', 'usp');
			elseif ($e == 'file-min')          $error[] = __('Minimum number of images not met', 'usp') . $min;
			elseif ($e == 'file-max')          $error[] = __('Maximum number of images exceeded ', 'usp') . $max;
			elseif ($e == 'width-min')         $error[] = __('Minimum image width not met', 'usp') . $min_width;
			elseif ($e == 'width-max')         $error[] = __('Image width exceeds maximum', 'usp') . $max_width;
			elseif ($e == 'height-min')        $error[] = __('Minimum image height not met', 'usp') . $min_height;
			elseif ($e == 'height-max')        $error[] = __('Image height exceeds maximum', 'usp') . $max_height;
			elseif ($e == 'file-type')         $error[] = __('File type not allowed (please upload images only)', 'usp');
			elseif ($e == 'file-error')        $error[] = __('The selected files could not be uploaded to the server', 'usp'); // general file(s) error
			
			// check permissions on /uploads/ directory, check error log for the following error:
			// PHP Warning: mysql_real_escape_string() expects parameter 1 to be string, object given in /wp-includes/wp-db.php
			elseif ($e == 'file-upload')       $error[] = __('The file(s) could not be uploaded', 'usp'); 
			
			elseif ($e == 'post-fail')         $error[] = __('Post not created. Please contact the site administrator for help.', 'usp');
			elseif ($e == 'duplicate-title')   $error[] = __('Duplicate post title. Please try again.', 'usp');
			
			elseif ($e == 'error')             $error[] = $general_error;
		}
		$output = '';
		foreach ($error as $e) {
			$output .= "\t\t\t".'<div class="usp-error">'. __('Error: ', 'usp') . $e .'</div>'."\n";
		}
		$return = '<div id="usp-error-message">'."\n". $output ."\t\t".'</div>'."\n";
		return apply_filters('usp_error_message', $return);
	}
	return false;
}

// display settings link on plugin page
add_filter('plugin_action_links', 'usp_plugin_action_links', 10, 2);
function usp_plugin_action_links($links, $file) {
	global $usp_path;
	if ($file == $usp_path) {
		$usp_links = '<a href="'. get_admin_url() .'options-general.php?page='. $usp_path .'">'. __('Settings', 'usp') .'</a>';
		array_unshift($links, $usp_links);
	}
	return $links;
}

// rate plugin link
function add_usp_links($links, $file) {
	if ($file == plugin_basename(__FILE__)) {
		$rate_url = 'http://wordpress.org/support/view/plugin-reviews/'. basename(dirname(__FILE__)) .'?rate=5#postform';
		$links[]  = '<a target="_blank" href="'. $rate_url .'" title="Click here to rate and review this plugin on WordPress.org">Rate this plugin</a>';
		$links[]  = '<strong><a target="_blank" href="https://plugin-planet.com/usp-pro/" title="Get USP Pro">Go Pro &raquo;</a></strong>';
	}
	return $links;
}
add_filter('plugin_row_meta', 'add_usp_links', 10, 2);

// delete plugin settings
function usp_delete_plugin_options() {
	delete_option('usp_options');
}
if ($usp_options['default_options'] == 1) {
	register_uninstall_hook (__FILE__, 'usp_delete_plugin_options');
}

// define default settings
register_activation_hook (__FILE__, 'usp_add_defaults');
function usp_add_defaults() {
	$currentUser = wp_get_current_user();
	$admin_mail = get_bloginfo('admin_email');
	$tmp = get_option('usp_options');
	if(($tmp['default_options'] == '1') || (!is_array($tmp))) {
		$arr = array(
			'version_alert'       => 0,
			'default_options'     => 0,
			'author'              => $currentUser->ID,
			'categories'          => array(get_option('default_category')),
			'number-approved'     => -1,
			'redirect-url'        => '',
			'error-message'       => __('There was an error. Please ensure that you have added a title, some content, and that you have uploaded only images.', 'usp'),
			'min-images'          => 0,
			'max-images'          => 1,
			'min-image-height'    => 0,
			'min-image-width'     => 0,
			'max-image-height'    => 1500,
			'max-image-width'     => 1500,
			'usp_name'            => __('show', 'usp'),
			'usp_url'             => __('show', 'usp'),
			'usp_email'           => __('hide', 'usp'),
			'usp_title'           => __('show', 'usp'),
			'usp_tags'            => __('show', 'usp'),
			'usp_category'        => __('show', 'usp'),
			'usp_images'          => __('hide', 'usp'),
			'upload-message'      => __('Please select your image(s) to upload.', 'usp'),
			'usp_question'        => '1 + 1 =',
			'usp_response'        => '2',
			'usp_casing'          => 0,
			'usp_captcha'         => __('show', 'usp'),
			'usp_content'         => __('show', 'usp'),
			'success-message'     => __('Success! Thank you for your submission.', 'usp'),
			'usp_form_version'    => 'current',
			'usp_email_alerts'    => 1,
			'usp_email_address'   => $admin_mail,
			'usp_use_author'      => 0,
			'usp_use_url'         => 0,
			'usp_use_cat'         => 0,
			'usp_use_cat_id'      => '',
			'usp_include_js'      => 1,
			'usp_display_url'     => '',
			'usp_form_content'    => '',
			'usp_richtext_editor' => 0,
			'usp_featured_images' => 0,
			'usp_add_another'     => '',
			'disable_required'    => 0,
			'titles_unique'       => 0,
			'enable_shortcodes'   => 0,
			'disable_ip_tracking' => 0,
			'email_alert_subject' => '',
			'email_alert_message' => '',
			'auto_display_images' => 'disable',
			'auto_display_email'  => 'disable', 
			'auto_display_url'    => 'disable', 
			'auto_image_markup'   => '<a href="%%full%%"><img src="%%thumb%%" width="%%width%%" height="%%height%%" alt="%%title%%" style="display:inline-block;" /></a> ',
			'auto_email_markup'   => '<p><a href="mailto:%%email%%">'. __('Email', 'usp') .'</a></p>',
			'auto_url_markup'     => '<p><a href="%%url%%">'. __('URL', 'usp') .'</a></p>',
		);
		update_option('usp_options', $arr);
	}
}

// define style options
$usp_form_version = array(
	'current' => array(
		'value' => 'current',
		'label' => __('HTML5 Form + Default CSS <small>(Recommended)</small>', 'usp')
	),
	'disable' => array(
		'value' => 'disable',
		'label' => __('HTML5 Form + Disable CSS <small>(Provide your own styles)</small>', 'usp')
	),
	'custom' => array(
		'value' => 'custom',
		'label' => __('Custom Form + Custom CSS <small>(Provide your own form template &amp; styles)</small>', 'usp')
	),
);

// define image-display location
$usp_image_display = array(
	'before' => array(
		'value' => 'before',
		'label' => __('Auto-display before post content', 'usp')
	),
	'after' => array(
		'value' => 'after',
		'label' => __('Auto-display after post content', 'usp')
	),
	'disable' => array(
		'value' => 'disable',
		'label' => __('Do not auto-display submitted images', 'usp')
	),
);

// define email-display location
$usp_email_display = array(
	'before' => array(
		'value' => 'before',
		'label' => __('Auto-display before post content', 'usp')
	),
	'after' => array(
		'value' => 'after',
		'label' => __('Auto-display after post content', 'usp')
	),
	'disable' => array(
		'value' => 'disable',
		'label' => __('Do not auto-display submitted email', 'usp')
	),
);

// define url-display location
$usp_url_display = array(
	'before' => array(
		'value' => 'before',
		'label' => __('Auto-display before post content', 'usp')
	),
	'after' => array(
		'value' => 'after',
		'label' => __('Auto-display after post content', 'usp')
	),
	'disable' => array(
		'value' => 'disable',
		'label' => __('Do not auto-display submitted URL', 'usp')
	),
);

// form display options
function usp_form_display_options() {
	global $usp_options, $usp_form_version;
	if (!isset($checked)) $checked = '';
	foreach ($usp_form_version as $usp_form) {
		$radio_setting = $usp_options['usp_form_version'];
		if ('' != $radio_setting) {
			if ($usp_options['usp_form_version'] == $usp_form['value']) {
				$checked = 'checked="checked"';
			} else {
				$checked = '';
			}
		} ?>
		<div class="mm-radio-inputs">
			<input type="radio" name="usp_options[usp_form_version]" class="usp<?php if ($usp_form['value'] == 'custom') echo '-custom'; ?>-form" value="<?php esc_attr_e($usp_form['value']); ?>" <?php echo $checked; ?> /> 
			<?php echo $usp_form['label']; ?>
		</div>
<?php }
}

// auto display options
function usp_auto_display_options($item) {
	global $usp_options, $usp_image_display, $usp_email_display, $usp_url_display;
	
	if ($item === 'images') {
		$array = $usp_image_display;
		$key = 'auto_display_images';
		
	} elseif ($item === 'email') {
		$array = $usp_email_display;
		$key = 'auto_display_email';
		
	} elseif ($item === 'url') {
		$array = $usp_url_display;
		$key = 'auto_display_url';
	}
	if (!isset($checked)) $checked = '';
	
	foreach ($array as $arr) {
		$radio_setting = $usp_options[$key];
		if ('' != $radio_setting) {
			if ($usp_options[$key] == $arr['value']) {
				$checked = 'checked="checked"';
			} else {
				$checked = '';
			}
		} ?>
		<div class="mm-radio-inputs">
			<input type="radio" name="usp_options[<?php echo $key; ?>]" value="<?php esc_attr_e($arr['value']); ?>" <?php echo $checked; ?> /> 
			<?php echo $arr['label']; ?>
		</div>
<?php }
}

// whitelist settings
add_action ('admin_init', 'usp_init');
function usp_init() {
	register_setting('usp_plugin_options', 'usp_options', 'usp_validate_options');
}

// http://bit.ly/1MJWrau
function usp_filter_safe_styles($styles) {
	 $styles[] = 'display'; 
	 return $styles;
}
add_filter('safe_style_css', 'usp_filter_safe_styles');

// sanitize and validate input
function usp_validate_options($input) {
	global $usp_options, $usp_form_version, $usp_image_display, $usp_email_display, $usp_url_display;
	
	if (!isset($input['version_alert'])) $input['version_alert'] = null;
	$input['version_alert'] = ($input['version_alert'] == 1 ? 1 : 0);
	
	if (!isset($input['default_options'])) $input['default_options'] = null;
	$input['default_options'] = ($input['default_options'] == 1 ? 1 : 0);
	
	$input['categories']       = is_array($input['categories']) && !empty($input['categories']) ? array_unique($input['categories']) : array(get_option('default_category'));
	$input['number-approved']  = is_numeric($input['number-approved']) ? intval($input['number-approved']) : -1;
	
	$input['min-images']       = is_numeric($input['min-images']) ? intval($input['min-images']) : $input['max-images'];
	$input['max-images']       = (is_numeric($input['max-images']) && ($usp_options['min-images'] <= abs($input['max-images']))) ? intval($input['max-images']) : $usp_options['max-images'];
	
	$input['min-image-height'] = is_numeric($input['min-image-height']) ? intval($input['min-image-height']) : $usp_options['min-image-height'];
	$input['min-image-width']  = is_numeric($input['min-image-width'])  ? intval($input['min-image-width'])  : $usp_options['min-image-width'];
	
	$input['max-image-height'] = (is_numeric($input['max-image-height']) && ($usp_options['min-image-height'] <= $input['max-image-height'])) ? intval($input['max-image-height']) : $usp_options['max-image-height'];
	$input['max-image-width']  = (is_numeric($input['max-image-width'])  && ($usp_options['min-image-width']  <= $input['max-image-width']))  ? intval($input['max-image-width'])  : $usp_options['max-image-width'];
	
	if (!isset($input['usp_form_version'])) $input['usp_form_version'] = null;
	if (!array_key_exists($input['usp_form_version'], $usp_form_version)) $input['usp_form_version'] = null;
	
	if (!isset($input['auto_display_images'])) $input['auto_display_images'] = null;
	if (!array_key_exists($input['auto_display_images'], $usp_image_display)) $input['auto_display_images'] = null;
	
	if (!isset($input['auto_display_email'])) $input['auto_display_email'] = null;
	if (!array_key_exists($input['auto_display_email'], $usp_email_display)) $input['auto_display_email'] = null;
	
	if (!isset($input['auto_display_url'])) $input['auto_display_url'] = null;
	if (!array_key_exists($input['auto_display_url'], $usp_url_display)) $input['auto_display_url'] = null;
	
	$input['author']              = wp_filter_nohtml_kses($input['author']);
	$input['usp_name']            = wp_filter_nohtml_kses($input['usp_name']);
	$input['usp_url']             = wp_filter_nohtml_kses($input['usp_url']);
	$input['usp_email']           = wp_filter_nohtml_kses($input['usp_email']);
	$input['usp_title']           = wp_filter_nohtml_kses($input['usp_title']);
	$input['usp_tags']            = wp_filter_nohtml_kses($input['usp_tags']);
	$input['usp_category']        = wp_filter_nohtml_kses($input['usp_category']);
	$input['usp_images']          = wp_filter_nohtml_kses($input['usp_images']);
	$input['usp_question']        = wp_filter_nohtml_kses($input['usp_question']);
	$input['usp_captcha']         = wp_filter_nohtml_kses($input['usp_captcha']);
	$input['usp_content']         = wp_filter_nohtml_kses($input['usp_content']);
	$input['usp_email_address']   = wp_filter_nohtml_kses($input['usp_email_address']);
	$input['usp_use_cat_id']      = wp_filter_nohtml_kses($input['usp_use_cat_id']);
	$input['usp_display_url']     = wp_filter_nohtml_kses($input['usp_display_url']);
	$input['redirect-url']        = wp_filter_nohtml_kses($input['redirect-url']);
	$input['email_alert_subject'] = wp_filter_nohtml_kses($input['email_alert_subject']);
	
	// dealing with kses
	global $allowedposttags;
	$allowed_atts = array(
		'align'     => array(), 
		'width'     => array(), 
		'height'    => array(), 
		'class'     => array(), 
		'type'      => array(), 
		'id'        => array(), 
		'dir'       => array(), 
		'lang'      => array(), 
		'style'     => array(), 
		'xml:lang'  => array(), 
		'src'       => array(), 
		'alt'       => array(), 
		'href'      => array(), 
		'rel'       => array(), 
		'rev'       => array(), 
		'target'    => array(),
		'data-type' => array(),
		'data-rel'  => array(),
		'title'     => array(),
	);
	
	$allowedposttags['script'] = $allowed_atts;
	$allowedposttags['strong'] = $allowed_atts;
	$allowedposttags['small']  = $allowed_atts;
	$allowedposttags['span']   = $allowed_atts;
	$allowedposttags['abbr']   = $allowed_atts;
	$allowedposttags['code']   = $allowed_atts;
	$allowedposttags['div']    = $allowed_atts;
	$allowedposttags['img']    = $allowed_atts;
	$allowedposttags['h1']     = $allowed_atts;
	$allowedposttags['h2']     = $allowed_atts;
	$allowedposttags['h3']     = $allowed_atts;
	$allowedposttags['h4']     = $allowed_atts;
	$allowedposttags['h5']     = $allowed_atts;
	$allowedposttags['ol']     = $allowed_atts;
	$allowedposttags['ul']     = $allowed_atts;
	$allowedposttags['li']     = $allowed_atts;
	$allowedposttags['em']     = $allowed_atts;
	$allowedposttags['p']      = $allowed_atts;
	$allowedposttags['a']      = $allowed_atts;
	
	$input['usp_form_content']    = wp_kses_post($input['usp_form_content'],    $allowedposttags);
	$input['error-message']       = wp_kses_post($input['error-message'],       $allowedposttags);
	$input['upload-message']      = wp_kses_post($input['upload-message'],      $allowedposttags);
	$input['success-message']     = wp_kses_post($input['success-message'],     $allowedposttags);
	$input['usp_add_another']     = wp_kses_post($input['usp_add_another'],     $allowedposttags);
	$input['email_alert_message'] = wp_kses_post($input['email_alert_message'], $allowedposttags);
	$input['auto_image_markup']   = wp_kses_post($input['auto_image_markup'],   $allowedposttags);
	$input['auto_email_markup']   = wp_kses_post($input['auto_email_markup'],   $allowedposttags);
	$input['auto_url_markup']     = wp_kses_post($input['auto_url_markup'],     $allowedposttags);
	
	if (!isset($input['usp_casing'])) $input['usp_casing'] = null;
	$input['usp_casing'] = ($input['usp_casing'] == 1 ? 1 : 0);
	
	if (!isset($input['usp_email_alerts'])) $input['usp_email_alerts'] = null;
	$input['usp_email_alerts'] = ($input['usp_email_alerts'] == 1 ? 1 : 0);
	
	if (!isset($input['usp_use_author'])) $input['usp_use_author'] = null;
	$input['usp_use_author'] = ($input['usp_use_author'] == 1 ? 1 : 0);
	
	if (!isset($input['usp_use_url'])) $input['usp_use_url'] = null;
	$input['usp_use_url'] = ($input['usp_use_url'] == 1 ? 1 : 0);
	
	if (!isset($input['usp_use_cat'])) $input['usp_use_cat'] = null;
	$input['usp_use_cat'] = ($input['usp_use_cat'] == 1 ? 1 : 0);
	
	if (!isset($input['usp_include_js'])) $input['usp_include_js'] = null;
	$input['usp_include_js'] = ($input['usp_include_js'] == 1 ? 1 : 0);
	
	if (!isset($input['usp_richtext_editor'])) $input['usp_richtext_editor'] = null;
	$input['usp_richtext_editor'] = ($input['usp_richtext_editor'] == 1 ? 1 : 0);
	
	if (!isset($input['usp_featured_images'])) $input['usp_featured_images'] = null;
	$input['usp_featured_images'] = ($input['usp_featured_images'] == 1 ? 1 : 0);
	
	if (!isset($input['disable_required'])) $input['disable_required'] = null;
	$input['disable_required'] = ($input['disable_required'] == 1 ? 1 : 0);
	
	if (!isset($input['titles_unique'])) $input['titles_unique'] = null;
	$input['titles_unique'] = ($input['titles_unique'] == 1 ? 1 : 0);
	
	if (!isset($input['enable_shortcodes'])) $input['enable_shortcodes'] = null;
	$input['enable_shortcodes'] = ($input['enable_shortcodes'] == 1 ? 1 : 0);
	
	if (!isset($input['disable_ip_tracking'])) $input['disable_ip_tracking'] = null;
	$input['disable_ip_tracking'] = ($input['disable_ip_tracking'] == 1 ? 1 : 0);
	
	return apply_filters('usp_input_validate', $input);
}

// add the options page
add_action ('admin_menu', 'usp_add_options_page');
function usp_add_options_page() {
	global $usp_plugin;
	add_options_page($usp_plugin, $usp_plugin, 'manage_options', __FILE__, 'usp_render_form');
}

// create the options page
function usp_render_form() {
	global $wpdb, $usp_plugin, $usp_options, $usp_path, $usp_homeurl, $usp_wpurl, $usp_version, $usp_logo, $usp_pro; 
	
	$display_alert = ' style="display:block;"';
	if (isset($usp_options['version_alert']) && $usp_options['version_alert']) $display_alert = ' style="display:none;"'; ?>
	
	<style type="text/css">#mm-plugin-options .usp-custom-form-info { <?php if ($usp_options['usp_form_version'] !== 'custom') echo 'display: none;'; ?> }</style>
	
	<div id="mm-plugin-options" class="wrap">
		
		<h1><?php echo $usp_plugin; ?> <small><?php echo 'v'. $usp_version; ?></small></h1>
		<div id="mm-panel-toggle"><a href="<?php get_admin_url() .'options-general.php?page='. $usp_path; ?>"><?php _e('Toggle all panels', 'usp'); ?></a></div>
		
		<form method="post" action="options.php">
			<?php $usp_options = get_option('usp_options'); settings_fields('usp_plugin_options'); ?>
			
			<div class="metabox-holder">
				<div class="meta-box-sortables ui-sortable">
					
					<div id="mm-panel-alert"<?php echo $display_alert; ?> class="postbox">
						<h2><?php _e('We need your support!', 'usp'); ?></h2>
						<div class="toggle">
							<div class="mm-panel-alert">
								<p>
									<?php _e('Please', 'usp'); ?> <a target="_blank" href="http://m0n.co/donate" title="<?php _e('Make a donation via PayPal', 'usp'); ?>"><?php _e('make a donation', 'usp'); ?></a> <?php _e('and/or', 'usp'); ?> 
									<a target="_blank" href="http://wordpress.org/support/view/plugin-reviews/<?php echo basename(dirname(__FILE__)); ?>?rate=5#postform" title="<?php _e('Rate and review at the Plugin Directory', 'usp'); ?>">
										<?php _e('give this plugin a 5-star rating', 'usp'); ?>&nbsp;&raquo;
									</a>
								</p>
								<p>
									<?php _e('Your generous support enables continued development of this free plugin. Thank you!', 'usp'); ?>
								</p>
								<div class="dismiss-alert">
									<div class="dismiss-alert-wrap">
										<input class="input-alert" name="usp_options[version_alert]" type="checkbox" value="1" <?php if (isset($usp_options['version_alert'])) checked('1', $usp_options['version_alert']); ?> />  
										<label class="description" for="usp_options[version_alert]"><?php _e('Check this box if you have shown support', 'usp') ?></label>
									</div>
								</div>
							</div>
						</div>
					</div>
					
					<div id="mm-panel-overview" class="postbox">
						<h2><?php _e('Overview', 'usp'); ?></h2>
						<div class="toggle">
							<div class="mm-panel-overview clear">
								<p class="mm-overview-intro">
									<strong><abbr title="<?php echo $usp_plugin; ?>">USP</abbr></strong> <?php _e('enables your visitors to submit posts and upload images from the front-end of your site. ', 'usp'); ?> 
									<?php _e('For advanced functionality and unlimited forms, check out', 'usp'); ?> <strong><a href="https://plugin-planet.com/usp-pro/" target="_blank">USP Pro</a></strong> 
									<?php _e('&mdash; the ultimate solution for user-generated content.', 'usp'); ?>
								</p>
								<div class="mm-left-div">
									<ul>
										<li>
											<strong><?php _e('Quick start:', 'usp'); ?></strong> <a id="mm-panel-primary-link" href="#mm-panel-primary"><?php _e('configure settings', 'usp'); ?></a> 
											<?php _e('and then', 'usp'); ?> <a id="mm-panel-secondary-link" href="#mm-panel-secondary"><?php _e('display the form', 'usp'); ?></a>
										</li>
										<li>
											<strong><?php _e('More info:', 'usp'); ?></strong> <a target="_blank" href="<?php echo plugins_url('/user-submitted-posts/readme.txt', dirname(__FILE__)); ?>">readme.txt</a>, 
											<a target="_blank" href="<?php echo $usp_wpurl; ?>"><?php _e('WP Plugin Page', 'usp'); ?></a>, <?php _e('and', 'usp'); ?> 
											<a target="_blank" href="<?php echo $usp_homeurl; ?>"><?php _e('Homepage', 'usp'); ?></a>
										</li>
										<li><strong><?php _e('Support:', 'usp'); ?></strong> <?php _e('if you like USP, please', 'usp'); ?> 
											<a target="_blank" href="http://wordpress.org/support/view/plugin-reviews/<?php echo basename(dirname(__FILE__)); ?>?rate=5#postform" title="<?php _e('Rate and review this plugin at the WP Plugin Directory', 'usp'); ?>">
												<?php _e('give it a 5-star rating', 'usp'); ?>&nbsp;&raquo;
											</a>
										</li>
									</ul>
								</div>
								<div class="mm-right-div">
									<a class="mm-pro-blurb" target="_blank" href="https://plugin-planet.com/usp-pro/" title="Unlimited front-end forms">Get USP Pro</a>
								</div>
							</div>
						</div>
					</div>
					
					<div id="mm-panel-primary" class="postbox">
						
						<h2><?php _e('Options', 'usp'); ?></h2>
						
						<div class="toggle<?php if (!isset($_GET['settings-updated'])) { echo ' default-hidden'; } ?>">
							
							<p><?php _e('Configure your settings for User Submitted Posts.', 'usp'); ?></p>
							
							<h3><?php _e('Form Fields', 'usp'); ?></h3>
							
							<div class="mm-table-wrap mm-table-less-padding">
								<table class="widefat mm-table">
									<tr>
										<th scope="row"><label class="description" for="usp_options[usp_name]"><?php _e('User Name', 'usp'); ?></label></th>
										<td>
											<select name="usp_options[usp_name]" id="usp_options[usp_name]">
												<option <?php if ($usp_options['usp_name'] == 'show') echo 'selected="selected"'; ?> value="show"><?php _e('Display and require', 'usp'); ?></option>
												<option <?php if ($usp_options['usp_name'] == 'optn') echo 'selected="selected"'; ?> value="optn"><?php _e('Display but do not require', 'usp'); ?></option>
												<option <?php if ($usp_options['usp_name'] == 'hide') echo 'selected="selected"'; ?> value="hide"><?php _e('Disable this field', 'usp'); ?></option>
											</select>
										</td>
									</tr>
									<tr>
										<th scope="row"><label class="description" for="usp_options[usp_email]"><?php _e('User Email', 'usp'); ?></label></th>
										<td>
											<select name="usp_options[usp_email]" id="usp_options[usp_email]">
												<option <?php if ($usp_options['usp_email'] == 'show') echo 'selected="selected"'; ?> value="show"><?php _e('Display and require', 'usp'); ?></option>
												<option <?php if ($usp_options['usp_email'] == 'optn') echo 'selected="selected"'; ?> value="optn"><?php _e('Display but do not require', 'usp'); ?></option>
												<option <?php if ($usp_options['usp_email'] == 'hide') echo 'selected="selected"'; ?> value="hide"><?php _e('Disable this field', 'usp'); ?></option>
											</select>
										</td>
									</tr>
									<tr>
										<th scope="row"><label class="description" for="usp_options[usp_url]"><?php _e('Post URL', 'usp'); ?></label></th>
										<td>
											<select name="usp_options[usp_url]" id="usp_options[usp_url]">
												<option <?php if ($usp_options['usp_url'] == 'show') echo 'selected="selected"'; ?> value="show"><?php _e('Display and require', 'usp'); ?></option>
												<option <?php if ($usp_options['usp_url'] == 'optn') echo 'selected="selected"'; ?> value="optn"><?php _e('Display but do not require', 'usp'); ?></option>
												<option <?php if ($usp_options['usp_url'] == 'hide') echo 'selected="selected"'; ?> value="hide"><?php _e('Disable this field', 'usp'); ?></option>
											</select>
										</td>
									</tr>
									<tr>
										<th scope="row"><label class="description" for="usp_options[usp_title]"><?php _e('Post Title', 'usp'); ?></label></th>
										<td>
											<select name="usp_options[usp_title]" id="usp_options[usp_title]">
												<option <?php if ($usp_options['usp_title'] == 'show') echo 'selected="selected"'; ?> value="show"><?php _e('Display and require', 'usp'); ?></option>
												<option <?php if ($usp_options['usp_title'] == 'optn') echo 'selected="selected"'; ?> value="optn"><?php _e('Display but do not require', 'usp'); ?></option>
												<option <?php if ($usp_options['usp_title'] == 'hide') echo 'selected="selected"'; ?> value="hide"><?php _e('Disable this field', 'usp'); ?></option>
											</select>
										</td>
									</tr>
									<tr>
										<th scope="row"><label class="description" for="usp_options[usp_tags]"><?php _e('Post Tags', 'usp'); ?></label></th>
										<td>
											<select name="usp_options[usp_tags]" id="usp_options[usp_tags]">
												<option <?php if ($usp_options['usp_tags'] == 'show') echo 'selected="selected"'; ?> value="show"><?php _e('Display and require', 'usp'); ?></option>
												<option <?php if ($usp_options['usp_tags'] == 'optn') echo 'selected="selected"'; ?> value="optn"><?php _e('Display but do not require', 'usp'); ?></option>
												<option <?php if ($usp_options['usp_tags'] == 'hide') echo 'selected="selected"'; ?> value="hide"><?php _e('Disable this field', 'usp'); ?></option>
											</select>
										</td>
									</tr>
									<tr>
										<th scope="row"><label class="description" for="usp_options[usp_category]"><?php _e('Post Category', 'usp'); ?></label></th>
										<td>
											<select name="usp_options[usp_category]" id="usp_options[usp_category]">
												<option <?php if ($usp_options['usp_category'] == 'show') echo 'selected="selected"'; ?> value="show"><?php _e('Display and require', 'usp'); ?></option>
												<option <?php if ($usp_options['usp_category'] == 'optn') echo 'selected="selected"'; ?> value="optn"><?php _e('Display but do not require', 'usp'); ?></option>
												<option <?php if ($usp_options['usp_category'] == 'hide') echo 'selected="selected"'; ?> value="hide"><?php _e('Disable this field', 'usp'); ?></option>
											</select>
										</td>
									</tr>
									<tr>
										<th scope="row"><label class="description" for="usp_options[usp_content]"><?php _e('Post Content', 'usp'); ?></label></th>
										<td>
											<select name="usp_options[usp_content]" id="usp_options[usp_content]">
												<option <?php if ($usp_options['usp_content'] == 'show') echo 'selected="selected"'; ?> value="show"><?php _e('Display and require', 'usp'); ?></option>
												<option <?php if ($usp_options['usp_content'] == 'optn') echo 'selected="selected"'; ?> value="optn"><?php _e('Display but do not require', 'usp'); ?></option>
												<option <?php if ($usp_options['usp_content'] == 'hide') echo 'selected="selected"'; ?> value="hide"><?php _e('Disable this field', 'usp'); ?></option>
											</select>
										</td>
									</tr>
									<tr>
										<th scope="row"><label class="description" for="usp_options[usp_captcha]"><?php _e('Challenge Question', 'usp'); ?></label></th>
										<td>
											<select name="usp_options[usp_captcha]" id="usp_options[usp_captcha]">
												<option <?php if ($usp_options['usp_captcha'] == 'show') echo 'selected="selected"'; ?> value="show"><?php _e('Display and require', 'usp'); ?></option>
												<option <?php if ($usp_options['usp_captcha'] == 'hide') echo 'selected="selected"'; ?> value="hide"><?php _e('Disable this field', 'usp'); ?></option>
											</select> 
											<span class="mm-item-caption"><?php _e('(Visit', 'usp'); ?> <a href="#usp-challenge-question "><?php _e('Challenge Question', 'usp'); ?></a> <?php _e('to configure options)', 'usp'); ?></span>
										</td>
									</tr>
									<tr>
										<th scope="row"><label class="description" for="usp_options[usp_images]"><?php _e('Post Images', 'usp'); ?></label></th>
										<td>
											<select name="usp_options[usp_images]" id="usp_options[usp_images]">
												<option <?php if ($usp_options['usp_images'] == 'show') echo 'selected="selected"'; ?> value="show"><?php _e('Display', 'usp'); ?></option>
												<option <?php if ($usp_options['usp_images'] == 'hide') echo 'selected="selected"'; ?> value="hide"><?php _e('Disable', 'usp'); ?></option>
											</select> 
											<span class="mm-item-caption"><?php _e('(Visit', 'usp'); ?> <a href="#usp-image-uploads"><?php _e('Image Uploads', 'usp'); ?></a> <?php _e('to configure options)', 'usp'); ?></span>
										</td>
									</tr>
								</table>
							</div>
							
							<h3><?php _e('General Options', 'usp'); ?></h3>
							
							<div class="mm-table-wrap">
								<table class="widefat mm-table">
									<tr>
										<th scope="row"><label class="description" for="usp_options[usp_form_version]"><?php _e('Form style', 'usp'); ?></label></th>
										<td>
											<?php usp_form_display_options(); ?>
											
											<div class="usp-custom-form-info">
												<p><?php _e('With this option, you can copy the plugin&rsquo;s default templates:', 'usp'); ?></p>
												<ul>
													<li><code>/resources/usp.css</code></li>
													<li><code>/views/submission-form.php</code></li>
												</ul>
												<p><?php _e('..and upload them to the plugin&rsquo;s', 'usp'); ?> <code>/custom/</code> <?php _e('directory:', 'usp'); ?></p>
												<ul>
													<li><code>/custom/usp.css</code></li>
													<li><code>/custom/submission-form.php</code></li>
												</ul>
												<p>
													<?php _e('That will enable you to customize the form and styles as desired. Note: the', 'usp'); ?> <code>/custom/usp.css</code> 
													<?php _e('file is optional if you want to use your own stylesheet. See the readme.txt for more information. FYI: here is a', 'usp'); ?> 
													<a target="_blank" href="http://m0n.co/e"><?php _e('list of CSS selectors for USP', 'usp'); ?></a>.
												</p>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row"><label class="description" for="usp_options[usp_include_js]"><?php _e('Include JavaScript?', 'usp'); ?></label></th>
										<td><input type="checkbox" value="1" name="usp_options[usp_include_js]" <?php if (isset($usp_options['usp_include_js'])) { checked('1', $usp_options['usp_include_js']); } ?> />
										<span class="mm-item-caption"><?php _e('Check this box if you want to include the external JavaScript files (recommended).', 'usp'); ?></span></td>
									</tr>
									<tr>
										<th scope="row"><label class="description" for="usp_options[usp_display_url]"><?php _e('Targeted Loading', 'usp'); ?></label></th>
										<td><input type="text" size="45" maxlength="200" name="usp_options[usp_display_url]" value="<?php echo esc_attr($usp_options['usp_display_url']); ?>" />
										<div class="mm-item-caption"><?php _e('When enabled, external CSS &amp; JavaScript files are loaded on every page. Here you may specify the URL of the USP form to load resources only on that page. Note: leave blank to load on all pages.', 'usp'); ?></div></td>
									</tr>
									<tr>
										<th scope="row"><label class="description"><?php _e('Categories', 'usp'); ?></label></th>
										<td>
											<div class="mm-item-desc">
												<a href="#" class="usp-cat-toggle-link"><?php _e('Select which categories may be assigned to submitted posts (click to toggle)', 'usp'); ?></a>
											</div>
											<div class="usp-cat-toggle-div default-hidden">
												
												<?php $categories = get_categories(array('hide_empty' => 0)); foreach($categories as $category) : ?>
												<div class="mm-radio-inputs">
													<label class="description">
														<input <?php checked(true, in_array($category->term_id, $usp_options['categories'])); ?> type="checkbox" name="usp_options[categories][]" value="<?php echo $category->term_id; ?>" /> 
														<span><?php echo sanitize_text_field($category->name); ?></span>
													</label>
												</div>
												<?php endforeach; ?>
												
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row"><label class="description" for="usp_options[author]"><?php _e('Assigned Author', 'usp'); ?></label></th>
										<td>
											<select id="usp_options[author]" name="usp_options[author]">
												
												<?php $allAuthors = $wpdb->get_results("SELECT ID, display_name FROM {$wpdb->users}"); foreach($allAuthors as $author) : ?>
												<option <?php selected($usp_options['author'], $author->ID); ?> value="<?php echo $author->ID; ?>"><?php echo $author->display_name; ?></option>
												<?php endforeach; ?>
												
											</select>
											<div class="mm-item-caption"><?php _e('Specify the user that should be assigned as author for user-submitted posts.', 'usp'); ?></div>
										</td>
									</tr>
									<tr>
										<th scope="row"><label class="description" for="usp_options[number-approved]"><?php _e('Auto Publish?', 'usp'); ?></label></th>
										<td>
											<select name="usp_options[number-approved]">
												<option <?php selected(-1, $usp_options['number-approved']); ?> value="-2"><?php _e('Always moderate via Draft', 'usp'); ?></option>
												<option <?php selected(-1, $usp_options['number-approved']); ?> value="-1"><?php _e('Always moderate via Pending', 'usp'); ?></option>
												<option <?php selected( 0, $usp_options['number-approved']); ?> value="0"><?php _e('Always publish immediately', 'usp'); ?></option>
												<?php foreach(range(1, 20) as $value) { ?>
												<option <?php selected($value, $usp_options['number-approved']); ?> value="<?php echo $value; ?>"><?php echo $value; ?></option>
												<?php } ?>
											</select>
											<div class="mm-item-caption"><?php _e('Post Status for submitted posts: moderate (recommended), publish immediately, or publish after any number of approved posts.', 'usp'); ?></div>
										</td>
									</tr>
									<tr>
										<th scope="row"><label class="description" for="usp_options[usp_richtext_editor]"><?php _e('Enable Rich Text Editor', 'usp'); ?></label></th>
										<td><input type="checkbox" value="1" name="usp_options[usp_richtext_editor]" <?php if (isset($usp_options['usp_richtext_editor'])) { checked('1', $usp_options['usp_richtext_editor']); } ?> />
										<span class="mm-item-caption"><?php _e('Check this box if you want to enable WP rich text editing for submitted posts.', 'usp'); ?></span></td>
									</tr>
									<tr>
										<th scope="row"><label class="description" for="usp_options[redirect-url]"><?php _e('Redirect URL', 'usp'); ?></label></th>
										<td><input type="text" size="45" maxlength="200" name="usp_options[redirect-url]" value="<?php echo esc_attr($usp_options['redirect-url']); ?>" />
										<div class="mm-item-caption"><?php _e('Specify a URL to redirect the user after post-submission. Leave blank to redirect back to current page.', 'usp'); ?></div></td>
									</tr>
									<tr>
										<th scope="row"><label class="description" for="usp_options[success-message]"><?php _e('Success Message', 'usp'); ?></label></th>
										<td><textarea class="textarea" rows="3" cols="50" name="usp_options[success-message]"><?php echo esc_attr($usp_options['success-message']); ?></textarea> 
										<div class="mm-item-caption"><?php _e('Success message that is displayed if post-submission is successful. Basic markup is allowed.', 'usp'); ?></div></td>
									</tr>
									<tr>
										<th scope="row"><label class="description" for="usp_options[error-message]"><?php _e('Error Message', 'usp'); ?></label></th>
										<td><textarea class="textarea" rows="3" cols="50" name="usp_options[error-message]"><?php echo esc_attr($usp_options['error-message']); ?></textarea> 
										<div class="mm-item-caption"><?php _e('General error message that is displayed if post-submission fails. Basic markup is allowed.', 'usp'); ?></div></td>
									</tr>
									<tr>
										<th scope="row"><label class="description" for="usp_options[usp_form_content]"><?php _e('Custom Content', 'usp'); ?></label></th>
										<td><textarea class="textarea" rows="3" cols="50" name="usp_options[usp_form_content]"><?php echo esc_attr($usp_options['usp_form_content']); ?></textarea> 
										<div class="mm-item-caption"><?php _e('Custom text/markup to be included before the submission form. Leave blank to disable.', 'usp'); ?></div></td>
									</tr>
									<tr>
										<th scope="row"><label class="description" for="usp_options[titles_unique]"><?php _e('Unique Titles', 'usp'); ?></label></th>
										<td><input type="checkbox" value="1" name="usp_options[titles_unique]" <?php if (isset($usp_options['titles_unique'])) { checked('1', $usp_options['titles_unique']); } ?> />
										<span class="mm-item-caption"><?php _e('Require submitted post titles to be unique (useful for preventing multiple/duplicate submitted posts).', 'usp'); ?></span></td>
									</tr>
									<tr>
										<th scope="row"><label class="description" for="usp_options[disable_required]"><?php _e('Disable Required', 'usp'); ?></label></th>
										<td><input type="checkbox" value="1" name="usp_options[disable_required]" <?php if (isset($usp_options['disable_required'])) { checked('1', $usp_options['disable_required']); } ?> />
										<span class="mm-item-caption"><?php _e('Disable all required attributes on default form fields (useful for troubleshooting error messages).', 'usp'); ?></span></td>
									</tr>
									<tr>
										<th scope="row"><label class="description" for="usp_options[enable_shortcodes]"><?php _e('Enable Shortcodes', 'usp'); ?></label></th>
										<td><input name="usp_options[enable_shortcodes]" type="checkbox" value="1" <?php if (isset($usp_options['enable_shortcodes'])) checked('1', $usp_options['enable_shortcodes']); ?> /> 
										<span class="mm-item-caption"><?php _e('Enable shortcodes in widgets. By default, WordPress does not enable shortcodes in widgets. ', 'usp'); ?>
										<?php _e('This setting enables any/all shortcodes in widgets (even shortcodes from other plugins).', 'usp'); ?></span></td>
									</tr>
									<tr>
										<th scope="row"><label class="description" for="usp_options[disable_ip_tracking]"><?php _e('Disable IP Tracking', 'usp'); ?></label></th>
										<td><input type="checkbox" value="1" name="usp_options[disable_ip_tracking]" <?php if (isset($usp_options['disable_ip_tracking'])) { checked('1', $usp_options['disable_ip_tracking']); } ?> />
										<span class="mm-item-caption"><?php _e('By default USP records the IP address with each submitted post. Check this box to disable all IP tracking.', 'usp'); ?></span></td>
									</tr>
								</table>
							</div>
							
							<h3><?php _e('Email Alerts', 'usp'); ?></h3>
							
							<div class="mm-table-wrap">
								<table class="widefat mm-table">
									<tr>
										<th scope="row"><label class="description" for="usp_options[usp_email_alerts]"><?php _e('Receive Email Alert', 'usp'); ?></label></th>
										<td><input type="checkbox" value="1" name="usp_options[usp_email_alerts]" <?php if (isset($usp_options['usp_email_alerts'])) { checked('1', $usp_options['usp_email_alerts']); } ?> />
										<span class="mm-item-caption"><?php _e('Check this box if you want to be notified via email for new post submissions.', 'usp'); ?></span></td>
									</tr>
									<tr>
										<th scope="row"><label class="description" for="usp_options[usp_email_address]"><?php _e('Email Address for Alerts', 'usp'); ?></label></th>
										<td><input type="text" size="45" maxlength="200" name="usp_options[usp_email_address]" value="<?php echo esc_attr($usp_options['usp_email_address']); ?>" />
										<div class="mm-item-caption"><?php _e('If you checked the box to receive email alerts, indicate here the address(es) to which the emails should be sent.', 'usp'); ?> 
										<?php _e('Multiple recipients may be included using a comma, like so:', 'usp'); ?> <code>email1@example.com</code>, <code>email2@example.com</code>, <code>email3@example.com</code></div></td>
									</tr>
									<tr>
										<th scope="row"><label class="description" for="usp_options[email_alert_subject]"><?php _e('Email Alert Subject', 'usp'); ?></label></th>
										<td><input type="text" size="45" name="usp_options[email_alert_subject]" value="<?php echo esc_attr($usp_options['email_alert_subject']); ?>" />
										<div class="mm-item-caption"><?php _e('Subject line for email alerts. Leave blank to use the default subject line. Note: you can use the following variables: ', 'usp'); ?>
										<code>%%post_title%%</code>, <code>%%admin_url%%</code>, <code>%%blog_name%%</code>, <code>%%post_url%%</code>, <code>%%blog_url%%</code></div></td>
									</tr>
									<tr>
										<th scope="row"><label class="description" for="usp_options[email_alert_message]"><?php _e('Email Alert Message', 'usp'); ?></label></th>
										<td><textarea class="textarea" rows="3" cols="50" name="usp_options[email_alert_message]"><?php echo esc_attr($usp_options['email_alert_message']); ?></textarea> 
										<div class="mm-item-caption"><?php _e('Message for email alerts. Leave blank to use the default message. Note: you can use the following variables: ', 'usp'); ?>
										<code>%%post_title%%</code>, <code>%%admin_url%%</code>, <code>%%blog_name%%</code>, <code>%%post_url%%</code>, <code>%%blog_url%%</code></div></td>
									</tr>
								</table>
							</div>
							
							<h3><?php _e('Registered Users', 'usp'); ?></h3>
							
							<div class="mm-table-wrap">
								<table class="widefat mm-table">
									<tr>
										<th scope="row"><label class="description" for="usp_options[usp_use_author]"><?php _e('Registered Username', 'usp'); ?></label></th>
										<td><input type="checkbox" value="1" name="usp_options[usp_use_author]" <?php if (isset($usp_options['usp_use_author'])) { checked('1', $usp_options['usp_use_author']); } ?> /> 
										<span class="mm-item-caption"><?php _e('Use registered username as post author. Valid when the person submitting the form is logged in to WordPress.', 'usp'); ?></span></td>
									</tr>
									<tr>
										<th scope="row"><label class="description" for="usp_options[usp_use_url]"><?php _e('User Profile URL', 'usp'); ?></label></th>
										<td><input type="checkbox" value="1" name="usp_options[usp_use_url]" <?php if (isset($usp_options['usp_use_url'])) { checked('1', $usp_options['usp_use_url']); } ?> /> 
										<span class="mm-item-caption"><?php _e('Use registered user&rsquo;s Profile URL as the post URL. Valid when the person submitting the form is logged in to WordPress.', 'usp'); ?></span></td>
									</tr>
									<tr>
										<th scope="row"><label class="description" for="usp_options[usp_use_cat]"><?php _e('Hidden/Default Category', 'usp'); ?></label></th>
										<td><input type="checkbox" value="1" name="usp_options[usp_use_cat]" <?php if (isset($usp_options['usp_use_cat'])) { checked('1', $usp_options['usp_use_cat']); } ?> /> 
										<span class="mm-item-caption"><?php _e('Use a hidden field for the post category. This may be used to specify a default category when the category field is disabled.', 'usp'); ?></span></td>
									</tr>
									<tr>
										<th scope="row"><label class="description" for="usp_options[usp_use_cat_id]"><?php _e('Category ID for Hidden Field', 'usp'); ?></label></th>
										<td><input class="input-short" type="text" size="45" maxlength="100" name="usp_options[usp_use_cat_id]" value="<?php echo esc_attr($usp_options['usp_use_cat_id']); ?>" /> 
										<span class="mm-item-caption"><?php _e('Specify the ID of the category to use for the &ldquo;Hidden/Default Category&rdquo; option.', 'usp'); ?></span></td>
									</tr>
								</table>
							</div>
							
							<h3 id="usp-challenge-question"><?php _e('Challenge Question', 'usp'); ?></h3>
							
							<div class="mm-table-wrap">
								<table class="widefat mm-table">
									<tr>
										<th scope="row"><label class="description" for="usp_options[usp_question]"><?php _e('Challenge Question', 'usp'); ?></label></th>
										<td><input type="text" size="45" name="usp_options[usp_question]" value="<?php echo esc_attr($usp_options['usp_question']); ?>" />
										<div class="mm-item-caption"><?php _e('To prevent spam, enter a question that users must answer before submitting the form.', 'usp'); ?></div></td>
									</tr>
									<tr>
										<th scope="row"><label class="description" for="usp_options[usp_response]"><?php _e('Challenge Response', 'usp'); ?></label></th>
										<td><input type="text" size="45" name="usp_options[usp_response]" value="<?php echo esc_attr($usp_options['usp_response']); ?>" />
										<div class="mm-item-caption"><?php _e('Enter the <em>only</em> correct answer to the challenge question.', 'usp'); ?></div></td>
									</tr>
									<tr>
										<th scope="row"><label class="description" for="usp_options[usp_casing]"><?php _e('Case-sensitivity', 'usp'); ?></label></th>
										<td><input type="checkbox" value="1" name="usp_options[usp_casing]" <?php if (isset($usp_options['usp_casing'])) { checked('1', $usp_options['usp_casing']); } ?> />
										<span class="mm-item-caption"><?php _e('Check this box if you want the challenge response to be case-sensitive.', 'usp'); ?></span></td>
									</tr>
								</table>
							</div>
							
							<h3 id="usp-image-uploads"><?php _e('Image Uploads', 'usp'); ?></h3>
							
							<div class="mm-table-wrap">
								<table class="widefat mm-table">
									<tr>
										<th scope="row"><label class="description" for="usp_options[usp_featured_images]"><?php _e('Featured Image', 'usp'); ?></label></th>
										<td><input type="checkbox" value="1" name="usp_options[usp_featured_images]" <?php if (isset($usp_options['usp_featured_images'])) { checked('1', $usp_options['usp_featured_images']); } ?> />
										<span class="mm-item-caption"><?php _e('Set submitted images as Featured Images. Requires theme support for Featured Images (aka Post Thumbnails).', 'usp'); ?></span></td>
									</tr>
									<tr>
										<th scope="row"><label class="description" for="usp_options[upload-message]"><?php _e('Upload Message', 'usp'); ?></label></th>
										<td><textarea class="textarea" rows="3" cols="50" name="usp_options[upload-message]"><?php echo esc_attr($usp_options['upload-message']); ?></textarea>
										<div class="mm-item-caption"><?php _e('Message that appears next to the upload field. Useful for stating your upload guidelines/policy/etc. Basic markup allowed.', 'usp'); ?></div></td>
									</tr>
									<tr>
										<th scope="row"><label class="description" for="usp_options[usp_add_another]"><?php _e('&ldquo;Add another image&rdquo; link', 'usp'); ?></label></th>
										<td><textarea class="textarea" rows="3" cols="50" name="usp_options[usp_add_another]"><?php echo esc_attr($usp_options['usp_add_another']); ?></textarea>
										<div class="mm-item-caption"><?php _e('Custom markup for the &ldquo;Add another image&rdquo; link. Leave blank to use the default markup (recommended).', 'usp'); ?></div></td>
									</tr>
									<tr>
										<th scope="row"><label class="description" for="usp_options[min-images]"><?php _e('Minimum number of images', 'usp'); ?></label></th>
										<td>
											<input name="usp_options[min-images]" type="number" step="1" min="0" max="999" maxlength="3" value="<?php echo $usp_options['min-images']; ?>" />
											<span class="mm-item-caption"><?php _e('Specify the <em>minimum</em> number of images.', 'usp'); ?></span>
										</td>
									</tr>
									<tr>
										<th scope="row"><label class="description" for="usp_options[max-images]"><?php _e('Maximum number of images', 'usp'); ?></label></th>
										<td>
											<input name="usp_options[max-images]" type="number" step="1" min="0" max="999" maxlength="3" value="<?php echo $usp_options['max-images']; ?>" />
											<span class="mm-item-caption"><?php _e('Specify the <em>maximum</em> number of images.', 'usp'); ?></span>
										</td>
									</tr>
									<tr>
										<th scope="row"><label class="description" for="usp_options[min-image-width]"><?php _e('Minimum image width', 'usp'); ?></label></th>
										<td><input class="input-short" type="text" size="5" maxlength="100" name="usp_options[min-image-width]" value="<?php echo esc_attr($usp_options['min-image-width']); ?>" />
										<span class="mm-item-caption"><?php _e('Specify a <em>minimum width</em> (in pixels) for uploaded images.', 'usp'); ?></span></td>
									</tr>
									<tr>
										<th scope="row"><label class="description" for="usp_options[min-image-height]"><?php _e('Minimum image height', 'usp'); ?></label></th>
										<td><input class="input-short" type="text" size="5" maxlength="100" name="usp_options[min-image-height]" value="<?php echo esc_attr($usp_options['min-image-height']); ?>" />
										<span class="mm-item-caption"><?php _e('Specify a <em>minimum height</em> (in pixels) for uploaded images.', 'usp'); ?></span></td>
									</tr>
									<tr>
										<th scope="row"><label class="description" for="usp_options[max-image-width]"><?php _e('Maximum image width', 'usp'); ?></label></th>
										<td><input class="input-short" type="text" size="5" maxlength="100" name="usp_options[max-image-width]" value="<?php echo esc_attr($usp_options['max-image-width']); ?>" />
										<span class="mm-item-caption"><?php _e('Specify a <em>maximum width</em> (in pixels) for uploaded images.', 'usp'); ?></span></td>
									</tr>
									<tr>
										<th scope="row"><label class="description" for="usp_options[max-image-height]"><?php _e('Maximum image height', 'usp'); ?></label></th>
										<td><input class="input-short" type="text" size="5" maxlength="100" name="usp_options[max-image-height]" value="<?php echo esc_attr($usp_options['max-image-height']); ?>" />
										<span class="mm-item-caption"><?php _e('Specify a <em>maximum height</em> (in pixels) for uploaded images.', 'usp'); ?></span></td>
									</tr>
								</table>
							</div>
							
							<h3><?php _e('Auto-Display Content', 'usp'); ?></h3>
							
							<div class="mm-table-wrap">
								<table class="widefat mm-table">
									<tr>
										<th scope="row"><label class="description" for="usp_options[auto_display_images]"><?php _e('Images Auto-Display', 'usp'); ?></label></th>
										<td>
											<span class="mm-item-desc"><?php _e('Auto-display user-submitted images:', 'usp'); ?></span>
											<?php usp_auto_display_options('images') ; ?>
										</td>
									</tr>
									<tr>
										<th scope="row"><label class="description" for="usp_options[auto_image_markup]"><?php _e('Image Markup', 'usp'); ?></label></th>
										<td><textarea class="textarea" rows="3" cols="50" name="usp_options[auto_image_markup]"><?php echo esc_attr($usp_options['auto_image_markup']); ?></textarea> 
										<div class="mm-item-caption"><?php _e('Markup to use for each submitted image (when auto-display is enabled). Can use', 'usp'); ?> 
										<code>%%width%%</code>, <code>%%height%%</code>, <code>%%thumb%%</code>, <code>%%medium%%</code>, <code>%%large%%</code>, 
										<code>%%full%%</code>, <code>%%custom%%</code>, <?php _e('and', 'usp'); ?> <code>%%title%%</code>.</div></td>
									</tr>
									<tr>
										<th scope="row"><label class="description" for="usp_options[auto_display_email]"><?php _e('Email Auto-Display', 'usp'); ?></label></th>
										<td>
											<span class="mm-item-desc"><?php _e('Auto-display user-submitted email:', 'usp'); ?></span>
											<?php usp_auto_display_options('email') ; ?>
										</td>
									</tr>
									<tr>
										<th scope="row"><label class="description" for="usp_options[auto_email_markup]"><?php _e('Email Markup', 'usp'); ?></label></th>
										<td><textarea class="textarea" rows="3" cols="50" name="usp_options[auto_email_markup]"><?php echo esc_attr($usp_options['auto_email_markup']); ?></textarea> 
										<div class="mm-item-caption"><?php _e('Markup to use for the submitted email address (when auto-display is enabled). Can use', 'usp'); ?> <code>%%email%%</code>.</div></td>
									</tr>
									<tr>
										<th scope="row"><label class="description" for="usp_options[auto_display_url]"><?php _e('URL Auto-Display', 'usp'); ?></label></th>
										<td>
											<span class="mm-item-desc"><?php _e('Auto-display user-submitted URL:', 'usp'); ?></span>
											<?php usp_auto_display_options('url') ; ?>
										</td>
									</tr>
									<tr>
										<th scope="row"><label class="description" for="usp_options[auto_url_markup]"><?php _e('URL Markup', 'usp'); ?></label></th>
										<td><textarea class="textarea" rows="3" cols="50" name="usp_options[auto_url_markup]"><?php echo esc_attr($usp_options['auto_url_markup']); ?></textarea> 
										<div class="mm-item-caption"><?php _e('Markup to use for the submitted URL (when auto-display is enabled). Can use', 'usp'); ?> <code>%%url%%</code>.</div></td>
									</tr>
								</table>
							</div>
							
							<input type="submit" class="button-primary" value="<?php _e('Save Settings', 'usp'); ?>" />
						</div>
					</div>
					
					<div id="mm-panel-secondary" class="postbox">
						<h2><?php _e('Shortcode &amp; Template Tag', 'usp'); ?></h2>
						<div class="toggle<?php if (!isset($_GET['settings-updated'])) { echo ' default-hidden'; } ?>">
							
							<p><?php _e('To implement USP, first configure the plugin settings, then use the shortcode or template to display the form on the front-end as desired.', 'usp'); ?></p>
							
							<h3><?php _e('Shortcode', 'usp'); ?></h3>
							<p><?php _e('Use this shortcode to display the USP Form on any Post or Page:', 'usp'); ?></p>
							<p><code class="mm-code">[user-submitted-posts]</code></p>

							<h3><?php _e('Template tag', 'usp'); ?></h3>
							<p><?php _e('Use this template tag to display the USP Form anywhere in your theme template:', 'usp'); ?></p>
							<p><code class="mm-code">&lt;?php if (function_exists('user_submitted_posts')) user_submitted_posts(); ?&gt;</code></p>
						</div>
					</div>
					
					<div id="mm-restore-settings" class="postbox">
						<h2><?php _e('Restore Default Options', 'usp'); ?></h2>
						<div class="toggle<?php if (!isset($_GET['settings-updated'])) { echo ' default-hidden'; } ?>">
							<p>
								<input name="usp_options[default_options]" type="checkbox" value="1" id="mm_restore_defaults" <?php if (isset($usp_options['default_options'])) { checked('1', $usp_options['default_options']); } ?> /> 
								<label class="description" for="usp_options[default_options]"><?php _e('Restore default options upon plugin deactivation/reactivation.', 'usp'); ?></label>
							</p>
							<p>
								<small>
									<?php _e('<strong>Tip:</strong> leave this option unchecked to remember your settings. Or, to go ahead and restore all default options, check the box, save your settings, and then deactivate/reactivate the plugin.', 'usp'); ?>
								</small>
							</p>
							<input type="submit" class="button-primary" value="<?php _e('Save Settings', 'usp'); ?>" />
						</div>
					</div>
					
					<div id="mm-panel-current" class="postbox">
						<h2><?php _e('Updates &amp; Info', 'usp'); ?></h2>
						<div class="toggle">
							<div id="mm-iframe-wrap">
								<iframe src="https://perishablepress.com/current/index-usp.html"></iframe>
							</div>
						</div>
					</div>
					
				</div>
			</div>
			
			<div id="mm-credit-info">
				<a target="_blank" href="<?php echo $usp_homeurl; ?>" title="<?php echo $usp_plugin; ?> Homepage"><?php echo $usp_plugin; ?></a> by 
				<a target="_blank" href="http://twitter.com/perishable" title="Jeff Starr on Twitter">Jeff Starr</a> @ 
				<a target="_blank" href="http://monzilla.biz/" title="Obsessive Web Design &amp; Development">Monzilla Media</a>
			</div>
		</form>
	</div>
	
	<script type="text/javascript">
		jQuery(document).ready(function($){
			
			// dismiss alert
			if (!$('.dismiss-alert-wrap input').is(':checked')){
				$('.dismiss-alert-wrap input').one('click', function(){
					$('.dismiss-alert-wrap').after('<input type="submit" class="button-secondary" value="<?php _e('Save Preference', 'gap'); ?>" />');
				});
			}
			
			// prevent accidents
			if (!$("#mm_restore_defaults").is(":checked")){
				$('#mm_restore_defaults').click(function(event){
					var r = confirm("<?php _e('Are you sure you want to restore all default options? (this action cannot be undone)', 'usp'); ?>");
					if (r == true) $("#mm_restore_defaults").attr('checked', true);
					else $("#mm_restore_defaults").attr('checked', false);
				});
			}
			
		});
	</script>

<?php }
