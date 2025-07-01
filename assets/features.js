        // HR System Features Data
        const features = [
            {
                icon: 'fas fa-building',
                title: 'Multi-Company Support',
                description: 'Manage multiple companies independently — employees, attendance, payroll, and HR data for each one.',
                category: 'Management'
            },
            {
                icon: 'fas fa-cogs',
                title: 'Company Policy Configuration',
                description: 'Customize HR policies including working hours, off days, official vacations, late deductions, half-day rules, and bonus policies via a dedicated settings panel.',
                category: 'Configuration'
            },
            {
                icon: 'fas fa-user-shield',
                title: 'Admin Interface',
                description: 'Create and manage companies and admin accounts from a central admin panel.',
                category: 'Administration'
            },
            {
                icon: 'fas fa-chart-bar',
                title: 'Charts & Reports',
                description: 'Visualize monthly insights on attendance, absence, vacations, top-performing employees, and department-wise employee count.',
                category: 'Analytics'
            },
             {
                icon: 'fas fa-file-export',
                title: 'Modern Export System',
                description: 'Export employee data, payroll reports, and attendance records to Excel and PDF formats with modern styling.',
                category: 'Reports'
            },
            {
                icon: 'fas fa-users-cog',
                title: 'Employee Management',
                description: 'Add, edit, and delete employees, departments, managers & jobs with detailed info views.',
                category: 'Management'
            },
            {
                icon: 'fas fa-file-import',
                title: 'Employee Excel Import',
                description: 'Bulk import employee data from Excel spreadsheets with validation and error handling for seamless data migration.',
                category: 'Integration'
            },
            {
                icon: 'fas fa-clock',
                title: 'Attendance Tracking',
                description: 'Record attendance manually or automatically, and generate late, absent, and present reports.',
                category: 'Tracking'
            },
            {
                icon: 'fas fa-file-excel',
                title: 'Biometric Excel Import',
                description: 'Upload biometric Excel sheets to automatically save attendance records into the database.',
                category: 'Integration'
            },
            {
                icon: 'fas fa-stopwatch',
                title: 'Overtime Tracking',
                description: 'Monitor extra hours and include bonuses in payroll calculations.',
                category: 'Tracking'
            },
            {
                icon: 'fas fa-umbrella-beach',
                title: 'Leave & Vacation Management',
                description: 'Manage leave excuses, vacation requests, and time-offs through a clear tracking system.',
                category: 'Management'
            },
            {
                icon: 'fas fa-minus-circle',
                title: 'Deduction Management',
                description: 'Configure and apply various deductions (medical, loans, penalties) with real-time impact on payroll calculations using the apply button.',
                category: 'Finance'
            },
            {
                icon: 'fas fa-percentage',
                title: 'Tax Calculation System',
                description: 'Automated tax calculations based on salary brackets and local tax laws, with instant application to payroll through the apply button.',
                category: 'Finance'
            },
            {
                icon: 'fas fa-shield-alt',
                title: 'Insurance Management',
                description: 'Manage employee insurance deductions and contributions with one-click application to payroll calculations via the apply button.',
                category: 'Finance'
            },
            {
                icon: 'fas fa-money-bill-wave',
                title: 'Payroll System',
                description: 'Real-time payroll processing using attendance, deductions, overtime, and company-specific policies.',
                category: 'Finance'
            },
            {
                icon: 'fas fa-receipt',
                title: 'Payslip Reports',
                description: 'Generate payslip reports for employees with ability to download as PDF or print.',
                category: 'Reports'
            },
            {
                icon: 'fas fa-mobile-alt',
                title: 'Fully Responsive',
                description: 'Smooth functionality across mobile, tablet, and desktop devices.',
                category: 'Technology'
            },
            {
                icon: 'fas fa-moon',
                title: 'Dark Mode',
                description: 'Toggle dark mode for a modern look and reduced eye strain during long sessions.',
                category: 'Interface'
            },
            {
                icon: 'fas fa-calendar-check',
                title: 'Calendar Integration',
                description: 'View and manage key HR events like deadlines and vacations from a built-in calendar.',
                category: 'Planning'
            },
            {
                icon: 'fas fa-tasks',
                title: 'To-Do List',
                description: 'Stay productive by writing and checking off tasks as you complete them.',
                category: 'Productivity'
            },
            {
                icon: 'fas fa-expand',
                title: 'Full-Screen Mode',
                description: 'Maximize focus with a clean, distraction-free full-screen experience.',
                category: 'Interface'
            },
            {
                icon: 'fas fa-lock',
                title: 'Secure Login System',
                description: 'Strong authentication with easy login for the admin interface or HR interface.',
                category: 'Security'
            },
            {
                icon: 'fas fa-book',
                title: 'Documentation',
                description: 'In-depth docs for developers to easily understand and customize the system\'s code and database.',
                category: 'Support'
            }
        ];

        // Create particles
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 30;

            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 8 + 's';
                particle.style.animationDuration = (Math.random() * 3 + 5) + 's';
                particlesContainer.appendChild(particle);
            }
        }

        // Copy to clipboard function
        function copyToClipboard(text, element) {
            navigator.clipboard.writeText(text).then(() => {
                const notification = element.querySelector('.copy-notification');
                notification.classList.add('show');
                setTimeout(() => {
                    notification.classList.remove('show');
                }, 2000);
            });
        }

        // Scroll to features section
        function scrollToFeatures() {
            document.getElementById('features').scrollIntoView({
                behavior: 'smooth'
            });
        }

        // Scroll to top
        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        // Initialize features
        function initializeFeatures() {
            const grid = document.getElementById('featuresGrid');
            
            features.forEach((feature, index) => {
                const card = document.createElement('div');
                card.className = 'feature-card';
                card.style.transitionDelay = (index * 0.1) + 's';
                card.innerHTML = `
                    <div class="feature-category">${feature.category}</div>
                    <div class="feature-icon">
                        <i class="${feature.icon}"></i>
                    </div>
                    <div class="feature-title">${feature.title}</div>
                    <div class="feature-description">${feature.description}</div>
                `;
                grid.appendChild(card);
            });
        }

        // Animate features on scroll
        function animateOnScroll() {
            const cards = document.querySelectorAll('.feature-card');
            const scrollIndicator = document.getElementById('scrollIndicator');
            
            cards.forEach(card => {
                const cardTop = card.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (cardTop < windowHeight * 0.8) {
                    card.classList.add('animate');
                }
            });

            // Show/hide scroll indicator
            if (window.scrollY > 100) {
                scrollIndicator.classList.remove('hidden');
            } else {
                scrollIndicator.classList.add('hidden');
            }
        }

        // Event listeners
        window.addEventListener('scroll', animateOnScroll);
        window.addEventListener('load', () => {
            createParticles();
            initializeFeatures();
            animateOnScroll();
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
