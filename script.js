

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
paintCanvas(); 

function changeScale () {
if(document.querySelector(`input[name="sizeSlider"]`)) {
    document.querySelectorAll(`input[name="sizeSlider"]`).forEach((elem)=> {
        elem.addEventListener('change', function (event) {  
            let item = event.target.value;
            console.log(item);
            canvasSize(item);
            paintCanvas();        
    });
    });
};
};


function paintCanvas() {
if (document.querySelector('.colrow')) {
    document.querySelectorAll('.colrow').forEach( (elm)=> {
        elm.addEventListener( 'click',function (event) {
            let targ = event.target.classList.toString();
            //console.log('clicked ' + typeof targ);
            paintAddColor(targ);
        });
    });
};
};
// testdiv.addEventListener('click', ()=> { console.log('clicked div') });
// testdiv.style.border="solid 2px black";

//paint add color
function paintAddColor(targ){
let coloring = document.getElementsByClassName(targ);
console.log(targ + typeof targ);
console.log(typeof coloring);

// coloring.style.backgroundColor="black"; 
}



// repeat it 16 times horizontally in a single row,
function canvasSize(item) {
layer.style.gridTemplateColumns=`repeat(${item}, 16px)`;
layer.innerHTML="";
for (let j=1; j<=item ; j++) {
                for (let i=1 ; i<=item; i++) {
                    let div = document.createElement('div');
                        div.style.border = "solid 3px transparent";
                        div.style.width = "10px";
                        div.style.height = "10px";
                        div.classList.add(`colrow`);
                        div.classList.add(`${i}-${j}`);

                     
                    
                    
                    layer.append(div);
                    canvas.append(layer);
                }
            };
}
       
// if they are already 16 blocks in a single row, continue to next row
// if its the 16th row stop the loop.