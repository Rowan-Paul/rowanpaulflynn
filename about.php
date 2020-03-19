<?php
$title = "About";
include_once 'standard-pages/header.php';

/* calculate age */
$birthDate = "8/4/2001";
//explode the date to get month, day and year
$birthDate = explode("/", $birthDate);
//get age from date or birthdate
$age = (date("md", date("U", mktime(0, 0, 0, $birthDate[0], $birthDate[1], $birthDate[2]))) > date("md")
  ? ((date("Y") - $birthDate[2]) - 1)
  : (date("Y") - $birthDate[2]));
?>

<main>
    <h1>About me</h1>
    <p>My name is Rowan Paul Flynn, I'm <?php echo $age ?> years old and live in the Netherlands. Ever since I can remember I've had a passion for everything related with technology. I've graduated high school and at this moment I'm in the first year of HBO ICT at the HAN University of Applied Sciences. In my free time I like to play games, watch tv/movies and cycle around with my family. I like my privacy, so you won't find any pictures on this site with me on them (at least for now).</p>
    <p>In the past I've had hands-on with different languages, starting with HTML and CSS with a little bit of Javascript. For a school project I've build a website with HTML, CSS & PHP connected to a MySQL database (that's why this site also uses that plus Javascript). For other school projects I've used Processing (a Java derivative), MySQL, MSSQL, C (in <a href="https://www.arduino.cc/" target="_BLANK">Arduino</a>) and actual Java (using Object Oriented principles).</p>

    <h2>Projects</h2>
    <p>When I was in the first grade of high school I made my first website with a website builder about Ireland. Ever since that moment I've had an interest in making websites. For more websites and other projects I've done. Some more projects I've worked on since then can be found below and (most of them) on my <a href="https://github.com/Rowan-Paul">Github page</a>.</p>

    <ul>
        <li>Manatee website in HTML and CSS</li>
        <li>Battleship game in Processing</li>
        <li>Hotel Dullemond website in HTML, CSS and Javascript</li>
        <li>Fletnix database in MSSQL</li>
        <li>This website in HTML, CSS, Javascript and MySQL</li>
    </ul>

</main>

<?php
include_once 'standard-pages/footer.php';
?>