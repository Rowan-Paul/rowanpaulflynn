<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Homepage | Rowan-Paul Flynn</title>

    <link rel="stylesheet" type="text/css" href="assets/style.css">
    <script src="assets/main.js"></script>
    <!-- Load font awesome icon library -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>

<body>
    <header>
        <div class="topnav" id="myTopnav">

            <a href="index.php" <?php if ($title == 'home') {
                                    echo "class ='active'";
                                } ?>>Home</a>
            <a href="about.php" <?php if ($title == 'php') {
                                    echo "class ='active'";
                                } ?>>About me</a>
            <a href="blog.php" <?php if ($title == 'blog') {
                                    echo "class ='active'";
                                } ?>>Blog</a>
            <a href="contact.php" <?php if ($title == 'contact') {
                                        echo "class ='active'";
                                    } ?>>Contact</a>

            <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                <i class="fa fa-bars"></i>
            </a>
        </div>
    </header>