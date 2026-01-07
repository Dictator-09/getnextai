function doPost(e) {
    try {
        var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
        var data = JSON.parse(e.postData.contents);
        var timestamp = new Date();

        sheet.appendRow([timestamp, data.name, data.email, data.service]);

        return ContentService.createTextOutput(JSON.stringify({ 'result': 'success' })).setMimeType(ContentService.MimeType.JSON);
    } catch (error) {
        return ContentService.createTextOutput(JSON.stringify({ 'result': 'error', 'error': error })).setMimeType(ContentService.MimeType.JSON);
    }
}

// Optional: for testing a GET request to verify deployment
function doGet(e) {
    return ContentService.createTextOutput("GetNextAI Webhook is Active");
}
