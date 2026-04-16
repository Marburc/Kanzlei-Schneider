import { motion } from "motion/react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Hammer, 
  Users, 
  Truck, 
  Award, 
  CheckCircle2, 
  ArrowRight,
  Menu,
  X,
  ChevronRight,
  Calculator,
  MessageCircle,
  Stethoscope
} from "lucide-react";
import { useState } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const stats = [
    { icon: <Clock className="w-6 h-6" />, title: "Schnelle Hilfe bei Schäden", desc: "Kurzfristige Terminvergabe bei Sturmschäden, Undichtigkeit oder losem Material" },
    { icon: <Calculator className="w-6 h-6" />, title: "Transparente Kalkulation", desc: "Klare Positionen, nachvollziehbarer Umfang – damit Preis und Leistung zusammenpassen" },
    { icon: <Award className="w-6 h-6" />, title: "Meisterqualität bis ins Detail", desc: "Anschlüsse, Abdichtung, First & Traufe fachgerecht ausgeführt – für dauerhafte Dichtheit" },
    { icon: <Stethoscope className="w-6 h-6" />, title: "Kostenlose Ersteinschätzung", desc: "Vorab telefonisch oder vor Ort: Zustand bewerten, Vorgehen empfehlen, sauber planen" }
  ];

  const services = [
    {
      title: "Flachdach & Abdichtung",
      desc: "Zuverlässige Abdichtung und Instandsetzung für Flachdächer – funktional, langlebig und auf die Nutzung abgestimmt.",
      image: "https://images.unsplash.com/photo-1633158829585-23ba8f7c8acc?auto=format&fit=crop&q=80&w=800",
      cta: "Jetzt anfragen"
    },
    {
      title: "Dachfenster",
      desc: "Einbau, Austausch oder Nachrüstung von Dachfenstern für mehr Tageslicht, besseren Wohnkomfort und saubere Anschlüsse.",
      image: "https://images.unsplash.com/photo-1516714819001-8ee7a13b71d7?auto=format&fit=crop&q=80&w=800",
      cta: "Jetzt anfragen"
    },
    {
      title: "Wärmedämmung",
      desc: "Optimierte Dachdämmung für geringeren Wärmeverlust, spürbaren Wohnkomfort und eine verbesserte Energieeffizienz Ihres Hauses.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800",
      cta: "Jetzt anfragen"
    }
  ];

  const partners = [
    { name: "Velux", logo: "VELUX" },
    { name: "Würth", logo: "WÜRTH" },
    { name: "Rheinzink", logo: "RHEINZINK" },
    { name: "Gutex", logo: "GUTEX" },
    { name: "Braas", logo: "BRAAS" }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-brand-accent selection:text-white">
      
      {/* 0. Top Bar */}
      <div className="hidden lg:block bg-slate-50 border-b border-slate-200 py-2">
        <div className="container-custom flex justify-end items-center gap-6 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-brand-accent" />
            <span>Herkulesstraße 14, 44145 Dortmund</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-brand-accent" />
            <a href="tel:02314788920" className="hover:text-brand-accent transition-colors">0231 – 47 88 92 0</a>
          </div>
          <div className="flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-brand-accent" />
            <a href="mailto:info@hoffmann-dachtechnik.de" className="hover:text-brand-accent transition-colors">info@hoffmann-dachtechnik.de</a>
          </div>
        </div>
      </div>

      {/* 1. Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 py-4 shadow-sm">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-brand-dark p-2 rounded-lg">
              <Hammer className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-display font-black tracking-tighter uppercase text-brand-dark">
                Hoffmann <span className="text-brand-accent">Dachtechnik</span>
              </span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-0.5">Meisterbetrieb</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-10 text-sm font-bold text-slate-600">
            <a href="#" className="hover:text-brand-accent transition-colors">Start</a>
            <a href="#leistungen" className="hover:text-brand-accent transition-colors">Leistungen</a>
            <a href="#vorteile" className="hover:text-brand-accent transition-colors">Ihre Vorteile</a>
            <a href="#kontakt" className="hover:text-brand-accent transition-colors">Kontakt</a>
            <a 
              href="https://tidycal.com/1g2p203/kostenlose-dachinspektion"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-dark hover:bg-slate-800 text-white px-6 py-2.5 rounded-full flex items-center gap-2 group transition-all shadow-md"
            >
              Jetzt anfragen
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-brand-dark">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6 font-bold text-slate-700">
              <a href="#" onClick={() => setIsMenuOpen(false)}>Start</a>
              <a href="#leistungen" onClick={() => setIsMenuOpen(false)}>Leistungen</a>
              <a href="#kontakt" onClick={() => setIsMenuOpen(false)}>Kontakt</a>
              <a 
                href="https://tidycal.com/1g2p203/kostenlose-dachinspektion"
                className="bg-brand-accent text-white py-3 rounded-lg text-center"
              >
                Jetzt Termin vereinbaren
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* 2. Hero Section */}
      <section className="relative min-h-[80vh] pt-32 pb-44 overflow-hidden flex flex-col justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1635424710928-0544e8512eae?auto=format&fit=crop&q=80&w=2600" 
            alt="Dachdecker Dortmund Professionell"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-dark/40 backdrop-blur-[0.5px]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/20 via-transparent to-brand-dark/40"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-white text-center flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 mb-8">
              <span className="w-2 h-2 bg-brand-accent rounded-full animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase tracking-widest">Dachdecker Meisterbetrieb Hoffmann</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl mb-8 leading-[1.2] text-center max-w-4xl drop-shadow-lg">
              Wenn’s richtig halten soll: <br className="hidden md:block"/> 
              Dacharbeiten vom <br className="hidden md:block"/>
              Meis­ter­betrieb in Dortmund
            </h1>
            
            <p className="text-base md:text-lg text-slate-100 mb-10 max-w-2xl leading-relaxed drop-shadow-md text-center">
              Vom Vor-Ort-Check bis zur Übergabe läuft alles strukturiert. Ein Ansprechpartner, feste Termine, saubere Baustelle – und ein Dach, auf das Sie sich verlassen können.
            </p>

            <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 mb-12 text-center">
              {[
                "Festpreis & klare Termine",
                "Meisterqualität",
                "24/7 Notdienst"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" />
                  <span className="font-bold text-sm text-white uppercase tracking-wider">{text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
              <a 
                href="#leistungen"
                className="bg-brand-accent hover:bg-brand-accent-hover text-white px-10 py-5 rounded-full font-bold text-lg inline-flex items-center justify-center gap-2 transition-all shadow-2xl group"
              >
                Leistungen entdecken
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="tel:02314788920"
                className="bg-white/20 hover:bg-white/30 text-white border border-white/30 px-10 py-5 rounded-full font-bold text-lg inline-flex items-center justify-center gap-2 transition-all backdrop-blur-md shadow-2xl"
              >
                <Phone className="w-5 h-5" />
                0231 47 88 92 0
              </a>
            </div>

            {/* Trust Elements */}
            <div className="mt-12 flex flex-wrap items-center gap-10 justify-center">
              <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <ShieldCheck className="w-5 h-5 text-brand-accent" />
                <span className="font-bold text-[10px] uppercase tracking-[0.2em]">Innungsbetrieb</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <div className="flex text-yellow-500">
                  {[1,2,3,4,5].map(i => <ChevronRight key={i} className="w-3 h-3 fill-current rotate-90" />)}
                </div>
                <span className="font-bold text-[10px] uppercase tracking-[0.2em]">500+ Projekte</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Floating Feature Grid */}
      <section className="relative -mt-20 z-20 mb-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -8 }}
                className="bg-white p-8 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-slate-50 text-center flex flex-col items-center gap-5 transition-all"
              >
                <div className="w-14 h-14 bg-slate-50 flex items-center justify-center rounded-full text-brand-accent">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold leading-tight">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. About / Main Content Section */}
      <section id="vorteile" className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block bg-brand-accent/5 text-brand-accent px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-widest mb-6">
                Meisterbetrieb aus Dortmund – Handwerk mit Anspruch.
              </div>
              <h2 className="text-4xl md:text-5xl mb-8 leading-tight">
                Ein Dach, das schützt. <br/> 
                Ein Team, das liefert.
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Wir von Hoffmann Dachtechnik sind Ihr Meisterdachdeckerbetrieb für Dachneueindeckung, Sanierung und Reparatur in Dortmund und Umgebung. Bei uns bekommen Sie klare Beratung, saubere Ausführung und ein Ergebnis, das langfristig hält – ohne unnötige Umwege.
              </p>
              
              <ul className="space-y-5 mb-10">
                {[
                  "Meisterliche Ausführung nach Handwerksstandard",
                  "Verbindliche Abläufe mit festem Ansprechpartner",
                  "Transparente Angebote statt pauschaler Versprechen",
                  "Termintreue Umsetzung und ordentliche Baustelle"
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-brand-accent" />
                    </div>
                    <span className="font-bold text-slate-700">{text}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center gap-8">
                <a href="#leistungen" className="bg-brand-dark text-white px-8 py-4 rounded-lg font-bold hover:bg-black transition-all">
                  Leistungen entdecken
                </a>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-brand-accent/5 rounded-full">
                    <Phone className="w-6 h-6 text-brand-accent" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Jetzt anrufen</p>
                    <p className="font-extrabold text-lg">0231 47 88 92 0</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200" 
                alt="Modernes Dach" 
                className="rounded-[2.5rem] shadow-2xl skew-y-2 grayscale-[0.1]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -right-8 bg-brand-accent text-white p-10 rounded-[2rem] shadow-xl text-center">
                <p className="text-6xl font-display font-black mb-1">35+</p>
                <p className="text-xs uppercase font-bold tracking-widest opacity-80">JAHRE ERFAHRUNG</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Partner Section */}
      <section className="py-12 bg-white border-y border-slate-100 overflow-hidden">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all">
            {partners.map((partner, i) => (
              <span key={i} className="text-3xl font-display font-black tracking-tighter">{partner.logo}</span>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Leistungen Section */}
      <section id="leistungen" className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-block bg-brand-dark text-white px-4 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest mb-6">
              Meisterleistung rund ums Dach
            </div>
            <h2 className="text-4xl md:text-5xl mb-8">Unsere Leistungen: Rundum-Dachservice in Dortmund</h2>
            <p className="text-slate-500 font-medium leading-relaxed">
              Wir übernehmen Dachneueindeckungen, Sanierungen und Reparaturen in Dortmund und Umgebung – mit Meisterstandard, sauberer Baustelle und klaren Absprachen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-slate-100 flex flex-col"
              >
                <div className="h-64 overflow-hidden relative">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-brand-dark/0 transition-colors"></div>
                </div>
                <div className="p-10 flex flex-col flex-1">
                  <h3 className="text-2xl mb-4 group-hover:text-brand-accent transition-colors">{service.title}</h3>
                  <p className="text-slate-500 font-medium mb-10 leading-relaxed line-clamp-3">
                    {service.desc}
                  </p>
                  <div className="mt-auto">
                    <a 
                      href="https://tidycal.com/1g2p203/kostenlose-dachinspektion"
                      className="w-full py-4 border-2 border-slate-100 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-brand-dark hover:border-brand-dark hover:text-white transition-all group/btn"
                    >
                      {service.cta}
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-12">
            {[1,2,3,4,5].map(i => (
              <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === 1 ? 'bg-brand-accent' : 'bg-slate-300'}`}></div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Final CTA Section */}
      <section id="kontakt" className="section-padding bg-brand-dark relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-accent/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-accent/5 rounded-full blur-[80px]"></div>
        
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-white text-4xl md:text-6xl mb-8 leading-tight font-display font-black">
              Ihr Dach braucht einen Profi? <br/>
              <span className="text-brand-accent">Holen Sie sich jetzt Ihr Angebot.</span>
            </h2>
            <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium">
              Egal ob kleine Reparatur oder komplette Neueindeckung – wir beraten Sie ehrlich, fachmännisch und unverbindlich.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
              <a 
                href="https://tidycal.com/1g2p203/kostenlose-dachinspektion"
                className="bg-brand-accent hover:bg-brand-accent-hover text-white px-12 py-5 rounded-full font-bold text-xl transition-all shadow-2xl flex items-center justify-center gap-3"
              >
                <Calculator className="w-6 h-6" />
                Zum Konfigurator
              </a>
              <a 
                href="tel:02314788920"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-12 py-5 rounded-full font-bold text-xl transition-all backdrop-blur-md flex items-center justify-center gap-3"
              >
                <Phone className="w-6 h-6" />
                Rückruf anfordern
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 border-t border-white/10">
              <div className="flex flex-col items-center">
                <p className="text-brand-accent font-black text-2xl mb-1">0231 – 47 88 92 0</p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Zentrale Dortmund</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-brand-accent font-black text-2xl mb-1">0231 – 47 88 92 99</p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest text-[#e63946]">24/7 Notdienst</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-white font-black text-xl mb-1">info@hoffmann-dachtechnik.de</p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">E-Mail Kontakt</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 9. Footer */}
      <footer className="bg-white pt-20 pb-10 border-t border-slate-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-8">
                <div className="bg-brand-dark p-2 rounded-lg">
                  <Hammer className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-display font-black tracking-tighter uppercase text-brand-dark">
                  Hoffmann <span className="text-brand-accent">Dachtechnik</span>
                </span>
              </div>
              <p className="text-slate-500 font-medium leading-relaxed text-sm mb-8">
                Fachbetrieb für Dachhandwerk im Ruhrgebiet. Kompetenz und Verlässlichkeit seit zwei Generationen.
              </p>
              <div className="flex gap-4">
                {[1,2,3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:text-brand-accent transition-colors cursor-pointer">
                    <CheckCircle2 size={16} />
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-brand-dark font-black text-sm uppercase tracking-widest mb-8">Navigation</h4>
              <ul className="space-y-4 text-sm font-bold text-slate-500 uppercase tracking-tighter">
                <li><a href="#" className="hover:text-brand-accent transition-colors">Startseite</a></li>
                <li><a href="#leistungen" className="hover:text-brand-accent transition-colors">Dienstleistungen</a></li>
                <li><a href="#" className="hover:text-brand-accent transition-colors">Über Uns</a></li>
                <li><a href="#kontakt" className="hover:text-brand-accent transition-colors">Termin buchen</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-brand-dark font-black text-sm uppercase tracking-widest mb-8">Standort</h4>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-brand-accent shrink-0" />
                  <p className="text-sm font-bold text-slate-600">Herkulesstraße 14,<br/> 44145 Dortmund</p>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-brand-accent shrink-0" />
                  <p className="text-sm font-bold text-slate-600">Mo–Fr: 07:30 – 17:00 <br/>Notdienst: 24/7</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-brand-dark font-black text-sm uppercase tracking-widest mb-8">Zertifiziert</h4>
              <div className="bg-slate-50 p-6 rounded-2xl border border-dotted border-slate-300">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 text-center">Meisterbetrieb</p>
                <div className="flex justify-center mb-4">
                  <Award className="w-10 h-10 text-brand-dark" />
                </div>
                <p className="text-center font-bold text-xs text-slate-600">Offizieller Partner der Handwerks­kammer Dortmund</p>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-400 text-xs font-bold">© {new Date().getFullYear()} Hoffmann Dachtechnik GmbH. <br className="md:hidden"/> Alle Rechte vorbehalten.</p>
            <div className="flex gap-8 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              <a href="#" className="hover:text-brand-dark">Impressum</a>
              <a href="#" className="hover:text-brand-dark">Datenschutz</a>
              <a href="#" className="hover:text-brand-dark">Cookies</a>
            </div>
          </div>
        </div>
      </footer>

      {/* 8. Chat-Widget Platzhalter */}
      {/* CHAT WIDGET HIER EINFÜGEN */}
    </div>
  );
}
