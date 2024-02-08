import { getAuthSheets } from './auth.js';
import { checkIfStudentFailByAbsences } from './checkIfStudentFailByAbsences.js';
import { updateSpreadSheets } from './updateSpreadSheets.js';

const { auth, googleSheets, spreadsheetId } = await getAuthSheets();

console.log('Running...')
// get sheet title
const sheetTitle = await googleSheets.spreadsheets.get({
  auth,
  spreadsheetId,
}).then(response => response.data.sheets[0].properties.title)

console.log('Getting total classes by semester...')
// get total classes by semester
const totalClassesBySemester = await googleSheets.spreadsheets.values.get({
  auth,
  spreadsheetId,
  range: `${sheetTitle}!A2`,
}).then(response => Number(response.data.values[0][0].match(/(?<=:\s)\d+/)[0]))

// get rows with absences and grades by students
const rowsArray = await googleSheets.spreadsheets.values.get({
  auth,
  spreadsheetId,
  range: `${sheetTitle}!B4:F27`,
}).then(response => response.data.values)

// create an array from students status
const statusRows = rowsArray.map((row, index) => {
  console.log(`Calculating ${row[0]} status...`)
  const missedClasses = row[1]

  const isStudentFailByAbsences = checkIfStudentFailByAbsences(missedClasses, totalClassesBySemester)

  // verify if the student is failed by absences
  if(isStudentFailByAbsences) {
    return row = ['Reprovado por Falta']
  }

  // grades by student
  const grades = row.slice(2, 5)

  // calculate the average of the grades by student
  const average = Math.round(grades.reduce((acc, grade) => acc + Number(grade), 0) / 3)

  // verify if the student is approved, failed or need to take the final exam
  if(average >= 70) {
    return row = ['Aprovado', 0]
  }

  if(average < 50) {
    return row = ['Reprovado por nota']
  }

  if(average >= 50 && average < 70) {
    const naf = 100 - average
    return row = ['Exame Final', naf]
  }

  console.log(`${row[0]} status is done`)
})



updateSpreadSheets(`${sheetTitle}!G4:H27`, statusRows)

console.log(`Done!`)


