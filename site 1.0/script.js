document.addEventListener("DOMContentLoaded", function () {
    const leftStanzas = document.querySelectorAll(".left .stanza");
    const rightStanzas = document.querySelectorAll(".right .stanza");

    // Ensure stanzas are correctly positioned before movement
    leftStanzas.forEach(stanza => {
        stanza.style.setProperty("--translateX", "0%");
        stanza.style.transform = "translateX(0%)"; // Start in place
    });

    rightStanzas.forEach(stanza => {
        stanza.style.setProperty("--translateX", "0%");
        stanza.style.transform = "translateX(0%)"; // Start in place
    });

    // Click event to trigger movement
    document.addEventListener("click", () => {
        leftStanzas.forEach((stanza, index) => {
            if (Math.random() > 0.5) {
                stanza.classList.add("meet");
                stanza.classList.remove("pass");
                stanza.style.setProperty("--translateX", "0%");
            } else {
                stanza.classList.add("pass");
                stanza.classList.remove("meet");
                stanza.style.setProperty("--translateX", "100%");
            }
            stanza.style.transform = "translateX(var(--translateX))";
        });

        rightStanzas.forEach((stanza, index) => {
            if (leftStanzas[index].classList.contains("meet")) {
                stanza.classList.add("meet");
                stanza.classList.remove("pass");
                stanza.style.setProperty("--translateX", "-0%");
            } else {
                stanza.classList.add("pass");
                stanza.classList.remove("meet");
                stanza.style.setProperty("--translateX", "-100%");
            }
            stanza.style.transform = "translateX(var(--translateX))";
        });
    });
});
