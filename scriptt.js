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