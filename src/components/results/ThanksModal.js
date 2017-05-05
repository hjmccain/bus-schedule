import React from 'react';

const ThanksModal = (props) => {
  return (
    <div className={'show-modal' }>
      <span className="thanks">Thanks / Mérci, Busbud Team!</span>
      <br /><br />
      Thanks for the opportunity to tackle this project!
      I hope you enjoy my implementation of your code challenge.
      My goal was to implement all of the basic requirements in a
      clean, attractive interface. I hope you'll find my code to
      be clear, modular but not fragmented, and programmer-friendly.
      If you have any questions about the code or the product,
      don't hesitate to get in touch.
      <br /><br />
      Best,
      <br />
      Hannah
    </div>
  )
}

export default ThanksModal;

// !props.className ? 'hidden' :
