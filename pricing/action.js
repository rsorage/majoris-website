document.getElementById('loan-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Hide results
    document.querySelector('#results').style.display = 'none';
    // Show loader
    document.querySelector('#loading').style.display = 'block';
    // Set timer
    setTimeout(calculateResults, 500);
  });
  
  function calculateResults(e) {
    // UI Vars
    const amount = document.getElementById('amount');
    const subscription = document.getElementById('subscription');

    var r = amount.value;

  
    // Compute monthly payments

      if (r>0 && r<2500000){
          subscription.value=65;
      }
      else if(r>=2500000 && r<10000000){
          var sub=((r*1/12*0.29425)-(r*1/12*0.275))*(((-2.2222222222222*(10**-9))*r) + 0.092222222222222)*1/5;
          subscription.value=sub.toFixed(2);
      }
      else if(r>=10000000 && r<100000000){
        var sub=((r/12*0.29425)-(r/12*0.275))*(((-3.3333333333333*(10**-10))*r) + 0.073333333333333)*1/5;
        subscription.value=sub.toFixed(2);
      }
      else if(r>=100000000 && r<1000000000){
        var sub=((r/12*0.29425)-(r/12*0.275))*(((-2.2222222222222*(10**-11))*r) + 0.042222222222222)*1/5;
        subscription.value=sub.toFixed(2);
      }
      else if(r>=1000000000){
        var sub=((r*1/12*0.29425)-(r*1/12*0.275))*0.02*1/5;
        subscription.value = sub.toFixed(2);
      }
      else{
          subscription.value = ""; 
          showError("Insira seu faturamento anual");
      }
      document.querySelector('#results').style.display = 'block';
      document.querySelector('#loading').style.display = 'none';
  }
  
  // Show Error
  function showError(error) {
    // Hide results
    document.querySelector('#results').style.display = 'none';
    // Hide loader
    document.querySelector('#loading').style.display = 'none';
    // Create a div
    const errorDiv = document.createElement('div');
    // Get elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    // Add class
    errorDiv.className = 'alert alert-danger';
    // Create text node and append to div
    errorDiv.appendChild(document.createTextNode(error));
    // Insert error above heading
    card.insertBefore(errorDiv, heading);
    // Clear error after 3 seconds
    setTimeout(clearError, 3000);
  }
  
 

  // Clear error
  function clearError() {
    document.querySelector('.alert').remove();
  }
  