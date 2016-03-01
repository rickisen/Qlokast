<?php

get_header(); ?>

<div id="primary" class="content-area">
  <main id="main" class="site-main" role="main">

  <!-- get info for the displayed user -->
  <?php $curauth = (isset($_GET['author_name'])) ? get_user_by('slug', $author_name) : get_userdata(intval($author)); ?>
  <h1><?php echo $curauth->first_name." ".$curauth->last_name; ?></h1>
  <dl>
      <dt>Profile</dt>
      <dd><?php echo $curauth->user_description; ?></dd>
      <dt>Website</dt>
      <dd><a href="<?php echo $curauth->user_url; ?>"><?php echo $curauth->user_url; ?></a></dd>
    <?php
        /* $curauth->aim; */
        /* $curauth->description; */
        /* $curauth->display_name; */
        /* $curauth->first_name; */
        /* $curauth->ID; */
        /* $curauth->jabber; */
        /* $curauth->last_name; */
        /* $curauth->nickname; */
        /* $curauth->user_email; */
        /* $curauth->user_login; */
        /* $curauth->user_nicename; */
        /* $curauth->user_registered; */
        /* $curauth->user_url; */
        /* $curauth->yim; */
    ?>
  </dl>

  <?php
      /* get all studentposts */
      $postType = 'studentposts'; $title = 'Senast Inlämnat Material '; 
      include(locate_template('template-parts/flowpart.php'));
  ?>

  <?php 
    /* List reports*/
    if ( $current_user->ID == $curauth->ID ) {
      echo addStudentReportForm(); // outputs Form for studentreport
    }
    if ( $current_user->ID == $curauth->ID || $current_user->has_cap( 'read_private_studentposts' ) ) {
      $loop = new WP_Query( array( 'post_type' => 'studentposts' , 'category_name' => 'studentrapport', 'author' => $curauth->ID ) );
      if ( $loop->have_posts() ) {
        echo "<h3>".$curauth->first_name."s studentrapporter: </h3>";
      }
      while ( $loop->have_posts() ) : $loop->the_post(); ?>
        <div> <?php echo get_the_author() ?> : 
          <a class="<?php echo "category-".get_the_category()[0]->name;?>" href="<?php the_permalink() ?>"> <?php the_title(); ?></a>
        </div>
      <?php endwhile; wp_reset_postdata();
    }
  ?>

  <?php
    /* Check for studieplan */
    if ($current_user->ID == $curauth->ID || $current_user->has_cap( 'read_private_studentposts' ) ){
      $loop = new WP_Query( array( 'post_type' => 'studentposts' , 'category_name' => 'studieplan', 'author' => $curauth->ID ) );
      if ( $loop->have_posts() ) {
        echo "<h3>".$curauth->first_name."s studieplan: </h3>";
      }
      if ( $loop -> have_posts() ) {
        while ( $loop->have_posts() ) : $loop->the_post(); ?>
          <div> <?php echo get_the_author() ?> : 
            <a class="<?php echo "category-".get_the_category()[0]->name;?>" href="<?php the_permalink() ?>"> <?php the_title(); ?></a>
          </div>
        <?php endwhile; wp_reset_postdata();
      }elseif ( $current_user->ID == $curauth->ID ) {
        echo addStudyplanForm(); // outputs Form for studyplan
      }else{
        echo $curauth->display_name." har inte lämnat in sin studieplan!";
      }
    }
  ?>

  <?php ?>
  <!-- printar ut alla nyheter som denna person gjort, om hen nu gjort nagra -->
  <?php if ( have_posts() ) : ?>
    <?php while ( have_posts() ) : the_post(); ?>
      <p><a href="<?php	the_permalink() ?>" > <?php	the_title() ?></a></p>
    <?php	endwhile ?>
  <?php	endif ?>

  </main><!-- .site-main -->
</div><!-- .content-area -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>
