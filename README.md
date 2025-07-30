# Progetto Drupal + React

Questo progetto combina Drupal come backend e React/Next.js come frontend, implementando una duplice versione del layout come richiesto dalle specifiche del test.

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

# Installa Drupal (se non già installato)
ddev drush site:install --account-name=admin --account-pass=admin --db-url=mysql://db/db -y

# Abilita i moduli necessari
ddev drush en paragraphs -y
ddev drush en aq_json -y
ddev drush en aq_paragraphs -y

# Abilita il tema AQ
ddev drush theme:enable aq_theme -y
ddev drush config:set system.theme default aq_theme -y

# Clear cache
ddev drush cr
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

### Creazione Database da Zero


```bash
# Installa Drupal con database pulito
ddev drush site:install --account-name=admin --account-pass=admin --db-url=mysql://db/db -y

# Abilita i moduli necessari
ddev drush en paragraphs -y
ddev drush en aq_json -y
ddev drush en aq_paragraphs -y

# Abilita il tema AQ
ddev drush theme:enable aq_theme -y
ddev drush config:set system.theme default aq_theme -y

# Clear cache
ddev drush cr
```

### Verifica Database

```bash
# Controlla lo stato del database
ddev drush status

# Verifica i moduli installati
ddev drush pm:list --status=enabled

# Controlla l'endpoint API
curl http://homework10.ddev.site/api/page-data
```

## 🔧 Configurazione API

### Abilita il Modulo API

```bash
# Abilita il modulo aq_json
ddev drush en aq_json -y

# Clear cache
ddev drush cr

# Verifica l'endpoint
curl http://homework10.ddev.site/api/page-data
```

### Test Endpoint API

```bash
# Test diretto dell'endpoint
curl -H "Accept: application/json" http://homework10.ddev.site/api/page-data

# Se non funziona, controlla i log
ddev drush watchdog:show --type=php
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
│   │   ├── modules/custom/  # Moduli custom
│   │   └── themes/custom/   # Temi custom
│   ├── vendor/         # Dipendenze Composer
│   └── composer.json   # Configurazione Composer
├── react-app/          # React frontend
│   ├── src/            # Codice sorgente
│   ├── components/     # Componenti React
│   ├── services/       # Servizi API
│   └── package.json    # Dipendenze npm
└── README.md           # Documentazione
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

- Il progetto implementa una duplice versione del layout: Drupal (Twig/CSS) e React (TypeScript/CSS Modules)
- I `node_modules` e `vendor` sono esclusi dal `.gitignore`
- L'app React usa Next.js con TypeScript
- Drupal usa il modulo `aq_json` per l'API JSON
- Il tema AQ include funzionalità Light/Dark mode

## 🐛 Troubleshooting

### Problemi Database
```bash
# Reset database
ddev drush sql:drop
ddev drush site:install --account-name=admin --account-pass=admin

```

### Problemi API
```bash
# Abilita modulo API
ddev drush en aq_json -y

# Clear cache
ddev drush cr

# Verifica endpoint
curl http://homework10.ddev.site/api/page-data
```

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