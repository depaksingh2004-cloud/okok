const menutoggle = document.querySelector('.menu-toggle');
const navlinks = document.querySelector('.nav-links');
const hamburger = document.querySelector('#hamburger');

menutoggle.addEventListener('click', () => {
    if (navlinks.classList.contains('active')) {
        navlinks.classList.remove('active');
        hamburger.className = 'fas fa-times';

    } else if (!navlinks.classList.contains('active')) 
            navlinks.classList.remove('active');     
            hamburger.className = 'fas fa-bars';
                
               
    })

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth'

             })
             

            navlinks.classList.remove('active');
        } 


    }); 
});    

const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filterValue = button.getAttribute('data-filter');
            
        filterButtons.forEach(btn => btn.classList.remove('active'))
        button.classList.add('active');
        
        portfolioItems.forEach(item => {
            const categaory = item.getAttribute('data-category');
            if (filterValue === 'all' || filterValue === categaory) {
                item.style.display = 'block';
                item.style.animation = 'fadeinup 0.5s ease-in-out';
            } else {
                item.style.display = 'none';
            }}

        );
                bookingForm.addEventListener('submit', function (e) {        
                e.preventDefault();

            const formData = new FormData(bookingForm);
            const data = Object.fromEntries(formData.entries());

            if(data.name && data.email && data.eventDate && data.eventType) {
                alert('Booking submitted successfully!');
                bookingForm.reset();
            }

            const observeroptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };


            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                        observer.unobserve(entry.target);
                    }
                });
        },observeroptions)

        document.querySelectorAll('service-card, testimonial-card').forEach(card => (
            observer.observe(card)
        ));
    }