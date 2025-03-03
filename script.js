document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links li button');  

    navToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });

    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.image-container');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.dataset.filter;

            filterButtons.forEach(btn => btn.classList.remove('active'));

            this.classList.add('active');

            galleryItems.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter.toLowerCase())) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const caption = document.getElementById('caption');
    const closeBtn = document.querySelector('.close');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    let currentImageIndex = 0;
    const imageContainers = document.querySelectorAll('.image-container img');
    
    function openLightbox(img) {
        lightbox.style.display = 'grid';
        lightboxImg.src = img.src;
        caption.textContent = img.alt;
        currentImageIndex = [...imageContainers].indexOf(img); // Get current image index
    }

    imageContainers.forEach(img => {
        img.addEventListener('click', () => {
            openLightbox(img);
        });
    });

    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentImageIndex > 0) {
            currentImageIndex--;
        } else {
            currentImageIndex = imageContainers.length - 1;
        }
        const img = imageContainers[currentImageIndex];
        openLightbox(img);
    });

    nextBtn.addEventListener('click', () => {
        if (currentImageIndex < imageContainers.length - 1) {
            currentImageIndex++;
        } else {
            currentImageIndex = 0;
        }
        const img = imageContainers[currentImageIndex];
        openLightbox(img);
    });
});