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
            icon: <FaNodeJs className="h-8 w-8 text-green-600" />,
        },
        { name: 'React', icon: <FaReact className="h-8 w-8 text-blue-400" /> },
        {
            name: 'Next.js',
            icon: <RiNextjsFill className="h-8 w-8 dark:text-white" />,
        },
        {
            name: 'NestJS',
            icon: <SiNestjs className="h-8 w-8 text-pink-700" />,
        },
        {
            name: 'TypeScript',
            icon: <SiTypescript className="h-8 w-8 text-blue-600" />,
        },
        {
            name: 'Tailwind',
            icon: <SiTailwindcss className="h-8 w-8 text-green-500" />,
        },
        {
            name: '.NET',
            icon: <SiDotnet className="h-8 w-8 text-purple-700" />,
        },
        {
            name: 'WordPress',
            icon: <FaWordpress className="h-8 w-8 dark:text-white" />,
        },
        {
            name: 'PostgreSQL',
            icon: <DiPostgresql className="h-8 w-8 text-blue-600" />,
        },
        {
            name: 'MongoDB',
            icon: <DiMongodb className="h-8 w-8 text-green-700" />,
        },
        { name: 'Azure', icon: <VscAzure className="h-8 w-8 text-blue-600" /> },
        { name: 'Go', icon: <DiGo className="h-8 w-8 text-blue-400" /> },
        {
            name: 'Python',
            icon: <DiPython className="h-8 w-8 text-yellow-400" />,
        },
    ];

    return (
        <AnimatedSection
            id="skills"
            className="bg-purple-50 dark:bg-purple-900/10"
        >
            <div className="container mx-auto px-4">
                <h2 className="section-title mb-12 text-center">Habilidades</h2>
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
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
