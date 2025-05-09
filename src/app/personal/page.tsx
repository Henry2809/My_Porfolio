import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { TextReveal } from "@/components/magicui/text-reveal";

const BLUR_FADE_DELAY = 0.3;

export default function PersonalPage() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero" className="min-h-screen flex items-center justify-center">
        <div className="mx-auto w-full max-w-2xl items-center justify-center">
          <div className="flex flex-col justify-center items-center space-y-8 -mt-40">
              <TypingAnimation className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                More about me!
              </TypingAnimation>
              
              <BlurFade delay={BLUR_FADE_DELAY * 8}>
                <BlurFadeText
                  className="text-lg sm:text-xl italic text-center w-full"
                  text="With everything that is going on in the world right now, I am trying to make a difference and be unique. So here are my ways... "
                />
                
              </BlurFade>
          </div>
        </div>
      </section>

      {/* <section id="books&inspiration" className="flex flex-col items-center justify-center space-y-4 md:space-y-8">
        <TextReveal>
          <div className="flex flex-col items-center">
            <p className="text-lg sm:text-xl italic text-center">
              Let's start with the books I read. I am a big fan of reading and I try to read at least one book a month. Here are some of my favorites:
            </p>

            <img
              src="temple.png"
              alt="Temple"
              className="w-64 h-auto rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105"
              />

          </div>
        </TextReveal>
      </section> */}

      <section id="hobbies">
        <div className="mx-auto w-full max-w-2xl space-y-8 items-center justify-center">
          <TextReveal>
            <div className="flex flex-col justify-center items-center space-y-8">
              <p className="text-lg sm:text-xl italic text-center w-full">
                Sometimes I got frustrated with work and life and have no one to talk to so I leave the words for the piano.
              </p>
              {/* Videos container */}
              <div className="flex flex-col sm:flex-row w-full gap-4 mt-10">
                <video
                  src="/piano/piano1.mp4"
                  controls
                  className="w-full sm:w-1/2 h-[300px] rounded-3xl shadow-2xl object-cover"
                />
                <video
                  src="/piano/piano2.mp4"
                  controls
                  className="w-full sm:w-1/2 h-[300px] rounded-3xl shadow-2xl object-cover"
                />
              </div>
            </div>
          </TextReveal>
        </div>
      </section>

      {/* <section id="travel" className="flex flex-col items-center justify-center">
        <TextReveal>
          <div className="flex flex-col items-center justify-center mx-auto">
            <p className="text-lg sm:text-xl italic text-center w-full">
              I love to travel and explore new places. Here are some of my favorite travel destinations:
            </p>

            <img
              src="temple.png"
              alt="Temple"
              className="w-64 h-auto rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105"
            />
          </div>
        </TextReveal>
        
      </section> */}

    </main>
  );
}
