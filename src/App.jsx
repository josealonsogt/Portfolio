import { useState, useEffect } from 'react'
import { 
  Menu, 
  X, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  ChevronDown,
  Smartphone,
  Globe,
  Database,
  Code2,
  Rocket,
  User,
  Briefcase,
  Send,
  Heart,
  MapPin,
  Calendar
} from 'lucide-react'

// ============================================
// NAVBAR COMPONENT
// ============================================
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Sobre Mí', href: '#about' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Contacto', href: '#contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#hero" className="text-2xl font-bold text-gradient">
            &lt;JA /&gt;
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-gradient-primary px-5 py-2 rounded-full text-white text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Contáctame
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 glass rounded-2xl p-4 animate-slide-up">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-gray-300 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

// ============================================
// HERO SECTION
// ============================================
const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-dark-900 to-dark-900"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/30 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/30 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 animate-slide-up">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm text-gray-300">Disponible para trabajar • Incorporación inmediata</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
            <span className="text-white">Hola, soy </span>
            <span className="text-gradient">José Alonso</span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-300 mb-6 animate-slide-up">
            <span className="text-indigo-400">Full Stack Developer</span>
            <span className="text-gray-500"> • </span>
            <span className="text-purple-400">Mobile Specialist</span>
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 animate-slide-up">
            Estudiante de DAM en IES Azarquiel. Especializado en crear 
            aplicaciones nativas (Kotlin, Swift) y web (React). 
            Buscando mi primera oportunidad profesional.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up">
            <a
              href="#projects"
              className="bg-gradient-primary px-8 py-4 rounded-full text-white font-semibold hover:opacity-90 transition-all hover:scale-105 flex items-center gap-2"
            >
              <Rocket size={20} />
              Ver Proyectos
            </a>
            <a
              href="#contact"
              className="glass px-8 py-4 rounded-full text-white font-semibold hover:bg-white/10 transition-all hover:scale-105 flex items-center gap-2"
            >
              <Mail size={20} />
              Contáctame
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 animate-slide-up">
            <a
              href="https://github.com/josealonsogarcia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform"
            >
              <Github size={28} />
            </a>
            <a
              href="https://linkedin.com/in/josealonsogarcia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-indigo-400 transition-colors hover:scale-110 transform"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:josealongar16@gmail.com"
              className="text-gray-400 hover:text-purple-400 transition-colors hover:scale-110 transform"
            >
              <Mail size={28} />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="text-gray-500" size={32} />
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================
// ABOUT SECTION
// ============================================
const About = () => {
  const stats = [
    { number: '2+', label: 'Años Estudiando' },
    { number: '5+', label: 'Proyectos' },
    { number: '6+', label: 'Tecnologías' },
    { number: '100%', label: 'Motivación' },
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-indigo-400 font-mono text-sm">// SOBRE MÍ</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-2">
            Conóceme <span className="text-gradient">Mejor</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image/Visual Side */}
          <div className="relative">
            <div className="glass rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20"></div>
              <div className="relative z-10">
                <div className="w-48 h-48 mx-auto rounded-full bg-gradient-primary flex items-center justify-center mb-6 animate-glow">
                  <User size={80} className="text-white" />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">José Alonso García-Tapetado</h3>
                  <p className="text-indigo-400 font-mono">Full Stack Developer</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              ¡Hola! Soy <span className="text-indigo-400 font-semibold">José Alonso</span>, 
              un apasionado desarrollador en formación con un enfoque especial en el 
              <span className="text-purple-400 font-semibold"> desarrollo móvil</span> y 
              <span className="text-pink-400 font-semibold"> web</span>.
            </p>
            
            <p className="text-gray-400 leading-relaxed">
              Actualmente estudio Desarrollo de Aplicaciones Multiplataforma (DAM) en el 
              IES Azarquiel de Toledo, donde he desarrollado habilidades tanto en desarrollo 
              frontend como backend, con especial énfasis en aplicaciones móviles nativas.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Mi objetivo es encontrar una oportunidad donde pueda aportar mis conocimientos, 
              seguir aprendiendo y contribuir a proyectos innovadores. Estoy disponible para 
              <span className="text-green-400 font-semibold"> incorporación inmediata</span>.
            </p>

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="glass rounded-xl p-4 flex items-center gap-3">
                <MapPin className="text-indigo-400" size={20} />
                <span className="text-gray-300">Toledo, España</span>
              </div>
              <div className="glass rounded-xl p-4 flex items-center gap-3">
                <Calendar className="text-purple-400" size={20} />
                <span className="text-gray-300">Disponible ahora</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {stats.map((stat, index) => (
            <div key={index} className="glass rounded-2xl p-6 text-center hover:bg-white/10 transition-all">
              <h3 className="text-4xl font-bold text-gradient mb-2">{stat.number}</h3>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================
// SKILLS SECTION
// ============================================
const Skills = () => {
  const skillCategories = [
    {
      title: 'Mobile Development',
      icon: <Smartphone className="text-green-400" size={32} />,
      color: 'from-green-500/20 to-emerald-500/20',
      skills: [
        { name: 'Kotlin', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
        { name: 'Jetpack Compose', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jetpackcompose/jetpackcompose-original.svg' },
        { name: 'Swift', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg' },
        { name: 'SwiftUI', logo: 'https://developer.apple.com/assets/elements/icons/swiftui/swiftui-96x96_2x.png' },
        { name: 'React Native', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Android', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg' },
      ]
    },
    {
      title: 'Frontend',
      icon: <Globe className="text-blue-400" size={32} />,
      color: 'from-blue-500/20 to-cyan-500/20',
      skills: [
        { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'Tailwind', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      ]
    },
    {
      title: 'Backend',
      icon: <Database className="text-orange-400" size={32} />,
      color: 'from-orange-500/20 to-red-500/20',
      skills: [
        { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'Spring Boot', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
        { name: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
        { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
      ]
    },
    {
      title: 'Herramientas',
      icon: <Code2 className="text-purple-400" size={32} />,
      color: 'from-purple-500/20 to-pink-500/20',
      skills: [
        { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
        { name: 'Android Studio', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg' },
        { name: 'Xcode', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xcode/xcode-original.svg' },
        { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 relative bg-dark-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-indigo-400 font-mono text-sm">// MIS HABILIDADES</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-2">
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Tecnologías y herramientas con las que trabajo para crear aplicaciones modernas
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="glass rounded-3xl p-8 hover:bg-white/10 transition-all group"
            >
              <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r ${category.color} mb-6`}>
                {category.icon}
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-white/5 transition-all group/skill"
                  >
                    <img 
                      src={skill.logo} 
                      alt={skill.name}
                      className="w-12 h-12 object-contain group-hover/skill:scale-110 transition-transform"
                    />
                    <span className="text-xs text-gray-400 text-center group-hover/skill:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================
// PROJECTS SECTION
// ============================================
const Projects = () => {
  const projects = [
    {
      title: 'Kebab Orders Manager',
      description: 'Aplicación nativa multiplataforma (iOS/Android) para la gestión integral de pedidos de un kebab. Incluye sistema de inventario en tiempo real, gestión de pedidos con notificaciones push y panel de administración.',
      tags: ['Kotlin', 'Swift', 'PHP', 'MySQL', 'Firebase'],
      icon: '🥙',
      gradient: 'from-orange-500 to-red-500',
      features: ['Pedidos en tiempo real', 'Gestión de inventario', 'Notificaciones push', 'Panel admin'],
    },
    {
      title: 'Vapers Shop Manager',
      description: 'Sistema completo de gestión de stock y ventas para tienda de vapeo. Carrito de compra intuitivo, control de inventario con alertas de stock bajo y sistema de notificaciones para promociones.',
      tags: ['Java', 'Spring Boot', 'React', 'MySQL'],
      icon: '💨',
      gradient: 'from-purple-500 to-pink-500',
      features: ['Control de stock', 'Carrito de compra', 'Alertas automáticas', 'Dashboard ventas'],
    },
    {
      title: 'Gafas E-commerce',
      description: 'Plataforma web moderna desarrollada en React para visualización y compra de catálogo de gafas. Diseño responsive, filtros avanzados y experiencia de usuario optimizada.',
      tags: ['React', 'JavaScript', 'Tailwind CSS', 'Firebase'],
      icon: '👓',
      gradient: 'from-blue-500 to-cyan-500',
      features: ['Catálogo interactivo', 'Filtros avanzados', 'Diseño responsive', 'Checkout integrado'],
    },
  ]

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-indigo-400 font-mono text-sm">// MIS PROYECTOS</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-2">
            Trabajo <span className="text-gradient">Destacado</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Algunos de los proyectos en los que he trabajado durante mi formación
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="glass rounded-3xl overflow-hidden group hover:scale-105 transition-all duration-300"
            >
              {/* Project Header */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <span className="text-8xl z-10 group-hover:scale-110 transition-transform">
                  {project.icon}
                </span>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-all">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.features.map((feature, i) => (
                    <span key={i} className="text-xs text-indigo-300 bg-indigo-500/10 px-2 py-1 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs text-gray-400 bg-white/5 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
                    <Github size={18} />
                    Código
                  </a>
                  <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-indigo-400 transition-colors text-sm">
                    <ExternalLink size={18} />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/josealonsogarcia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 glass px-8 py-4 rounded-full text-white font-semibold hover:bg-white/10 transition-all"
          >
            <Github size={20} />
            Ver más en GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

// ============================================
// CONTACT SECTION
// ============================================
const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="text-indigo-400" size={24} />,
      label: 'Email',
      value: 'josealongar16@gmail.com',
      href: 'mailto:josealongar16@gmail.com',
    },
    {
      icon: <Linkedin className="text-blue-400" size={24} />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/josealonsogarcia',
      href: 'https://linkedin.com/in/josealonsogarcia',
    },
    {
      icon: <Github className="text-white" size={24} />,
      label: 'GitHub',
      value: 'github.com/josealonsogarcia',
      href: 'https://github.com/josealonsogarcia',
    },
  ]

  return (
    <section id="contact" className="py-20 relative bg-dark-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-indigo-400 font-mono text-sm">// CONTACTO</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-2">
            ¿Hablamos?
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Estoy buscando mi primera oportunidad profesional. Si crees que puedo encajar en tu equipo, 
            ¡no dudes en contactarme!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="glass rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Briefcase className="text-indigo-400" />
                Información de Contacto
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-all group"
                  >
                    <div className="p-3 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <p className="text-white font-medium group-hover:text-indigo-400 transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Card */}
            <div className="glass rounded-3xl p-8 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/20">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                <h4 className="text-xl font-bold text-white">Disponible para trabajar</h4>
              </div>
              <p className="text-gray-300">
                Incorporación inmediata. Dispuesto a aprender, crecer y aportar valor desde el primer día.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Send className="text-purple-400" />
              Envíame un mensaje
            </h3>
            
            <form className="space-y-6">
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
                  placeholder="Tu nombre"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
                  placeholder="tu@email.com"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Mensaje
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                  placeholder="Cuéntame sobre la oportunidad..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-primary py-4 rounded-xl text-white font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================
// FOOTER
// ============================================
const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-gray-400">
            <span>Hecho con</span>
            <Heart className="text-red-500 animate-pulse" size={18} />
            <span>por</span>
            <span className="text-gradient font-semibold">José Alonso</span>
          </div>
          
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/josealonsogarcia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/josealonsogarcia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-indigo-400 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:josealongar16@gmail.com"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
          
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  )
}

// ============================================
// MAIN APP COMPONENT
// ============================================
function App() {
  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
