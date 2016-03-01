<?php 
  $loop = new WP_Query( array( 'post_type' => $postType ) );
?>

<?php if ( $loop->have_posts()): ?>
	<ul class="menu">
		<?php
			while ( $loop->have_posts() ) : $loop->the_post(); ?>
			  <div> 
			    <li>
			    <!--Drop down list header -->
			    	<a href="<?php the_permalink() ?>"> <?php asv_the_title(); ?></a>

			    <!--Drop down list items -->
			    	<ul>
			    		<li>
			    			<?php 
                  $loop2 = new WP_Query( array( 'post_type' => 'lession', 'meta_key'=> '_course_parrent', 'meta_value'=> get_the_ID()) );
                ?>

			    			<?php if ($loop2-> have_posts() ) : ?>
							    <?php while ( $loop2->have_posts() ) : $loop2->the_post(); ?>
							        <a href="<?php the_permalink() ?>"> <?php asv_the_title(); ?></a>
							    <?php endwhile; ?>
							<?php endif; ?>
			    		</li>
			    	</ul>

			    </li>
			  </div>
		<?php endwhile; wp_reset_postdata(); ?>

		<!--If user is logged in show "Min sida" link -->
		<li>
			<?php if (is_user_logged_in()): ?>
				<a href="<?php echo '/author/'.$current_user->user_nicename ;?>"> Min sida</a>
			<?php endif ?>
		</li>

	</ul>
<br>

<?php endif; ?>
