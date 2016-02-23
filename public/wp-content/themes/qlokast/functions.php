<?php
/**
 * Qlokast functions and definitions.
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Qlokast
 */

if ( ! function_exists( 'qlokast_setup' ) ) :
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function qlokast_setup() {
	/*
	 * Make theme available for translation.
	 * Translations can be filed in the /languages/ directory.
	 * If you're building a theme based on Qlokast, use a find and replace
	 * to change 'qlokast' to the name of your theme in all the template files.
	 */
	load_theme_textdomain( 'qlokast', get_template_directory() . '/languages' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
	 * Let WordPress manage the document title.
	 * By adding theme support, we declare that this theme does not use a
	 * hard-coded <title> tag in the document head, and expect WordPress to
	 * provide it for us.
	 */
	add_theme_support( 'title-tag' );

	/*
	 * Enable support for Post Thumbnails on posts and pages.
	 *
	 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
	 */
	add_theme_support( 'post-thumbnails' );

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus( array(
		'primary' => esc_html__( 'Primary', 'qlokast' ),
	) );

	/*
	 * Switch default core markup for search form, comment form, and comments
	 * to output valid HTML5.
	 */
	add_theme_support( 'html5', array(
		'search-form',
		'comment-form',
		'comment-list',
		'gallery',
		'caption',
	) );

	/*
	 * Enable support for Post Formats.
	 * See https://developer.wordpress.org/themes/functionality/post-formats/
	 */
	add_theme_support( 'post-formats', array(
		'aside',
		'image',
		'video',
		'quote',
		'link',
	) );

	// Set up the WordPress core custom background feature.
	add_theme_support( 'custom-background', apply_filters( 'qlokast_custom_background_args', array(
		'default-color' => 'ffffff',
		'default-image' => '',
	) ) );
}
endif;
add_action( 'after_setup_theme', 'qlokast_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function qlokast_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'qlokast_content_width', 640 );
}
add_action( 'after_setup_theme', 'qlokast_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function qlokast_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Sidebar', 'qlokast' ),
		'id'            => 'sidebar-1',
		'description'   => '',
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );
}
add_action( 'widgets_init', 'qlokast_widgets_init' );

/**
 * Enqueue scripts and styles.
 */

function qlokast_styles(){
	wp_enqueue_style( 'qlokast-style', get_stylesheet_uri() );
	wp_enqueue_style( 'qlokast-animate', get_template_directory_uri() . '/css/animate.min.css');
	wp_enqueue_style( 'qlokast-boostrap-css', get_template_directory_uri() . '/css/bootstrap.css');
	
	wp_enqueue_style( 'qlokast-bootstrap-min-css', get_template_directory_uri() . '/css/bootstrap.min.css');

	wp_enqueue_style( 'open-sans', 
		'http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800');

    wp_enqueue_style( 'merriweather', 
    	'http://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic,900,900italic');

    wp_enqueue_style( 'qlokast-creative-css', get_template_directory_uri() . '/css/creative.css');

}

add_action( 'wp_enqueue_scripts', 'qlokast_styles' );

function qlokast_scripts() {
	wp_enqueue_script( 'qlokast-jquery', get_template_directory_uri() . '/js/jquery.js', array(), '20151215', true );
	wp_enqueue_script( 'qlokast-jquery-easing-min', get_template_directory_uri() . '/js/jquery.easing.min.js', array(), '20151215', true );
	wp_enqueue_script( 'qlokast-jquery-fittext', get_template_directory_uri() . '/js/jquery.fittext.js', array(), '20151215', true );
	wp_enqueue_script( 'qlokast-navigation', get_template_directory_uri() . '/js/navigation.js', array(), '20151215', true );
	wp_enqueue_script( 'qlokast-bootstrap', get_template_directory_uri() . '/js/bootstrap.js', array(), '20151215', true );
	wp_enqueue_script( 'qlokast-bootstrap-min', get_template_directory_uri() . '/js/bootstrap.min.js', array(), '20151215', true );
	wp_enqueue_script( 'qlokast-cbpAnimatedHeader', get_template_directory_uri() . '/js/cbpAnimatedHeader.js', array(), '20151215', true );
	wp_enqueue_script( 'qlokast-classie', get_template_directory_uri() . '/js/classie.js', array(), '20151215', true );
	wp_enqueue_script( 'qlokast-creative', get_template_directory_uri() . '/js/creative.js', array(), '20151215', true );
	wp_enqueue_script( 'qlokast-wow-min', get_template_directory_uri() . '/js/wow.min.js', array(), '20151215', true );

	wp_enqueue_script( 'qlokast-skip-link-focus-fix', get_template_directory_uri() . '/js/skip-link-focus-fix.js', array(), '20151215', true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'qlokast_scripts' );

// For WP Adminbar and Navbar conflict
add_action('wp_head', 'navfix_wp_head');

// Fix for WP Adminbar and Navbar conflict
function navfix_body_class($classes){
    if(is_user_logged_in()){
        $classes[] = 'body-logged-in';
    } else{
        $classes[] = 'body-logged-out';
    }
    return $classes;
}

function navfix_wp_head(){
    echo '<style> body{ padding-top: 70px !important; }
    body.logged-in .navbar-fixed-top{ top: 28px !important; }</style>';
}


/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Custom functions that act independently of the theme templates.
 */
require get_template_directory() . '/inc/extras.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
require get_template_directory() . '/inc/jetpack.php';
