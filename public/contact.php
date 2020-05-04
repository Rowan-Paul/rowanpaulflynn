<?php
$title = "Contact";
include_once 'includes/header.php';
?>

<main>
    <h1>Contact</h1>
    <p>If you want to contact me, you can do that here.</p>

    <form method="post" action="">
        <label for="name">Name</label>
        <input type="text" name="name" id="name" required>

        <label for="email">E-mail</label>
        <input type="email" name="email" id="email" required>

        <label for="message">Message</label>
        <textarea name="message" id="message" rows="4" cols="30" placeholder="Enter your message here" required></textarea>

        <input type="submit" name="versturen" id="versturen" value="Versturen">
    </form>
</main>

<?php
include_once 'includes/footer.php';
?>