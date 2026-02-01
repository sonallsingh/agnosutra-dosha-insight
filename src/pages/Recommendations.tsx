import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Utensils,
  Activity,
  Sun,
  Moon,
  Leaf,
  Heart,
  Clock,
  Coffee,
  Salad,
  Soup,
  Apple,
  Droplets,
} from "lucide-react";

const dietRecommendations = [
  {
    title: "Favor These Foods",
    icon: Salad,
    items: [
      "Warm, cooked grains (rice, oats, quinoa)",
      "Sweet fruits (bananas, mangoes, grapes)",
      "Cooked vegetables (carrots, beets, asparagus)",
      "Healthy fats (ghee, olive oil, avocado)",
      "Warming spices (ginger, cinnamon, cumin)",
    ],
    color: "secondary",
  },
  {
    title: "Foods to Reduce",
    icon: Apple,
    items: [
      "Raw, cold foods and salads",
      "Dry, crunchy snacks",
      "Caffeine and stimulants",
      "Bitter and astringent vegetables",
      "Cold beverages and ice cream",
    ],
    color: "destructive",
  },
  {
    title: "Meal Suggestions",
    icon: Soup,
    items: [
      "Breakfast: Warm oatmeal with cinnamon and dates",
      "Lunch: Kitchari with seasonal vegetables",
      "Dinner: Vegetable soup with quinoa",
      "Snacks: Warm milk with turmeric, soaked nuts",
    ],
    color: "primary",
  },
];

const lifestyleRecommendations = [
  {
    title: "Daily Practices",
    description: "Incorporate these practices for optimal wellness",
    items: [
      { text: "Oil massage (Abhyanga) with warm sesame oil", icon: Droplets },
      { text: "Gentle yoga and stretching exercises", icon: Activity },
      { text: "Meditation for 15-20 minutes daily", icon: Heart },
      { text: "Walking in nature, preferably in sunshine", icon: Sun },
    ],
  },
  {
    title: "Exercise Guidelines",
    description: "Movement practices suited to your constitution",
    items: [
      { text: "Prefer gentle, grounding exercises", icon: Activity },
      { text: "Yoga poses: Child's pose, Forward folds, Warrior I", icon: Leaf },
      { text: "Swimming and light walking", icon: Activity },
      { text: "Avoid excessive cardio or high-intensity workouts", icon: Heart },
    ],
  },
];

const dailyRoutine = [
  { time: "6:00 AM", activity: "Wake up before sunrise", icon: Sun, description: "Start your day early to align with natural rhythms" },
  { time: "6:15 AM", activity: "Tongue scraping & oil pulling", icon: Droplets, description: "Cleanse and detoxify your oral cavity" },
  { time: "6:30 AM", activity: "Warm water with lemon", icon: Coffee, description: "Stimulate digestion and hydrate the body" },
  { time: "7:00 AM", activity: "Yoga & meditation", icon: Activity, description: "Ground yourself with gentle movement and stillness" },
  { time: "8:00 AM", activity: "Warm, nourishing breakfast", icon: Utensils, description: "Fuel your body with easily digestible foods" },
  { time: "12:00 PM", activity: "Main meal of the day", icon: Soup, description: "Eat your largest meal when digestion is strongest" },
  { time: "6:00 PM", activity: "Light dinner", icon: Salad, description: "Keep evening meals simple and early" },
  { time: "9:00 PM", activity: "Wind-down routine", icon: Moon, description: "Dim lights, gentle stretching, warm milk" },
  { time: "10:00 PM", activity: "Sleep", icon: Moon, description: "Ensure 7-8 hours of restful sleep" },
];

const preventiveTips = [
  {
    title: "Seasonal Adjustments",
    tips: [
      "In winter: Increase warm foods and stay cozy",
      "In summer: Favor cooling foods and activities",
      "During monsoon: Focus on light, digestible meals",
    ],
  },
  {
    title: "Stress Management",
    tips: [
      "Practice pranayama (breathing exercises)",
      "Maintain regular sleep schedule",
      "Avoid excessive travel and overstimulation",
    ],
  },
  {
    title: "Immunity Boosters",
    tips: [
      "Take Chyawanprash daily",
      "Include turmeric and ginger in meals",
      "Practice regular oil massage",
    ],
  },
];

const Recommendations = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-muted/30 py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Leaf className="w-4 h-4" />
              <span>Vata-Pitta Constitution</span>
            </div>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Your Personalized <span className="text-gradient">Recommendations</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Tailored wellness guidance based on your unique Dosha profile to help you 
              achieve optimal balance and vitality.
            </p>
          </motion.div>

          {/* Tabs */}
          <Tabs defaultValue="diet" className="max-w-5xl mx-auto">
            <TabsList className="grid grid-cols-4 h-auto p-1 mb-8">
              <TabsTrigger value="diet" className="py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Utensils className="w-4 h-4 mr-2" />
                Diet
              </TabsTrigger>
              <TabsTrigger value="lifestyle" className="py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Activity className="w-4 h-4 mr-2" />
                Lifestyle
              </TabsTrigger>
              <TabsTrigger value="routine" className="py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Clock className="w-4 h-4 mr-2" />
                Routine
              </TabsTrigger>
              <TabsTrigger value="preventive" className="py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Heart className="w-4 h-4 mr-2" />
                Preventive
              </TabsTrigger>
            </TabsList>

            {/* Diet Tab */}
            <TabsContent value="diet">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-3 gap-6"
              >
                {dietRecommendations.map((section, index) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="card-elevated"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-${section.color}/10 flex items-center justify-center mb-4`}>
                      <section.icon className={`w-6 h-6 text-${section.color}`} />
                    </div>
                    <h3 className="font-serif text-lg font-semibold mb-4">{section.title}</h3>
                    <ul className="space-y-3">
                      {section.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className={`w-1.5 h-1.5 rounded-full bg-${section.color} mt-1.5 shrink-0`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            {/* Lifestyle Tab */}
            <TabsContent value="lifestyle">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 gap-6"
              >
                {lifestyleRecommendations.map((section, index) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="card-elevated"
                  >
                    <h3 className="font-serif text-xl font-semibold mb-2">{section.title}</h3>
                    <p className="text-sm text-muted-foreground mb-6">{section.description}</p>
                    <div className="space-y-4">
                      {section.items.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-4 p-3 rounded-xl bg-muted/50">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                            <item.icon className="w-5 h-5 text-primary" />
                          </div>
                          <span className="text-sm">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            {/* Daily Routine Tab */}
            <TabsContent value="routine">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="card-elevated"
              >
                <h3 className="font-serif text-xl font-semibold mb-6">
                  Dinacharya - Daily Routine
                </h3>
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />
                  
                  <div className="space-y-6">
                    {dailyRoutine.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="relative flex items-start gap-4 pl-14"
                      >
                        <div className="absolute left-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border-4 border-background">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1 pb-6">
                          <div className="flex items-center gap-3 mb-1">
                            <span className="text-sm font-medium text-primary">{item.time}</span>
                            <span className="font-semibold">{item.activity}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </TabsContent>

            {/* Preventive Tab */}
            <TabsContent value="preventive">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-3 gap-6"
              >
                {preventiveTips.map((section, index) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="card-elevated"
                  >
                    <h3 className="font-serif text-lg font-semibold mb-4">{section.title}</h3>
                    <ul className="space-y-3">
                      {section.tips.map((tip, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Recommendations;
