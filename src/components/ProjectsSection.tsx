
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CodeIcon, DevicePhoneIcon, BookOpenIcon } from "@/components/Icons";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  status: "completed" | "in-progress";
  icon?: React.ReactNode;
}

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      title: "Digi-Envision - Dashboard & Web Application",
      description: "Developed a feature-rich dashboard using React, reducing support requests by 25%. Optimized API calls, improving performance by 70%.",
      technologies: ["React", "API", "JavaScript"],
      image: "/placeholder.svg",
      status: "completed",
      icon: <CodeIcon className="w-4 h-4" />
    },
    {
      title: "No Agenda Spaces",
      description: "A mobile application designed to help users create and manage shared collaborative spaces without predefined objectives.",
      technologies: ["React Native", "Firebase", "TypeScript"],
      image: "/placeholder.svg",
      status: "in-progress",
      icon: <DevicePhoneIcon className="w-4 h-4" />
    },
    {
      title: "LMS - Learning Management System",
      description: "Comprehensive learning platform with course management, progress tracking, and interactive content delivery.",
      technologies: ["Next.js", "MongoDB", "Tailwind CSS"],
      image: "/placeholder.svg",
      status: "completed",
      icon: <BookOpenIcon className="w-4 h-4" />
    },
    {
      title: "E-Commerce Platform",
      description: "Built a responsive e-commerce platform with product filtering, cart functionality, and secure checkout process.",
      technologies: ["Next.js", "Redux", "Tailwind CSS"],
      image: "/placeholder.svg",
      status: "completed"
    },
    {
      title: "Task Management App",
      description: "Designed and developed a task management application with drag-and-drop functionality and real-time updates.",
      technologies: ["React", "TypeScript", "Firebase"],
      image: "/placeholder.svg",
      status: "completed"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="section-container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow animate-fade-in"
                 style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="h-48 bg-gray-100 flex items-center justify-center">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="h-full w-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="skill-tag">{tech}</span>
                    ))}
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{project.description}</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  {project.icon}
                  <span className={`text-sm font-medium ${project.status === "in-progress" ? "text-amber-600" : "text-green-600"}`}>
                    {project.status === "in-progress" ? "In Progress" : "Completed"}
                  </span>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
