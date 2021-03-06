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

     ?>

      <ul id="menutree">

        <!--If user is logged in show "Min sida" link -->
        
        <?php if (is_user_logged_in()): ?>
            <?php global $current_user; ?>
            <?php get_currentuserinfo(); ?>
            <li><a href="/"> Mitt Flow </a></li>
            <li><a href="<?php echo '/author/'.$current_user->user_nicename ;?>"> Min sida</a></li>
            <hr>

<!--====Courses================-->

<!--Dropdown menu header -->
	  	<?php $coursesLoop = new WP_Query( array( 'post_type' => 'courses' ) );?>
	  	<?php if ( $coursesLoop->have_posts()): ?>
	    	<?php while ( $coursesLoop->have_posts() ) : $coursesLoop->the_post(); ?>
          <?php if (studentAttends(get_the_ID()) || !in_array('student', $current_user->roles) ): ?>
            <?php $ID = get_the_ID(); ?>
	 

		    <li>
		        <label class="menu_label" for="<?php echo the_title() ?>">
		          <span class="expandmenu"> + </span> <a href="<?php the_permalink() ?>"><?php asv_the_title(); ?></a>
		        </label>
		        <input type="checkbox" id="<?php echo the_title() ?>" />  

		      <!--Dropdown items Lessons and Assignments-->                          
		        <ul> 
		          <li>
		            <label for="<?php echo the_title().'2' ?>" class="menu_label"> Lektioner</label>
		            <input type="checkbox" id="<?php echo the_title().'2' ?>" />

		            <ul>
		              	<?php $lessonsLoop = new WP_Query( array( 'post_type' => 'lesson', 'meta_key'=> '_course_parent', 'meta_value'=> $ID) ); ?>
		                	<?php if ($lessonsLoop-> have_posts() ) : ?>
		                  		<?php while ( $lessonsLoop->have_posts() ) : $lessonsLoop->the_post(); ?>
                          <?php $LessonID = get_the_ID(); ?>
				                    <li>
				                    <a href="<?php the_permalink() ?>"> <?php asv_the_title(); ?></a> 
				                    </li>
                            <?php $lessonAssLoop = new WP_Query( array( 'post_type' => 'assignment', 'meta_key'=> '_lesson_course_parent', 'meta_value'=> $LessonID) ); ?>
                              <?php if ($lessonAssLoop-> have_posts() ) : ?>
                                <ul class="lessonAss">
                                  <?php while ( $lessonAssLoop->have_posts() ) : $lessonAssLoop->the_post(); ?>
                                    <li>
                                    <a href="<?php the_permalink() ?>"> <?php asv_the_title(); ?></a> 
                                    </li>
                                  <?php endwhile; ?>
                                </ul>
                              <?php endif; ?>
		                  		<?php endwhile; ?>
		              		<?php endif; ?>
		            </ul>
		          </li>
			        <li>
			            <label for="<?php echo the_title().'3' ?>" class="menu_label">Uppgifter</label>
			            <input type="checkbox" id="<?php echo the_title().'3' ?>" />
			            <ul>
			              	<?php $assignmentLoop = new WP_Query( array( 'post_type' => 'assignment', 'meta_key'=> '_lesson_course_parent', 'meta_value'=> $ID)); ?>
		                	<?php if ($assignmentLoop-> have_posts() ) : ?>
		                  		<?php while ( $assignmentLoop->have_posts() ) : $assignmentLoop->the_post(); ?>
				                    <li>
				                    <a href="<?php the_permalink() ?>"> <?php asv_the_title();?> </a>
				                    </li>
		                  		<?php endwhile; ?>
		              		<?php endif; ?>
			            </ul>
			        </li>
		        </ul>
		    </li>
        <?php endif; ?>
	    <?php endwhile; wp_reset_postdata(); ?>
	  <?php endif; ?>
	<?php endif ?> <!--if user is logged in -->

	<hr>

<!--==========NEWS==========-->
				<h2>NYHETER</h2>
				<?php $newsLoop = new WP_Query( array( 'post_type' => 'news')); ?>
                <?php if ($newsLoop-> have_posts() ) : ?>
                  <?php while ( $newsLoop->have_posts() ) : $newsLoop->the_post(); ?>
                    <li>
                    <a href="<?php the_permalink() ?>"> <?php asv_the_title();?> </a>
                    </li> 
                  <?php endwhile; ?>
              <?php endif; ?>

</ul>

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
