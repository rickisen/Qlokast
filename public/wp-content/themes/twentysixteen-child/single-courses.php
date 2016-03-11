<?php
/**
 * The template for displaying all single posts.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package Qlokast
 */
get_header(); ?>

<div id="primary" class="content-area">
  <main id="main" class="site-main" role="main">
    
    <?php the_post(); ?>

    <?php // klass access controll, should probably be within a plugin and called with some hook instead
      if (in_array('student',$current_user->roles)){
        // this cpt is a child-post of a course, so we need to get get the parents klass first, 
        // so that we inherit whatever klasses the parent has given access to
        $parent = getCourseParent(get_the_ID());

        if (!studentAttends($parent)){
          echo '<h1> Du har inte fått rättighet att se denna sida ännu </h1></main></div>';
          die(); // kill all hackers!
        }
      }
    ?> 

    <div class="course">	
      <h1><?php the_title(); ?></h1>
      <p>Publicerad <?php the_time("Y-m-d H:i"); ?> av <?php the_author_posts_link(); ?></p>
      <?php the_content(); ?>
    </div>

    <!-- look for lessons conencted to this course -->
    <?php
      $args = array(
        'meta_key'   => '_course_parent',
        'meta_value' => $post->ID,
        'post_type'  => 'lesson'
      );
      $the_query = new WP_Query( $args );
    ?>

    <?php if ( $the_query->have_posts() ) : ?>
      <hr>
      <h3> Lektioner </h3>

      <!-- a new the loop with lessons -->
      <?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
        <a href="<?php the_permalink() ?>"><h5><?php the_title(); ?></h5></a>
      <?php endwhile; ?>
      <br>
      <?php wp_reset_postdata(); ?>
    <?php endif; ?>

    <!-- a new the loop with lessons -->
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
      <h3> Kurs Övningar </h3>

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


<?php
get_sidebar();
get_footer();
