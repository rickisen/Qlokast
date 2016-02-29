<?php 
  $loop = new WP_Query( array( 'post_type' => $postType ) );
?>

<?php if ( $loop->have_posts()): ?>
<h3>
  <?php echo $title ; ?>
</h3>

<?php
while ( $loop->have_posts() ) : $loop->the_post(); ?>
  <a class="<?php echo "category-".get_the_category()[0]->name;?>" href="<?php the_permalink() ?>"><h4> <?php the_title(); echo " by ".the_author() ?></h4></a>

<?php endwhile; wp_reset_postdata(); ?>

<br>

<?php endif; ?>

