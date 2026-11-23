const letters="101010010010101010"

function scrambleText(element) {
    const originalText = element.dataset.value ||
    element.textContent;
    element.dataset.value = originalText;

    let iteration = 0;

    clearInterval(element.scrambleInterval);

    element.scrambleInterval = setInterval(()=> {element.textContent = originalText.split("")
        .map((letter,index) => {
            if(index<iteration) {
                return originalText[index];
            }
            return letters[Math.floor(Math.random()*letters.length)];
        })
        .join("");

        if (iteration >= originalText.length) {
            clearInterval(element.scrambleInterval);
        }

        iteration += 0.5;
},70);
}

window.addEventListener("DOMContentLoaded",()=> {
    document.querySelectorAll(".scramble").forEach(element => {
        scrambleText(element);
    })
})


function scrambleText(element) {
    const originalText = element.dataset.value ||
    element.textContent;
    element.dataset.value = originalText;

    let iteration = 0;

    clearInterval(element.scrambleInterval);

    element.scrambleInterval = setInterval(()=> {element.textContent = originalText.split("")
        .map((letter,index) => {
            if(index<iteration) {
                return originalText[index];
            }
            return letters[Math.floor(Math.random()*letters.length)];
        })
        .join("");

        if (iteration >= originalText.length) {
            clearInterval(element.scrambleInterval);
        }

        iteration += 0.5;
},20);
}

window.addEventListener("DOMContentLoaded",()=> {
    document.querySelectorAll(".scramble1").forEach(element => {
        scrambleText(element);
    })
})