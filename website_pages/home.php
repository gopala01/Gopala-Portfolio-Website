<?php
session_start(); // Start the session at the beginning of the script

if (!isset($_SESSION['name'])) {
    header('Location: ../home.html'); // Redirect to login page if not logged in
    exit();
}

$username = $_SESSION['name']; // Retrieve username from session

?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE-edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
        <link rel="reset" href="../css_files/reset.css">
        <link rel="stylesheet" href="../css_files/stylesheet.css">
    </head>

    <body>
        <div class="navigation">
            <nav>
                <ul>
                    <li class="nav_name">Gopala Bhamidipati</li>
                    <li><a href="home.html">Home</li>
                    <li><a href="about_myself.html">Myself</a></li>
                    <li><a href="skills_education_experience.html">Skills, Education and Experience</a></li>
                    <li><a href="projects.html">Projects</a></li>
                    <li><a href="blog.html">Blog</a></li>
                </ul>
            </nav>
        </div>

        <hgroup>
            <h1>Home</h1>
            <h2 id="portfolio_intro">My name is Gopala Bhamidipati, welcome to my portfolio</h2>
        </hgroup>

        <br>
        <br>
        <br>


        
        <div class="container">
            <div class="vertical-center">
                <h2>Welcome, <?php echo $username; ?>!</h2>
            </div>
        </div>
       
        <br>
        <br>
        <br>
        <br>

        <h2 id="portfolio_intro">Else, please continue using the website</h2>
        
        <footer>
            <h3>Contacts</h3>
            <p>Email:</p>
            <p>Phone number:</p>
        </footer>
    </body>
</html>
