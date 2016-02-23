<?php
/**
 * The main template file.
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Qlokast
 */

get_header(); ?>


<?php
get_template_part('template-parts/content', 'header'); 
get_template_part('template-parts/content', 'about'); 
get_template_part('template-parts/content', 'classes'); 
get_template_part('template-parts/content', 'gallery'); 
get_template_part('template-parts/content', 'contact'); 
?>

</body>

</html>


<?php
get_sidebar();
get_footer();
