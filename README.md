# Progetto Drupal + React

Questo progetto combina Drupal come backend e React/Next.js come frontend.

## 🚀 Setup Iniziale

### Prerequisiti
- [DDEV](https://ddev.readthedocs.io/en/stable/users/install/) installato
- [Node.js](https://nodejs.org/) (versione 18 o superiore)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)

## 📦 Installazione

### 1. Clona il repository
```bash
git clone https://github.com/Bettercallmastro/dupral.git
cd dupral
```

### 2. Setup Drupal
```bash
# Avvia DDEV
ddev start

# Installa le dipendenze Composer
ddev composer install

# Installa Drupal (se non già installato)
ddev drush site:install --account-name=admin --account-pass=admin
```

### 3. Setup React
```bash
# Vai nella cartella React
cd react-app

# Installa le dipendenze npm
npm install

# Avvia il server di sviluppo
npm run dev
```

## 🛠️ Comandi Utili

### Drupal
```bash
# Avvia DDEV
ddev start

# Ferma DDEV
ddev stop

# Accedi al container Drupal
ddev ssh

# Esegui comandi Drush
ddev drush status
ddev drush cr  # Clear cache
ddev drush uli  # Login link
```

### React
```bash
# Avvia server di sviluppo
npm run dev

# Build per produzione
npm run build

# Avvia server di produzione
npm start

# Linting
npm run lint
```

## 🌐 Accesso

- **Drupal**: http://homework10.ddev.site
- **React**: http://localhost:3000

## 📁 Struttura del Progetto

```
dupral/
├── homework10/          # Drupal backend
│   ├── web/            # Document root
│   ├── vendor/         # Dipendenze Composer
│   └── composer.json   # Configurazione Composer
├── react-app/          # React frontend
│   ├── src/            # Codice sorgente
│   ├── components/     # Componenti React
│   ├── services/       # Servizi API
│   └── package.json    # Dipendenze npm
└── web/                # Altri file Drupal
```

## 🔧 Configurazione

### Variabili d'Ambiente React
Crea un file `.env.local` nella cartella `react-app/`:

```env
NEXT_PUBLIC_DRUPAL_URL=http://homework10.ddev.site
```

### API Endpoint
L'app React si connette a Drupal tramite l'endpoint:
- `http://homework10.ddev.site/api/page-data`

## 🚀 Deployment

### Build React per Produzione
```bash
cd react-app
npm run build
```

### Deploy Drupal
```bash
ddev export-db
ddev composer install --no-dev
```

## 📝 Note

- Il core di Drupal è incluso nel repository
- I `node_modules` e `vendor` sono esclusi dal `.gitignore`
- L'app React usa Next.js 15 con TypeScript
- Drupal usa il modulo `aq_json` per l'API JSON

## 🐛 Troubleshooting

### Problemi Drupal
```bash
# Clear cache
ddev drush cr

# Rebuild cache
ddev drush cache:rebuild

# Check status
ddev drush status
```

### Problemi React
```bash
# Clear cache npm
npm cache clean --force

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

## 📞 Supporto

Per problemi o domande, apri una issue su GitHub. 