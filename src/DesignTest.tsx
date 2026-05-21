import { Phone, Shield, Clock, Star, ChevronRight, CheckCircle2, ArrowRight, Scale } from 'lucide-react';

/* ─────────────────────────────────────────────
   VARIANTE 0 — Original Hero ohne Formular
   Gleicher Hintergrund wie Homepage (Gradient + SVG-Linien),
   links Text + Badges + CTA, rechts Anwalt-Foto
───────────────────────────────────────────── */
function HeroOriginal() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-amber-50/20">
      {/* SVG Straßenlinien — identisch mit Homepage */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="roadGlow2" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>
          <path d="M 1350 920 C 1200 750, 950 650, 820 500 C 700 360, 780 200, 1000 20" stroke="#b8860b" strokeWidth="1" fill="none" opacity="0.2" filter="url(#roadGlow2)" />
          <path d="M 1350 920 C 1200 750, 950 650, 820 500 C 700 360, 780 200, 1000 20" stroke="#b8860b" strokeWidth="0.5" fill="none" opacity="0.35" />
          <path d="M 1200 920 C 1070 750, 840 650, 720 500 C 610 360, 700 200, 920 20" stroke="#b8860b" strokeWidth="1" fill="none" opacity="0.15" filter="url(#roadGlow2)" />
          <path d="M 1200 920 C 1070 750, 840 650, 720 500 C 610 360, 700 200, 920 20" stroke="#b8860b" strokeWidth="0.5" fill="none" opacity="0.25" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Links: Text + Badges + CTA */}
        <div>
          <div className="inline-flex items-center gap-2 bg-amber-600/10 border border-amber-600/25 rounded-full px-4 py-2 mb-8">
            <Scale className="w-4 h-4 text-amber-600" />
            <span className="text-sm font-bold text-[#1e3a5f] tracking-wide">Kostenlose Erstberatung · Berlin & Umgebung</span>
          </div>

          <h1 className="text-[#1e3a5f] text-5xl md:text-6xl mb-6 leading-[1.05] font-display font-black tracking-tight">
            Ihr Anwalt für<br />
            <span className="text-amber-600">Verkehrsrecht</span><br />
            in Berlin.
          </h1>

          <p className="text-slate-600 text-lg mb-10 font-medium leading-relaxed">
            Bei Unfällen, Bußgeldbescheiden und Führerscheinentzug – schnell, kompetent und persönlich.
          </p>

          {/* Trust-Badges */}
          <div className="flex flex-wrap items-center gap-3 mb-10">
            <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-2 shadow-sm">
              <div className="flex text-yellow-400 gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
              </div>
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
              </svg>
              <span className="text-slate-700 text-xs font-bold">4,9 · Google</span>
            </div>
            <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-2 shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-amber-600" />
              <span className="text-slate-700 text-xs font-bold">500+ Fälle</span>
            </div>
            <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-2 shadow-sm">
              <Clock className="w-4 h-4 text-amber-600" />
              <span className="text-slate-700 text-xs font-bold">Antwort in 24h</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a href="#kontakt" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-black px-8 py-4 rounded-full transition-all shadow-lg text-base">
              Jetzt kostenlos anfragen
              <ChevronRight className="w-5 h-5" />
            </a>
            <a href="tel:+4989123456" className="inline-flex items-center gap-2 bg-white border border-slate-200 hover:border-amber-600 text-slate-700 font-black px-7 py-4 rounded-full transition-all shadow-sm text-base">
              <Phone className="w-5 h-5 text-amber-600" />
              089 – 123 456 78
            </a>
          </div>
        </div>

        {/* Rechts: Anwalt-Foto */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md">
            {/* Dezente Hintergrund-Form hinter dem Bild */}
            <div className="absolute -inset-4 bg-amber-50/60 rounded-3xl -z-10" />
            <img
              src="/about-us.png"
              alt="Rechtsanwalt Schneider"
              className="w-full h-[560px] object-cover object-right rounded-3xl shadow-2xl"
            />
            {/* Floating Badge */}
            <div className="absolute bottom-6 -left-6 bg-white rounded-2xl shadow-xl px-5 py-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center">
                <Shield className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <p className="font-black text-[#1e3a5f] text-sm leading-none mb-0.5">15 Jahre Erfahrung</p>
                <p className="text-slate-400 text-xs">im Verkehrsrecht</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   VARIANTE 0B — Foto als Vollbild-Hintergrund
   about-us.png deckt die ganze Section ab (object-cover),
   dunkler Overlay links, Text + CTAs oben drüber
───────────────────────────────────────────── */
function HeroPhotoBg() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Hintergrundbild */}
      <img
        src="/about-us.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-right"
      />
      {/* Gradient-Overlay: links dunkel → rechts transparent */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a5f]/90 via-[#1e3a5f]/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 py-28">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-8">
            <Scale className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-bold text-white tracking-wide">Kostenlose Erstberatung · Berlin & Umgebung</span>
          </div>

          <h1 className="text-white text-5xl md:text-6xl mb-6 leading-[1.05] font-display font-black tracking-tight">
            Ihr Anwalt für<br />
            <span className="text-amber-400">Verkehrsrecht</span><br />
            in Berlin.
          </h1>

          <p className="text-white/80 text-lg mb-10 font-medium leading-relaxed">
            Bei Unfällen, Bußgeldbescheiden und Führerscheinentzug – schnell, kompetent und persönlich.
          </p>

          {/* Trust-Badges */}
          <div className="flex flex-wrap items-center gap-3 mb-10">
            <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <div className="flex text-yellow-400 gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
              </div>
              <span className="text-white text-xs font-bold">4,9 · Google</span>
            </div>
            <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              <span className="text-white text-xs font-bold">500+ Fälle</span>
            </div>
            <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <Clock className="w-4 h-4 text-amber-400" />
              <span className="text-white text-xs font-bold">Antwort in 24h</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a href="#kontakt" className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-[#1e3a5f] font-black px-8 py-4 rounded-full transition-all shadow-lg text-base">
              Jetzt kostenlos anfragen
              <ChevronRight className="w-5 h-5" />
            </a>
            <a href="tel:+4989123456" className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 hover:bg-white/25 text-white font-black px-7 py-4 rounded-full transition-all text-base">
              <Phone className="w-5 h-5" />
              089 – 123 456 78
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function NavLabel({ label }: { label: string }) {
  return (
    <div className="sticky top-0 z-50 bg-yellow-400 text-yellow-900 text-center text-xs font-black tracking-widest uppercase py-2">
      {label}
    </div>
  );
}

/* ─────────────────────────────────────────────
   VARIANTE A — Dark & Impactful
   Dunkler Navy-Hintergrund, goldener Akzent-Text,
   große Headline, CTA links, Vertrauens-Badges rechts
───────────────────────────────────────────── */
function HeroA() {
  return (
    <section className="min-h-screen bg-[#1e3a5f] flex items-center relative overflow-hidden">
      {/* Hintergrund-Dekoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-amber-400 blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-blue-400 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 text-amber-400 font-black text-sm uppercase tracking-widest mb-8">
            <div className="w-8 h-0.5 bg-amber-400" />
            Rechtsanwalt · Verkehrsrecht
          </div>
          <h1 className="text-5xl md:text-6xl xl:text-7xl font-display font-black text-white leading-[1.05] tracking-tight mb-8">
            Ihr Führerschein.<br />
            <span className="text-amber-400">Ich kämpfe dafür.</span>
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed mb-10 max-w-lg">
            Verkehrsrecht ist meine Spezialität. Seit 15 Jahren erkämpfe ich für Mandanten in Berlin, was ihnen zusteht — schnell, direkt und ohne Umwege.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#kontakt" className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-[#1e3a5f] font-black px-8 py-4 rounded-full transition-all shadow-lg shadow-amber-400/20 text-base">
              Kostenlos beraten lassen
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="tel:+4989123456" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-full transition-all border border-white/20 text-base">
              <Phone className="w-5 h-5" />
              089 – 123 456 78
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: <Star className="w-6 h-6 text-amber-400" />, value: '4,9★', label: 'Google Bewertung', sub: 'aus 120+ Rezensionen' },
            { icon: <CheckCircle2 className="w-6 h-6 text-green-400" />, value: '500+', label: 'Gewonnene Fälle', sub: 'seit 2009' },
            { icon: <Shield className="w-6 h-6 text-blue-400" />, value: '100%', label: 'Persönliche Betreuung', sub: 'kein Callcenter' },
            { icon: <Clock className="w-6 h-6 text-purple-400" />, value: '24h', label: 'Erste Antwort', sub: 'garantiert' },
          ].map((item, i) => (
            <div key={i} className="bg-white/8 backdrop-blur border border-white/10 rounded-2xl p-6">
              {item.icon}
              <p className="text-2xl font-display font-black text-white mt-3 mb-1">{item.value}</p>
              <p className="text-white/80 font-bold text-sm leading-tight">{item.label}</p>
              <p className="text-white/40 text-xs mt-1">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   VARIANTE B — Hell & Vertrauenswürdig
   Weißer Hintergrund mit warmen Akzenten,
   Foto rechts, klare Typografie, sehr clean
───────────────────────────────────────────── */
function HeroB() {
  return (
    <section className="min-h-screen bg-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          {/* Social proof oben */}
          <div className="flex items-center gap-3 mb-8">
            <div className="flex text-yellow-400 gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <span className="text-slate-600 text-sm font-semibold">4,9 von 5 · <span className="text-slate-400">120 Google-Bewertungen</span></span>
          </div>

          <h1 className="text-5xl md:text-6xl font-display font-black text-[#1e3a5f] leading-tight tracking-tight mb-6">
            Verkehrsrecht.<br />
            <span className="text-amber-600">Klar. Schnell.<br />Erfolgreich.</span>
          </h1>
          <p className="text-slate-500 text-lg leading-relaxed mb-10">
            Bußgeldbescheid, Führerscheinentzug oder Unfall? Ich prüfe Ihren Fall kostenlos und sage Ihnen ehrlich, wie Ihre Chancen stehen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a href="#kontakt" className="inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-black px-8 py-4 rounded-xl transition-all shadow-md text-base">
              Jetzt kostenlos anfragen
            </a>
            <a href="tel:+4989123456" className="inline-flex items-center justify-center gap-2 border-2 border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white font-black px-8 py-4 rounded-xl transition-all text-base">
              <Phone className="w-5 h-5" />
              Direkt anrufen
            </a>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-slate-500 font-medium">
            {['Kostenlose Erstberatung', 'Antwort innerhalb 24h', 'Über 15 Jahre Erfahrung'].map((t, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* Bild-Platzhalter */}
        <div className="relative">
          <div className="absolute -inset-4 bg-amber-50 rounded-3xl -z-10" />
          <img
            src="/about-us.png"
            alt="Rechtsanwalt Schneider"
            className="w-full h-[560px] object-cover object-right rounded-2xl shadow-2xl"
          />
          {/* Floating badge */}
          <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl px-6 py-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="font-black text-[#1e3a5f] text-sm leading-none mb-0.5">500+ Fälle gewonnen</p>
              <p className="text-slate-400 text-xs">seit 2009</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   VARIANTE C — Zentriert & Emotional
   Zentriertes Layout, große emotionale Headline,
   Subtext, ein primärer CTA, Vertrauensleiste unten
───────────────────────────────────────────── */
function HeroC() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex flex-col items-center justify-center text-center relative overflow-hidden">
      {/* Dezente Kreise im Hintergrund */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-amber-50 opacity-60 -z-10 blur-3xl" />

      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-700 font-black text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-8">
          <Shield className="w-3.5 h-3.5" />
          Kostenlose Erstberatung · Berlin & Umgebung
        </div>

        <h1 className="text-5xl md:text-6xl xl:text-7xl font-display font-black text-[#1e3a5f] leading-[1.05] tracking-tight mb-6">
          Ihr Recht im<br />
          <span className="relative inline-block">
            <span className="relative z-10 text-amber-600">Straßenverkehr.</span>
            <span className="absolute bottom-2 left-0 right-0 h-3 bg-amber-100 -z-10 rounded" />
          </span>
        </h1>

        <p className="text-slate-500 text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
          Unfälle, Bußgelder, Führerscheinentzug — ich kenne die Strategien, die wirklich helfen. Und ich sage Ihnen ehrlich, ob und wie ich helfen kann.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-16">
          <a href="#kontakt" className="inline-flex items-center gap-2 bg-[#1e3a5f] hover:bg-[#162d4a] text-white font-black px-10 py-4 rounded-full text-lg transition-all shadow-xl shadow-[#1e3a5f]/20">
            Kostenlos anfragen
            <ChevronRight className="w-5 h-5" />
          </a>
          <a href="tel:+4989123456" className="inline-flex items-center gap-2 bg-white border-2 border-slate-200 hover:border-amber-400 text-slate-700 font-black px-8 py-4 rounded-full text-base transition-all">
            <Phone className="w-5 h-5 text-amber-600" />
            089 – 123 456 78
          </a>
        </div>

        {/* Vertrauensleiste */}
        <div className="flex flex-wrap items-center justify-center gap-8 pt-8 border-t border-slate-100">
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <span className="font-bold text-slate-600 text-sm">4,9 auf Google</span>
          </div>
          <div className="h-4 w-px bg-slate-200" />
          <div className="flex items-center gap-2 text-slate-600 text-sm font-bold">
            <CheckCircle2 className="w-4 h-4 text-green-500" />
            500+ gewonnene Fälle
          </div>
          <div className="h-4 w-px bg-slate-200" />
          <div className="flex items-center gap-2 text-slate-600 text-sm font-bold">
            <Clock className="w-4 h-4 text-blue-500" />
            Antwort in 24h
          </div>
          <div className="h-4 w-px bg-slate-200" />
          <div className="flex items-center gap-2 text-slate-600 text-sm font-bold">
            <Shield className="w-4 h-4 text-amber-500" />
            15 Jahre Erfahrung
          </div>
        </div>
      </div>
    </section>
  );
}

export default function DesignTest() {
  return (
    <div>
      <div className="sticky top-0 z-[100] bg-[#1e3a5f] text-white flex items-center justify-between px-6 py-3 shadow-lg">
        <span className="font-black text-sm tracking-wide">DESIGN TEST · Kanzlei Schneider</span>
        <a href="/" className="text-amber-400 hover:text-amber-300 text-sm font-bold transition-colors">← Zurück zur Hauptseite</a>
      </div>

      <NavLabel label="Variante 0 — Original ohne Formular (Foto rechts)" />
      <HeroOriginal />

      <NavLabel label="Variante 0B — Foto als Vollbild-Hintergrund" />
      <HeroPhotoBg />

      <NavLabel label="Variante A — Dark &amp; Impactful" />
      <HeroA />

      <NavLabel label="Variante B — Hell &amp; Vertrauenswürdig" />
      <HeroB />

      <NavLabel label="Variante C — Zentriert &amp; Emotional" />
      <HeroC />
    </div>
  );
}
