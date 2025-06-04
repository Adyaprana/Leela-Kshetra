// Main JavaScript file for the temple website

document.addEventListener("DOMContentLoaded", () => {
  // Mobile Navigation Toggle
  const navToggle = document.getElementById("nav-toggle")
  const navMenu = document.querySelector(".nav-menu")

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active")
      navToggle.classList.toggle("active")
    })

    // Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const body = document.body;

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            // Toggle active classes
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            body.classList.toggle('nav-open');
        });

        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                body.classList.remove('nav-open');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                body.classList.remove('nav-open');
            }
        });
    }
});

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll(".nav-link")
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active")
        navToggle.classList.remove("active")
      })
    })
  }

  // Flash Message Close Functionality
  const flashCloseButtons = document.querySelectorAll(".flash-close")
  flashCloseButtons.forEach((button) => {
    button.addEventListener("click", function () {
      this.parentElement.style.animation = "slideOut 0.3s ease-out forwards"
      setTimeout(() => {
        this.parentElement.remove()
      }, 300)
    })
  })

  // Auto-hide flash messages after 5 seconds
  const flashMessages = document.querySelectorAll(".flash-message")
  flashMessages.forEach((message) => {
    setTimeout(() => {
      if (message.parentElement) {
        message.style.animation = "slideOut 0.3s ease-out forwards"
        setTimeout(() => {
          message.remove()
        }, 300)
      }
    }, 5000)
  })

  // Smooth Scrolling for Anchor Links
  const anchorLinks = document.querySelectorAll('a[href^="#"]')
  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href").substring(1)
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 100 // Account for fixed navbar
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })
      }
    })
  })

  // Scroll Reveal Animation
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed")
      }
    })
  }, observerOptions)

  // Observe elements for scroll reveal
  const revealElements = document.querySelectorAll(".scroll-reveal")
  revealElements.forEach((el) => {
    observer.observe(el)
  })

  // Navbar Background Change on Scroll
  const navbar = document.querySelector(".navbar")
  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        navbar.style.background = "rgba(139, 69, 19, 0.98)"
      } else {
        navbar.style.background = "rgba(139, 69, 19, 0.95)"
      }
    })
  }

  // Image Lazy Loading
  const images = document.querySelectorAll("img[data-src]")
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target
        img.src = img.dataset.src
        img.classList.remove("lazy")
        imageObserver.unobserve(img)
      }
    })
  })

  images.forEach((img) => imageObserver.observe(img))

  // Gallery Image Modal (if gallery exists)
  const galleryImages = document.querySelectorAll(".gallery-item img")
  if (galleryImages.length > 0) {
    galleryImages.forEach((img) => {
      img.addEventListener("click", function () {
        openImageModal(this.src, this.alt)
      })
    })
  }

  // Random Quote Display (for quotes page)
  const quoteElements = document.querySelectorAll(".quote")
  if (quoteElements.length > 0) {
    // Add fade-in animation to quotes
    quoteElements.forEach((quote, index) => {
      quote.style.animationDelay = `${index * 0.1}s`
      quote.classList.add("fade-in-up")
    })
  }

  // Form Validation Enhancement
  const forms = document.querySelectorAll("form")
  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      const requiredFields = form.querySelectorAll("[required]")
      let isValid = true

      requiredFields.forEach((field) => {
        if (!field.value.trim()) {
          isValid = false
          field.classList.add("error")
          showFieldError(field, "This field is required")
        } else {
          field.classList.remove("error")
          hideFieldError(field)
        }
      })

      if (!isValid) {
        e.preventDefault()
        showNotification("Please fill in all required fields", "error")
      }
    })
  })

  // Dynamic Copyright Year
  const currentYearElements = document.querySelectorAll(".current-year")
  const currentYear = new Date().getFullYear()
  currentYearElements.forEach((el) => {
    el.textContent = currentYear
  })
})

// Utility Functions

