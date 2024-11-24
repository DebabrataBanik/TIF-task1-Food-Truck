import SocialIcons from './Social'
function Footer() {
  return (
    <footer>
      <div className='footer__content'>
        <img src='logo.png' width={75} alt="Company Logo" />

        <section className='contact__info'>
          <h3>Contact Us</h3>
          <div className='address'>
            Lorem Ipsum Pvt Ltd.
            5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434
            <a href="mailto:example2020@gmail.com" className='email'>example2020@gmail.com</a>
            <a href="tel:9044430343" className='contact'>(904) 443-0343</a>
          </div>
        </section>

        <nav className='more__links' aria-label="Footer Links">
          <h3>More</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Career</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </nav>

        <p> © 2022 Food Truck Example</p>
        <SocialIcons />
      </div>
    </footer>

  )
}

export default Footer