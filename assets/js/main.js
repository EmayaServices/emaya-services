//document.querySelector('button').addEventListener('click', (e)=>{
//  e.preventDefault();
//  const contactForm = document.querySelector('#form');
//  const name = document.querySelector('[name="name"]');
//  const email = document.querySelector('[name="email"]');
//  const message = document.querySelector('[name="content"]');
  // validation before sending the data
//  if(name.value.length===0 || name.value.length===0 || name.value.length===0){
//    alert('please fill the inputs')
//  }else{
//    let data = new FormData(contactForm);  
//    fetch("_url_here", { method: "POST", body: data });
//    alert('Thank you. your form was submited');
//    contactForm.reset()
//  }
//})


        // JavaScript code to change the background color on checkbox click
        const options = document.querySelectorAll('.option');

        options.forEach(option => {
            option.addEventListener('change', function () {
                this.parentElement.classList.toggle('selected', this.checked);
            });
        });

        // JavaScript code to handle form submission
        const form = document.getElementById('customerForm');

        form.addEventListener('submit', function (event) {
            event.preventDefault();

            // Verify reCAPTCHA
            grecaptcha.ready(function () {
                grecaptcha.execute('YOUR_RECAPTCHA_SITE_KEY', { action: 'submit' }).then(function (token) {
                    // Include the reCAPTCHA token in your form data
                    const formData = new FormData(form);
                    formData.append('g-recaptcha-response', token);

                    // Collect form data
                    const data = {};

                    formData.forEach((value, key) => {
                        data[key] = value;
                    });

                    // Perform additional validation if needed
                    if (!data['g-recaptcha-response']) {
                        alert('Please complete the CAPTCHA to submit the form.');
                        return;
                    }

                    // You can now use the 'data' object to process the form data

                    // Reset the form
                    form.reset();
                });
            });
        });