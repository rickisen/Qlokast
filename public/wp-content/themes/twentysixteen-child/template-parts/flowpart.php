<?php 
  $loop = new WP_Query( array( 'post_type' => $postType ) );
?>

<?php if ( $loop->have_posts()): ?>
<h3>
  <?php echo $title ; ?>
</h3>

<?php
while ( $loop->have_posts() ) : $loop->the_post(); ?>
  <div> <?php echo get_the_author() ?> : 
    <a class="<?php echo "category-".get_the_category()[0]->name;?>" href="<?php the_permalink() ?>"> <?php asv_the_title(); ?></a>
  </div>
<?php endwhile; wp_reset_postdata(); ?>

<br>

<?php endif; ?>

