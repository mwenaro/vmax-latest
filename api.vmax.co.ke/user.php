<?php
// api/user.php

// Sample user data (replace with your logic to retrieve user data)
$userData = array('username' => ' info@vmax.co.ke', 'password' => 'jamilavejlani53');

// Return user data as JSON
header('Content-Type: application/json');
echo json_encode($userData);
