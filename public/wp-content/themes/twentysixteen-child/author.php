<?php

get_header(); ?>

<div id="primary" class="content-area">
  <main id="main" class="site-main" role="main">

  <!-- get info for the displayed user -->
  <?php $curauth = (isset($_GET['author_name'])) ? get_user_by('slug', $author_name) : get_userdata(intval($author)); ?>

  <!-- get picture for the displayed user -->
  <?php echo get_avatar($curauth->ID, "500") ?>
  <h1><?php echo $curauth->display_name." ".$curauth->last_name; ?></h1>
  <dl>
      <?php if ( $curauth->show_description == 'on' || is_user_logged_in() ): ?>
      <dt>Profile</dt>
      <dd><?php echo $curauth->user_description; ?></dd>
      <?php endif ?>
      <?php if ( $curauth->show_website == 'on' || is_user_logged_in() ): ?>
      <dt>Website</dt>
      <dd><a href="<?php echo $curauth->user_url; ?>"><?php echo $curauth->user_url; ?></a></dd>
      <?php endif ?>
      <?php if ( $curauth->show_email == 'on' || is_user_logged_in() ): ?>
      <dt>Email</dt>
      <dd><?php echo $curauth->user_email; ?></dd>
      <?php endif ?>
  </dl>

  <?php
    /* List reports*/
    if ( $current_user->ID == $curauth->ID && !$current_user->has_cap( 'read_private_studentposts' )) {
      echo addStudentReportForm(); // outputs Form for studentreport
    }
    if ( $current_user->ID == $curauth->ID || $current_user->has_cap( 'read_private_studentposts' ) ) {
      $loop = new WP_Query( array( 'post_type' => 'studentposts' , 'category_name' => 'weeklyreport', 'author' => $curauth->ID ) );
      if ( $loop->have_posts() ) {
        echo "<h3>".$curauth->display_name."s studentrapporter: </h3>";
      }
      while ( $loop->have_posts() ) : $loop->the_post(); ?>
        <div> <?php echo get_the_author() ?> : 
          <a class="<?php echo "category-".get_the_category()[0]->name;?>" href="<?php the_permalink() ?>"> <?php the_title(); ?></a>
        </div>
      <?php endwhile; wp_reset_postdata();
    }
  ?>

  <?php /* Check for studieplan */
    if ($current_user->ID == $curauth->ID || $current_user->has_cap( 'read_private_studentposts' ) ){
      $loop = new WP_Query( array( 'post_type' => 'studentposts' , 'category_name' => 'studyplan', 'author' => $curauth->ID ) );

      if ( $loop->have_posts() ) {
        echo "<h3>".$curauth->display_name."s studieplan: </h3>";

        while ( $loop->have_posts() ) : $loop->the_post(); ?>
          <div> <?php echo get_the_author() ?> : 
            <a class="<?php echo "category-".get_the_category()[0]->name;?>" href="<?php the_permalink() ?>"> <?php the_title(); ?></a>
          </div>

        <?php endwhile; wp_reset_postdata();


      } elseif ( $current_user->ID == $curauth->ID && in_array('student', $current_user->roles) ) {
        echo addStudyplanForm(); // outputs Form for studyplan

      } elseif (in_array('student',$current_user->roles)){

      } elseif ( $current_user->ID == $curauth->ID && !$current_user->has_cap( 'read_private_studentposts' )) {
        echo addStudyplanForm(); // outputs Form for studyplan
      } elseif ( $current_user->ID == $curauth->ID && !$current_user->has_cap( 'read_private_studentposts' )){
        echo $curauth->display_name." har inte lämnat in sin studieplan!";
      }
    }
  ?>

  <hr>

  <!-- printar ut alla nyheter som denna person gjort, om hen nu gjort nagra -->
  <?php if ( have_posts() ) : ?>
    <?php while ( have_posts() ) : the_post(); ?>
      <p><a href="<?php	the_permalink() ?>" > <?php	the_title() ?></a></p>
    <?php	endwhile ?>
  <?php	endif ?>

  <!-- form to update profile -->
  <?php if ( is_user_logged_in() && $current_user->ID == $curauth->ID ) : ?>
  <?php	echo add_profile_edit_form('Uppdatera din profil här', array(
    'first_name'       => $curauth->first_name,
    'last_name'        => $curauth->last_name,
    'webpage'          => $curauth->user_url,
    'description'      => $curauth->user_description,
    'show_description' => $curauth->show_description,
    'show_email'       => $curauth->show_email,
    'show_picture'     => $curauth->show_picture,
    'show_website'     => $curauth->show_website,
    )); ?>
  <?php	endif ?>

  </main><!-- .site-main -->
</div><!-- .content-area -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>
