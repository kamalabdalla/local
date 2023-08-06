const form = document.getElementById('studentForm');
const main = document.querySelector('.students');
const namInput = form['name']
const ageInput = form['age'] 
const rollInput = form['roll'] 

// const students = [
//     {
//     name: "abdala",
//     age: 18,
//     roll: 30,
//     },
// ];
const students = JSON.parse(localStorage.getItem("students")) || [];

const addStudent = (name, age, roll)=>{
    students.push({
        name, 
        age,
        roll, 
    });

    localStorage.setItem("students", JSON.stringify(students))
    return {name, age, roll}
};

const stEl = ({name, age, roll}) =>{
    const creatDv = document.createElement('div');
    const studNm = document.createElement('h2');
    const studAge = document.createElement('p');
    const studRol = document.createElement('p');

    studNm.innerText = 'Student name: '+name;
    studAge.innerText = 'Student age: '+age;
    studRol.innerText = 'Student roll: '+roll;

    creatDv.append(studNm, studAge, studRol);
    main.appendChild(creatDv);

};
    main.style.display = students.length === 0 ? "none": "flex";
    students.forEach(stEl);

    form.onsubmit = e =>{
        e.preventDefault();

        const newStudent = addStudent(
            namInput.value,
            ageInput.value,
            rollInput.value
        );
        stEl(newStudent);
        namInput.value = "";
        ageInput.value = "";
        rollInput.value = "";
    }