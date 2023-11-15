<?php


// ini_set('display_errors', 1);
// error_reporting(E_ALL);

session_start();


try {
    $pdo = new PDO("mysql:host=localhost;dbname=my_website_db", "root", "");
    // set the PDO error mode to exception
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connected successfully";
 } catch(PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}

function getUser($username, $password, $pdo) {
    try {
    $sql = "SELECT * FROM users WHERE username = :username AND password = :password";
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':username', $username);
    $stmt->bindParam(':password', $password);
    $stmt->execute();

    return $stmt->fetch(PDO::FETCH_ASSOC);
    }
    catch(PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
    }
}

if (isset($_SERVER["REQUEST_METHOD"]) && $_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['name'];
    $password = $_POST['password'];
    // Create PDO instance here or include it from another file
    $pdo = new PDO("mysql:host=localhost;dbname=my_website_db", "root", "");

    // Call the createUser function
    getUser($username, $password, $pdo);

    // echo 'User created successfully';

    // Redirect or output a success message
    header('Location: ../website_pages/home.php');
    //  // or just output a success message
}

?>
