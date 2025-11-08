// Initialize EmailJS with your Public Key
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
  const templateID = "template_wrydue4";

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      statusMsg.textContent = "✅ Suggestion received! Check your email for confirmation.";
      form.reset();
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      statusMsg.textContent = "❌ Something went wrong. Please try again later.";
    });
});
