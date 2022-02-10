

const canvas = document.querySelector('.canvas');
const para = document.createElement('a');
const layer = document.createElement('div');
const resetButton = document.getElementById('resetButton');
//const clickLabel = document.querySelectorAll('input');
// create block as div,
layer.classList.add('layerCanvas');



canvasSize(16);

if(document.querySelector(`input[name="sizeSlider"]`)) {
    document.querySelectorAll(`input[name="sizeSlider"]`).forEach((elem)=> {
        elem.addEventListener('change', function (event) {  
            let item = event.target.value;
            console.log(item);
            canvasSize(item);        
    });
    });
};

//resetButton.addEventListener('click', () => { canvas.removeChild(layer); } );
// function checkRadio () {
// const scale1 = document.getElementById('val1');
// const scale2 = document.getElementById('val2');
// const scale3 = document.getElementById('val3');
// if (scale1.checked === true) {
//     console.log('checked 16x16');
// }
// else if (scale2.checked === true) {
//     console.log('checked 32x32');
// }
// else if (scale3.checked === true) {
//     console.log('checked 64x64');
// }
// else {
//     console.log('you checked nothing');
// };
// }

// repeat it 16 times horizontally in a single row,
function canvasSize(item) {
layer.style.gridTemplateColumns=`repeat(${item}, 12px)`;
layer.innerHTML="";
for (let j=1; j<=item ; j++) {
                for (let i=1 ; i<=item; i++) {
                    let div = document.createElement('div');
                        div.style.border = "solid 1px black";
                        div.style.width = "10px";
                        div.style.height = "10px";
                        div.classList.add(`colrow`);
                        div.classList.add(`${i}-${j}`)    
                    layer.append(div);
                    canvas.append(layer);
                }
            };
}
       

// layer.style.display="grid";
// layer.style.gap="0px";
// layer.style.boxSizing="border-box";

//
// if they are already 16 blocks in a single row, continue to next row
// if its the 16th row stop the loop.