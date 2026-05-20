import { motion, AnimatePresence } from "motion/react";
import {
  Phone, Mail, MapPin, Clock, ShieldCheck,
  Award, CheckCircle2, ArrowRight,
  ChevronLeft, ChevronRight, Menu, X,
  Star, Scale, FileText, AlertTriangle,
  TrendingUp, Calendar, ChevronDown, Users
} from "lucide-react";
import { useState } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(prev => (prev === index ? null : index));
  };

  const stats = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Kostenloses Erstgespräch",
      desc: "Kein Risiko, kein versteckter Aufwand. Erst beraten, dann entscheiden."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Reaktion innerhalb 24h",
      desc: "Kein Fall wartet. Ich melde mich am selben oder nächsten Werktag."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Über 500 Fälle",
      desc: "Erfahrung, die zählt, wenn es drauf ankommt."
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Direkter Draht",
      desc: "Sie sprechen immer mit mir, nicht mit einem Assistenten."
    }
  ];

  const cases = [
    {
      title: "Verkehrsunfall",
      desc: "Schadenersatz, Schmerzensgeld und Regulierung gegenüber Versicherungen durchsetzen – ich kämpfe für Ihre vollen Ansprüche.",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80",
      cta: "Jetzt beraten lassen"
    },
    {
      title: "Führerscheinentzug",
      desc: "MPU-Begleitung, Widerspruch gegen den Entzug und Antrag auf Wiedererteilung – Ihr Führerschein ist oft zu retten.",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80",
      cta: "Führerschein retten"
    },
    {
      title: "Bußgeldbescheid",
      desc: "Einspruch einlegen, Punkte in Flensburg vermeiden und Verjährungsfristen nutzen – viele Bescheide sind anfechtbar.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80",
      cta: "Bescheid prüfen lassen"
    },
    {
      title: "Fahrerflucht",
      desc: "Sofortige Strafverteidigung, Schadenminimierung und optimale Strategie – handeln Sie jetzt, bevor es zu spät ist.",
      image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80",
      cta: "Sofort handeln"
    },
    {
      title: "Alkohol & Drogen am Steuer",
      desc: "Sofortmaßnahmen nach Polizeikontrolle, Strafverteidigung und Führerscheinsicherung – jede Stunde zählt.",
      image: "https://images.unsplash.com/photo-1544365558-35aa4afcf11f?auto=format&fit=crop&w=800&q=80",
      cta: "Sofort beraten lassen"
    },
    {
      title: "Kfz-Haftpflicht & Versicherung",
      desc: "Regulierungsstreit mit Versicherungen, volle Anspruchsdurchsetzung – ich hole heraus, was Ihnen zusteht.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      cta: "Ansprüche durchsetzen"
    }
  ];

  const [caseIndex, setCaseIndex] = useState(0);

  const nextCase = () => {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;
    const itemsVisible = isMobile ? (window.innerWidth < 640 ? 1 : 2) : 3;
    const maxIndex = cases.length - itemsVisible;
    setCaseIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevCase = () => {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;
    const itemsVisible = isMobile ? (window.innerWidth < 640 ? 1 : 2) : 3;
    const maxIndex = cases.length - itemsVisible;
    setCaseIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const whyLawyer = [
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Fristen verpassen kostet Rechte",
      desc: "Viele Bescheide haben eine Einspruchsfrist von nur 2 Wochen. Wer wartet, verliert. Handeln Sie sofort."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Versicherungen zahlen nicht freiwillig",
      desc: "Ein Anwalt erhöht die durchschnittliche Schadensregulierung nachweislich. Ich verhandle für Sie."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Ein Einspruch lohnt sich",
      desc: "In über 70% der Fälle führt ein anwaltlicher Einspruch zu Reduzierung oder Einstellung des Verfahrens."
    }
  ];

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
      name: "Andreas K.",
      date: "vor 2 Wochen",
      rating: 5,
      text: "Nach meinem Unfall wusste ich nicht weiter. Herr Schneider hat sofort gehandelt, die Versicherung zur Zahlung gebracht und mich nie im Unklaren gelassen. Absolute Empfehlung!",
      initial: "A",
      color: "bg-blue-700"
    },
    {
      name: "Monika S.",
      date: "vor 1 Monat",
      rating: 5,
      text: "Bußgeldbescheid wegen angeblicher Geschwindigkeitsüberschreitung. Herr Schneider hat den Messfehler nachgewiesen – Verfahren eingestellt. Ich hätte das nie alleine geschafft.",
      initial: "M",
      color: "bg-amber-700"
    },
    {
      name: "Thomas B.",
      date: "vor 6 Wochen",
      rating: 5,
      text: "Führerschein drohte weg zu sein. Nach der Beratung war klar: Es gibt Chancen. Einspruch eingelegt, Fahrverbot halbiert. Danke für die schnelle Hilfe!",
      initial: "T",
      color: "bg-teal-700"
    },
    {
      name: "Julia R.",
      date: "vor 3 Monaten",
      rating: 5,
      text: "Das kostenlose Erstgespräch hat mich überzeugt. Ehrliche Einschätzung, klare Strategie, und am Ende deutlich mehr Schadenersatz als die Versicherung angeboten hat.",
      initial: "J",
      color: "bg-indigo-700"
    },
    {
      name: "Peter M.",
      date: "vor 4 Monaten",
      rating: 5,
      text: "Sehr professionell und trotzdem menschlich. Herr Schneider erklärt alles verständlich und ist immer direkt erreichbar. So wünscht man sich einen Anwalt.",
      initial: "P",
      color: "bg-rose-700"
    }
  ];

  const faqs = [
    {
      question: "Was kostet das Erstgespräch?",
      answer: "Das Erstgespräch ist für Sie komplett kostenlos und unverbindlich. Ich höre Ihnen zu, bewerte Ihren Fall ehrlich und sage Ihnen, ob und wie ich helfen kann – ohne versteckte Kosten."
    },
    {
      question: "Übernimmt meine Rechtsschutzversicherung die Kosten?",
      answer: "In der Regel ja. Ich kläre das für Sie direkt mit Ihrer Versicherung – das gehört zu meinem Service. Sie müssen sich um nichts kümmern. Haben Sie keine Rechtsschutzversicherung, besprechen wir gemeinsam die Optionen."
    },
    {
      question: "Wie lange habe ich Zeit für einen Einspruch gegen einen Bußgeldbescheid?",
      answer: "Sie haben genau 2 Wochen ab Zustellung des Bescheids. Danach wird er rechtskräftig und ein Einspruch ist nicht mehr möglich. Warten Sie nicht – rufen Sie mich sofort an."
    },
    {
      question: "Was soll ich direkt nach einem Unfall tun?",
      answer: "Erstens: Unfallstelle sichern, Warndreieck aufstellen und Polizei rufen (auch bei kleineren Unfällen). Zweitens: Fotos von Schäden, Kennzeichen und der Unfallstelle machen, Zeugen notieren. Drittens: Nichts unterschreiben und sofort anwaltlichen Rat holen – bevor Sie mit der Versicherung sprechen."
    },
    {
      question: "Kann ein Führerscheinentzug erfolgreich angefochten werden?",
      answer: "Ja, häufiger als viele denken. Verfahrensfehler bei der Messung, fehlerhafte Zustellung des Bescheids oder unverhältnismäßige Entscheidungen bieten oft Ansatzpunkte für einen erfolgreichen Widerspruch. Im Erstgespräch sage ich Ihnen ehrlich, wie Ihre Chancen stehen."
    },
    {
      question: "Lohnt sich ein Anwalt auch bei kleinen Bußgeldern?",
      answer: "Kommt auf den Fall an. Drohen Punkte in Flensburg, liegt ein Wiederholungsfall vor oder steht ein Fahrverbot im Raum, ist anwaltliche Hilfe fast immer sinnvoll. Im kostenlosen Erstgespräch sage ich Ihnen direkt, ob der Aufwand sich für Sie lohnt."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-brand-accent selection:text-white">

      {/* Top Bar */}
      <div className="hidden lg:block bg-slate-50 border-b border-slate-200 py-2">
        <div className="container-custom flex justify-end items-center gap-6 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-brand-accent" />
            <span>Hauptstraße 42, 80333 München</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-brand-accent" />
            <a href="tel:08198765432" className="hover:text-brand-accent transition-colors">089 – 987 654 32</a>
          </div>
          <div className="flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-brand-accent" />
            <a href="mailto:info@kanzlei-schneider.de" className="hover:text-brand-accent transition-colors">info@kanzlei-schneider.de</a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 py-4 shadow-sm">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-brand-dark p-2 rounded-lg">
              <Scale className="w-6 h-6 text-brand-accent" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-display font-black tracking-tighter uppercase text-brand-dark">
                Kanzlei <span className="text-brand-accent">Schneider</span>
              </span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-0.5">Rechtsanwalt · Verkehrsrecht</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-600">
            <a href="#" className="hover:text-brand-accent transition-colors">Start</a>
            <a href="#leistungen" className="hover:text-brand-accent transition-colors">Leistungen</a>
            <a href="#ueber-mich" className="hover:text-brand-accent transition-colors">Über mich</a>
            <a href="#ablauf" className="hover:text-brand-accent transition-colors">Ablauf</a>
            <a href="#faq" className="hover:text-brand-accent transition-colors">FAQ</a>
            <a
              href="#kontakt"
              className="bg-brand-accent hover:bg-brand-accent-hover text-white px-6 py-2.5 rounded-full flex items-center gap-2 group transition-all shadow-md"
            >
              Erstgespräch buchen
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
              <a href="#ueber-mich" onClick={() => setIsMenuOpen(false)}>Über mich</a>
              <a href="#ablauf" onClick={() => setIsMenuOpen(false)}>Ablauf</a>
              <a href="#faq" onClick={() => setIsMenuOpen(false)}>FAQ</a>
              <a
                href="#kontakt"
                onClick={() => setIsMenuOpen(false)}
                className="bg-brand-accent text-white py-3 rounded-lg text-center"
              >
                Erstgespräch buchen
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] pt-32 pb-44 overflow-hidden flex flex-col justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1600&q=80"
            alt="Rechtsanwalt Verkehrsrecht München"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-dark/85"></div>
        </div>

        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-accent/15 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-brand-accent/20 border border-brand-accent/30 rounded-full px-4 py-2 mb-8">
              <Scale className="w-4 h-4 text-brand-accent" />
              <span className="text-sm font-bold text-white tracking-wide">Kostenlose Erstberatung · München & Umgebung</span>
            </div>

            <h1 className="text-white text-5xl md:text-7xl mb-8 leading-[1.05] font-display font-black tracking-tight">
              Ihr Führerschein.<br />
              Ihr Recht.<br />
              <span className="text-brand-accent">Meine Aufgabe.</span>
            </h1>

            <p className="text-slate-300 text-lg md:text-xl mb-12 max-w-2xl font-medium leading-relaxed">
              Als Rechtsanwalt für Verkehrsrecht stehe ich Ihnen bei Unfällen, Bußgeldbescheiden und Führerscheinentzug zur Seite – schnell, kompetent und persönlich.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#kontakt"
                className="bg-brand-accent hover:bg-brand-accent-hover text-white px-10 py-4 rounded-full font-black text-lg transition-all shadow-[0_20px_50px_rgba(184,134,11,0.35)] flex items-center justify-center gap-3 group"
              >
                Kostenloses Erstgespräch
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:08198765432"
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-10 py-4 rounded-full font-black text-lg transition-all flex items-center justify-center gap-3"
              >
                <Phone className="w-5 h-5 text-brand-accent" />
                Jetzt anrufen
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="relative -mt-20 z-20 mb-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-7 shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-slate-100"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-5">
                  {stat.icon}
                </div>
                <h3 className="font-display font-black text-brand-dark mb-2 text-base leading-tight">{stat.title}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Über mich */}
      <section id="ueber-mich" className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 text-brand-accent font-black text-sm uppercase tracking-widest mb-6">
                <div className="w-8 h-0.5 bg-brand-accent"></div>
                Über mich
              </div>
              <h2 className="text-4xl md:text-5xl mb-8 font-display font-black tracking-tight text-brand-dark leading-tight">
                Ihr Anwalt.<br />
                <span className="text-brand-accent">Persönlich & direkt.</span>
              </h2>
              <p className="text-slate-600 font-medium leading-relaxed mb-6">
                Ich bin seit über 15 Jahren als Rechtsanwalt tätig und habe mich früh auf das Verkehrsrecht spezialisiert. Was mich antreibt: Mandanten in einer stressigen Situation klaren Kopf und starke Argumente geben.
              </p>
              <p className="text-slate-600 font-medium leading-relaxed mb-10">
                Ob Unfallregulierung, Führerscheinverlust oder Bußgeldbescheid – ich kenne die Strategien, die wirklich helfen. Und ich sage Ihnen ehrlich, wenn ein Fall aussichtslos ist.
              </p>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: "15+", label: "Jahre Erfahrung" },
                  { value: "500+", label: "Gewonnene Fälle" },
                  { value: "4,9★", label: "Bewertung" }
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <p className="text-3xl font-display font-black text-brand-accent mb-1">{item.value}</p>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{item.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0dc05ae8b97a?auto=format&fit=crop&w=800&q=80"
                  alt="Rechtsanwalt Schneider"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-brand-accent text-white rounded-2xl p-6 shadow-xl">
                <p className="font-display font-black text-3xl">Zugelassen</p>
                <p className="text-sm font-bold opacity-90">Rechtsanwaltskammer München</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="py-12 bg-white border-y border-slate-100 overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
        <motion.div
          animate={{ x: [0, -1200] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-16 items-center"
        >
          {[...partners, ...partners, ...partners].map((p, i) => (
            <img key={i} src={p.logo} alt={p.name} className="h-8 opacity-30 hover:opacity-60 transition-opacity shrink-0" />
          ))}
        </motion.div>
      </section>

      {/* Leistungen / Falltypen */}
      <section id="leistungen" className="section-padding bg-slate-50 overflow-hidden">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 text-brand-accent font-black text-sm uppercase tracking-widest mb-4">
                <div className="w-8 h-0.5 bg-brand-accent"></div>
                Meine Leistungen
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight text-brand-dark">
                Womit ich Ihnen helfe
              </h2>
            </div>
            <div className="flex gap-3">
              <button
                onClick={prevCase}
                className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-brand-accent hover:text-white hover:border-brand-accent transition-all shadow-sm"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextCase}
                className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-brand-accent hover:text-white hover:border-brand-accent transition-all shadow-sm"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="overflow-hidden">
            <motion.div
              animate={{ x: `-${caseIndex * (100 / 3)}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex gap-6"
            >
              {cases.map((c, i) => (
                <div key={i} className="w-full sm:w-1/2 lg:w-1/3 shrink-0">
                  <div className="bg-white rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-slate-100 group h-full flex flex-col">
                    <div className="overflow-hidden h-56">
                      <img
                        src={c.image}
                        alt={c.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-8 flex flex-col flex-1">
                      <h3 className="text-xl font-display font-black text-brand-dark mb-3">{c.title}</h3>
                      <p className="text-slate-500 font-medium leading-relaxed text-sm mb-6 flex-1">{c.desc}</p>
                      <a
                        href="#kontakt"
                        className="inline-flex items-center gap-2 text-brand-accent font-black text-sm hover:gap-3 transition-all"
                      >
                        {c.cta}
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Warum ein Anwalt? */}
      <section className="section-padding bg-brand-dark">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-brand-accent font-black text-sm uppercase tracking-widest mb-4">
              <div className="w-8 h-0.5 bg-brand-accent"></div>
              Warum ein Anwalt?
              <div className="w-8 h-0.5 bg-brand-accent"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight text-white mb-4">
              Drei Gründe, die zählen
            </h2>
            <p className="text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
              Viele unterschätzen, was auf dem Spiel steht. Ich helfe Ihnen, Ihre Rechte zu sichern.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyLawyer.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all"
              >
                <div className="w-16 h-16 rounded-2xl bg-brand-accent/20 flex items-center justify-center text-brand-accent mx-auto mb-6">
                  {item.icon}
                </div>
                <h3 className="font-display font-black text-white mb-3 text-lg text-center">{item.title}</h3>
                <p className="text-slate-400 text-sm font-medium leading-relaxed text-center">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section id="ablauf" className="py-20 md:py-32 bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-brand-accent font-black text-sm uppercase tracking-widest mb-4">
              <div className="w-8 h-0.5 bg-brand-accent"></div>
              Ablauf
              <div className="w-8 h-0.5 bg-brand-accent"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight text-brand-dark">
              So arbeiten wir zusammen
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-slate-200 z-0"></div>
            {[
              { step: "01", icon: <Phone className="w-6 h-6" />, title: "Kostenloses Erstgespräch", desc: "Schildern Sie mir Ihren Fall – telefonisch oder persönlich. Kostenlos und unverbindlich." },
              { step: "02", icon: <FileText className="w-6 h-6" />, title: "Fallbewertung & Kosten", desc: "Ich bewerte Ihre Chancen ehrlich und kläre die Kostenübernahme durch Ihre Rechtsschutz." },
              { step: "03", icon: <Scale className="w-6 h-6" />, title: "Strategie entwickeln", desc: "Gemeinsam legen wir die optimale Vorgehensweise fest – transparent und nachvollziehbar." },
              { step: "04", icon: <Award className="w-6 h-6" />, title: "Vollständige Vertretung", desc: "Ich übernehme den gesamten Schriftverkehr mit Behörden, Versicherungen und Gerichten." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 rounded-full bg-white border-2 border-brand-accent/30 flex items-center justify-center text-brand-accent shadow-lg mb-6">
                  {item.icon}
                </div>
                <span className="text-[10px] font-black text-brand-accent uppercase tracking-[0.3em] mb-2">{item.step}</span>
                <h3 className="font-display font-black text-brand-dark mb-3 text-base">{item.title}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bewertungen */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container-custom mb-12">
          <div className="inline-flex items-center gap-2 text-brand-accent font-black text-sm uppercase tracking-widest mb-4">
            <div className="w-8 h-0.5 bg-brand-accent"></div>
            Bewertungen
          </div>
          <h2 className="text-4xl md:text-5xl mb-6 font-display font-black tracking-tight text-brand-dark">Was meine Mandanten sagen</h2>
          <p className="text-slate-500 font-medium leading-relaxed max-w-2xl">
            Unfälle, Bußgelder, Führerscheinverlust – echte Menschen, echte Ergebnisse.
          </p>
        </div>

        <div className="relative flex">
          <motion.div
            animate={{ x: [0, -1920] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
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
                  <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                  </svg>
                </div>
                <div className="flex text-yellow-400 gap-0.5 mb-4">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 font-medium leading-relaxed text-sm">{review.text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-brand-accent font-black text-sm uppercase tracking-widest mb-4">
              <div className="w-8 h-0.5 bg-brand-accent"></div>
              Häufige Fragen
              <div className="w-8 h-0.5 bg-brand-accent"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight text-brand-dark mb-4">
              Fragen & Antworten
            </h2>
            <p className="text-slate-500 font-medium max-w-2xl mx-auto">
              Die wichtigsten Fragen, die mir Mandanten stellen – ehrlich beantwortet.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="font-display font-black text-brand-dark text-base pr-4">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openFaq === i ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0 w-8 h-8 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-slate-600 font-medium leading-relaxed text-sm border-t border-slate-100 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Sektion */}
      <section id="kontakt" className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1600&q=80"
            alt="Kanzlei Hintergrund"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-dark/95 backdrop-blur-sm"></div>
        </div>

        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-accent/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-white text-4xl md:text-6xl mb-6 leading-[1.15] font-display font-black tracking-tight">
              Warten Sie nicht.<br />
              <span className="text-brand-accent">Fristen laufen.</span>
            </h2>
            <p className="text-slate-300 text-lg md:text-xl mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
              Das Erstgespräch ist kostenlos, unverbindlich und kann alles verändern. Ich sage Ihnen ehrlich, wie Ihre Chancen stehen.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
              <a
                href="#"
                className="bg-brand-accent hover:bg-brand-accent-hover text-white px-14 py-5 rounded-full font-black text-xl transition-all shadow-[0_20px_50px_rgba(184,134,11,0.3)] flex items-center justify-center gap-3 group"
              >
                <Calendar className="w-6 h-6" />
                Termin vereinbaren
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:08198765432"
                className="bg-white hover:bg-slate-50 text-brand-dark px-14 py-5 rounded-full font-black text-xl transition-all shadow-2xl flex items-center justify-center gap-3"
              >
                <Phone className="w-6 h-6 text-brand-accent" />
                Jetzt anrufen
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-12 border-t border-white/10">
              <div className="flex flex-col items-center">
                <p className="text-brand-accent font-black text-2xl mb-2 tracking-tight">089 – 987 654 32</p>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em]">Direktlinie</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-brand-accent font-black text-2xl mb-2 tracking-tight">Mo–Fr 8–18 Uhr</p>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em]">Erreichbarkeit</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-white font-black text-xl mb-2 tracking-tight lowercase">info@kanzlei-schneider.de</p>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em]">E-Mail</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-20 pb-10 border-t border-slate-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1">
              <div className="flex items-center gap-2 mb-8">
                <div className="bg-brand-dark p-2 rounded-lg">
                  <Scale className="w-5 h-5 text-brand-accent" />
                </div>
                <span className="text-lg font-display font-black tracking-tighter uppercase text-brand-dark">
                  Kanzlei <span className="text-brand-accent">Schneider</span>
                </span>
              </div>
              <p className="text-slate-500 font-medium leading-relaxed text-sm mb-8">
                Rechtsanwalt für Verkehrsrecht in München. Persönlich, direkt, erfolgreich.
              </p>
            </div>

            <div>
              <h4 className="text-brand-dark font-black text-sm uppercase tracking-widest mb-8">Navigation</h4>
              <ul className="space-y-4 text-sm font-bold text-slate-500 uppercase tracking-tighter">
                <li><a href="#" className="hover:text-brand-accent transition-colors">Startseite</a></li>
                <li><a href="#leistungen" className="hover:text-brand-accent transition-colors">Leistungen</a></li>
                <li><a href="#faq" className="hover:text-brand-accent transition-colors">FAQ</a></li>
                <li><a href="#kontakt" className="hover:text-brand-accent transition-colors">Erstgespräch</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-brand-dark font-black text-sm uppercase tracking-widest mb-8">Kontakt</h4>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-brand-accent shrink-0" />
                  <p className="text-sm font-bold text-slate-600">Hauptstraße 42,<br/> 80333 München</p>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-brand-accent shrink-0" />
                  <p className="text-sm font-bold text-slate-600">Mo–Fr: 08:00 – 18:00<br/>Nach Vereinbarung</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-brand-dark font-black text-sm uppercase tracking-widest mb-8">Zulassung</h4>
              <div className="bg-slate-50 p-6 rounded-2xl border border-dotted border-slate-300">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 text-center">Rechtsanwalt</p>
                <div className="flex justify-center mb-4">
                  <Scale className="w-10 h-10 text-brand-dark" />
                </div>
                <p className="text-center font-bold text-xs text-slate-600">Zugelassen bei der Rechtsanwaltskammer München</p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-400 text-xs font-bold">© {new Date().getFullYear()} Kanzlei Schneider. <br className="md:hidden"/> Alle Rechte vorbehalten.</p>
            <div className="flex gap-8 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              <a href="#" className="hover:text-brand-dark">Impressum</a>
              <a href="#" className="hover:text-brand-dark">Datenschutz</a>
              <a href="#" className="hover:text-brand-dark">Cookies</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
