<?php
/**
 * The template for displaying all single studentposts.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#studentclass.
 *
 * @package Qlokast
 */

get_header(); ?>

<div id="primary" class="content-area">
	<main id="main" class="site-main" role="main">

		<?php the_post(); ?>
		<div>	
			<h1><?php asv_the_title(); ?></h1>
			
			<p>
				Här kan du läsa om våra elever som går på utbildningen.
			</p>
			<hr>
		</div>

		
			<?php $args = array(
								'blog_id'      => $GLOBALS['blog_id'],
								'role'         => 'student',
								'meta_key'     => '',
								'meta_value'   => '',
								'meta_compare' => '',
								'meta_query'   => array(),
								'date_query'   => array(),        
								'include'      => array(),
								'exclude'      => array(),
								'orderby'      => 'login',
								'order'        => 'ASC',
								'offset'       => '',
								'search'       => '',
								'number'       => '',
								'count_total'  => false,
								'fields'       => 'all',
								'who'          => ''
							 ); 
							
 			
				$blogusers = get_users( $args );
				// Array of WP_User objects.
				foreach ( $blogusers as $user ) {
					echo '<div class="student_profile">';
					echo get_avatar($user->ID, "50"); 
					echo '<a href=/author/'.$user->user_nicename.'> '.$user->display_name.'</a> <br><br><br>' ;
					echo '</div>';
				}

		?>


<h4>Uppdaterad <?php the_time("Y-m-d H:i"); ?></i></h4>
      
  </main><!-- #main -->
</div><!-- #primary --> 

<?php
get_sidebar();
get_footer();
