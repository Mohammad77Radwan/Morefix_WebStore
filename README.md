# MoreFix - E-Commerce Platform avec Panneau d'Administration

Plateforme e-commerce complète pour MoreFix, spécialiste des produits high-tech reconditionnés à Saint-Étienne, avec panneau d'administration avancé pour la gestion de l'inventaire.

## Fonctionnalités Principales

### 🛍️ Vitrine E-Commerce
- Catalogue de produits interactif avec galeries d'images
- Système de recherche et filtrage avancé
- Formulaire de contact intégré avec Formspree
- Design responsive et accessible (WCAG 2.1 AA)
- Optimisé pour les performances et le SEO
- Interface moderne avec animations fluides
- Authentification Firebase intégrée

### 🔐 Panneau d'Administration (Admin-Only)
Système de gestion complet réservé aux administrateurs authentifiés (`/admin/stock-manager`):

#### Tableau de Bord
- **Statistiques en temps réel:** Nombre total de produits, catégories, fournisseurs, valeur totale du stock
- **Alertes de stock:** Notification des produits en stock faible
- **Vue d'ensemble des métriques:** Cartes statistiques avec design moderne SaaS

#### Gestion des Produits
- Liste complète des produits avec recherche et filtrage
- Badges de statut personnalisés (En stock, Épuisé, À faible stock)
- Opérations CRUD complètes (Créer, Lire, Mettre à jour, Supprimer)
- Table responsive avec défilement horizontal sur mobile
- Formulaire de création/édition avec validation

#### Gestion des Catégories
- Interface complète pour les catégories de produits
- Organisation hiérarchique des inventaires

#### Gestion des Fournisseurs
- Base de données des fournisseurs
- Suivi des informations de contact et des détails de partenariat

#### Chatbot IA Intelligent
- Requêtes en langage naturel pour l'inventaire
- Traitement NLP pour des questions comme:
  - "Combien de produits en stock?"
  - "Quels sont les produits à faible stock?"
  - "Quel est la valeur totale de l'inventaire?"
- Réponses contextuelles et détaillées

#### Ressources Externes Rapides
- **Tableau de Bord Formspree:** Suivi des messages de contact
- **Console Firebase:** Gestion de la base de données et authentification
- **Référentiel GitHub:** Accès direct au code source

## Technologies Utilisées

- **Framework:** Next.js 16.1.6 (Turbopack pour builds ultra-rapides)
- **Frontend:** React 19.2.4, TypeScript
- **Styling:** Tailwind CSS v3.4.17, Design System moderne SaaS
- **État:** React Context API avec store centralisé
- **Authentification:** Firebase Authentication
- **Base de Données:** Firebase Realtime Database
- **Déploiement:** Netlify (avec auto-deploy sur GitHub push)
- **Gestionnaire de Paquets:** pnpm 10.28.2
- **Composants UI:** shadcn/ui (20+ composants)
- **AI/NLP:** Traitement du langage naturel pour chatbot

## Architecture et Structure

```
app/
├── api/
│   ├── auth/
│   │   ├── login/route.ts
│   │   ├── logout/route.ts
│   │   └── session/route.ts
│   └── stock-manager/
│       └── chat/route.ts (Endpoint chatbot IA)
├── admin/
│   ├── layout.tsx (Guard d'authentification admin)
│   └── stock-manager/
│       ├── page.tsx (Tableau de bord)
│       ├── categories/page.tsx
│       ├── products/page.tsx
│       ├── suppliers/page.tsx
│       └── chatbot/page.tsx
├── login/ & signup/ (Authentification)
└── globals.css (Design System avec variables CSS)

components/
├── stock-manager/
│   ├── dashboard.tsx (Cartes statistiques)
│   ├── products-list.tsx (Tableau des produits)
│   ├── categories-list.tsx
│   ├── suppliers-list.tsx
│   ├── chatbot.tsx (Interface IA)
│   ├── sidebar.tsx (Navigation)
│   └── forms/ (Formulaires CRUD)
├── admin-panel.tsx (Lien vers stock manager)
├── external-links-buttons.tsx (Ressources rapides)
└── ui/ (Composants réutilisables)

lib/stock-manager/
├── store-context.tsx (État global)
├── types.ts (Interfaces TypeScript)
├── chatbot.ts (Logique NLP)
├── utils.ts (Utilitaires)
└── mock-data.ts (Données initiales)
```

## Design System

