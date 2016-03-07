<?php
/*
Plugin Name: Qlokast Student Posts
Plugin URI: http://wordpress.org
Description: Plugin for generating school related CPT's
Author: medieinstuututu
Version: 0.1
Author URI: 
*/

function post_type_studentposts_init(){
  $labels = array(
    'name'                  => 'Student Posts',
    'singular_name'         => 'Student Post',
  );

  $args = array(
    'labels'               => $labels,
    'public'               => true,
    'show_ui'              => true,
    'show_in_menu'         => true,
    'query_var'            => true,
    'rewrite'              => array( 'slug' => 'studentposts' ),
    'capability_type' => 'studentposts',
    'capabilities' => array(
      'publish_posts'      => 'publish_studentpost',
      'edit_posts'         => 'edit_studentpost',
      'read_posts'         => 'read_studentpost',
      'edit_others_posts'  => 'edit_others_studentposts',
      'read_private_posts' => 'read_private_studentposts',
      'edit_post'          => 'edit_studentpost',
      'delete_posts'       => 'delete_studentposts',
      'read_post'          => 'read_studentpost',
    ),
    'has_archive'          => true,
    'hierarchical'         => false,
    'menu_position'        => null,
    'taxonomies'           => array('category'),
    'supports'             => array( 'title', 'editor', 'author', 'thumbnail'),
  );

  register_post_type('studentposts', $args);

  // make sure all necisarry categories exits
  if (get_cat_ID('assignment') == 0){
    wp_insert_term('assignment', 'category' , array('slug' => 'assignment', 'description' => 'Needed for Qlokast Student Post to work, dont change a thing'));
  }
  if (get_cat_ID('weeklyreport') == 0){
    wp_insert_term('weeklyreport', 'category', array('slug' => 'weeklyreport', 'description' => 'Needed for Qlokast Student Post to work, dont change a thing'));
  }
  if (get_cat_ID('studyplan') == 0){
    wp_insert_term('studyplan', 'category', array('slug' => 'studyplan', 'description' => 'Needed for Qlokast Student Post to work, dont change a thing'));
  }

}
add_action('init','post_type_studentposts_init');

/* to make sure that no one can publish a publicaly visible studentpost */
function make_all_studentposts_private( $new_status, $old_status, $post ) { 
    if ( $post->post_type == 'studentposts' && $new_status == 'publish' && $old_status  != $new_status ) {
        $post->post_status = 'private';
        wp_update_post( $post );
    }
} 
add_action( 'transition_post_status', 'make_all_studentposts_private', 10, 3 );

//Inserts custom post in CPT-Reports
function prefix_createStudyplan(){
    global $current_user; get_currentuserinfo();

    /* verify permissions */
    if(!$current_user->has_cap( 'publish_studentpost' )){
      die();
    }

    $user_id = get_current_user_id();
    $category = get_cat_ID('studyplan');

    $post_id  = wp_insert_post( array (
    'post_type'      => 'studentposts',
    'post_title'     => 'Studyplan for '.$current_user->display_name ,
    'post_content'   => wp_strip_all_tags( $_POST['submitStudyplan'] ),
    'post_author'    => $user_id,
    'post_category'  => array($category),
    'post_status'    => 'private', /* Secret studyplan! */
    'comment_status' => 'open',   // if you prefer
    'ping_status'    => 'closed',      // if you prefer
    ) );

    header( "location: /author/".$current_user->user_nicename );
}
add_action( 'admin_post_createStudyplan', 'prefix_createStudyplan');

function prefix_createStudentReport(){
    global $current_user; get_currentuserinfo();

    /* verify permissions */
    if(!$current_user->has_cap( 'publish_studentpost' )){
      die();
    }

    $user_id = get_current_user_id();

    $category = get_cat_ID('weeklyreport');

    $post_id  = wp_insert_post( array (
    'post_type'      => 'studentposts',
    'post_title'     => 'Studentreport for '.$current_user->display_name.' week #'.date('W').".",
    'post_content'   => wp_strip_all_tags( $_POST['submitStudentReport'] ),
    'post_author'    => $user_id,
    'post_category'  => array($category),
    'post_status'    => 'private', /* Secret studentreport! */
    'comment_status' => 'open',   // if you prefer
    'ping_status'    => 'closed',      // if you prefer
    'meta_input'     => array(
      'status'       => $_POST['studentReportStatus']
      )
    ) );

    header( "location: /author/".$current_user->user_nicename );
}

add_action( 'admin_post_createStudentReport', 'prefix_createStudentReport');

function addStudyplanForm($title = "Enter your studyplan:", $placeholder = "Write here..."){
    return '
      <h2>'.$title.'</h2>
      <form method="post" action="/wp-admin/admin-post.php" >
        <input type="hidden" name="action" value="createStudyplan">
        <textarea rows="6" cols="30" name="submitStudyplan" placeholder=" '.$placeholder.' " ></textarea>
        <button type="submit" >Skicka in!</button> 
      </form>
    ';
}

