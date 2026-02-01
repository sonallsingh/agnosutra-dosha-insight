import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ChevronLeft, ChevronRight, CheckCircle2, Brain, Sparkles } from "lucide-react";

const questions = [
  {
    id: 1,
    category: "Body Type",
    question: "What best describes your body frame?",
    options: [
      { value: "vata", label: "Thin, light frame with prominent joints" },
      { value: "pitta", label: "Medium, muscular build" },
      { value: "kapha", label: "Large, sturdy frame with soft features" },
    ],
  },
  {
    id: 2,
    category: "Skin",
    question: "How would you describe your skin?",
    options: [
      { value: "vata", label: "Dry, thin, rough, prone to cracking" },
      { value: "pitta", label: "Warm, oily, prone to redness or acne" },
      { value: "kapha", label: "Thick, smooth, cool, slightly oily" },
    ],
  },
  {
    id: 3,
    category: "Hair",
    question: "What is your hair type?",
    options: [
      { value: "vata", label: "Dry, thin, frizzy, tends to be curly" },
      { value: "pitta", label: "Fine, straight, prone to early graying" },
      { value: "kapha", label: "Thick, wavy, lustrous, oily" },
    ],
  },
  {
    id: 4,
    category: "Appetite",
    question: "How would you describe your appetite?",
    options: [
      { value: "vata", label: "Variable, sometimes strong, sometimes weak" },
      { value: "pitta", label: "Strong, can't skip meals, irritable when hungry" },
      { value: "kapha", label: "Slow but steady, can easily skip meals" },
    ],
  },
  {
    id: 5,
    category: "Digestion",
    question: "How is your digestion typically?",
    options: [
      { value: "vata", label: "Irregular, prone to gas and bloating" },
      { value: "pitta", label: "Fast, sometimes leads to acidity or heartburn" },
      { value: "kapha", label: "Slow but steady, feels heavy after eating" },
    ],
  },
  {
    id: 6,
    category: "Sleep",
    question: "How do you typically sleep?",
    options: [
      { value: "vata", label: "Light sleeper, difficulty falling asleep, vivid dreams" },
      { value: "pitta", label: "Moderate sleep, wake up refreshed but can have intense dreams" },
      { value: "kapha", label: "Deep, heavy sleep, hard to wake up, can oversleep" },
    ],
  },
  {
    id: 7,
    category: "Temperature",
    question: "What temperature do you prefer?",
    options: [
      { value: "vata", label: "Prefer warm weather, always feel cold" },
      { value: "pitta", label: "Prefer cool weather, easily feel hot" },
      { value: "kapha", label: "Adaptable, but dislike cold and damp" },
    ],
  },
  {
    id: 8,
    category: "Mind",
    question: "How would you describe your mental tendencies?",
    options: [
      { value: "vata", label: "Quick, creative, but easily distracted" },
      { value: "pitta", label: "Sharp, focused, decisive, sometimes critical" },
      { value: "kapha", label: "Calm, steady, good memory, slow to learn but retains" },
    ],
  },
  {
    id: 9,
    category: "Stress",
    question: "How do you typically react to stress?",
    options: [
      { value: "vata", label: "Anxious, worried, fearful" },
      { value: "pitta", label: "Irritable, angry, competitive" },
      { value: "kapha", label: "Withdrawn, resistant to change, comfort-seeking" },
    ],
  },
  {
    id: 10,
    category: "Activity",
    question: "How would you describe your activity level?",
    options: [
      { value: "vata", label: "Highly active, difficulty sitting still" },
      { value: "pitta", label: "Moderately active, goal-oriented workouts" },
      { value: "kapha", label: "Prefer relaxed activities, need motivation to exercise" },
    ],
  },
];

const doshaDescriptions = {
  vata: {
    title: "Vata Dominant",
    element: "Air & Ether",
    description: "You are creative, quick-thinking, and adaptable. Vata types are energetic and enthusiastic when balanced, but may experience anxiety and restlessness when out of balance.",
    recommendations: [
      "Follow a regular daily routine",
      "Eat warm, cooked foods",
      "Practice grounding activities like yoga",
      "Get adequate rest and sleep",
      "Stay warm and avoid cold environments",
    ],
  },
  pitta: {
    title: "Pitta Dominant",
    element: "Fire & Water",
    description: "You are intelligent, focused, and ambitious. Pitta types have strong digestion and metabolism. When balanced, you're courageous and content; when imbalanced, you may become irritable.",
    recommendations: [
      "Avoid excessive heat and direct sun",
      "Eat cooling foods like cucumber and coconut",
      "Practice calming exercises",
      "Take time for relaxation",
      "Avoid overly competitive situations",
    ],
  },
  kapha: {
    title: "Kapha Dominant",
    element: "Earth & Water",
    description: "You are calm, grounded, and nurturing. Kapha types have strong immunity and endurance. When balanced, you're loving and steady; when imbalanced, you may feel sluggish or resistant to change.",
    recommendations: [
      "Stay active with regular exercise",
      "Eat light, warm foods with spices",
      "Embrace new experiences and challenges",
      "Avoid oversleeping",
      "Seek stimulating activities",
    ],
  },
};

