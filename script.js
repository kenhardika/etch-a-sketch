//DOM selector
const body = document.querySelector('body');
const div1= document.createElement('div')
const para = document.createElement('p');


//add to the html
body.append(div1);
div1.append(para);
// div2.append(para2);
// div3.append(para);
// div4.append(para);

// add class name
div1.classList.add("col-1");
body.style.display="grid";
body.style.gridTemplateColumns = "repeat(4,50px)"
div1.style.border="solid 2px black";

// div.classList.add("one");