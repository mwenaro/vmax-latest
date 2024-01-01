<?php
// Database connection parameters
// $servername = "localhost";
// $username = "splendid_vmax";
// $password = "OtvX4]DONg3S";
// $dbname = "splendid_vmax";

include_once "config.php";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Function to create a new package
function createPackage($packageData) {
    global $conn;

    $fields = implode(", ", array_keys($packageData));
    $values = implode("', '", $packageData);

    $sql = "INSERT INTO insurance_package ($fields)
            VALUES ('$values')";

    if ($conn->query($sql) === TRUE) {
        return "Package created successfully";
    } else {
        return "Error creating package: " . $conn->error;
    }
}

// Function to update a package
function updatePackage($id, $packageData) {
    global $conn;
//     echo json_encode(['post' => $packageData]);
// return;
    $updates = "";
    foreach ($packageData as $key => $value) {
        $updates .= "$key='$value', ";
    }
    $updates = rtrim($updates, ', ');

    $sql = "UPDATE insurance_package
            SET $updates
            WHERE `id` = $id";

    if ($conn->query($sql) === TRUE) {
        return "Package updated successfully";
    } else {
        return "Error updating package: " . $conn->error;
    }
}

// Function to read all packages
function readPackages() {
    global $conn;

    $sql = "SELECT * FROM insurance_package";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $packages = array();
        while ($row = $result->fetch_assoc()) {
            $packages[] = $row;
        }
        return $packages;
    } else {
        return "No packages found";
    }
}

// Function to delete a package
function deletePackage($id) {
    global $conn;

    $sql = "DELETE FROM insurance_package WHERE id=$id";

    if ($conn->query($sql) === TRUE) {
        return "Package deleted successfully";
    } else {
        return "Error deleting package: " . $conn->error;
    }
}

// Close connection
// $conn->close();
?>
