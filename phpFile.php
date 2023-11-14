ini_set('display_errors', 1);
error_reporting(E_ALL);

try {
   $pdo = new PDO("mysql:host=localhost;dbname=my_website_db", "adminuser", "chandu2001");
   // set the PDO error mode to exception
   $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
   echo "Connected successfully";
} catch(PDOException $e) {
   echo "Connection failed: " . $e->getMessage();
}

function createUser($username, $password, $email, $pdo) {
    try {
        $sql = "INSERT INTO users (username, password, email) VALUES (:username, :password, :email)";
        $stmt = $pdo->prepare($sql);

        // Hash the password for security
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        $stmt->bindParam(':username', $username);
        $stmt->bindParam(':password', $hashedPassword);
        $stmt->bindParam(':email', $email);

        $stmt->execute();
        echo "User created successfully";
    } catch(PDOException $e) {
        echo "Error: " . $e->getMessage();
    }

    
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Assuming you have an input for email in your form
    $username = $_POST['name'];
    $password = $_POST['password'];
    $email = $_POST['email']; // You'll need to add an email field in your form

    // Create PDO instance here or include it from another file
    $pdo = new PDO("mysql:host=localhost;dbname=my_website_db", "adminuser", "chandu2001");

    // Call the createUser function
    createUser($username, $password, $email, $pdo);

    // Redirect or output a success message
    header('Location: html_files/success_page.html'); // Redirect to a success page
    // echo 'User created successfully'; // or just output a success message
}
?>

<!-- function getUser($username, $password, $pdo) {
    $sql = "SELECT * FROM users WHERE username = :username AND password = :password";
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':username', $username);
    $stmt->bindParam(':password', $password);
    $stmt->execute();

    return $stmt->fetch(PDO::FETCH_ASSOC);
    try{
        echo "Success"
    }
    catch(PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
    }
} -->