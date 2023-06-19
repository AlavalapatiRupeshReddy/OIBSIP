window.addEventListener('DOMContentLoaded', (event) => {

    const display = document.querySelector('.Display');
  
    
    const buttons = document.querySelectorAll('.num, .ch');
  
    
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        
        const value = button.textContent;
  
        if (value === '=') {
          
          try {
            display.value = eval(display.value);
          } catch (error) {
            display.value = 'Error';
          }
        }
       
         else if(value =='X')
        {
            display.value=display.value.slice(0,-1);
        }
        else if (value === 'AC') {
          
          display.value = '';
        } else {
          
          display.value += value;
        }
      });
    });
  });
  
