
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CodeIcon, ServerIcon, BrainIcon, PenToolIcon } from "@/components/Icons";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const SkillsSection = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Languages & Frameworks",
      icon: <CodeIcon className="h-8 w-8 text-primary" />,
      skills: ["JavaScript", "TypeScript", "React", "Next.js", "Redux", "Node.js"]
    },
    {
      title: "Web Development",
      icon: <PenToolIcon className="h-8 w-8 text-primary" />,
      skills: ["HTML", "CSS", "TailwindCSS", "Styled Components", "Git"]
    },
    {
      title: "Other Tech Skills",
      icon: <ServerIcon className="h-8 w-8 text-primary" />,
      skills: ["Firebase", "Docker", "MongoDB", "Rest APIs", "GraphQL"]
    },
    {
      title: "Soft Skills",
      icon: <BrainIcon className="h-8 w-8 text-primary" />,
      skills: ["Ownership", "Mentorship", "Self-Learning", "Problem Solving", "Effective Communication"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">My Skills</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="flex flex-row items-center gap-4">
                {category.icon}
                <CardTitle>{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
