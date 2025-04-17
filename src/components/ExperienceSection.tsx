
import { BriefcaseIcon, CalendarIcon, CheckCircleIcon } from "@/components/Icons";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

const ExperienceSection = () => {
  const experiences: Experience[] = [
    {
      title: "Software Engineer",
      company: "Graphy Inc.",
      period: "Aug 2023 - Present",
      description: "Led code reviews across 3+ high-impact projects, enhancing code quality and maintainability. Worked closely with design and product teams to improve efficiency by 25%, reducing rework by 15%. Proactively resolved critical bugs, reducing system downtime by 20%."
    },
    {
      title: "Software Developer",
      company: "Kycres Technologies (Remote)",
      period: "Apr 2021 - Aug 2023",
      description: "Built 25+ reusable React components, improving product functionality by 10%. Developed a core form engine component, enhancing performance by 60% and user satisfaction by 25%. Mentored a team of developers, improving their productivity."
    },
    {
      title: "React JS Developer",
      company: "Ezio Solutions",
      period: "Feb 2021 - Apr 2021",
      description: "Built a responsive web dashboard using React, improving user engagement. Integrated REST APIs to enhance data retrieval efficiency by 12%."
    },
    {
      title: "Customer Service Representative",
      company: "Amazon",
      period: "Jul 2018 - Aug 2019",
      description: "Increased customer satisfaction by 80% by effectively resolving queries and ensuring positive outcomes."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">My Experience</h2>
        
        <div className="mt-16 space-y-8 md:space-y-0 md:grid md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4 animate-fade-in">
            <div className="sticky top-24">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Professional Journey</h3>
              <p className="text-gray-700">
                Over the years, I've had the opportunity to work with amazing teams and contribute to impactful projects that have shaped my expertise in frontend development.
              </p>
              <div className="mt-8 flex items-center gap-2 text-primary">
                <BriefcaseIcon className="w-5 h-5" />
                <span className="font-medium">4+ Years of Experience</span>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-8">
            <div className="border-l border-gray-200 pl-8 relative">
              {experiences.map((exp, index) => (
                <div 
                  key={index} 
                  className="experience-card mb-12 last:mb-0 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-2 mb-1 text-primary font-medium">
                    <CalendarIcon className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                  <p className="text-gray-600 mb-4">{exp.company}</p>
                  <p className="text-gray-700">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