const DoshaAnalysis = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = (value: string) => {
    setAnswers((prev) => ({ ...prev, [questions[currentQuestion].id]: value }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const calculateDosha = () => {
    const counts = { vata: 0, pitta: 0, kapha: 0 };
    Object.values(answers).forEach((answer) => {
      if (answer in counts) {
        counts[answer as keyof typeof counts]++;
      }
    });

    const max = Math.max(counts.vata, counts.pitta, counts.kapha);
    if (counts.vata === max) return "vata";
    if (counts.pitta === max) return "pitta";
    return "kapha";
  };

  const dominantDosha = calculateDosha();
  const result = doshaDescriptions[dominantDosha];

  const currentAnswer = answers[questions[currentQuestion]?.id];

  return (
    <Layout>
      <div className="min-h-screen bg-muted/30 py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {!showResults ? (
              <motion.div
                key="questionnaire"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="max-w-2xl mx-auto"
              >
                {/* Header */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                    <Brain className="w-4 h-4" />
                    <span>AI-Powered Analysis</span>
                  </div>
                  <h1 className="font-serif text-3xl md:text-4xl font-bold mb-2">
                    Discover Your <span className="text-gradient">Dosha</span>
                  </h1>
                  <p className="text-muted-foreground">
                    Answer the following questions to understand your unique constitution
                  </p>
                </div>

                {/* Progress */}
                <div className="mb-8">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">
                      Question {currentQuestion + 1} of {questions.length}
                    </span>
                    <span className="font-medium text-primary">
                      {Math.round(progress)}% Complete
                    </span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>

                {/* Question Card */}
                <motion.div
                  key={currentQuestion}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="card-elevated p-8"
                >
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                    {questions[currentQuestion].category}
                  </span>
                  <h2 className="font-serif text-2xl font-semibold mb-6">
                    {questions[currentQuestion].question}
                  </h2>

                  <RadioGroup
                    value={currentAnswer || ""}
                    onValueChange={handleAnswer}
                    className="space-y-3"
                  >
                    {questions[currentQuestion].options.map((option) => (
                      <div
                        key={option.value}
                        className={`relative flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all ${
                          currentAnswer === option.value
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50 hover:bg-muted/50"
                        }`}
                      >
                        <RadioGroupItem
                          value={option.value}
                          id={option.value}
                          className="mr-4"
                        />
                        <Label
                          htmlFor={option.value}
                          className="cursor-pointer flex-1 text-base"
                        >
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </motion.div>

                {/* Navigation */}
                <div className="flex items-center justify-between mt-8">
                  <Button
                    variant="outline"
                    onClick={handlePrevious}
                    disabled={currentQuestion === 0}
                    className="rounded-xl"
                  >
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    Previous
                  </Button>
                  <Button
                    variant="hero"
                    onClick={handleNext}
                    disabled={!currentAnswer}
                    className="rounded-xl"
                  >
                    {currentQuestion === questions.length - 1 ? (
                      <>
                        See Results
                        <Sparkles className="w-4 h-4 ml-2" />
                      </>
                    ) : (
                      <>
                        Next
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="results"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl mx-auto"
              >
                {/* Results Header */}
                <div className="text-center mb-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle2 className="w-10 h-10 text-primary-foreground" />
                  </motion.div>
                  <h1 className="font-serif text-3xl md:text-4xl font-bold mb-2">
                    Your Dosha Analysis
                  </h1>
                  <p className="text-muted-foreground">
                    Based on your responses, here's your personalized constitution profile
                  </p>
                </div>

                {/* Result Card */}
                <div className={`card-${dominantDosha} mb-8`}>
                  <div className="text-center">
                    <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full bg-${dominantDosha}/20 mb-4`}>
                      <span className={`font-serif text-4xl font-bold text-${dominantDosha}`}>
                        {result.title.charAt(0)}
                      </span>
                    </div>
                    <h2 className="font-serif text-3xl font-bold mb-2">{result.title}</h2>
                    <p className={`text-${dominantDosha} font-medium mb-4`}>{result.element}</p>
                    <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">
                      {result.description}
                    </p>
                  </div>
                </div>

                {/* Recommendations */}
                <div className="card-elevated mb-8">
                  <h3 className="font-serif text-xl font-semibold mb-4">
                    Personalized Recommendations
                  </h3>
                  <ul className="space-y-3">
                    {result.recommendations.map((rec, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 * index }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle2 className="w-4 h-4 text-secondary" />
                        </div>
                        <span className="text-muted-foreground">{rec}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="hero"
                    size="lg"
                    className="rounded-xl"
                    onClick={() => window.location.href = "/recommendations"}
                  >
                    View Full Recommendations
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-xl"
                    onClick={() => {
                      setShowResults(false);
                      setCurrentQuestion(0);
                      setAnswers({});
                    }}
                  >
                    Retake Analysis
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Layout>
  );
};

export default DoshaAnalysis;
