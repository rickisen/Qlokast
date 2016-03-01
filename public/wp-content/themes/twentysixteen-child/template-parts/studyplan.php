<?php 
	$the_slug = 'studieplan';
	$args=array(
		'name'           => $the_slug,
		'post_type'      => 'studentpost',
		'posts_per_page' => 1
	);	

  $loop = new WP_Query( $args ); ?>

<?php if ( $loop->have_posts()): ?>
<h3>
  <?php echo get_the_author()."s studieplan:" ; ?>
</h3>

<?php
while ( $loop->have_posts() ) : $loop->the_post(); ?>
  <div> <?php echo get_the_author() ?> : 
    <a class="<?php echo "category-".get_the_category()[0]->name;?>" href="<?php the_permalink() ?>"> <?php the_title(); ?></a>
  </div>
<?php endwhile; wp_reset_postdata(); ?>

<br>

<?php endif; ?>

