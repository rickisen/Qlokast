<?php
/**
 * The template for the sidebar containing the main widget area
 *
 * @package Qlokast
 */
global $current_user; get_currentuserinfo();
?>

<?php if ( is_active_sidebar( 'sidebar-1' )  ) : ?>

	<aside id="secondary" class="sidebar widget-area" role="complementary">

      	<?php $postType = 'courses'; 
      		include(locate_template('template-parts/sidebar-part.php'));
      	?>

		<?php 
		  	$loop = new WP_Query( array( 'post_type' => $postType ) );
		?>

		<?php if (is_user_logged_in()): ?>
		<h3><a href="<?php echo '/author/'.$current_user->user_login ?>"> Min sida</a></h3>
		<?php endif ?>

		<?php dynamic_sidebar( 'sidebar-1' ); ?>
	</aside><!-- .sidebar .widget-area -->
<?php endif; ?>
