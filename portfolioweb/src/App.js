import React from 'react';

const App = () => {
  return (
    <div className="bg-[#030303] text-gray-300 font-sans antialiased selection:bg-blue-500/30 selection:text-blue-200 min-h-screen relative overflow-hidden flex flex-col">
      {/* Ambient Background Glows */}
      <div className="fixed top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Global styling overrides */}
      <style>{`
        /* Custom scrollbar for a darker theme */
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #030303; }
        ::-webkit-scrollbar-thumb { background: #1f2937; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #374151; }
        html { scroll-behavior: smooth; }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 4px; }
      `}</style>

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#030303]/70 backdrop-blur-xl border-b border-white/5 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
                <div className="flex-shrink-0 font-extrabold text-xl text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 tracking-widest uppercase">
                    Portfolio
                </div>
                <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-2 text-sm font-medium">
                        <a href="#biography" className="text-gray-400 hover:text-white hover:bg-white/5 transition-all px-4 py-2.5 rounded-full">Biography</a>
                        <a href="#philosophy" className="text-gray-400 hover:text-white hover:bg-white/5 transition-all px-4 py-2.5 rounded-full">Philosophy</a>
                        <a href="#documents" className="text-gray-400 hover:text-white hover:bg-white/5 transition-all px-4 py-2.5 rounded-full">Documents</a>
                        <a href="#credentials" className="text-gray-400 hover:text-white hover:bg-white/5 transition-all px-4 py-2.5 rounded-full">Credentials</a>
                        <a href="#academic-work" className="text-gray-400 hover:text-white hover:bg-white/5 transition-all px-4 py-2.5 rounded-full">Academic Work</a>
                        <a href="#capstone" className="text-gray-400 hover:text-white hover:bg-white/5 transition-all px-4 py-2.5 rounded-full">Capstone</a>
                        <a href="#more" className="text-gray-400 hover:text-white hover:bg-white/5 transition-all px-4 py-2.5 rounded-full">More</a>
                    </div>
                </div>
            </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-40 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center z-10">
          <div className="w-32 h-32 bg-white/[0.03] rounded-full mb-8 border border-white/10 overflow-hidden flex items-center justify-center shadow-2xl backdrop-blur-md relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="text-gray-500 text-sm font-medium relative z-10">Photo</span>
          </div>
          <h1 className="text-6xl sm:text-7xl font-extrabold mb-6 tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-600">Shaffaq Hai</h1>
          <p className="text-xl sm:text-2xl text-blue-400/80 max-w-2xl font-light tracking-wide">Software Developer & Tech Enthusiast</p>
      </header>

      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32 pb-32 z-10">

          {/* Biography */}
          <section id="biography" className="scroll-mt-32">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 tracking-tight">Biography<span className="text-blue-500">.</span></h2>
              <div className="bg-white/[0.02] p-8 md:p-10 rounded-[2rem] border border-white/5 backdrop-blur-md leading-relaxed shadow-2xl text-gray-400 text-lg">
                  <p>Hello! I'm an enthusiastic Computer Programming student currently pursuing my diploma in Computer Programming at George Brown Polytechnic. 
                    My journey into tech started with a deep curiosity about how games are developed. This curiosity then expanded outwards towards software architecture.
                     Currently, I'm immersing myself in coursework that spans data structures, full-stack web development, and machine learning. I enjoy tackling logic puzzles and transforming creative ideas into functional, clean code.</p>
                  
                  <p className="mt-6">Beyond the classroom, I spend my time exploring hackathons, delving into emerging frameworks, and building personal projects to sharpen my skills.
                     I am eager to transition my academic foundation into real-world applications and am actively seeking opportunities to learn, grow, and contribute alongside experienced engineering teams.</p>
              </div>
          </section>

          {/* Philosophy / Career Goals */}
          <section id="philosophy" className="scroll-mt-32">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 tracking-tight">Philosophy & Career Goals<span className="text-blue-500">.</span></h2>
              <div className="bg-white/[0.02] p-8 md:p-10 rounded-[2rem] border border-white/5 backdrop-blur-md leading-relaxed space-y-8 shadow-2xl text-gray-400 text-lg">
                  <blockquote className="border-l-4 border-blue-500/50 bg-blue-500/[0.02] rounded-r-2xl pl-6 py-4 text-xl italic text-gray-300">
                      "A pile of rocks ceases to be a rock pile when somebody contemplates it with the idea of a cathedral in mind." 
                      <span className="block mt-2 text-sm font-medium text-gray-500 not-italic">— Antoine de Saint-Exupéry</span>
                  </blockquote>
                  <p>
                      Drawing from my early experiences tinkering with game development to my current study of building scalable
                       web applications, I have always believed that technology is a medium for continuous creative 
                       innovation. My motivation stems from a desire to learn different methodologies for solving complex problems and improve
                        user experiences. As an engineer, my role is not merely to write code, but to facilitate innovation,
                         bridge the gaps between communication and technical implementation,and construct tools that genuinely empower users.
                  </p>
                  <p>
                      Looking towards the future, my ambition is to join a technical team that build impactful, accessible, and scalable
                       software. I believe that by maintaining self-reflection, fostering the desire to learn,
                       and embracing the ever-changing landscape of software engineering, we can actively shape the systems 
                       that will drive tomorrow's creative breakthroughs and successes.
                  </p>
              </div>
          </section>

          {/* Resume & Cover Letter */}
          <section id="documents" className="scroll-mt-32">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 tracking-tight">Documents<span className="text-blue-500">.</span></h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Resume */}
                  <div className="bg-white/[0.02] p-8 md:p-10 rounded-[2rem] border border-white/5 backdrop-blur-md flex flex-col items-center justify-center text-center shadow-2xl transition-transform hover:-translate-y-1 duration-500">
                      <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center mb-6">
                          <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">My Resume</h3>
                      <p className="text-gray-400 mb-8 max-w-sm">View my complete work history, education, and technical skills.</p>
                      <div className="flex flex-wrap justify-center gap-4">
                          <a href="/resume.docx" download="Shaffaq_Hai_Resume.docx" className="bg-white text-black hover:bg-gray-200 font-semibold py-3 px-6 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.1)]">Download DOCX</a>
                          <a href="/resume.docx" download="Shaffaq_Hai_Resume.docx" className="bg-white/5 border border-white/10 hover:bg-white/10 text-white font-semibold py-3 px-6 rounded-full transition-all transform hover:scale-105">Download PDF</a>
                      </div>
                  </div>

                  {/* Cover Letter */}
                  <div className="bg-white/[0.02] p-8 md:p-10 rounded-[2rem] border border-white/5 backdrop-blur-md shadow-2xl">
                      <h3 className="text-2xl font-bold text-white mb-6 tracking-tight flex items-center gap-3">
                          <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                          Cover Letter 
                      </h3>
                      <div className="text-sm text-gray-400 space-y-4 font-serif bg-black/20 p-6 rounded-2xl border border-white/5 h-64 overflow-y-auto custom-scrollbar">
                          <p>Dear Hiring Manager,</p>
                          <p>I am writing to express my strong interest in the Software Engineer position at [Company Name]. With a solid foundation in full-stack development and hands-on experience developing scalable web applications, I am eager to bring my technical expertise and problem-solving skills to your innovative team.</p>
                          <p>In my recent academic and professional projects, I have successfully designed microservices architectures, optimized complex database queries, and implemented real-time communication systems. My capstone project—an end-to-end task management system for remote teams—resulted in a highly accessible and responsive platform, demonstrating my ability to see a product through from requirements gathering to final deployment.</p>
                          <p>I am particularly drawn to [Company Name]'s mission because it aligns with my personal philosophy that software should empower its users and facilitate creative evolution. I am confident that my critical thinking abilities, collaborative mindset, and passion for continuous learning make me a strong fit for this role.</p>
                          <p>Thank you for your time and consideration. I look forward to the possibility of discussing how my background, skills, and enthusiasms can contribute to the continued success of your engineering department.</p>
                          <p>Sincerely,<br/>Shaffaq Hai</p>
                      </div>
                  </div>
              </div>
          </section>

          {/* Academic Credentials */}
          <section id="credentials" className="scroll-mt-32">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 tracking-tight">Academic Credentials<span className="text-blue-500">.</span></h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
                  <div className="group bg-white/[0.02] p-8 rounded-3xl border border-white/5 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-500 shadow-2xl relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
                      <h3 className="text-xl font-bold text-white tracking-tight relative z-10">Advanced Diploma in Computer Programming and Analysis</h3>
                      <p className="text-blue-400 mt-2 font-medium relative z-10">George Brown Polytechnic</p>
                      <p className="text-sm text-gray-500 mt-4 relative z-10">Graduated: April 2026 | GPA: 3.9/4.0</p>
                  </div>

                  <div className="group bg-white/[0.02] p-8 rounded-3xl border border-white/5 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-500 shadow-2xl relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
                      <h3 className="text-xl font-bold text-white tracking-tight relative z-10">Dean's List Of Honor</h3>
                      <p className="text-blue-400 mt-2 font-medium relative z-10">George Brown Polytechnic</p>
                      <p className="text-sm text-gray-500 mt-4 relative z-10">Fall 2023 - Winter 2026</p>
                  </div>

                   <div className="group bg-white/[0.02] p-8 rounded-3xl border border-white/5 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-500 shadow-2xl relative overflow-hidden flex flex-col justify-between">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
                        <div className="relative z-10">
                            <h3 className="text-xl font-bold text-white tracking-tight">George Brown Polytechnic Transcript</h3>
                            <p className="text-sm text-gray-500 mt-4">Fall 2023 - Winter 2026</p>
                        </div>
                        <a href="#" className="inline-flex items-center text-blue-400 mt-6 font-medium group-hover:text-blue-300 transition-colors relative z-10">
                            View Transcript
                            <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                        </a>
                  </div>
              </div>
          </section>

          {/* Academic Work Experience */}
          <section id="academic-work" className="scroll-mt-32">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 tracking-tight">Academic Work Experience<span className="text-blue-500">.</span></h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  
                  {/* Projects mapping */}
                  {[
                      { title: 'Brothers Oats', desc: 'Utilized C# and ASP.Net Core to develop a RESTful API for a mock e-commerce platform, implementing user authentication and product management features.', link: 'https://github.com/stadtt/comp2139_assignment' },
                      { title: 'Gomoku', desc: 'Created Gomuku utilizing Depth First Search algorithm for optimal move selection.', link: 'https://github.com/alwaysandy/Gomoku-MinMax' },
                      { title: 'Employee Management System', desc: 'Using React and Node.js to build a full-stack application for managing employee information and performance reviews.', link: 'https://github.com/stadtt/101500534_COMP3123_Assignment2' },
                      { title: 'Capstone Project', desc: 'A Web Application interface that completes specific scheduling task and manage time conflicts and load balancing.', link: 'https://github.com/theLegasea/CBC_BSWA' },
                      { title: 'Microservices Architecture', desc: 'Designed and implemented a microservices architecture using Java, Spring Boot, Rest API and Docker.', link: 'https://gitlab.com/54M44R/COMP3095-Assignment' },
                  ].map((project, idx) => (
                      <div key={idx} className="group bg-white/[0.02] p-8 rounded-3xl border border-white/5 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-500 shadow-2xl flex flex-col justify-between">
                          <div>
                              <h3 className="text-xl font-bold text-white tracking-tight">{project.title}</h3>
                              <p className="text-sm text-gray-400 mt-4 leading-relaxed">{project.desc}</p>
                          </div>
                          <a href={project.link} className="inline-flex items-center text-sm text-blue-400 mt-6 font-medium group-hover:text-blue-300 transition-colors w-fit pt-4 border-t border-white/5">
                              GitHub Repo
                              <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                          </a>
                      </div>
                  ))}
              </div>
          </section>

          {/* Capstone Project */}
          <section id="capstone" className="scroll-mt-32">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 tracking-tight">Capstone Project<span className="text-blue-500">.</span></h2>
              
              <div className="bg-white/[0.02] rounded-3xl border border-white/5 overflow-hidden divide-y divide-white/5 backdrop-blur-md shadow-2xl">
                  
                  {[
                      { title: 'Project Summary', file: 'Project Summary.pdf' },
                      { title: 'Project Vision', file: 'Project Vision.pdf' },
                      { title: 'Project/Business Requirements', file: 'Business Requirements.pdf' },
                      { title: 'Project Plan', file: 'Project Plan.pdf' },
                      { title: 'Requirements Analysis and Design', file: 'RAD.pdf' },
                      { title: 'Wireframes/Mockups', file: 'Wireframes.pdf' },
                      { title: 'Status Report (Current Sprint)', file: 'Status Report.pdf' },
                  ].map((item, idx) => (
                      <div key={idx} className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-white/[0.01] transition-colors">
                          <h3 className="text-lg font-bold text-gray-200 tracking-tight">{item.title}</h3>
                          <a href={`capstoneFiles/${item.file}`} className="inline-flex items-center px-5 py-2.5 bg-white/5 hover:bg-white/10 text-white text-sm font-medium rounded-full transition-all border border-white/10 shadow-sm w-fit group">
                              <svg className="w-4 h-4 mr-2 text-gray-400 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                              Download
                          </a>
                      </div>
                  ))}

                  {/* System Implementation */}
                  <div className="p-6 sm:p-8">
                      <h3 className="text-lg font-bold text-gray-200 tracking-tight mb-3">System Implementation</h3>
                      <p className="text-gray-400 mb-6 text-sm">The final system was published with Docker Images, as a standalone web application running offline. </p>
                      <a href="#" className="inline-flex items-center px-6 py-3 bg-white text-black hover:bg-gray-200 text-sm font-semibold rounded-full transition-all shadow-lg transform hover:scale-105">
                          GitHub Repo
                          <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                      </a>
                  </div>

              </div>
          </section>

          {/* Additional Information */}
          <section id="more" className="scroll-mt-32">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  
                  {/* Letters of Recommendation */}
                  <div className="bg-white/[0.02] p-8 md:p-10 rounded-[2rem] border border-white/5 backdrop-blur-md shadow-2xl">
                      <h2 className="text-2xl font-bold text-white mb-6 tracking-tight flex items-center gap-3">
                          <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                          Recommendations
                      </h2>
                      <ul className="space-y-4">
                          <li className="group bg-white/5 p-5 rounded-2xl border border-white/5 flex items-center justify-between hover:bg-white/10 transition-colors">
                              <div>
                                  <h4 className="font-bold text-white">Andrew Sas</h4>
                                  <p className="text-sm text-gray-400 mt-1">Junior Soft Engineer</p>
                              </div>
                              <a href="#" className="text-gray-500 group-hover:text-blue-400 transition-colors p-2 bg-black/20 rounded-full">
                                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                              </a>
                          </li>
                          <li className="group bg-white/5 p-5 rounded-2xl border border-white/5 flex items-center justify-between hover:bg-white/10 transition-colors">
                              <div>
                                  <h4 className="font-bold text-white">Mark Johnson</h4>
                                  <p className="text-sm text-gray-400 mt-1">Senior Lead Engineer</p>
                              </div>
                              <a href="#" className="text-gray-500 group-hover:text-blue-400 transition-colors p-2 bg-black/20 rounded-full">
                                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                              </a>
                          </li>
                      </ul>
                  </div>

                  {/* Awards and Recognition */}
                  <div className="bg-white/[0.02] p-8 md:p-10 rounded-[2rem] border border-white/5 backdrop-blur-md shadow-2xl">
                      <h2 className="text-2xl font-bold text-white mb-6 tracking-tight flex items-center gap-3">
                          <svg className="w-6 h-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                          Awards
                      </h2>
                      <ul className="space-y-4">
                          <li className="bg-white/5 p-5 rounded-2xl border border-white/5 flex gap-4 items-start">
                              <div className="text-yellow-500/80 mt-1 bg-yellow-500/10 p-2 rounded-full">
                                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                              </div>
                              <div>
                                  <h4 className="font-bold text-white text-lg">Dean's List</h4>
                                  <p className="text-sm text-gray-400 mt-1">Fall 2020 - Spring 2023</p>
                              </div>
                          </li>
                      </ul>
                  </div>

              </div>
          </section>

      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 py-12 text-center text-gray-500 bg-[#030303]/80 backdrop-blur-lg mt-auto">
          <p className="text-sm">&copy; 2026 Shaffaq Hai. All rights reserved.</p>
          <div className="mt-6 flex justify-center space-x-6">
              <a href="https://www.linkedin.com/in/shaffaq-hai-97621929b" className="text-gray-500 hover:text-white transition-colors">LinkedIn</a>
              <a href="https://github.com/stadtt" className="text-gray-500 hover:text-white transition-colors">GitHub</a>
              <a href="mailto:shaffaq.hai@georgebrown.ca" className="text-gray-500 hover:text-white transition-colors">Email</a>
          </div>
      </footer>
    </div>
  );
};

export default App;