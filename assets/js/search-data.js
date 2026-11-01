// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/personal/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "journal articles and submitted manuscripts, in reverse chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/personal/publications/";
          },
        },{id: "nav-research",
          title: "Research",
          description: "Current research themes. Click a card for details and related work.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/personal/research/";
          },
        },{id: "nav-talks",
          title: "Talks",
          description: "Oral and poster presentations at conferences and symposia.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/personal/talks/";
          },
        },{id: "nav-beyond-research",
          title: "Beyond Research",
          description: "Interests outside the lab, and service and outreach.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/personal/beyond/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Download the full CV as a PDF using the button on the right.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/personal/cv/";
          },
        },{id: "news-gave-a-talk-on-wave-propagation-in-phononic-time-crystals-at-icmams-2024-bengaluru",
          title: 'Gave a talk on wave propagation in phononic time crystals at ICMAMS 2024,...',
          description: "",
          section: "News",},{id: "news-presented-a-poster-at-metamaterials-2025-in-amsterdam-supported-by-a-conference-travel-grant-and-an-iisc-garp-travel-fellowship",
          title: 'Presented a poster at Metamaterials 2025 in Amsterdam, supported by a conference travel...',
          description: "",
          section: "News",},{id: "news-our-paper-on-wave-propagation-in-an-elastic-lattice-with-nonreciprocal-stiffness-and-engineered-damping-is-out-in-jasa-special-issue-on-active-and-tunable-acoustic-metamaterials",
          title: 'Our paper on wave propagation in an elastic lattice with nonreciprocal stiffness and...',
          description: "",
          section: "News",},{id: "news-presented-observation-of-a-temporal-topological-interface-state-in-a-parametric-oscillator-at-the-aps-global-physics-summit-2026",
          title: 'Presented Observation of a Temporal Topological Interface State in a Parametric Oscillator at...',
          description: "",
          section: "News",},{id: "news-started-as-a-project-associate-at-lems-department-of-aerospace-engineering-iisc",
          title: 'Started as a Project Associate at LEMS, Department of Aerospace Engineering, IISc.',
          description: "",
          section: "News",},{id: "news-completed-the-phd-course-complex-wave-phenomena-in-metamaterials-and-topological-mechanics-at-politecnico-di-milano-virtual",
          title: 'Completed the PhD course Complex Wave Phenomena in Metamaterials and Topological Mechanics at...',
          description: "",
          section: "News",},{id: "projects-phononic-time-crystals-and-temporal-topology",
          title: 'Phononic time crystals and temporal topology',
          description: "Waves in elastic media whose properties are modulated in time — momentum bandgaps, temporal band topology and temporal interface states.",
          section: "Projects",handler: () => {
              window.location.href = "/personal/projects/1_time_crystals/";
            },},{id: "projects-nonreciprocal-and-non-hermitian-lattices",
          title: 'Nonreciprocal and non-Hermitian lattices',
          description: "Elastic lattices with active, nonreciprocal stiffness and engineered damping that break the usual symmetry of wave transmission.",
          section: "Projects",handler: () => {
              window.location.href = "/personal/projects/2_nonreciprocal_lattices/";
            },},{id: "projects-active-oscillators-for-physical-computing",
          title: 'Active oscillators for physical computing',
          description: "Using the dynamics of active mechanical oscillators and lattices as physical reservoirs and mechanical neural networks.",
          section: "Projects",handler: () => {
              window.location.href = "/personal/projects/3_reservoir_computing/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%68%61%72%73%68%69%74%68%6B@%69%69%73%63.%61%63.%69%6E", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=ZChppDUAAAAJ", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0003-4816-3503", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/harshit-kumar-sandhu-491700b9", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/harshit-sandhu", "_blank");
        },
      },];
