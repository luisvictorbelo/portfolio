import AnimatedSection from "./AnimatedSection";
import Skill from "./Skill";
import { FaCss3Alt, FaHtml5, FaJs, FaNodeJs, FaReact, FaWordpress, FaLaravel } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiDotnet, SiTypescript } from "react-icons/si"
import { DiMsqlServer, DiMysql, DiMongodb } from "react-icons/di";
import { VscAzure } from "react-icons/vsc";

const SkillsSection = () => {
    const skills = [
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500 w-8 h-8" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 w-8 h-8" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400 w-8 h-8" /> },
        { name: "WordPress", icon: <FaWordpress className="dark:text-white w-8 h-8" /> },
        { name: "React.js", icon: <FaReact className="text-blue-400 w-8 h-8" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-600 w-8 h-8" /> },
        { name: "Next.js", icon: <RiNextjsFill className="dark:text-white w-8 h-8" /> },
        { name: ".NET", icon: <SiDotnet className="text-purple-700 w-8 h-8" /> },
        { name: "Laravel", icon: <FaLaravel className="text-orange-700 w-8 h-8" /> },
        { name: "MySQL", icon: <DiMysql className="text-blue-600 w-8 h-8" /> },
        { name: "SQL Server", icon: <DiMsqlServer className="text-blue-600 w-8 h-8" /> },
        { name: "MongoDB", icon: <DiMongodb className="text-green-700 w-8 h-8" /> },
        { name: "Azure", icon: <VscAzure className="text-blue-600 w-8 h-8" /> },
    ];

    return (
        <AnimatedSection id="skills" className="bg-purple-50 dark:bg-purple-900/10">
            <div className="container mx-auto px-4">
                <h2 className="section-title mb-12 text-center">Habilidades</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <Skill key={index} name={skill.name} icon={skill.icon} />
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
};

export default SkillsSection;