<?php
$title = "Contact";
include_once 'includes/header.php';
require_once 'includes/database-connect.php';

// has submit been pressed?
if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // insert into database
    $sql = "INSERT INTO contact (name,email,message)
            VALUES (:name, :email, :message)";
    $query = $conn->prepare($sql);
    $query->execute( array('name' => $name, 'email' => $email, 'message' => $message));

    header('Location: index.php');
}
?>

<main>
    <h1>Contact</h1>
    <p>If you want to contact me, you can do that here.</p>

    <form method="post">
        <label for="name">Name</label>
        <input type="text" name="name" id="name" required>

        <label for="email">E-mail</label>
        <input type="email" name="email" id="email" required>

        <label for="message">Message</label>
        <textarea name="message" id="message" rows="4" cols="30" placeholder="Enter your message here" required></textarea>

        <input type="submit" name="submit" id="submit" value="Submit">
    </form>

    <p><a href="contact-answers.php">View the messages on this page</a></p>
</main>

<?php
include_once 'includes/footer.php';
?>