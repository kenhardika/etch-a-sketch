const canvas = document.querySelector('.canvas');
const layer = document.createElement('div');
const clearBtn = document.querySelector('.clearBtn');
const eraserBtn = document.getElementById('eraserBtn');
const drawBtn = document.getElementById('drawBtn');
const rainbowBtn = document.getElementById('rainbowBtn');
const DEFAULT_MODE = 'drawMode';
const DEFAULT_SIZE = 16;
let curMode = DEFAULT_MODE;
let colorPicker = document.getElementById('colorPicker').value;

// create block as div
//Canvas Size Scale
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
//Mode State, by click
eraserBtn.onclick= ()=>{ changeMode('eraserMode'); console.log('eraser mode on'); }
drawBtn.onclick= ()=> { changeMode('drawMode'); console.log('draw mode on'); }
rainbowBtn.onclick= ()=> { changeMode('rainbowMode'); console.log('rainbow mode on'); }
clearBtn.onclick=()=> { changeMode('clearMode'); console.log('clear mode on'); } 



function changeMode(modeState){
curMode = modeState;
activateBtnMode(modeState);
}

function activateBtnMode(modeState){
    if (curMode === 'eraserMode') {
    }
    else if ( curMode === 'drawMode' ){
    }
    else if (curMode === 'rainbowMode') {
    }
    else if (curMode === 'clearMode') {
    clearState();
    }
}

function changeColor(e) {
colorPicker = document.getElementById('colorPicker').value;
    if (e.type === 'mouseover' && !mouseDown) return
        if (curMode === 'eraserMode') {
        e.target.style.backgroundColor = '';
        }
        else if (curMode === 'drawMode') {
        e.target.style.backgroundColor = colorPicker;
        }
        else if (curMode === 'rainbowMode') {
        let RGBa = Math.floor(Math.random()*256);
        let RGBb = Math.floor(Math.random()*256);
        let RGBc = Math.floor(Math.random()*256);
        
        e.target.style.backgroundColor = `rgb(${RGBa},${RGBb},${RGBc})`;
        }
}

function clearState() {
   if (curMode === 'clearMode') {
       console.log('process clearing');
    let gridEach = document.querySelectorAll('.colrow')
        for (let i=0 ; i <gridEach.length ; i++) { gridEach[i].style.backgroundColor='';
        }
        curMode = DEFAULT_MODE; 
    };
}
// repeat it 16 times horizontally in a single row,

layer.classList.add('layerCanvas');
function canvasSize(item) {
let wdh16 = 2;
let wdh24 = 1.33;
let wdh36 = 1;
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
//mousedown event, so you can hold the click to draw
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function drawState() {
    let gridEach = document.querySelectorAll('.colrow');
    for (let i = 0 ; i < gridEach.length ; i++) {
        gridEach[i].addEventListener('mouseover', changeColor);
        gridEach[i].addEventListener('mousedown', changeColor);
    };    
}

window.onload = () => {
    canvasSize(DEFAULT_SIZE);
    drawState();
}