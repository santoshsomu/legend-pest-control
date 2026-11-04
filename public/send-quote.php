<?php
/**
 * Hostinger Direct Lead Mailer & Backup Logger
 * Sends quote notifications directly to Help@legendpestcontrolmelbourne.com.au
 */

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method Not Allowed']);
    exit;
}

// Read JSON input
$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!$data) {
    $data = $_POST;
}

// Extract fields with fallbacks for both streamlined and standard payloads
$name = isset($data['• Name']) ? htmlspecialchars(trim($data['• Name'])) : 
        (isset($data['Name']) ? htmlspecialchars(trim($data['Name'])) : 
        (isset($data['name']) ? htmlspecialchars(trim($data['name'])) : 'Customer'));

$phone = isset($data['• Phone Number']) ? htmlspecialchars(trim($data['• Phone Number'])) : 
         (isset($data['Phone Number']) ? htmlspecialchars(trim($data['Phone Number'])) : 
         (isset($data['phone']) ? htmlspecialchars(trim($data['phone'])) : 'Not provided'));

$email = isset($data['• Email']) ? htmlspecialchars(trim($data['• Email'])) : 
         (isset($data['Email']) ? htmlspecialchars(trim($data['Email'])) : 
         (isset($data['email']) ? htmlspecialchars(trim($data['email'])) : 'Not provided'));

$suburb = isset($data['• Suburb']) ? htmlspecialchars(trim($data['• Suburb'])) : 
          (isset($data['Suburb']) ? htmlspecialchars(trim($data['Suburb'])) : 
          (isset($data['suburb']) ? htmlspecialchars(trim($data['suburb'])) : 'Melbourne'));

$service = isset($data['• Service']) ? htmlspecialchars(trim($data['• Service'])) : 
           (isset($data['Service']) ? htmlspecialchars(trim($data['Service'])) : 
           (isset($data['service']) ? htmlspecialchars(trim($data['service'])) : 'General Pest Treatment'));

$message = isset($data['• Message']) ? htmlspecialchars(trim($data['• Message'])) : 
           (isset($data['Message']) ? htmlspecialchars(trim($data['Message'])) : 
           (isset($data['notes']) ? htmlspecialchars(trim($data['notes'])) : 'No notes provided'));

$timestamp = date('d M Y, h:i A') . ' (AEST)';

// 1. Save backup to local server file so no lead is ever lost
$logEntry = sprintf(
    "[%s] Lead: %s | Phone: %s | Email: %s | Suburb: %s | Service: %s | Message: %s\n",
    $timestamp, $name, $phone, $email, $suburb, $service, $message
);
@file_put_contents(__DIR__ . '/leads.log', $logEntry, FILE_APPEND | LOCK_EX);

// 2. Prepare Clean Plain-Text Email Notification matching exact requested format (Image 3)
$to = 'Help@legendpestcontrolmelbourne.com.au';
$subject = "New Form Fill from \"{$name}\"";

$body = "• Service: {$service}\n"
      . "• Name: {$name}\n"
      . "• Phone Number: {$phone}\n"
      . "• Email: {$email}\n"
      . "• Suburb: {$suburb}\n"
      . "• Message: {$message}\n\n"
      . "-- This e-mail was sent from a contact form on (https://legendpestcontrolmelbourne.com.au)\n";

$headers = [];
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/plain; charset=utf-8';
$headers[] = 'From: Legend Pest Control Melbourne <Help@legendpestcontrolmelbourne.com.au>';
if (!empty($email) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $headers[] = "Reply-To: {$name} <{$email}>";
}
$headers[] = 'X-Priority: 1 (Highest)';
$headers[] = 'X-MSMail-Priority: High';
$headers[] = 'Importance: High';

$mailSent = @mail($to, $subject, $body, implode("\r\n", $headers));

echo json_encode([
    'success' => true,
    'mailSent' => $mailSent,
    'message' => 'Lead received and logged successfully'
]);
