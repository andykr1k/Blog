const siteMetadata = {
  title: 'Blog - Andrew Krikorian',
  author: 'Andrew Krikorian',
  headerTitle: 'Dev Posts',
  description: 'my personal blog where I share my thoughts',
  snippets: 'Reuseable code snippets collected by Andrew',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://musing.vercel.app',
  siteRepo: 'https://github.com/andykr1k/blog',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/logo.png',
  email: 'akrikorian12@gmail.com',
  github: 'https://github.com/andykr1k',
  twitter: 'https://twitter.com/krik_exe',
  linkedin: 'https://www.linkedin.com/in/andrewkrikorian/',
  website: 'https://rebrand.ly/andykr1k',
  locale: 'en-US',
  analytics: {
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: 'G-F6V2QTJ628', // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    provider: 'emailOctopus',
  },
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      inputPosition: 'bottom',
      lang: 'en',
      darkTheme: 'dark',
      themeURL: '',
    },
  },
  socialAccount: {
    twitter: 'krik_exe',
  },
}

module.exports = siteMetadata
