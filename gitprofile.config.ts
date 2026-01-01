// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'utkarshgupta188', // Your GitHub org/user name. (This is the only required config)
  },

  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['utkarshgupta188/meow', 'utkarshgupta188/dora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'MeowTV',
          description:
            'A feature-rich streaming application for cartoons and anime.',
          imageUrl: '/meowtv.png',
          link: 'https://github.com/utkarshgupta188/meowtv',
        },
        {
          title: 'Dora Music',
          description:
            'A music player application.',
          imageUrl: 'https://raw.githubusercontent.com/utkarshgupta188/dora-music/main/static/default-album.png',
          link: 'https://github.com/utkarshgupta188/dora-music',
        },
      ],
    },
  },
  seo: { title: 'Portfolio of Ariful Alam', description: '', imageURL: '' },
  social: {
    linkedin: 'utkarshgupta-dev',
    x: 'Utkarshgupta188',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: 'utkarshgupta.18',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: 'utkarshgupta_18',
    website: '',
    phone: '',
    email: 'guptautkarsh231220@gmail.com',
  },
  resume: {
    fileUrl: '/resume.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Data Science',
    'Data Analysis',
    'Large Language Models (LLMs)',
    'AI',
    'ML',
    'Web Development',
    'IoT',
    'PHP',
    'Python',
    'MySQL',
    'Windows Terminal',
    'JavaScript',
    'HTML5',
    'CSS3',
    'C++',
    'C',
    'R',
    'Firebase',
    'Render',
    'Vercel',
    'Netlify',
    'Anaconda',
    'FastAPI',
    'Flask',
    'NPM',
    'Node.js',
    'PNPM',
    'React',
    'Vite',
    'Yarn',
    'Nginx',
    'Gunicorn',
    'Redis',
    'PostgreSQL',
    'Canva',
    'NumPy',
    'Pandas',
    'Scikit-Learn',
    'PyTorch',
    'Matplotlib',
    'Git',
    'GitHub',
    'Selenium',
    'Docker',
    'Tor',
    'Tampermonkey',
    'Postman',
  ],
  experiences: [
    {
      company: 'GirlScript Summer of Code',
      position: 'Contributor',
      from: 'November 2024',
      to: 'January 2025',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: 'Postman Flows - Beginner',
      body: '',
      year: '',
      link: '',
    },
    {
      name: 'PHP for Beginners: The Complete PHP MySQL PDO Course',
      body: '',
      year: '',
      link: '',
    },
    {
      name: 'Python Development & Data Science',
      body: 'Variables and Data Types',
      year: '',
      link: '',
    },
    {
      name: 'Introduction to IoT',
      body: '',
      year: '',
      link: '',
    },
    {
      name: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional',
      body: '',
      year: '2025',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'LNCT Group of Colleges',
      degree: 'Bachelor of Technology - BTech, Computer Science',
      from: '2024',
      to: '2028',
    },
    {
      institution: 'DAV Schools Network',
      degree: 'Class 12, PCM',
      from: '2022',
      to: '2023',
    },
    {
      institution: 'DAV Schools Network',
      degree: 'Class 10',
      from: '2020',
      to: '2021',
    },
  ],
  publications: [],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'coffee',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },


  enablePWA: true,
};

export default CONFIG;
