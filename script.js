document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.image-container');
    const topImages = container.querySelectorAll('.top-image');

    container.addEventListener('mousemove', function(event) {
        const rect = container.getBoundingClientRect();
        const offsetX = event.clientX - rect.left;
        const offsetY = event.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        topImages.forEach(image => {
            let moveX = 0;
            let moveY = 0;

            if (image.classList.contains('top-image1')) {
                moveX = -Math.abs(centerX - offsetX) / 2;
                moveY = -Math.abs(centerY - offsetY) / 2;
            } else if (image.classList.contains('top-image2')) {
                moveX = Math.abs(centerX - offsetX) / 2;
                moveY = -Math.abs(centerY - offsetY) / 2;
            } else if (image.classList.contains('top-image3')) {
                moveX = -Math.abs(centerX - offsetX) / 2;
                moveY = Math.abs(centerY - offsetY) / 2;
            } else if (image.classList.contains('top-image4')) {
                moveX = Math.abs(centerX - offsetX) / 2;
                moveY = Math.abs(centerY - offsetY) / 2;
            }

            image.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    });
     container.addEventListener('mouseleave', function() {
        topImages.forEach(image => {
            image.style.transform = 'translate(0, 0)';
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const previews = document.querySelectorAll('.video-preview');
    const modal = document.getElementById('video-modal');
    const modalVideo = document.getElementById('modal-video');
    const closeModal = document.querySelector('.close');

    previews.forEach(preview => {
        const video = preview.querySelector('video');

        preview.addEventListener('mouseenter', function() {
            video.play();
        });

        preview.addEventListener('mouseleave', function() {
            video.pause();
            video.currentTime = 0; // Reset the video to the beginning
        });

        preview.addEventListener('click', function() {
            const videoUrl = this.getAttribute('data-video-url');
            modalVideo.querySelector('source').src = videoUrl;
            modalVideo.load();
            modalVideo.play();
            modal.style.display = 'flex';
        });
    });

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        modalVideo.pause();
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            modalVideo.pause();
        }
    });
});

