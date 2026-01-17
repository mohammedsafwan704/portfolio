import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce SEO Campaign',
      description: 'Comprehensive SEO strategy resulting in 150% increase in organic traffic and 85% improvement in keyword rankings for an online retail store.',
      technologies: ['SEO', 'Google Analytics', 'Keyword Research', 'Content Strategy'],
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-amber-500 to-orange-600',
    },
    {
      title: 'Social Media Growth Strategy',
      description: 'Developed and executed a multi-platform social media campaign that grew follower base by 300% and increased engagement rate by 250%.',
      technologies: ['Instagram', 'Facebook', 'Content Creation', 'Analytics'],
      image: 'https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      title: 'Google Ads PPC Campaign',
      description: 'Managed a $5000 monthly budget PPC campaign achieving 4.5x ROAS and reducing cost-per-click by 40% through strategic optimization.',
      technologies: ['Google Ads', 'PPC', 'Conversion Optimization', 'A/B Testing'],
      image: 'https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-blue-500 to-cyan-600',
    },
    {
      title: 'Content Marketing Hub',
      description: 'Created a comprehensive content marketing strategy with blog posts, infographics, and videos that generated 50K+ monthly visitors.',
      technologies: ['Content Writing', 'SEO', 'Video Marketing', 'Copywriting'],
      image: 'https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-green-500 to-emerald-600',
    },
    {
      title: 'Brand Website Redesign',
      description: 'Led the redesign of a corporate website using modern web technologies, improving user experience and conversion rates by 120%.',
      technologies: ['HTML5', 'CSS3', 'Bootstrap', 'UI/UX Design'],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-rose-500 to-red-600',
    },
    {
      title: 'Email Marketing Campaign',
      description: 'Designed and executed automated email marketing campaigns with 35% open rate and 12% click-through rate, exceeding industry standards.',
      technologies: ['Email Marketing', 'Automation', 'Copywriting', 'Analytics'],
      image: 'https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-indigo-500 to-purple-600',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 text-lg">Showcasing successful campaigns and results</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-gray-600 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center gap-4`}>
                  <button className="p-3 bg-white rounded-full transform translate-y-10 group-hover:translate-y-0 transition-all duration-300 hover:scale-110">
                    <ExternalLink className="text-gray-900" size={20} />
                  </button>
                  <button className="p-3 bg-white rounded-full transform translate-y-10 group-hover:translate-y-0 transition-all duration-300 delay-75 hover:scale-110">
                    <Github className="text-gray-900" size={20} />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-semibold bg-gray-700 text-amber-400 rounded-full hover:bg-gray-600 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
