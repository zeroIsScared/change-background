/* - create a HTML file with a button in the center of the page
- each time user clicks the button the entire page background color should be updated to a random color
- background colors should be predefined in your JS code and should have next values: yellow, red, green, blue, black, orange, pink. */
let colors = ['#F6F60B', '#F60B1B', '#0BF651', '#b0B59F6', '#000612', '#FC6A15', '#FC15D5'];

let button = document.getElementById('btn');


     button.onclick = () => {  
       let page = document.body; 
       let indexColor = Math.floor(Math.random() * 7);  
       let color = colors[indexColor];

       page.style.backgroundColor = color;

       console.log(indexColor);

       console.log(color);
     };

      
   
        
     
     
   
 