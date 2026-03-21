import React from 'react';

const App = () => {
  return (
    <div className="bg-black text-gray-300 font-sans antialiased selection:bg-blue-600 selection:text-white min-h-screen">
      {/* Global styling overrides */}
      <style>{`
        /* Custom scrollbar for a darker theme */
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #111827; }
        ::-webkit-scrollbar-thumb { background: #374151; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #4B5563; }
        html { scroll-behavior: smooth; }
      `}</style>

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
                <div className="flex-shrink-0 font-bold text-xl text-white tracking-widest uppercase">
                    Portfolio
                </div>
                <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4 text-sm">
                        <a href="#biography" className="hover:text-blue-400 transition-colors px-3 py-2 rounded-md">Biography</a>
                        <a href="#philosophy" className="hover:text-blue-400 transition-colors px-3 py-2 rounded-md">Philosophy</a>
                        <a href="#documents" className="hover:text-blue-400 transition-colors px-3 py-2 rounded-md">Documents</a>
                        <a href="#credentials" className="hover:text-blue-400 transition-colors px-3 py-2 rounded-md">Credentials</a>
                        <a href="#academic-work" className="hover:text-blue-400 transition-colors px-3 py-2 rounded-md">Academic Work</a>
                        <a href="#capstone" className="hover:text-blue-400 transition-colors px-3 py-2 rounded-md">Capstone</a>
                        <a href="#more" className="hover:text-blue-400 transition-colors px-3 py-2 rounded-md">More</a>
                    </div>
                </div>
            </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="w-32 h-32 bg-gray-800 rounded-full mb-6 border-4 border-blue-500 overflow-hidden flex items-center justify-center">
              <span className="text-gray-500 text-sm">Photo</span>
          </div>
          <h1 className="text-5xl font-extrabold text-white mb-4 tracking-tight">Shaffaq Hai</h1>
          <p className="text-xl text-gray-400 max-w-2xl">Software Developer & Tech Enthusiast</p>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 pb-24">

          {/* Biography */}
          <section id="biography" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-white mb-6 border-b border-gray-800 pb-2">Biography</h2>
              <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 leading-relaxed">
                  <p>Hello! I'm an enthusiastic Computer Programming student currently pursuing my diploma in Computer Programming at George Brown Polytechnic. 
                    My journey into tech started with a deep curiosity about how games are developed. This curiosity then expanded outwards towards software architecture.
                     Currently, I'm immersing myself
                     in coursework that spans data structures, full-stack web development, 
                     and machine learning. I enjoy tackling logic puzzles
                     and transforming creative ideas into functional, clean code.</p>
                  
                  <p className="mt-4">Beyond the classroom, I spend my time exploring hackathons, 
                    delving into emerging frameworks, and building personal projects to sharpen my skills.
                     I am eager to transition my academic foundation into real-world applications and
                      am actively seeking opportunities to learn, grow, and contribute alongside experienced engineering teams.</p>
              </div>
          </section>

          {/* Philosophy / Career Goals */}
          <section id="philosophy" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-white mb-6 border-b border-gray-800 pb-2">Philosophy & Career Goals</h2>
              <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 leading-relaxed space-y-6">
                  <blockquote className="border-l-4 border-blue-500 pl-4 py-1 text-lg italic text-gray-400">
                      "A pile of rocks ceases to be a rock pile when somebody contemplates it with the idea of a cathedral in mind." <span className="text-sm font-semibold text-gray-500">— Antoine de Saint-Exupéry</span>
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
          <section id="documents" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-white mb-6 border-b border-gray-800 pb-2">Documents</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Resume */}
                  <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 flex flex-col items-center justify-center text-center">
                      <svg className="w-16 h-16 text-blue-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                      <h3 className="text-xl font-bold text-white mb-2">My Resume</h3>
                      <p className="text-sm text-gray-400 mb-6">View my complete work history, education, and technical skills.</p>
                      <div className="flex space-x-4">
                          <a href="/resume.docx" download="Shaffaq_Hai_Resume.docx" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors">Download DOCX</a>
                          <a href="/resume.docx" download="Shaffaq_Hai_Resume.docx" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors">Download PDF</a>
                      </div>
                  </div>

                  {/* Cover Letter */}
                  <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">
                      <h3 className="text-xl font-bold text-white mb-4 border-b border-gray-800 pb-2">Cover Letter </h3>
                      <div className="text-sm text-gray-400 space-y-3 font-serif bg-black/30 p-4 rounded border border-gray-800 h-64 overflow-y-auto">
                          <p>Dear Hiring Manager,</p>
                          <p>I am writing to express my strong interest in the Software Engineer position at [Company Name]. With a solid foundation in full-stack development and hands-on experience developing scalable web applications, I am eager to bring my technical expertise and problem-solving skills to your innovative team.</p>
                          <p>In my recent academic and professional projects, I have successfully designed microservices architectures, optimized complex database queries, and implemented real-time communication systems. My capstone project—an end-to-end task management system for remote teams—resulted in a highly accessible and responsive platform, demonstrating my ability to see a product through from requirements gathering to final deployment.</p>
                          <p>I am particularly drawn to [Company Name]'s mission because it aligns with my personal philosophy that software should empower its users and facilitate creative evolution. I am confident that my critical thinking abilities, collaborative mindset, and passion for continuous learning make me a strong fit for this role.</p>
                          <p>Thank you for your time and consideration. I look forward to the possibility of discussing how my background, skills, and enthusiasms can contribute to the continued success of your engineering department.</p>
                          <p>Sincerely,<br/>John Doe</p>
                      </div>
                  </div>
              </div>
          </section>

          {/* Academic Credentials */}
          <section id="credentials" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-white mb-6 border-b border-gray-800 pb-2">Academic Credentials</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
                  <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-colors">
                      <h3 className="text-xl font-semibold text-white">Advanced Diploma in Computer Programming and Analysis</h3>
                      <p className="text-blue-400 mt-1">George Brown Polytechnic</p>
                      <p className="text-sm text-gray-500 mt-2">Graduated: April 2026 | GPA: 3.9/4.0</p>
                  </div>

                  <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-colors">
                      <h3 className="text-xl font-semibold text-white">Deans List Of Honor</h3>
                      <p className="text-blue-400 mt-1">George Brown Polytechnic</p>
                      <p className="text-sm text-gray-500 mt-2">Fall 2023 - Winter 2026</p>
                  </div>

                   <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-colors">
                        <h3 className="text-xl font-semibold text-white">George Brown Polytechnic Transcript</h3>
                        <a href="#" className="text-blue-400 mt-1">View Transcript</a>
                        <p className="text-sm text-gray-500 mt-2">Fall 2023 - Winter 2026</p>
                  </div>
              </div>
              
              
          </section>

          {/* Academic Work Experience */}
          <section id="academic-work" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-white mb-6 border-b border-gray-800 pb-2">Academic Work Experience</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Spot 1 */}
                  <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-colors">
                      <h3 className="text-lg font-bold text-white">Brothers Oats</h3>
                      <p className="text-sm text-gray-400 mt-2">Utilized C# and ASP.Net Core to develop a RESTful API for a mock e-commerce platform, implementing user authentication and product management features.</p>
                      <a href="https://github.com/stadtt/comp2139_assignment" className="text-blue-400 mt-2 inline-block">Git Hub Link &rarr;</a>
                  </div>
                  {/* Spot 2 */}
                  <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-colors">
                      <h3 className="text-lg font-bold text-white">Gomoku </h3>
                      <p className="text-sm text-gray-400 mt-2">Created Gomuku utilizing Depth First Search algorithm for optimal move selection.</p>
                      <a href="https://github.com/alwaysandy/Gomoku-MinMax" className="text-blue-400 mt-2 inline-block">Git Hub Link &rarr;</a>
                  </div>
                  {/* Spot 3 */}
                  <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-colors">
                      <h3 className="text-lg font-bold text-white">Employee Management System</h3>
                      <p className="text-sm text-gray-400 mt-2">Using React and Node.js to build a full-stack application for managing employee information and performance reviews.</p>
                      <a href="https://github.com/stadtt/101500534_COMP3123_Assignment2" className="text-blue-400 mt-2 inline-block">Git Hub Link &rarr;</a>
                  </div>
                  {/* Spot 4 */}
                  <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-colors">
                      <h3 className="text-lg font-bold text-white">Capstone Project</h3>
                      <p className="text-sm text-gray-400 mt-2">A Web Application interface that completes specific scheduling task and manage time conflicts and load balancing. </p>
                      <a href="https://github.com/theLegasea/CBC_BSWA" className="text-blue-400 mt-2 inline-block">Git Hub Link &rarr;</a>
                  </div>
                  {/* Spot 5 */}
                  <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-colors">
                      <h3 className="text-lg font-bold text-white">Microservices Architecture</h3>
                      <p className="text-sm text-gray-400 mt-2">Designed and implemented a microservices architecture using Java, Spring Boot, Rest API and Docker.</p>
                      <a href="https://gitlab.com/54M44R/COMP3095-Assignment" className="text-blue-400 mt-2 inline-block">Git Hub Link &rarr;</a>
                  </div>
              </div>
          </section>

          {/* Capstone Project */}
          <section id="capstone" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-white mb-6 border-b border-gray-800 pb-2">Capstone Project</h2>
              
              <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden divide-y divide-gray-800">
                  
                  {/* Project Summary */}
                  <div className="p-6">
                      <h3 className="text-xl font-bold text-blue-400 mb-3">Project Summary</h3>
                      <a href="capstoneFiles/Project Summary.pdf" className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium rounded-md transition-colors border border-gray-700 shadow-sm w-fit">
                          <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                          Download
                      </a>
                  </div>
                  
                  {/* Project Vision */}
                  <div className="p-6">
                      <h3 className="text-xl font-bold text-blue-400 mb-3">Project Vision</h3>
                      <a href="capstoneFiles/Project Vision.pdf" className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium rounded-md transition-colors border border-gray-700 shadow-sm w-fit">
                          <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                          Download
                      </a>
                  </div>

                  {/* Requirements */}
                  <div className="p-6">
                      <h3 className="text-xl font-bold text-blue-400 mb-3">Project/Business Requirements</h3>
                      <a href="capstoneFiles/Business Requirements.pdf" className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium rounded-md transition-colors border border-gray-700 shadow-sm w-fit">
                          <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                          Download
                      </a>
                  </div>

                  {/* Project Plan */}
                  <div className="p-6">
                      <h3 className="text-xl font-bold text-blue-400 mb-3">Project Plan</h3>
                      <a href="capstoneFiles/Project Plan.pdf" className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium rounded-md transition-colors border border-gray-700 shadow-sm w-fit">
                          <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                          Download
                      </a>
                  </div>

                  {/* Analysis & Design */}
                  <div className="p-6">
                      <h3 className="text-xl font-bold text-blue-400 mb-3">Requirements Analysis and Design</h3>
                      <a href="capstoneFiles/RAD.pdf" className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium rounded-md transition-colors border border-gray-700 shadow-sm w-fit">
                          <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                          Download
                      </a>
                  </div>

                  {/* Wireframes/Mockups */}
                  <div className="p-6">
                      <h3 className="text-xl font-bold text-blue-400 mb-3">Wireframes/Mockups</h3>
                     <a href="capstoneFiles/Wireframes.pdf" className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium rounded-md transition-colors border border-gray-700 shadow-sm w-fit">
                          <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                          Download
                      </a>
                  </div>

                  {/* Status Reports */}
                  <div className="p-6">
                      <h3 className="text-xl font-bold text-blue-400 mb-3">Status Report (Current Sprint)</h3>
                      <a href="capstoneFiles/Status Report.pdf" className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium rounded-md transition-colors border border-gray-700 shadow-sm w-fit">
                          <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                          Download
                      </a>
                  </div>

                  {/* System Implementation */}
                  <div className="p-6">
                      <h3 className="text-xl font-bold text-blue-400 mb-3">System Implementation</h3>
                      <p className="text-gray-300 mb-4">The final system was published with Docker Images, as a standalone web application running offline. </p>
                      <a href="#" className="inline-block bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded transition-colors ml-2">GitHub Repo</a>
                  </div>

              </div>
          </section>

          

          {/* Additional Information */}
          <section id="more" className="scroll-mt-24">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  
                  {/* Letters of Recommendation */}
                  <div className="col-span-1">
                      <h2 className="text-2xl font-bold text-white mb-4 border-b border-gray-800 pb-2">Recommendations</h2>
                      <ul className="space-y-4">
                          <li className="bg-gray-900 p-4 rounded-lg border border-gray-800 flex items-center justify-between">
                              <div>
                                  <h4 className="font-bold text-white">Andrew Sas</h4>
                                  <p className="text-sm text-gray-400">Junior Soft Engineer</p>
                              </div>
                              <a href="#" className="text-blue-400 hover:text-white transition-colors">
                                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                              </a>
                          </li>
                          <li className="bg-gray-900 p-4 rounded-lg border border-gray-800 flex items-center justify-between">
                              <div>
                                  <h4 className="font-bold text-white">Mark Johnson</h4>
                                  <p className="text-sm text-gray-400">Senior Lead Engineer</p>
                              </div>
                              <a href="#" className="text-blue-400 hover:text-white transition-colors">
                                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                              </a>
                          </li>
                      </ul>
                  </div>

                  {/* Awards and Recognition */}
                  <div className="col-span-1">
                      <h2 className="text-2xl font-bold text-white mb-4 border-b border-gray-800 pb-2">Awards</h2>
                      <ul className="space-y-4">
                          <li className="bg-gray-900 p-4 rounded-lg border border-gray-800 flex gap-3">
                              <div className="text-yellow-500 mt-1">
                                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                              </div>
                              <div>
                                  <h4 className="font-bold text-white">Dean's List</h4>
                                  <p className="text-sm text-gray-400">Fall 2020 - Spring 2023</p>
                              </div>
                          </li>
                          
                      </ul>
                  </div>

              </div>
          </section>

      </main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8 text-center text-gray-500">
          <p>&copy; 2026 Shaffaq Hai. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-4">
              <a href="https://www.linkedin.com/in/shaffaq-hai-97621929b" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="https://github.com/stadtt" className="hover:text-white transition-colors">GitHub</a>
              <a href="mailto:shaffaq.hai@georgebrown.ca" className="hover:text-white transition-colors">Email</a>
          </div>
      </footer>
    </div>
  );
};

export default App;