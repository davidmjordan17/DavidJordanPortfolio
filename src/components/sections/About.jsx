import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

  const frontendSkills = ["React", "Next.JS", "JavaScript", "TypeScript", "TailwindCSS"];
  const backendSkills = ["Python", "Node.JS", "Flask", "SQL", "AWS", "Firebase"];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-6xl text-center font-bold mb-8 bg-gradient-to-r from-white to-red-600 bg-clip-text text-transparent"> 
            About Me 
          </h2>

          <div className="rounded-xl p-8 bg-gradient-to-r from-red-700 to-red-800 border hover:-translate-y-1 transition-all">
            <p className="text-white mb-6 text-center text-lg">
              Since my <a href="https://www.beatstars.com/" target="_blank" className="font-bold">
              beat making </a> career didn't pan out, I decided to keep giving myself "Tech Neck" a different way which was programming. I chose to study Computer Science @ East Carolina University, where I developed a passion for web development. I like using React and JavaScript to build web applications, but 
              I love taking on challenges and learning new technologies. I am always looking for ways to improve my skills and stay up-to-date with the latest trends in web development.
            </p>
          

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 text-white">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((tech, key) => (
                  <span key={key} className="bg-red-500 text-white py-1 px-3 rounded-full text-sm 
                  hover:bg-black hover:shadow-[0_2px_8px_rbga(59,130,2246,.2)] transition">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 text-white">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((tech, key) => (
                  <span key={key} className="bg-red-500 text-white py-1 px-3 rounded-full text-sm 
                  hover:bg-black hover:shadow-[0_2px_8px_rbga(59,130,2246,.2)] transition">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 rounded-xl border-red-500 border hover:-translate-y-1 transition-all">
              <h3 className="text-2xl font-bold mb-4 text-white text-center">Education</h3>
              <ul className="list-disc list-inside text-white space-y-6">
                <li>
                  <strong>B.S. in Computer Science </strong> - East Carolina University (2021-2025)
                </li>
                <li>
                  <strong>M.S in Computer Science </strong> - Georgia Tech University (2025-2027)
                </li>
              </ul>
          </div>
          <div className="p-6 rounded-xl border-red-500 border hover:-translate-y-1 transition-all space-y-6">
              <h3 className="text-2xl font-bold mb-4 text-white text-center">Experience</h3>
              <div className="space-y-6 text-white">
                <div>
                  <h4 className="font-bold mb-2 text-red-200"> Frontend Developer Intern (Jan 2025 - June 2025) </h4>
                  <li> 
                    Built and deployed a responsive online course platform using React, TypeScript, TailwindCSS, Firebase, and Stripe, enabling 
the company’s first digital product launch and increasing inbound inquiries by 20% 
                  </li>
                </div>
              </div>
              <div className="space-y-4 text-white">
                <div>
                  <h4 className="font-bold mb-2 text-red-200"> Web Developer Intern @ Cabarrus County Gov (June 2024 - August 2024) </h4>
                  <li> 
                    Upgraded internal government web applications by redesigning UI components and implementing accessible HTML/CSS/JS 
practices 
                  </li>
                </div>
              </div>
              <div className="space-y-4 text-white">
                <div>
                  <h4 className="font-bold mb-2 text-red-200"> Frontend Apprenticeship @ Crossfit (Aug 2023 - Jan 2024) </h4>
                  <li> 
                   Engaged in regular code reviews and pair programming sessions with a senior developer to refine clean code practices and Git 
workflow 
                  </li>
                  <li> 
                    Gained proficiency in technical Frontend skills such as HTML, CSS, JavaScript, BootStrap, and Python 
                  </li>
                </div>
              </div>
          </div>
        </div>
        
        </div>
      </RevealOnScroll>
    </section>
  )
}