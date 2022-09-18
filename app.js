var table = document.getElementById("table"), sumVal = 0;

for(var i = 1; i < table.rows.length; i++) {
    sumVal = sumVal + parseInt(table.rows[i].cells[2].innerText);
}

document.getElementById("val").innerText = "Sum value = " + sumVal;


