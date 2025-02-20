document.addEventListener("DOMContentLoaded", function() {
    let englishPoem = document.getElementById("englishPoem");
    let spanishPoem = document.getElementById("spanishPoem");

    // Check if English poem is at the top and set initial flipped state
    if (englishPoem.previousElementSibling === null) {
        englishPoem.classList.add("flipped");
        spanishPoem.classList.remove("flipped");
    } else {
        englishPoem.classList.remove("flipped");
        spanishPoem.classList.add("flipped");
    }

    // Set up click event to swap poems
    document.addEventListener("click", function () {
        // Swap positions
        if (englishPoem.nextElementSibling === spanishPoem) {
            englishPoem.parentNode.insertBefore(spanishPoem, englishPoem);
        } else {
            englishPoem.parentNode.insertBefore(englishPoem, spanishPoem);
        }

        // Check which poem is at the top
        let isEnglishOnTop = englishPoem.previousElementSibling === null;

        // Apply rotation based on position
        if (isEnglishOnTop) {
            englishPoem.classList.add("flipped");
            spanishPoem.classList.remove("flipped");
        } else {
            englishPoem.classList.remove("flipped");
            spanishPoem.classList.add("flipped");
        }
    });
});
