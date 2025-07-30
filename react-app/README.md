# AQ Website Frontend

Frontend React/Next.js per l'homeowrk l'ho sviluppato secondo le specifiche inviate.

## 🚀 Caratteristiche

- **React 18** con **Next.js 14** e **TypeScript**
- **CSS Modules** per stili modulari e scoped
- **Light/Dark Mode** con CSS Variables
- **Responsive Design** per tutti i dispositivi
- **SwiperJS** per slider interattivi
- **Accessibility** (WCAG 2.1 AA)
- **SEO Optimized** con metadati completi
- **API Integration** con Drupal 10

## 📋 Prerequisiti

- Node.js 18+ 
- npm o yarn
- Drupal 10 con modulo custom `aq_json` attivo

## 🛠️ Installazione

1. **Clona il repository**
```bash
git clone <repository-url>
cd react-app
```

2. **Installa le dipendenze**
```bash
npm install
# oppure
yarn install
```

3. **Configura le variabili d'ambiente**
Crea un file `.env.local` nella root del progetto:
```env
# Drupal API Configuration
NEXT_PUBLIC_DRUPAL_URL=http://homework10.ddev.site

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Development Configuration
NEXT_PUBLIC_ENVIRONMENT=development
```

4. **Avvia il server di sviluppo**
```bash
npm run dev
# oppure
yarn dev
```

Il sito sarà disponibile su `http://localhost:3000`

## 🏗️ Struttura del Progetto

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Stili globali e CSS Variables
│   ├── layout.tsx         # Layout principale
│   └── page.tsx           # Pagina principale
├── components/            # Componenti React
│   ├── Button/           # Componente pulsante
│   ├── Card/             # Componente card
│   ├── Footer/           # Componente footer
│   ├── Header/           # Componente header
│   ├── Hero/             # Componente hero section
│   ├── Page/             # Componente pagina principale
│   ├── Section/          # Componente sezione contenuto
│   └── Slider/           # Componente slider con SwiperJS
├── services/             # Servizi API
│   └── api.ts           # Servizio per Drupal API
└── types/               # Definizioni TypeScript
    └── index.ts         # Interfacce e tipi
```

## 🎨 Componenti

### Button
Pulsante riutilizzabile con varianti primary/secondary e stati active/inactive.

### Header
Header con logo, menu di navigazione, search bar e pulsante contattaci.

### Hero
Sezione hero con immagine di sfondo, titolo, sottotitolo e pulsanti.

### Section
Sezione contenuto con layout a due colonne (testo + immagine).

### Card
Card con immagine, label, heading, subtitle, pulsanti e badge opzionale.

### Slider
Slider con SwiperJS per visualizzare le card in modo interattivo.

### Footer
Footer con logo, menu, social icons e informazioni legali.

## 🌙 Light/Dark Mode

Il tema viene gestito tramite CSS Variables e JavaScript:

- **Toggle**: Pulsante fisso in alto a destra
- **Persistenza**: Salvataggio in localStorage
- **Preferenze**: Rispetta le preferenze del sistema
- **Transizioni**: Animazioni fluide tra i temi

## 📱 Responsive Design

Il sito è completamente responsive con breakpoint:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🔧 API Integration

Il frontend si connette all'API JSON di Drupal tramite:

- **Endpoint**: `/api/page-data`
- **Formato**: JSON
- **Fallback**: Dati mock per sviluppo
- **Error Handling**: Gestione errori completa

## 🚀 Build e Deploy

### Build di Produzione
```bash
npm run build
# oppure
yarn build
```

### Preview Build
```bash
npm run start
# oppure
yarn start
```

### Linting
```bash
npm run lint
# oppure
yarn lint
```

## 📊 Performance

- **Lazy Loading**: Immagini e componenti
- **Code Splitting**: Automatico con Next.js
- **Optimization**: Immagini ottimizzate
- **Caching**: Strategie di cache appropriate

## ♿ Accessibility

- **Semantic HTML**: Struttura semantica corretta
- **ARIA Labels**: Attributi ARIA appropriati
- **Keyboard Navigation**: Navigazione da tastiera
- **Focus Management**: Gestione focus
- **Color Contrast**: Contrasto colori adeguato

## 🔍 SEO

- **Meta Tags**: Completi e dinamici
- **Open Graph**: Social media optimization
- **Structured Data**: Schema markup
- **Sitemap**: Generazione automatica
- **Robots.txt**: Configurazione appropriata

## 🛡️ Sicurezza

- **CSP**: Content Security Policy
- **HTTPS**: Forzato in produzione
- **Input Validation**: Validazione input
- **XSS Protection**: Protezione XSS

## 📝 Scripts Disponibili

```json
{
  "dev": "next dev",
  "build": "next build", 
  "start": "next start",
  "lint": "next lint",
  "type-check": "tsc --noEmit"
}
```

## 🤝 Contributing

1. Fork il progetto
2. Crea un branch per la feature (`git checkout -b feature/AmazingFeature`)
3. Commit le modifiche (`git commit -m 'Add some AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Apri una Pull Request

## 📄 Licenza

Questo progetto è sotto licenza MIT. Vedi il file `LICENSE` per i dettagli.

## 📞 Supporto

Per supporto o domande:
- Email: support@aqwebsite.com
- Issues: GitHub Issues
- Documentation: `/docs`

---
