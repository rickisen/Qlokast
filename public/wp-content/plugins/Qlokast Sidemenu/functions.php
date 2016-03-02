<?php
/*
Plugin Name: Qlokast Sidebar
Plugin URI: http://wordpress.org
Description: Plugin for generating school related CPT's
Author: medieinstuututu
Version: 0.1
Author URI: 
*/

// Block direct requests
if ( !defined('ABSPATH') )
	die('-1');
	
	
add_action( 'widgets_init', function(){
     register_widget( 'Qlokast_Side_menu' );
});	

/**
 * Adds Qlokast_Side_menu widget.
 */
class Qlokast_Side_menu extends WP_Widget {

	/**
	 * Register widget with WordPress.
	 */
	function __construct() {
		parent::__construct(
			'Qlokast_Side_menu', // Base ID
			__('Qlokast side menu', 'text_domain'), // Name
			array( 'description' => __( 'Qlokast side menu', 'text_domain' ), ) // Args
		);
	}

	/**
	 * Front-end display of widget.
	 *
	 * @see WP_Widget::widget()
	 *
	 * @param array $args     Widget arguments.
	 * @param array $instance Saved values from database.
	 */
	public function widget( $args, $instance ) {

    echo $args['before_widget'];
		if ( ! empty( $instance['title'] ) ) {
			echo $args['before_title'] . apply_filters( 'widget_title', $instance['title'] ). $args['after_title'];
		}

    $loop = new WP_Query( array( 'post_type' => 'courses' ) ); ?>
      <ul class="menu">

        <!--If user is logged in show "Min sida" link -->
        <li>
          <?php if (is_user_logged_in()): ?>
            <?php global $current_user; ?>
            <?php get_currentuserinfo(); ?>
            <a href="/"> Mitt Flow </a>
            <a href="<?php echo '/author/'.$current_user->user_nicename ;?>"> Min sida</a>
            <br>
          <?php endif ?>
        </li>

        <?php if ( $loop->have_posts()): ?>
        <?php while ( $loop->have_posts() ) : $loop->the_post(); ?>
          <li>
            <!--Drop down list header -->
            <a href="<?php the_permalink() ?>"> <?php asv_the_title(); ?></a>
            <!--Drop down list items -->
            <ul>
              <li>
                <?php $loop2 = new WP_Query( array( 'post_type' => 'lession', 'meta_key'=> '_course_parrent', 'meta_value'=> get_the_ID()) ); ?>
                <?php if ($loop2-> have_posts() ) : ?>
                  <?php while ( $loop2->have_posts() ) : $loop2->the_post(); ?>
                      <a href="<?php the_permalink() ?>"> <?php asv_the_title(); ?></a>
                  <?php endwhile; ?>
              <?php endif; ?>
              </li>
            </ul>
          </li>
        <?php endwhile; wp_reset_postdata(); ?>
        <?php endif; ?>

      </ul> <!-- end menu -->
    <br>

<?php

		echo $args['after_widget'];
	}

	/**
	 * Back-end widget form.
	 *
	 * @see WP_Widget::form()
	 *
	 * @param array $instance Previously saved values from database.
	 */
	public function form( $instance ) {
		if ( isset( $instance[ 'title' ] ) ) {
			$title = $instance[ 'title' ];
		}
		else {
			$title = __( 'New title', 'text_domain' );
		}
		?>
		<p>
			<label for="<?php echo $this->get_field_id( 'title' ); ?>"><?php _e( 'Title:' ); ?></label> 
			<input class="widefat" id="<?php echo $this->get_field_id( 'title' ); ?>" name="<?php echo $this->get_field_name( 'title' ); ?>" type="text" value="<?php echo esc_attr( $title ); ?>">
		</p>
		<?php 
	}

	/**
	 * Sanitize widget form values as they are saved.
	 *
	 * @see WP_Widget::update()
	 *
	 * @param array $new_instance Values just sent to be saved.
	 * @param array $old_instance Previously saved values from database.
	 *
	 * @return array Updated safe values to be saved.
	 */
	public function update( $new_instance, $old_instance ) {
		$instance = array();
		$instance['title'] = ( ! empty( $new_instance['title'] ) ) ? strip_tags( $new_instance['title'] ) : '';

		return $instance;
	}

} // class Qlokast_Side_menu