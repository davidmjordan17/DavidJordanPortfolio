import { RevealOnScroll } from "../RevealOnScroll.jsx"

export const Home = () => {

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      
      <RevealOnScroll>
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-red-600 bg-clip-text text-transparent leading-right">
          Hello, I'm David.
        </h1>

        <p className="text-white text-xl mb-8 max-w-lg mx-auto">
          I'm a software engineer with a passion for building web applications and
          creating seamless user experiences. I love to learn new technologies and
          tackle challenging problems. I'm also a die hard <a href="https://www.liverpoolfc.com/" target="_blank"><span className="font-bold text-red-500 font-serif hover:text-decoration-line">Liverpool FC</span></a> fan!
        </p>

        <div className="flex justify-center space-x-4">
          <a href="#projects" className="font-semibold border border-red-500 text-red-500 py-3 px-6 rounded font-medium transition-all duration-200 
          hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-red-500 hover:text-white">
            View Projects
          </a>
          <a href="#contact" className="font-semibold border border-red-500 text-red-500 py-3 px-6 rounded font-medium transition-all duration-200 
          hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-red-500 hover:text-white">
            My Resume
          </a>
        </div>
      </div>
      </RevealOnScroll>

    </section>
  )
}