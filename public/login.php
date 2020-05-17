<?php
$title = "Login";
include_once 'includes/header.php';
require_once 'includes/database-connect.php';

// Check password
if(isset($_POST['submit'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];
    
    $stmt = $conn->prepare("SELECT password FROM usertable WHERE username = '$username'");
    $stmt->execute();
    $results = $stmt->fetchAll();
    
    if(!empty($results)) {
        foreach($results as $result) {
            $hash = $result['password'];
        }
    
        if(password_verify($password, $hash) == true) {
            session_start();

            $_SESSION["username"] = $username;

            header("location: contact-answers.php");
        } else {
            echo "Password/username incorrect";
        }
    } else {
        echo "Password/username incorrect";
    }
}
?>

<main>
    <h1>Login</h1>
    <p>On this page you can login.</p>

    <form method="post">
        <label for="username">Username</label>
        <input type="text" name="username" id="username" required>

        <label for="password">Password</label>
        <input type="password" name="password" id="password" required>

        <input type="submit" name="submit" id="submit" value="Submit">
    </form>
</main>

<?php
include_once 'includes/footer.php';
?>