# Section-Farben angleichen + Slider-Schatten endgültig fixen

## Problem

Zwei zusammenhängende UI-Probleme auf der Kanzlei-Schneider-Startseite:

1. **Section-Rhythmus stimmt noch nicht.** Aktuell wechseln sich `bg-slate-100` (hellblau) und `bg-white` strikt ab. Der Nutzer möchte Sections 2 und 3 (Stats + Über mich) in derselben hellblauen Farbe vereinen, damit die Hero-Section visuell auf einer durchgehenden hellen "Einleitungs-Zone" landet, bevor der Wechsel beginnt.

2. **Slider-Karten in der Leistungen-Section werden unten abgeschnitten.** Trotz des vorherigen Fixes (`overflow-x-hidden pb-6` statt `overflow-hidden`) sind die Schatten der Karten am unteren Rand weiterhin gekappt. Ursache: CSS-Spec — sobald eine Achse auf `hidden` gesetzt ist, fällt die andere Achse implizit auf `auto` zurück (statt `visible`) und clippt ebenfalls.

## Ziel

- Neues Hintergrund-Schema: Hero → hellblau → hellblau → weiß → hellblau → weiß → weiß → hellblau → dunkelblau
- Slider-Karten zeigen ihre kompletten Box-Shadows nach unten ohne Abschneiden

## Technischer Ansatz

### 1. Section-Background-Mapping in `src/App.tsx`

| Section | Aktueller bg | Neuer bg |
|---|---|---|
| Hero | warmes Weiß-Gradient | bleibt |
| Stats Cards | `bg-slate-100` | `bg-slate-100` (bleibt) |
| Über mich | `bg-white` | **`bg-slate-100`** (ändern) |
| Vorteile | `bg-slate-100` | `bg-slate-100` (bleibt) |
| Leistungen | `bg-white` | `bg-white` (bleibt) |
| Ablauf | `bg-slate-100` | **`bg-white`** (ändern) |
| Bewertungen | `bg-white` | `bg-white` (bleibt) |
| FAQ | `bg-slate-100` | `bg-slate-100` (bleibt) |
| Kontakt | `bg-brand-dark` | bleibt |
| Footer | `bg-white` | bleibt |

Resultierender Rhythmus: **hellblau → hellblau → hellblau → weiß → weiß → weiß → hellblau → dunkelblau**

Das gibt drei "Zonen": helle Intro-Zone (Hero+Stats+Über mich+Vorteile), weiße Mitte (Leistungen+Ablauf+Bewertungen), hellblauer Abschluss (FAQ), dunkler Kontakt.

### 2. Slider-Shadow-Fix

**Ursache:** Auf dem Container `<div className="overflow-x-hidden pb-6">` zwingt `overflow-x: hidden` die Y-Achse implizit auf `auto`, was vertikale Box-Shadows beschneidet.

**Fix:** `overflow-x-hidden` → `overflow-x-clip`. CSS `overflow: clip` clippt nur entlang der gesetzten Achse und lässt die andere auf `visible`. `pb-6` zum Schutz von Schatten kann dann sogar entfernt werden — wird aber für visuelle Atmung gelassen.

Browser-Support: `overflow: clip` ist seit Chrome 90, Firefox 81, Safari 16 verfügbar — für eine moderne Marketing-Site unproblematisch.

Fallback falls Tailwind v4 die Klasse nicht direkt liefert: arbitrary value `[overflow-x:clip]`.

### 3. Verifikation

- TypeScript-Check muss sauber durchlaufen
- Visuelle Prüfung via Preview-Server: zur Leistungen-Section scrollen, prüfen ob die Karten-Schatten unten vollständig sichtbar sind
- Slider mit Pfeil-Buttons durchklicken, Shadow-Cutoff darf bei keiner Position auftreten

## Implementation Steps

1. `bg-white` → `bg-slate-100` in der "Über mich"-Section (`<section id="ueber-mich"...>`)
2. `bg-slate-100` → `bg-white` in der "Ablauf"-Section (`<section id="ablauf"...>`)
3. `overflow-x-hidden pb-6` → `overflow-x-clip pb-6` im Slider-Wrapper in der Leistungen-Section
4. `npx tsc --noEmit` ausführen
5. Preview öffnen, zur Leistungen-Section scrollen, Schatten visuell prüfen
6. Falls `overflow-x-clip` als Tailwind-Klasse nicht greift: auf `[overflow-x:clip]` umstellen

## Success Criteria

- [ ] Über-mich-Section hat hellblauen Hintergrund (visuell verbunden mit Vorteile)
- [ ] Ablauf-Section hat weißen Hintergrund (visuell verbunden mit Leistungen + Bewertungen)
- [ ] Karten in der Leistungen-Section zeigen vollständige Box-Shadows nach unten
- [ ] Keine TypeScript-Fehler
- [ ] Keine Konsole-Warnings durch ungültige Tailwind-Klassen

## Notizen / Risiken

- `overflow-clip` hat einen wichtigen Unterschied zu `overflow-hidden`: es etabliert KEINEN neuen Block-Formatting-Context und ist nicht scrollbar. Für unseren Slider (rein animiertes Translate) genau richtig.
- Falls die `slate-100`-Tönung zu kühl wirkt, kann später auf einen wärmeren Ton wie `[#f1f5fa]` oder `bg-blue-50/40` gewechselt werden.
