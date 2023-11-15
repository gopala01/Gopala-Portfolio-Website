function getUser($username, $password, $pdo) {
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
}