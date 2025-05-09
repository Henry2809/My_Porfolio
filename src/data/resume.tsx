import { Icons } from "@/components/icons";
import { HomeIcon, Italic, NotebookIcon, User } from "lucide-react";

export const DATA = {
  name: "Henry Nguyen",
  initials: "HN",
  // url: "https://dillion.io",
  // url:"",
  location: "Philadelphia, PA",
  locationLink: "https://www.google.com/maps/place/philadelphia",
  description:
    "Aspiring Software Developer who loves designing and calls LinkedIn home.",
  summary:
    "Graduating with a degree in Computer Science from Temple University, I’ve gained a solid technical foundation and a growing interest in the human aspects of design. My passion is in learning how to bridge this gap by applying user-centered design principles, with a particular focus on UX design, to create intuitive and meaningful digital experiences.",
  summary2:
    "Technology should seamlessly solve problems without distractions. For me, great UX is about crafting experiences that feel natural, allowing users to focus on what matters most without being overwhelmed by complexity. I aim to design products that not only meet technical requirements but also enhance the user’s journey, creating seamless interactions that make a real difference in their daily lives.",
  avatarUrl: "/me.jpeg",
  skills: [
    "C", "Java", "Python", "Git", "Figma", "Canva", "HTML", "TypeScript", "JavaScript", "React", "CSS", "Bootstrap",
    "Tailwind", "Next", "Express", "Node", "Linux", "SQL", "MongoDB", "Firebase", "Azure", "Vercel", "Netlify", 
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    // { href: "/personal", icon: User, label: "More about me" },
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
      start: "Aug 2021",
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
      title: "Piglet Prep (Capstone Project)",
      // href: "https://automatic.chat",
      dates: "Jan 2025 - April 28, 2025",
      active: true,
      description:
        "A platform that transforms YouTube videos into interactive quizzes for kids. Using the Piggyback Learning system, these quizzes make learning engaging and effective, fostering critical thinking and knowledge retention.",
      technologies: [
        "Next.js",
        "Typescript",
        "JS", "TailwindCSS", "React", "S3", "MongoDB", "OpenAI", 
        "Amazon Rekognition", "Figma", "Jira", "Framer Motion", "MagicUI", "Chart.js", "Mermaid",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://automatic.chat",
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
            type: "Github",
            href: "https://github.com/Capstone-Projects-2025-Spring/project-piggyback-learning-team-1?tab=readme-ov-file",
            icon: <Icons.github className="size-3" />,
        },
        {
            type: "Docusaurus",
            href: "https://capstone-projects-2025-spring.github.io/project-piggyback-learning-team-1/",
            icon: <Icons.docusaurus className="size-3" />,
        },
        {
          type: "Jira",
          href: "https://temple-cis-projects-in-cs.atlassian.net/jira/software/c/projects/PLTA/boards/420/backlog",
          icon: <Icons.jira className="size-3" />,
        },

        {
          type: "Prototype",
          href: "https://www.figma.com/proto/5YDqFAwQzMAP73WXsOE9lZ/Piggyback-Prototyping?node-id=102-65&t=VG3L1hNUepQ6IE8J-0&scaling=contain&content-scaling=fixed&page-id=93%3A337&starting-point-node-id=102%3A65",
            icon: <Icons.figma className="size-3" />,
        },
      ],
      image: "",
      video:
        // "/PigletPrepCompressed.mp4",
        "NewestPigletPrep.mp4",
    },

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
          icon: <Icons.figma className="size-3" />,
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
      // dates: "Dec 2024 - ...",
      dates:"",
      active: true,
      description:
        // "An interactive web page for motorcycle enthusiasts, specifically for sport bikes. Allow users to find racetracks near their current location.",
        "Discover nearby racetracks in seconds with an interactive web app for sport-bike enthusiasts. Log your bike’s maintenance history and share honest track reviews. Connect with fellow riders, rate circuits, and plan your next high-speed adventure.",
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

    // {
    //   title: "Piglet Prep (Capstone Project)",
    //   // href: "https://automatic.chat",
    //   dates: "Jan 2025 - ...",
    //   active: true,
    //   description:
    //     "A platform that transforms YouTube videos into interactive quizzes for kids. Using the Piggyback Learning system, these quizzes make learning engaging and effective, fostering critical thinking and knowledge retention. Above is a low-fidelity prototype.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "JS",
    //     "TailwindCSS",
    //     "React", "S3", "DynamoDB", "OpenAI", "AWS", "Figma", "Jira", "Framer Motion",
    //   ],
    //   links: [
    //     // {
    //     //   type: "Website",
    //     //   href: "https://automatic.chat",
    //     //   icon: <Icons.globe className="size-3" />,
    //     // },
    //     // {
    //     //     type: "Github",
    //     //     href: "https://github.com/Henry2809/MotorcycleTrackFinder",
    //     //     icon: <Icons.github className="size-3" />,
    //     // },
    //   ],
    //   image: "",
    //   video:
    //     "/PigletPrepCompressed.mp4",
    // },


  ],


  // Hackathons Section
  hackathons: [
    {
      title: "OwlHacks",
      dates: "Fall 2024",
      location: "Philadelphia, PA",
      description:
       "Developed Rommiez, a Tinder-inspired, GPT-3.5 powered roommate matching app for students.",
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
