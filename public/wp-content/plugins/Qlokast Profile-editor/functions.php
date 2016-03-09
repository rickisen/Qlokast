<?php
/*
Plugin Name: Qlokast Profile Editor
Plugin URI: http://wordpress.org
Description: Plugin for diplaying and handling a simple form to edit user info
Author: medieinstuututu
Version: 0.1
Author URI: 
*/

// Recieve the data
function prefix_edit_user_profile(){
    global $current_user; get_currentuserinfo();

    if (!empty($_POST['first_name'])){
      $current_user->first_name = $_POST['first_name'];
    } 

    if (!empty($_POST['last_name'])){
      $current_user->last_name  = $_POST['last_name'];
    } 

    if (!empty($_POST['webpage'])){
      $current_user->user_url  = $_POST['webpage'];
    } 

    if (!empty($_POST['description'])){
      update_user_meta( $current_user->ID, 'description', $_POST['description']);
    } 

    if (!empty($_POST['show_description'])){
      update_user_meta( $current_user->ID, 'show_description', $_POST['show_description']);
    } else {
      update_user_meta( $current_user->ID, 'show_description', '' );
    } 

    if (!empty($_POST['show_email'])){
      update_user_meta( $current_user->ID, 'show_email', $_POST['show_email']);
    } else {
      update_user_meta( $current_user->ID, 'show_email', '' );
    } 

    if (!empty($_POST['show_picture'])){
      update_user_meta( $current_user->ID, 'show_picture', $_POST['show_picture']);
    } else {
      update_user_meta( $current_user->ID, 'show_picture', '' );
    } 

    if (!empty($_POST['show_website'])){
      update_user_meta( $current_user->ID, 'show_website', $_POST['show_website']);
    } else {
      update_user_meta( $current_user->ID, 'show_website', '' );
    } 


    // update the users new info into the database
    wp_update_user($current_user);
   
    if ( $_FILES['user_picture']['size'] > 0 ){

      if (!function_exists('wp_generate_attachment_metadata')){
          require_once(ABSPATH . "wp-admin" . '/includes/image.php');
          require_once(ABSPATH . "wp-admin" . '/includes/file.php');
          require_once(ABSPATH . "wp-admin" . '/includes/media.php');
      }

      foreach ($_FILES as $file => $array) {
          if ($_FILES[$file]['error'] !== UPLOAD_ERR_OK) {
              return "upload error : " . $_FILES[$file]['error'];
          }
          $attach_id = media_handle_upload( $file, 0 );
      }   

      if ($attach_id > 0){
          //update_post_meta($new_post,'_thumbnail_id',$attach_id);
          update_user_meta( $current_user->ID, 'user_picture', $attach_id);
      }

    }

    header( "location: /author/".$current_user->user_nicename );
}
add_action( 'admin_post_edit_user_profile', 'prefix_edit_user_profile');

function add_profile_edit_form($title = "Uppdatera din information:", $placeholders = array('first_name' => 'First name', 'last_name' => 'Last name', 'description' => 'Description')){
    echo '
      <h2>'.$title.'</h2>
      <form method="post" enctype="multipart/form-data" action="/wp-admin/admin-post.php" >
        <input type="hidden" name="action" value="edit_user_profile">

        <label for="first_name">Förnamn</label>
        <input type="text" id="first_name" name="first_name" placeholder="'.$placeholders['first_name'].'">

        <label for="last_name">Efternamn</label>
        <input type="text" id="last_name" name="last_name" placeholder="'.$placeholders['last_name'].'">

        <label for="webpage">Hemsida</label>
        <input type="text" id="webpage" name="webpage" placeholder="'.$placeholders['webpage'].'">

        <label for="description">Beskrivning</label>
        <textarea cols="30" id="description" name="description" rows="6"> '.$placeholders['description'].' </textarea>

        <label for="user_picture">Bild</label>
        <br>
        <input type="file" name="user_picture" id="user_picture">
        <br> 
        <br> 
    ';
?>
        <fieldset>
          <legend>Synlighet</legend>

            <input type="checkbox" name="show_description" id="show_description" <?php echo ($placeholders['show_description'] == 'on' ? 'checked' : '') ?> >
            <label for="show_description">Visa profil-text publikt</label>
            <br> 

            <input type="checkbox" name="show_picture"  id="show_picture"  <?php echo ($placeholders['show_picture'] == 'on' ? 'checked' : '') ?>>
            <label for="show_picture">Visa bild publikt</label>
            <br> 

            <input type="checkbox" name="show_email"    id="show_email"    <?php echo ($placeholders['show_email'] == 'on' ? 'checked' : '') ?>>
            <label for="show_email">Visa email publikt</label>
            <br> 

            <input type="checkbox" name="show_website"  id="show_website"  <?php echo ($placeholders['show_website'] == 'on' ? 'checked' : '') ?>>
            <label for="show_website">Visa hemsida publikt</label>
            <br> 

        </fieldset>    

        <button type="submit" >Skicka in</button> 
      </form>
<?php 
}

function be_gravatar_filter($avatar, $id_or_email, $size, $default, $alt) {
	$custom_avatar = wp_get_attachment_url( get_user_meta($id_or_email, 'user_picture', true ));

  // only show picture if the view is logged or if it's marked to be showed publicly
  if (get_user_meta($id_or_email, 'show_picture', true) != 'on' && !is_user_logged_in() ){
    return $avatar;
  }

	if ($custom_avatar) 
		$return = '<img src="'.$custom_avatar.'" width="'.$size.'" height="'.$size.'" alt="'.$alt.'" />';
	elseif ($avatar) 
		$return = $avatar;
	else 
		$return = '<img src="'.$default.'" width="'.$size.'" height="'.$size.'" alt="'.$alt.'" />';
	return $return;
}
add_filter('get_avatar', 'be_gravatar_filter', 10, 5);
