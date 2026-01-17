const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full"></div>
        </div>

        {/* Main Card */}
        <div
          className="relative bg-gradient-to-br from-gray-800 to-gray-900 
                     rounded-2xl border border-gray-700 
                     hover:border-amber-500/50 
                     transition-all duration-500 
                     p-8 md:p-10"
          data-aos="fade-up"
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* Image */}
            <div className="relative group flex justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 
                              rounded-xl blur-2xl opacity-20 
                              group-hover:opacity-40 transition duration-500"></div>

              <img
                src="/images/me.jpg"
                alt="Mohammed Safwan"
                className="relative w-70 md:w-72 h-81 object-cover 
                           rounded-xl border-2 border-amber-500/40
                           transform group-hover:scale-105
                           transition-all duration-500 shadow-xl"
              />
            </div>

            {/* Content */}
            <div className="text-gray-300 text-lg leading-relaxed">
  <p className="mb-6">
    Hello! I'm{" "}
    <span className="text-amber-400 font-semibold">
      Mohammed Safwan
    </span>
    , a passionate digital marketing enthusiast with a strong foundation in
    commerce as a{" "}
    <span className="text-white font-medium">B.Com graduate</span>. My academic
    background has helped me develop a clear understanding of business models,
    consumer behavior, and market trends.
  </p>

  <p className="mb-6">
    Currently, I am advancing my expertise in{" "}
    <span className="text-white font-medium">Digital Marketing</span>, where I
    focus on building result-driven strategies using SEO, social media
    marketing, content creation, and performance analytics. I enjoy combining
    creativity with data to create campaigns that connect brands with the
    right audience.
  </p>

  <p>
    I am highly motivated, detail-oriented, and continuously learning to stay
    updated with the latest digital trends and tools. My goal is to help
    businesses grow their online presence, improve engagement, and achieve
    measurable success in the digital landscape.
  </p>
</div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
