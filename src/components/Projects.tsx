import React from 'react';
import { ExternalLink, Github, Calendar, Award, Eye } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "PM - Personal Money Manager",
      description: "A comprehensive mobile application for personal transaction recording and financial management with AI integration for smart expense categorization and insights.",
      tech: ["React Native", "Node.js", "Neon Database", "Render", "Google Cloud", "API Integration"],
      image: "💰",
      category: "Mobile App",
      status: "Completed",
      year: "2025",
      features: [
        "Real-time transaction recording",
        "AI-powered expense categorization",
        "Income & expense tracking",
        "Interactive financial dashboard"
      ],
      metrics: {
        accuracy: "98% categorization",
        performance: "<150ms response",
        users: "Personal project"
      },
      screenshots: [
        "/lovable-uploads/b72eda9a-c824-49b4-a154-24ec520e6d53.png",
        "/lovable-uploads/18bf080d-1864-4ee3-8bd5-8d63999651f1.png"
      ],
      liveUrl: "https://pm-money-manager.demo.com",
      githubUrl: "https://github.com/Bishwa-cyber/pm-money-manager"
    },
    {
      title: "Emergency Medical Wallet",
      description: "Web-based digital health record system enabling real-time access to medical history, prescriptions, and reports with integrated three-role authentication.",
      tech: ["React.js", "Node.js", "Firebase", "Google Cloud APIs"],
      image: "🏥",
      category: "Healthcare",
      status: "Completed",
      year: "2024",
      features: [
        "Real-time medical data access",
        "Three-role authentication system", 
        "OCR-based document scanner",
        "QR code integration"
      ],
      metrics: {
        accuracy: ">90%",
        performance: "300ms avg response",
        users: "500+ test users"
      },
      screenshots: [
        "/lovable-uploads/75fbf158-c380-451e-ab73-abbb91941929.png",
        "/lovable-uploads/301ad70d-69f2-421b-ab1a-01fc94c5c9d2.png"
      ],
      liveUrl: "https://emergency-medical-wallet.demo.com",
      githubUrl: "https://github.com/Bishwa-cyber/emergency-medical-wallet"
    },
    {
      title: "AI-Based Object Detection",
      description: "Advanced real-time object detection system for 15+ unique items with gesture recognition and custom-trained models.",
      tech: ["YOLO v8", "OpenCV", "TensorFlow", "Python", "Flask"],
      image: "🤖",
      category: "AI/ML",
      status: "Completed", 
      year: "2024",
      features: [
        "Real-time object detection",
        "15+ object categories",
        "Gesture recognition (6 types)",
        "Custom model training"
      ],
      metrics: {
        accuracy: "92%",
        speed: "<200ms detection",
        objects: "15+ categories"
      },
      liveUrl: "https://ai-object-detection.demo.com",
      githubUrl: "https://github.com/Bishwa-cyber/ai-object-detection"
    },
    {
      title: "VisionGuard Surveillance",
      description: "Real-time surveillance system monitoring industrial areas with YOLOv8 object detection and automated CSV logging.",
      tech: ["YOLOv8", "OpenCV", "Flask", "Python"],
      image: "👁️",
      category: "Security",
      status: "Completed",
      year: "2024",
      features: [
        "Industrial area monitoring",
        "Automated threat detection",
        "CSV data logging",
        "Real-time alerts"
      ],
      metrics: {
        coverage: "24/7 monitoring",
        alerts: "Real-time",
        accuracy: "88% precision"
      },
      screenshots: [
        "/lovable-uploads/b2831130-f21b-4d72-9c85-f983a36dfe6c.png"
      ],
      liveUrl: "https://visionguard-surveillance.demo.com",
      githubUrl: "https://github.com/Bishwa-cyber/visionguard-surveillance"
    },
    {
      title: "Smart Attendance System",
      description: "Fingerprint-based attendance system with 85% accuracy improvement and optimized processing for educational institutions.",
      tech: ["OpenCV", "Machine Learning", "Python", "SQLite"],
      image: "📱",
      category: "Education",
      status: "In Development",
      year: "2024",
      features: [
        "Fingerprint recognition",
        "Automated attendance tracking",
        "Report generation",
        "Admin dashboard"
      ],
      metrics: {
        accuracy: "85% improvement",
        speed: "60% faster processing",
        institutions: "3+ deployed"
      },
      liveUrl: "https://smart-attendance.demo.com",
      githubUrl: "https://github.com/Bishwa-cyber/smart-attendance"
    }
  ];

  const achievements = [
    {
      title: "1st Place Inter-College Hackathon",
      description: "24-hour coding challenge winner (Team Lead)",
      icon: "🥇", 
      year: "2024"
    },
    {
      title: "3rd Place Smart India Hackathon",
      description: "National level competition recognition",
      icon: "🏆",
      year: "2024"
    },
    {
      title: "Prime Minister Scholarship",
      description: "Selected from 1.2M+ candidates",
      icon: "🎯",
      year: "2024"
    },
    {
      title: "Harvard Youth Leadership Summit",
      description: "Selected as delegate for HYLS",
      icon: "🌟",
      year: "2024"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-['Space_Grotesk']">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-cyan-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Showcasing innovative solutions built with cutting-edge technologies and creative problem-solving.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group glass-effect p-8 rounded-2xl hover:scale-105 transition-all duration-500 relative overflow-hidden"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{project.image}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center space-x-3 mt-2">
                      <span className="px-3 py-1 text-xs font-semibold bg-purple-600/20 text-purple-400 rounded-full">
                        {project.category}
                      </span>
                      <span className="px-3 py-1 text-xs font-semibold bg-green-600/20 text-green-400 rounded-full">
                        {project.status}
                      </span>
                      <span className="text-gray-400 text-sm flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {project.year}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Screenshots */}
              {project.screenshots && (
                <div className="mb-6">
                  <div className="flex space-x-2 overflow-x-auto">
                    {project.screenshots.map((screenshot, idx) => (
                      <img
                        key={idx}
                        src={screenshot}
                        alt={`${project.title} screenshot ${idx + 1}`}
                        className="h-32 w-auto rounded-lg border border-gray-700 hover:scale-105 transition-transform"
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Impact & Metrics:</h4>
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-bold text-cyan-400">{value}</div>
                      <div className="text-xs text-gray-400 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs glass-effect text-gray-300 rounded-full border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-lg font-semibold text-white hover:scale-105 transition-all duration-300"
                >
                  <Eye size={16} />
                  <span>Live Demo</span>
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 glass-effect rounded-lg font-semibold text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 border border-gray-600"
                >
                  <Github size={16} />
                  <span>Code</span>
                </a>
              </div>

              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-white mb-12">Achievements & Recognition</h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.title}
                className="glass-effect p-6 rounded-xl text-center hover:scale-105 transition-all duration-300 border border-gray-600"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-4">{achievement.icon}</div>
                <h4 className="font-bold text-white mb-2">{achievement.title}</h4>
                <p className="text-gray-300 text-sm mb-3">{achievement.description}</p>
                <div className="text-cyan-400 text-sm font-semibold">{achievement.year}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center glass-effect p-8 rounded-2xl border border-gray-600">
          <h3 className="text-2xl font-bold text-white mb-4">Interested in My Work?</h3>
          <p className="text-gray-300 mb-6">
            I'm always excited to work on new projects and collaborate with amazing teams.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full font-semibold text-white hover:scale-105 transition-all duration-300"
            >
              Let's Collaborate
            </button>
            <a
              href="https://github.com/Bish wa-cyber"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 glass-effect rounded-full font-semibold text-white hover:bg-white/10 transition-all duration-300 border border-purple-500/30"
            >
              View All Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
