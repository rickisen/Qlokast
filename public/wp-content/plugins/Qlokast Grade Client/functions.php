<?php
/*
Plugin Name: Qlokast Final Grade Client
Plugin URI: http://wordpress.org
Description: Plugin for setting Final grades through "the API"
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
  if (isset($_POST['_finalgrades']) && !empty($_POST['_finalgrades']) && isset($_POST['users']) ){
    foreach ($_POST['users'] as $student => $grade ) {
      submit_final_grades($student,1,$grade);
    }
  } 

  // get all the current set grades
  $grades = get_grades('1');

  // Output the form and table header ?>
    <div class="wrap">
      <h1>Change Student's Final Grades<h1>
      <form method="post" action="">
        <input type="hidden" name="_finalgrades" value="true">
        <table class="wp-list-table widefat fixed striped users">
          <thead> 
            <tr>
              <th scope="col" class='manage-column column-username column-primary sortable desc'>
                <a href="">
                  <span> Student ID </span> <span class="sorting-indicator"> </span>
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
              <th scope="col" id='grade' class='manage-column column-roles'>Set Final Grade</th>
            </tr>
          </thead>
  <?php

    // make a new row for every student
  $students = get_users(array('role' => 'Student'));
  foreach ($students as $student) :
    ?>
      <tr id='<?php echo 'user-'.$student->ID ?>'>
        <th scope='row' class=''>
          <span><?php echo $student->ID ?></span>
        </th>
        <td class='username column-username has-row-actions column-primary' data-colname="Username">
          <strong>
            <a href=""><?php echo $student->data->user_login ?></a>
          </strong>
        </td>
        <td class='name column-name' data-colname="Name"> <?php echo $student->data->display_name ?> </td>
        <td class='finalgrades column-roles' data-colname="grade">
        <select name='users[<?php echo $student->ID ?>]'>
          <option value="<?php echo $grades[$student->ID]?>"><?php echo $grades[$student->ID]?></option>
          <option value="">----</option>
          <option value="vg">VG</option>
          <option value="g">G</option>
          <option value="ig">IG</option>
          <option value="">None</option>
        </select>
        </td>
      </tr>
  <?php endforeach ?>
    </table>
    <input type="submit" value="Gradem Up">
  </form>
</div>

<?php
} // Ends function

function add_QlokastGradeClient_to_admin_menu(){
  add_users_page("Final Grades","Final Grades",'manage_options',"courseFinalGrade", "courseFinalGrade" );
}
add_action("admin_menu", "add_QlokastGradeClient_to_admin_menu");

function get_grades($course){
  $ch = curl_init(); 

  $url = "api.patriknordahl.com/?/course/".$course;

  curl_setopt($ch, CURLOPT_URL, $url); 
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); 

  $output = curl_exec($ch); 

  $gradeSon = json_decode($output);

  curl_close($ch); 

  // make the array more php friendly
  foreach ($gradeSon[0] as $studentValues) {
    $grades[$studentValues->studentid] = $studentValues->grade;
  }

  return $grades;
}

function submit_final_grades($student, $course, $grade){
  //ready data for transfer
  $data = array('studentid' => $student, 'grade' => $grade);

  // set options for transfer
  $ch = curl_init(); 
  $url = "api.patriknordahl.com/?/course/".$course."/grades";
  curl_setopt($ch, CURLOPT_URL, $url); 
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");
  curl_setopt($ch, CURLOPT_POSTFIELDS,http_build_query($data));

  // execute transfer
  $response = curl_exec($ch);
  curl_close($ch); 

  if (!$response){
    return false;
  } else {
    return true;
  }
}
