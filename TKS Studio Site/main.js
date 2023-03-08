//menu functionality
let menubtn = document.querySelector(".menu-img");
let menublock = document.querySelector(".m-block")
let closebtn = document.querySelector(".close-btn")

menubtn.addEventListener("click", () => {
  console.log("Clicked")
  menublock.classList.toggle('active')
} )

closebtn.addEventListener("click", () => {
  console.log("clicked close")
  menublock.classList.toggle("active")
})


// footer functionality

// Get all the accordion headers
const accordionHeaders = document.querySelectorAll('.accordion-header');

// Loop through the accordion headers and add a click event listener to each one
accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    // Toggle the active state of the clicked header
    header.classList.toggle('active');

    // Get the content associated with the clicked header
    const accordionContent = header.nextElementSibling;

    // Toggle the display of the content
    if (accordionContent.style.display === 'block') {
      accordionContent.style.display = 'none';
    } else {
      accordionContent.style.display = 'block';
    }
  })
})





  const form = document.querySelector('form');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      number: formData.get('number'),
      subject: formData.get('subject'),
      message: formData.get('message'),
      budget: foformData.get('budget'),
    };
    const response = await fetch('https://api.sendinblue.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': '[Your Api key]',
      },
      body: JSON.stringify({
        sender: { name: data.name, email: data.email, number: data.number, subject: data.subject, message: data.message, budget: data.budget},
        to: [{ email: 'andile.koddy@gmail.com' }],
        subject: 'New message from your website',
        textContent: data.message,
      })
    });
    const responseData = await response.json();
    if (response.ok) {
      alert('Your message has been sent successfully!');
    } else {
      alert(`An error occurred: ${responseData.message}`);
    }
  });




