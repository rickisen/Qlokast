<?php
/**
* The template for displaying all single studentposts.
*
* @link https://developer.wordpress.org/themes/basics/template-hierarchy/#studentclass.
*
* @package Qlokast
*/

get_header(); ?>

<div id="primary" class="content-area">
  <main id="main" class="site-main" role="main">

  <?php the_post(); ?>
  <div>	
    <h1><?php asv_the_title(); ?></h1>

    <p>
      Här kan du läsa om våra elever som går på utbildningen.
    </p>

    <hr>
  </div>

  <?php $args = array(
      'blog_id'      => $GLOBALS['blog_id'],
      'role'         => 'student',
      'orderby'      => 'login',
      'order'        => 'ASC',
      'count_total'  => false,
      'fields'       => 'all',
  ); 

  $students = get_users( $args );

  // Klassify the array, (divide the students into their Klasses)
  foreach ( $students as $student ) {
    if ($student->has_cap('yearOne')){
      $klasses['yearOne'][] = $student;
    }elseif ($student->has_cap('yearTwo')){
      $klasses['yearTwo'][] = $student;
    }elseif ($student->has_cap('yearThree')){
      $klasses['yearThree'][] = $student;
    }elseif ($student->has_cap('yearFour')){
      $klasses['yearFour'][] = $student;
    }elseif ($student->has_cap('yearFive')){
      $klasses['yearFive'][] = $student;
    }else{
      $klasses['noClass'][] = $student;
    }
  }

  $klassNamn = [
    'noClass'   => 'Klassen',
    'yearOne'   => 'Klass 1',
    'yearTwo'   => 'Klass 2',
    'yearThree' => 'Klass 3',
    'yearFour'  => 'Klass 4',
    'yearFive'  => 'Klass 5',
  ];

  foreach ($klasses as $klassKey => $klass) {
    echo '<h3>'.$klassNamn[$klassKey].'</h3>';
    foreach ( $klass as $student ) {
      echo '<div class="student_profile">';
      echo get_avatar($student->ID, "100").'</br>'; 
      echo '<a href=/author/'.$student->user_nicename.'> '.$student->display_name.'</a> ' ;
      echo '</div>';
    }
  }

  ?>

  <h4>Uppdaterad <?php the_time("Y-m-d H:i"); ?></i></h4>

  </main><!-- #main -->
</div><!-- #primary --> 

<?php
get_sidebar();
get_footer();
