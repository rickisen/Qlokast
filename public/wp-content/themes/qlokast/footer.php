<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Qlokast
 */

?>

</div><!-- #content -->
	<div class="row">
		<div class="col-lg-10 col-lg-offset-1 text-center">
			<footer id="colophon" class="site-footer" role="contentinfo">
				<div class="site-info">
					<a href="<?php echo esc_url( __( 'https://wordpress.org/', 'qlokast' ) ); ?>"><?php printf( esc_html__( 'Proudly powered by %s', 'qlokast' ), 'WordPress' ); ?></a>
					<span class="sep"> | </span>
					<?php printf( esc_html__( 'Theme: %1$s by %2$s.', 'qlokast' ), 'Qlokast', '<a href="http://qlokast.se/" rel="designer">Qlokast.se</a>' ); ?>
				</div><!-- .site-info -->
			</footer><!-- #colophon -->
		</div>
	</div>
</div><!-- #page -->

<?php wp_footer(); ?>
</div> <!--container-->
</body>
</html>
