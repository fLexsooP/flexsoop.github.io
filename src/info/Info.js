import self from '../img/self.png';
import mock1 from '../img/mock1.png';
import mock2 from '../img/mock2.png';
import mock3 from '../img/mock3.png';
import mock4 from '../img/mock4.png';
import mock5 from '../img/mock5.png';

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ['#FE7E6D', '#2F3A8F'];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: 'Chence',
  lastName: 'Shi',
  initials: 'CS', // the example uses first and last, but feel free to use three or more if you like.
  position: 'a Software Engineer',
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: '☕',
      text: 'fueled by coffee & milk',
    },
    {
      emoji: '🌎',
      text: 'based in the California',
    },
    {
      emoji: '💼',
      text: 'Computer Science Student @CSUF',
    },
    {
      emoji: '📧',
      text: 'ascc594557067@gmail.com',
    },
  ],
  socials: [
    {
      link: 'https://github.com/flexsoop',
      icon: 'github',
      label: 'github',
    },
    {
      link: 'https://www.linkedin.com/in/chence-shi-26b4a11b5/',
      icon: 'linkedin',
      label: 'linkedin',
    },
    {
      link: 'https://www.facebook.com',
      icon: 'facebook',
      label: 'facebook',
    },
    {
      link: 'https://twitter.com',
      icon: 'twitter',
      label: 'twitter',
    },
    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: "Hello! I'm Chence. I'm a Fullstack Developer. I studied Computer Science at Cal State Fullerton, I enjoy long walks on the beach, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
  skills: {
    proficientWith: [
      'Javascript',
      'Typescript',
      'HTML',
      'CSS',
      'Python',
      'C++',
      'Java',
      'SQL',
    ],
    tools: [
      'git',
      'Ubuntu',
      'React',
      'Nodejs',
      'Express',
      'Next.js',
      'Flask',
      'TailwindCSS',
      'Sass',
      'MongoDB',
      'MySQL',
      'PostgreSQL',
      'Prisma',
      'Docker',
      'AWS',
      'Visual Studio Code',
      'Heroku',
      'Vercel',
    ],
  },
  hobbies: [
    {
      label: 'Photography',
      emoji: '📸',
    },
    {
      label: 'Tennis',
      emoji: '🎾',
    },
    {
      label: 'Hiking',
      emoji: '🚶',
    },
    {
      label: 'Cooking',
      emoji: '🍚',
    },
  ],
  portfolio: [
    {
      title: 'Rawtter',
      live: 'https://rawtter.vercel.app/', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: 'https://github.com/fLexsooP/rawtter', // this should be a link to the **repository** of the project, where the code is hosted.
      image: mock1,
    },
    {
      title: 'Offer Genie',
      live: 'https://offer-genie.vercel.app/',
      source: 'https://github.com/fLexsooP/offer-genie',
      image: mock2,
    },
    {
      title: 'Chatroom',
      live: '_blank',
      source: 'https://github.com/fLexsooP/chatroom',
      image: mock3,
    },
    {
      title: 'Recipest',
      live: 'https://recipe-app-flexsoop.vercel.app/',
      source: 'https://github.com/fLexsooP/recipe-app',
      image: mock4,
    },
    {
      title: 'TBD',
      live: '',
      source: 'https://github.com/flexsoop',
      image: mock5,
    },
  ],
};
