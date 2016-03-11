<?php 

  switch ($switch) {
    case '1':
      $loop = new WP_Query( array( 'post_type' => $postType ) );
      break;
    case '2':
      $loop = new WP_Query( array( 'post_type' => $postType, 'category_name' => $categoryName ) );
      break;
    case '3':
      $loop = new WP_Query( array( 'post_type' => $postType , 'category_name' => $categoryName, 'meta_key' => $key, 'meta_value' => $value ) );
      break;
    default:
      $loop = new WP_Query( array( 'post_type' => $postType ) );
      break;
  }
?>

<?php if ( $loop->have_posts()): ?>
<h3>
  <?php echo $title ; ?>
</h3>

<?php
while ( $loop->have_posts() ) : $loop->the_post(); ?>
<?php if (studentAttends(getCourseParent(get_the_ID())) || !in_array('student', $current_user->roles) ): ?>
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
<?php endif; ?>
<?php endwhile; wp_reset_postdata(); ?>

<br>

<?php endif; ?>

<?php 
$title = "";
$postType = "";
$categoryName = "";
$value = "";
?>
