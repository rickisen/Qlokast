<?php 
if (isset($categoryName)){
  $loop = new WP_Query( array( 'post_type' => $postType , 'category_name' => $categoryName ) );
}else{
  $loop = new WP_Query( array( 'post_type' => $postType ) );
}
?>

<?php if ( $loop->have_posts()): ?>
<h3>
  <?php echo $title ; ?>
</h3>

<?php
while ( $loop->have_posts() ) : $loop->the_post(); ?>
  <div> <?php echo get_the_author() ?> : 
    <a class="<?php echo "studentReportStatus-".get_post_meta( get_the_ID(), 'status', true );?>" href="<?php the_permalink() ?>"> <?php asv_the_title(); ?>  </a> <span class="grade"><?php echo get_post_meta( get_the_ID(), 'grade', true) ?></span>
  </div>
<?php endwhile; wp_reset_postdata(); ?>

<br>

<?php endif; ?>

<?php 
$title = "";
$postType = "";
$categoryName = "";
?>
