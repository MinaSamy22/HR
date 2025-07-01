        // Copy to clipboard function
        function copyToClipboard(text, element) {
            navigator.clipboard.writeText(text).then(function() {
                const notification = element.querySelector('.copy-notification');
                notification.classList.add('show');
                
                setTimeout(() => {
                    notification.classList.remove('show');
                }, 2000);
            }).catch(function(err) {
                console.error('Failed to copy text: ', err);
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = text;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                
                const notification = element.querySelector('.copy-notification');
                notification.classList.add('show');
                
                setTimeout(() => {
                    notification.classList.remove('show');
                }, 2000);
            });
        }

        // Particle system
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const isMobile = window.innerWidth <= 768;
            const particleCount = isMobile ? 10 : 20;

            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 15 + 's';
                particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
                particlesContainer.appendChild(particle);
            }
        }

        // Button click handlers
        document.getElementById('liveDemoBtn').addEventListener('click', function(e) {
            e.preventDefault();
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'translateY(-5px) scale(1.05)';
                window.open('https://hr.prosofteg.com/', '_blank'); // open in new tab
            }, 150);
        });

        

        // Enhanced hover effects - disabled on touch devices
        if (!('ontouchstart' in window)) {
            document.querySelectorAll('.btn-custom').forEach(btn => {
                btn.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-5px) scale(1.05)';
                });
                
                btn.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0) scale(1)';
                });
            });

            document.querySelectorAll('.feature-badge').forEach(badge => {
                badge.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-5px) scale(1.05)';
                });
                
                badge.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0) scale(1)';
                });
            });
        }

        // Initialize particles when page loads
        document.addEventListener('DOMContentLoaded', function() {
            createParticles();
        });

        // Recreate particles on window resize
        window.addEventListener('resize', function() {
            const particlesContainer = document.getElementById('particles');
            particlesContainer.innerHTML = '';
            createParticles();
        });

        // Optimize performance on mobile
        if (window.innerWidth <= 768) {
            document.querySelectorAll('.floating-icon').forEach(icon => {
                icon.style.display = 'none';
            });
        }
