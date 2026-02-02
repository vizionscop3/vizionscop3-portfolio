/**
 * Google Apps Script for Contact Form Submission
 * 
 * INSTRUCTIONS:
 * 1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/16ASSQjnvBn8OH3jeqEqkGTBEKx0nTve680U1fMo7xFs/edit
 * 2. Go to Extensions > Apps Script
 * 3. Delete any existing code and paste this entire file
 * 4. Save the project (give it a name like "Contact Form Handler")
 * 5. Click "Deploy" > "New deployment"
 * 6. Select type: "Web app"
 * 7. Set:
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 8. Click "Deploy"
 * 9. Copy the Web App URL (you'll need this for the form)
 * 10. Click "Authorize access" and grant permissions
 * 
 * The script will automatically create a "Form Submissions" sheet if it doesn't exist
 * and add headers: Timestamp, Name, Email, Subject, Message
 */

function doPost(e) {
  try {
    // Parse the JSON data from the POST request
    const data = JSON.parse(e.postData.contents);
    
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet();
    
    // Get or create the "Form Submissions" sheet
    let submissionSheet = sheet.getSheetByName('Form Submissions');
    if (!submissionSheet) {
      submissionSheet = sheet.insertSheet('Form Submissions');
      // Add headers
      submissionSheet.getRange(1, 1, 1, 5).setValues([['Timestamp', 'Name', 'Email', 'Subject', 'Message']]);
      submissionSheet.getRange(1, 1, 1, 5).setFontWeight('bold');
    }
    
    // Add the new row with timestamp
    const timestamp = new Date();
    const newRow = [
      timestamp,
      data.name || '',
      data.email || '',
      data.subject || '',
      data.message || ''
    ];
    
    submissionSheet.appendRow(newRow);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Form submitted successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function (optional - for testing in Apps Script editor)
function testDoPost() {
  const mockEvent = {
    postData: {
      contents: JSON.stringify({
        name: 'Test User',
        email: 'test@example.com',
        subject: 'Test Subject',
        message: 'This is a test message'
      })
    }
  };
  
  const result = doPost(mockEvent);
  Logger.log(result.getContent());
}
