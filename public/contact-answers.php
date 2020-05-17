<?php
session_start();
if (!isset($_SESSION['username'])) {
    session_destroy();
    header('Location: login.php');
}

$title = "Contact answers";
include_once 'includes/header.php';
require_once 'includes/database-connect.php';

// Get items from db
$stmt = $conn->prepare("SELECT * FROM contact ORDER BY id DESC");
$stmt->execute();
$results = $stmt->fetchAll();
?>

<main>
    <h1>Contact answers</h1>
    <p>This page will display the messages from visitors of the message.</p>

    <div class="messages">
        <?php
            foreach($results as $contact) { ?>
                <article class="message">
                    <h2>Message #<?=$contact['id']?></h2>
            
                    <?php
                        $messageDate = nl2br(htmlentities($contact['date']));
                        $messageName = nl2br(htmlentities($contact['name']));
                        $messageEmail = nl2br(htmlentities($contact['email']));
                        $message = nl2br(htmlentities($contact['message']));
                    ?>
            
                    <p>Date: <?= $messageDate ?? 'Datum niet gevonden' ?></p>
                    <p>Name: <?= $messageName ?? 'Naam niet gevonden'?><br>
                        E-mail: <?= $messageEmail ?? 'Email niet gevonden'?> <br>
                        Message: <?= $message ?? 'Bericht niet gevonden' ?></p>
                </article>
        <?php } ?>
    </div>
</main>

<?php
include_once 'includes/footer.php';
?>