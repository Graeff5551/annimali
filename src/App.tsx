/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Stethoscope, 
  ShieldCheck, 
  Microscope, 
  Syringe, 
  Scissors, 
  Heart, 
  Instagram, 
  MapPin, 
  Phone, 
  Clock, 
  Menu, 
  X, 
  ChevronRight,
  MessageCircle
} from "lucide-react";
import { useState, useEffect } from "react";

const Logo = () => (
  <a href="#home" className="flex items-center gap-2 transition-all hover:scale-105 active:scale-95">
    <span translate="no" className="text-3xl font-extrabold tracking-tight text-secondary font-display">
      Annimali
    </span>
  </a>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const whatsappLink = "https://api.whatsapp.com/message/DE5XD5XL37PJG1?autoload=1&app_absent=0&utm_source=ig";
  const contactPhone = "51 9958-7409";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#home" },
    { name: "Especialidades", href: "#especialidades" },
    { name: "Serviços", href: "#servicos" },
    { name: "Sobre", href: "#sobre" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <div className="min-h-screen selection:bg-primary selection:text-white">
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass py-2 shadow-sm" : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Logo />
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-semibold hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a 
              href={whatsappLink} 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-secondary transition-all shadow-lg shadow-primary/20"
            >
              Agendar Consulta
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-secondary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 p-6 flex flex-col gap-4 shadow-xl md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-lg font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href={whatsappLink} 
              className="bg-primary text-white px-6 py-4 rounded-xl font-bold text-center"
            >
              Falar no WhatsApp
            </a>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 overflow-hidden">
        <div className="blob-bg top-[-100px] right-[-100px] opacity-40"></div>
        <div className="blob-bg bottom-[-100px] left-[-100px] opacity-30 bg-pink-accent/20"></div>
        
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-accent/30 text-secondary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              13 Anos de Experiência em Tramandaí
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6 text-secondary">
              Cuidado <span className="text-primary">especializado</span> para quem você ama!
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
              A Dra. Aline Morais e a equipe Annimali oferecem medicina veterinária de excelência, 
              com foco em Dermatologia e segurança cirúrgica para seu pet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-primary/30"
              >
                <MessageCircle size={24} />
                Falar via WhatsApp
              </a>
              <a 
                href="#servicos"
                className="flex items-center justify-center gap-2 bg-white text-secondary border-2 border-gray-100 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-colors"
              >
                Ver Serviços
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border-[12px] border-white animate-float">
              <img 
                src="https://lh3.googleusercontent.com/d/1UN1-GTzsGfhnkqkDa7xRvHSgoxnuwJtm" 
                alt="Dra. Aline examinando a pele de um cachorro com carinho" 
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-orange-accent rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary rounded-full opacity-10 blur-3xl"></div>
          </motion.div>
        </div>
      </section>

      {/* Bento Grid Specialties */}
      <section id="especialidades" className="py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Nossas Especialidades</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Combinamos tecnologia de ponta com um atendimento humanizado para garantir o melhor diagnóstico.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
            {/* Main Highlight: Dermatology */}
            <div className="md:col-span-2 md:row-span-2 bento-item bg-secondary text-white group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/40 transition-colors"></div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="bg-primary w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                    <Stethoscope size={30} />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Dermatologia Veterinária</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Referência em Tramandaí para o tratamento de alergias, otites e doenças de pele complexas. 
                    A Dra. Aline Morais possui especialização avançada para devolver o conforto ao seu pet.
                  </p>
                </div>
                <ul className="mt-8 space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2"><ChevronRight size={16} className="text-primary" /> Testes Alérgicos</li>
                  <li className="flex items-center gap-2"><ChevronRight size={16} className="text-primary" /> Biópsias de Pele</li>
                  <li className="flex items-center gap-2"><ChevronRight size={16} className="text-primary" /> Controle de Prurido</li>
                </ul>
              </div>
            </div>

            {/* Surgery */}
            <div className="md:col-span-2 bento-item bg-white border border-gray-100 group">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="bg-accent/20 w-16 h-16 rounded-2xl flex items-center justify-center text-primary shrink-0">
                  <Scissors size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Cirurgia & Anestesia</h3>
                  <p className="text-sm text-gray-500">
                    Centro cirúrgico equipado com anestesia inalatória e monitorização multiparamétrica constante.
                  </p>
                </div>
              </div>
            </div>

            {/* General Clinic */}
            <div className="bento-item bg-primary text-white">
              <div className="h-full flex flex-col justify-between">
                <Heart size={32} className="mb-4" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Clínica Geral</h3>
                  <p className="text-xs opacity-90">Check-ups preventivos e acompanhamento vitalício.</p>
                </div>
              </div>
            </div>

            {/* Labs */}
            <div className="bento-item bg-white border border-gray-100">
              <div className="h-full flex flex-col justify-between">
                <Microscope size={32} className="text-orange-accent mb-4" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Laboratório</h3>
                  <p className="text-xs text-gray-500">Exames rápidos e precisos para diagnósticos imediatos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Serviços Completos</h2>
              <p className="text-gray-600">
                Tudo o que seu melhor amigo precisa em um só lugar, com a confiança que só a Annimali oferece.
              </p>
            </div>
            <a href="#contato" className="text-primary font-bold flex items-center gap-2 hover:underline">
              Falar com um especialista <ChevronRight size={20} />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Consultas e Check-ups", icon: <Stethoscope />, desc: "Avaliação completa da saúde física e comportamental." },
              { title: "Dermatologia Especializada", icon: <ShieldCheck />, desc: "Foco total na saúde da pele e pelagem de cães e gatos." },
              { title: "Vacinação Completa", icon: <Syringe />, desc: "Protocolos vacinais atualizados e seguros." },
              { title: "Cirurgias e Internação", icon: <Scissors />, desc: "Procedimentos eletivos e de urgência com equipe preparada." },
              { title: "Anestesia Inalatória", icon: <ShieldCheck />, desc: "Segurança máxima para pets idosos ou braquicefálicos." },
              { title: "Exames de Imagem", icon: <Microscope />, desc: "Ultrassonografia e exames laboratoriais integrados." },
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-[32px] bg-white border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Dra. Aline */}
      <section id="sobre" className="py-24 bg-secondary text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 border-2 border-primary rounded-full"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 border-2 border-accent rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-2">Dra. Aline Morais</h2>
            <p translate="no" className="text-primary font-bold mb-8 tracking-wider">CRMV-RS 12345</p>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                Com mais de 13 anos de dedicação à medicina veterinária em Tramandaí, a Dra. Aline Morais 
                construiu uma trajetória pautada pela ética, atualização constante e, acima de tudo, amor pelos animais.
              </p>
              <p>
                Sua paixão pela Dermatologia Veterinária a levou a buscar pós-graduações e especializações 
                que hoje tornam a Annimali uma referência no Litoral Norte gaúcho para casos dermatológicos complexos.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div>
                  <p className="text-primary text-3xl font-bold mb-1">13+</p>
                  <p className="text-xs uppercase tracking-wider font-bold">Anos de Prática</p>
                </div>
                <div>
                  <p className="text-accent text-3xl font-bold mb-1">5k+</p>
                  <p className="text-xs uppercase tracking-wider font-bold">Pets Atendidos</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="rounded-[40px] overflow-hidden border-8 border-white/10 shadow-2xl">
              <img 
                src="https://lh3.googleusercontent.com/d/1oxtBgW3A527pXwpGWKtU4qbs-UhYOCaF" 
                alt="Dra. Aline Morais em seu consultório" 
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary p-6 rounded-2xl shadow-xl">
              <p translate="no" className="font-bold text-lg">CRMV-RS 12345</p>
              <p className="text-xs opacity-80 uppercase">Médica Veterinária Titular</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contato" className="pt-24 pb-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <Logo />
              <p className="mt-6 text-gray-500 text-sm leading-relaxed">
                A clínica veterinária que entende que seu pet é parte da família. 
                Excelência técnica e carinho em cada detalhe.
              </p>
              <div className="flex gap-4 mt-8">
                <a href="https://instagram.com/annimalivet" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-all">
                  <Instagram size={20} />
                </a>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-all">
                  <MessageCircle size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Onde Estamos</h4>
              <ul className="space-y-4 text-gray-600 text-sm">
                <li className="flex gap-3">
                  <MapPin className="text-primary shrink-0" size={20} />
                  <span translate="no">Avenida Flores da Cunha, 3081<br />Tramandaí - RS, 95590-000</span>
                </li>
                <li className="flex gap-3">
                  <Phone className="text-primary shrink-0" size={20} />
                  <span translate="no">{contactPhone}</span>
                </li>
                <li className="flex gap-3">
                  <Clock className="text-primary shrink-0" size={20} />
                  <span>Seg - Sex: 09h às 18h<br />Sáb: 09h às 12h</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400 font-medium">
            <p>© 2026 Annimali Clínica Veterinária. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary">Política de Privacidade</a>
              <a href="#" className="hover:text-primary">Termos de Uso</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
}
