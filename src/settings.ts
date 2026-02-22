export const profile = {
  fullName: 'Mohammad Jaberizadeh',
  title: 'Dr.', // title shown in sidebar before the name
  institute:
    'Postdoctoral Research Associate, Center for Advanced Construction Materials (CACM) — The University of Texas at Arlington', // hero subtitle
  author_name: 'Mohammad Jaberizadeh',

  research_areas: [
    {
      title: 'Advanced cementitious composites',
      description:
        'Design, testing, and optimization of high-performance mortars and concretes for infrastructure applications, balancing strength, toughness, and long-term durability.',
      field: 'materials',
    },
    {
      title: 'Fiber-reinforced concrete & shrinkage control',
      description:
        'Use of fibrillar cellulose fibers and other reinforcements to control autogenous shrinkage and improve cracking resistance and energy absorption.',
      field: 'mechanics',
    },
    {
      title: 'Durability, curing & service-life performance',
      description:
        'Carbonation curing, permeability control, and durability evaluation (shrinkage, chloride ingress, freeze–thaw, carbonation) guided by ASTM/ACI/AASHTO procedures.',
      field: 'durability',
    },
    {
      title: 'Concrete rheology & placement behavior',
      description:
        'Fresh-state characterization of self-consolidating concrete (SCC) including flowability, thixotropy, setting behavior, and placement optimization.',
      field: 'rheology',
    },
  ],
};

// SOCIALS
export const social = {
  email: 'mailto:jaberizadeh.m@gmail.com',
  linkedin: 'https://www.linkedin.com/in/mohammad-jaberizadeh-ph-d-34544698/?trk=opento_nprofile_details', // TODO: add Mohammad's LinkedIn URL
  x: '',
  github: '',
  gitlab: '',
  scholar: 'https://scholar.google.com/citations?user=-UOgb3QAAAAJ&hl=en', // TODO: add Mohammad's Google Scholar URL
  inspire: '',
  arxiv: '',
  orcid: '',
};

// TEMPLATE SETTINGS
export const template = {
  website_url: 'https://mohammadjaberizadeh.com', // TODO: update if different
  menu_left: false,
  transitions: true,
  lightTheme: 'light',
  darkTheme: 'dark',
  excerptLength: 200,
  postPerPage: 5,
  base: '',
};

// SEO
export const seo = {
  default_title: 'Dr. Mohammad Jaberizadeh',
  default_description:
    'Portfolio of Dr. Mohammad Jaberizadeh, civil engineer and advanced infrastructure materials researcher focused on high-performance cementitious composites, durability, curing, and concrete rheology.',
  default_image: '/images/profile_pictures.jpg', // TODO: replace with Mohammad banner/headshot image
};
