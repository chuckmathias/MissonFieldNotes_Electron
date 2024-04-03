document.querySelector('[alt="Culture"]').addEventListener('click', function() {
    document.getElementById('culture-sidebar').classList.remove('hidden');
    document.getElementById('language-sidebar').classList.add('hidden');
    document.getElementById('culture-icons').classList.remove('hidden');
  });
  
document.querySelector('[alt="Language"]').addEventListener('click', function() {
    document.getElementById('language-sidebar').classList.remove('hidden');
    document.getElementById('culture-sidebar').classList.add('hidden');
    document.getElementById('culture-icons').classList.add('hidden');
});
  
document.querySelector('[alt="Field Notes"]').addEventListener('click', function() {
    // Add your code here to handle the click event on the "Field Notes" icon
    console.log('Field Notes clicked');
  });
  
  document.querySelector('[alt="Field Journal"]').addEventListener('click', function() {
    // Add your code here to handle the click event on the "Field Journal" icon
    console.log('Field Journal clicked');
  });
  
  document.querySelector('[alt="Personal Journal"]').addEventListener('click', function() {
    // Add your code here to handle the click event on the "Personal Journal" icon
    console.log('Personal Journal clicked');    
  });
  
  document.querySelector('[alt="Contact Journal"]').addEventListener('click', function() {
    // Add your code here to handle the click event on the "Contact Journal" icon
    console.log('Contact Journal clicked');
  });