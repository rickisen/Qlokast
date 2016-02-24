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

					<?php while(have_posts()){
						the_post(); 
						get_template_part('post'); 
					} 
					?>
          
          <hr>
          <h3> Lektioner </h3>
          <?php
            $args = array(
              'meta_key'   => '_course_parrent',
              'meta_value' => $post->ID,
              'post_type'  => 'lession'
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
                finns några lektioner för den här kursen än.
            ' ); ?></p>
          <?php endif; ?>

				</main><!-- #main -->
			</div><!-- #primary -->
		</div><!--col-->
	</div><!--row-->
</div><!--container-->


<?php
get_sidebar();
get_footer();
