// Function to handle menu clicks and display the relevant section
function showSection(sectionId) {
    // Hide all sections
    var sections = document.querySelectorAll('.content-section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    // Show the selected section
    var sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
        sectionToShow.style.display = 'block';
    }
}

// Add event listeners to the navigation links
document.getElementById("offersLink").addEventListener("click", function() {
    showSection("offers");
});

document.getElementById("inboundLink").addEventListener("click", function() {
    showSection("inbound");
});

document.getElementById("outboundLink").addEventListener("click", function() {
    showSection("outbound");
});

document.getElementById("paymentsLink").addEventListener("click", function() {
    showSection("payments");
});

document.getElementById("settingsLink").addEventListener("click", function() {
    showSection("settings");
});

// Initialize by showing the Offers section by default
showSection("offers");
