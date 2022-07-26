const students = ["Pedro Henrique", "Miguel", "Maria Clara"];
const grades = [
  [9, 8, 10, 7, 5],
  [10, 9, 9, 10, 8],
  [10, 7, 10, 8, 9],
];

function studentAverage() {
  const averages = grades.map(
    (grade) => grade.reduce((acc, curr) => acc + curr) / grade.length
  );
  const studentsAverages = students.map((student, index) => {
    return { name: student, average: averages[index] };
  });
  return studentsAverages;
}

console.log(studentAverage());