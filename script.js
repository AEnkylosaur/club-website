// INITIALIZE EMAILJS
emailjs.init("4lrJ1yocvykEMSV0_");

// GET FORM
const form = document.getElementById("recruitment-form");

// FORM SUBMIT
form.addEventListener("submit", function(event){

    // STOP PAGE REFRESH
    event.preventDefault();

    // DISABLE BUTTON WHILE SENDING
    const submitButton = document.querySelector(".submit-btn");

    submitButton.disabled = true;
    submitButton.innerText = "SENDING APPLICATION...";

    // SEND EMAIL TO OVERSEER
    emailjs.sendForm(
        "service_2oladgp",
        "template_qzj8qnl",
        form
    )

    .then(function(){

        // SEND CONFIRMATION EMAIL TO APPLICANT
        emailjs.sendForm(
            "service_2oladgp",
            "template_0gw3b17",
            form
        )

        .then(function(){

            // SUCCESS MESSAGE
            alert(
                "APPLICATION SUCCESSFULLY SUBMITTED."
            );

            // RESET FORM
            form.reset();

            // RESET BUTTON
            submitButton.disabled = false;
            submitButton.innerText = "SUBMIT APPLICATION";

        })

        .catch(function(error){

            alert(
                "FAILED TO SEND CONFIRMATION EMAIL."
            );

            console.log(error);

            submitButton.disabled = false;
            submitButton.innerText = "SUBMIT APPLICATION";

        });

    })

    .catch(function(error){

        alert(
            "FAILED TO SEND APPLICATION."
        );

        console.log(error);

        submitButton.disabled = false;
        submitButton.innerText = "SUBMIT APPLICATION";

    });


function toggleMenu(){

    document
    .getElementById("govNav")
    .classList.toggle("show");

}


});