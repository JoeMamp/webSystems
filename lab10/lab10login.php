<?php

session_start();
$_SESSION = array();
session_destroy();

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

// $hashedString = hash("sha256", $string);
$errors = "";
$errorsBool1 = "";
$errorsBool2 = "";
$counter = 0;
if (isset($_POST["login"])) {  // works because only one button on the page
  $user = htmlspecialchars(trim($_POST["username"]));
  $temp = htmlspecialchars(trim($_POST['password']));
  $pass = hash("sha256", $temp);

  // DO SOME ERROR CHECKING (USER EXPERIENCEEEEEEE)

  // Checking username
  $check1 = empty($user) || empty($pass);
  $sqlQuery = "SELECT * FROM users WHERE `username` = '$user'";
  $numRows = $con->query($sqlQuery)->num_rows;
  $check2 = $numRows == 0;
  if($check1) {
    $errors .= "<li>Please enter a username and password</li>";
    $counter++;
  }
  if ($check2) {
    $errors .= "<li>User not found: Please enter a valid username, or create a new user</li>";
    $counter++;
  }

  if($counter == 0) {
    $validate = "SELECT * FROM users WHERE `username` = '$user'";
    $result = $con->query($validate);
    if ($result) {
      $match = $result->fetch_assoc();
      if ($user === $match["username"] && $pass === $match["password"]) {
        echo "Smile and wave, boys!<br>";
        session_start();
        $_SESSION["username"] = $user;
        $_SESSION["userid"] = $match["id"];
        header("Location: lab10.php");
      } else {
        echo "Login Failed: Invalid username or password :(";
      }
    }
  } else {
    $errorsBool1 = "<li class='message'>Please fix the following errors:</li>".$errors;
  }
}

if (isset($_POST["create"])) {
  $user = htmlspecialchars(trim($_POST["username"]));
  $tempA = htmlspecialchars(trim($_POST['password']));
  $pass = hash("sha256", $tempA);
  $tempB = htmlspecialchars(trim($_POST['passwordC']));
  $conf = hash("sha256", $tempB);

  // DO SOME ERROR CHECKING (CYBERSECURITYYYYYYYY)

  // Checking username
  $check1 = empty($user);
  $check2 = strlen($user) > 2;
  $check3 = is_numeric($user);
  $sqlQuery = "SELECT * FROM users WHERE `username` = '$user'";
  $numRows = $con->query($sqlQuery)->num_rows;
  $check4 = $numRows != 0;
  if($check1) {
    $errors .= "<li>Please enter a username</li>";
    $counter++;
  }
  if(!$check2) {
    $errors .= "<li>Username must be longer than 2 characters</li>";
    $counter++;
  }
  if($check3) {
    $errors .= "<li>Username must not be numeric</li>";
    $counter++;
  }
  if($check4) {
    $errors .= "<li>Username already exists</li>";
    $counter++;
  }
  // Checking password
  $check5 = empty($tempA) || empty($tempB);
  $check6 = (strlen($tempA) < 9) || (strlen($tempB) < 9);
  $check7 = $tempA == $tempB;
  if($check5) {
    $errors .= "<li>Please enter a password</li>";
    $counter++;
  }
  if($check6) {
    $errors .= "<li>Passwords must be at least 9 characters long</li>";
    $counter++;
  }
  if (!$check7) {
    $errors .= "<li>Passwords must match</li>";
    $counter++;
  }
  if ($counter == 0) {
    $validate = "INSERT INTO users (`username`, `password`) VALUES ('$user', '$pass');";
    $result = $con->query($validate);
    // if ($result) {
    //   echo "Smile and wave, boys!<br>";
    // } else {
    //   echo "Creation Failed";
    // }
  } else {
    $errorsBool2 = "<li class='message'>Please fix the following errors:</li>".$errors;
  }
}

echo '
<html>
  <head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script type="text/javascript" src="lab10.js"></script>
    <link rel="stylesheet" href="Resources/lab10.css">
    <link href="https://fonts.googleapis.com/css?family=Solway&display=swap" rel="stylesheet">
    <style>@import url("https://fonts.googleapis.com/css?family=Oswald:400");</style>
  </head>
  <body>
    <header>
      <h1 id="loginHeader">Sign Up / Login</h1>
    </header>
    <div class="login">
      <div class="old">
        <h2 id="old">Returning User?</h2>
        <form action="lab10login.php" method="post">
          username: <input type="text" name="username" id="username"><br>
          password: <input type="password" name="password" id="password"><br>
          <input type="submit" name="login">
        </form>
        <ul class="errors1">'
        .$errorsBool1.
        '</ul>
      </div>
      <div class="new">
        <h2 id="new">New? Create an Account!</h2>
        <form action="lab10login.php" method="post">
          username: <input type="text" name="username" id="username"><br>
          password: <input type="password" name="password" id="password"><br>
          confirm password: <input type="password" name="passwordC" id="passwordC"><br>
          <input type="submit" name="create">
        </form>
        <ul class="errors2">'
        .$errorsBool2.
        '</ul>
        </div>
    </div>
  </body>
</html>
';
?>