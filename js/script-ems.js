// CREATE AN ARRAY OF EMPLOYEES

let employees = [
    ["1", "Bob Belcher", "1234", "B.Belcher@Burger.com", "Sales"],
    ["2", "Linda Belcher", "1235", "L.Belcher@Burger.com", "Quality Assurance"],
    ["3", "Gene Belcher", "1236", "G.Belcher@Burger.com", "Administrative"],
    ["4", "Tina Belcher", "1237", "T.Belcher@Burger.com", "Engineer"],
    ["5", "Louise Belcher", "1238", "L.Belcher@Burger.com", "Marketing"],
]

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
if (localStorage.getItem('employees') !==null) {
    employees = JSON.parse(localStorage.getItem('employees'))
}


// GET DOM ELEMENTS
let form = document.getElementById('addForm')
let empTable = document.getElementById('empTable')
let empCount = document.getElementById('empCount')

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
buildGrid()

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()
    // GET THE VALUES FROM THE TEXT BOXES
    let id = document.getElementById('id').value
    let name = document.getElementById('name').value 
    let ext = document.getElementById('extension').value 
    let email = document.getElementById('email').value 
    let dpt = document.getElementById('department').value


    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    let newEmp = [id, name, ext, email, dpt]

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employees.push(newEmp)
  
    // BUILD THE GRID
    buildGrid()

    // RESET THE FORM
    form.reset()


    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('id').focus()

});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure you want to delete this employee?')) {

        // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
        let rowIndex = e.target.parentNode.parentNode.rowIndex
        // REMOVE EMPLOYEE FROM ARRAY
        employees.splice(rowIndex -1, 1)
        // BUILD THE GRID
        buildGrid()
        }
    }
});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    empTable.lastElementChild.remove()
    // REBUILD THE TBODY FROM SCRATCH
    let tbody = document.createElement('tbody')
    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE
    for (let e of employees){
        tbody.innerHTML += `
        <tr>
            <td>${e[0]}</td>
            <td>${e[1]}</td>
            <td>${e[2]}</td>
            <td>${e[3]}</td>
            <td>${e[4]}</td>
            <td><button class='btn btn-sm btn-danger delete'>X</button></td>
        </tr>
        `
    }
    // BIND THE TBODY TO THE EMPLOYEE TABLE
    empTable.appendChild(tbody)
    // UPDATE EMPLOYEE COUNT
    empCount.innerText = employees.length
    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('employees', JSON.stringify(employees))

};