$(document).ready(function() {
    const videos = $('.video_content');

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const video = entry.target;
                video.currentTime = 0;
                video.play();
            } else {
                const video = entry.target;
                video.pause();
            }
        });
    });

    videos.each(function() {
        observer.observe(this);
    });
});