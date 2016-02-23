<div class="course">	
	<h1><?php the_title(); ?></h1>
	<p>Publicerad <?php the_time("Y-m-d H:i"); ?> av <?php the_author_posts_link(); ?></p>
	<?php the_content(); ?>
</div>