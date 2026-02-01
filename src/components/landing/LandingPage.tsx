import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Heart, Leaf, Activity, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-wellness.jpg";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Dosha Analysis",
    description: "Advanced machine learning algorithms analyze your unique constitution through comprehensive questionnaires and health data.",
  },
  {
    icon: Activity,
    title: "Real-time Health Monitoring",
    description: "Integrate with wearables and IoT devices to track vital signs, sleep patterns, and daily activities for holistic insights.",
  },
  {
    icon: Sparkles,
    title: "Personalized Recommendations",
    description: "Receive tailored diet plans, lifestyle routines, and wellness practices based on your Prakriti and current health state.",
  },
  {
    icon: Shield,
    title: "Preventive Healthcare",
    description: "Identify potential imbalances early and take proactive steps to maintain optimal health and prevent disorders.",
  },
  {
    icon: Heart,
    title: "Holistic Wellness Approach",
    description: "Balance mind, body, and spirit with guidance rooted in 5,000 years of Ayurvedic wisdom, enhanced by modern science.",
  },
  {
    icon: Leaf,
    title: "Natural Remedies",
    description: "Discover herbal formulations, therapeutic practices, and natural treatments aligned with your body's needs.",
  },
];

const doshas = [
  {
    name: "Vata",
    element: "Air & Ether",
    color: "vata",
    traits: "Creative, energetic, adaptable",
    description: "Governs movement and communication in the body",
  },
  {
    name: "Pitta",
    element: "Fire & Water",
    color: "pitta",
    traits: "Focused, ambitious, intelligent",
    description: "Controls digestion, metabolism, and transformation",
  },
  {
    name: "Kapha",
    element: "Earth & Water",
    color: "kapha",
    traits: "Calm, grounded, nurturing",
    description: "Provides structure, stability, and immunity",
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Yoga Instructor",
    content: "AgnoSutra transformed my understanding of my body. The AI analysis was incredibly accurate, and the personalized recommendations have helped me achieve balance I never thought possible.",
    avatar: "PS",
  },
  {
    name: "Rajesh Kumar",
    role: "Software Engineer",
    content: "As someone with a hectic lifestyle, the preventive health insights have been invaluable. The integration with my fitness tracker makes it seamless to monitor my wellness journey.",
    avatar: "RK",
  },
  {
    name: "Dr. Anita Patel",
    role: "Ayurvedic Practitioner",
    content: "Finally, a platform that bridges traditional Ayurveda with modern technology. I recommend AgnoSutra to all my patients for comprehensive health monitoring.",
    avatar: "AP",
  },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-50" />
      
      {/* Hero Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Ayurvedic wellness"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              <span>AI-Powered Ayurvedic Wellness</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              Discover Your{" "}
              <span className="text-gradient">Perfect Balance</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Experience the harmony of ancient Ayurvedic wisdom and cutting-edge AI technology. 
              Get personalized wellness insights tailored to your unique constitution.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/dosha-analysis">
                <Button variant="hero" size="xl">
                  Analyze My Health
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="hero-outline" size="xl">
                  Learn More
                </Button>
              </Link>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">50K+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">98%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">4.9</div>
                <div className="text-sm text-muted-foreground">Rating</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl" />
              <img
                src={heroImage}
                alt="Wellness visualization"
                className="relative w-full h-full object-cover rounded-3xl shadow-large"
              />
              
              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-8 top-1/4 bg-card p-4 rounded-2xl shadow-medium border border-border"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-vata/20 flex items-center justify-center">
                    <Activity className="w-5 h-5 text-vata" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Vata Balance</div>
                    <div className="text-xs text-muted-foreground">Optimal</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-4 bottom-1/3 bg-card p-4 rounded-2xl shadow-medium border border-border"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Heart className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Health Score</div>
                    <div className="text-xs text-muted-foreground">92/100</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FeaturesSection = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Why Choose <span className="text-gradient">AgnoSutra?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We combine the ancient science of Ayurveda with modern AI to provide you with 
            the most comprehensive and personalized wellness experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-elevated group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const DoshaSection = () => {
  return (
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
            Understanding Your <span className="text-gradient-secondary">Dosha</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            In Ayurveda, your unique constitution is determined by three fundamental energies 
            called Doshas. Discover how they shape your physical and mental characteristics.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {doshas.map((dosha, index) => (
            <motion.div
              key={dosha.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`card-${dosha.color} hover:-translate-y-2 transition-transform duration-300`}
            >
              <div className="text-center">
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-${dosha.color}/20 mb-4`}>
                  <span className={`font-serif text-3xl font-bold text-${dosha.color}`}>
                    {dosha.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold mb-1">{dosha.name}</h3>
                <p className={`text-sm font-medium text-${dosha.color} mb-3`}>{dosha.element}</p>
                <p className="text-muted-foreground text-sm mb-4">{dosha.description}</p>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/50 text-xs font-medium">
                  {dosha.traits}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link to="/dosha-analysis">
            <Button variant="hero" size="xl">
              Discover Your Dosha
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  return (
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
            What Our <span className="text-primary">Community</span> Says
          </h2>
          <p className="text-lg text-background/70">
            Join thousands of individuals who have transformed their wellness journey with AgnoSutra.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background/5 backdrop-blur-sm rounded-2xl p-6 border border-background/10"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-background/60">{testimonial.role}</div>
                </div>
              </div>
              <p className="text-background/80 leading-relaxed italic">"{testimonial.content}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-accent p-8 md:p-16 text-center"
        >
          <div className="absolute inset-0 pattern-dots opacity-10" />
          <div className="relative z-10">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Begin Your Wellness Journey Today
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Take the first step towards holistic health. Get your personalized Dosha analysis 
              and receive tailored recommendations for a balanced life.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/register">
                <Button 
                  size="xl" 
                  className="bg-background text-foreground hover:bg-background/90 rounded-full px-10"
                >
                  Get Started Free
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button 
                  size="xl" 
                  variant="ghost"
                  className="text-primary-foreground border-2 border-primary-foreground/30 hover:bg-primary-foreground/10 rounded-full px-10"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <DoshaSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
};

export default LandingPage;
