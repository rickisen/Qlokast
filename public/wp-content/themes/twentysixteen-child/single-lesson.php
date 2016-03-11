<?php
/**
 * The template for displaying all single lessons.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package Qlokast
 */

get_header(); ?>

<div class="container">
  <div id="primary" class="content-area">
    <main id="main" class="site-main" role="main">

        <?php the_post(); ?>

        <?php // klass access controll, should probably be declared in a plugin and called with some hook instead
          if (in_array('student',$current_user->roles)){ // only applies this to students
            // this cpt is a child-post of a course, so we need to get get the parents klass first, 
            // so that we inherit whatever klasses the parent has given access to
            $parent = getCourseParent(get_the_ID());

            if (!studentAttends($parent)){
             echo '<h1> Du har inte fått rättighet att se denna sida ännu </h1></main></div>';
             die(); // kill all hackers!
            }
          }?> 

          <div class="lesson">	
            <h1><?php the_title(); ?></h1>
            <p>Publicerad <?php the_time("Y-m-d H:i"); ?> av <?php the_author_posts_link(); ?></p>
            <?php the_content(); ?>
          </div>

          <!-- Find all assignments belonging to this lesson -->
          <?php
            $args = array(
              'meta_key'   => '_lesson_course_parent',
              'meta_value' => $post->ID,
              'post_type'  => 'assignment'
            );
            $the_query = new WP_Query( $args );
          ?>

          <?php if ( $the_query->have_posts() ) : ?>
            <hr>
            <h3> Övningar </h3>

            <!-- a new the loop with lessons -->
            <?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
              <a href="<?php the_permalink() ?>"><h5><?php the_title(); ?></h5></a>
            <?php endwhile; ?>

            <?php wp_reset_postdata(); ?>
          <?php endif; ?>

          <?php 
            // If comments are open or we have at least one comment, load up the comment template.
            if ( comments_open() || get_comments_number() ) {
              comments_template();
            } 
          ?>

    </main><!-- #main -->
  </div><!-- #primary -->
</div><!--container-->


<?php
get_sidebar();
get_footer();
