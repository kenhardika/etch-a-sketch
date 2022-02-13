

const canvas = document.querySelector('.canvas');
const para = document.createElement('a');
const layer = document.createElement('div');
const resetButton = document.getElementById('resetButton');
// const testdiv = document.querySelector('.test');

// create block as div,
layer.classList.add('layerCanvas');


//default
canvasSize(16);
changeScale();

function changeScale () {
if(document.querySelector(`input[name="sizeSlider"]`)) {
    document.querySelectorAll(`input[name="sizeSlider"]`).forEach((elem)=> {
        elem.addEventListener('change', function (event) {  
            let item = event.target.value;
            console.log(item);
            canvasSize(item);      
    });
    });
};
};

// repeat it 16 times horizontally in a single row,
function canvasSize(item) {

layer.style.gridTemplateColumns=`repeat(${item}, 1em)`; //untuk 24x24 1em
layer.style.gridTemplateRows=`repeat(${item}, 1em)`; //NEED CHANGE TO SMALLER PIXEL THE MORE BIGGER THE Input ITEM

layer.innerHTML="";
let itemArea = item*item;
    for (let i=1 ; i<=itemArea; i++) {
                    let div = document.createElement('div');
                        div.style.border = "solid 1px #2929292F";
                        div.style.width = "1em"; //untuk 24x24 1em 
                        div.style.height = "1em";
                        div.style.boxSizing = "border-box";
                        div.classList.add(`colrow`);
                        div.classList.add(`_${i}`);
                        //paint add color
                        //need MOUSE DOWN EVENT 
                        div.addEventListener('click',()=>{ div.style.backgroundColor="navy"; })                            
                    layer.append(div);
                    canvas.append(layer);
    }
};
