function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1'); // Change 'Sheet1' if necessary
  var data = JSON.parse(e.postData.contents);  // Parse the POST request data
  
  var email = data.email;
  var timestamp = new Date();

  // Append the email and timestamp to the sheet
  sheet.appendRow([email, timestamp]);

  return ContentService.createTextOutput(JSON.stringify({"status": "success"})).setMimeType(ContentService.MimeType.JSON);
}