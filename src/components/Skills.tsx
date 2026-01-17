import { TrendingUp, Search, Share2, MousePointer, FileText, Code } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      icon: TrendingUp,
      name: 'Digital Marketing',
      level: 90,
      color: 'from-amber-500 to-orange-600',
      shadowColor: 'shadow-amber-500/50',
    },
    {
      icon: Search,
      name: 'SEO',
      level: 85,
      color: 'from-blue-500 to-cyan-600',
      shadowColor: 'shadow-blue-500/50',
    },
    {
      icon: Share2,
      name: 'Social Media Marketing',
      level: 88,
      color: 'from-purple-500 to-pink-600',
      shadowColor: 'shadow-purple-500/50',
    },
    {
      icon: MousePointer,
      name: 'Google Ads',
      level: 82,
      color: 'from-green-500 to-emerald-600',
      shadowColor: 'shadow-green-500/50',
    },
    {
      icon: FileText,
      name: 'Content Marketing',
      level: 87,
      color: 'from-rose-500 to-red-600',
      shadowColor: 'shadow-rose-500/50',
    },
    {
      icon: Code,
      name: 'Web Basics (HTML, CSS, Bootstrap)',
      level: 80,
      color: 'from-indigo-500 to-blue-600',
      shadowColor: 'shadow-indigo-500/50',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 text-lg">Expertise that drives results</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105">
                <div className={`inline-flex p-4 bg-gradient-to-br ${skill.color} rounded-xl mb-4 group-hover:shadow-lg ${skill.shadowColor} transition-all duration-300`}>
                  <skill.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{skill.name}</h3>
                <div className="relative w-full h-3 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
                  </div>
                </div>
                <p className="text-amber-400 text-sm font-semibold mt-2">{skill.level}% Proficiency</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
