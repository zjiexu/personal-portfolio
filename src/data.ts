export type LearningArea = {
  title: string
  description: string
}

type ProjectLink = {
  label: string
  url: string
}

export type Project = {
  type: string
  title: string
  status: string
  description: string
  learning: string
  tools: string[]
  links: ProjectLink[]
}

export type ContactLink = {
  label: string
  url: string
  isExternal: boolean
}

export const learningAreas: LearningArea[] = [
  {
    title: 'Frontend Foundations',
    description:
      'HTML, CSS, JavaScript, responsive layouts, and accessible interface structure.',
  },
  {
    title: 'React Development',
    description:
      'Components, props, state, TypeScript, and building maintainable single-page applications.',
  },
  {
    title: 'Developer Workflow',
    description:
      'Git, GitHub, project organization, deployment, and writing clearer documentation.',
  },
]

export const projects: Project[] = [
  {
    type: 'Portfolio Website',
    title: 'Personal Portfolio',
    status: 'In Progress',
    description:
      'A personal developer portfolio built to practice frontend structure, responsive design, version control, and GitHub Pages deployment.',
    learning:
      'Practiced component-based structure, responsive layout, GitHub Pages deployment, and typed data rendering with TypeScript.',
    tools: ['React', 'TypeScript', 'Vite', 'CSS'],
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/zjiexu/personal-portfolio',
      },
      {
        label: 'Live Site',
        url: 'https://zjiexu.github.io/personal-portfolio/',
      },
    ],
  },
  {
    type: 'Static Site Generator',
    title: 'Inkwell',
    status: 'Planned',
    description:
      'A planned Markdown blog engine that turns Markdown files into fast static blog pages with tags, RSS, SEO metadata, and free deployment.',
    learning:
      'Intended to practice file-based content, Markdown parsing, static page generation, metadata handling, RSS output, and performance-focused deployment.',
    tools: ['TypeScript', 'Markdown', 'Static Rendering', 'RSS', 'SEO'],
    links: [],
  },
]

export const contactLinks: ContactLink[] = [
  {
    label: 'GitHub',
    url: 'https://github.com/zjiexu',
    isExternal: true,
  },
  {
    label: 'Email',
    url: 'mailto:zjiexuo@gmail.com',
    isExternal: false,
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/zjiexu/',
    isExternal: true,
  },
]
