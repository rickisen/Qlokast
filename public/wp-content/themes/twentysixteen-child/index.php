<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link http://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage Twenty_Sixteen
 * @since Twenty Sixteen 1.0
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

		<?php if ( have_posts() ) : ?>

			<?php

      /* get all news */
      $postType = 'post'; $title = 'Nyhter'; 
      include(locate_template('template-parts/flowpart.php'));

      /* get all studentposts */
      $postType = 'studentposts'; $title = 'Senaste Student Raporter'; 
      include(locate_template('template-parts/flowpart.php'));

      /* get all assignments */
      $postType = 'assignments'; $title = 'Dina Senaste Uppgifter'; 
      include(locate_template('template-parts/flowpart.php'));

      /* get all lessions */
      $postType = 'lession'; $title = 'Dina Senaste Lektioner'; 
      include(locate_template('template-parts/flowpart.php'));

		endif;
		?>

		</main><!-- .site-main -->
	</div><!-- .content-area -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>
