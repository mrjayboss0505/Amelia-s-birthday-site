        // Mobile nav toggle
        document.getElementById("menuToggle").addEventListener("click", function () {
            const navLinks = document.getElementById("navLinks");
            navLinks.classList.toggle("show");
        });

        // Store wishes in an array
        const wishes = [
            {
                message: "Wishing you a day filled with happiness and a year filled with joy. Happy birthday, Amelia!",
                author: "Jane"
            },
            {
                message: "May your birthday be as special as you are. Happy Birthday, Amelia!",
                author: "Michael"
            },
            {
                message: "Another adventure-filled year awaits you. Welcome it by celebrating your birthday with pomp and splendor!",
                author: "Sarah"
            }
        ];

        // Current wish index
        let currentWishIndex = 0;

        // Function to display current wish
        function displayCurrentWish() {
            const wishesSlider = document.querySelector('.wishes-slider');
            const wishItem = wishesSlider.querySelector('.wish-item');
            
            wishItem.innerHTML = `
                <p class="wish-text">"${wishes[currentWishIndex].message}"</p>
                <p class="wish-author">- ${wishes[currentWishIndex].author}</p>
            `;
        }

        // Initialize wishes display
        displayCurrentWish();

        // Add event listeners to slider buttons
        const sliderBtns = document.querySelectorAll('.slider-btn');
        sliderBtns[0].addEventListener('click', () => {
            // Previous wish
            currentWishIndex = (currentWishIndex - 1 + wishes.length) % wishes.length;
            displayCurrentWish();
        });

        sliderBtns[1].addEventListener('click', () => {
            // Next wish
            currentWishIndex = (currentWishIndex + 1) % wishes.length;
            displayCurrentWish();
        });

        // Form Submission
        document.getElementById('rsvpForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Validate input
            if (!name || !message) {
                alert('Please provide both your name and a message.');
                return;
            }
            
            // Add new wish to the array
            wishes.push({
                message: message,
                author: name
            });
            
            // Display the newly added wish
            currentWishIndex = wishes.length - 1;
            displayCurrentWish();
            
            // Show confirmation message
            alert('Thank you for your RSVP, ' + name + '! Your message has been added to the Birthday Wishes.');
            
            // Scroll to wishes section to show the user their message
            document.getElementById('wishes').scrollIntoView({behavior: 'smooth'});
            
            // Reset form
            this.reset();
        });

        (function () {
        let slideIndex = 1;
        const slides = document.querySelectorAll('.slide');
        const thumbnails = document.querySelectorAll('.thumbnail');
        const prevBtn = document.querySelector('.prev');
        const nextBtn = document.querySelector('.next');

        function showSlide(n) {
            if (n > slides.length) slideIndex = 1;
            if (n < 1) slideIndex = slides.length;

            slides.forEach((slide) => (slide.style.display = 'none'));
            thumbnails.forEach((thumb) => thumb.classList.remove('active'));

            slides[slideIndex - 1].style.display = 'block';
            thumbnails[slideIndex - 1].classList.add('active');
        }

        function nextSlide() {
            showSlide(slideIndex += 1);
        }

        function prevSlide() {
            showSlide(slideIndex -= 1);
        }

        thumbnails.forEach((thumb, idx) => {
            thumb.addEventListener('click', () => {
            slideIndex = idx + 1;
            showSlide(slideIndex);
            });
        });

        prevBtn.addEventListener('click', prevSlide);
        nextBtn.addEventListener('click', nextSlide);

        // Initialize
        showSlide(slideIndex);
        })();

        // confetti animation

        window.onload = function () {
        // Basic burst animation
        confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.6 }
        });

        // Optionally repeat for a few seconds
        const duration = 5 * 1000; // 5 seconds
        const end = Date.now() + duration;

        (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
        })();
    };