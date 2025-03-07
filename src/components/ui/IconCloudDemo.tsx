import { IconCloud } from "@/components/magicui/icon-cloud";

const slugs = [
        "tailwindcss/38b2ac", // Tailwind - Teal (changed from "tailwind" to "tailwindcss")
        "mysql/4479a1", // SQL - Blue (changed from "sql" to "mysql" as a common SQL representation)
        "openjdk/ea2d2e", // Java - Red
        "amazonwebservices/ff9900", // AWS - Orange
        "miro/dec81f", //  yellow
        "amazondynamodb/4053D6", // light purple

        "c/03599c", // C - Blue
        "python/3776ab", // Python - Blue
        "git/f05032", // Git - Red
        "figma/f24e1e", // Figma - Orange
        "canva/00c4cc", // Canva - Cyan

        "html5/e34f26", // HTML - Orange-Red
        "typescript/3178c6", // TypeScript - Blue
        "javascript/f7df1e", // JavaScript - Yellow
        "react/61dafb", // React - Light Blue
        "css3/1572b6", // CSS - Blue

        "bootstrap/7952b3", // Bootstrap - Purple
        "nextdotjs/888888", // Next.js - Gray (instead of black)
        "nodedotjs/339933", // Node.js - Green
        "linux/fcc624", // Linux - Yellow
        "mongodb/47a248", // MongoDB - Green

        "firebase/ffca28", // Firebase - Yellow
        "vercel/888888", // Vercel - Gray (instead of black)
        "netlify/00c7b7", // Netlify - Cyan
        "express/888888", // Express.js - Gray (instead of black)
        "jira/03a9fc", // Jira - Blue
        "github/8257e5", // GitHub - Purple (instead of black)
        "docusaurus/3ECC5F", // Docusaurus - Green
        "amazons3/569A31", // Amazon S3 - green
        "postman/FF6C37", // Postman - orange

        // Icon unavailable on Simple Icons
        // "microsoft/0078d4", // Microsoft (instead of Azure) - does not work

];

export function IconCloudDemo() {
  // Fix: Properly format the URLs for the Simple Icons CDN
  const images = slugs.map((slug) => {
    const [service, color] = slug.split('/');
    return `https://cdn.simpleicons.org/${service}/${color}`;
  });

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <IconCloud images={images} />
    </div>
  );
}