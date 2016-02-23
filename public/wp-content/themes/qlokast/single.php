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

				</main><!-- #main -->
			</div><!-- #primary -->
		</div><!--col-->
	</div><!--row-->
</div><!--container-->

<?php
get_sidebar();
get_footer();
