'use client'

import { motion } from 'framer-motion'
import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react'

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: 'JavaScript',
      issuer: 'Udemy',
      date: ' Dec 2024',
      credentialId: 'UC-5eccf322-307a-458b-93bb-77e4fb6825e7',
      description: 'Comprehensive certification covering advanced JavaScript concepts, ES6 features, and asynchronous programming.',
      skills: ['Javascript', 'ES6', 'Asynchronous Programming', 'DOM Manipulation', 'APIs'],
      verificationUrl: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-5eccf322-307a-458b-93bb-77e4fb6825e7.pdf',
      logo: 'https://www.vhv.rs/dpng/d/456-4562295_library-of-javascript-icon-graphic-freeuse-png-files.png',
      bgColor: 'from-red-500/20 to-pink-500/20',
      borderColor: 'border-yellow-500/30',
      verified: true
    },
    {
      id: 2,
      title: 'MongoDB Certified Developer',
      issuer: 'MongoDB University',
      date: 'Dec 2024',
      credentialId: ' MDBcu26zxdhh3',
      description: 'Certification in MongoDB database design, aggregation framework, and performance optimization techniques.',
      skills: ['MongoDB', 'NoSQL', 'Aggregation', 'Indexing', 'Performance Optimization'],
      verificationUrl: 'https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/459004a1-c570-4c77-8f19-b42fb27ef986-yash-rana-6cb68b42-a3e3-4f8f-92e0-ae0b2fd6f6c3-certificate.pdf',
      logo: 'https://images.icon-icons.com/2415/PNG/512/mongodb_original_wordmark_logo_icon_146425.png',
      bgColor: 'from-green-500/20 to-indigo-500/20',
      borderColor: 'border-green-500/30',
      verified: true
    },
    {
      id: 3,
      title: 'Rust Programming - Intermediate',
      issuer: 'Microsoft Learn',
      date: '2024',
      credentialId: 'HR-RUST-INT-456',
      description: 'Intermediate level certification demonstrating proficiency in Rust programming language and systems programming.',
      skills: ['Rust', 'Memory Safety', 'Concurrency', 'Systems Programming', 'Performance'],
      verificationUrl: 'https://learn.microsoft.com/en-us/users/yashrana1010/achievements/print/n2et79yf?tab=tab-modules',
      logo: 'https://avatars.githubusercontent.com/u/5430905?s=200&v=4',
      bgColor: 'from-orange-500/20 to-red-500/20',
      borderColor: 'border-orange-500/30',
      verified: true
    },
    {
      id: 4,
      title: 'SQL Database',
      issuer: 'HackerRank',
      date: 'Jul 2024',
      credentialId: 'e60679902e60',
      description: 'Comprehensive certification covering SQL database design, optimization, and administration across multiple database systems.',
      skills: ['SQL', 'Database Design', 'Query Optimization', 'Data Modeling', 'Performance Tuning'],
      verificationUrl: 'https://www.hackerrank.com/certificates/e60679902e60',
      logo: 'https://images.seeklogo.com/logo-png/43/1/azure-sql-database-logo-png_seeklogo-434046.png',
      bgColor: 'from-blue-500/20 to-cyan-500/20',
      borderColor: 'border-blue-500/30',
      verified: true
    },
    {
      id: 5,
      title: 'Blockchain Fundamentals',
      issuer: 'LinkedIn Learning',
      date: '2023',
      credentialId: '345be3a92326899c7613c6f630a325384f6b03dff621cb77b9040fcd5e10bb28',
      description: 'Foundation certification covering blockchain technology, distributed ledgers, and cryptocurrency fundamentals.',
      skills: ['Blockchain', 'Distributed Systems', 'Cryptography', 'Consensus Algorithms', 'DLT'],
      verificationUrl: 'https://www.linkedin.com/learning/certificates/345be3a92326899c7613c6f630a325384f6b03dff621cb77b9040fcd5e10bb28?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B8wfY4TljSPm1WGUTAXI8KQ%3D%3D',
      logo: 'https://img.freepik.com/premium-vector/blockchain-logo-design_611243-62.jpg',
      bgColor: 'from-green-500/20 to-emerald-500/20',
      borderColor: 'border-green-500/30',
      verified: true
    },
    {
      id: 6,
      title: 'Kali Linux Certified Professional',
      issuer: 'LinkedIn Learning',
      date: 'Jul 2023',
      credentialId: 'a8b7403f24b4dcfa879ce87ff9cbce0df27cb1627edc706e89fec4eb73461001',
      description: 'Certification in Kali Linux for penetration testing, security auditing, and ethical hacking practices.',
      skills: ['Kali Linux', 'Penetration Testing', 'Security Auditing', 'Ethical Hacking', 'Network Security'],
      verificationUrl: 'https://www.linkedin.com/learning/certificates/a8b7403f24b4dcfa879ce87ff9cbce0df27cb1627edc706e89fec4eb73461001?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B8wfY4TljSPm1WGUTAXI8KQ%3D%3D',
      logo: 'https://i.pinimg.com/736x/03/0e/6d/030e6ddf86c7e514b728914908cab882.jpg',
      bgColor: 'from-green-500/20 to-teal-500/20',
      borderColor: 'border-green-500/30',
      verified: true
    },
    {
      id: 7,
      title: 'Node.js Certified Developer',
      issuer: 'Udemy',
      date: 'Dec 2024',
      credentialId: 'UC-82b4f697-10c0-4277-9b64-0fe49ad81b91',
      description: 'Certification in Node.js application development, including RESTful APIs, Express.js, and asynchronous programming.',
      skills: ['Node.js', 'Express.js', 'RESTful APIs', 'Asynchronous Programming', 'Microservices'],
      verificationUrl: 'https://www.udemy.com/certificate/UC-82b4f697-10c0-4277-9b64-0fe49ad81b91/',
      logo: 'https://images.seeklogo.com/logo-png/27/1/node-js-logo-png_seeklogo-273749.png',
      bgColor: 'from-green-500/20 to-teal-500/20',
      borderColor: 'border-green-500/30',
      verified: true
    },
    {
      id: 8,
      title: 'API security',
      issuer: 'API Academy',
      date: 'Dec 2024',
      credentialId: '155361786',
      description: 'Certification in API security best practices, including authentication, authorization, and secure data handling.',
      skills: ['API Security', 'Authentication', 'Authorization', 'Data Protection', 'OWASP Top 10'],
      verificationUrl: 'https://drive.google.com/file/d/1i3ykKtFnjGc7W3CpAzr4GLisPxft7UhB/view?usp=sharing',
      logo: 'https://media.licdn.com/dms/image/v2/C560BAQE8iNFCcjxNAw/company-logo_200_200/company-logo_200_200/0/1630603751508/api_academy_logo?e=2147483647&v=beta&t=7SbUMi4qt4DWsylcCzgFEBTUIfXYP2O0jay-6rM4yDU',
      bgColor: 'from-green-500/20 to-teal-500/20',
      borderColor: 'border-green-500/30',
      verified: true
    },
    {
      id: 9,
      title: 'Git & GitHub',
      issuer: 'LinkedIn Learning',
      date: 'Dec 2024',
      credentialId: '751f4d0eade3d63b421157774641b531200d51bd4391d181e867ef77245555e9',
      description: 'Certification in Git version control and GitHub collaboration, including branching, merging, and pull requests.',
      skills: ['Git', 'GitHub', 'Version Control', 'Collaboration', 'Branching'],
      verificationUrl: 'https://www.linkedin.com/learning/certificates/751f4d0eade3d63b421157774641b531200d51bd4391d181e867ef77245555e9?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B8wfY4TljSPm1WGUTAXI8KQ%3D%3D',
      logo: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
      bgColor: 'from-gray-100/20 to-gray-100/20',
      borderColor: 'border-green-500/30',
      verified: true
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.1,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="certifications" className="section-padding bg-gradient-to-b from-primary/95 to-primary min-h-screen">
      <div className="container-width px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={containerVariants}
        >
          {/* Section Title */}
          <motion.div variants={cardVariants} className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-textLight mb-4">
              Certifications & Achievements
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-accent to-highlight mx-auto mb-6 sm:mb-8"></div>
            <p className="text-base sm:text-lg text-textMuted max-w-3xl mx-auto px-4">
              Continuous learning and professional development through industry-recognized
              certifications and specialized training programs.
            </p>
          </motion.div>

          {/* Certifications Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                variants={cardVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`glass-card p-4 sm:p-6 ${cert.borderColor} border hover:shadow-card-hover transition-all duration-300 group rounded-2xl sm:rounded-3xl`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl bg-gradient-to-br ${cert.bgColor} flex items-center justify-center text-2xl sm:text-3xl mb-3 sm:mb-4 `}>
                    <img src={cert.logo} alt="" className='w-full h-full object-cover rounded-lg sm:rounded-xl' />
                    
                  </div>
                  {cert.verified && (
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center space-x-1 text-green-400"
                      title="Verified Certification"
                    >
                      <CheckCircle size={14} className="sm:w-4 sm:h-4" />
                      <span className="text-xs font-medium hidden sm:inline">Verified</span>
                      <span className="text-xs font-medium sm:hidden">✓</span>
                    </motion.div>
                  )}
                </div>

                {/* Content */}
                <div className="space-y-2 sm:space-y-3">
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-textLight group-hover:text-accent transition-colors leading-tight">
                    {cert.title}
                  </h3>

                  <div className="flex items-center space-x-2 text-textMuted">
                    <Award size={14} className="text-accent flex-shrink-0 sm:w-4 sm:h-4" />
                    <span className="font-medium text-sm sm:text-base truncate">{cert.issuer}</span>
                  </div>

                  <div className="flex items-center space-x-2 text-textMuted">
                    <Calendar size={14} className="text-accent flex-shrink-0 sm:w-4 sm:h-4" />
                    <span className="text-sm sm:text-base">{cert.date}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-textMuted leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.slice(0, window.innerWidth < 640 ? 3 : cert.skills.length).map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="text-xs bg-white/5 text-accent px-2 py-1 rounded-full border border-accent/20"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 3 && window.innerWidth < 640 && (
                      <span className="text-xs bg-white/5 text-accent px-2 py-1 rounded-full border border-accent/20">
                        +{cert.skills.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Credential ID */}
                  <div className="pt-2 border-t border-white/10">
                    <p className="text-xs text-textMuted mb-2">
                      <span className="font-medium">ID:</span>
                      <span className="ml-1 break-all">{cert.credentialId}</span>
                    </p>

                    {/* Verification Link */}
                    <motion.a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center space-x-2 text-accent hover:text-highlight transition-colors text-xs sm:text-sm font-medium"
                    >
                      <ExternalLink size={12} className="sm:w-3.5 sm:h-3.5" />
                      <span>Verify</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={cardVariants}
            className="mt-12 sm:mt-16 glass-card p-6 sm:p-8 rounded-2xl sm:rounded-3xl"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
              <div>
                <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1 sm:mb-2">{certifications.length}</div>
                <div className="text-textMuted text-xs sm:text-sm">Total Certifications</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1 sm:mb-2">
                  {certifications.filter(cert => cert.verified).length}
                </div>
                <div className="text-textMuted text-xs sm:text-sm">Verified</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1 sm:mb-2">
                  {new Set(certifications.flatMap(cert => cert.skills)).size}
                </div>
                <div className="text-textMuted text-xs sm:text-sm">Skills Covered</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1 sm:mb-2">2024</div>
                <div className="text-textMuted text-xs sm:text-sm">Latest Year</div>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={cardVariants}
            className="text-center mt-8 sm:mt-12"
          >
            <div className="glass-card p-6 sm:p-8 max-w-2xl mx-auto rounded-2xl sm:rounded-3xl">
              <div className="flex items-center justify-center mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-accent to-highlight rounded-full flex items-center justify-center">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
              </div>
              <h3 className="text-lg sm:text-2xl font-heading font-bold text-textLight mb-4">
                Committed to Continuous Learning
              </h3>
              <p className="text-sm sm:text-base text-textMuted mb-6 leading-relaxed">
                I believe in staying current with industry trends and continuously
                expanding my skill set through professional certifications and hands-on learning.
              </p>
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  const contactSection = document.querySelector('#contact')
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4"
              >
                Let's Work Together
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications