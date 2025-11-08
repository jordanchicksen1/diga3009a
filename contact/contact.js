
(function() {
  emailjs.init({
    publicKey: "iVO6VsyBs1f2TcEE3",
  });
})();

const form = document.getElementById("contactForm");
const statusMsg = document.getElementById("statusMsg");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  statusMsg.textContent = "Sending...";

  const serviceID = "service_wg65jnf";
  const suggestionTemplateID = "template_wrydue4"; 
  const confirmTemplateID = "template_kx1z29n"; 

  
  emailjs.sendForm(serviceID, suggestionTemplateID, this)
    .then(() => {
     
      return emailjs.sendForm(serviceID, confirmTemplateID, this);
    })
    .then(() => {
      statusMsg.textContent = "✅ Suggestion received! Check your email for confirmation.";
      form.reset();
    })
    .catch((error) => {
      console.error("EmailJS error:", error);
      statusMsg.textContent = "❌ Something went wrong. Please try again later.";
    });
});




document.addEventListener("DOMContentLoaded", () => {
  
  gsap.from(".top-nav", { 
    y: -30, 
    opacity: 0, 
    duration: 0.8, 
    ease: "power2.out" 
  });

  gsap.from("h1", { 
    opacity: 0, 
    y: 30, 
    duration: 0.8, 
    delay: 0.3, 
    ease: "power2.out" 
  });

  gsap.from("form", { 
    opacity: 0, 
    y: 50, 
    duration: 1, 
    delay: 0.6, 
    ease: "power3.out" 
  });

  
  gsap.from("input, textarea, .send-btn", {
    opacity: 0,
    y: 20,
    duration: 0.6,
    delay: 0.9,
    stagger: 0.15,
    ease: "power2.out"
  });
});



const inputs = document.querySelectorAll("input, textarea");
inputs.forEach(input => {
  input.addEventListener("focus", () => {
    gsap.to(input, { scale: 1.03, duration: 0.2, ease: "power1.out" });
  });
  input.addEventListener("blur", () => {
    gsap.to(input, { scale: 1, duration: 0.2, ease: "power1.inOut" });
  });
});


const sendBtn = document.querySelector(".send-btn");
sendBtn.addEventListener("mouseenter", () => {
  gsap.to(sendBtn, { scale: 1.05, duration: 0.2, ease: "back.out(2)" });
});
sendBtn.addEventListener("mouseleave", () => {
  gsap.to(sendBtn, { scale: 1, duration: 0.2, ease: "power1.inOut" });
});
