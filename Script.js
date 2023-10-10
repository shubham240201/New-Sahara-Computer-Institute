document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(this);

    // Send a POST request to the server-side script
    fetch("ProcessForm.php", {
        method: "POST",
        body: formData,
    })
    .then(response => response.text())
    .then(data => {
        // Handle the response, which could be a success message or an error message
        alert(data); // You can display the response message to the user
    })
    .catch(error => {
        console.error("Error:", error);
    });
});
