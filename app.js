
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

        event.preventDefault();

        const bookingSection = document.getElementById("booking");

        bookingSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        showToast("Taking you to the booking form!");

    });

});


// ACTIVITY 7: SELECTOR FORMS AND LIVE INTERACTION


// 3. Selecting Form Elements Using DOM Selectors

const matchSelect = document.getElementById("match");

const categorySelect = document.getElementById("category");

const quantityInput = document.getElementById("quantity");


// 4. Selecting Booking Summary Elements

const summaryMatch = document.getElementById("summaryMatch");

const summaryStand = document.getElementById("summaryStand");

const summaryPrice = document.getElementById("summaryPrice");

const summaryQuantity = document.getElementById("summaryQuantity");

const totalAmount = document.getElementById("totalAmount");


// 5. Ticket Prices for Different Matches

const ticketPrices = {

    "CSK vs MI": {
        "General": 800,
        "Premium": 1500,
        "VIP": 3000
    },

    "RCB vs KKR": {
        "General": 1000,
        "Premium": 2000,
        "VIP": 4000
    },

    "MI vs RCB": {
        "General": 900,
        "Premium": 1800,
        "VIP": 3500
    }

};


// 6. Function to Update Booking Summary

function updateSummary() {

    const selectedMatch = matchSelect.value;

    const selectedCategory = categorySelect.value;

    let quantity = Number(quantityInput.value);


    // Check valid ticket quantity

    if (!Number.isInteger(quantity) || quantity < 1 || quantity > 10) {

        quantity = 1;

        quantityInput.value = 1;

    }


    // Check whether match and category are selected

    if (selectedMatch === "" || selectedCategory === "") {

        summaryMatch.textContent = selectedMatch || "Not selected";

        summaryStand.textContent = selectedCategory || "Not selected";

        summaryPrice.textContent = "₹0";

        summaryQuantity.textContent = quantity;

        totalAmount.textContent = "₹0";

        return;

    }


    // Get ticket price

    const price = ticketPrices[selectedMatch][selectedCategory];


    // Calculate total price

    const total = price * quantity;


    // Update Booking Summary Card

    summaryMatch.textContent = selectedMatch;

    summaryStand.textContent = selectedCategory;

    summaryPrice.textContent = "₹" + price;

    summaryQuantity.textContent = quantity;

    totalAmount.textContent = "₹" + total.toLocaleString("en-IN");


    // Display notification

    showToast("Booking Summary Updated!");

}


// 7. Adding Event Listeners

matchSelect.addEventListener("change", updateSummary);

categorySelect.addEventListener("change", updateSummary);

quantityInput.addEventListener("input", updateSummary);


// 8. Notification for Confirm Booking Button

const bookingForm = document.querySelector(".booking-form");

bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    showToast("Booking form submitted successfully!");

});
