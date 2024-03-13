export default function getStudentIdsSum(sumids) {
  return sumids.reduce((accumulator, currentValue) => accumulator + currentValue.id, 0);
}