function openImageModal(src, alt) {
  // Create modal overlay
  const modal = document.createElement("div")
  modal.className = "image-modal"
  modal.innerHTML = `
        <div class="modal-overlay">
            <div class="modal-content">
                <img src="${src}" alt="${alt}">
                <button class="modal-close">&times;</button>
                <p class="modal-caption">${alt}</p>
            </div>
        </div>
    `

  document.body.appendChild(modal)
  document.body.style.overflow = "hidden"

  // Close modal functionality
  const closeBtn = modal.querySelector(".modal-close")
  const overlay = modal.querySelector(".modal-overlay")

  closeBtn.addEventListener("click", closeModal)
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal()
  })

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal()
  })

  function closeModal() {
    modal.remove()
    document.body.style.overflow = ""
  }
}

function showFieldError(field, message) {
  // Remove existing error message
  hideFieldError(field)

  const errorDiv = document.createElement("div")
  errorDiv.className = "field-error"
  errorDiv.textContent = message

  field.parentNode.insertBefore(errorDiv, field.nextSibling)
}

function hideFieldError(field) {
  const existingError = field.parentNode.querySelector(".field-error")
  if (existingError) {
    existingError.remove()
  }
}

function showNotification(message, type = "info") {
  const notification = document.createElement("div")
  notification.className = `notification notification-${type}`
  notification.innerHTML = `
        <i class="fas fa-${type === "error" ? "exclamation-circle" : "info-circle"}"></i>
        <span>${message}</span>
        <button class="notification-close">&times;</button>
    `

  document.body.appendChild(notification)

  // Auto-remove after 5 seconds
  setTimeout(() => {
    if (notification.parentElement) {
      notification.remove()
    }
  }, 5000)

  // Close button functionality
  const closeBtn = notification.querySelector(".notification-close")
  closeBtn.addEventListener("click", () => {
    notification.remove()
  })
}



// Add CSS for modal and notifications
const additionalStyles = `
<style>
.image-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2000;
    animation: fadeIn 0.3s ease-out;
}

.modal-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
}

.modal-content {
    position: relative;
    max-width: 90%;
    max-height: 90%;
    text-align: center;
}

.modal-content img {
    max-width: 100%;
    max-height: 80vh;
    border-radius: var(--border-radius);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

.modal-close {
    position: absolute;
    top: -40px;
    right: -40px;
    background: var(--primary-gold);
    color: var(--text-dark);
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-size: 1.5rem;
    cursor: pointer;
    transition: var(--transition);
}

.modal-close:hover {
    background: var(--secondary-gold);
    transform: scale(1.1);
}

.modal-caption {
    color: var(--text-light);
    margin-top: 1rem;
    font-size: 1.1rem;
}

.field-error {
    color: #e74c3c;
    font-size: 0.9rem;
    margin-top: 0.25rem;
}

.form-input.error {
    border-color: #e74c3c;
    box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.2);
}

.notification {
    position: fixed;
    top: 120px;
    right: 20px;
    background: var(--text-light);
    border-left: 4px solid var(--primary-gold);
    padding: 1rem;
    border-radius: var(--border-radius);
    box-shadow: 0 4px 15px var(--shadow-light);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    z-index: 1001;
    animation: slideIn 0.3s ease-out;
    max-width: 400px;
}

.notification-error {
    border-left-color: #e74c3c;
}

.notification-error i {
    color: #e74c3c;
}

.notification-close {
    background: none;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
    margin-left: auto;
    color: var(--text-dark);
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes slideOut {
    to {
        transform: translateX(100%);
        opacity: 0;
    }
}

@media (max-width: 768px) {
    .modal-close {
        top: -30px;
        right: -30px;
        width: 30px;
        height: 30px;
        font-size: 1.2rem;
    }
    
    .notification {
        right: 10px;
        left: 10px;
        max-width: none;
    }
}
</style>
`

// Inject additional styles
document.head.insertAdjacentHTML("beforeend", additionalStyles)
