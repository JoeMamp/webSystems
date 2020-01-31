<?php

session_start();

$username = "root";
$password = "CorporationDolphin";
$database = "websyslab10";

$con=mysqli_connect("127.0.0.1", $username, $password, $database);
// // Check connection
if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
// else {
//   echo "successfully connected to MySQL.";
// }
echo("<br>");

$userID = $_SESSION["userid"];

if(isset($_POST["archive"])) {
  if($_POST["archive"]) {
    $string = file_get_contents('lab10.json');
    $filename = json_decode($string, true);

    $lecArray = $filename["websys_course"][0]["lectures"];
    foreach($lecArray as $curr) {
      $lecKey = array_keys($curr)[0];
      $title = $curr[$lecKey][0]["title"];
      $descr = $curr[$lecKey][0]["description"];
      $slide = $curr[$lecKey][0]["slides"];
      $entry = "INSERT INTO archive (`id`, `content`, `title`, `description`, `link`) VALUES ('$userID', 'lectures', '$title', '$descr', '$slide');";
      $result = $con->query($entry);
      // if ($result) {
      //   echo "Nice lecs.";
      // }
    }

    $labArray = $filename["websys_course"][1]["labs"];
    foreach($labArray as $curr) {
      $labKey = array_keys($curr)[0];
      $title = $curr[$labKey][0]["title"];
      $descr = $curr[$labKey][0]["description"];
      $slide = $curr[$labKey][0]["info"];
      $entry = "INSERT INTO archive (`id`, `content`, `title`, `description`, `link`) VALUES ('$userID', 'labs', '$title', '$descr', '$slide');";
      $result = $con->query($entry);
      // if ($result) {
      //   echo "Nice labs.";
      // }
    }
  }
}

?>

<!doctype html>
<html>
  <head>
     <title>Lab 10</title>
     <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
     <script type="text/javascript" src="lab10.js"></script>
     <link rel="stylesheet" href="Resources/lab10.css">
     <link href="https://fonts.googleapis.com/css?family=Solway&display=swap" rel="stylesheet">
     <style>@import url('https://fonts.googleapis.com/css?family=Oswald:400');</style>
  </head>
  <body>
    <header>
      <h1 id="contentHeader">Welcome to Web Systems Development!</h1>
    </header>
    <div class="content">

      <div class="nav"> <!-- Holds content. -->
        <h2>Lectures</h2>
        <div id="Lectures">
          <ul id="lecList">
          </ul>
        </div>

        <h2>Labs</h2>
        <div id="Labs">
          <ul id="labList">
          </ul>
        </div>

        <form action="lab10.php" method="post">
          <input type="button" id="refresh" value="Refresh Course Content" />
          <input type="submit" name="archive" id="archive" value="Archive Course Content" />
          <input type="button" id="return" value="Return to Login" onclick="location.href='lab10login.php';" />
        </form>

      </div>

      <div class="preview">
        <h2 id="title">Select content to view</h2>
        <h3 id="description"></h3>
        <h4 id="link"></h4>
      </div>

    </div>
    <footer/>
  </body>
</html>