function DisplayOneImage(direction) {
    if (direction == 1) {
        Counter = Counter + 1;
    }
    else if (direction == -1) {
        Counter = Counter - 1;
    }
    else if (direction == 0) {
    }
    else
        return;

    var imgs = document.images;
    if (Counter >= imgs.length)
        Counter = 0;
    else if (Counter < 0)
        Counter = imgs.length - 1;

    for (var i = 0; i < imgs.length; i++) {
        if (i == Counter) {
            //console.log(imgs[i].src);
            imgs[i].hidden = false;
        }
        else
            imgs[i].hidden = true;
    }
}

function changeSlidertype(Slide) {
    if (Slide) {
        clearInterval(SlidingTimer);
        SlidingTimer = setInterval(() => {
            if (isSliding)
                DisplayOneImage(1);
        }, 3000);
    }
    else {
        clearInterval(SlidingTimer);
    }
    isSliding = Slide;
}


function addToTable() {
    if (AssignValues()) {
        AddNamesToData();
        DisplayTable();
    }


}
function AssignValues() {
    names[0] = form.querySelector(`input[name="Department"]:checked`).value;
    var name = document.getElementById("Sname").value.toLowerCase();
    if (name !== null && name.length > 0)
        names[1] = name.charAt(0).toUpperCase() + name.slice(1);
    else{
        feedback.textContent = "No Name Entered";
        return false;
    }
        
    for (var i = 0; i < TData.length; i++) {
        if (names[1] === TData[i][1]){
            feedback.textContent = "This Name already exists";
        return false;
        }
    }
    grade = document.getElementById("Sgrade").value;
    if (grade >= 0 && grade <= 100)
        names[2] = grade;
    else{
        feedback.textContent = "Grades are invalid";
        return false
    }
        
    //console.log(names);
    feedback.textContent = "Data Inserted Successfully";
    return true;
}

function AddNamesToData() {
    TData.push([...names]);
    //console.log(TData);
}

function removeRow(rowid) {
    TData.splice(rowid, 1);
    DisplayTable();
}

function sort(type) {
    if (type == 0) {
        TData = TData.sort((a, b) => {
            return a[1].localeCompare(b[1], undefined, { sensitivity: 'base' });
        });
    }
    else {
        TData = TData.sort((a, b) => {
            if (!isNaN(a[2]) && !isNaN(b[2])) {
                return Number(a[2]) - Number(b[2]);
            }
            return a[2].localeCompare(b[2], undefined, { sensitivity: 'base' });
        });
    }
}

function filter(type) {
    filterstate = type;
}

function DisplayTable() {
    clearTable();
    for (let rows = 0; rows < TData.length; rows++) {
        if (filterstate == 0) {
            if (TData[rows][2] < 60) {
                let tr = document.createElement("tr");
                for (let i = 0; i < names.length; i++) {
                    let td = document.createElement("td");
                    td.innerText = TData[rows][i];
                    tr.appendChild(td);
                }
                let td = document.createElement("td");
                let deleteButton = document.createElement("button");
                deleteButton.addEventListener('click', function () {
                    removeRow(rows);
                });
                td.appendChild(deleteButton);
                tr.appendChild(td);

                if(TData[rows][2] < 60){
                    tr.classList.add('bg-r');
                }
                else{
                    tr.classList.add('bg-g');
                }
                table.appendChild(tr);
            }

        }
        else if (filterstate == 1) {
            if (TData[rows][2] >= 60) {
                let tr = document.createElement("tr");
                for (let i = 0; i < names.length; i++) {
                    let td = document.createElement("td");
                    td.innerText = TData[rows][i];
                    tr.appendChild(td);
                }
                let td = document.createElement("td");
                let deleteButton = document.createElement("button");
                deleteButton.addEventListener('click', function () {
                    removeRow(rows);
                });
                td.appendChild(deleteButton);
                tr.appendChild(td);
                
                if(TData[rows][2] < 60){
                    tr.classList.add('bg-r');
                }
                else{
                    tr.classList.add('bg-g');
                }
                table.appendChild(tr);
                
            }
        }
        else {
            let tr = document.createElement("tr");
            for (let i = 0; i < names.length; i++) {
                let td = document.createElement("td");
                td.innerText = TData[rows][i];
                tr.appendChild(td);
            }
            let td = document.createElement("td");
            let deleteButton = document.createElement("button");
            deleteButton.addEventListener('click', function () {
                removeRow(rows);
            });
            td.appendChild(deleteButton);
            tr.appendChild(td);

            if(TData[rows][2] < 60){
                tr.classList.add('bg-r');
            }
            else{
                tr.classList.add('bg-g');
            }
            table.appendChild(tr);
        }

    }
}

function displaySorted(type) {
    sort(type);
    DisplayTable();
}

function displayFiltered(type) {
    filterstate = type;
    DisplayTable();
}

function clearTable() {
    table.innerHTML = ''
}

let Counter = 0;
let isSliding = false;
let SlidingTimer;

let table = document.getElementsByTagName("table")[0].getElementsByTagName("tbody")[0];

let form = document.forms[0];
form.onsubmit = (e) => {
    e.preventDefault();
};

let names = [[], [], []];
let TData = [["SD", "Mohamed", 50], ["OS", "Ahmed", 70], ["EL", "Zeyad", 10]];
let filterstate = -1;

document.getElementById("filter").onchange = () => {
    displayFiltered(document.getElementById("filter").value);
};

document.getElementById("sort").onchange = () => {
    displaySorted(document.getElementById("sort").value);
};

let feedback = document.getElementsByTagName("h3")[0];

//AssignValues();
//addToTable();
DisplayTable();
DisplayOneImage(0);
changeSlidertype(true);




