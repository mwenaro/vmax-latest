<?php
// Enable CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");



// Include the CRUD functions
include('crud_funcs2.php');

// Handle HTTP methods
$method = $_SERVER['REQUEST_METHOD'];

$id = isset($_GET['id']) ? $_GET['id'] :  null;

switch ($method) {
    case 'GET':
        handleGET();
        break;
    case 'POST':
        is_null($id)? handlePOST() : handlePUT();
        break;
    case 'PUT':
        handlePUT();
        break;
    case 'DELETE':
        handleDELETE();
        break;
    default:
        echo json_encode(['error' => 'Unsupported HTTP method']);
        break;
}

// Function to handle GET request
function handleGET() {
    $id = isset($_GET['id']) ? $_GET['id'] : null;

    if ($id !== null) {
        // Get a specific package by ID
        $package = readPackage($id);
        echo json_encode($package);
    } else {
        // Get all packages
        $packages = readPackages();
        echo json_encode($packages);
    }
}

// Function to handle POST request
function handlePOST() {
    $requestData = json_decode(file_get_contents('php://input'), true);

    if (empty($requestData)) {
        echo json_encode(['error' => 'Invalid input data']);
        return;
    }

    $result = createPackage($requestData);
    echo json_encode(['message' => $result]);
}

// Function to handle PUT request
function handlePUT() {
    $id = isset($_GET['id']) ? $_GET['id'] : null;
    
    if ($id === null) {
        echo json_encode(['error' => 'Invalid input data']);
        return;
    }

    $requestData = json_decode(file_get_contents('php://input'), true);

    if (empty($requestData)) {
        echo json_encode(['error' => 'Invalid input data']);
        return;
    }

    $result = updatePackage($id, $requestData);
    echo json_encode(['message' => $result]);
}

// Function to handle DELETE request
function handleDELETE() {
    $id = isset($_GET['id']) ? $_GET['id'] : null;

    if ($id === null) {
        echo json_encode(['error' => 'Invalid input data']);
        return;
    }

    $result = deletePackage($id);
    echo json_encode(['message' => $result]);
}
?>
