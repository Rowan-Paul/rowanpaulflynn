import Image from 'next/image';
import Link from 'next/link';

interface ProjectProps {
  link: string;
  image: string;
  title: string;
  description: string;
}

const Project = ({ link, image, title, description }: ProjectProps) => {
  return (
    <Link
      href={link}
      className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
      prefetch={false}
      target="_blank"
    >
      <Image
        src={image}
        width="550"
        height="310"
        alt="Project 2"
        className="object-cover object-center mx-auto overflow-hidden aspect-video rounded-xl sm:w-full"
      />
      <div className="mt-4 space-y-1">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </Link>
  );
};

export default Project;
