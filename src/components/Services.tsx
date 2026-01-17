import { Megaphone, Search, Share2, Globe, BarChart, PenTool } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Megaphone,
      title: 'Digital Marketing Strategy',
      description: 'Comprehensive digital marketing strategies tailored to your business goals, audience, and industry to maximize ROI and brand visibility.',
      features: ['Market Research', 'Competitor Analysis', 'Campaign Planning', 'Performance Tracking'],
      gradient: 'from-amber-500 to-orange-600',
      shadowColor: 'shadow-amber-500/50',
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Advanced SEO techniques to improve your website rankings, increase organic traffic, and enhance your online presence in search engines.',
      features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Link Building'],
      gradient: 'from-blue-500 to-cyan-600',
      shadowColor: 'shadow-blue-500/50',
    },
    {
      icon: Share2,
      title: 'Social Media Management',
      description: 'Professional social media management to build your brand, engage your audience, and drive conversions across all major platforms.',
      features: ['Content Creation', 'Community Management', 'Paid Advertising', 'Analytics & Reporting'],
      gradient: 'from-purple-500 to-pink-600',
      shadowColor: 'shadow-purple-500/50',
    },
    {
      icon: Globe,
      title: 'Website Promotion',
      description: 'Strategic website promotion services to increase visibility, drive quality traffic, and convert visitors into loyal customers.',
      features: ['PPC Campaigns', 'Display Advertising', 'Retargeting', 'Conversion Optimization'],
      gradient: 'from-green-500 to-emerald-600',
      shadowColor: 'shadow-green-500/50',
    },
    {
      icon: BarChart,
      title: 'Analytics & Reporting',
      description: 'Data-driven insights and comprehensive reporting to track performance, measure ROI, and make informed marketing decisions.',
      features: ['Google Analytics', 'Custom Dashboards', 'Performance Reports', 'Data Visualization'],
      gradient: 'from-rose-500 to-red-600',
      shadowColor: 'shadow-rose-500/50',
    },
    {
      icon: PenTool,
      title: 'Content Marketing',
      description: 'Engaging content creation that resonates with your audience, establishes authority, and drives meaningful engagement.',
      features: ['Blog Writing', 'Copywriting', 'Video Content', 'Email Campaigns'],
      gradient: 'from-indigo-500 to-purple-600',
      shadowColor: 'shadow-indigo-500/50',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 text-lg">Premium digital marketing solutions for your business</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-all duration-500`}></div>
              <div className="relative h-full bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105">
                <div className={`inline-flex p-4 bg-gradient-to-br ${service.gradient} rounded-xl mb-6 group-hover:shadow-2xl ${service.shadowColor} transition-all duration-300 group-hover:scale-110`}>
                  <service.icon className="text-white" size={32} />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-gray-300">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`}></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-6 border-t border-gray-700">
                  <button className={`w-full py-3 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-lg hover:shadow-lg ${service.shadowColor} transform hover:scale-105 transition-all duration-300`}>
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
