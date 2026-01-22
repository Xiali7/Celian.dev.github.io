// Projects Data - FR/EN with video trailers
const projectsData = {
  1: {
    title: "Maison L'Écureuil",
    year: "2024",
    role: {
      fr: "Développeur Full Stack • Stage",
      en: "Full Stack Developer • Internship",
    },
    tags: ["HTML/CSS", "JavaScript", "Design", "Full Stack"],
    image: "img/imagesecureil.jpeg",
    logoImage: "img/Logomaison.png",
    videoId: null,
    description: {
      fr: "Création d'une identité numérique complète et développement du site web pour une maison d'hôtes.",
      en: "Complete digital identity creation and website development for a guest house.",
    },
    content: {
      fr: `
        <h3>📋 Contexte du projet</h3>
        <p>Stage de 3 mois (Mai-Juillet 2024) pour la création complète de l'identité numérique de <strong>Maison L'Écureuil</strong>, une maison d'hôtes familiale située à Beauzac (43).</p>
        
        <h3>🎯 Ambition du projet</h3>
        <p>Créer une présence digitale professionnelle et accueillante qui reflète l'identité de la maison d'hôtes et facilite la réservation en ligne.</p>
        
        <h3>📝 Description des étapes</h3>
        <ul>
          <li><strong>Phase 1 :</strong> Audit et recherche des besoins clients</li>
          <li><strong>Phase 2 :</strong> Création de l'identité graphique (logo, charte couleurs, typographie)</li>
          <li><strong>Phase 3 :</strong> Développement du site web responsive</li>
          <li><strong>Phase 4 :</strong> Intégration système de réservation et animations</li>
          <li><strong>Phase 5 :</strong> Tests et déploiement en production</li>
        </ul>
        
        <h3>🛠️ Technologies utilisées</h3>
        <ul>
          <li>Frontend : HTML5, CSS3, JavaScript (Vanilla)</li>
          <li>Design : Figma pour les maquettes</li>
          <li>Hébergement : OVH</li>
          <li>CMS : Intégration custom</li>
        </ul>
        
        <h3>💡 Compétences développées</h3>
        <ul>
          <li><strong>Techniques :</strong> Développement Full Stack, responsive design, optimisation SEO</li>
          <li><strong>Transversales :</strong> Gestion de projet, communication client</li>
          <li><strong>Humaines :</strong> Écoute client, adaptabilité, travail sous deadline</li>
        </ul>
        
        <h3>📌 Réflexion et conclusions</h3>
        <p>Ce projet m'a permis de comprendre le cycle complet d'un projet web : de l'étude des besoins à la livraison. J'ai appris l'importance de la communication avec le client et l'adaptabilité face aux changements. Le site est désormais opérationnel et génère des réservations, validant l'efficacité de notre approche UX/UI.</p>
      `,
      en: `
        <h3>📋 Project Context</h3>
        <p>3-month internship (May-July 2024) for the complete creation of the digital identity of <strong>Maison L'Écureuil</strong>, a family guest house located in Beauzac (43).</p>
        
        <h3>🎯 Project Ambition</h3>
        <p>Create a professional and welcoming digital presence that reflects the identity of the guest house and facilitates online booking.</p>
        
        <h3>📝 Project Steps</h3>
        <ul>
          <li><strong>Phase 1:</strong> Audit and needs research</li>
          <li><strong>Phase 2:</strong> Graphic identity creation (logo, color scheme, typography)</li>
          <li><strong>Phase 3:</strong> Responsive website development</li>
          <li><strong>Phase 4:</strong> Booking system integration and animations</li>
          <li><strong>Phase 5:</strong> Testing and production deployment</li>
        </ul>
        
        <h3>🛠️ Technologies Used</h3>
        <ul>
          <li>Frontend: HTML5, CSS3, JavaScript (Vanilla)</li>
          <li>Design: Figma for mockups</li>
          <li>Hosting: OVH</li>
          <li>CMS: Custom integration</li>
        </ul>
        
        <h3>💡 Developed Skills</h3>
        <ul>
          <li><strong>Technical:</strong> Full Stack development, responsive design, SEO optimization</li>
          <li><strong>Transversal:</strong> Project management, client communication</li>
          <li><strong>Human:</strong> Client listening, adaptability, deadline management</li>
        </ul>
        
        <h3>📌 Reflection and Conclusions</h3>
        <p>This project allowed me to understand the complete cycle of a web project: from requirement study to delivery. I learned the importance of client communication and adaptability to changes. The site is now operational and generates bookings, validating the effectiveness of our UX/UI approach.</p>
      `,
    },
    link: "https://maisonlecureuil.fr/html/index.html",
  },
  2: {
    title: "Musée VR",
    titleEn: "VR Museum",
    year: "2023",
    role: {
      fr: "Développeur VR • Projet Étudiant",
      en: "VR Developer • Student Project",
    },
    tags: ["Unity", "VR", "Blender", "Substance"],
    image: "img/ImageMusee1.png",
    videoId: null,
    description: {
      fr: "Développement d'un musée virtuel en réalité virtuelle présentant des œuvres d'art contemporaines.",
      en: "Development of a virtual museum in virtual reality featuring contemporary artworks.",
    },
    content: {
      fr: `
        <h3>📋 Contexte du projet</h3>
        <p>Projet étudiant majeur (Mai-Décembre 2023) réalisé à l'IUT Clermont Auvergne en partenariat avec un musée local : création d'un <strong>musée virtuel</strong> immersif en réalité virtuelle.</p>
        
        <h3>🎯 Ambition du projet</h3>
        <p>Rendre accessible les œuvres d'art à un public plus large en créant une expérience immersive et interactive en VR, complément au musée physique.</p>
        
        <h3>📝 Description des étapes</h3>
        <ul>
          <li><strong>Phase 1 :</strong> Étude du parcours muséal et préparation des actifs</li>
          <li><strong>Phase 2 :</strong> Modélisation 3D des espaces et des œuvres d'art</li>
          <li><strong>Phase 3 :</strong> Texturing et matériaux PBR avec Substance Painter</li>
          <li><strong>Phase 4 :</strong> Développement Unity et optimisation pour VR</li>
          <li><strong>Phase 5 :</strong> Tests sur casque VR et itérations utilisateur</li>
        </ul>
        
        <h3>🛠️ Technologies utilisées</h3>
        <ul>
          <li>Moteur : Unity 2020 LTS</li>
          <li>Modélisation : Blender 2.93</li>
          <li>Texturing : Substance Painter</li>
          <li>VR SDK : OpenXR</li>
        </ul>
        
        <h3>💡 Compétences développées</h3>
        <ul>
          <li><strong>Techniques :</strong> Développement VR, optimisation temps réel, gestion des performances</li>
          <li><strong>Transversales :</strong> Travail en équipe, gestion de projet Agile</li>
          <li><strong>Humaines :</strong> Collaboration interdisciplinaire, présentation publique</li>
        </ul>
        
        <h3>📌 Réflexion et conclusions</h3>
        <p>Ce projet m'a fasciné par la complexité de l'optimisation en VR. Les contraintes techniques m'ont forcé à repenser l'architecture du projet et les stratégies de rendu. Le retour utilisateur sur casque a validé notre approche et m'a motivé à poursuivre dans le domaine de la VR.</p>
      `,
      en: `
        <h3>📋 Project Context</h3>
        <p>Major student project (May-December 2023) carried out at IUT Clermont Auvergne in partnership with a local museum: creation of an immersive <strong>virtual museum</strong> in virtual reality.</p>
        
        <h3>🎯 Project Ambition</h3>
        <p>Make artworks accessible to a wider audience by creating an immersive and interactive VR experience, complementing the physical museum.</p>
        
        <h3>📝 Project Steps</h3>
        <ul>
          <li><strong>Phase 1:</strong> Museum tour study and asset preparation</li>
          <li><strong>Phase 2:</strong> 3D modeling of spaces and artworks</li>
          <li><strong>Phase 3:</strong> PBR texturing with Substance Painter</li>
          <li><strong>Phase 4:</strong> Unity development and VR optimization</li>
          <li><strong>Phase 5:</strong> VR headset testing and user iterations</li>
        </ul>
        
        <h3>🛠️ Technologies Used</h3>
        <ul>
          <li>Engine: Unity 2020 LTS</li>
          <li>Modeling: Blender 2.93</li>
          <li>Texturing: Substance Painter</li>
          <li>VR SDK: OpenXR</li>
        </ul>
        
        <h3>💡 Developed Skills</h3>
        <ul>
          <li><strong>Technical:</strong> VR development, real-time optimization, performance management</li>
          <li><strong>Transversal:</strong> Teamwork, Agile project management</li>
          <li><strong>Human:</strong> Interdisciplinary collaboration, public presentation</li>
        </ul>
        
        <h3>📌 Reflection and Conclusions</h3>
        <p>This project fascinated me with VR optimization complexity. Technical constraints forced me to rethink the project architecture and rendering strategies. User feedback on headset validated our approach and motivated me to continue in the VR field.</p>
      `,
    },
    link: null,
  },
  3: {
    title: "Beat Knight - Plateformer en rythme",
    titleEn: "Beat Knight - Rhythm Platformer",
    year: "2023",
    role: {
      fr: "Développeur Unity • Projet Personnel",
      en: "Unity Developer • Personal Project",
    },
    tags: ["Unity", "2D", "C#", "Game Design"],
    image: "img/image2beatkngiht.png",
    logoImage: "img/BeatKnight.png",
    videoId: "3gEuaocqKsQ",
    description: {
      fr: "Développement d'un jeu de plateforme 2D synchronisé à la musique, mêlant gameplay et rythme.",
      en: "Development of a 2D platformer game synchronized with music, blending gameplay and rhythm.",
    },
    content: {
      fr: `
        <h3>🎥 Bande-annonce du projet</h3>
        <div class="video-container">
          <iframe width="100%" height="400" src="https://www.youtube.com/embed/3gEuaocqKsQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        
        <h3>📋 Contexte du projet</h3>
        <p><strong>Beat Knight</strong> est un projet personnel d'une année de développement : un jeu de plateforme 2D où chaque action du joueur est synchronisée avec la musique. Inspiré par des jeux comme Crypt of the NecroDancer.</p>
        
        <h3>🎯 Ambition du projet</h3>
        <p>Créer une expérience de jeu innovante où le rythme n'est pas optionnel mais central. Le joueur doit maîtriser le timing pour progresser, créant un défi rhythmique et moteur.</p>
        
        <h3>📝 Description des étapes</h3>
        <ul>
          <li><strong>Phase 1 :</strong> Game Design et prototypage du système rhythmique</li>
          <li><strong>Phase 2 :</strong> Développement C# du système de synchronisation audio/visuel</li>
          <li><strong>Phase 3 :</strong> Création des niveaux et level design</li>
          <li><strong>Phase 4 :</strong> Polish du gameplay et animations des personnages</li>
          <li><strong>Phase 5 :</strong> Intégration musicale et sound design</li>
        </ul>
        
        <h3>🛠️ Technologies utilisées</h3>
        <ul>
          <li>Moteur : Unity 2021 LTS</li>
          <li>Langage : C#</li>
          <li>Audio : FMOD Studio pour la synchronisation musicale</li>
          <li>Art : Aseprite pour les animations pixel art</li>
        </ul>
        
        <h3>💡 Compétences développées</h3>
        <ul>
          <li><strong>Techniques :</strong> Programmation gameplay, système audio synchronisé, gestion d'état</li>
          <li><strong>Transversales :</strong> Game design, level design, balancing</li>
          <li><strong>Humaines :</strong> Persistance, auto-critique, itération créative</li>
        </ul>
        
        <h3>📌 Réflexion et conclusions</h3>
        <p>Beat Knight m'a appris que créer un jeu n'est pas seulement du code, c'est du ressenti. Le plus grand défi a été de créer du plaisir à travers la synchronisation rhythmique. Les retours joueurs ont confirmé que le concept fonctionne et est addictif. Ce projet me montre que je peux mener à terme un projet ambitieux de A à Z.</p>
      `,
      en: `
        <h3>🎥 Project Trailer</h3>
        <div class="video-container">
          <iframe width="100%" height="400" src="https://www.youtube.com/embed/3gEuaocqKsQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        
        <h3>📋 Project Context</h3>
        <p><strong>Beat Knight</strong> is a personal project developed over a year: a 2D platformer game where every player action is synchronized with music. Inspired by games like Crypt of the NecroDancer.</p>
        
        <h3>🎯 Project Ambition</h3>
        <p>Create an innovative gaming experience where rhythm is not optional but central. The player must master timing to progress, creating a rhythmic and motor challenge.</p>
        
        <h3>📝 Project Steps</h3>
        <ul>
          <li><strong>Phase 1:</strong> Game Design and rhythmic system prototyping</li>
          <li><strong>Phase 2:</strong> C# development of audio/visual synchronization system</li>
          <li><strong>Phase 3:</strong> Level creation and level design</li>
          <li><strong>Phase 4:</strong> Gameplay polish and character animations</li>
          <li><strong>Phase 5:</strong> Musical integration and sound design</li>
        </ul>
        
        <h3>🛠️ Technologies Used</h3>
        <ul>
          <li>Engine: Unity 2021 LTS</li>
          <li>Language: C#</li>
          <li>Audio: FMOD Studio for musical synchronization</li>
          <li>Art: Aseprite for pixel art animations</li>
        </ul>
        
        <h3>💡 Developed Skills</h3>
        <ul>
          <li><strong>Technical:</strong> Gameplay programming, synchronized audio system, state management</li>
          <li><strong>Transversal:</strong> Game design, level design, balancing</li>
          <li><strong>Human:</strong> Persistence, self-criticism, creative iteration</li>
        </ul>
        
        <h3>📌 Reflection and Conclusions</h3>
        <p>Beat Knight taught me that creating a game is not just code, it's about feel. The biggest challenge was creating pleasure through rhythmic synchronization. Player feedback confirmed that the concept works and is addictive. This project shows me that I can see through an ambitious project from A to Z.</p>
      `,
    },
    link: null,
  },
  4: {
    title: "Modélisation 3D",
    titleEn: "3D Modeling",
    year: {
      fr: "Depuis 2018",
      en: "Since 2018",
    },
    role: {
      fr: "Apprentissage personnel • Autodidacte",
      en: "Personal Learning • Self-taught",
    },
    tags: ["Blender", "Substance", "Texturing", "3D"],
    image: "img/modeillu.png",
    videoId: null,
    description: {
      fr: "Portfolio de modèles 3D créés et adaptés pour différents moteurs graphiques depuis 2018.",
      en: "Portfolio of 3D models created and adapted for different graphics engines since 2018.",
    },
    content: {
      fr: `
        <h3>📋 Contexte du projet</h3>
        <p>Apprentissage <strong>autodidacte</strong> de la modélisation 3D depuis 2018 à travers des tutoriels et des projets personnels. Cette compétence s'est enrichie au fil des stages et projets universitaires.</p>
        
        <h3>🎯 Ambition du projet</h3>
        <p>Devenir un modélisateur 3D polyvalent capable de créer des actifs optimisés et adaptables pour différents moteurs (Unity, Unreal, etc.).</p>
        
        <h3>📝 Description des étapes</h3>
        <ul>
          <li><strong>Phase 1 :</strong> Apprentissage des bases avec Blender (2018-2019)</li>
          <li><strong>Phase 2 :</strong> Modélisation de environnements et personnages</li>
          <li><strong>Phase 3 :</strong> Maîtrise du texturing et des matériaux PBR avec Substance Painter</li>
          <li><strong>Phase 4 :</strong> Optimisation des modèles pour les moteurs temps réel</li>
          <li><strong>Phase 5 :</strong> Export et intégration dans différents projets</li>
        </ul>
        
        <h3>🛠️ Technologies utilisées</h3>
        <ul>
          <li>Modélisation : Blender</li>
          <li>Texturing : Substance Painter, Substance Designer</li>
          <li>Rendu : Cycles et Eevee</li>
          <li>Optimisation : Vertex painting, LOD systems</li>
        </ul>
        
        <h3>💡 Compétences développées</h3>
        <ul>
          <li><strong>Techniques :</strong> Modélisation, texturing, UV mapping, optimisation</li>
          <li><strong>Transversales :</strong> Autodidaxie, persévérance, analyse critique</li>
          <li><strong>Humaines :</strong> Patience, œil artistique, apprentissage continu</li>
        </ul>
        
        <h3>📌 Réflexion et conclusions</h3>
        <p>La modélisation 3D m'a fasciné dès le début car elle combine technique et créativité. Ce parcours autodidacte m'a enseigné l'importance de la pratique régulière et de la remise en question. Je considère cette compétence comme fondatrice pour mon objectif de Technical Artist, car elle représente le pont entre art et programmation.</p>
      `,
      en: `
        <h3>📋 Project Context</h3>
        <p><strong>Self-taught</strong> learning of 3D modeling since 2018 through tutorials and personal projects. This skill has been enriched through internships and university projects.</p>
        
        <h3>🎯 Project Ambition</h3>
        <p>Become a versatile 3D modeler capable of creating optimized and adaptable assets for different engines (Unity, Unreal, etc.).</p>
        
        <h3>📝 Project Steps</h3>
        <ul>
          <li><strong>Phase 1:</strong> Learning Blender basics (2018-2019)</li>
          <li><strong>Phase 2:</strong> Modeling environments and characters</li>
          <li><strong>Phase 3:</strong> Mastering PBR texturing with Substance Painter</li>
          <li><strong>Phase 4:</strong> Model optimization for real-time engines</li>
          <li><strong>Phase 5:</strong> Export and integration into various projects</li>
        </ul>
        
        <h3>🛠️ Technologies Used</h3>
        <ul>
          <li>Modeling: Blender</li>
          <li>Texturing: Substance Painter, Substance Designer</li>
          <li>Rendering: Cycles and Eevee</li>
          <li>Optimization: Vertex painting, LOD systems</li>
        </ul>
        
        <h3>💡 Developed Skills</h3>
        <ul>
          <li><strong>Technical:</strong> Modeling, texturing, UV mapping, optimization</li>
          <li><strong>Transversal:</strong> Self-teaching, perseverance, critical analysis</li>
          <li><strong>Human:</strong> Patience, artistic eye, continuous learning</li>
        </ul>
        
        <h3>📌 Reflection and Conclusions</h3>
        <p>3D modeling fascinated me from the start because it combines technique and creativity. This self-taught journey taught me the importance of regular practice and self-questioning. I consider this skill as foundational for my goal of Technical Artist, as it represents the bridge between art and programming.</p>
      `,
    },
    link: null,
  },
  5: {
    title: "Alone?",
    year: "2024",
    role: {
      fr: "Développeur Unity • Projet Étudiant",
      en: "Unity Developer • Student Project",
    },
    tags: ["Unity", "C#", "Survival", "Horror"],
    logoImage: "img/Alone.png",
    image: "img/imagealone.jpeg",
    videoId: "j3KSJ0JfwLI",
    description: {
      fr: "Survival horror en développement sur Unity - Survivez sur une île mystérieuse infestée de zombies.",
      en: "Survival horror in development on Unity - Survive on a mysterious island infested with zombies.",
    },
    content: {
      fr: `
        <h3>🎥 Bande-annonce du projet</h3>
        <div class="video-container">
          <iframe width="100%" height="400" src="https://www.youtube.com/embed/j3KSJ0JfwLI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        
        <h3>📋 Contexte du projet</h3>
        <p>Projet étudiant (Janvier - Mai 2024) réalisé en équipe à l'<strong>IUT Clermont Auvergne</strong> : développement d'un jeu <strong>survival horror</strong> sur Unity.</p>
        
        <h3>🎯 Ambition du projet</h3>
        <p>Créer une expérience immersive et angoissante où le joueur doit survivre en gérant des ressources limitées sur une île hostile, face à une menace imprévisible.</p>
        
        <h3>📝 Description des étapes</h3>
        <ul>
          <li><strong>Phase 1 :</strong> Game Design et préproduction narrative</li>
          <li><strong>Phase 2 :</strong> Développement du système de génération procédurale</li>
          <li><strong>Phase 3 :</strong> Implémentation du cycle jour/nuit et des mécaniques de survie</li>
          <li><strong>Phase 4 :</strong> Création et intégration des ennemis (Mimic)</li>
          <li><strong>Phase 5 :</strong> Level design et optimisation des performances</li>
        </ul>
        
        <h3>🛠️ Technologies utilisées</h3>
        <ul>
          <li>Moteur : Unity 2021 LTS</li>
          <li>Langage : C#</li>
          <li>Génération procédurale : Scriptes custom</li>
          <li>IA : Système de comportement adaptatif</li>
          <li>UI : UGUI (Canvas)</li>
        </ul>
        
        <h3>💡 Compétences développées</h3>
        <ul>
          <li><strong>Techniques :</strong> Programmation gameplay, génération procédurale, systèmes d'IA</li>
          <li><strong>Transversales :</strong> Travail en équipe, communication, gestion de features</li>
          <li><strong>Humaines :</strong> Leadership technique, résolution de conflits créatifs</li>
        </ul>
        
        <h3>📌 Réflexion et conclusions</h3>
        <p>Alone? m'a enseigné l'importance de la vision partagée en équipe. Le plus grand défi a été de synchroniser les efforts pour maintenir la cohérence artistique et technique. La génération procédurale m'a fasciné et je souhaite approfondir cette compétence. Ce projet valide ma capacité à lead une équipe et à livrer un produit fini.</p>
      `,
      en: `
        <h3>🎥 Project Trailer</h3>
        <div class="video-container">
          <iframe width="100%" height="400" src="https://www.youtube.com/embed/j3KSJ0JfwLI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        
        <h3>📋 Project Context</h3>
        <p>Student project (January - May 2024) carried out as a team at <strong>IUT Clermont Auvergne</strong>: development of a <strong>survival horror</strong> game on Unity.</p>
        
        <h3>🎯 Project Ambition</h3>
        <p>Create an immersive and anxiety-inducing experience where the player must survive by managing limited resources on a hostile island, facing an unpredictable threat.</p>
        
        <h3>📝 Project Steps</h3>
        <ul>
          <li><strong>Phase 1:</strong> Game Design and narrative preproduction</li>
          <li><strong>Phase 2:</strong> Procedural generation system development</li>
          <li><strong>Phase 3:</strong> Day/night cycle implementation and survival mechanics</li>
          <li><strong>Phase 4:</strong> Enemy creation and integration (Mimic)</li>
          <li><strong>Phase 5:</strong> Level design and performance optimization</li>
        </ul>
        
        <h3>🛠️ Technologies Used</h3>
        <ul>
          <li>Engine: Unity 2021 LTS</li>
          <li>Language: C#</li>
          <li>Procedural generation: Custom scripts</li>
          <li>AI: Adaptive behavior system</li>
          <li>UI: UGUI (Canvas)</li>
        </ul>
        
        <h3>💡 Developed Skills</h3>
        <ul>
          <li><strong>Technical:</strong> Gameplay programming, procedural generation, AI systems</li>
          <li><strong>Transversal:</strong> Teamwork, communication, feature management</li>
          <li><strong>Human:</strong> Technical leadership, creative conflict resolution</li>
        </ul>
        
        <h3>📌 Reflection and Conclusions</h3>
        <p>Alone? taught me the importance of shared vision in team environments. The biggest challenge was synchronizing efforts to maintain artistic and technical consistency. Procedural generation fascinated me and I want to deepen this skill. This project validates my ability to lead a team and deliver a finished product.</p>
      `,
    },
    link: "https://youtu.be/j3KSJ0JfwLI",
  },
};

// UI Translations
const uiTranslations = {
  fr: {
    viewDetails: "Voir les détails",
    viewProject: "Voir le projet →",
    close: "Fermer",
  },
  en: {
    viewDetails: "View details",
    viewProject: "View project →",
    close: "Close",
  },
};
