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
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  Calculator,
  MessageCircle,
  Stethoscope,
  Star
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
    },
    {
      title: "Dachsanierung",
      desc: "Umfassende energetische und optische Sanierung Ihres Daches – für Werterhalt, Schutz vor Witterung und moderne Energieeffizienz.",
      image: "https://images.unsplash.com/photo-1482731215275-a1f151646268?auto=format&fit=crop&q=80&w=800",
      cta: "Jetzt anfragen"
    },
    {
      title: "Neueindeckung",
      desc: "Hochwertige Neueindeckungen mit modernen Ziegeln, Schiefer oder Metall – passgenau für Ihr Gebäude und Ihren individuellen Stil.",
      image: "https://images.unsplash.com/photo-1518349619113-03114f06ac3a?auto=format&fit=crop&q=80&w=800",
      cta: "Jetzt anfragen"
    },
    {
      title: "Dachreparaturen",
      desc: "Schnelle und fachgerechte Reparatur von Sturmschäden, Undichtigkeiten oder defekten Anschlüssen – damit Ihr Haus geschützt bleibt.",
      image: "https://images.unsplash.com/photo-1498322676051-57d6051d95c4?auto=format&fit=crop&q=80&w=800",
      cta: "Jetzt anfragen"
    }
  ];

  const [serviceIndex, setServiceIndex] = useState(0);

  const nextService = () => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;
    const itemsVisible = isMobile ? (window.innerWidth < 640 ? 1 : 2) : 3;
    const maxIndex = services.length - itemsVisible;
    setServiceIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevService = () => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;
    const itemsVisible = isMobile ? (window.innerWidth < 640 ? 1 : 2) : 3;
    const maxIndex = services.length - itemsVisible;
    setServiceIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const partners = [
    { name: "Partner 1", logo: "https://sichtbr.b-cdn.net/Dachdecker%20Sample%20Site/Beispiel%20Logos/logoipsum-232.svg" },
    { name: "Partner 2", logo: "https://sichtbr.b-cdn.net/Dachdecker%20Sample%20Site/Beispiel%20Logos/logoipsum-242.svg" },
    { name: "Partner 3", logo: "https://sichtbr.b-cdn.net/Dachdecker%20Sample%20Site/Beispiel%20Logos/logoipsum-332.svg" },
    { name: "Partner 4", logo: "https://sichtbr.b-cdn.net/Dachdecker%20Sample%20Site/Beispiel%20Logos/logoipsum-348.svg" },
    { name: "Partner 5", logo: "https://sichtbr.b-cdn.net/Dachdecker%20Sample%20Site/Beispiel%20Logos/logoipsum-356.svg" },
    { name: "Partner 6", logo: "https://sichtbr.b-cdn.net/Dachdecker%20Sample%20Site/Beispiel%20Logos/logoipsum-404.svg" },
    { name: "Partner 7", logo: "https://sichtbr.b-cdn.net/Dachdecker%20Sample%20Site/Beispiel%20Logos/logoipsum-408.svg" },
    { name: "Partner 8", logo: "https://sichtbr.b-cdn.net/Dachdecker%20Sample%20Site/Beispiel%20Logos/logoipsum-414.svg" }
  ];

  const reviews = [
    {
      name: "Tobias M. aus Brackel",
      date: "vor 2 Monaten",
      rating: 5,
      text: "Hatten ein Problem am Flachdach. Hr. Hoffmann kam sofort zur Besichtigung. Die Abdichtung wurde fachgerecht und sauber ausgeführt. Sehr zufrieden!",
      initial: "T",
      color: "bg-emerald-600"
    },
    {
      name: "Anja S. aus Hörde",
      date: "vor 4 Monaten",
      rating: 5,
      text: "Kompetente Beratung bei unseren neuen Dachfenstern. Einbau verlief reibungslos und die Baustelle wurde top hinterlassen. Gerne wieder!",
      initial: "A",
      color: "bg-indigo-600"
    },
    {
      name: "Jan W. aus Aplerbeck",
      date: "vor 6 Monaten",
      rating: 5,
      text: "Dachsanierung ist Vertrauenssache. Hier hat von der Planung bis zur Abnahme alles gepasst. Klare Kommunikation und faires Angebot.",
      initial: "J",
      color: "bg-amber-600"
    },
    {
      name: "Sabine K. aus Holzwickede",
      date: "vor 3 Wochen",
      rating: 5,
      text: "Schnelle Hilfe nach dem letzten Sturm! Ein Ziegel war locker, wurde am nächsten Tag direkt erledigt. Super Service!",
      initial: "S",
      color: "bg-cyan-600"
    },
    {
      name: "Bernd R. aus Schwerte",
      date: "vor 1 Jahr",
      rating: 5,
      text: "Haben unser Dach komplett neu eindecken lassen. Die Jungs verstehen ihr Handwerk. Sieht klasse aus und ist absolut dicht.",
      initial: "B",
      color: "bg-rose-600"
    }
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

            <div className="flex flex-wrap xl:flex-nowrap justify-center gap-3 md:gap-4 mb-16 text-center w-full">
              {[
                { text: "Festpreis & Termintreue", icon: <CheckCircle2 className="w-5 h-5 text-brand-accent" /> },
                { text: "24/7 Notdienst", icon: <Clock className="w-5 h-5 text-brand-accent" /> },
                { text: "5.0 Google Rating", icon: <Star className="w-5 h-5 fill-current text-yellow-400" /> },
                { text: "Innungsfachbetrieb", icon: <ShieldCheck className="w-5 h-5 text-brand-accent" /> }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/10 backdrop-blur-xl px-4 py-2.5 rounded-xl border border-white/20 shadow-2xl transition-transform hover:scale-105 whitespace-nowrap">
                  <div className="shrink-0">
                    {item.icon}
                  </div>
                  <span className="font-extrabold text-[11px] md:text-[12px] text-white uppercase tracking-[0.1em]">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
              <a 
                href="#leistungen"
                className="bg-brand-accent hover:bg-brand-accent-hover text-white px-12 py-5 rounded-full font-black text-xl inline-flex items-center justify-center gap-3 transition-all shadow-[0_20px_50px_rgba(230,57,70,0.3)] group"
              >
                Kostenlose Beratung
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="tel:02314788920"
                className="bg-white hover:bg-slate-50 text-brand-dark px-12 py-5 rounded-full font-black text-xl inline-flex items-center justify-center gap-3 transition-all shadow-2xl"
              >
                <Phone className="w-6 h-6 text-brand-accent" />
                0231 4788 920
              </a>
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

      {/* 5. Partner Section (Continuous Scrolling) */}
      <section className="py-12 bg-white border-y border-slate-100 overflow-hidden relative">
        <div className="flex">
          {/* Marquee Animation */}
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="flex items-center gap-12 md:gap-24 pr-12 md:pr-24"
          >
            {[...partners, ...partners, ...partners, ...partners].map((partner, i) => (
              <div key={i} className="h-8 md:h-10 opacity-30 grayscale brightness-0 hover:opacity-100 transition-all shrink-0">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="h-full w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </motion.div>
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

          <div className="relative">
            {/* Arrows */}
            <button 
              onClick={prevService}
              className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-30 bg-white shadow-xl p-4 rounded-full text-brand-dark hover:bg-brand-accent hover:text-white transition-all border border-slate-100 hidden sm:flex"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextService}
              className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-30 bg-white shadow-xl p-4 rounded-full text-brand-dark hover:bg-brand-accent hover:text-white transition-all border border-slate-100 hidden sm:flex"
            >
              <ChevronRight size={24} />
            </button>

            <div className="overflow-hidden px-4 md:px-0">
              <motion.div 
                animate={{ x: `-${serviceIndex * (100 / (typeof window !== 'undefined' && window.innerWidth < 640 ? 1 : (window.innerWidth < 1024 ? 2 : 3)))}%` }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="flex gap-6 md:gap-8"
              >
                {services.map((service, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -10 }}
                    className="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)] group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-slate-100 flex flex-col"
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
              </motion.div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-16">
            {services.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setServiceIndex(Math.min(i, services.length - (typeof window !== 'undefined' && window.innerWidth < 640 ? 1 : (window.innerWidth < 1024 ? 2 : 3))))}
                className={`w-3 h-3 rounded-full transition-all ${i === serviceIndex ? 'bg-brand-accent w-8' : 'bg-slate-200'}`}
              ></button>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Testimonials Section (Continuous Scrolling) */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block border border-slate-200 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-6">
              Vertrauen entsteht durch Ergebnisse
            </div>
            <h2 className="text-4xl md:text-5xl mb-6 font-display font-black tracking-tight">Was unsere Kunden über uns sagen</h2>
            <p className="text-slate-500 font-medium leading-relaxed">
              Ob Neueindeckung, Sanierung oder Reparatur: Unsere Kunden schätzen klare Absprachen, saubere Ausführung und ein Ergebnis, das langfristig hält.
            </p>
          </div>
        </div>

        <div className="relative flex">
          {/* Marquee Animation */}
          <motion.div 
            animate={{ x: [0, -1920] }}
            transition={{ 
              duration: 40, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="flex gap-6 pr-6"
          >
            {[...reviews, ...reviews, ...reviews].map((review, i) => (
              <div 
                key={i} 
                className="w-[350px] shrink-0 bg-white border border-slate-100 rounded-2xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex gap-4 items-center">
                    <div className={`w-12 h-12 rounded-full ${review.color} flex items-center justify-center text-white font-bold text-lg`}>
                      {review.initial}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 leading-none mb-1">{review.name}</h4>
                      <p className="text-xs text-slate-400 font-medium">{review.date}</p>
                    </div>
                  </div>
                  <svg viewBox="0 0 24 24" className="w-5 h-5">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                  </svg>
                </div>
                <div className="flex text-yellow-400 gap-0.5 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 font-medium leading-relaxed text-sm">
                  {review.text}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 8. Final CTA Section */}
      <section id="kontakt" className="relative py-24 md:py-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1635424710928-0544e8512eae?auto=format&fit=crop&q=80&w=2600" 
            alt="Dacharbeiten Hintergrund"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-dark/95 backdrop-blur-sm"></div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-accent/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-white text-4xl md:text-6xl mb-10 leading-[1.15] font-display font-black tracking-tight">
              Ihr Dach braucht einen Profi? <br className="hidden md:block"/>
              <span className="text-brand-accent">Holen Sie sich jetzt Ihr Angebot.</span>
            </h2>
            <p className="text-slate-300 text-lg md:text-xl mb-14 max-w-3xl mx-auto font-medium leading-relaxed">
              Egal ob kleine Reparatur oder komplette Neueindeckung – <br className="hidden md:block"/> wir beraten Sie ehrlich, fachmännisch und vollkommen unverbindlich.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-20">
              <a 
                href="https://tidycal.com/1g2p203/kostenlose-dachinspektion"
                className="bg-brand-accent hover:bg-brand-accent-hover text-white px-14 py-5 rounded-full font-black text-xl transition-all shadow-[0_20px_50px_rgba(230,57,70,0.3)] flex items-center justify-center gap-3 group"
              >
                <Calculator className="w-6 h-6" />
                Zum Konfigurator
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="tel:02314788920"
                className="bg-white hover:bg-slate-50 text-brand-dark px-14 py-5 rounded-full font-black text-xl transition-all shadow-2xl flex items-center justify-center gap-3"
              >
                <Phone className="w-6 h-6 text-brand-accent" />
                Rückruf anfordern
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-12 border-t border-white/10">
              <div className="flex flex-col items-center">
                <p className="text-brand-accent font-black text-2xl mb-2 tracking-tight">0231 – 47 88 92 0</p>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em]">Zentrale Dortmund</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-brand-accent font-black text-2xl mb-2 tracking-tight">0231 – 47 88 92 99</p>
                <p className="text-[10px] font-bold text-[#e63946] uppercase tracking-[0.3em]">24/7 Notdienst</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-white font-black text-xl mb-2 tracking-tight lowercase">info@hoffmann-dachtechnik.de</p>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em]">E-Mail Kontakt</p>
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
