export default function updateStudentGradeByCity(listStdt, city, newGrades) {
  return listStdt
    .filter((obj) => obj.location === city)
    .map((student) => {
      newGrades.map((studentGrade) => {
        if (studentGrade.studentId === student.id) {
          student.grade = studentGrade.grade;
        }

        if (!student.hasOwnProperty('grade')) {
          student.grade = 'N/A';
        }
        return student;
      });

      return student;
    });
}
