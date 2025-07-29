import Projects from "@/components/layout/Projects";
import WorkExperience from "@/components/layout/WorkExperience";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <>
      <section className="min-h-screen flex items-center justify-center bg-background py-10">
        <div className="text-left flex flex-col gap-10 p-5">
          <div className="flex flex-col gap-3">
            <p className="font-mono text-lg text-primary">Cześć, nazywam się</p>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Michał Kwiatkowski
            </h1>
          </div>
          <div className="text-lg md:text-xl text-foreground opacity-80 flex flex-col gap-1">
            <p>
              Jestem uczniem Technikum Łączności na kierunku technik
              programista.
            </p>
            <p>
              Interesuję się tworzeniem kompleksowych rozwiązań backendowych.
            </p>
            <p>Obecnie pracuję na stanowisku Software Developer w Descope.</p>
          </div>
          <div className="flex gap-2">
            <Button href="#experience">Doświadczenie</Button>
            <Button href="#projects">Projekty</Button>
          </div>
        </div>
      </section>
      <section className="min-h-screen flex flex-col items-center gap-10 p-5 justify-center bg-background py-10">
        <h2 id="experience" className="text-4xl text-primary font-bold">
          Moje doświadczenie zawodowe
        </h2>
        <WorkExperience />
        <div className="flex flex-col items-center gap-10">
          <h2 id="projects" className="text-4xl text-primary font-bold">
            Moje projekty
          </h2>
          <Projects />
        </div>
      </section>
    </>
  );
}
