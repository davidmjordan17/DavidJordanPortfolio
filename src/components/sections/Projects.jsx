import { RevealOnScroll } from "../RevealOnScroll"
import { ExternalLink } from 'lucide-react';

export const Projects = () => {
  return (
    
    <section id="projects" className="min-h-screen flex items-center justify-center py-20"> 

      <RevealOnScroll>
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-6xl p-3 text-center font-bold mb-8 bg-gradient-to-r from-white to-red-600 bg-clip-text text-transparent"> 
          My Projects 
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="p-6 rounded-xl bg-red-800 hover:-translate-y-1 transition-all">
            <h3 className="text-3xl font-bold mb-2 text-red-100"> Cinenode </h3>
            <p className="text-white mb-4"> 
              Interactive web game that makes users to connect two movies by navigating through shared cast members. Leverages real movie and actor data from the TMDb API to create a fun and engaging test of film knowledge.
            </p>
            <div>
              {["React", "TailwindCSS", "JavaScript", "Express.js", "Axios", "Vercel"].map((tech, key) => (
                <span key={key} className="bg-red-500 text-white py-1 px-0.5 md:px-2 mr-1 rounded-full text-xs md:text-sm
                hover:bg-black hover:shadow-[0_2px_8px_rbga(59,130,2246,.2)] transition">
                  {tech}
                </span>
              ))}
            </div>
            <div>
              <a href="https://github.com/davidmjordan17/Cinenode" target="_blank">
                <ExternalLink className="max-w-12 text-white h-auto mt-4 hover:invert hover:-translate-y-1 transition all"/>
              </a>
            </div>
          </div>
          <div className="p-6 rounded-xl bg-red-800 hover:-translate-y-1 transition-all">
            <h3 className="text-3xl font-bold mb-2 text-red-100"> Leathershield Education </h3>
            <p className="text-white mb-4"> 
             Web platform for Leathershield Education Admin to manage and promote AHA and certification courses.
            </p>
            <div>
              {["React", "TypeScript", "Node.js", "TailwindCSS", "Firebase"].map((tech, key) => (
                <span key={key} className="bg-red-500 text-white py-1 px-0.5 md:px-2 mr-1 rounded-full text-xs md:text-sm
                hover:bg-black hover:shadow-[0_2px_8px_rbga(59,130,2246,.2)] transition">
                  {tech}
                </span>
              ))}
            </div>
            <a href="https://leathershield-education.web.app/" target="_blank">
                <ExternalLink className="max-w-12 text-white h-auto mt-4 hover:invert hover:-translate-y-1 transition all"/>
              </a>
          </div>
          <div className="p-6 rounded-xl bg-red-800 hover:-translate-y-1 transition-all">
            <h3 className="text-3xl font-bold mb-2 text-red-100"> SunsetNineGolf.com </h3>
            <p className="text-white mb-4"> 
              E-commerce website for SunsetNineGolf to showcase and sell golf-themed t-shirts, featuring a product catalog, clean UI design, and responsive layout for desktop and mobile users.
            </p>
            <div>
              {["React", "Express", "MongoDB","Node.JS", "Stripe", "Axios", "JWT"].map((tech, key) => (
                <span key={key} className="bg-red-500 text-white py-1 px-0.5 md:px-2 mr-1 rounded-full text-xs md:text-sm
                hover:bg-black hover:shadow-[0_2px_8px_rbga(59,130,2246,.2)] transition">
                  {tech}
                </span>
              ))}
            </div>
            <div>
              <a href="https://www.sunsetninegolf.com/" target="_blank">
                <ExternalLink className="max-w-12 text-white h-auto mt-4 hover:invert hover:-translate-y-1 transition all"/>
              </a>
            </div>
          </div>
          <div className="p-6 rounded-xl bg-red-800 hover:-translate-y-1 transition-all">
            <h3 className="text-3xl font-bold mb-2 text-red-100"> Freshtrack </h3>
            <p className="text-white mb-4"> 
              FreshTrack is a web application designed to reduce food waste and simplify kitchen organization by helping users track their groceries and expiration dates.
            </p>
            <div>
              {["HTML", "CSS", "JavaScript", "Python", "Flask", "Bootstrap"].map((tech, key) => (
                <span key={key} className="bg-red-500 text-white py-1 px-0.5 md:px-2 mr-1 rounded-full text-xs md:text-sm
                hover:bg-black hover:shadow-[0_2px_8px_rbga(59,130,2246,.2)] transition">
                  {tech}
                </span>
              ))}
            </div>
            <div>
              <a href="https://github.com/davidmjordan17/CSCI4710_Group2/tree/main/FinalProject" target="_blank">
                <ExternalLink className="max-w-12 text-white h-auto mt-4 hover:invert hover:-translate-y-1 transition all"/>
              </a>
            </div>
          </div>

        </div>

      </div>
      </RevealOnScroll>
    </section>
  )
}