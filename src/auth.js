import { google } from 'googleapis'
import 'dotenv/config'

//return auth, client, googleSheets and spreadsheetId
export async function getAuthSheets() {
  const auth = new google.auth.GoogleAuth({
    keyFile: 'credentials.json',
    scopes: 'https://www.googleapis.com/auth/spreadsheets'
  });

  const client = await auth.getClient();

  const googleSheets = google.sheets({
    version: 'v4',
    auth: client
  });

  const spreadsheetId = "1i3sFdZedqNbSTxAlDi_JCbdUU69UgUCFWNLh9dz06G0";

  return {
    auth,
    googleSheets,
    spreadsheetId
  }
}
