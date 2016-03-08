<?php
/*
Plugin Name: Qlokast Grade Client
Plugin URI: http://wordpress.org
Description: Plugin for adding support for School Classes amongst users
Author: medieinstuututu
Version: 0.1
Author URI: 
*/

function courseFinalGrade(){

  // Validate the current user
  global $current_user; get_currentuserinfo();
  if (!is_user_logged_in() || !$current_user->has_cap('manage_options')) {
    return;
  }

  // Handle incomming POSTS 
  if (isset($_POST['_schoolclass']) && !empty($_POST['_schoolclass']) && isset($_POST['users']) ){
    $newClass = $_POST['_schoolclass'];
    $users = $_POST['users'];

    foreach ($users as $user) {
      if ( empty(get_user_meta($user, 'schoolclass', true)) ) {
        add_user_meta($user, 'schoolclass', $newClass);
      } elseif ($newClass > 0){
        update_user_meta($user, 'schoolclass', $newClass);
      } elseif ($newClass <= 0){
        delete_user_meta($user, 'schoolclass');
      }
    }

  } 

  // Output the form and table header ?>
    <div class="wrap">
      <h1>Manage Student's "Class"<h1>
      <form method="post" action="">
        <input type="hidden" name="schoolclass" value="true">
        <table class="wp-list-table widefat fixed striped users">
          <thead> 
            <tr>
              <th scope="col" id='checkbox' class='manage-column column-username column-primary sortable desc'>
                <a href="">
                  <span> Select </span> <span class="sorting-indicator"> </span>
                </a>
              </th>
              <th scope="col" id='username' class='manage-column column-username column-primary sortable desc'>
                <a href="">
                  <span>Username </span> <span class="sorting-indicator"> </span>
                </a>
              </th>
              <th scope="col" id='name' class='manage-column column-name sortable desc'>
                <a href="">
                  <span>Name </span> <span class="sorting-indicator"> </span>
                </a>
              </th>
              <th scope="col" id='shoolclass' class='manage-column column-roles'>School Class </th>
            </tr>
          </thead>
  <?php

    // make a new row for every student
  $students = get_users(array('role' => 'Student'));
  foreach ($students as $student) {
    ?>
      <tr id='<?php echo 'user-'.$student->ID ?>'>
        <th scope='row' class=''>
        <label class="screen-reader-text" for="<?php echo 'user_'.$student->ID ?>">Select <?php echo 'user_'.$student->nicename ?> </label>
        <input type='checkbox' name='users[]' id='<?php echo 'user_'.$student->ID ?>' class='student' value='<?php echo $student->ID ?>' />
        </th>
        <td class='username column-username has-row-actions column-primary' data-colname="Username">
          <strong>
            <a href=""><?php echo $student->data->user_login ?></a>
          </strong>
        </td>
        <td class='name column-name' data-colname="Name"> <?php echo $student->data->display_name ?> </td>
        <td class='schoolclass column-roles' data-colname="SchoolClass"><?php echo $student->schoolclass ?></td>
      </tr>
    <?php
  }

  // The select at the bottom of the table ?>
  </table>
      <div class="tablenav bottom">
        <div class="alignleft actions bulkactions">
          <label for="bulk-action-selector-bottom" class="screen-reader-text">Select bulk action </label>
          <select name="_schoolclass" id="bulk-action-selector-bottom">
            <option value="">Change Class</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="-1">No Class</option>
          </select>
          <input type="submit" id="doaction2" class="button action" value="Apply"  />
        </div>
        <br class="clear" />
      </div>
  <?php

  echo '</form></div>'; // end of wrap
}

function add_QlokastGradeClient_to_admin_menu(){
  add_users_page("Final Grades","Final Grades",'manage_options',"courseFinalGrade", "courseFinalGrade" );
}
add_action("admin_menu", "add_QlokastGradeClient_to_admin_menu");