function addStudentReportForm($title = "Enter your studentreport:", $question = "Do you feel up to speed?", $placeholder = "Write here..."){
    return '
      <h2>'.$title.'</h2>
      <form method="post" action="/wp-admin/admin-post.php" >
        <input type="hidden" name="action" value="createStudentReport">
        <textarea rows="6" cols="30" name="submitStudentReport" placeholder=" '.$placeholder.' " ></textarea>
        <p>'.$question.'</p>
        <p>Yes! <input type="radio" name="studentReportStatus" value="yes" checked ></p>
        <p>No! <input type="radio" name="studentReportStatus" value="no" ></p>
        <button type="submit" >Skicka in!</button> 
      </form>
    ';
}

// Hand in Assignments
function prefix_submitAssignment(){
    global $current_user; get_currentuserinfo();

    /* verify permissions */
    if(!$current_user->has_cap( 'publish_studentpost' )){
      die();
    }

    //$user_id = get_current_user_id();

    $assignmentParent = get_post( $_POST['parent'] );
    $category = get_cat_ID('assignment');

    $post_id = wp_insert_post( array (
    'post_type'      => 'studentposts',
    'post_title'     => $assignmentParent->post_title.' '.$current_user->user_login.' '.date("Y-m-d"),
    'post_content'   => wp_strip_all_tags( $_POST['submitAssignmentContent'] ),
    'post_author'    => $current_user->ID, //$user_id,
    'post_category'  => array($category),
    'post_status'    => 'private', /* Secret studentreport! */
    'comment_status' => 'open',   // if you prefer
    'ping_status'    => 'closed',      // if you prefer
    'meta_input'     => array(
      'parent' => $_POST['parent']
      )
    ) );
   
    if ( $_FILES['studentFile']['size'] > 0 ){

      if (!function_exists('wp_generate_attachment_metadata')){
          require_once(ABSPATH . "wp-admin" . '/includes/image.php');
          require_once(ABSPATH . "wp-admin" . '/includes/file.php');
          require_once(ABSPATH . "wp-admin" . '/includes/media.php');
      }

      foreach ($_FILES as $file => $array) {
          if ($_FILES[$file]['error'] !== UPLOAD_ERR_OK) {
              return "upload error : " . $_FILES[$file]['error'];
          }
          $attach_id = media_handle_upload( $file, $post_id );
      }   

      if ($attach_id > 0){
          update_post_meta($post_id, 'studentFile', $attach_id);
          /* update_user_meta( $current_user->ID, 'user_picture', $attach_id); */
      }

    }

    header( "location: /assignments/".$assignmentParent->post_name );
}

add_action( 'admin_post_submitAssignment', 'prefix_submitAssignment');

function recieveAssignmentMiniForm($parent){
    return '
      <form method="post" style="display:inline;"enctype="multipart/form-data" action="/wp-admin/admin-post.php" >
        <input type="hidden" name="action" value="submitAssignment">
        <input type="hidden" name="parent" value="'.$parent.'">
        <input type="file" name="studentFile" id="studentFile">
        <button type="submit" >Skicka in!</button> 
      </form>
    ';
}

function recieveAssignmentForm($parent ,$title = "Hand in your assignment:", $placeholder = "What have you done?"){
    return '
      <h2>'.$title.'</h2>
      <form method="post" enctype="multipart/form-data" action="/wp-admin/admin-post.php" >
        <input type="hidden" name="action" value="submitAssignment">
        <input type="hidden" name="parent" value="'.$parent.'">
        <textarea rows="6" cols="30" name="submitAssignmentContent" placeholder=" '.$placeholder.' " ></textarea>
        <br>
        <input type="file" name="studentFile" id="studentFile">
        <br>
        <button type="submit" >Skicka in!</button> 
      </form>
    ';
}

//======GRADING=====

function prefix_gradingSystem(){
    global $current_user; get_currentuserinfo();

    if(!$current_user->has_cap( 'read_private_studentposts' )){
      die();
    }

    update_metadata('post', $_POST['post_ID'], 'grade', $_POST['assignmentGrade']);

    header( "location: ".get_permalink($_POST['post_ID']) );

}

add_action( 'admin_post_gradingSystem', 'prefix_gradingSystem');

function addGradingSystemForm($title = 'Grade', $question = "Choose Grade:"){
     $post_ID= get_the_ID();
    return '
      <h2>'.$title.'</h2>
      <form method="post" action="/wp-admin/admin-post.php" >
        <input type="hidden" name="action" value="gradingSystem">
        <input type="hidden" name="post_ID" value="'.$post_ID.'">
        <p>'.$question.'</p>
        <p>VG <input type="radio" name="assignmentGrade" value="vg" checked ></p>
        <p>G <input type="radio" name="assignmentGrade" value="g" ></p>
        <p>IG <input type="radio" name="assignmentGrade" value="ig" ></p>
        <button type="submit">Skicka in!</button> 
      </form>
    ';
}
