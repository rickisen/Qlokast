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
    /* Print tha Form */
    if ($current_user->ID == $curauth->ID){
      echo "<h2>Lämmna in Studieplan:</h2>";
      echo do_shortcode('[wpuf_form id="92"]');
    }
  ?>

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