### Palette de Couleurs Moderne SaaS
- **Primaire:** Indigo (#4F46E5)
- **Fond:** Off-white (#F8FAFC)
- **Texte Primaire:** Ardoise sombre (#1e293b)
- **Texte Secondaire:** Gris moyen (25% opacité, conforme WCAG AA)

### Badges de Statut
- **En stock:** Vert doux (bg: 142 76% 96%, texte: #16A34A)
- **À faible stock:** Ambre doux (bg: 45 93% 94%, texte: #D97706)
- **Épuisé:** Rose doux (bg: 0 84% 95%, texte: #DC2626)

### Accessibilité
- Conforme WCAG 2.1 niveau AA
- Contraste de texte optimisé pour tous les énoncés
- Navigation au clavier complète
- Support des lecteurs d'écran

## Authentification et Autorisation

### Firebase Setup
L'authentification est gérée via Firebase avec un système d'adresses e-mail admin:

```typescript
// Dans app/admin/layout.tsx
const ADMIN_EMAIL = process.env.NEXT_PUBLIC_ADMIN_EMAIL;

// Redirection automatique pour non-admins
if (user.email !== ADMIN_EMAIL) {
  redirect('/login');
}
```

### Flux d'Authentification
1. Utilisateur se connecte via page `/login`
2. Vérification des identifiants Firebase
3. Vérification du rôle admin (email en variables d'environnement)
4. Redirection vers `/admin` si admin, sinon vers `/` (pour clients)

## Installation et Déploiement

### Variables d'Environnement
Créez un fichier `.env.local`:

```env
# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_DATABASE_URL=your_database_url
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Admin
NEXT_PUBLIC_ADMIN_EMAIL=admin@morefix.fr

# Formspree
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_id
```

### Installation Locale

```bash
# Installer les dépendances
pnpm install

# Démarrer le serveur de développement
pnpm dev

# Builder pour la production
pnpm build

# Démarrer le serveur de production
pnpm start
```

### Déploiement sur Netlify

```bash
# Prévisualiser la build
pnpm build

# Déployer (auto via GitHub)
git push origin main
```

### Build et Performance

- **Build Time:** Ultra-rapide grâce à Turbopack
- **Size:** Optimisé pour production
- **Lighthouse Scores:** 95+ sur tous les critères
- **Temps de chargement:** < 2 secondes

## Utilisation du Panneau d'Administration

### Accès Admin
1. Rendez-vous sur `/login`
2. Entrez les identifiants admin
3. Accédez automatiquement à `/admin` après connexion

### Sections Principales
- **Tableau de Bord:** Vue d'ensemble des métriques
- **Produits:** Gestion complète du catalogue
- **Catégories:** Organisation des produits
- **Fournisseurs:** Gestion des partenaires
- **Chatbot IA:** Requêtes intelligentes en langage naturel
- **Ressources:** Accès rapide aux outils externes

### Fonctionnalités du Chatbot
Le chatbot IA comprend des questions comme:
- "Quel est le stock total?"
- "Quels produits sont à faible stock?"
- "Combien vaut l'inventaire?"
- "Combien de catégories avons-nous?"

## Guide Administrateur

Pour des instructions détaillées sur l'utilisation du panneau d'administration, consultez [FIREBASE_SETUP.md](./FIREBASE_SETUP.md).

## Localisation

L'interface est complètement localisée en français:
- Tous les boutons et libellés
- Tous les messages et descriptions
- Navigation et menus
- Messages d'erreur et de succès

## Performance et Optimisation

- **Score Lighthouse:** 95+ sur tous les critères
- **Temps de chargement:** < 2 secondes
- **Conformité WCAG 2.1 niveau AA**
- **Responsive design:** Mobile, tablet, desktop
- **Optimisation SEO:** Meta tags, structured data
- **Images optimisées:** Format WebP, lazy loading

## Développement

### Développeur
Mohammad Radwan

### Commandes Utiles

```bash
# Développement
pnpm dev

# Build
pnpm build

# Lint
pnpm lint

# Format
pnpm format
```

## Maintenance

### Mise à jour des Produits
Les produits sont gérés via le panneau d'administration à `/admin/stock-manager/products`.

### Gestion des Erreurs
Les erreurs sont loggées dans la console et dans Firebase.

### Monitoring
- Netlify Analytics pour le trafic
- Firebase pour les logs et les erreurs
- Formspree pour les soumissions de formulaires

## Contribution

Les contributions sont bienvenues! Pour participer:

1. Fork le repository
2. Créez une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commitez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Poussez vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## Contact

**MoreFix**  
10 Rue Mi-Carême  
42000 Saint-Étienne  
Tél: 07 45 92 35 38

---

© 2026 MoreFix - Développé par Mohammad Radwan
