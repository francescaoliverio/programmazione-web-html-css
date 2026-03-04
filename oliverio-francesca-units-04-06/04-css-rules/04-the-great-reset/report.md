# Reset/Normalize/Destyle — Confronto

## reset.css

### Cosa ho tolto dal mio CSS
Niente: reset non gestisce quasi nulla dei form elements, quindi il mio CSS rimane invariato.

### Considerazioni
- Reset ha solo **48 righe** ma mi ha lasciato il lavoro più pesante
- Ho dovuto scrivere tutto da zero: appearance, font, margin, padding...

---

## normalize.css

### Cosa ho tolto dal mio CSS

1. `body{ margin: 0; }`
3. `input, textarea, select { font-size: inherit; }`
2. `input, textarea, select { font-family: inherit; }`

### Considerazioni
- Ha **349 righe** ma corregge solo le inconsistenze, non azzera tutto
- Headings: normalize ridefinisce `h1` con `font-size: 2em`, ma l'ho sovrascritto. Gli altri (h2→6) non sono gestiti
- Ho dovuto comunque gestire `appearance: none` e altri su `input[type="radio/range/color"]` per personalizzarli e renderli coerenti sui vari browser

---

## destyle.css

### Cosa ho tolto dal mio CSS

1. `body{ margin: 0; }`
2. `input, textarea, select { font-family: inherit; font-size: inherit; }`
3. `button { font-family: inherit; font-size: inherit; cursor: pointer; }`
4. `input[type="radio/color"] { -webkit-appearance: none; appearance: none; border-radius: 0; }`
5. `input[type="range"] { -webkit-appearance: none; appearance: none; background: transparent; }`

### Considerazioni
- Ha **210 righe** e parte da una base già consistente cross-browser
- È l'unico dei tre che resetta la maggior parte dei principali attributi sui form elements
- Usa `box-sizing: border-box` su `*` (meglio per UI)

---

## Con quale mi sono trovata meglio

- **destyle.css** è stato il più comodo da usare per questo progetto, per due motivi:

  1. **Meno CSS** — le righe ridondanti da togliere sono state 6 dichiarazioni tra range, radio e color input, più le property condivise di button e form elements
  2. **Meno override** — destyle azzera già tutto, quindi ogni mia regola è una scelta intenzionale, non una correzione di un default incoerente del browser

- **normalize.css** è stato il secondo più comodo: ho tolto meno righe rispetto a destyle, ma non ho avuto conflitti da gestire. Dall'altra parte, buona parte dello stile che ridefinisce per rendere coerente il css fra diversi browser verrà spesso overrided, visto che verosimilmente nessun designer vorrà un sito con aspetto così "basic".

- **reset.css** è stato il meno comodo: non gestisce nulla dei form elements moderni, quindi ho dovuto scrivere tutto da zero. In compenso è il più leggero (2KB vs 6KB), anche se si tratta di una differenza che penso sia trascurabile, rispetto al rapporto risparmio/beneficio, dovendo comunque gestire io la maggior parte dello stile.