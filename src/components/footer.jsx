import React from 'react';
import '../styles/components/footer.css'

const Footer = () => {
  return (
    <div className="footer-container">
      <div><h3>Blogr</h3></div>
      <div className="product-container">
        <p>Product</p>
        <ul>
          <li>Overview</li>
          <li>Pricing</li>
          <li>Marketplace</li>
          <li>Features</li>
          <li>Integrations</li>
        </ul>
      </div>
      <div className="company-container">
        <p>Company</p>
        <ul>
          <li>About</li>
          <li>Team</li>
          <li>Blog</li>
          <li>Carrers</li>
        </ul>
      </div >
      <div className="connect-container">
        <p>Connect</p>
        <ul>
          <li>Contact</li>
          <li>Newsletter</li>
          <li>LinkedIn</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer;