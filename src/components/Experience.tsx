import { Briefcase, Award, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'Digital Marketing Intern',
      company: 'TechBrand Solutions',
      period: '2024 - Present',
      description: 'Leading social media campaigns and SEO optimization projects for multiple clients, achieving significant growth in online engagement and traffic.',
      achievements: [
        'Increased client social media engagement by 280%',
        'Managed Google Ads campaigns with 4.2x ROAS',
        'Conducted comprehensive SEO audits for 15+ websites',
      ],
      icon: Briefcase,
      color: 'from-amber-500 to-orange-600',
    },
    {
      role: 'Content Marketing Specialist',
      company: 'Digital Growth Hub',
      period: '2023 - 2024',
      description: 'Created engaging content strategies and managed content calendars for various brands across multiple industries and platforms.',
      achievements: [
        'Produced 100+ high-quality blog posts and articles',
        'Developed content strategy increasing organic traffic by 150%',
        'Collaborated with design team on visual content creation',
      ],
      icon: Award,
      color: 'from-blue-500 to-cyan-600',
    },
    {
      role: 'SEO Analyst Trainee',
      company: 'RankUp Agency',
      period: '2023 - 2023',
      description: 'Conducted keyword research, competitor analysis, and on-page optimization for client websites in various industries.',
      achievements: [
        'Improved keyword rankings for 50+ targeted keywords',
        'Performed technical SEO audits and implementations',
        'Assisted in link building campaigns',
      ],
      icon: Calendar,
      color: 'from-purple-500 to-pink-600',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 text-lg">Professional journey and achievements</p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-amber-500 via-blue-500 to-purple-500 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.role}
                data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                data-aos-delay={index * 100}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="md:w-5/12">
                  {index % 2 === 0 ? (
                    <div className="group relative">
                      <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                      <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105">
                        <div className={`inline-flex p-3 bg-gradient-to-br ${exp.color} rounded-lg mb-4`}>
                          <exp.icon className="text-white" size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                        <p className="text-amber-400 font-semibold mb-2">{exp.company}</p>
                        <p className="text-gray-400 text-sm mb-4">{exp.period}</p>
                        <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement) => (
                            <li key={achievement} className="flex items-start gap-2 text-gray-400 text-sm">
                              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.color} mt-2 flex-shrink-0`}></div>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : null}
                </div>

                <div className="hidden md:flex w-2/12 justify-center">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center">
                      <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${exp.color}`}></div>
                    </div>
                  </div>
                </div>

                <div className="md:w-5/12">
                  {index % 2 !== 0 ? (
                    <div className="group relative">
                      <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                      <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105">
                        <div className={`inline-flex p-3 bg-gradient-to-br ${exp.color} rounded-lg mb-4`}>
                          <exp.icon className="text-white" size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                        <p className="text-amber-400 font-semibold mb-2">{exp.company}</p>
                        <p className="text-gray-400 text-sm mb-4">{exp.period}</p>
                        <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement) => (
                            <li key={achievement} className="flex items-start gap-2 text-gray-400 text-sm">
                              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.color} mt-2 flex-shrink-0`}></div>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
