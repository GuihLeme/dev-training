/**
 * 
 * @param {Number} absences 
 * @param {Number} totalClassesBySemester 
 * @returns {Boolean} - Return true if the student failed by absences, otherwise return false
 */

export function checkIfStudentFailByAbsences(absences, totalClassesBySemester) {
  const maxAbsencesCount = totalClassesBySemester * 0.25

  if (absences > maxAbsencesCount) {
    return true
  }
  return false
}