export const filiersData = [
  {
    "id": 1,
    "nom": "Informatique",
    "description": "Formation aux métiers du développement logiciel, des réseaux et des systèmes d'information.",
    "image": "https://images.unsplash.com/photo-1531482615713-2afd69097998",
    "semestres": [
      {
        "id": 101,
        "nom": "Semestre 1",
        "code": "INFO-S1",
        "modules": [
          { "id": 10101, "nom": "Algorithmique et Programmation", "description": "Introduction aux algorithmes, structures de contrôle et programmation en C." },
          { "id": 10102, "nom": "Mathématiques Discrètes", "description": "Logique, ensembles, relations, graphes et combinatoire." },
          { "id": 10103, "nom": "Architecture des Ordinateurs", "description": "Fonctionnement du matériel, représentation de l'information et assembleur." },
          { "id": 10104, "nom": "Systèmes d'Exploitation", "description": "Principes des OS, gestion des processus, mémoire et fichiers." }
        ]
      },
      {
        "id": 102,
        "nom": "Semestre 2",
        "code": "INFO-S2",
        "modules": [
          { "id": 10201, "nom": "Programmation Orientée Objet", "description": "Concepts POO, classes, héritage et polymorphisme en Java." },
          { "id": 10202, "nom": "Bases de Données", "description": "Modèle relationnel, SQL, normalisation et transactions." },
          { "id": 10203, "nom": "Réseaux Informatiques", "description": "Modèle OSI, TCP/IP, routage et configuration réseau." },
          { "id": 10204, "nom": "Structures de Données", "description": "Listes, piles, files, arbres et algorithmes de tri/recherche." }
        ]
      },
      {
        "id": 103,
        "nom": "Semestre 3",
        "code": "INFO-S3",
        "modules": [
          { "id": 10301, "nom": "Développement Web", "description": "HTML, CSS, JavaScript et frameworks front-end modernes." },
          { "id": 10302, "nom": "Génie Logiciel", "description": "Cycle de vie logiciel, UML, méthodes agiles et tests." },
          { "id": 10303, "nom": "Systèmes d'Information", "description": "Conception et modélisation des SI, ERP et urbanisation." },
          { "id": 10304, "nom": "Probabilités et Statistiques", "description": "Variables aléatoires, distributions et inférence statistique." }
        ]
      },
      {
        "id": 104,
        "nom": "Semestre 4",
        "code": "INFO-S4",
        "modules": [
          { "id": 10401, "nom": "Intelligence Artificielle", "description": "Recherche heuristique, apprentissage automatique et agents intelligents." },
          { "id": 10402, "nom": "Sécurité Informatique", "description": "Cryptographie, authentification, vulnérabilités et pare-feu." },
          { "id": 10403, "nom": "Développement Mobile", "description": "Applications mobiles natives et cross-platform (Android, Flutter)." },
          { "id": 10404, "nom": "Cloud Computing", "description": "Virtualisation, services cloud, conteneurs et DevOps." }
        ]
      }
    ]
  },
  {
    "id": 2,
    "nom": "Génie Civil",
    "description": "Étude et conception des infrastructures, bâtiments et ouvrages d'art.",
    "image": "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
    "semestres": [
      {
        "id": 201,
        "nom": "Semestre 1",
        "code": "GC-S1",
        "modules": [
          { "id": 20101, "nom": "Résistance des Matériaux", "description": "Contraintes, déformations et dimensionnement des structures." },
          { "id": 20102, "nom": "Dessin Technique et DAO", "description": "Lecture de plans, projection et conception assistée par ordinateur." },
          { "id": 20103, "nom": "Mathématiques pour l'Ingénieur", "description": "Analyse, algèbre linéaire et équations différentielles appliquées." },
          { "id": 20104, "nom": "Géologie Appliquée", "description": "Étude des sols, roches et leur comportement en construction." }
        ]
      },
      {
        "id": 202,
        "nom": "Semestre 2",
        "code": "GC-S2",
        "modules": [
          { "id": 20201, "nom": "Béton Armé", "description": "Calcul et dimensionnement des éléments en béton armé." },
          { "id": 20202, "nom": "Topographie", "description": "Mesure, nivellement et cartographie des terrains." },
          { "id": 20203, "nom": "Mécanique des Sols", "description": "Propriétés des sols, tassements et stabilité des fondations." },
          { "id": 20204, "nom": "Hydraulique", "description": "Écoulement des fluides, réseaux et ouvrages hydrauliques." }
        ]
      },
      {
        "id": 203,
        "nom": "Semestre 3",
        "code": "GC-S3",
        "modules": [
          { "id": 20301, "nom": "Construction Métallique", "description": "Conception et calcul des structures en acier." },
          { "id": 20302, "nom": "Routes et Voiries", "description": "Dimensionnement des chaussées et aménagement urbain." },
          { "id": 20303, "nom": "Gestion de Projet", "description": "Planification, budgétisation et suivi de chantiers." },
          { "id": 20304, "nom": "Bâtiment et Énergie", "description": "Isolation, thermique du bâtiment et efficacité énergétique." }
        ]
      },
      {
        "id": 204,
        "nom": "Semestre 4",
        "code": "GC-S4",
        "modules": [
          { "id": 20401, "nom": "Ouvrages d'Art", "description": "Conception des ponts, tunnels et structures spéciales." },
          { "id": 20402, "nom": "Géotechnique", "description": "Reconnaissance des sols, soutènements et fondations profondes." },
          { "id": 20403, "nom": "Environnement et Développement Durable", "description": "Impact environnemental et construction durable." },
          { "id": 20404, "nom": "Économie de la Construction", "description": "Coûts, marchés et estimation des travaux." }
        ]
      }
    ]
  },
  {
    "id": 3,
    "nom": "Génie Électrique",
    "description": "Formation sur les systèmes électriques, l'automatisation et l'électronique de puissance.",
    "image": "https://images.unsplash.com/photo-1581092160562-40aa08e78837",
    "semestres": [
      {
        "id": 301,
        "nom": "Semestre 1",
        "code": "GE-S1",
        "modules": [
          { "id": 30101, "nom": "Électronique Analogique", "description": "Diodes, transistors et circuits amplificateurs." },
          { "id": 30102, "nom": "Circuits Électriques", "description": "Lois de Kirchhoff, théorèmes et analyse des circuits." },
          { "id": 30103, "nom": "Mathématiques Appliquées", "description": "Analyse de Fourier, transformées de Laplace et algèbre." },
          { "id": 30104, "nom": "Informatique Industrielle", "description": "Introduction aux microcontrôleurs et programmation embarquée." }
        ]
      },
      {
        "id": 302,
        "nom": "Semestre 2",
        "code": "GE-S2",
        "modules": [
          { "id": 30201, "nom": "Électronique de Puissance", "description": "Redresseurs, hacheurs, onduleurs et convertisseurs." },
          { "id": 30202, "nom": "Machines Électriques", "description": "Transformateurs, moteurs synchrones et asynchrones." },
          { "id": 30203, "nom": "Automatique", "description": "Systèmes asservis, fonctions de transfert et stabilité." },
          { "id": 30204, "nom": "Capteurs et Instrumentation", "description": "Mesure, conditionnement de signal et métrologie." }
        ]
      },
      {
        "id": 303,
        "nom": "Semestre 3",
        "code": "GE-S3",
        "modules": [
          { "id": 30301, "nom": "Automatisation Industrielle", "description": "Automates programmables, API et supervision." },
          { "id": 30302, "nom": "Réseaux Électriques", "description": "Production, transport et distribution de l'énergie." },
          { "id": 30303, "nom": "Électronique Numérique", "description": "Logique combinatoire, séquentielle et FPGA." },
          { "id": 30304, "nom": "Énergies Renouvelables", "description": "Systèmes photovoltaïques, éoliens et stockage d'énergie." }
        ]
      },
      {
        "id": 304,
        "nom": "Semestre 4",
        "code": "GE-S4",
        "modules": [
          { "id": 30401, "nom": "Systèmes Embarqués", "description": "Conception de systèmes temps réel et microcontrôleurs avancés." },
          { "id": 30402, "nom": "Protection des Réseaux", "description": "Relais, disjoncteurs et coordination des protections." },
          { "id": 30403, "nom": "Commande des Machines", "description": "Variation de vitesse, onduleurs et contrôle vectoriel." },
          { "id": 30404, "nom": "Smart Grids", "description": "Réseaux intelligents, compteurs communicants et gestion de l'énergie." }
        ]
      }
    ]
  },
  {
    "id": 4,
    "nom": "Génie Mécanique",
    "description": "Conception, fabrication et maintenance des systèmes mécaniques et industriels.",
    "image": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    "semestres": [
      {
        "id": 401,
        "nom": "Semestre 1",
        "code": "GM-S1",
        "modules": [
          { "id": 40101, "nom": "Mécanique du Solide", "description": "Statique, cinématique et dynamique des solides." },
          { "id": 40102, "nom": "Dessin Industriel", "description": "Normes de représentation, cotation et lecture de plans." },
          { "id": 40103, "nom": "Mathématiques pour la Mécanique", "description": "Calcul vectoriel, équations différentielles et analyse." },
          { "id": 40104, "nom": "Matériaux", "description": "Propriétés des métaux, polymères et composites." }
        ]
      },
      {
        "id": 402,
        "nom": "Semestre 2",
        "code": "GM-S2",
        "modules": [
          { "id": 40201, "nom": "Résistance des Matériaux", "description": "Contraintes, flexions, torsions et critères de dimensionnement." },
          { "id": 40202, "nom": "Thermodynamique", "description": "Cycles thermodynamiques et machines thermiques." },
          { "id": 40203, "nom": "Fabrication Mécanique", "description": "Usinage, tournage, fraisage et procédés d'assemblage." },
          { "id": 40204, "nom": "Mécanique des Fluides", "description": "Statique, dynamique des fluides et pertes de charge." }
        ]
      },
      {
        "id": 403,
        "nom": "Semestre 3",
        "code": "GM-S3",
        "modules": [
          { "id": 40301, "nom": "CAO/FAO", "description": "Conception et fabrication assistées par ordinateur (SolidWorks, CATIA)." },
          { "id": 40302, "nom": "Vibrations et Acoustique", "description": "Analyse des vibrations mécaniques et isolation." },
          { "id": 40303, "nom": "Automatismes", "description": "Pneumatique, hydraulique et commande des systèmes." },
          { "id": 40304, "nom": "Maintenance Industrielle", "description": "Stratégies de maintenance préventive et prédictive." }
        ]
      },
      {
        "id": 404,
        "nom": "Semestre 4",
        "code": "GM-S4",
        "modules": [
          { "id": 40401, "nom": "Conception Mécanique", "description": "Méthodologie de conception et tolérancement." },
          { "id": 40402, "nom": "Machines Hydrauliques", "description": "Pompes, turbines et circuits hydrauliques." },
          { "id": 40403, "nom": "Mécatronique", "description": "Intégration mécanique, électronique et informatique." },
          { "id": 40404, "nom": "Gestion de Production", "description": "Planification, ordonnancement et lean manufacturing." }
        ]
      }
    ]
  },
  {
    "id": 5,
    "nom": "Gestion",
    "description": "Formation en management, comptabilité, finance et stratégie d'entreprise.",
    "image": "https://images.unsplash.com/photo-1552664730-d307ca884978",
    "semestres": [
      {
        "id": 501,
        "nom": "Semestre 1",
        "code": "GES-S1",
        "modules": [
          { "id": 50101, "nom": "Comptabilité Générale", "description": "Principes comptables, journal, bilan et compte de résultat." },
          { "id": 50102, "nom": "Économie Générale", "description": "Microéconomie, macroéconomie et mécanismes de marché." },
          { "id": 50103, "nom": "Mathématiques Financières", "description": "Intérêts, actualisation et calculs financiers de base." },
          { "id": 50104, "nom": "Introduction au Management", "description": "Théories des organisations et fonctions managériales." }
        ]
      },
      {
        "id": 502,
        "nom": "Semestre 2",
        "code": "GES-S2",
        "modules": [
          { "id": 50201, "nom": "Comptabilité Analytique", "description": "Calcul des coûts, centres d'analyse et prise de décision." },
          { "id": 50202, "nom": "Droit des Affaires", "description": "Droit commercial, sociétés et obligations juridiques." },
          { "id": 50203, "nom": "Statistiques Appliquées", "description": "Description statistique, échantillonnage et tests." },
          { "id": 50204, "nom": "Marketing Fondamental", "description": "Segmentation, ciblage, positionnement et mix marketing." }
        ]
      },
      {
        "id": 503,
        "nom": "Semestre 3",
        "code": "GES-S3",
        "modules": [
          { "id": 50301, "nom": "Finance d'Entreprise", "description": "Analyse financière, investissement et financement." },
          { "id": 50302, "nom": "Gestion des Ressources Humaines", "description": "Recrutement, formation, rémunération et relations sociales." },
          { "id": 50303, "nom": "Systèmes d'Information de Gestion", "description": "ERP, tableaux de bord et outils décisionnels." },
          { "id": 50304, "nom": "Contrôle de Gestion", "description": "Budgets, reporting et indicateurs de performance." }
        ]
      },
      {
        "id": 504,
        "nom": "Semestre 4",
        "code": "GES-S4",
        "modules": [
          { "id": 50401, "nom": "Stratégie d'Entreprise", "description": "Diagnostic stratégique, avantages concurrentiels et croissance." },
          { "id": 50402, "nom": "Audit et Contrôle", "description": "Normes d'audit, contrôle interne et gouvernance." },
          { "id": 50403, "nom": "Entrepreneuriat", "description": "Création d'entreprise, business plan et innovation." },
          { "id": 50404, "nom": "Management de Projet", "description": "Planification, risques et gestion d'équipe projet." }
        ]
      }
    ]
  },
  {
    "id": 6,
    "nom": "Marketing et Commerce",
    "description": "Étude des techniques de vente, de communication et d'analyse de marché.",
    "image": "https://images.unsplash.com/photo-1557804506-669a67965ba0",
    "semestres": [
      {
        "id": 601,
        "nom": "Semestre 1",
        "code": "MKC-S1",
        "modules": [
          { "id": 60101, "nom": "Fondamentaux du Marketing", "description": "Concepts clés, besoins, comportement du consommateur." },
          { "id": 60102, "nom": "Techniques de Vente", "description": "Prospection, négociation et closing." },
          { "id": 60103, "nom": "Communication Commerciale", "description": "Messages, supports et stratégies de communication." },
          { "id": 60104, "nom": "Économie et Marchés", "description": "Analyse des marchés et environnement économique." }
        ]
      },
      {
        "id": 602,
        "nom": "Semestre 2",
        "code": "MKC-S2",
        "modules": [
          { "id": 60201, "nom": "Études de Marché", "description": "Méthodes qualitatives et quantitatives de recherche." },
          { "id": 60202, "nom": "Marketing Digital", "description": "SEO, réseaux sociaux, e-mailing et publicité en ligne." },
          { "id": 60203, "nom": "Comportement du Consommateur", "description": "Psychologie, motivations et processus d'achat." },
          { "id": 60204, "nom": "Gestion de la Relation Client", "description": "CRM, fidélisation et service client." }
        ]
      },
      {
        "id": 603,
        "nom": "Semestre 3",
        "code": "MKC-S3",
        "modules": [
          { "id": 60301, "nom": "Marketing Stratégique", "description": "Segmentation, ciblage et positionnement avancés." },
          { "id": 60302, "nom": "Commerce International", "description": "Import/export, incoterms et logistique internationale." },
          { "id": 60303, "nom": "Branding et Image de Marque", "description": "Identité de marque, storytelling et réputation." },
          { "id": 60304, "nom": "Distribution et Merchandising", "description": "Canaux de distribution et mise en valeur en point de vente." }
        ]
      },
      {
        "id": 604,
        "nom": "Semestre 4",
        "code": "MKC-S4",
        "modules": [
          { "id": 60401, "nom": "Marketing B2B", "description": "Marketing industriel et relations entre entreprises." },
          { "id": 60402, "nom": "Data Marketing", "description": "Analyse de données, segmentation et personnalisation." },
          { "id": 60403, "nom": "Négociation Avancée", "description": "Techniques avancées de négociation et gestion des conflits." },
          { "id": 60404, "nom": "Projet Commercial", "description": "Élaboration et pilotage d'un plan commercial complet." }
        ]
      }
    ]
  },
  {
    "id": 7,
    "nom": "Biologie",
    "description": "Étude du vivant, des écosystèmes et des applications biomédicales.",
    "image": "https://images.unsplash.com/photo-1530026405186-ed1f139313f8",
    "semestres": [
      {
        "id": 701,
        "nom": "Semestre 1",
        "code": "BIO-S1",
        "modules": [
          { "id": 70101, "nom": "Biologie Cellulaire", "description": "Structure et fonctionnement de la cellule." },
          { "id": 70102, "nom": "Biochimie", "description": "Molécules biologiques, protéines et métabolisme." },
          { "id": 70103, "nom": "Chimie Générale", "description": "Atomistique, liaisons et réactions chimiques." },
          { "id": 70104, "nom": "Mathématiques et Physique pour la Biologie", "description": "Outils quantitatifs appliqués aux sciences du vivant." }
        ]
      },
      {
        "id": 702,
        "nom": "Semestre 2",
        "code": "BIO-S2",
        "modules": [
          { "id": 70201, "nom": "Génétique", "description": "Hérédité, ADN, mutations et génétique des populations." },
          { "id": 70202, "nom": "Biologie Végétale", "description": "Physiologie et organisation des plantes." },
          { "id": 70203, "nom": "Biologie Animale", "description": "Organisation et physiologie des animaux." },
          { "id": 70204, "nom": "Microbiologie", "description": "Bactéries, virus, champignons et techniques de culture." }
        ]
      },
      {
        "id": 703,
        "nom": "Semestre 3",
        "code": "BIO-S3",
        "modules": [
          { "id": 70301, "nom": "Biologie Moléculaire", "description": "Réplication, transcription et traduction." },
          { "id": 70302, "nom": "Écologie", "description": "Écosystèmes, biodiversité et interactions." },
          { "id": 70303, "nom": "Physiologie Humaine", "description": "Systèmes cardiovasculaire, nerveux et digestif." },
          { "id": 70304, "nom": "Biostatistiques", "description": "Analyse statistique des données biologiques." }
        ]
      },
      {
        "id": 704,
        "nom": "Semestre 4",
        "code": "BIO-S4",
        "modules": [
          { "id": 70401, "nom": "Immunologie", "description": "Système immunitaire, anticorps et réponses immunitaires." },
          { "id": 70402, "nom": "Biotechnologies", "description": "Applications industrielles et médicales du vivant." },
          { "id": 70403, "nom": "Génomique et Protéomique", "description": "Analyse des génomes et des protéines à grande échelle." },
          { "id": 70404, "nom": "Bioéthique", "description": "Enjeux éthiques et réglementaires des sciences du vivant." }
        ]
      }
    ]
  },
  {
    "id": 8,
    "nom": "Chimie",
    "description": "Analyse des substances, réactions chimiques et procédés industriels.",
    "image": "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69",
    "semestres": [
      {
        "id": 801,
        "nom": "Semestre 1",
        "code": "CHI-S1",
        "modules": [
          { "id": 80101, "nom": "Chimie Générale", "description": "Structure atomique, liaisons et équilibres." },
          { "id": 80102, "nom": "Chimie Organique", "description": "Nomenclature, fonctions et réactions des composés organiques." },
          { "id": 80103, "nom": "Mathématiques pour la Chimie", "description": "Analyse et algèbre appliquées à la chimie." },
          { "id": 80104, "nom": "Physique pour la Chimie", "description": "Thermodynamique et mécanique appliquées." }
        ]
      },
      {
        "id": 802,
        "nom": "Semestre 2",
        "code": "CHI-S2",
        "modules": [
          { "id": 80201, "nom": "Chimie Analytique", "description": "Méthodes de dosage, titrages et spectroscopie." },
          { "id": 80202, "nom": "Thermodynamique Chimique", "description": "Équilibres, enthalpie, entropie et énergie libre." },
          { "id": 80203, "nom": "Chimie des Solutions", "description": "Acides/bases, solubilité et complexes." },
          { "id": 80204, "nom": "Travaux Pratiques de Chimie", "description": "Expérimentation, sécurité et analyse en laboratoire." }
        ]
      },
      {
        "id": 803,
        "nom": "Semestre 3",
        "code": "CHI-S3",
        "modules": [
          { "id": 80301, "nom": "Chimie Organique Avancée", "description": "Mécanismes réactionnels et synthèse organique." },
          { "id": 80302, "nom": "Chimie Minérale", "description": "Éléments de transition, coordination et cristallographie." },
          { "id": 80303, "nom": "Cinétique Chimique", "description": "Vitesses de réaction et mécanismes cinétiques." },
          { "id": 80304, "nom": "Instrumentation Analytique", "description": "HPLC, GC, spectrométrie de masse et RMN." }
        ]
      },
      {
        "id": 804,
        "nom": "Semestre 4",
        "code": "CHI-S4",
        "modules": [
          { "id": 80401, "nom": "Chimie des Polymères", "description": "Synthèse, propriétés et applications des polymères." },
          { "id": 80402, "nom": "Génie des Procédés", "description": "Réacteurs, bilans matière et énergie." },
          { "id": 80403, "nom": "Chimie de l'Environnement", "description": "Pollution, traitement des eaux et chimie verte." },
          { "id": 80404, "nom": "Catalyse", "description": "Catalyseurs homogènes et hétérogènes en industrie." }
        ]
      }
    ]
  },
  {
    "id": 9,
    "nom": "Physique",
    "description": "Étude des lois fondamentales de la nature, de la matière et de l'énergie.",
    "image": "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
    "semestres": [
      {
        "id": 901,
        "nom": "Semestre 1",
        "code": "PHY-S1",
        "modules": [
          { "id": 90101, "nom": "Mécanique Classique", "description": "Lois de Newton, cinématique et dynamique." },
          { "id": 90102, "nom": "Mathématiques pour la Physique", "description": "Analyse, algèbre et géométrie différentielle." },
          { "id": 90103, "nom": "Thermodynamique", "description": "Lois fondamentales, cycles et entropie." },
          { "id": 90104, "nom": "Électricité et Magnétisme", "description": "Champs électriques, magnétiques et induction." }
        ]
      },
      {
        "id": 902,
        "nom": "Semestre 2",
        "code": "PHY-S2",
        "modules": [
          { "id": 90201, "nom": "Optique Géométrique et Physique", "description": "Réfraction, lentilles, interférences et diffraction." },
          { "id": 90202, "nom": "Physique des Ondes", "description": "Ondes mécaniques, sonores et électromagnétiques." },
          { "id": 90203, "nom": "Chimie pour la Physique", "description": "Structure de la matière et réactions." },
          { "id": 90204, "nom": "Travaux Pratiques de Physique", "description": "Expériences, mesures et incertitudes." }
        ]
      },
      {
        "id": 903,
        "nom": "Semestre 3",
        "code": "PHY-S3",
        "modules": [
          { "id": 90301, "nom": "Mécanique Quantique", "description": "Fonction d'onde, opérateurs et principes fondamentaux." },
          { "id": 90302, "nom": "Physique Statistique", "description": "Ensembles statistiques et distributions." },
          { "id": 90303, "nom": "Électromagnétisme", "description": "Équations de Maxwell et propagation." },
          { "id": 90304, "nom": "Relativité Restreinte", "description": "Transformations de Lorentz et espace-temps." }
        ]
      },
      {
        "id": 904,
        "nom": "Semestre 4",
        "code": "PHY-S4",
        "modules": [
          { "id": 90401, "nom": "Physique du Solide", "description": "Cristaux, bandes d'énergie et propriétés." },
          { "id": 90402, "nom": "Physique Nucléaire", "description": "Noyaux, radioactivité et réactions nucléaires." },
          { "id": 90403, "nom": "Astrophysique", "description": "Étoiles, galaxies et cosmologie." },
          { "id": 90404, "nom": "Physique Numérique", "description": "Simulation et méthodes numériques en physique." }
        ]
      }
    ]
  },
  {
    "id": 10,
    "nom": "Mathématiques",
    "description": "Formation aux concepts abstraits, à l'analyse, à l'algèbre et aux probabilités.",
    "image": "https://images.unsplash.com/photo-1509228468518-180dd4864904",
    "semestres": [
      {
        "id": 1001,
        "nom": "Semestre 1",
        "code": "MAT-S1",
        "modules": [
          { "id": 100101, "nom": "Analyse 1", "description": "Suites, limites, continuité et dérivation." },
          { "id": 100102, "nom": "Algèbre 1", "description": "Logique, ensembles, relations et structures algébriques." },
          { "id": 100103, "nom": "Géométrie", "description": "Vecteurs, droites, plans et transformations." },
          { "id": 100104, "nom": "Informatique pour Mathématiciens", "description": "Algorithmique et programmation (Python, Scilab)." }
        ]
      },
      {
        "id": 1002,
        "nom": "Semestre 2",
        "code": "MAT-S2",
        "modules": [
          { "id": 100201, "nom": "Analyse 2", "description": "Intégration, séries et équations différentielles." },
          { "id": 100202, "nom": "Algèbre 2", "description": "Espaces vectoriels, matrices et déterminants." },
          { "id": 100203, "nom": "Probabilités", "description": "Espaces probabilisés, variables aléatoires et lois." },
          { "id": 100204, "nom": "Statistiques Descriptives", "description": "Organisation, représentation et analyse de données." }
        ]
      },
      {
        "id": 1003,
        "nom": "Semestre 3",
        "code": "MAT-S3",
        "modules": [
          { "id": 100301, "nom": "Analyse Complexe", "description": "Fonctions holomorphes, intégrales et séries de Laurent." },
          { "id": 100302, "nom": "Algèbre Linéaire Avancée", "description": "Diagonalisation, formes bilinéaires et espaces euclidiens." },
          { "id": 100303, "nom": "Topologie", "description": "Espaces topologiques, continuité et compacité." },
          { "id": 100304, "nom": "Calcul Numérique", "description": "Méthodes numériques, interpolation et résolution approchée." }
        ]
      },
      {
        "id": 1004,
        "nom": "Semestre 4",
        "code": "MAT-S4",
        "modules": [
          { "id": 100401, "nom": "Équations aux Dérivées Partielles", "description": "Classification, résolution et applications." },
          { "id": 100402, "nom": "Statistique Inférentielle", "description": "Estimation, tests d'hypothèses et régression." },
          { "id": 100403, "nom": "Optimisation", "description": "Programmation linéaire, non linéaire et algorithmes." },
          { "id": 100404, "nom": "Théorie des Nombres", "description": "Nombres premiers, congruences et applications." }
        ]
      }
    ]
  }
];