import Project from './project';

const Work = () => {
  return (
    <section id="work" className="w-full py-12 md:py-24 lg:py-32 bg-muted h-[100dvh]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Work</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Check out some of my latest projects and case studies.
            </p>
          </div>
        </div>
        <div className="max-w-5xl gap-6 py-12 mx-auto lg:grid lg:items-center lg:grid-cols-2 lg:gap-12">
          <Project
            link="https://github.com/Tracktr/tracktr"
            image="/placeholder.svg"
            title="Tracktr"
            description="An ambitious open source movie app made with friends. Built with NextJS, Tailwind CSS, and TypeScript on
                the frontend and NestJS on the backend."
          />
          <Project
            link="https://github.com/Rowan-Paul/gwentcards"
            image="/placeholder.svg"
            title="GWENT cards"
            description="A website to keep track of collecting all cards in the GWENT minigame inside of The Witcher 3. Bui;d
                with NextJS, Tailwind CSS, and TypeScript."
          />
        </div>
      </div>
    </section>
  );
};
export default Work;
