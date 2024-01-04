<?php
// Database connection parameters
include_once "config.php";

try {
    // Create a PDO connection
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);

    // Set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // echo "Connected successfully";
} catch (PDOException $e) {
    // Handle connection errors
    die("Connection failed: " . $e->getMessage());
}

// Function to create a new package
function createPackage($packageData) {
    global $conn;

    $fields = implode(", ", array_keys($packageData));
    $values = implode("', '", array_values($packageData));

    $sql = "INSERT INTO insurance_package ($fields)
            VALUES ('$values')";

    try {
        $conn->exec($sql);
        return "Package created successfully";
    } catch (PDOException $e) {
        return "Error creating package: " . $e->getMessage();
    }
}

// Function to update a package
function updatePackage($id, $packageData) {
    global $conn;

    $updates = "";
    foreach ($packageData as $key => $value) {
        $updates .= "$key='$value', ";
    }
    $updates = rtrim($updates, ', ');

    $sql = "UPDATE insurance_package
            SET $updates
            WHERE `id` = $id";

    try {
        $conn->exec($sql);
        return "Package updated successfully";
    } catch (PDOException $e) {
        return "Error updating package: " . $e->getMessage();
    }
}

// Function to read all packages
function readPackages() {
    global $conn;

    $sql = "SELECT * FROM insurance_package";
    $stmt = $conn->query($sql);

    $packages = $stmt->fetchAll(PDO::FETCH_ASSOC);

    if ($packages) {
        return $packages;
    } else {
        return "No packages found";
    }
}

// Function to delete a package
function deletePackage($id) {
    global $conn;

    $sql = "DELETE FROM insurance_package WHERE id=$id";

    try {
        $conn->exec($sql);
        return "Package deleted successfully";
    } catch (PDOException $e) {
        return "Error deleting package: " . $e->getMessage();
    }
}

// Close connection (not necessary because PHP automatically closes it at the end of the script)
// $conn = null;
?>
