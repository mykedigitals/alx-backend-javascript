// Declare student Object
interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}
// Two student objects
const studentOne: Student = {
	firstName: "Amanuel",
	lastName: "Fenta",
	age: 30,
	location: "Addis Ababa"
}

const studentTwo: Student = {
	firstName: "Kirubel",
	lastName: "Fenta",
	age: 21,
	location: "Bahir Dar"
}

// An array of students
const studentsList = [studentOne,studentTwo];

const table = document.getElementById('studentTable') as HTMLTableElement;

//New row for each student and append it to the table
studentsList.forEach((student) => {
	const row = table.insertRow();
	const firstNameCell = row.insertCell(0);
	const locationCell = row.insertCell(1);

	firstNameCell.innerHTML = student.firstName;
	locationCell.innerHTML = student.location;
})