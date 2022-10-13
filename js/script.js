let comission = [];

const LoadStudent = () => {
	let name, surname, note;
	//Ask for the name and validate it.
	name = ValidateString("the student's name:");

	//Ask for the surname and validate it.
	surname = ValidateString("the student's surname:");
    
    //Create an array of notes for the student's notes.
    let notes = [];
	
	//Ask for the notes that the user want's to load.
	do {
		do {
			note = parseInt(prompt('Enter a note:'));
		} while(isNaN(note) || note < 1 || note > 10)

		//Add the note to the student's notes array.
		notes.push(note);

	} while(confirm('Do you want to enter more notes?'))

	let student = [];
	student['Name']   = name; 
	student['Surname'] = surname; 
	student['Notes']    = notes; 
	
	comission.push(student);
	console.log(comission);
}

//Function to show the data on the screen.
const ShowData = () => {
	let html = '';
	
	//I go through the commission array to get the data of each student.
	for (let student of comission) {
		console.log(student);
		let accumulator = 0, counter =0;
		html +=`<p class="student">${student['Name']} ${student['Surname']} </p>`;
		html +=`<ul>`; 
			for (let note of student['Notes']) {
				accumulator += note;
				counter++;
				html += note>=4 ? `<li style="color:green;">Note: ${note}</li>` : `<li style="color:red;">Note: ${note}</li>`; 
			}
			html +=`<li>Average: ${accumulator / counter}</li>`;
		html +=`</ul>`; 
	}

	document.getElementById('info').innerHTML = html;
}

// Functions.
const ValidateString = (text) => {
    let data;

    do {
        data = prompt ('Enter ' + text);
    } while (!isNaN(data));
    
    return data;
};