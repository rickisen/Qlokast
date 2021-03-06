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

    <?php // klass access controll, should probably be declared in a plugin and called with some hook instead
      if (in_array('student',$current_user->roles)){ // only applies this to students
        // this cpt is a child-post of a course or a lesseon, so we need to get get the parent course first, 
        // so that we inherit whatever klasses the parent course has given access to
        $parent = getCourseParent(get_the_ID());
        if (!studentAttends($parent)){
         echo '<h1> Du har inte fått rättighet att se denna sida ännu </h1></main></div>';
         die(); // kill all hackers!
        }
    }?> 


    <?php the_post(); ?>
    <div class="assignment">	
      <h1><?php the_title(); ?></h1>
      <p>Publicerad <?php the_time("Y-m-d H:i"); ?> av <?php the_author_posts_link(); ?></p>
      <?php if ($deadline = get_post_meta(get_the_ID(), '_deadline', true)):?>
        <p>Deadline: <?php echo date('Y-m-d', $deadline)?> </p>
      <?php endif ?>
      <?php the_content(); ?>
    </div>

  <?php if ( !empty($grade = get_post_meta( get_the_ID(), 'grade', true))) : ?>
    <span class="grade"> <?php echo $grade ?> </span>
  <?php else : ?>

    <!-- gets the handed in assignment if it exits -->
    <?php $subLoop = new WP_Query( array( 
      'post_type'     => 'studentposts' ,
      'category_name' => 'assignment',
      'meta_key'      => 'parent',
      'meta_value'    => get_the_ID(),
    ))?>

    <?php if ( $subLoop->have_posts() && !$current_user->has_cap('read_private_studentposts')) : ?>
      <?php $subLoop->the_post() ?>
      <span> Uppgift Inlämnad: <a href="<?php the_permalink() ?>"><?php asv_the_title();?></a> </span>
    <?php elseif  ( !$current_user->has_cap('read_private_studentposts') ): ?>
      <?php echo recieveAssignmentForm(get_the_ID()); ?>
    <?php elseif  ($current_user->has_cap('read_private_studentposts')): ?>
      <h3> Inkommna Inlämningar: </h3>
      <?php while ( $subLoop->have_posts() ) : $subLoop->the_post(); ?>
        <div> <?php echo get_the_author() ?> : 

            <a class="<?php echo "studentReportStatus-".get_post_meta( get_the_ID(), 'status', true );?>" href="<?php the_permalink() ?>"> 
              <?php asv_the_title(); ?>  
            </a> 

            <!-- 
                 if this is an assignment, show the grade if we have one, 
                 otherwise print the miniversion of the hand in assignment form 
                 or a link to the handed in assignment
             -->
            <?php if ( $postType == 'assignment') : ?>

              <?php if ( !empty($grade = get_post_meta( get_the_ID(), 'grade', true))) : ?>
                <span class="grade"> <?php echo $grade ?> </span>
              <?php else : ?>

                <!-- gets the handed in assignment if it exits -->
                <?php $subLoop = new WP_Query( array( 
                  'post_type'     => 'studentposts' ,
                  'category_name' => 'assignment',
                  'meta_key'      => 'parent',
                  'meta_value'    => get_the_ID(),
                ))?>

                <?php if ( $subLoop->have_posts() ) : ?>
                  <?php $subLoop->the_post() ?>
                  <span> inlämnad: <a href="<?php the_permalink() ?>"><?php asv_the_title();?></a> </span>
                <?php else : ?>
                  <?php echo recieveAssignmentMiniForm(get_the_ID()); ?>
                <?php endif; ?>

              <?php endif; ?>
            <?php endif; ?>

          </div>
      <?php endwhile; wp_reset_postdata(); ?>
    <?php endif; ?>

  <?php endif; ?>

  <?php
  // If comments are open or we have at least one comment, load up the comment template.
  if ( comments_open() || get_comments_number() ) {
    comments_template();
  } ?>

  </main><!-- #main -->
</div><!-- #primary -->


<?php
get_sidebar();
get_footer();
