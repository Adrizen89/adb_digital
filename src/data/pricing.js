export const pricing = [
  {
    id: 1,
    title: 'Site Vitrine',
    price: 'À partir de 700 €',
    subtitle: 'Pour présenter votre activité',
    features: [
      'Design moderne et responsive',
      "Jusqu'à 5 pages (accueil, services, à propos, contact, etc.)",
      'Formulaire de contact',
      'Optimisation SEO de base',
      'Intégration Google Analytics',
      'Version mobile optimisée',
      'Hébergement et nom de domaine inclus 1 an'
    ],
    options: [
      'Pages supplémentaires : 100€/page',
      'Galerie photos / Portfolio : +150€',
      'Blog intégré : +200€',
      'Multilingue : +250€',
    ],
    highlight: true,
    active: true,
    cta: 'Demander un devis'
  },
  {
    id: 2,
    title: 'Identité Visuelle',
    price: 'À partir de 300 €',
    subtitle: 'Pour créer votre image de marque',
    features: [
      'Création de logo professionnel',
      '3 propositions de concepts',
      'Révisions illimitées',
      'Fichiers haute définition (PNG, SVG, PDF)',
      'Charte graphique (couleurs, typographies)',
      "Guide d'utilisation du logo",
      'Formats adaptés web et print'
    ],
    options: [
      'Carte de visite : +80€',
      'Papier en-tête / Facture : +100€',
      'Bannière réseaux sociaux : +50€',
      'Déclinaisons couleurs supplémentaires : +50€'
    ],
    highlight: false,
    active: true,
    cta: 'Demander un devis'
  },
  {
    id: 3,
    title: 'Supports Print',
    price: 'À partir de 150 €',
    subtitle: 'Pour votre communication offline',
    features: [
      'Flyers / Brochures A5 ou A4',
      'Cartes de visite professionnelles',
      'Affiches événementielles',
      'Design moderne et impactant',
      'Fichiers print-ready (PDF HD)',
      'Révisions incluses',
      "Conseils pour l'impression"
    ],
    options: [
      'Catalogue / Brochure multi-pages : sur devis',
      'Packaging produit : sur devis',
      'Enseigne / Signalétique : sur devis',
      'Impression + livraison : sur devis'
    ],
    highlight: false,
    active: true,
    cta: 'Demander un devis'
  },
  {
    id: 4,
    title: 'Réseaux Sociaux',
    price: 'À partir de 120 €/mois',
    subtitle: 'Pour dynamiser votre présence en ligne',
    features: [
      'Gestion de 1 réseau social (Facebook ou Instagram)',
      '8 publications / mois (2 par semaine)',
      'Création des visuels et rédaction',
      'Planification et publication',
      'Gestion des commentaires et messages',
      'Rapport mensuel basique',
      'Stratégie éditoriale personnalisée'
    ],
    options: [
      'Réseau supplémentaire : +60€/mois',
      'Stories hebdomadaires : +50€/mois',
      'Publicité Facebook Ads : sur devis',
      'Community management avancé : +150€/mois',
    ],
    highlight: false,
    active: true,
    cta: 'Demander un devis'
  },
  {
    id: 5,
    title: 'Refonte de Site Web',
    price: 'À partir de 600 €',
    subtitle: 'Pour moderniser un site existant',
    features: [
      'Analyse de votre site actuel',
      'Nouvelle maquette moderne et responsive',
      'Migration et réorganisation des contenus',
      'Optimisation des performances (vitesse / poids)',
      'Amélioration du SEO de base',
      'Mise en conformité mobile',
      'Redirections 301 si changement de structure'
    ],
    options: [
      "Réécriture des textes : sur devis",
      'Ajout de nouvelles sections / pages : 100€/page',
      "Changement d'hébergement : sur devis",
      'Accompagnement à la refonte de votre image : sur devis'
    ],
    highlight: false,
    active: true,
    cta: 'Demander un audit gratuit'
  },
  {
    id: 6,
    title: 'Maintenance & Accompagnement',
    price: 'À partir de 30 €/mois',
    subtitle: 'Pour garder votre site à jour et en sécurité',
    features: [
      'Mises à jour techniques',
      'Sauvegardes régulières du site',
      'Surveillance basique de la disponibilité',
      'Corrections de petits bugs et ajustements',
      'Temps de support mensuel inclus (petites modifications)',
      'Rapport simplifié trimestriel',
      'Conseils pour faire évoluer votre site'
    ],
    options: [
      'Heures de développement supplémentaires : sur devis',
      'Suivi SEO mensuel : à partir de 90€/mois',
      'Ajout de nouveaux contenus (articles, pages) : sur devis',
      "Intervention d'urgence (site hors ligne) : sur devis"
    ],
    highlight: false,
    active: true,
    cta: 'Discuter de mon besoin'
  }
]

export const getActivePricing = () => {
  return pricing.filter(offer => offer.active !== false)
}

export const getHighlightedOffer = () => {
  return pricing.find(offer => offer.highlight === true && offer.active !== false)
}

export const getPricingById = (id) => {
  return pricing.find(offer => offer.id === id)
}
