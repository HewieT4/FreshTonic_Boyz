

function setDayNightMode() {
    const now = new Date();
    const hour = now.getHours();
  
    // Define your day/night time ranges (adjust as needed)
    const isNight = hour < 7 || hour > 19; // Night from 7 PM to 7 AM
  
    if (isNight) {
      document.body.classList.add('night-mode');
    } else {
      document.body.classList.remove('night-mode');
    }
  }
  
  // Call the function initially and whenever the time changes (optional)
  setDayNightMode(); // Set mode when the page loads
  setInterval(setDayNightMode, 60000); // Update every minute (optional)


// GSAP Animations
gsap.from("header h1", { opacity: 0, y: -50, duration: 1.5, delay: 0.5 });
gsap.from("header p", { opacity: 0, y: 50, duration: 1.5, delay: 1 });
gsap.from(".cta-button", { opacity: 0, y: 50, duration: 1.5, delay: 1.5 });

// ScrollMagic Animations
const controller = new ScrollMagic.Controller();

// About Section
new ScrollMagic.Scene({
    triggerElement: "#about",
    triggerHook: 0.8,
})
.setTween("#about", { opacity: 1, y: 0, duration: 1 })
.addTo(controller);

// Spotlight Card Section 
<section class="spotlight-card">
    <div class="card">
        <h2 class="spotlight-title">Spotlight on Freshtonic_Boyz</h2>
        <p class="spotlight-description">Experience the electrifying energy of our performances and the unique sound of Amapiano.</p>
    </div>
</section>
// Music Section
new ScrollMagic.Scene({
    triggerElement: "#music",
    triggerHook: 0.8,
})
.setTween("#music", { opacity: 1, y: 0, duration: 1 })
.addTo(controller);

// Events Section
new ScrollMagic.Scene({
    triggerElement: "#events",
    triggerHook: 0.8,
})
.setTween("#events", { opacity: 1, y: 0, duration: 1 })
.addTo(controller);

// Gallery Section
new ScrollMagic.Scene({
    triggerElement: "#gallery",
    triggerHook: 0.8,
})
.setTween("#gallery", { opacity: 1, y: 0, duration: 1 })
.addTo(controller);

// Contact Section
new ScrollMagic.Scene({
    triggerElement: "#contact",
    triggerHook: 0.8,
})
.setTween("#contact", { opacity: 1, y: 0, duration: 1 })
.addTo(controller);

