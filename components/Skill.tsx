interface SkillProps {
    name: string;
    icon: React.ReactNode;
}

const Skill: React.FC<SkillProps> = ({ name, icon }) => {
    return (
        <div className="flex flex-col items-center justify-center text-center">
            <div className="transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-center w-16 h-16 bg-purple-100 dark:bg-purple-700/20 rounded-full ">
                    {icon}
                </div>
                <span className="mt-2 text-sm font-medium text-foreground">{name}</span>
            </div>
        </div>
    );
};

export default Skill;