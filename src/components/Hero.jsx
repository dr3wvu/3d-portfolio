import Stars from '../three/Stars'
import Spaceship from '../three/Spaceship'

export default function Hero() {
  return (
    <section className="hero relative w-full min-h-screen flex flex-col justify-center">
      {/* Stars background (FULL WIDTH, HERO HEIGHT ONLY) */}
      <div className="hero-stars absolute inset-0">
        <Stars />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center w-full">
        {/* Intro text */}
        <div className="max-w-4xl w-full px-6 text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Hi, I’m <span className="text-accent">Andrew Vu</span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 leading-relaxed">
            An experienced full stack developer building interactive and dynamic
            web application solutions.
          </p>
        </div>

        {/* 3D Spaceship */}
        <div className="w-full flex justify-center">
          <div className="w-full max-w-3xl h-[520px] md:h-[480px]">
            <Spaceship />
          </div>
        </div>

        {/* Scroll indicator */}
      </div>
    </section>
  )
}
