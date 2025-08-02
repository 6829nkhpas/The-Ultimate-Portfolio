'use client'

import { motion } from 'framer-motion'
import { Download, Mail, Github, Linkedin, ChevronDown, Code, Palette, Zap, Sparkles, ArrowRight, Server } from 'lucide-react'
import myPhoto from '../app/assets/yashRana.png'

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen relative overflow-hidden min-w-full ">
      {/* Enhanced Dynamic Background */}
      <div className="absolute inset-0 ">
        {/* Improved Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.08)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_70%,transparent_110%)]" />

        {/* Enhanced Floating Elements */}
        <motion.div
          animate={{
            y: [0, -40, 0],
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] left-[8%] w-6 h-6 bg-gradient-to-br from-accent/30 to-highlight/30 rounded-full blur-sm"
        />
        <motion.div
          animate={{
            y: [0, 50, 0],
            x: [0, 30, 0],
            rotate: [0, -360]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute top-[50%] right-[10%] w-8 h-8 border-2 border-highlight/40 rotate-45 rounded-lg"
        />
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute bottom-[25%] left-[15%] w-5 h-5 bg-gradient-to-r from-accent/20 to-highlight/20 rounded-full"
        />

        {/* New Orbiting Elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-[30%] right-[25%] w-12 h-12"
        >
          <div className="w-2 h-2 bg-accent/40 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2" />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 sm:px-12 lg:px-16 relative z-10 min-h-screen flex items-center">
        <div className="w-full">
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Column - Enhanced Text Content */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7 space-y-8 order-2 lg:order-1"
            >
              {/* Enhanced Greeting Badge */}
              <motion.div
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="inline-block lg:mt-32"
              >
                <div className="group px-2 py-2 bg-gradient-to-r from-accent/10 to-highlight/10 border border-accent/30 rounded-full backdrop-blur-sm hover:shadow-glow transition-all duration-300">
                  <div className="flex items-center space-x-2">
                    <motion.div
                      animate={{ rotate: [0, 20, -20, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-lg"
                    >
                      👋
                    </motion.div>
                    <span className="text-accent font-semibold text-sm">Hello, I'm</span>
                    <Sparkles size={14} className="text-highlight animate-pulse" />
                  </div>
                </div>
              </motion.div>

              {/* Enhanced Name Section */}
              <div className="space-y-6">
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl flex gap-2 font-heading font-bold text-textLight leading-[0.9] tracking-tight">
                    <span className="block">Yash</span>
                    <span className=" bg-gradient-to-r from-accent via-highlight to-accent bg-clip-text text-transparent animate-pulse-slow">
                      Rana
                    </span>
                  </h1>
                </motion.div>

                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="relative"
                >
                  <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold text-textMuted leading-relaxed">
                    <span className="block">Full Stack &</span>
                    <span className="block bg-gradient-to-r from-highlight to-accent bg-clip-text text-transparent">
                      Blockchain Developer
                    </span>
                  </div>
                  {/* Decorative Line */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1.2, duration: 1.5 }}
                    className="h-1 bg-gradient-to-r from-accent to-highlight rounded-full mt-4 max-w-xs"
                  />
                </motion.div>
              </div>

              {/* Enhanced Description */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="space-y-6"
              >
                <div className="relative">
                  <p className="text-xl sm:text-2xl text-textLight leading-relaxed font-medium">
                    Crafting <span className="text-accent">Scalable Web</span> &
                    <span className="text-highlight"> Decentralized Solutions</span>
                  </p>
                </div>

                <p className="text-base sm:text-lg text-textMuted/90 leading-relaxed max-w-2xl">
                  Passionate about building innovative web applications and blockchain solutions.
                  Experienced in <span className="text-accent font-semibold">React</span>,
                  <span className="text-highlight font-semibold"> Node.js</span>,
                  <span className="text-accent font-semibold"> Rust</span>,
                  <span className="text-highlight font-semibold"> Solidity</span>, and
                  <span className="text-accent font-semibold"> Internet Computer Protocol</span>.
                </p>
              </motion.div>

              {/* Enhanced Tech Stack */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                {[
                  { icon: Code, label: "Full Stack" },
                  { icon: Palette, label: "UI/UX" },
                  { icon: Zap, label: "Blockchain" },
                  { icon: Server, label: "DevOps" }
                ].map(({ icon: Icon, label}, index) => (
                  <motion.div
                    key={label}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    className={`group px-4 py-2 bg-opacity-10  border-current border-opacity-20 rounded-xl backdrop-blur-sm hover:shadow-glow transition-all duration-300 cursor-pointer`}
                  >
                    <div className="flex items-center space-x-2 text-textMuted group-hover:text-textLight transition-colors">
                      <Icon size={18} className="group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-medium">{label}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Enhanced CTA Buttons */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 pt-6"
              >
                <motion.a
                  href="/Yash_Ran_FullStack.pdf"
                  download
                  whileHover={{ scale: 1.05, y: -3 }}
                  // whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-4 bg-gradient-to-r from-accent to-highlight text-primary font-semibold rounded-xl shadow-lg hover:shadow-glow transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-highlight to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex items-center justify-center space-x-2">
                    <Download size={20} className="group-hover:animate-bounce" />
                    <span>Download Resume</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.a>

                <motion.a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    const contactSection = document.querySelector('#contact')
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 border-2 border-accent text-accent hover:bg-accent hover:text-primary font-semibold rounded-xl transition-all duration-300"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <Mail size={20} className="group-hover:rotate-12 transition-transform" />
                    <span>Let's Talk</span>
                  </div>
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right Column - Enhanced Photo Section */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2 mt-20"
            >
              <div className="relative">
                {/* Enhanced Photo Container */}
                <motion.div
                  initial={{ scale: 0.8, rotate: -5 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    duration: 1.2,
                    type: "spring",
                    stiffness: 100,
                    delay: 0.5
                  }}
                  className="relative group"
                >
                  {/* Main Photo Frame */}
                  <div className="w-80 h-80 lg:w-96 lg:h-96 xl:w-[450px] xl:h-[450px] relative">
                    {/* Enhanced Gradient Border */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent via-highlight to-accent p-[3px] rounded-full group-hover:shadow-glow transition-all duration-500">
                      <div className="w-full h-full bg-gradient-to-br from-primary/95 to-primary/80 backdrop-blur-sm rounded-full flex items-center justify-center overflow-hidden">
                        <img
                          src={myPhoto.src}
                          alt="Yash Rana"
                          className="w-full h-full object-cover rounded-3xl group-hover:scale-105 transition-transform duration-500"
                        />

                        {/* Overlay Effect */}
                        <div className="absolute inset-0 bg-gradient-to-t from-accent/10 via-transparent to-highlight/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                      </div>
                    </div>

                    {/* Multiple Floating Rings */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute -inset-4 border border-accent/30 rounded-full"
                    />
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                      className="absolute -inset-8 border border-highlight/20 rounded-full"
                    />
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                      className="absolute -inset-12 border border-accent/10 rounded-full"
                    />
                  </div>

                  {/* Enhanced Status Badge */}
                  <motion.div
                    initial={{ scale: 0, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
                    className="absolute -bottom-6 left-1/2 transform -translate-x-1/2"
                  >
                    <div className="px-6 py-3 bg-gradient-to-r from-accent/90 to-highlight/90 border border-accent/50 rounded-full backdrop-blur-md shadow-lg hover:shadow-glow transition-all duration-300">
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                          <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-40"></div>
                        </div>
                        <span className="text-primary font-semibold text-sm">Available</span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Enhanced Background Decorations */}
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-10 -right-10 w-20 h-20 border-2 border-accent/30 rounded-3xl rotate-12 hidden lg:block bg-gradient-to-br from-accent/5 to-transparent"
                />

                <motion.div
                  animate={{
                    y: [0, 20, 0],
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="absolute -bottom-16 -left-10 w-16 h-16 bg-gradient-to-br from-highlight/20 to-accent/20 rounded-2xl hidden lg:block"
                />

                <motion.div
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 4 }}
                  className="absolute top-1/2 -left-16 w-8 h-8 border-2 border-highlight/40 rounded-full hidden xl:block"
                />
              </div>
            </motion.div>
          </div>

          {/* Enhanced Social Links */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="flex justify-center space-x-6 mt-20 lg:mt-24"
          >
            {[
              { icon: Github, href: "https://github.com/yash-rana0101", color: "hover:bg-accent/10 hover:border-accent/30 hover:text-accent" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/devop-yash-rana", color: "hover:bg-highlight/10 hover:border-highlight/30 hover:text-highlight" },
              { icon: Mail, href: "mailto:ranayash812@gmail.com", color: "hover:bg-accent/10 hover:border-accent/30 hover:text-accent" }
            ].map(({ icon: Icon, href, color }, index) => (
              <motion.a
                key={href}
                href={href}
                target={href.startsWith('mailto') ? undefined : "_blank"}
                rel={href.startsWith('mailto') ? undefined : "noopener noreferrer"}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.6 + index * 0.1 }}
                whileHover={{ scale: 1.2, y: -8 }}
                whileTap={{ scale: 0.9 }}
                className={`group w-14 h-14 bg-textMuted/5 border border-textMuted/20 rounded-2xl flex items-center justify-center text-textMuted transition-all duration-300 backdrop-blur-sm hover:shadow-lg ${color}`}
              >
                <Icon size={22} className="group-hover:scale-110 transition-transform" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero;
