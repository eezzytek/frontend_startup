document.addEventListener('DOMContentLoaded', () => {
    //
    // function checkNightMode() {
    //     const hour = new Date().getHours();
    //     if (hour < 6 || hour >= 21) {
    //         document.body.classList.add('night-mode');
    //         console.log("Увімкнено нічний режим");
    //     }
    // }
    // checkNightMode();


    const mottoContainer = document.getElementById('motto-container');
    const mainTitle = document.querySelector('h1');

    if (mottoContainer && mainTitle) {
        const text = "Інновації, що змінюють світ вже сьогодні.";
        const speed = 100;
        let i = 0;

        mottoContainer.style.color = "darkred";
        const titleWeight = getComputedStyle(mainTitle).fontWeight;
        let numericWeight = parseInt(titleWeight) || 400;
        mottoContainer.style.fontWeight = Math.min(numericWeight * 1.2, 900);
        mottoContainer.style.marginTop = "10px";
        mottoContainer.style.fontSize = "1.2rem";

        function typeWriter() {
            if (i < text.length) {
                mottoContainer.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        }
        typeWriter();
    }


    const carouselImg = document.getElementById('carousel-img');

    if (carouselImg) {
        const images = ['img_1.png', 'img_2.png'];
        let currentImgIndex = 0;

        setInterval(() => {
            carouselImg.style.opacity = 0;

            setTimeout(() => {
                currentImgIndex = (currentImgIndex + 1) % images.length;
                carouselImg.src = images[currentImgIndex];
                carouselImg.style.opacity = 1;
            }, 500);

        }, 3000);
    }


    const detailsInput = document.getElementById('details');
    const tooltipText = document.getElementById('tooltip-text');

    if (detailsInput && tooltipText) {
        detailsInput.addEventListener('mouseenter', () => {
            detailsInput.classList.add('highlight-input');
            tooltipText.style.visibility = 'visible';
            tooltipText.style.opacity = '1';
        });

        detailsInput.addEventListener('mouseleave', () => {
            detailsInput.classList.remove('highlight-input');
            tooltipText.style.visibility = 'hidden';
            tooltipText.style.opacity = '0';
        });
    }


    const founderName = document.getElementById('founder-name');
    const modal = document.getElementById('riddle-modal');
    const closeBtn = document.querySelector('.close-btn');
    const checkBtn = document.getElementById('check-riddle');
    const answerInput = document.getElementById('riddle-answer');

    if (founderName && modal) {
        founderName.addEventListener('mouseenter', () => {
            modal.style.display = "block";
        });

        closeBtn.addEventListener('click', () => {
            modal.style.display = "none";
        });

        window.addEventListener('click', (event) => {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        });

        checkBtn.addEventListener('click', () => {
            const answer = answerInput.value.toLowerCase().trim();
            if (answer.includes('сходи') || answer.includes('ескалатор')) {
                alert("Вірно! Ви розгадали загадку CEO.");
                modal.style.display = "none";
                answerInput.value = "";
            } else {
                alert("Невірно. Спробуйте ще раз! (Підказка: це є у кожному будинку)");
            }
        });
    }
});