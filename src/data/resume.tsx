import { Icons } from "@/components/icons";
import { HomeIcon, Italic, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Henry Nguyen",
  initials: "HN",
  url: "https://dillion.io",
  // url:"",
  location: "Philadelphia, PA",
  locationLink: "https://www.google.com/maps/place/philadelphia",
  description:
    "Aspiring Software Developer. Love designing and make an impact. Very active on LinkedIn.",
  summary:
    // "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
    "Currenly, I am a senior at Temple University, and I am set to graduate May 2025 with a major in CS. When I'm not studying, you can find me indulging in one of my many interests. I play the piano 🎹 and enjoy exploring music across genres. I speak three languages: English 🇺🇸, Vietnamese 🇻🇳, and French 🇫🇷, which has helped me connect with people from diverse backgrounds. I also work as a part-time chef at a local restaurant in Philly. Additionally, I am a motorcycle racer 🏍️, and on sunny days, you will most likely find me at the track practicing or competing.",

  avatarUrl: "/me.png",
  skills: [
    "C", "Java", "Python", "Git", "Figma", "Canva", "HTML", "TypeScript", "JavaScript", "React", "CSS", "Bootstrap",
    "Tailwind", "Next", "Express", "Node", "Linux", "SQL", "MongoDB", "Firebase", "Azure", "Vercel", "Netlify", 
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hautrng003@gmail.com",
    tel: "+123456789",
    social: {

      GitHub: {
        name: "GitHub",
        url: "https://github.com/Henry2809",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/henrynguyen09/",
        icon: Icons.linkedin,
        navbar: true,
      },

      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/onree.nwin/",
        icon: Icons.Instagram,
        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Steakhouse",
      // href: "https://atomic.finance",
      badges: [],
      location: "Onsite",
      title: "Chef",
      logoUrl: "/1.Hibachi-Teppanyaki.png",
      start: "May 2023",
      end: "Present",
      description:
      "Delivered captivating dining experiences through showmanship, humor, and interactive performances. Mastered knife dexterity, grill techniques, and the art of plating, ensuring high-quality dishes with exceptional presentation.",
    },
    // {
    //   company: "Nvidia",
    //   href: "https://nvidia.com/",
    //   badges: [],
    //   location: "Santa Clara, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/nvidia.png",
    //   start: "January 2020",
    //   end: "April 2020",
    //   description:
    //     "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    // },
  ],
  education: [
    {
      school: "Temple University",
      href: "https://www.temple.edu",
      degree: " Bachelor of Science in Computer Science (BS)",
      logoUrl: "/temple.png",
      start: "2021",
      end: "May 2025",
    },
  ],
  
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },

    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "/TrackProject.mp4",
    },
  ],


  CurentProject: [
    {
      title: "Track Finder",
      // href: "https://automatic.chat",
      dates: "December 2024 - ...",
      active: true,
      description:
        "An interactive web page for motorcycle enthusiasts, specifically for sport bikes. Allow users to find racetracks near their current location.",
      technologies: [
        "Next.js",
        "Typescript",
        "MongoDB",
        "JS",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI", "React"
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://automatic.chat",
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
            type: "Github",
            href: "https://github.com/Henry2809/MotorcycleTrackFinder",
            icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "/TrackProject.mp4",
    },

  ],


  // Hackathons Section
  hackathons: [
    {
      title: "OwlHacks",
      dates: "Fall 2024",
      location: "Philadelphia, PA",
      description:
        "Developed Rommiez, a GPT-3.5 powered roommate matching app for student.",
      image:
        "/owl.png",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/YasseenR/HackathonFall2024",
          },
          {
            title: "Devpost",
            icon: <Icons.globe className="h-4 w-4" />,
            href: "https://devpost.com/software/roomiez-8etyg2",
          },
      ],
    },

    {
      title: "OwlHacks",
      dates: "Spring 2023",
      location: "Philadelphia, PA",
      // description:
      //   "Won 1st place in the Sustainable Communities category (250+ participants) for PhillyNow, a website for crime visualization in Philadelphia",

      description: (
        <>
          Won <strong>1st place</strong> in the <i>Sustainable Communities</i> category (250+ participants) for PhillyNow, a website for crime visualization in Philadelphia.
        </>
      ),
      image:
        "/owlhacks-logo.png",
      // mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
        title: "Github",
        icon: <Icons.github className="h-4 w-4" />,
        href: "https://github.com/Henry2809/PhillyNow-Hackathon-Owlhacks-Spring2023-",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/phillynow",
        },
    ],
    },

    {
      title: "OwlHacks",
      dates: "Fall 2023",
      location: "Philadelphia, PA",
      description:
        "Developed Fitness House, a website for tracking exercise forms for gym goers.",
      image:
        "/owlhacks-logo.png",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Henry2809/FitnessHouse",
          },
      ],
    },
   

  ],
} as const;
