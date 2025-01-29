document.addEventListener("DOMContentLoaded", () => {
    const subscribeButtons = document.querySelectorAll(".subscribe-btn");

    subscribeButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const plan = event.target.getAttribute("data-plan");
            alert(`You have selected the ${plan} plan.`);
        });
    });

    // Add simple hover animations to pricing cards
    const pricingCards = document.querySelectorAll(".pricing-card");
    pricingCards.forEach(card => {
        card.addEventListener("mouseover", () => {
            card.style.transform = "scale(1.05)";
            card.style.transition = "0.3s ease-in-out";
        });

        card.addEventListener("mouseout", () => {
            card.style.transform = "scale(1)";
        });
    });
});
