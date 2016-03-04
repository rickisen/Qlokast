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


  <?php if ( !empty($grade = get_post_meta( get_the_ID(), 'grade', true))) : ?>
    <span class="grade"> <?php echo $grade ?> </span>
  <?php else : ?>

    <!-- gets the handed in assignment if it exits -->
    <?php $subLoop = new WP_Query( array( 
      'post_type'     => 'studentposts' ,
      'category_name' => 'assignment',
      'meta_key'      => 'parrent',
      'meta_value'    => get_the_ID(),
    ))?>

    <?php if ( $subLoop->have_posts() ) : ?>
      <?php $subLoop->the_post() ?>
      <span> Du har redan lämnat in denna uppgift: <a href="<?php the_permalink() ?>"><?php asv_the_title();?></a> </span>
    <?php else : ?>
      <?php echo recieveAssignmentForm(get_the_ID()); ?>
    <?php endif; ?>

  <?php endif; ?>

  </main><!-- #main -->
</div><!-- #primary -->


<?php
get_sidebar();
get_footer();
