// document.addEventListener("DOMContentLoaded", function() {
//     console.log("Harmony Music Studio site loaded.");
// });

document.addEventListener("DOMContentLoaded", function () {
    console.log("Harmony Music Studio site loaded.");

    // Theme Toggle
    const toggleBtn = document.getElementById("themeToggle");
    if (toggleBtn) {
        toggleBtn.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");
        });
    }

    // Countdown Timer
    const countdownElement = document.getElementById("countdown");
    if (countdownElement) {
        const targetDate = new Date("June 5, 2025 19:00:00").getTime();

        function updateCountdown() {
            const now = new Date().getTime();
            const diff = targetDate - now;

            if (diff <= 0) {
                countdownElement.innerHTML = "The event is happening now!";
                return;
            }

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }

        updateCountdown();
        setInterval(updateCountdown, 1000);
    }
});

// Expand/Collapse Testimonials
function toggleTestimonials() {
    const content = document.getElementById("testimonials-content");
    const arrow = document.getElementById("toggle-arrow");
    if (content && arrow) {
        if (content.style.display === "none" || content.style.display === "") {
            content.style.display = "block";
            arrow.textContent = "▲";
        } else {
            content.style.display = "none";
            arrow.textContent = "▼";
        }
    }
}
