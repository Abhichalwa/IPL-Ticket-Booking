
// ==========================================
// ACTIVITY 5: JAVASCRIPT BASICS AND INTERACTION
// ==========================================


// 1. Reusable Toast Notification Function

function showToast(message) {

    const toast = document.createElement("div");

    toast.className = "toast";
    toast.innerText = message;

    document.body.appendChild(toast);

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


// ==========================================
// ACTIVITY 7: SELECTOR FORMS AND LIVE INTERACTION
// ==========================================


// 3. Selecting Form Elements

const matchSelect = document.getElementById("match");

const categorySelect = document.getElementById("category");

const quantityInput = document.getElementById("quantity");


// 4. Selecting Booking Summary Elements

const summaryMatch = document.getElementById("summaryMatch");

const summaryStand = document.getElementById("summaryStand");

const summaryPrice = document.getElementById("summaryPrice");

const summaryQuantity = document.getElementById("summaryQuantity");

const totalAmount = document.getElementById("totalAmount");


// 5. Ticket Prices

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

    if (!Number.isInteger(quantity) || quantity < 1 || quantity > 10) {

        quantity = 1;
        quantityInput.value = 1;

    }

    if (selectedMatch === "" || selectedCategory === "") {

        summaryMatch.textContent = selectedMatch || "Not selected";

        summaryStand.textContent = selectedCategory || "Not selected";

        summaryPrice.textContent = "₹0";

        summaryQuantity.textContent = quantity;

        totalAmount.textContent = "₹0";

        return;

    }

    const price = ticketPrices[selectedMatch][selectedCategory];

    const total = price * quantity;

    summaryMatch.textContent = selectedMatch;

    summaryStand.textContent = selectedCategory;

    summaryPrice.textContent = "₹" + price;

    summaryQuantity.textContent = quantity;

    totalAmount.textContent = "₹" + total.toLocaleString("en-IN");

    showToast("Booking Summary Updated!");

}


// 7. Adding Event Listeners

matchSelect.addEventListener("change", updateSummary);

categorySelect.addEventListener("change", updateSummary);

quantityInput.addEventListener("input", updateSummary);


// 8. Booking Form Submission

const bookingForm = document.querySelector(".booking-form");

bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    showToast("Booking form submitted successfully!");

});


// ==========================================
// ACTIVITY 8: RESPONSIVE LAYOUT AND INTERACTION
// ==========================================


// 9. Hamburger Menu Toggle

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function() {

        navLinks.classList.toggle("active");

        const isOpen = navLinks.classList.contains("active");

        menuToggle.classList.toggle("active");

        menuToggle.setAttribute("aria-expanded", isOpen);

    });


    // Close Menu After Clicking a Navigation Link

    const navigationItems = navLinks.querySelectorAll("a");

    navigationItems.forEach(function(link) {

        link.addEventListener("click", function() {

            navLinks.classList.remove("active");

            menuToggle.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

        });

    });

}


// 10. Filter Match Cards by Team

const teamFilter = document.getElementById("teamFilter");

const matchCards = document.querySelectorAll(".match-card");

if (teamFilter) {

    teamFilter.addEventListener("change", function() {

        const selectedTeam = teamFilter.value;

        let visibleCount = 0;

        matchCards.forEach(function(card) {

            const teams = card.dataset.teams.split(" ");

            if (
                selectedTeam === "all" ||
                teams.includes(selectedTeam)
            ) {

                card.style.display = "";

                visibleCount++;

            } else {

                card.style.display = "none";

            }

        });

        showToast(visibleCount + " match(es) found!");

    });

}


// 11. Grid and List View Toggle

const gridViewBtn = document.getElementById("gridViewBtn");

const listViewBtn = document.getElementById("listViewBtn");

const matchContainer = document.getElementById("matchContainer");


if (gridViewBtn && listViewBtn && matchContainer) {

    gridViewBtn.addEventListener("click", function() {

        matchContainer.classList.remove("list-view");

        matchContainer.classList.add("grid-view");

        gridViewBtn.classList.add("active");

        listViewBtn.classList.remove("active");

        gridViewBtn.setAttribute("aria-pressed", "true");

        listViewBtn.setAttribute("aria-pressed", "false");

        showToast("Grid View Enabled!");

    });


    listViewBtn.addEventListener("click", function() {

        matchContainer.classList.remove("grid-view");

        matchContainer.classList.add("list-view");

        listViewBtn.classList.add("active");

        gridViewBtn.classList.remove("active");

        listViewBtn.setAttribute("aria-pressed", "true");

        gridViewBtn.setAttribute("aria-pressed", "false");

        showToast("List View Enabled!");

    });

}
