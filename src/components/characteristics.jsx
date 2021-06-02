import React from 'react';
import "../styles/components/characteristics.css"

const Characteristics = () => {
  return (
    <div className="characteristics-container">
      <h2>Designed for the future</h2>
      <div className="characteristics-content-container">
        <div className="texts-container">
          <h3>Introducing an extensible editor</h3>
          <p>
            Blogr features an exceedingly intuitive interface wich lets you focus on one thing: creatin content.
            The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos,
            and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks
            of a blog.
        </p>
          <h3>Robust content management</h3>
          <p>
            Flexible content management enables users to easily move through posts. Increase the usability of your blog
            by adding customized categories, sections, format, or flow. With this functionality, you're in full control.
        </p>
        </div>
        <div className="image-container">
        </div>
      </div>
    </div>
  )
}

export default Characteristics;