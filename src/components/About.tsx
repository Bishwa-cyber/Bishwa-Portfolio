
import React from 'react';
import { MapPin, Calendar, GraduationCap, Award, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-['Space_Grotesk']">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-cyan-500 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - About Me */}
          <div className="space-y-8">
            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">About Me</h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I'm a passionate Full Stack Developer and AI enthusiast with a strong foundation in modern web technologies. 
                  Currently pursuing B.Tech in Computer Science with an impressive CGPA of 8.37/10.
                </p>
                <p>
                  My journey in tech started with curiosity about how things work, and it has evolved into a deep passion for 
                  creating innovative solutions that make a real impact. I specialize in building scalable web applications 
                  using cutting-edge technologies.
                </p>
                <p>
                  Beyond coding, I'm actively involved in hackathons, open-source contributions, and leadership roles. 
                  I believe in continuous learning and sharing knowledge with the community.
                </p>
              </div>
            </div>

            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Personal Journey</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-purple-600/20 rounded-lg">
                    <GraduationCap className="text-purple-400" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Education</h4>
                    <p className="text-gray-300">Gandhi Institute of Excellent Technocrats</p>
                    <p className="text-sm text-gray-400">B.Tech in Computer Science • CGPA: 8.37/10</p>
                    <p className="text-xs text-cyan-400">Oct 2022 - June 2026</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-cyan-600/20 rounded-lg">
                    <MapPin className="text-cyan-400" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Location</h4>
                    <p className="text-gray-300">Bhubaneswar, India</p>
                    <p className="text-sm text-gray-400">Available for remote work</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-green-600/20 rounded-lg">
                    <Award className="text-green-400" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Achievements</h4>
                    <p className="text-gray-300">2nd Place InnovaX National Hackathon</p>
                    <p className="text-sm text-gray-400">1st Place 24-Hour Inter-College Hackathon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Experience */}
          <div className="space-y-8">
            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Experience</h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="font-semibold text-white">Application Developer Intern</h4>
                  <p className="text-sm text-cyan-400 mb-2">Ministry of Skill Development & Entrepreneurship</p>
                  <p className="text-gray-300 text-sm">Improved processing efficiency by 60%</p>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="font-semibold text-white">Application Dev Intern</h4>
                  <p className="text-sm text-cyan-400 mb-2">All India Council of Technical Education</p>
                  <p className="text-gray-300 text-sm">95% face recognition accuracy achieved</p>
                </div>
              </div>
            </div>

            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Leadership & Other Experience</h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="font-semibold text-white">Citizen Scientist Team Lead</h4>
                  <p className="text-sm text-cyan-400 mb-2">NASA – National Aeronautics and Space Administration</p>
                  <p className="text-xs text-gray-500 mb-3">May 2024 – July 2024</p>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Identified 12 celestial objects (stars and asteroids) using Astrometrica software</li>
                    <li>• Implemented training sessions, resulting in a 15% improvement in data accuracy among team members</li>
                    <li>• Analyzed astronomical data using Astrometrica to identify Near-Earth Objects (NEOs)</li>
                    <li>• Oversaw a team of 5 members in NASA's asteroid discovery project, guiding data analysis using Astrometrica</li>
                  </ul>
                </div>

                <div className="border-l-4 border-cyan-500 pl-6">
                  <h4 className="font-semibold text-white">Harvard College Project Delegate</h4>
                  <p className="text-sm text-cyan-400 mb-2">Harvard University</p>
                  <p className="text-xs text-gray-500 mb-3">Jan 2025 – Feb 2025</p>
                  <p className="text-gray-300 text-sm">Selected as a Delegate for the prestigious Harvard College Project for Asian and International Relations (HPAIR) Conference, representing global perspectives and fostering cross-cultural collaboration.</p>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="font-semibold text-white">MIT Summer School Quantum Computing Student</h4>
                  <p className="text-sm text-cyan-400 mb-2">Massachusetts Institute of Technology (MIT)</p>
                  <p className="text-xs text-gray-500 mb-3">Feb 2025 - Present</p>
                  <p className="text-gray-300 text-sm">Selected as a participant for the prestigious MIT Beaver Works Summer Institute (BWSI) 2025 in the Quantum Computing program.</p>
                </div>

                <div className="border-l-4 border-yellow-500 pl-6">
                  <h4 className="font-semibold text-white">Summit Scout</h4>
                  <p className="text-sm text-cyan-400 mb-2">E-Cell IIIT Pune</p>
                  <p className="text-xs text-gray-500 mb-3">Sep 2024 - Jan 2025</p>
                  <p className="text-gray-300 text-sm">Designed visually appealing posters that effectively communicated key points and event details.</p>
                </div>

                <div className="border-l-4 border-indigo-500 pl-6">
                  <h4 className="font-semibold text-white">Campus Ambassador</h4>
                  <p className="text-sm text-cyan-400 mb-2">E-Cell IIT Gandhinagar</p>
                  <p className="text-xs text-gray-500 mb-3">Jan 2025 – Present</p>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Promoted various events to enhance student engagement and participation</li>
                    <li>• Designed visually appealing posters that effectively communicated key points and event details</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications section moved below */}
        <div className="mt-16">
          <div className="glass-effect p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">Recent Certifications</h3>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                <div>
                  <h4 className="font-semibold text-white">Microsoft Certified Azure AI Fundamentals</h4>
                  <p className="text-sm text-gray-400">January 2024</p>
                </div>
                <div className="px-3 py-1 bg-green-600/20 text-green-400 text-xs rounded-full">
                  Completed
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                <div>
                  <h4 className="font-semibold text-white">Meta Android Developer Professional</h4>
                  <p className="text-sm text-gray-400">Ongoing</p>
                </div>
                <div className="px-3 py-1 bg-yellow-600/20 text-yellow-400 text-xs rounded-full">
                  In Progress
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                <div>
                  <h4 className="font-semibold text-white">Generative AI with Large Language Model</h4>
                  <p className="text-sm text-gray-400">Completed</p>
                </div>
                <div className="px-3 py-1 bg-green-600/20 text-green-400 text-xs rounded-full">
                  Completed
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
