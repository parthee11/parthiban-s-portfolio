
import { Button } from "@/components/ui/button";
import { GitHubIcon, LinkedInIcon } from "@/components/Icons";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen pt-20 flex items-center relative">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 text-center md:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900">
              Hi, I'm <span className="text-primary">Parthiban</span> Somasundaram
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl">
            A passionate Software Engineer with expertise in building scalable, high-performance applications. With a strong foundation in React, Next.js, TypeScript, and backend technologies, I craft user-centric solutions that drive impact. Let's connect and create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg">
                <a href="#contact">Contact Me</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#projects">View Projects</a>
              </Button>
            </div>
            <div className="flex gap-4 mt-8 justify-center md:justify-start">
              <a href="https://github.com/parthee11" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary transition-colors">
                <GitHubIcon className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/parthibansomasundaram/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary transition-colors">
                <LinkedInIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl opacity-30"></div>
              <img 
                src="/parthi-header.jpeg" 
                alt="Parthiban Somasundaram" 
                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-white shadow-lg relative z-10"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#experience" className="text-gray-500 hover:text-primary transition-colors">
            <ArrowDown size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
