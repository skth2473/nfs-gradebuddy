"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Home,
  Calendar,
  BookOpen,
  ExternalLink,
  CheckCircle,
  Code,
  Target,
  FileText,
  Server,
  Database,
  Globe,
} from "lucide-react"
import Link from "next/link"

interface DayPlan {
  day: number
  title: string
  topics: string[]
  youtubePlaylist: string
  practiceSheet: string
  notes: string
  phase: "frontend" | "backend" | "database" | "deployment"
  completed: boolean
}

export default function OneTwentyDaysFullStack() {
  const [completedDays, setCompletedDays] = useState<number[]>([])

  const fullStackPlan: DayPlan[] = [
    // Frontend Phase (Days 1-40)
    {
      day: 1,
      title: "HTML & CSS Fundamentals",
      topics: ["HTML Structure", "CSS Styling", "Responsive Design"],
      youtubePlaylist: "https://youtube.com/playlist?list=PLgUwDviBIf0rGEWe64KWas0Nfk2TqFBiP",
      practiceSheet: "https://docs.google.com/spreadsheets/d/1example1",
      notes: "https://drive.google.com/file/d/1example1",
      phase: 'frontend',
      completed: false
    },
    {
      day: 2,
      title: "JavaScript Basics",
      topics: ["Variables", "Functions", "DOM Manipulation"],
      youtubePlaylist: "https://youtube.com/playlist?list=PLgUwDviBIf0rGEWe64KWas0Nfk2TqFBiP",
      practiceSheet: "https://docs.google.com/spreadsheets/d/1example2",
      notes: "https://drive.google.com/file/d/1example2",
      phase: 'frontend',
      completed: false
    },
    // Backend Phase (Days 41-80)
    {
      day: 41,
      title: "Node.js Introduction",
      topics: ["Node.js Setup", "NPM", "Modules"],
      youtubePlaylist: "https://youtube.com/playlist?list=PLgUwDviBIf0rGEWe64KWas0Nfk2TqFBiP",
      practiceSheet: "https://docs.google.com/spreadsheets/d/1example41",
      notes: "https://drive.google.com/file/d/1example41",
      phase: 'backend',
      completed: false
    },
    // Database Phase (Days 81-100)
    {
      day: 81,
      title: "Database Fundamentals",
      topics: ["SQL Basics", "Database Design", "Relationships"],
      youtubePlaylist: "https://youtube.com/playlist?list=PLgUwDviBIf0rGEWe64KWas0Nfk2TqFBiP",
      practiceSheet: "https://docs.google.com/spreadsheets/d/1example81",
      notes: "https://drive.google.com/file/d/1example81",
      phase: 'database',
      completed: false
    },
    // Deployment Phase (Days 101-120)
    {
      day: 101,
      title: "Deployment Basics",
      topics: ["Git", "GitHub", "Hosting Platforms"],\
      youtubePlaylist: "https://youtube.com/playlist?list=PLgUwDviBIf  \"Hosting Platforms\"],
      youtubePlaylist: "https://youtube.com/playlist?list=PLgUwDviBIf0rGEWe64KWas0Nfk2TqFBiP",
      practiceSheet: "https://docs.google.com/spreadsheets/d/1example101",
      notes: "https://drive.google.com/file/d/1example101",
      phase: 'deployment',
      completed: false
    },
    // Add more days as needed...
  ]

  const toggleDayCompletion = (day: number) => {
    setCompletedDays((prev) => (prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]))
  }

  const progressPercentage = (completedDays.length / fullStackPlan.length) * 100

  const getPhaseProgress = (phase: string) => {
    const phaseDays = fullStackPlan.filter((day) => day.phase === phase)
    const completedPhaseDays = phaseDays.filter((day) => completedDays.includes(day.day))
    return (completedPhaseDays.length / phaseDays.length) * 100
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      {/* Header */}
      <header className="bg-slate-900/95 backdrop-blur-sm shadow-xl border-b border-green-500/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button asChild variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                <Link href="/">
                  <Home className="h-4 w-4 mr-2" />
                  Home
                </Link>
              </Button>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Globe className="h-5 w-5 text-white" />
                </div>
                <h1 className="text-2xl font-bold text-white">120 Days Full Stack Bootcamp</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Progress Overview */}
          <Card className="mb-8 bg-slate-800/80 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-white flex items-center">
                    <Target className="h-6 w-6 mr-2 text-green-400" />
                    Full Stack Development Journey
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    Complete web development mastery in 120 days
                  </CardDescription>
                </div>
                <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                  {completedDays.length}/{fullStackPlan.length} Days
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Progress value={progressPercentage} className="h-3" />
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                  <div className="bg-slate-700/50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-400">{completedDays.length}</div>
                    <div className="text-sm text-gray-300">Days Completed</div>
                  </div>
                  <div className="bg-slate-700/50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-400">
                      {fullStackPlan.length - completedDays.length}
                    </div>
                    <div className="text-sm text-gray-300">Days Remaining</div>
                  </div>
                  <div className="bg-slate-700/50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-purple-400">{Math.round(progressPercentage)}%</div>
                    <div className="text-sm text-gray-300">Overall Progress</div>
                  </div>
                  <div className="bg-slate-700/50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-orange-400">10</div>
                    <div className="text-sm text-gray-300">Major Projects</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Phase Progress */}
          <Card className="mb-8 bg-slate-800/80 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Learning Phases</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-orange-500/10 rounded-lg border border-orange-500/20">
                  <Code className="h-8 w-8 text-orange-400 mx-auto mb-2" />
                  <div className="text-lg font-bold text-orange-400 mb-1">Frontend</div>
                  <div className="text-sm text-gray-300 mb-2">Days 1-40</div>
                  <Progress value={getPhaseProgress("frontend")} className="h-2" />
                  <div className="text-xs text-gray-400 mt-1">{Math.round(getPhaseProgress("frontend"))}%</div>
                </div>
                <div className="text-center p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                  <Server className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                  <div className="text-lg font-bold text-blue-400 mb-1">Backend</div>
                  <div className="text-sm text-gray-300 mb-2">Days 41-80</div>
                  <Progress value={getPhaseProgress("backend")} className="h-2" />
                  <div className="text-xs text-gray-400 mt-1">{Math.round(getPhaseProgress("backend"))}%</div>
                </div>
                <div className="text-center p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                  <Database className="h-8 w-8 text-green-400 mx-auto mb-2" />
                  <div className="text-lg font-bold text-green-400 mb-1">Database</div>
                  <div className="text-sm text-gray-300 mb-2">Days 81-100</div>
                  <Progress value={getPhaseProgress("database")} className="h-2" />
                  <div className="text-xs text-gray-400 mt-1">{Math.round(getPhaseProgress("database"))}%</div>
                </div>
                <div className="text-center p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
                  <Globe className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                  <div className="text-lg font-bold text-purple-400 mb-1">Deployment</div>
                  <div className="text-sm text-gray-300 mb-2">Days 101-120</div>
                  <Progress value={getPhaseProgress("deployment")} className="h-2" />
                  <div className="text-xs text-gray-400 mt-1">{Math.round(getPhaseProgress("deployment"))}%</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tabbed Content */}
          <Tabs defaultValue="all" className="space-y-6">
            <TabsList className="grid w-full grid-cols-5 bg-slate-800 border-slate-700">
              <TabsTrigger value="all" className="data-[state=active]:bg-slate-700 text-gray-300">
                All Days
              </TabsTrigger>
              <TabsTrigger value="frontend" className="data-[state=active]:bg-slate-700 text-gray-300">
                Frontend
              </TabsTrigger>
              <TabsTrigger value="backend" className="data-[state=active]:bg-slate-700 text-gray-300">
                Backend
              </TabsTrigger>
              <TabsTrigger value="database" className="data-[state=active]:bg-slate-700 text-gray-300">
                Database
              </TabsTrigger>
              <TabsTrigger value="deployment" className="data-[state=active]:bg-slate-700 text-gray-300">
                Deployment
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-6">
              {fullStackPlan.map((dayPlan) => (
                <Card
                  key={dayPlan.day}
                  className={`bg-slate-800/80 border-slate-700 backdrop-blur-sm transition-all duration-300 ${
                    completedDays.includes(dayPlan.day) ? "ring-2 ring-green-500/50" : ""
                  }`}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center ${
                            completedDays.includes(dayPlan.day)
                              ? "bg-green-500/20 text-green-400"
                              : dayPlan.phase === "frontend"
                                ? "bg-orange-500/20 text-orange-400"
                                : dayPlan.phase === "backend"
                                  ? "bg-blue-500/20 text-blue-400"
                                  : dayPlan.phase === "database"
                                    ? "bg-green-500/20 text-green-400"
                                    : "bg-purple-500/20 text-purple-400"
                          }`}
                        >
                          {completedDays.includes(dayPlan.day) ? (
                            <CheckCircle className="h-6 w-6" />
                          ) : (
                            <Calendar className="h-6 w-6" />
                          )}
                        </div>
                        <div>
                          <div className="flex items-center space-x-2 mb-1">
                            <CardTitle className="text-white">
                              Day {dayPlan.day}: {dayPlan.title}
                            </CardTitle>
                            <Badge
                              variant="outline"
                              className={`text-xs ${
                                dayPlan.phase === "frontend"
                                  ? "border-orange-500/30 text-orange-300"
                                  : dayPlan.phase === "backend"
                                    ? "border-blue-500/30 text-blue-300"
                                    : dayPlan.phase === "database"
                                      ? "border-green-500/30 text-green-300"
                                      : "border-purple-500/30 text-purple-300"
                              }`}
                            >
                              {dayPlan.phase}
                            </Badge>
                          </div>
                          <CardDescription className="text-gray-300">{dayPlan.topics.join(" • ")}</CardDescription>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          checked={completedDays.includes(dayPlan.day)}
                          onCheckedChange={() => toggleDayCompletion(dayPlan.day)}
                          className="border-green-500 data-[state=checked]:bg-green-500"
                        />
                        <span className="text-sm text-gray-400">Complete</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Button
                        asChild
                        variant="outline"
                        className="border-green-500/50 text-green-300 hover:bg-green-500/10"
                      >
                        <Link href={dayPlan.youtubePlaylist} target="_blank">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Video Lessons
                        </Link>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="border-blue-500/50 text-blue-300 hover:bg-blue-500/10"
                      >
                        <Link href={dayPlan.practiceSheet} target="_blank">
                          <FileText className="h-4 w-4 mr-2" />
                          Practice Tasks
                        </Link>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10"
                      >
                        <Link href={dayPlan.notes} target="_blank">
                          <BookOpen className="h-4 w-4 mr-2" />
                          Study Materials
                        </Link>
                      </Button>
                    </div>

                    <div className="mt-4 p-4 bg-slate-700/30 rounded-lg">
                      <h4 className="font-semibold text-white mb-2">Learning Goals:</h4>
                      <div className="flex flex-wrap gap-2">
                        {dayPlan.topics.map((topic, index) => (
                          <Badge key={index} variant="outline" className="border-green-500/30 text-green-300">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            {/* Phase-specific tabs would filter the days by phase */}
            {["frontend", "backend", "database", "deployment"].map((phase) => (
              <TabsContent key={phase} value={phase} className="space-y-6">
                {fullStackPlan
                  .filter((day) => day.phase === phase)
                  .map((dayPlan) => (
                    <Card
                      key={dayPlan.day}
                      className={`bg-slate-800/80 border-slate-700 backdrop-blur-sm transition-all duration-300 ${
                        completedDays.includes(dayPlan.day) ? "ring-2 ring-green-500/50" : ""
                      }`}
                    >
                      {/* Same card content as above */}
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div
                              className={`w-12 h-12 rounded-full flex items-center justify-center ${
                                completedDays.includes(dayPlan.day)
                                  ? "bg-green-500/20 text-green-400"
                                  : "bg-green-500/20 text-green-400"
                              }`}
                            >
                              {completedDays.includes(dayPlan.day) ? (
                                <CheckCircle className="h-6 w-6" />
                              ) : (
                                <Calendar className="h-6 w-6" />
                              )}
                            </div>
                            <div>
                              <CardTitle className="text-white">
                                Day {dayPlan.day}: {dayPlan.title}
                              </CardTitle>
                              <CardDescription className="text-gray-300">{dayPlan.topics.join(" • ")}</CardDescription>
                            </div>
                          </div>
                          <Checkbox
                            checked={completedDays.includes(dayPlan.day)}
                            onCheckedChange={() => toggleDayCompletion(dayPlan.day)}
                            className="border-green-500 data-[state=checked]:bg-green-500"
                          />
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <Button
                            asChild
                            variant="outline"
                            className="border-green-500/50 text-green-300 hover:bg-green-500/10"
                          >
                            <Link href={dayPlan.youtubePlaylist} target="_blank">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Video Lessons
                            </Link>
                          </Button>
                          <Button
                            asChild
                            variant="outline"
                            className="border-blue-500/50 text-blue-300 hover:bg-blue-500/10"
                          >
                            <Link href={dayPlan.practiceSheet} target="_blank">
                              <FileText className="h-4 w-4 mr-2" />
                              Practice Tasks
                            </Link>
                          </Button>
                          <Button
                            asChild
                            variant="outline"
                            className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10"
                          >
                            <Link href={dayPlan.notes} target="_blank">
                              <BookOpen className="h-4 w-4 mr-2" />
                              Study Materials
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </TabsContent>
            ))}
          </Tabs>

          {/* Motivation Section */}
          <Card className="mt-8 bg-gradient-to-r from-green-500/10 to-blue-500/10 border-green-500/30">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">🚀 Full Stack Developer Journey!</h3>
              <p className="text-gray-300 mb-6">
                "The journey of a thousand miles begins with one step. Every expert was once a beginner."
              </p>
              <div className="flex justify-center space-x-4">
                <Badge className="bg-green-500/20 text-green-300 border-green-500/30">Build Real Projects</Badge>
                <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">Industry Ready Skills</Badge>
                <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">Career Opportunities</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
