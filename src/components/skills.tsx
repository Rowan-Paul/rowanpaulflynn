import SkillItem from './skill-item';

const Skills = () => {
  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32 h-[100dvh]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Skills</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I&apos;m proficient in a variety of technologies and tools to build high-quality applications.
            </p>
          </div>
        </div>
        <div className="max-w-5xl gap-6 py-12 mx-auto lg:grid lg:items-center lg:grid-cols-3 lg:gap-12">
          <SkillItem
            title="NextJS"
            description="Experienced in building server-rendered, static, and hybrid NextJS applications."
          />
          <SkillItem
            title="TypeScript"
            description="Experienced in using TypeScript to build scalable and maintainable applications."
          />
          <SkillItem
            title="Tailwind CSS"
            description="Skilled in using Tailwind CSS to create responsive and visually appealing designs."
          />
          <SkillItem
            title="GraphQL"
            description="Experienced in building and consuming GraphQL APIs with Apollo Client."
          />
          <SkillItem
            title="Strapi"
            description="Experienced in building headless CMS solutions with Strapi and NextJS."
          />
          <SkillItem title="Nest" description="Proficient in building scalable and maintainable APIs with NestJS" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
