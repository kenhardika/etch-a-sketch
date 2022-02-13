

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
let itemArea = item*item;
    for (let i=1 ; i<=itemArea; i++) {
                    let div = document.createElement('div');
                        div.style.border = "solid 1px #2929292F";
                        div.style.boxSizing = "border-box";
                        div.classList.add(`colrow`);
                        div.classList.add(`_${i}`);
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
                        //paint add color
                        //need MOUSE DOWN EVENT
                        // div.onmousedown = function() { 
                        //     div.style.backgroundColor="navy"; 
                        //     div.onmouseleave = function() { div.style.backgroundColor="black"; };
                        // };
                        
                        div.addEventListener('mouseover',()=> {div.style.backgroundColor="navy";});
                        
                        div.addEventListener('mouseup', ()=>{ div.style.backgroundColor="navy"; console.log('mouseup') });
                    layer.append(div);
                    canvas.append(layer);
    }
};
