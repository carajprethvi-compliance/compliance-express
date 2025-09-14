// Remove no-js class when JavaScript is enabled
document.documentElement.classList.remove('no-js');

// Startup loader functionality
document.addEventListener('DOMContentLoaded', function() {
    // Startup loader with GIF that stops near the end
    const startupLoader = document.getElementById('startup-loader');
    const startupGif = document.getElementById('startup-gif');

    // Set GIF to not loop and control playback timing
    if (startupGif) {
        // Play the GIF for approximately 3.5 seconds (adjust based on your GIF length)
        // The GIF will play once and then fade out - it will NOT repeat/loop
        setTimeout(() => {
            // Start fading out the loader
            startupLoader.style.opacity = '0';

            // Remove loader after fade animation completes
            setTimeout(() => {
                startupLoader.style.display = 'none';
                startupLoader.remove();
            }, 500);
        }, 3500); // 🎯 TIMING ADJUSTMENT: Change this value to match your GIF duration
                  // - If GIF is longer: increase this number (e.g., 4500 for 4.5 seconds)
                  // - If GIF is shorter: decrease this number (e.g., 2500 for 2.5 seconds)
                  // - Current: 3500ms = plays ~80-90% of the GIF before fading out
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Download button functionality
    const windowsDownloadBtn = document.getElementById('windows-download');
    const macDownloadBtn = document.getElementById('mac-download');

    // Replace these URLs with your actual hosted file URLs
    const downloadUrls = {
        windows: 'https://github.com/carajprethvi-compliance/NCEXPRESS_DOWNLOADS_V1.0.0/releases/download/v1.1.1/NCExpress_Setup_1.1.1.rar', // Direct download link to Windows executable
        mac: '#' // Replace with actual macOS download URL
    };

    windowsDownloadBtn.addEventListener('click', function(e) {
        e.preventDefault();
        if (downloadUrls.windows === '#') {
            showNotification('Windows download URL not configured yet. Please check back later.', 'warning');
        } else {
            window.location.href = downloadUrls.windows;
            showNotification('Starting Windows download...', 'success');
        }
    });

    macDownloadBtn.addEventListener('click', function(e) {
        e.preventDefault();
        if (downloadUrls.mac === '#') {
            showNotification('macOS download URL not configured yet. Please check back later.', 'warning');
        } else {
            window.location.href = downloadUrls.mac;
            showNotification('Starting macOS download...', 'success');
        }
    });

    // Notification system
    function showNotification(message, type = 'info') {
        // Remove existing notification
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;

        // Style the notification
        Object.assign(notification.style, {
            position: 'fixed',
            top: '100px',
            right: '20px',
            padding: '1rem 1.5rem',
            borderRadius: '8px',
            color: 'white',
            fontWeight: '500',
            zIndex: '1001',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
            transform: 'translateX(400px)',
            transition: 'transform 0.3s ease'
        });

        // Set background color based on type
        const colors = {
            success: '#10b981',
            warning: '#f59e0b',
            error: '#ef4444',
            info: '#2563eb'
        };
        notification.style.backgroundColor = colors[type] || colors.info;

        // Add to page
        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Auto remove after 5 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => notification.remove(), 300);
        }, 5000);
    }

    // Add some interactive effects
    const downloadCards = document.querySelectorAll('.download-card');
    downloadCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Header background on scroll
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'white';
            header.style.backdropFilter = 'none';
        }
    });
});


