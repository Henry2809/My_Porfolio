import { Icons } from "@/components/icons";
import { HomeIcon, Italic, NotebookIcon, User } from "lucide-react";

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
    "I am currently a senior at Temple University, graduating in May 2025 with a major in Computer Science. My long-term career goal is to merge my technical expertise with creativity, focusing on innovative AI applications that create meaningful societal impact. I am particularly passionate about the intersection of AI and UX design, as I believe understanding user needs and crafting intuitive, user-friendly experiences are essential for making technology accessible and impactful.",
  summary2:
    "When I am not debugging code, you can find me playing piano 🎹, exploring music, or chatting in Vietnamese 🇻🇳 and French 🇫🇷, which has helped me connect with people from diverse backgrounds. I also juggle life as a part-time chef 🍽️ in Philly and a motorcycle racer 🏍️ — sunny days mean I am either chasing speed or perfecting recipes. Life is all about balance and a little adrenaline!",
  avatarUrl: "/me.jpeg",
  skills: [
    "C", "Java", "Python", "Git", "Figma", "Canva", "HTML", "TypeScript", "JavaScript", "React", "CSS", "Bootstrap",
    "Tailwind", "Next", "Express", "Node", "Linux", "SQL", "MongoDB", "Firebase", "Azure", "Vercel", "Netlify", 
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    // { href: "/personal", icon: User, label: "personal" },
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
      title: "Part-time Chef",
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
    // {
    //   title: "Magic UI",
    //   href: "https://magicui.design",
    //   dates: "June 2023 - Present",
    //   active: true,
    //   description:
    //     "Designed, developed and sold animated UI components for developers.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Stripe",
    //     "Shadcn UI",
    //     "Magic UI",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://magicui.design",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/magicuidesign/magicui",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video: "https://cdn.magicui.design/bento-grid.mp4",
    // },
    {
      title: "HotSpot",
      // href: "https://llm.report",
      dates: "October 2024 - Dec 2024",
      active: true,
      description:
        "Built by a team of 6. An event-matching application that connects attendees to popular event spots in the area allows users to save favorite locations and be notified when events that fit their interest are posted.",
      technologies: [
        "Next.js",
        "Typescript",
        "JavaScript",
        "TailwindCSS",
        "Firebase", "React",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://llm.report",
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "GitHub",
          href: "https://github.com/cis3296f24/01-HotSpot",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/hotSpot.png",
      // video: "https://cdn.llm.report/openai-demo.mp4",
      video: "/HotSpotCompress.mp4", 
    },

    {
      title: "ZARA - A UI/UX Case Study",
      // href: "https://automatic.chat",
      dates: "Sep 2023 - Dec 2023",
      active: true,
      description:
      "Research and redesign ZARA's website for improved responsiveness and usability by applying Nielsen's Usability Heuristics. Enhance user experience, accessibility, and visual appeal while maintaining brand identity and functionality.",
      technologies: [
        "Figma", "Jira", "Google Slides",
      ],
      links: [
        {
          type: "Prototype",
          href: "https://www.figma.com/proto/cwbzWASypEbblXbI39Q7mY/Wireframes?node-id=220-1579&starting-point-node-id=220%3A1579",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Research",
          href: "https://www.figma.com/files/team/1278101187311995637/project/107041942?fuid=1278119116220016642",
          icon: <Icons.researchIcon className="size-3" />,
        },
        {
          type: "Slides Solution",
          href: "https://drive.google.com/drive/folders/1tlzHBLNlwBINB31pjsRXanKckNQrajCI",
          icon: <Icons.GSlides className="size-3" />,
        },
      ],
      image: "",
      video:"/ZaraProtoypeCompressed.mp4",
    },

    {
      title: "Text Editor",
      // href: "https://chatcollect.com",
      dates: "June 2023 - July 2023",
      active: true,
      description:
      "Developed a feature-rich text editor from scratch without dependencies, including syntax highlighting and search functionality.",
      technologies: [
        "C", "Jira",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/Henry2809/Text-Editor",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "/textEditorCompressed.mp4",
    },
    
    {
      title: "Fraud Detection",
      // href: "https://chatcollect.com",
      dates: "April 2023 - May 2023",
      active: true,
      description:
      "A study aimed at addressing the challenges in detecting fraud in consumer transactions and analyzing more effective strategies for successful fraud prevention.",
      technologies: [
        "Python", "PowerPoint",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/Henry2809/Fraud_Dectection",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "/FraudDetection.mp4",
    },

    
  ],


  CurentProject: [
    {
      title: "Track Finder",
      // href: "https://automatic.chat",
      dates: "Dec 2024 - ...",
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
            type: "GitHub",
            href: "https://github.com/Henry2809/MotorcycleTrackFinder",
            icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "/TrackFinderCompressed.mp4",
    },

    {
      title: "Piglet Prep",
      // href: "https://automatic.chat",
      dates: "Jan 2025 - ...",
      active: true,
      description:
        "A platform that transforms YouTube videos into interactive quizzes for kids. Using the Piggyback Learning system, these quizzes make learning engaging and effective, fostering critical thinking and knowledge retention. Above is a low-fidelity prototype.",
      technologies: [
        "Next.js",
        "Typescript",
        "JS",
        "TailwindCSS",
        "React", "S3", "DynamoDB", "OpenAI", "AWS", "Figma",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://automatic.chat",
        //   icon: <Icons.globe className="size-3" />,
        // },
        // {
        //     type: "Github",
        //     href: "https://github.com/Henry2809/MotorcycleTrackFinder",
        //     icon: <Icons.github className="size-3" />,
        // },
      ],
      image: "",
      video:
        "/PigletPrepCompressed.mp4",
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
          title: "GitHub",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/YasseenR/HackathonFall2024",
          },
          // {
          //   title: "Devpost",
          //   icon: <Icons.globe className="h-4 w-4" />,
          //   href: "https://devpost.com/software/roomiez-8etyg2",
          // },
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
        title: "GitHub",
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
          title: "GitHub",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Henry2809/FitnessHouse",
          },
      ],
    },
   

  ],
} as const;
