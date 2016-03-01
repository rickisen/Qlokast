<?php 
  $loop = new WP_Query( array( 'post_type' => $postType , 'category_name' => $categoryName ) );
?>

<?php if ( $loop->have_posts()): ?>
<h3>
  <?php echo $title ; ?>
</h3>

<?php
while ( $loop->have_posts() ) : $loop->the_post(); ?>
  <div> <?php echo get_the_author() ?> : 
    <a class="<?php echo "studentReportStatus-".get_post_meta( get_the_ID(), 'status', true );?>" href="<?php the_permalink() ?>"> <?php the_title(); ?></a>
  </div>
<?php endwhile; wp_reset_postdata(); ?>

<br>

<?php endif; ?>

<?php 
$title = "";
$postType = "";
$categoryName = "";
?>
