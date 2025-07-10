/**
 * Gallery Website - Main JavaScript
 * Funcionalidades do menu hamburger e interações da página
 */

document.addEventListener('DOMContentLoaded', function() {
    // ===== HAMBURGER MENU FUNCTIONALITY =====
    const hamburger = document.querySelector('.hamburger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    // Toggle do menu hamburger
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });
    
    // Fechar menu ao clicar nos links
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });
    
    // Fechar menu ao clicar fora dele (opcional)
    document.addEventListener('click', function(event) {
        if (!hamburger.contains(event.target) && !mobileMenu.contains(event.target)) {
            if (mobileMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
            }
        }
    });
    
    // ===== SMOOTH SCROLLING (opcional) =====
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
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
    
    // ===== GALLERY CARDS HOVER EFFECT (opcional) =====
    const galleryCards = document.querySelectorAll('.gallery-card');
    galleryCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
}); 