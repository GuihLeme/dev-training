import { getAuthSheets } from'./auth.js'


/**
 * Update the spreadsheet with the student's status
 * @param {string} range - The range of the spreadsheet to update
 * @param {string[][]} values - The values to update
 * @returns {void}
 */
export async function updateSpreadSheets(range, values) {
  const { auth, spreadsheetId, googleSheets } = await getAuthSheets()

  googleSheets.spreadsheets.values.update({
    auth,
    spreadsheetId,
    range,
    valueInputOption: 'USER_ENTERED',
    resource: {
      values
    }
  })

  return
}
