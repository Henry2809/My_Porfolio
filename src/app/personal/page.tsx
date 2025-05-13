import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { TextReveal } from "@/components/magicui/text-reveal";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const travelDestinations = [
  {
    id: 1,
    name: "",
    image: "/bikes/bike&car.jpeg",
    description: "",
  },
  {
    id: 2,
    name: "NJ, Waterfront",
    image: "/bikes/bike1.jpeg",
    description: "",
  },
  {
    id: 6,
    name: "",
    image: "/bikes/bike6.jpeg",
    description: "",
  },
  {
    id: 3,
    name: "",
    image: "/bikes/bike2.jpeg",
    description: "",
  },
  {
    id: 4,
    name: "",
    image: "/bikes/bike3.jpeg",
    description: "",
  },
  {
    id: 5,
    name: "",
    image: "/bikes/bike4.jpeg",
    description: "",
  },
  {
    id: 6,
    name: "",
    image: "/bikes/bike5.jpeg",
    description: "",
  },
  // Add more destinations as needed
];

const BLUR_FADE_DELAY = 0.3;

export default function PersonalPage() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-1">
      <ScrollProgress />
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center"
      >
        <div className="mx-auto w-full max-w-2xl items-center justify-center">
          <div className="flex flex-col justify-center items-center space-y-8 -mt-56">
            <TypingAnimation className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              More about me!
            </TypingAnimation>

            <BlurFade delay={BLUR_FADE_DELAY * 5.5}>
              <BlurFadeText
                className="text-lg sm:text-xl italic text-center w-full"
                text="With everything that is going on in the world right now, I am trying to create my own story and to stand out from the crowd, I need to be unique - be me. So here are my ways..."
              />
            </BlurFade>
            {/* <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <BlurFadeText
                className="text-lg sm:text-xl italic text-center w-full"
                text="Scroll with caution"
              />
            </BlurFade> */}
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

      <section id="piano">
        <div className="space-y-12 w-full py-14">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Music & Me
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I am a man with few words, but I have a lot to say. I express my feelings through music, leave the words for the piano. 
                </p>
              </div>
            </div>

            {/* Grid container: always 2 columns, wrap extra videos */}
            <BlurFade delay={BLUR_FADE_DELAY * 12}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-[800px] mx-auto">
                <video
                  src="/piano/piano1.mp4"
                  controls
                  className="w-full h-[500px] aspect-video rounded-lg shadow-2xl object-cover"
                />
                <video
                  src="/piano/piano2.mp4"
                  controls
                  className="w-full h-[500px] aspect-video rounded-lg shadow-2xl object-cover"
                />
                {/* extra videos will stack similarly */}
              </div>
            </BlurFade>
          </BlurFade>
        </div>
      </section>

      <section id="bikes">
        <TextReveal
          className="
                relative
                w-screen
                left-1/2           
                -translate-x-1/2   
                max-w-none         
              "
        >
          <div className="flex flex-col items-center justify-center mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  2 Wheels & Me
                </h2>
                <p className="text-sm font-normal text-muted-foreground sm:text-base md:text-sm/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I love going to places on my bike - café, bookstore, museums, beaches. To escape the noise of the world & reality.
                </p>
              </div>
            </div>

            <div className="relative w-full max-w-lg m-10">
              <Carousel className="w-full">
                <CarouselContent>
                  {travelDestinations.map((destination) => (
                    <CarouselItem key={destination.id}>
                      <Card>
                        <CardContent className="flex flex-col aspect-square items-center justify-center">
                          <img
                            src={destination.image}
                            alt={destination.name}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                {/* --- MOBILE CONTROLS (up to sm) --- */}
                <div className="absolute -bottom-9 left-1/2 transform -translate-x-1/2 flex sm:hidden">
                  <CarouselPrevious />
                  <CarouselNext />
                </div>

                {/* --- DESKTOP CONTROLS (sm and above) --- */}
                <div className="hidden sm:flex sm:justify-between sm:mt-4">
                  <CarouselPrevious />
                  <CarouselNext />
                </div>
              </Carousel>
            </div>
          </div>
        </TextReveal>
      </section>
    </main>
  );
}
