<?php
/*
Plugin Name: Qlokast School Class
Plugin URI: http://wordpress.org
Description: Plugin for adding support for School Classes amongst users
Author: medieinstuututu
Version: 0.1
Author URI: 
*/

function schoolclass(){

  // Validate the current user
  global $current_user; get_currentuserinfo();
  if (!is_user_logged_in() || !$current_user->has_cap('manage_options')) {
    return;
  }

  // Handle incomming POSTS 
  if (isset($_POST['_schoolclass']) && !empty($_POST['_schoolclass']) && isset($_POST['studentIDs']) ){
    $newKlass = $_POST['_schoolclass'];
    $studentIDs = $_POST['studentIDs'];

    // objectify the studentIDs
    $students = array();
    foreach ($studentIDs as $studentID) {
      $students[] = new WP_User($studentID);
    }

    // We only accept changing to theese klasses in this function
    $allowedKlasses = ['yearOne','yearTwo','yearThree','yearFour','yearFive','none'];
    if (!in_array($newKlass, $allowedKlasses)){
      return false;
    }

    foreach ($students as $student) {
      // if we are here we know that we want to remove this student from all currently set Klasses 
      // because we only ever want a student to belong to one klass, and if 
      // we want to uptade which klass that is we need to first remove his old klass
      foreach ($allowedKlasses as $Klass) {
        if (in_array($Klass, $student->caps)) {
          $student->remove_cap($Klass);
        }
      }
      // Add the student to the new klass if the user didnt 
      // choose the "none" option
      if ( $newKlass != "none" ) {
        // now add him to the approved class cap
        $student->add_cap($newKlass);
      }
    }

  }

  printStudentTable();
}
function add_QlokastSchoolClass_to_admin_menu(){
  add_users_page("School Classes","School Classes",'manage_options',"schoolclass", "schoolclass" );
}
add_action("admin_menu", "add_QlokastSchoolClass_to_admin_menu");

// Output the form and table header 
function printStudentTable(){
?>
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
        <input type='checkbox' name='studentIDs[]' id='<?php echo 'user_'.$student->ID ?>' class='student' value='<?php echo $student->ID ?>' />
        </th>
        <td class='username column-username has-row-actions column-primary' data-colname="Username">
          <strong>
            <a href=""><?php echo $student->data->user_login ?></a>
          </strong>
        </td>
        <td class='name column-name' data-colname="Name"> <?php echo $student->data->display_name ?> </td>
        <td class='schoolclass column-roles' data-colname="SchoolClass"><?php print_r($student->caps) ?></td>
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
            <option value="yearOne">Year one</option>
            <option value="yearTwo">Year two</option>
            <option value="yearThree">Year three</option>
            <option value="yearFour">Year four</option>
            <option value="yearFive">Year five</option>
            <option value="none">No Class</option>
          </select>
          <input type="submit" id="doaction2" class="button action" value="Apply"  />
        </div>
        <br class="clear" />
      </div>
  <?php

  echo '</form></div>'; // end of wrap
}

