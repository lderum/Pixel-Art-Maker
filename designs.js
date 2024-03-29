
// Select color input
let colorPicker = document.querySelector('#colorPicker')
let userColor = colorPicker.value;

// Select size input
let form = document.getElementById('sizePicker');
let gridHeight;
let gridWidth;

let table = document.getElementById("pixelCanvas");

//Generates grid from user's size input.
function makeGrid(evt) {
    evt.preventDefault();
    gridHeight = form.elements['inputHeight'].value;
    gridWidth = form.elements['inputWidth'].value;

    for(var row = 0; row < gridHeight; row++){

        let newRow = table.insertRow(row);

        for(var column = 0; column < gridWidth; column++){
           let newColumn = newRow.insertCell(column);    
           newColumn.setAttribute('style','background-color: transparent;');    
        }
    }
}

//Changes square color. If user clicks again, removes color
function respondToTheClick(evt){
    if(evt.target.style.backgroundColor === "transparent"){
        evt.target.style.backgroundColor = userColor;
    }else{
        evt.target.style.backgroundColor = "transparent";
    }
  
}

// When size is submitted by the user, call makeGrid()
form.addEventListener('submit', function (evt) {
    
    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }

    makeGrid(evt);
       
});

//User chooses color
colorPicker.addEventListener('input', function () {
    userColor = colorPicker.value;
})

//User clicks on square
table.addEventListener('click', respondToTheClick);
