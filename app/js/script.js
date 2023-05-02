 // Get references to the buttons
 const button1 = document.getElementById('button1');
 const button2 = document.getElementById('button2');
 const button3 = document.getElementById('button3');

 // Add event listeners to the buttons
 button1.addEventListener('click', function() {
     // Remove 'active' class from all buttons
     button1.classList.add('active');
     button2.classList.remove('active');
     button3.classList.remove('active');

     // Perform action for Button 1
     console.log('Button 1 clicked');
     // Add your desired functionality here
 });

 button2.addEventListener('click', function() {
     // Remove 'active' class from all buttons
     button1.classList.remove('active');
     button2.classList.add('active');
     button3.classList.remove('active');

     // Perform action for Button 2
     console.log('Button 2 clicked');
     // Add your desired functionality here
 });

 button3.addEventListener('click', function() {
     // Remove 'active' class from all buttons
     button1.classList.remove('active');
     button2.classList.remove('active');
     button3.classList.add('active');

     // Perform action for Button 3
     console.log('Button 3 clicked');
     // Add your desired functionality here
 });