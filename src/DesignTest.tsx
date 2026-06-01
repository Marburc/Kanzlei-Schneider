import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Shield, Clock, Star, ChevronRight, CheckCircle2, ArrowRight, Scale } from 'lucide-react';

function NavLabel({ label }: { label: string }) {
  return (
    <div className="sticky top-0 z-50 bg-yellow-400 text-yellow-900 text-center text-xs font-black tracking-widest uppercase py-2">
      {label}
    </div>
  );
}

/* ─────────────────────────────────────────────
   HOMEPAGE BACKUP — 1:1 Kopie der aktuellen Hero
───────────────────────────────────────────── */
function HeroHomepage() {
  const [formData, setFormData] = useState({ name: '', phone: '', anliegen: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formError, setFormError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormStatus('loading');
    try {
      const [firstName, ...rest] = formData.name.trim().split(' ');
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName: rest.join(' '), phone: formData.phone, anliegen: formData.anliegen }),
      });
      if (!res.ok) throw new Error();
      setFormStatus('success');
    } catch {
      setFormStatus('error');
      setFormError('Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.');
    }
  }

  return (
    <section className="relative pt-28 pb-20 overflow-hidden flex flex-col justify-center bg-gradient-to-br from-slate-50 via-white to-amber-50/20">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="roadGlowHP" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>
          <path d="M 1350 920 C 1200 750, 950 650, 820 500 C 700 360, 780 200, 1000 20" stroke="#b8860b" strokeWidth="1" fill="none" opacity="0.2" filter="url(#roadGlowHP)" />
          <path d="M 1350 920 C 1200 750, 950 650, 820 500 C 700 360, 780 200, 1000 20" stroke="#b8860b" strokeWidth="0.5" fill="none" opacity="0.35" />
          <path d="M 1200 920 C 1070 750, 840 650, 720 500 C 610 360, 700 200, 920 20" stroke="#b8860b" strokeWidth="1" fill="none" opacity="0.15" filter="url(#roadGlowHP)" />
          <path d="M 1200 920 C 1070 750, 840 650, 720 500 C 610 360, 700 200, 920 20" stroke="#b8860b" strokeWidth="0.5" fill="none" opacity="0.25" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 bg-brand-accent/10 border border-brand-accent/25 rounded-full px-4 py-2 mb-8">
              <Scale className="w-4 h-4 text-brand-accent" />
              <span className="text-sm font-bold text-brand-dark tracking-wide">Kostenlose Erstberatung · Berlin & Umgebung</span>
            </div>
            <h1 className="text-brand-dark text-5xl md:text-6xl mb-6 leading-[1.05] font-display font-black tracking-tight">
              Ihr Anwalt für<br />
              <span className="text-brand-accent">Verkehrsrecht</span><br />
              in Berlin.
            </h1>
            <p className="text-slate-600 text-lg mb-10 font-medium leading-relaxed">
              Bei Unfällen, Bußgeldbescheiden und Führerscheinentzug – schnell, kompetent und persönlich.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-2 shadow-sm">
                <div className="flex text-yellow-400 gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}</div>
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                </svg>
                <span className="text-slate-700 text-xs font-bold">4,9 · Google</span>
              </div>
              <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-2 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-brand-accent" />
                <span className="text-slate-700 text-xs font-bold">500+ Fälle</span>
              </div>
              <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-2 shadow-sm">
                <Clock className="w-4 h-4 text-brand-accent" />
                <span className="text-slate-700 text-xs font-bold">Antwort in 24h</span>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}>
            <div className="bg-white/55 backdrop-blur-md border border-white/70 rounded-3xl p-8 shadow-xl">
              {formStatus === 'success' ? (
                <div className="text-center py-8">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-display font-black text-brand-dark mb-3">Vielen Dank!</h3>
                  <p className="text-slate-500 font-medium">Ich melde mich innerhalb von 24 Stunden bei Ihnen.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="mb-2">
                    <h3 className="text-xl font-display font-black text-brand-dark mb-1">Kostenloses Erstgespräch</h3>
                    <p className="text-slate-500 text-sm font-medium">Unverbindlich · Antwort innerhalb 24h</p>
                  </div>
                  <div>
                    <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-1.5">Name *</label>
                    <input type="text" required value={formData.name} onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                      className="w-full bg-white/70 border border-slate-200 rounded-xl px-4 py-3 text-brand-dark placeholder-slate-400 font-medium focus:outline-none focus:border-brand-accent transition-colors"
                      placeholder="Max Mustermann" />
                  </div>
                  <div>
                    <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-1.5">Telefon</label>
                    <input type="tel" value={formData.phone} onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))}
                      className="w-full bg-white/70 border border-slate-200 rounded-xl px-4 py-3 text-brand-dark placeholder-slate-400 font-medium focus:outline-none focus:border-brand-accent transition-colors"
                      placeholder="+49 89 123456" />
                  </div>
                  <div>
                    <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-1.5">Ihr Anliegen *</label>
                    <textarea required rows={3} value={formData.anliegen} onChange={e => setFormData(p => ({ ...p, anliegen: e.target.value }))}
                      className="w-full bg-white/70 border border-slate-200 rounded-xl px-4 py-3 text-brand-dark placeholder-slate-400 font-medium focus:outline-none focus:border-brand-accent transition-colors resize-none"
                      placeholder="Bitte schildern Sie kurz Ihren Fall..." />
                  </div>
                  {formStatus === 'error' && <p className="text-red-500 text-sm font-medium">{formError}</p>}
                  <button type="submit" disabled={formStatus === 'loading'}
                    className="w-full bg-brand-accent hover:bg-brand-accent-hover disabled:opacity-60 text-white py-4 rounded-full font-black text-base transition-all flex items-center justify-center gap-3 group">
                    {formStatus === 'loading' ? (
                      <><div className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />Wird gesendet...</>
                    ) : (
                      <>Jetzt anfragen<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   VARIANTE 0 — Original ohne Formular (Foto rechts)
───────────────────────────────────────────── */
function HeroOriginal() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-amber-50/20">
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
        <div>
          <div className="inline-flex items-center gap-2 bg-brand-accent/10 border border-brand-accent/25 rounded-full px-4 py-2 mb-8">
            <Scale className="w-4 h-4 text-brand-accent" />
            <span className="text-sm font-bold text-brand-dark tracking-wide">Kostenlose Erstberatung · Berlin & Umgebung</span>
          </div>
          <h1 className="text-brand-dark text-5xl md:text-6xl mb-6 leading-[1.05] font-display font-black tracking-tight">
            Ihr Anwalt für<br /><span className="text-brand-accent">Verkehrsrecht</span><br />in Berlin.
          </h1>
          <p className="text-slate-600 text-lg mb-10 font-medium leading-relaxed">
            Bei Unfällen, Bußgeldbescheiden und Führerscheinentzug – schnell, kompetent und persönlich.
          </p>
          <div className="flex flex-wrap items-center gap-3 mb-10">
            <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-2 shadow-sm">
              <div className="flex text-yellow-400 gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}</div>
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
              </svg>
              <span className="text-slate-700 text-xs font-bold">4,9 · Google</span>
            </div>
            <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-2 shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-brand-accent" /><span className="text-slate-700 text-xs font-bold">500+ Fälle</span>
            </div>
            <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-2 shadow-sm">
              <Clock className="w-4 h-4 text-brand-accent" /><span className="text-slate-700 text-xs font-bold">Antwort in 24h</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="#kontakt" className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accent-hover text-white font-black px-8 py-4 rounded-full transition-all shadow-lg text-base">
              Jetzt kostenlos anfragen<ChevronRight className="w-5 h-5" />
            </a>
            <a href="tel:+4989123456" className="inline-flex items-center gap-2 bg-white border border-slate-200 hover:border-brand-accent text-slate-700 font-black px-7 py-4 rounded-full transition-all shadow-sm text-base">
              <Phone className="w-5 h-5 text-brand-accent" />089 – 123 456 78
            </a>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md">
            <div className="absolute -inset-4 bg-brand-accent/5 rounded-3xl -z-10" />
            <img src="/about-us.png" alt="Rechtsanwalt Schneider" className="w-full h-[560px] object-cover object-right rounded-3xl shadow-2xl" />
            <div className="absolute bottom-6 -left-6 bg-white rounded-2xl shadow-xl px-5 py-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-brand-accent" />
              </div>
              <div>
                <p className="font-black text-brand-dark text-sm leading-none mb-0.5">15 Jahre Erfahrung</p>
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
───────────────────────────────────────────── */
function HeroPhotoBg() {
  return (
    <section className="relative h-[85vh] max-h-[800px] flex items-center overflow-hidden">
      <img src="/about-us.png" alt="" className="absolute inset-0 w-full h-full object-cover object-top [transform:scaleX(-1)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a5f]/85 from-[25%] via-[#1e3a5f]/40 via-[45%] to-transparent to-[65%]" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 py-28">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-8">
            <Scale className="w-4 h-4 text-brand-accent" />
            <span className="text-sm font-bold text-white tracking-wide">Kostenlose Erstberatung · Berlin & Umgebung</span>
          </div>
          <h1 className="text-white text-5xl md:text-6xl mb-6 leading-[1.05] font-display font-black tracking-tight">
            Ihr Anwalt für<br /><span className="text-brand-accent">Verkehrsrecht</span><br />in Berlin.
          </h1>
          <p className="text-white/80 text-lg mb-10 font-medium leading-relaxed">
            Bei Unfällen, Bußgeldbescheiden und Führerscheinentzug – schnell, kompetent und persönlich.
          </p>
          <div className="flex flex-wrap items-center gap-3 mb-10">
            <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <div className="flex text-yellow-400 gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}</div>
              <span className="text-white text-xs font-bold">4,9 · Google</span>
            </div>
            <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <CheckCircle2 className="w-4 h-4 text-brand-accent" /><span className="text-white text-xs font-bold">500+ Fälle</span>
            </div>
            <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <Clock className="w-4 h-4 text-brand-accent" /><span className="text-white text-xs font-bold">Antwort in 24h</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="#kontakt" className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accent-hover text-white font-black px-8 py-4 rounded-full transition-all shadow-lg text-base">
              Jetzt kostenlos anfragen<ChevronRight className="w-5 h-5" />
            </a>
            <a href="tel:+4989123456" className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 hover:bg-white/25 text-white font-black px-7 py-4 rounded-full transition-all text-base">
              <Phone className="w-5 h-5" />089 – 123 456 78
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   VARIANTE A — Dark & Impactful
───────────────────────────────────────────── */
function HeroA() {
  return (
    <section className="min-h-screen bg-brand-dark flex items-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-brand-accent blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-blue-400 blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 text-brand-accent font-black text-sm uppercase tracking-widest mb-8">
            <div className="w-8 h-0.5 bg-brand-accent" />Rechtsanwalt · Verkehrsrecht
          </div>
          <h1 className="text-5xl md:text-6xl xl:text-7xl font-display font-black text-white leading-[1.05] tracking-tight mb-8">
            Ihr Führerschein.<br /><span className="text-brand-accent">Ich kämpfe dafür.</span>
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed mb-10 max-w-lg">
            Verkehrsrecht ist meine Spezialität. Seit 15 Jahren erkämpfe ich für Mandanten in Berlin, was ihnen zusteht — schnell, direkt und ohne Umwege.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#kontakt" className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accent-hover text-white font-black px-8 py-4 rounded-full transition-all shadow-lg text-base">
              Kostenlos beraten lassen<ArrowRight className="w-5 h-5" />
            </a>
            <a href="tel:+4989123456" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-full transition-all border border-white/20 text-base">
              <Phone className="w-5 h-5" />089 – 123 456 78
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: <Star className="w-6 h-6 text-brand-accent" />, value: '4,9★', label: 'Google Bewertung', sub: 'aus 120+ Rezensionen' },
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
───────────────────────────────────────────── */
function HeroB() {
  return (
    <section className="min-h-screen bg-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="flex text-yellow-400 gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}</div>
            <span className="text-slate-600 text-sm font-semibold">4,9 von 5 · <span className="text-slate-400">120 Google-Bewertungen</span></span>
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-black text-brand-dark leading-tight tracking-tight mb-6">
            Verkehrsrecht.<br /><span className="text-brand-accent">Klar. Schnell.<br />Erfolgreich.</span>
          </h1>
          <p className="text-slate-500 text-lg leading-relaxed mb-10">
            Bußgeldbescheid, Führerscheinentzug oder Unfall? Ich prüfe Ihren Fall kostenlos und sage Ihnen ehrlich, wie Ihre Chancen stehen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a href="#kontakt" className="inline-flex items-center justify-center gap-2 bg-brand-accent hover:bg-brand-accent-hover text-white font-black px-8 py-4 rounded-xl transition-all shadow-md text-base">
              Jetzt kostenlos anfragen
            </a>
            <a href="tel:+4989123456" className="inline-flex items-center justify-center gap-2 border-2 border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white font-black px-8 py-4 rounded-xl transition-all text-base">
              <Phone className="w-5 h-5" />Direkt anrufen
            </a>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-slate-500 font-medium">
            {['Kostenlose Erstberatung', 'Antwort innerhalb 24h', 'Über 15 Jahre Erfahrung'].map((t, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />{t}
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-brand-accent/5 rounded-3xl -z-10" />
          <img src="/about-us.png" alt="Rechtsanwalt Schneider" className="w-full h-[560px] object-cover object-right rounded-2xl shadow-2xl" />
          <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl px-6 py-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-brand-accent" />
            </div>
            <div>
              <p className="font-black text-brand-dark text-sm leading-none mb-0.5">500+ Fälle gewonnen</p>
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
───────────────────────────────────────────── */
function HeroC() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex flex-col items-center justify-center text-center relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-brand-accent/5 -z-10 blur-3xl" />
      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="inline-flex items-center gap-2 bg-brand-accent/10 border border-brand-accent/20 text-brand-dark font-black text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-8">
          <Shield className="w-3.5 h-3.5 text-brand-accent" />Kostenlose Erstberatung · Berlin & Umgebung
        </div>
        <h1 className="text-5xl md:text-6xl xl:text-7xl font-display font-black text-brand-dark leading-[1.05] tracking-tight mb-6">
          Ihr Recht im<br />
          <span className="relative inline-block">
            <span className="relative z-10 text-brand-accent">Straßenverkehr.</span>
            <span className="absolute bottom-2 left-0 right-0 h-3 bg-brand-accent/10 -z-10 rounded" />
          </span>
        </h1>
        <p className="text-slate-500 text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
          Unfälle, Bußgelder, Führerscheinentzug — ich kenne die Strategien, die wirklich helfen. Und ich sage Ihnen ehrlich, ob und wie ich helfen kann.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mb-16">
          <a href="#kontakt" className="inline-flex items-center gap-2 bg-brand-dark hover:bg-brand-accent text-white font-black px-10 py-4 rounded-full text-lg transition-all shadow-xl">
            Kostenlos anfragen<ChevronRight className="w-5 h-5" />
          </a>
          <a href="tel:+4989123456" className="inline-flex items-center gap-2 bg-white border-2 border-slate-200 hover:border-brand-accent text-slate-700 font-black px-8 py-4 rounded-full text-base transition-all">
            <Phone className="w-5 h-5 text-brand-accent" />089 – 123 456 78
          </a>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8 pt-8 border-t border-slate-100">
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-400">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}</div>
            <span className="font-bold text-slate-600 text-sm">4,9 auf Google</span>
          </div>
          <div className="h-4 w-px bg-slate-200" />
          <div className="flex items-center gap-2 text-slate-600 text-sm font-bold">
            <CheckCircle2 className="w-4 h-4 text-green-500" />500+ gewonnene Fälle
          </div>
          <div className="h-4 w-px bg-slate-200" />
          <div className="flex items-center gap-2 text-slate-600 text-sm font-bold">
            <Clock className="w-4 h-4 text-brand-accent" />Antwort in 24h
          </div>
          <div className="h-4 w-px bg-slate-200" />
          <div className="flex items-center gap-2 text-slate-600 text-sm font-bold">
            <Shield className="w-4 h-4 text-brand-accent" />15 Jahre Erfahrung
          </div>
        </div>
      </div>
    </section>
  );
}

export default function DesignTest() {
  return (
    <div>
      <div className="sticky top-0 z-[100] bg-brand-dark text-white flex items-center justify-between px-6 py-3 shadow-lg">
        <span className="font-black text-sm tracking-wide">DESIGN TEST · Kanzlei Schneider</span>
        <a href="/" className="text-brand-accent hover:text-brand-accent-hover text-sm font-bold transition-colors">← Zurück zur Hauptseite</a>
      </div>

      <NavLabel label="Variante 0 — Original ohne Formular (Foto rechts)" />
      <HeroOriginal />

      <NavLabel label="Variante 0B — Foto als Vollbild-Hintergrund" />
      <HeroPhotoBg />

      <NavLabel label="Variante A — Dark &amp; Impactful" />
      <HeroA />

      <NavLabel label="Variante B — Aktuelle Homepage Hero" />
      <HeroHomepage />

      <NavLabel label="Variante C — Zentriert &amp; Emotional" />
      <HeroC />
    </div>
  );
}
