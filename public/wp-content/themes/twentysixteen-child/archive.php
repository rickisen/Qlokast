		<?php wp_get_archives($args=array(
		'type=year',
		'post_type=studentposts')); ?>

		<?php if ( have_posts() ) { ?>
			<h1 class="page-title">
				<?php
					if ( is_day() ) :?>
						Dagsarkiv
					<?php elseif ( is_month() ) :?>
						 Månadsarkiv
					<?php elseif ( is_year() ) :?>
						Årsarkiv
					<?php else :?>
						Arkiv
					<?php endif;
				}?>
			</h1>

			<!--the loop-->
			<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
				<h3><a href='<?php the_permalink(); ?>'><?php the_title(); ?> </a></h3>
				<?php the_date();?>
			<?php endwhile; else : ?>
			<p><?php _e( 'Inga inlägg.' ); ?></p>
		<?php endif; ?>