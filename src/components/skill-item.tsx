interface SkillItemProps {
  title: string;
  description: string;
}

const SkillItem = ({ title, description }: SkillItemProps) => {
  return (
    <div className="grid gap-1 p-4 hover:bg-accent hover:text-accent-foreground">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};
export default SkillItem;
