import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { MailIcon, PhoneIcon, MapPinIcon } from "@/components/Icons";
import emailjs from "emailjs-com";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
      "service_h6dpj9p", 
      "template_fly4qe7", 
      e.currentTarget,
      "zzeC_M0BNXAvyD-OJ" 
    ).then(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", message: "" });
    }).catch(() => {
      toast({
        title: "Oops!",
        description: "Something went wrong. Please try again.",
      });
    }).finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="section-container">
        <h2 className="section-title">Let's Work Together</h2>

        <div className="grid md:grid-cols-12 gap-12 mt-16">
          <div className="md:col-span-5 animate-fade-in">
            {/* Contact Info */}
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            <p className="text-gray-700 mb-8">
            I'm always open to new opportunities and collaborations. Let's build something amazing together! Feel free to reach out if you're interested in working on a project or if you have any questions.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MailIcon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a href="mailto:parthibansundaram97@gmail.com" className="text-gray-700 hover:text-primary transition-colors">
                    parthibansundaram97@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <PhoneIcon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a href="tel:+918098020550" className="text-gray-700 hover:text-primary transition-colors">
                    +91 8098020550
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPinIcon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-gray-700">Bengaluru, Karnataka</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 animate-fade-in">
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="I'd like to discuss a project..."
                      rows={5}
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
