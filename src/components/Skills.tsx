
import React from 'react';
import { Code, Database, Cloud, Smartphone, Brain, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      color: "from-purple-600 to-pink-600",
      skills: [
        { name: "React/Next.js", level: 82 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 55 },
        { name: "JavaScript", level: 78 },
      ]
    },
    {
      title: "Backend Development", 
      icon: Database,
      color: "from-blue-600 to-cyan-600",
      skills: [
        { name: "Node.js", level: 75 },
        { name: "Python", level: 44 },
        { name: "SQL/NoSQL", level: 63 },
        { name: "REST APIs", level: 88 },
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "from-green-600 to-teal-600",
      skills: [
        { name: "Google Cloud", level: 54 },
        { name: "Firebase", level: 64 },
        { name: "Docker", level: 5 },
        { name: "Git/GitHub", level: 92 },
      ]
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      color: "from-orange-600 to-red-600",
      skills: [
        { name: "React Native", level: 85 },
        { name: "Flutter", level: 41 },
        { name: "Android", level: 80 },
        { name: "iOS", level: 72 },
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      color: "from-indigo-600 to-purple-600",
      skills: [
        { name: "TensorFlow", level: 76 },
        { name: "OpenCV", level: 85 },
        { name: "PyTorch", level: 85 },
        { name: "NLP", level: 85 },
      ]
    },
    {
      title: "Tools & Frameworks",
      icon: Wrench,
      color: "from-gray-600 to-gray-800",
      skills: [
        { name: "VS Code", level: 95 },
        { name: "Figma", level: 85 },
        { name: "Postman", level: 88 },
        { name: "Webpack", level: 80 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-['Space_Grotesk']">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-cyan-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks that I use to build exceptional digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            
            return (
              <div
                key={category.title}
                className="glass-effect p-8 rounded-2xl hover:scale-105 transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} mr-4`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-cyan-400 text-sm font-semibold">{skill.level}%</span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${index * 200}ms`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              </div>
            );
          })}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Technologies I Work With</h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'React', 'Node.js', 'Python', 'TypeScript', 'MongoDB', 'PostgreSQL',
              'Firebase', 'AWS', 'Docker', 'Kubernetes', 'GraphQL', 'Redis',
              'Elasticsearch', 'TensorFlow', 'OpenCV', 'Flask', 'FastAPI', 'Socket.io'
            ].map((tech, index) => (
              <div
                key={tech}
                className="px-4 py-2 glass-effect rounded-full text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
