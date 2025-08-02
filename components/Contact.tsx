'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Download, MessageCircle, CheckCircle, X } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('idle')
  const [showSuccessPopup, setShowSuccessPopup] = useState(false)

  // EmailJS configuration
  const serviceId = 'service_x7nwfng'
  const templateId = 'template_u98mcuj'
  const userId = 'Iaq7K27hpD8vrd15W'

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // EmailJS configuration
    const emailData = {
      service_id: serviceId,
      template_id: templateId,
      user_id: userId,
      template_params: {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Yash Rana',
      }
    }

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData)
      })

      // Log response for debugging
      console.log('Response status:', response.status)
      console.log('Response headers:', response.headers)

      if (response.ok) {
        const responseText = await response.text()
        console.log('Success response:', responseText)
        setSubmitStatus('success')
        setShowSuccessPopup(true)
        setFormData({ name: '', email: '', subject: '', message: '' })

        setTimeout(() => {
          setShowSuccessPopup(false)
        }, 5000)
      } else {
        const errorText = await response.text()
        console.error('Error response:', errorText)
        throw new Error(`Failed to send email: ${response.status} - ${errorText}`)
      }
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }


  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'ranayash812@gmail.com',
      href: 'mailto:ranayash812@gmail.com',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: '+91 81309 23346',
      href: 'tel:+918130923346',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Location',
      value: 'Roorkee, Uttarakhand, India',
      href: 'https://maps.google.com/?q=Roorkee,Uttarakhand,India',
      color: 'from-red-500 to-pink-600'
    }
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="w-6 h-6" />,
      url: 'https://github.com/yash-rana0101',
      color: 'hover:text-gray-400',
      username: '@yashrana'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-6 h-6" />,
      url: 'https://www.linkedin.com/in/devop-yash-rana',
      color: 'hover:text-blue-400',
      username: '/in/yashrana'
    },
    {
      name: 'Email',
      icon: <Mail className="w-6 h-6" />,
      url: 'mailto:ranayash812@gmail.com',
      color: 'hover:text-accent',
      username: 'ranayash812@gmail.com'
    },
    {
      name: 'Discord',
      icon: <MessageCircle className="w-6 h-6" />,
      url: '#',
      color: 'hover:text-purple-400',
      username: 'yashrana#1234'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br relative overflow-hidden">
      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

          {/* Popup */}
          <div className="relative z-10 max-w-md w-full">
            <div className="relative p-8 rounded-3xl backdrop-blur-2xl bg-white/10 border border-white/20 shadow-2xl">
              {/* Animated background */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-green-500/20 via-emerald-500/20 to-cyan-500/20 animate-pulse"></div>

              {/* Close button */}
              <button
                onClick={() => setShowSuccessPopup(false)}
                className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>

              <div className="relative z-10 text-center">
                {/* Success icon with animation */}
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center animate-bounce">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  Message Sent Successfully! 🎉
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  Thank you for reaching out! I've received your message and will get back to you within 24 hours.
                </p>

                <div className="flex flex-col space-y-3">
                  <div className="flex items-center justify-center space-x-2 text-green-400">
                    <CheckCircle size={16} />
                    <span className="text-sm">Email delivered successfully</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-blue-400">
                    <Mail size={16} />
                    <span className="text-sm">Response time: Within 24 hours</span>
                  </div>
                </div>

                <button
                  onClick={() => setShowSuccessPopup(false)}
                  className="mt-6 py-3 px-6 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 hover:scale-[1.02]"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <section id="contact" className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-accent mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? Let's discuss how we can work together
              to create something amazing. I'm always excited to take on new challenges!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form - Enhanced Glassmorphism */}
            <div className="group">
              <div className="relative p-8 rounded-3xl backdrop-blur-2xl bg-white/5 border border-white/10 shadow-2xl hover:shadow-blue-500/10 transition-all duration-700 hover:bg-white/8 hover:border-white/20">
                {/* Glassmorphism overlay */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Neumorphic inner glow */}
                <div className="absolute inset-1 rounded-3xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-accent flex items-center justify-center mr-3 shadow-lg shadow-blue-500/25">
                      <Send className="w-6 h-6 text-white" />
                    </div>
                    Send me a message
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-white font-medium mb-2">
                          Name *
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 shadow-inner hover:bg-white/8"
                            placeholder="Your name"
                            style={{
                              boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1), 0 1px 2px rgba(255,255,255,0.1)'
                            }}
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-white font-medium mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 shadow-inner hover:bg-white/8"
                          placeholder="your.email@example.com"
                          style={{
                            boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1), 0 1px 2px rgba(255,255,255,0.1)'
                          }}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-white font-medium mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 shadow-inner hover:bg-white/8"
                        placeholder="What's this about?"
                        style={{
                          boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1), 0 1px 2px rgba(255,255,255,0.1)'
                        }}
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-white font-medium mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 resize-none shadow-inner hover:bg-white/8"
                        placeholder="Tell me about your project or idea..."
                        style={{
                          boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1), 0 1px 2px rgba(255,255,255,0.1)'
                        }}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-blue-500 to-accent text-white font-semibold flex items-center justify-center space-x-2 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{
                        boxShadow: '0 8px 32px rgba(59, 130, 246, 0.25), inset 0 1px 2px rgba(255,255,255,0.1)'
                      }}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>

                    {/* Status Messages */}
                    {submitStatus === 'error' && (
                      <div className="flex items-center space-x-2 text-red-400 bg-red-400/10 backdrop-blur-xl border border-red-400/20 p-4 rounded-2xl">
                        <X size={18} />
                        <span>Failed to send message. Please try again or email me directly.</span>
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details - Enhanced Neumorphism */}
              <div className="relative p-8 rounded-3xl backdrop-blur-2xl bg-white/5 border border-white/10 shadow-2xl hover:shadow-purple-500/10 transition-all duration-700 group hover:bg-white/8">
                {/* Neumorphic background */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <a
                        key={index}
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center space-x-4 p-4 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group/item hover:shadow-lg hover:shadow-white/5 hover:scale-[1.02]"
                        style={{
                          boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.1), 0 2px 8px rgba(0,0,0,0.1)'
                        }}
                      >
                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${info.color} flex items-center justify-center text-white shadow-lg`}>
                          {info.icon}
                        </div>
                        <div>
                          <div className="text-gray-400 text-sm">{info.label}</div>
                          <div className="text-white font-medium group-hover/item:text-blue-400 transition-colors">
                            {info.value}
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Social Links - Enhanced Glassmorphism */}
              <div className="relative p-8 rounded-3xl backdrop-blur-2xl bg-white/5 border border-white/10 shadow-2xl hover:shadow-cyan-500/10 transition-all duration-700 group hover:bg-white/8">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Connect With Me
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 p-4 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group/social hover:shadow-lg hover:shadow-white/5 hover:scale-[1.02] hover:-translate-y-1"
                        style={{
                          boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.1), 0 2px 8px rgba(0,0,0,0.1)'
                        }}
                      >
                        <div className={`text-gray-400 group-hover/social:text-blue-400 transition-colors ${social.color}`}>
                          {social.icon}
                        </div>
                        <div>
                          <div className="text-white font-medium text-sm">{social.name}</div>
                          <div className="text-gray-400 text-xs">{social.username}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action - Premium Neumorphism */}
          <div className="text-center mt-16">
            <div className="relative p-8 rounded-3xl backdrop-blur-2xl bg-white/5 border border-white/10 shadow-2xl max-w-3xl mx-auto group hover:bg-white/8 hover:border-white/20 transition-all duration-700">
              {/* Multi-layered neumorphic effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-2 rounded-3xl bg-gradient-to-tl from-blue-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Let's Build Something Amazing Together
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Whether you have a project in mind, need consultation on blockchain technology,
                  or want to discuss collaboration opportunities, I'm here to help turn your ideas into reality.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:ranayash812@gmail.com"
                    className="py-3 px-6 rounded-2xl bg-gradient-to-r from-blue-500 to-accent text-white font-semibold flex items-center justify-center space-x-2 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-[1.02] active:scale-[0.98]"
                    style={{
                      boxShadow: '0 8px 32px rgba(59, 130, 246, 0.25), inset 0 1px 2px rgba(255,255,255,0.1)'
                    }}
                  >
                    <Mail size={18} />
                    <span>Email Me Directly</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/devop-yash-rana"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-6 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 text-white font-semibold flex items-center justify-center space-x-2 transition-all duration-300 hover:bg-white/20 hover:scale-[1.02] active:scale-[0.98]"
                    style={{
                      boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.2), 0 4px 16px rgba(0,0,0,0.1)'
                    }}
                  >
                    <Linkedin size={18} />
                    <span>Connect on LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact;
