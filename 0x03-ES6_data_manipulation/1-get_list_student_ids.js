export default function getListStudentIds(ids) {
  if (Array.isArray(ids)) {
    return ids.map((list) => list.id);
  }
  return [];
}
