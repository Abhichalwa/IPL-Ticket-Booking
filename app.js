
// ACTIVITY 5: JAVASCRIPT BASICS AND USER INTERACTION

// 1. Reusable Toast Notification Function
function showToast(message) {

    const toast = document.createElement("div");

    toast.className = "toast";
    toast.innerText = message;

    document.body.appendChild(toast);

    // Remove notification after 3 seconds
    setTimeout(function() {
        toast.remove();
    }, 3000);
}


// 2. Smooth Scrolling for Book Buttons

const bookButtons = document.querySelectorAll(".book-btn");

bookButtons.forEach(function(button) {

    button.addEventListener("click", function(event) {

        // Prevent default anchor behaviour
        event.preventDefault();

        // Find the booking section
        const bookingSection = document.getElementById("booking");

        // Scroll smoothly to booking form
        bookingSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        // Display notification
        showToast("Taking you to the booking form!");

    });

});


// 3. Notification for Confirm Booking Button

const bookingForm = document.querySelector(".booking-form");

bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    showToast("Booking form submitted successfully!");

});
