function App() {
return ( <div>

  {/* Header */}
  <header>
    <h1>KLU College</h1>
    <nav>
      <a href="#home">Home</a> |
      <a href="#about">About</a> |
      <a href="#courses">Courses</a> |
      <a href="#contact">Contact</a>
    </nav>
  </header>

  {/* Home */}
  <section id="home">
    <h2>Welcome to KLU College</h2>
    <p>Education is the key to success.</p>
  </section>

  {/* About */}
  <section id="about">
    <h2>About Us</h2>
    <p>ABC College provides quality education to students.</p>
  </section>

  {/* Courses */}
  <section id="courses">
    <h2>Our Courses</h2>
    <ul>
      <li>CSE</li>
      <li>AIML</li>
      <li>ECE</li>
      <li>IT</li>
    </ul>
  </section>

  {/* Contact */}
  <section id="contact">
    <h2>Contact Us</h2>
    <p>Email: abc@gmail.com</p>
    <p>Location: Vijayawada</p>
    <p>Phone: 9876543210</p>
  </section>

</div>


);
}

export default App;
