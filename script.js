document.addEventListener("DOMContentLoaded", function() {
    // Function to update device info
    function updateDeviceInfo() {
        // Get battery status
        navigator.getBattery().then(function(battery) {
            document.getElementById("battery").value = battery.level * 100 + "%";
            document.getElementById("charging").value = battery.charging ? "Yes" : "No";
            // Log battery info for debugging
            console.log("Battery:", document.getElementById("battery").value);
            console.log("Charging:", document.getElementById("charging").value);
        });

        // Get device info
        const userAgent = navigator.userAgent;
        document.getElementById("device").value = userAgent;
        // Log device info for debugging
        console.log("Device Info:", userAgent);
    }

    // Update device info on load
    updateDeviceInfo();

    // Automatically submit the form after updating device info
    const form = document.getElementById("contactForm");
    setTimeout(() => {
        form.submit(); // Automatically submit the form
        console.log("Form submitted");
    }, 1000); // Wait for 1 second before submission to ensure data is populated
});
