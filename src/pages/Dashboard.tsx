import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  Activity,
  Moon,
  Zap,
  Heart,
  Calendar,
  TrendingUp,
  ArrowRight,
  FileText,
  Settings,
  Bell,
} from "lucide-react";

// Mock data
const user = {
  name: "Priya",
  doshaType: "Vata-Pitta",
  healthScore: 87,
};

const doshaBalance = {
  vata: 45,
  pitta: 35,
  kapha: 20,
};

const healthMetrics = [
  { label: "Sleep Quality", value: "7.5h", change: "+0.5h", icon: Moon, color: "vata" },
  { label: "Energy Level", value: "85%", change: "+5%", icon: Zap, color: "pitta" },
  { label: "Stress Level", value: "Low", change: "Stable", icon: Heart, color: "kapha" },
  { label: "Activity", value: "8,420", change: "+1,200", icon: Activity, color: "primary" },
];

const quickActions = [
  { label: "View Dosha Report", icon: FileText, href: "/dosha-analysis" },
  { label: "Update Health Data", icon: Activity, href: "/health-history" },
  { label: "View Recommendations", icon: TrendingUp, href: "/recommendations" },
  { label: "Settings", icon: Settings, href: "/settings" },
];

const upcomingRoutine = [
  { time: "6:00 AM", activity: "Morning meditation", completed: true },
  { time: "6:30 AM", activity: "Yoga practice", completed: true },
  { time: "7:00 AM", activity: "Warm lemon water", completed: false },
  { time: "8:00 AM", activity: "Balanced breakfast", completed: false },
];

const Dashboard = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8"
          >
            <div>
              <h1 className="font-serif text-3xl md:text-4xl font-bold">
                Namaste, <span className="text-gradient">{user.name}</span>
              </h1>
              <p className="text-muted-foreground mt-1">
                Here's your wellness overview for today
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="icon" className="rounded-full">
                <Bell className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Calendar className="w-5 h-5" />
              </Button>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Health Score Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="card-elevated p-8 bg-gradient-to-br from-primary/5 to-accent/5"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">
                      Overall Health Score
                    </p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold text-foreground">
                        {user.healthScore}
                      </span>
                      <span className="text-2xl text-muted-foreground">/100</span>
                    </div>
                    <p className="text-sm text-secondary mt-2">
                      ↑ 5 points from last week
                    </p>
                  </div>
                  <div className="flex-1 max-w-xs">
                    <p className="text-sm font-medium mb-3">Your Dosha: {user.doshaType}</p>
                    <div className="space-y-2">
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span>Vata</span>
                          <span>{doshaBalance.vata}%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-vata rounded-full"
                            style={{ width: `${doshaBalance.vata}%` }}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span>Pitta</span>
                          <span>{doshaBalance.pitta}%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-pitta rounded-full"
                            style={{ width: `${doshaBalance.pitta}%` }}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span>Kapha</span>
                          <span>{doshaBalance.kapha}%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-kapha rounded-full"
                            style={{ width: `${doshaBalance.kapha}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Health Metrics */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="font-serif text-xl font-semibold mb-4">Health Metrics</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {healthMetrics.map((metric, index) => (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                      className="card-elevated flex items-center gap-4"
                    >
                      <div className={`w-12 h-12 rounded-xl bg-${metric.color}/10 flex items-center justify-center`}>
                        <metric.icon className={`w-6 h-6 text-${metric.color}`} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground">{metric.label}</p>
                        <p className="text-xl font-semibold">{metric.value}</p>
                      </div>
                      <span className="text-sm text-secondary font-medium">
                        {metric.change}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Quick Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 className="font-serif text-xl font-semibold mb-4">Quick Actions</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {quickActions.map((action, index) => (
                    <Link key={action.label} to={action.href}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="card-elevated text-center cursor-pointer group"
                      >
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                          <action.icon className="w-6 h-6 text-primary" />
                        </div>
                        <p className="text-sm font-medium">{action.label}</p>
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Daily Routine */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="card-elevated"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-serif text-lg font-semibold">Today's Routine</h3>
                  <Link to="/recommendations" className="text-primary text-sm hover:underline">
                    View all
                  </Link>
                </div>
                <div className="space-y-3">
                  {upcomingRoutine.map((item, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-3 p-3 rounded-xl ${
                        item.completed ? "bg-secondary/10" : "bg-muted/50"
                      }`}
                    >
                      <div
                        className={`w-3 h-3 rounded-full ${
                          item.completed ? "bg-secondary" : "bg-muted-foreground/30"
                        }`}
                      />
                      <div className="flex-1">
                        <p
                          className={`text-sm font-medium ${
                            item.completed ? "line-through text-muted-foreground" : ""
                          }`}
                        >
                          {item.activity}
                        </p>
                        <p className="text-xs text-muted-foreground">{item.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Recommendations Preview */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="card-elevated bg-gradient-to-br from-secondary/10 to-secondary/5"
              >
                <h3 className="font-serif text-lg font-semibold mb-3">
                  Today's Tip
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  As a Vata-Pitta type, focus on cooling foods today. Try cucumber raita 
                  and avoid spicy foods to maintain your dosha balance.
                </p>
                <Link to="/recommendations">
                  <Button variant="sage" className="w-full rounded-xl">
                    View All Recommendations
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </motion.div>

              {/* CTA Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="rounded-2xl bg-gradient-to-br from-primary to-accent p-6 text-primary-foreground"
              >
                <h3 className="font-serif text-lg font-semibold mb-2">
                  Update Your Analysis
                </h3>
                <p className="text-sm text-primary-foreground/80 mb-4">
                  It's been 7 days since your last Dosha analysis. Update it for more accurate recommendations.
                </p>
                <Link to="/dosha-analysis">
                  <Button className="w-full bg-primary-foreground text-foreground hover:bg-primary-foreground/90 rounded-xl">
                    Take New Analysis
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
