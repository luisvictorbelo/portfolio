interface SkillProps {
    name: string;
    icon: React.ReactNode;
}

const Skill: React.FC<SkillProps> = ({ name, icon }) => {
    return (
        <div className="flex flex-col items-center justify-center text-center">
            <div className="transition-all duration-300 hover:-translate-y-1">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-700/20">
                    {icon}
                </div>
                <span className="text-foreground mt-2 text-sm font-medium">
                    {name}
                </span>
            </div>
        </div>
    );
};

export default Skill;
