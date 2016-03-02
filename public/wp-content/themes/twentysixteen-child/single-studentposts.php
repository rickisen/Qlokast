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
			<h4>Skriven av <i><?php echo get_the_author('display_name') ?></i> den <i><?php the_time("Y-m-d H:i"); ?></i></h4>
			<br>
		</div>

		<?php 
		// If comments are open or we have at least one comment, load up the comment template.
		if ( comments_open() || get_comments_number() ) {
		  comments_template();
		} 
		?>
	</main><!-- #main -->
</div><!-- #primary -->

<?php
get_sidebar();
get_footer();
