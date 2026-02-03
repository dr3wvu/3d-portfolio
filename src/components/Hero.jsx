import Stars from '../three/Stars'
import Spaceship from '../three/Spaceship'
import TypeWritter from 'typewriter-effect'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-stars">
        <Stars />
      </div>

      <div className="spaceship-canvas-container">
        {/* Pass a prop to the spaceship to handle the vertical offset */}
        <Spaceship position={[0, -2, 0]} />
      </div>

      <div className="hero-container">
        {/* Intro */}
        <div className="intro-wrapper">
          {/* Vertical divider */}
          <div className="timeline-container">
            <div className="timeline-dot" />
            <div className="timeline-line" />

            <div className="scroll-wrapper">
              <a href="#about" className="scroll-link">
                <div className="scroll-pill">
                  <div className="scroll-ball animate-bounce"></div>
                </div>
              </a>
              <p className="vertical-text"> SCROLL</p>
            </div>
          </div>
          <div className="text-content">
            <h1>
              Hi, I’m <span className="orange-accent">Andrew</span>
            </h1>

            <div className="dynamic-text-row">
              <span>I design and develop</span>
              <span className="orange-accent">
                <TypeWritter
                  options={{
                    strings: [
                      'web applications.',
                      'interactive models.',
                      'real time dashboards.',
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 70,
                    delay: 70,
                  }}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
