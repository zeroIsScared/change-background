//- create a HTML file with a button in the center of the page
//- each time user clicks the button the entire page background color should be updated to a random color
//- background colors should be predefined in your JS code and should have next values: yellow, red, green, blue, black, orange, pink.
const randomColor = () => {
  let color = '';
  let num = Math.floor(Math.random() * 7); 
 
  switch (num) {
   case 0: 
     color = 'yellow';
     break;
 
   case 1:
     color = 'red';
     break;
   
   case 2:
     color ='green';
     break;
 
   case 3:
     color = 'blue';
     break;
 
   case 4:
     color = 'pink';
     break;
 
   case 5:
     color = 'orange';
     break;
 
   case 6:
     color = 'black';
     break;
 
   default:
     color = 'white';
  }
  return color;
};
randomColor();

 const changeColor = () => { 

  let page = document.body;
  
  page.style.backgroundColor= randomColor();
 };

 

  

  document.getElementById('btn').addEventListener('click', changeColor);
