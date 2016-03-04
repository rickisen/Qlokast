<?php
/**
 * The template for displaying all single studentposts.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package Qlokast
 */

get_header(); ?>

<div id="primary" class="content-area">
	<main id="main" class="site-main" role="main">

		<?php the_post(); ?>
		<div class="lession">
			<h1><?php asv_the_title(); ?></h1>
			<hr>
			<?php the_content(); ?>
			<hr>

			<?php if ( get_the_category()[0]->slug == 'assignment' ) : //BAD Code Needs better check?> 
        <?php if (get_post_meta(get_the_ID(),'studentFile',true)) : ?>
          <p> Attached File: <?php echo wp_get_attachment_link(get_post_meta(get_the_ID(), 'studentFile', true )); ?> </p>
        <?php else : ?>
          <p> No Attachment Found </p>
        <?php endif ?>
			<?php endif ?>

			<h4>Skriven av <i><?php echo get_the_author() ?></i> den <i><?php the_time("Y-m-d H:i"); ?></i></h4>
			<br>
		</div>

		<?php
			if($current_user->has_cap( 'read_private_studentposts' ) ){
		  	$post = $wp_query->post;

		 	if (in_category('inlamning')) {
		  		echo addGradingSystemForm();
		  	}
		}?>

		<?php
		// If comments are open or we have at least one comment, load up the comment template.
		if ( comments_open() || get_comments_number() ) {
		  comments_template();
		} ?>

  </main><!-- #main -->
</div><!-- #primary -->

<?php
get_sidebar();
get_footer();
