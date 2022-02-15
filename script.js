const canvas = document.querySelector('.canvas');
const para = document.createElement('a');
const layer = document.createElement('div');
const clearButton = document.querySelector('.clearBtn');
let colorPicker = document.getElementById('colorPicker').value;
// const testdiv = document.querySelector('.test');

// create block as div,
layer.classList.add('layerCanvas');


//default
canvasSize(16);
changeScale();
drawState();
clearState();

function changeScale () {
if(document.querySelector(`input[name="sizeSlider"]`)) {
    document.querySelectorAll(`input[name="sizeSlider"]`).forEach((elem)=> {
        elem.addEventListener('change', function (event) {  
            let item = event.target.value;
            console.log(item);
            canvasSize(item);
            drawState();   
    });
    });
};
};

// repeat it 16 times horizontally in a single row,
function canvasSize(item) {
let wdh16 = 1.5;
let wdh24 = 1;
let wdh36 = 0.75;
if (item == 16 ) {
    layer.style.gridTemplateColumns=`repeat(${item}, ${wdh16}em)`; //untuk 24x24 1em
    layer.style.gridTemplateRows=`repeat(${item}, ${wdh16}em)`; //NEED CHANGE TO SMALLER PIXEL THE MORE BIGGER THE Input ITEM
    console.log("pake 16")
}
else if (item == 24) {
    layer.style.gridTemplateColumns=`repeat(${item}, ${wdh24}em)`; //untuk 24x24 1em
    layer.style.gridTemplateRows=`repeat(${item}, ${wdh24}em)`; //NEED CHANGE TO SMALLER PIXEL THE MORE BIGGER THE Input ITEM
    console.log("pake 24")
}
else {
    layer.style.gridTemplateColumns=`repeat(${item}, ${wdh36}em)`; //untuk 24x24 1em
    layer.style.gridTemplateRows=`repeat(${item}, ${wdh36}em)`; //NEED CHANGE TO SMALLER PIXEL THE MORE BIGGER THE Input ITEM
    console.log("pake 36")
};
layer.innerHTML="";
layer.style.cursor="default";
layer.setAttribute('draggable', 'false');
let itemArea = item*item;
    for (let i=1 ; i<=itemArea; i++) {
                    let div = document.createElement('div');
                        div.style.border = "solid 1px #2929292F";
                        div.style.boxSizing = "border-box";
                        div.classList.add(`colrow`);
                        div.classList.add(`_${i}`);
                        div.setAttribute('draggable', 'false');
                        if (item == 16) {
                            div.style.width = `${wdh16}em`; //untuk 16x16 1.5em 
                            div.style.height = `${wdh16}em`;
                        }
                        else if (item == 24) {
                            div.style.width = `${wdh24}em`; //untuk 24x24 1em 
                            div.style.height = `${wdh24}em`;
                        }
                        else {
                            div.style.width = `${wdh36}em`; //untuk 36x36 0.5em 
                            div.style.height = `${wdh36}em`;
                        }
                    layer.append(div);
                    canvas.append(layer);
    }
};

function drawPaint(e) {
    colorPicker = document.getElementById('colorPicker').value;
    e.target.style.backgroundColor = colorPicker;
    //console.log(colorPicker);
}
function drawPainthold(e) {
    colorPicker = document.getElementById('colorPicker').value;
    if (e.buttons > 0) {
          e.target.style.backgroundColor = colorPicker;
        } 
    else {
        } 
}

function drawState() {
    let gridEach = document.querySelectorAll('.colrow');
    for (let i = 0 ; i < gridEach.length ; i++) {
        gridEach[i].addEventListener('mousedown', drawPaint);
        gridEach[i].addEventListener('mouseenter', drawPainthold);
    };    
}

function clearState() {
    clearButton.addEventListener('click',()=> { let gridEach = document.querySelectorAll('.colrow');
        for (let i=0 ; i <gridEach.length ; i++) { gridEach[i].style.backgroundColor=''; };
        })
}