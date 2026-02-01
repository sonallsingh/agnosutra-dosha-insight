import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Brain,
  Leaf,
  Heart,
  Target,
  Users,
  Lightbulb,
  Award,
  BookOpen,
  Globe,
} from "lucide-react";

const researchHighlights = [
  {
    icon: Brain,
    title: "Machine Learning Integration",
    description: "Advanced ML algorithms trained on Ayurvedic texts and clinical data to provide accurate Dosha classification.",
  },
  {
    icon: Target,
    title: "Rule-Based Reasoning",
    description: "Expert system incorporating traditional Ayurvedic diagnostic principles for personalized recommendations.",
  },
  {
    icon: Heart,
    title: "IoT Health Monitoring",
    description: "Seamless integration with wearables and health devices for real-time health data analysis.",
  },
  {
    icon: Lightbulb,
    title: "Preventive Healthcare",
    description: "Early detection of imbalances using predictive analytics to prevent health issues before they arise.",
  },
];

const values = [
  {
    icon: Leaf,
    title: "Ancient Wisdom",
    description: "Rooted in 5,000 years of Ayurvedic knowledge and healing traditions.",
  },
  {
    icon: Brain,
    title: "Modern Technology",
    description: "Leveraging AI and machine learning for precise health analysis.",
  },
  {
    icon: Users,
    title: "Personalization",
    description: "Every recommendation is tailored to your unique constitution.",
  },
  {
    icon: Award,
    title: "Evidence-Based",
    description: "Combining traditional knowledge with modern scientific validation.",
  },
];

const team = [
  {
    name: "Dr. Ananya Sharma",
    role: "Chief Ayurvedic Advisor",
    bio: "20+ years experience in Ayurvedic medicine and research.",
    initials: "AS",
  },
  {
    name: "Vikram Patel",
    role: "AI/ML Lead",
    bio: "Former Google researcher specializing in healthcare AI.",
    initials: "VP",
  },
  {
    name: "Dr. Meera Krishnan",
    role: "Research Director",
    bio: "PhD in Integrative Medicine from Stanford University.",
    initials: "MK",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-30" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              <span>Our Story</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Bridging <span className="text-gradient">Ancient Wisdom</span> with{" "}
              <span className="text-gradient-secondary">Modern Science</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              AgnoSutra was born from a vision to make the profound wisdom of Ayurveda 
              accessible to everyone through the power of artificial intelligence. We believe 
              in preventive, personalized healthcare that honors your unique constitution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6">
                Our <span className="text-gradient">Mission</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                To revolutionize personal wellness by creating an intelligent platform that 
                understands each individual's unique constitution and provides personalized, 
                preventive healthcare guidance rooted in the timeless principles of Ayurveda.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We envision a world where everyone has access to holistic health insights, 
                enabling them to achieve optimal well-being through a deep understanding of 
                their body, mind, and spirit.
              </p>
              <Link to="/dosha-analysis">
                <Button variant="hero" size="lg" className="rounded-xl">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <div className="w-3/4 h-3/4 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Leaf className="w-32 h-32 text-primary-foreground" />
                </div>
              </div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-card p-4 rounded-2xl shadow-medium"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Globe className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">50K+</div>
                    <div className="text-sm text-muted-foreground">Global Users</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Our Core <span className="text-gradient">Values</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do at AgnoSutra.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-elevated text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section className="section-padding bg-foreground text-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Research & <span className="text-primary">Innovation</span>
            </h2>
            <p className="text-lg text-background/70">
              Our platform is built on cutting-edge research combining AI, machine learning, 
              and traditional Ayurvedic knowledge.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {researchHighlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background/5 backdrop-blur-sm rounded-2xl p-6 border border-background/10"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-background/70">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Meet Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              A passionate team of Ayurvedic practitioners, technologists, and researchers 
              dedicated to your wellness.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-elevated text-center"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4 text-primary-foreground text-2xl font-bold">
                  {member.initials}
                </div>
                <h3 className="font-serif text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6">
              Ready to Discover Your Path to Wellness?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Take the first step towards a balanced, healthy life with personalized 
              Ayurvedic insights powered by AI.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/dosha-analysis">
                <Button variant="hero" size="xl">
                  Analyze Your Dosha
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/register">
                <Button variant="hero-outline" size="xl">
                  Create Account
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
