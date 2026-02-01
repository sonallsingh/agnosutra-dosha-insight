import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Calendar,
  Download,
  TrendingUp,
  FileText,
  Activity,
  Moon,
  Heart,
  Zap,
} from "lucide-react";

// Mock data for health history
const analysisHistory = [
  {
    id: 1,
    date: "2025-01-28",
    type: "Dosha Analysis",
    result: "Vata-Pitta",
    score: 87,
    status: "Balanced",
  },
  {
    id: 2,
    date: "2025-01-21",
    type: "Dosha Analysis",
    result: "Vata-Pitta",
    score: 82,
    status: "Slightly Imbalanced",
  },
  {
    id: 3,
    date: "2025-01-14",
    type: "Dosha Analysis",
    result: "Vata-Pitta",
    score: 78,
    status: "Slightly Imbalanced",
  },
  {
    id: 4,
    date: "2025-01-07",
    type: "Dosha Analysis",
    result: "Vata-Pitta",
    score: 75,
    status: "Imbalanced",
  },
  {
    id: 5,
    date: "2024-12-28",
    type: "Dosha Analysis",
    result: "Vata-Pitta",
    score: 72,
    status: "Imbalanced",
  },
];

const weeklyMetrics = [
  { week: "Week 1", vata: 48, pitta: 32, kapha: 20 },
  { week: "Week 2", vata: 46, pitta: 34, kapha: 20 },
  { week: "Week 3", vata: 45, pitta: 34, kapha: 21 },
  { week: "Week 4", vata: 45, pitta: 35, kapha: 20 },
];

const healthTrends = [
  { metric: "Sleep Quality", current: "7.5h", previous: "6.8h", trend: "up", icon: Moon },
  { metric: "Energy Level", current: "85%", previous: "78%", trend: "up", icon: Zap },
  { metric: "Stress Level", current: "Low", previous: "Medium", trend: "up", icon: Heart },
  { metric: "Activity Score", current: "8,420", previous: "7,200", trend: "up", icon: Activity },
];

const HealthHistory = () => {
  const [selectedReport, setSelectedReport] = useState<number | null>(null);

  return (
    <Layout>
      <div className="min-h-screen bg-muted/30 py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8"
          >
            <div>
              <h1 className="font-serif text-3xl md:text-4xl font-bold">
                Health <span className="text-gradient">History</span>
              </h1>
              <p className="text-muted-foreground mt-1">
                Track your wellness journey over time
              </p>
            </div>
            <Button variant="outline" className="rounded-xl">
              <Calendar className="w-4 h-4 mr-2" />
              Select Date Range
            </Button>
          </motion.div>

          <Tabs defaultValue="history" className="space-y-8">
            <TabsList className="grid grid-cols-3 h-auto p-1">
              <TabsTrigger value="history" className="py-3">
                <FileText className="w-4 h-4 mr-2" />
                Analysis History
              </TabsTrigger>
              <TabsTrigger value="trends" className="py-3">
                <TrendingUp className="w-4 h-4 mr-2" />
                Trends
              </TabsTrigger>
              <TabsTrigger value="metrics" className="py-3">
                <Activity className="w-4 h-4 mr-2" />
                Health Metrics
              </TabsTrigger>
            </TabsList>

            {/* Analysis History Tab */}
            <TabsContent value="history">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="card-elevated overflow-hidden"
              >
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Analysis Type</TableHead>
                        <TableHead>Result</TableHead>
                        <TableHead>Score</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {analysisHistory.map((analysis) => (
                        <TableRow
                          key={analysis.id}
                          className="cursor-pointer hover:bg-muted/50"
                          onClick={() => setSelectedReport(analysis.id)}
                        >
                          <TableCell className="font-medium">
                            {new Date(analysis.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}
                          </TableCell>
                          <TableCell>{analysis.type}</TableCell>
                          <TableCell>
                            <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-sm">
                              {analysis.result}
                            </span>
                          </TableCell>
                          <TableCell>
                            <span className="font-semibold">{analysis.score}/100</span>
                          </TableCell>
                          <TableCell>
                            <span
                              className={`px-2 py-1 rounded-full text-sm ${
                                analysis.status === "Balanced"
                                  ? "bg-secondary/10 text-secondary"
                                  : analysis.status === "Slightly Imbalanced"
                                  ? "bg-primary/10 text-primary"
                                  : "bg-destructive/10 text-destructive"
                              }`}
                            >
                              {analysis.status}
                            </span>
                          </TableCell>
                          <TableCell>
                            <Button variant="ghost" size="sm" className="rounded-lg">
                              <Download className="w-4 h-4 mr-2" />
                              Report
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </motion.div>
            </TabsContent>

            {/* Trends Tab */}
            <TabsContent value="trends">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {/* Dosha Balance Over Time */}
                <div className="card-elevated">
                  <h3 className="font-serif text-xl font-semibold mb-6">
                    Dosha Balance Trends
                  </h3>
                  <div className="space-y-6">
                    {weeklyMetrics.map((week, index) => (
                      <motion.div
                        key={week.week}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">{week.week}</span>
                          <div className="flex gap-4 text-xs text-muted-foreground">
                            <span>V: {week.vata}%</span>
                            <span>P: {week.pitta}%</span>
                            <span>K: {week.kapha}%</span>
                          </div>
                        </div>
                        <div className="flex h-4 rounded-full overflow-hidden">
                          <div
                            className="bg-vata transition-all"
                            style={{ width: `${week.vata}%` }}
                          />
                          <div
                            className="bg-pitta transition-all"
                            style={{ width: `${week.pitta}%` }}
                          />
                          <div
                            className="bg-kapha transition-all"
                            style={{ width: `${week.kapha}%` }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="flex justify-center gap-6 mt-6 pt-4 border-t border-border">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-vata" />
                      <span className="text-sm text-muted-foreground">Vata</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-pitta" />
                      <span className="text-sm text-muted-foreground">Pitta</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-kapha" />
                      <span className="text-sm text-muted-foreground">Kapha</span>
                    </div>
                  </div>
                </div>

                {/* Health Score Trend */}
                <div className="card-elevated">
                  <h3 className="font-serif text-xl font-semibold mb-6">
                    Health Score Progress
                  </h3>
                  <div className="grid grid-cols-5 gap-4">
                    {analysisHistory.reverse().map((analysis, index) => (
                      <motion.div
                        key={analysis.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="text-center"
                      >
                        <div className="relative mx-auto w-16 h-16 mb-2">
                          <svg className="w-full h-full" viewBox="0 0 36 36">
                            <path
                              d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="3"
                              className="text-muted"
                            />
                            <path
                              d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="3"
                              strokeDasharray={`${analysis.score}, 100`}
                              className="text-primary"
                            />
                          </svg>
                          <span className="absolute inset-0 flex items-center justify-center text-sm font-semibold">
                            {analysis.score}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {new Date(analysis.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </TabsContent>

            {/* Health Metrics Tab */}
            <TabsContent value="metrics">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {healthTrends.map((item, index) => (
                  <motion.div
                    key={item.metric}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="card-elevated"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">{item.metric}</span>
                    </div>
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-2xl font-bold">{item.current}</p>
                        <p className="text-xs text-muted-foreground">
                          Previous: {item.previous}
                        </p>
                      </div>
                      <div className={`flex items-center gap-1 text-sm ${
                        item.trend === "up" ? "text-secondary" : "text-destructive"
                      }`}>
                        <TrendingUp className={`w-4 h-4 ${item.trend === "down" ? "rotate-180" : ""}`} />
                        <span>Improved</span>
                      </div>
                    </div>
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

export default HealthHistory;
