document.getElementById("contact-form").addEventListener("submit", async (event) => {
  event.preventDefault();

  const formStatus = document.getElementById("form-status");
  formStatus.textContent = "Sending...";

  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  try {
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      formStatus.textContent = "Message sent successfully!";
    } else {
      formStatus.textContent = "Failed to send message.";
    }
  } catch (error) {
    formStatus.textContent = "Error sending message.";
  }
});
