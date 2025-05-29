import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';
import { useLanguage } from './LanguageProvider';
import { useToast } from '@/components/ui/use-toast';
import { sendContactEmail } from '../lib/sendContactEmail';

const Contact = () => {
  const { language, translations } = useLanguage();
  const { toast } = useToast();
  // Fix: add type for t
  const t: Record<string, string> = translations[language]?.contact || {};

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const isValid =
    formData.name.trim() !== '' &&
    formData.email.trim() !== '' &&
    formData.message.trim() !== '';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    if (!isValid) {
      toast({
        title: t.errorTitle || "Error",
        description: t.errorDesc || "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    try {
      await sendContactEmail({
        ...formData,
        to: "naderemad961516@gmail.com"
      });
      toast({
        title: t.successTitle || "Message Sent!",
        description: t.successDesc || "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    } catch (error) {
      toast({
        title: t.errorTitle || "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const errorClass = "border-red-500 focus:border-red-500 focus:ring-red-500";
  const blueFocusClass = "focus:border-blue-500 focus:ring-blue-500";
  const errorTextClass = "text-red-600 text-sm mt-1";

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t.title || "Let's Work Together"}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {t.subtitle || "Ready to bring your ideas to life? I'd love to hear from you."}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              {t.getInTouch || "Get In Touch"}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-12 text-lg leading-relaxed">
              {t.intro || "Whether you have a project in mind, need consultation, or just want to say hello, I'm always excited to connect with fellow developers and potential collaborators."}
            </p>
            
            <div className="space-y-6">
              {/* Email Card */}
              <a
                href="mailto:naderemad961516@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
                style={{ textDecoration: 'none' }}
              >
                <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {t.email || "Email"}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">naderemad961516@gmail.com</p>
                </div>
              </a>
              
              {/* WhatsApp Card */}
              <a
                href="https://wa.me/966539812835"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
                style={{ textDecoration: 'none' }}
              >
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {t.phone || "Phone / WhatsApp"}
                  </p>
                  {/* Force LTR for phone number */}
                  <p className="text-gray-600 dark:text-gray-300" dir="ltr" style={{ direction: 'ltr', unicodeBidi: 'plaintext' }}>
                    +966 53 981 2835
                  </p>
                </div>
              </a>
              
              {/* LinkedIn Card */}
              <a
                href="https://linkedin.com/in/naderr-emadd"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
                style={{ textDecoration: 'none' }}
              >
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {t.linkedin || "LinkedIn"}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {t.linkedinDesc || "Connect with me"}
                  </p>
                </div>
              </a>
              
              {/* GitHub Card */}
              <a
                href="https://github.com/NaderEmad9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
                style={{ textDecoration: 'none' }}
              >
                <div className="w-12 h-12 bg-gray-900 dark:bg-gray-700 rounded-xl flex items-center justify-center">
                  <Github className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {t.github || "GitHub"}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {t.githubDesc || "View my repositories"}
                  </p>
                </div>
              </a>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              {t.sendMessage || "Send a Message"}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  name="name"
                  placeholder={t.fullName || "Your full name"}
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`rounded-xl h-12 bg-background text-foreground border ${submitted && !formData.name ? errorClass : blueFocusClass} border-gray-300 dark:border-gray-600`}
                />
                {submitted && !formData.name && (
                  <div className={errorTextClass}>{t.fullName || "Full Name"} is required</div>
                )}
              </div>
              
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder={t.email || "your.email@example.com"}
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`rounded-xl h-12 bg-background text-foreground border ${submitted && !formData.email ? errorClass : blueFocusClass} border-gray-300 dark:border-gray-600`}
                />
                {submitted && !formData.email && (
                  <div className={errorTextClass}>{t.email || "Email"} is required</div>
                )}
              </div>
              
              <div>
                <textarea
                  name="message"
                  placeholder={t.messagePlaceholder || "Tell me about your project or just say hello..."}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className={`w-full px-4 py-3 rounded-xl h-32 bg-background text-foreground border resize-none focus:outline-none ${submitted && !formData.message ? errorClass : blueFocusClass} border-gray-300 dark:border-gray-600`}
                />
                {submitted && !formData.message && (
                  <div className={errorTextClass}>{t.message || "Message"} is required</div>
                )}
              </div>
              
              <Button
                type="submit"
                className={`w-full h-12 rounded-xl transition-colors duration-200 ${isValid ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-gray-400 text-white cursor-not-allowed"}`}
                disabled={!isValid || loading}
              >
                <Send className="w-4 h-4 mr-2" />
                {loading ? (t.sendBtn || "Sending...") : (t.sendBtn || "Send Message")}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;