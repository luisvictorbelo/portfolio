import AnimatedSection from './AnimatedSection';
import Skill from './Skill';
import {
    FaCss3Alt,
    FaHtml5,
    FaJs,
    FaNodeJs,
    FaReact,
    FaWordpress,
    FaLaravel,
} from 'react-icons/fa';
import { RiNextjsFill } from 'react-icons/ri';
import {
    SiDotnet,
    SiTypescript,
    SiNestjs,
    SiTailwindcss,
} from 'react-icons/si';
import {
    DiPostgresql,
    DiMysql,
    DiMongodb,
    DiGo,
    DiPython,
} from 'react-icons/di';
import { VscAzure } from 'react-icons/vsc';

const SkillsSection = () => {
    const skills = [
        {
            name: 'Node.js',
            icon: <FaNodeJs className="text-green-600 w-8 h-8" />,
        },
        { name: 'React', icon: <FaReact className="text-blue-400 w-8 h-8" /> },
        {
            name: 'Next.js',
            icon: <RiNextjsFill className="dark:text-white w-8 h-8" />,
        },
        {
            name: 'NestJS',
            icon: <SiNestjs className="text-pink-700 w-8 h-8" />,
        },
        {
            name: 'TypeScript',
            icon: <SiTypescript className="text-blue-600 w-8 h-8" />,
        },
        {
            name: 'Tailwind',
            icon: <SiTailwindcss className="text-green-500 w-8 h-8" />,
        },
        {
            name: '.NET',
            icon: <SiDotnet className="text-purple-700 w-8 h-8" />,
        },
        {
            name: 'WordPress',
            icon: <FaWordpress className="dark:text-white w-8 h-8" />,
        },
        {
            name: 'PostgreSQL',
            icon: <DiPostgresql className="text-blue-600 w-8 h-8" />,
        },
        {
            name: 'MongoDB',
            icon: <DiMongodb className="text-green-700 w-8 h-8" />,
        },
        { name: 'Azure', icon: <VscAzure className="text-blue-600 w-8 h-8" /> },
        { name: 'Go', icon: <DiGo className="text-blue-400 w-8 h-8" /> },
        {
            name: 'Python',
            icon: <DiPython className="text-yellow-400 w-8 h-8" />,
        },
    ];

    return (
        <AnimatedSection
            id="skills"
            className="bg-purple-50 dark:bg-purple-900/10"
        >
            <div className="container mx-auto px-4">
                <h2 className="section-title mb-12 text-center">Habilidades</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <Skill
                            key={index}
                            name={skill.name}
                            icon={skill.icon}
                        />
                    ))}
                </div>
            </div>
        </AnimatedSection>
    );
};

export default SkillsSection;
