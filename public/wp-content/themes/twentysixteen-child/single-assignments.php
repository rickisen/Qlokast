<?php
/**
 * The template for displaying all single posts.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package Qlokast
 */

get_header(); ?>


<div class="container">
  <div class="row">
    <div class="col-lg-10 col-lg-offset-1 text-center">
			<div id="primary" class="content-area">
				<main id="main" class="site-main" role="main">

					<?php the_post(); ?>
          <div class="assignment">	
            <h1><?php the_title(); ?></h1>
            <p>Publicerad <?php the_time("Y-m-d H:i"); ?> av <?php the_author_posts_link(); ?></p>
            <?php the_content(); ?>
          </div>

          <?php 
            // If comments are open or we have at least one comment, load up the comment template.
            if ( comments_open() || get_comments_number() ) {
              comments_template();
            } 
          ?>

          <?php echo recieveAssignmentForm( get_the_ID() ); ?>


				</main><!-- #main -->
			</div><!-- #primary -->
		</div><!--col-->
	</div><!--row-->
</div><!--container-->


<?php
get_sidebar();
get_footer();
