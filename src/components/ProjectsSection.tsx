import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  status: "completed" | "in-progress";
}

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      title: "No Agenda Spaces",
      description:
        "No Agenda Spaces is a community-driven mobile application designed to help women and queer individuals find or host welcoming homes where they can connect, unwind, or simply exist without judgment. Built with a focus on inclusivity and mental health, the app emphasizes trust, safety, and meaningful human presence — no agenda required.",
      technologies: ["React Native", "Firebase", "TypeScript"],
      image: "/placeholder.svg",
      status: "in-progress",
    },
    {
      title: "LMS - Learning Management System",
      description:
        "This LMS was built to support students preparing for competitive exams by enabling structured mock test practice. Admins can create and manage batches, add students, and assign tests to specific groups. Students can then take these tests any number of times for practice and self-assessment. The system is designed for scalability, making it easy to manage large sets of users and evaluations efficiently.",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      image: "/placeholder.svg",
      status: "completed",
    },
    {
      title: "Digi-Envision - Dashboard & Web Application",
      description:
        "Digi-Envision is a web-based inventory tracking application designed to help farmers manage their crops efficiently. It allows users to monitor incoming yield, and track produce inventory. With a streamlined dashboard, the platform simplifies record-keeping and supports smarter, data-driven decisions in agricultural planning and resource",
      technologies: ["React", "API", "JavaScript"],
      image: "/placeholder.svg",
      status: "completed",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="section-container">
        <h2 className="section-title">My Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-48 bg-gray-100 flex items-center justify-center relative">
                <span
                  className={`text-xs font-medium absolute top-4 left-4 px-2 py-1 rounded-sm ${
                    project.status === "in-progress"
                      ? "text-amber-600 bg-amber-50"
                      : "text-green-600 bg-green-50"
                  }`}
                >
                  {project.status === "in-progress"
                    ? "In Progress"
                    : "Completed"}
                </span>
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
                      <span key={i} className="skill-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
