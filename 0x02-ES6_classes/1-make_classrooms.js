import ClassRoom from './0-classroom';

export default function initialzeRooms() {
  const classA = new ClassRoom(19);
  const classB = new ClassRoom(20);
  const classC = new ClassRoom(34);
  const resultList = [classA, classB, classC];
  return (resultList);
}
