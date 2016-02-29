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

          <div class="lession">	
            <h1><?php the_title(); ?></h1>
            <p>Publicerad <?php the_time("Y-m-d H:i"); ?> av <?php the_author_posts_link(); ?></p>
            <?php the_content(); ?>
          </div>

          <hr>
          <h3> Övningar </h3>

          <!-- Find all assignments belonging to this lession -->
          <?php
            $args = array(
              'meta_key'   => '_lession_course_parrent',
              'meta_value' => $post->ID,
              'post_type'  => 'assignments'
            );
            $the_query = new WP_Query( $args );
          ?>

          <?php if ( $the_query->have_posts() ) : ?>

            <!-- a new the loop with lessions -->
            <?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
              <a href="<?php the_permalink() ?>"><h5><?php the_title(); ?></h5></a>
            <?php endwhile; ?>

            <?php wp_reset_postdata(); ?>

          <?php else : ?>
            <p><?php _e( '
                Det ser inte ut som att det 
                finns några övningar för den här lektionen än.
              ' ); ?></p>
          <?php endif; ?>

          <?php 
            // If comments are open or we have at least one comment, load up the comment template.
            if ( comments_open() || get_comments_number() ) {
              comments_template();
            } 
          ?>

				</main><!-- #main -->
			</div><!-- #primary -->
		</div><!--col-->
	</div><!--row-->
</div><!--container-->


<?php
get_sidebar();
get_footer();
