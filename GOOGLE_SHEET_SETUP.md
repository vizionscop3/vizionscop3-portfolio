# Google Sheet Contact Form Setup

This guide will help you connect the contact form to your Google Sheet.

## Step 1: Set Up Google Apps Script

1. **Open your Google Sheet:**
   - Go to: https://docs.google.com/spreadsheets/d/16ASSQjnvBn8OH3jeqEqkGTBEKx0nTve680U1fMo7xFs/edit

2. **Open Apps Script:**
   - Click `Extensions` > `Apps Script`
   - A new tab will open with the Apps Script editor

3. **Paste the Script:**
   - Delete any existing code in the editor
   - Open `google-apps-script.js` from this project
   - Copy the entire contents and paste into the Apps Script editor
   - Click `Save` (💾 icon) and give it a name like "Contact Form Handler"

4. **Deploy as Web App:**
   - Click `Deploy` > `New deployment`
   - Click the gear icon (⚙️) next to "Select type"
   - Choose `Web app`
   - Set the following:
     - **Description:** Contact Form Handler
     - **Execute as:** Me
     - **Who has access:** Anyone
   - Click `Deploy`
   - **IMPORTANT:** Copy the Web App URL that appears (you'll need this!)

5. **Authorize the Script:**
   - Click `Authorize access`
   - Choose your Google account
   - Click `Advanced` > `Go to [Project Name] (unsafe)` if you see a warning
   - Click `Allow` to grant permissions

## Step 2: Configure the Contact Form

1. **Add Environment Variable:**
   - Copy the Web App URL from Step 1
   - Create a `.env.local` file in the project root (if it doesn't exist)
   - Add this line:
     ```
     NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
     ```
   - Replace `YOUR_SCRIPT_ID` with the actual ID from your Web App URL

2. **Restart Dev Server:**
   - Stop your dev server (Ctrl+C)
   - Run `npm run dev` again
   - The form will now submit to your Google Sheet

## Step 3: Test the Form

1. Go to your contact page: http://localhost:3000/contact
2. Fill out the form and submit
3. Check your Google Sheet - you should see a new "Form Submissions" sheet with your data

## Troubleshooting

### Form not submitting?
- Check that `NEXT_PUBLIC_GOOGLE_SCRIPT_URL` is set correctly in `.env.local`
- Make sure the Apps Script is deployed as a Web App (not just saved)
- Verify "Who has access" is set to "Anyone"
- Check the browser console for error messages

### Data not appearing in sheet?
- Make sure you authorized the script in Step 1
- Check the Apps Script execution log: `Executions` in the Apps Script editor
- Verify the sheet ID in the script matches your sheet

### CORS errors?
- Google Apps Script Web Apps handle CORS automatically
- If you see CORS errors, make sure you're using the Web App URL (not the script editor URL)

## Sheet Structure

The script will automatically create a "Form Submissions" sheet with these columns:
- **Timestamp** - When the form was submitted
- **Name** - Submitter's name
- **Email** - Submitter's email
- **Subject** - Message subject
- **Message** - Message content

## Security Note

The Web App URL is public, but only authorized users (you) can modify the script. The form data is only written to your sheet, which you control access to.
