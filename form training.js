let panel2 = document.getElementById('panel2');
let panel1 = document.getElementById('panel1');
let panel3 = document.getElementById('panel3');
let cancel = document.getElementById('canc');

let index = -1; // Initialize index 

function btn1() {
    panel2.style.display = 'block';
    panel1.style.display = 'none';
}

function submit() {
    let deg = document.getElementById('degr').value;
    let ye = document.getElementById('yer').value;
    let re = document.getElementById('reg').value;
    let un = document.getElementById('uni').value;

    if (deg.trim() === "" || ye.trim() === "" || re.trim() === "" || un.trim() === "") {
        alert("Please enter all input fields.");
    } else {
        let table = document.getElementById('table2');
        
        if (index === -1) {
            let rowCount = table.rows.length;
            let row = table.insertRow(rowCount);

            row.insertCell(0).innerHTML = rowCount;
            row.insertCell(1).innerHTML = deg;
            row.insertCell(2).innerHTML = ye;
            row.insertCell(3).innerHTML = re;
            row.insertCell(4).innerHTML = un;

            let cell6 = row.insertCell(5);

            // Edit button 
            let editButton = document.createElement('button');
            editButton.innerHTML = "Edit";
            editButton.addEventListener('click', function () {
                index = row.rowIndex - 1;
                panel2.style.display = 'block';
                document.getElementById('degr').value = deg;
                document.getElementById('yer').value = ye;
                document.getElementById('reg').value = re;
                document.getElementById('uni').value = un;
            });
            cell6.appendChild(editButton);

            // Delete button
            let deleteButton = document.createElement('button');
            deleteButton.innerHTML = "Delete";
            deleteButton.addEventListener('click', function () {
                table.deleteRow(row.rowIndex);
                rownumber(table);
            });
            cell6.appendChild(deleteButton);
        } else {
            let row = table.rows[index + 1];
            row.cells[1].innerHTML = deg;
            row.cells[2].innerHTML = ye;
            row.cells[3].innerHTML = re;
            row.cells[4].innerHTML = un;
            index = -1;
        }

        panel1.style.display = 'block';
        panel2.style.display = 'none';
        panel3.style.display = 'block';
        document.getElementById('degr').value = "";
        document.getElementById('yer').value = "";
        document.getElementById('reg').value = "";
        document.getElementById('uni').value = "";
    }
}

function rownumber(table) {
    for (let i = 1; i < table.rows.length; i++) {
        table.rows[i].cells[0].innerHTML = i;
    }
}

cancel.addEventListener('click', function () {
    panel1.style.display = 'block';
    panel2.style.display = 'none';
    panel3.style.display = 'none';
    document.getElementById('degr').value = "";
    document.getElementById('yer').value = "";
    document.getElementById('reg').value = "";
    document.getElementById('uni').value = "";
});
