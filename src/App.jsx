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
  Calendar,
  Phone,
  Youtube,
  Download
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
            <span className="text-gradient">José Alonso García-Tapetado</span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-300 mb-6 animate-slide-up">
            <span className="text-indigo-400">Desarrollador Multiplataforma</span>
            <span className="text-gray-500"> | </span>
            <span className="text-purple-400">React & Mobile</span>
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
              href="public/Curriculum_José_Alonso.pdf"
              download
              className="glass px-8 py-4 rounded-full text-white font-semibold hover:bg-white/10 transition-all hover:scale-105 flex items-center gap-2"
            >
              <Download size={20} />
              Descargar CV
            </a>
            <a
              href="mailto:josealonsogt@icloud.com"
              className="glass px-8 py-4 rounded-full text-white font-semibold hover:bg-white/10 transition-all hover:scale-105 flex items-center gap-2"
            >
              <Mail size={20} />
              Contáctame
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 animate-slide-up">
            <a
              href="https://github.com/josealonsogt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/josealonsogt/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-indigo-400 transition-colors hover:scale-110 transform"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="https://www.youtube.com/@josealonsogt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-500 transition-colors hover:scale-110 transform"
            >
              <Youtube size={28} />
            </a>
            <a
              href="mailto:josealonsogt@icloud.com"
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
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 animate-glow ring-4 ring-indigo-500/50">
                  <img 
                    src="/image.png" 
                    alt="José Alonso García-Tapetado"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">José Alonso García-Tapetado</h3>
                  <p className="text-indigo-400 font-mono">Desarrollador Multiplataforma | React & Mobile</p>
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
      title: "Fashion Glasses Store",
      description: "E-commerce de gafas con sistema de comentarios, valoraciones y vista maestro-detalle.",
      tech: ["React", "Vite", "Context API"],
      github: "https://github.com/josealonsogt/GafasReact",
      demo: "https://gafasreact.vercel.app/",
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Concesionario Online",
      description: "Buscador y filtrado de coches con interfaz moderna.",
      tech: ["React", "Bootstrap", "Filtros"],
      github: "https://github.com/josealonsogt/CochesReact",
      demo: "https://cochesreact.vercel.app/",
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Kings League InfoJobs",
      description: "Web para visualizar estadísticas, partidos y clasificaciones de la liga. Datos en tiempo real consumiendo API externa.",
      tech: ["React", "Vite", "API Rest", "CSS3"],
      github: "https://github.com/josealonsogt/KingsLeagueReact",
      demo: "https://kingsleague-josealonsogt.vercel.app/",
      image: "https://images.unsplash.com/photo-1579952363873-27f3bde9be2e?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Gestión de Parques Naturales",
      description: "Aplicación para la gestión y visualización de reservas naturales, fauna y flora.",
      tech: ["React", "Vite", "API"],
      github: "https://github.com/josealonsogt/ParquesReact",
      demo: "https://parquesreact.vercel.app/",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Metro de Madrid",
      description: "App iOS de gestión de líneas y estaciones de metro con consumo de API.",
      tech: ["SwiftUI", "API Rest", "iOS"],
      github: "https://github.com/josealonsogt/MetroMadrid",
      demo: null,
      image: "/MetroMadridLogo.svg.png"
    },
    {
      title: "App de Chistes",
      description: "App Android maestro-detalle con consumo de API REST usando Retrofit.",
      tech: ["Kotlin", "Jetpack Compose", "Retrofit"],
      github: "https://github.com/josealonsogt/AppChistes",
      demo: null,
      image: "https://images.unsplash.com/photo-1527224857830-43a7acc85260?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "TMDB Cine",
      description: "Buscador de películas con persistencia de datos y vistas dinámicas.",
      tech: ["JPA", "JDBC", "JSP"],
      github: "https://github.com/josealonsogt/TheMovieJPA",
      demo: null,
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=800"
    }
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
              {/* Project Image */}
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-all">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs text-gray-400 bg-white/5 px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    <Github size={18} />
                    Código
                  </a>
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-indigo-400 transition-colors text-sm"
                    >
                      <ExternalLink size={18} />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/josealonsogt"
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
      value: 'josealonsogt@icloud.com',
      href: 'mailto:josealonsogt@icloud.com',
    },
    {
      icon: <Phone className="text-green-400" size={24} />,
      label: 'Teléfono',
      value: '+34 627 18 14 92',
      href: 'tel:+34627181492',
    },
    {
      icon: <Linkedin className="text-blue-400" size={24} />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/josealonsogt',
      href: 'https://www.linkedin.com/in/josealonsogt/',
    },
    {
      icon: <Github className="text-white" size={24} />,
      label: 'GitHub',
      value: 'github.com/josealonsogt',
      href: 'https://github.com/josealonsogt',
    },
    {
      icon: <Youtube className="text-red-500" size={24} />,
      label: 'YouTube',
      value: 'youtube.com/@josealonsogt',
      href: 'https://www.youtube.com/@josealonsogt',
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
              
              <a
                href="mailto:josealonsogt@icloud.com?subject=Contacto%20desde%20Portfolio&body=Hola%20José,%20me%20gustaría%20contactar%20contigo."
                className="w-full bg-gradient-primary py-4 rounded-xl text-white font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Enviar Mensaje
              </a>
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
              href="https://github.com/josealonsogt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/josealonsogt/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-indigo-400 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://www.youtube.com/@josealonsogt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-500 transition-colors"
            >
              <Youtube size={20} />
            </a>
            <a
              href="mailto:josealonsogt@icloud.com"
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
