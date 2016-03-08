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

<!-- remember what role we have -->
<?php if ( in_array('student', $current_user->roles) ){
    $role = 'student';
  } else {
    $role = 'other';
  }
?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

      <?php if ( function_exists( 'soliloquy' ) ) { soliloquy( '89' ); } 
      if ( function_exists( 'soliloquy' ) ) { soliloquy( 'slider', 'slug' ); } ?>
      <br>

      <?php if (!is_user_logged_in()) {
        include(locate_template('template-parts/presentation.php'));
      }?>

      <?php 
        if ( have_posts() ) {
          /* get all news */
          $postType = 'news'; $title = 'Nyheter'; 
          include(locate_template('template-parts/flowpart.php'));

          if ($role == 'student'){ // show this stuff only for students

            /* get all assignments */
            $postType = 'assignment'; $title = 'De senaste uppgifterna'; $switch = '1'; 
            include(locate_template('template-parts/flowpart.php'));

            /* get all lessons */
            $postType = 'lesson'; $title = 'De senaste lektionerna'; $switch = '1'; 
            include(locate_template('template-parts/flowpart.php'));

          } else { // show this stuff only for teachers and others

            /* get assignment answers */
            $postType = 'studentposts'; $title = 'Inkommna Inlämningar'; $categoryName = 'assignment'; $switch = '2'; 
            include(locate_template('template-parts/flowpart.php'));

            /* get all studentreports that needs to catch up */
            $postType = 'studentposts'; $title = 'Studenter som ligger efter'; $categoryName = 'weeklyreport'; $value = 'no'; $key = 'status'; $switch = '3'; 
            include(locate_template('template-parts/flowpart.php'));

            /* get all studentreports */
            $postType = 'studentposts'; $title = 'De senaste studentrapporterna'; $categoryName = 'weeklyreport'; $switch = '2'; 
            include(locate_template('template-parts/flowpart.php'));

            /* get student plans */
            $postType = 'studentposts'; $title = 'Studieplaner'; $categoryName = 'studyplan'; $switch = '2'; 
            include(locate_template('template-parts/flowpart.php'));

          }

        }
      ?>

		</main><!-- .site-main -->
	</div><!-- .content-area -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>
