// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Dynamically load products
  const products = [
    {
      name: "ROMAN REIGNS T-Shirt",
      price: "$29.99",
      image: "images/otc.jpg",
      link: "YOUR_AFFILIATE_LINK_1"
    },
    {
      name: "CM PUNK T-Shirt",
      price: "$19.99",
      image: "images/punk.avif",
      link: "YOUR_AFFILIATE_LINK_2"
    },
    {
      name: "NIKKI BELLA T-Shirt",
      price: "$24.99",
      image: "images/nikki.avif",
      link: "YOUR_AFFILIATE_LINK_3"
    },
    {
        name: "SPEED T-Shirt",
        price: "$24.99",
        image: "images/speed.avif",
        link: "YOUR_AFFILIATE_LINK_3"
    },
    {
        name: "JEY USO T-Shirt",
        price: "$24.99",
        image: "images/jey.avif",
        link: "YOUR_AFFILIATE_LINK_3"
    },
    {
        name: "AJ STYLES T-Shirt",
        price: "$24.99",
        image: "images/ajstyles.avif",
        link: "YOUR_AFFILIATE_LINK_3"
    }
  ];
  
  const productContainer = document.querySelector('.products');
  
  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    productCard.setAttribute('data-aos', 'fade-up');
    productCard.setAttribute('data-aos-duration', '1000');
   
  
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.price}</p>
      <a href="${product.link}" class="btn" target="_blank">Buy Now</a>
    `;
  
    productContainer.appendChild(productCard);
  });
  // Handle contact form submission
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the form from submitting

  // Get form data
  const name = contactForm.querySelector('input[type="text"]').value;
  const email = contactForm.querySelector('input[type="email"]').value;
  const message = contactForm.querySelector('textarea').value;

  // Simulate form submission (you can replace this with an actual API call)
  console.log('Form Submitted:', { name, email, message });

  // Show a success message
  alert('Thank you for contacting us! We will get back to you soon.');

  // Clear the form
  contactForm.reset();
});
// Initialize AOS
AOS.init({
    duration: 1000, // Animation duration
    once: true, // Whether animation should happen only once
  });