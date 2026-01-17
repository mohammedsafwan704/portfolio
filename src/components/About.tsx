import { GraduationCap, Target, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl blur-2xl opacity-20"></div>
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-amber-500/50 transition-all duration-300">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Hello! I'm <span className="text-amber-400 font-semibold">Mohammed Safwan</span>, a passionate digital marketing enthusiast with a strong educational foundation in commerce. As a B.Com graduate, I've developed a keen understanding of business dynamics and consumer behavior.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Currently pursuing advanced digital marketing studies, I'm dedicated to mastering the art of creating impactful online campaigns, driving engagement, and helping brands achieve their goals in the digital landscape.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6" data-aos="fade-left">
            <div className="group bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-amber-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg group-hover:shadow-lg group-hover:shadow-amber-500/50 transition-all duration-300">
                  <GraduationCap className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Education</h3>
                  <p className="text-gray-400">B.Com Graduate with a strong foundation in business and commerce principles</p>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300">
                  <Target className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Current Focus</h3>
                  <p className="text-gray-400">Mastering digital marketing strategies, SEO, and social media management</p>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300">
                  <Lightbulb className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Passion</h3>
                  <p className="text-gray-400">Creating innovative digital solutions that drive real business results</p>
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
