

const canvas = document.querySelector('.canvas');
const para = document.createElement('a');
const layer = document.createElement('div');
// create block as div,


// repeat it 16 times horizontally in a single row,
layer.classList.add('layerCanvas');
layer.style.display="grid";
layer.style.gridTemplateColumns="repeat(16, 12px)"
layer.style.gap="0px";
layer.style.boxSizing="border-box";

for (let j=1; j<=16 ; j++) {
for (let i=1 ; i<=16; i++) {
    const div = document.createElement('div');
    div.style.border = "solid 1px black";
    div.style.width = "10px";
    div.style.height = "10px";
    div.classList.add(`colrow`);
    div.classList.add(`${i}-${j}`)    
    layer.append(div);
};
}

canvas.append(layer);
// if they are already 16 blocks in a single row, continue to next row
// if its the 16th row stop the loop.