"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { Home, Calendar, BookOpen, ExternalLink, CheckCircle, Code, Target, FileText, Palette } from "lucide-react"
import Link from "next/link"

interface DayPlan {
  day: number
  title: string
  topics: string[]
  youtubePlaylist: string
  practiceSheet: string
  notes: string
  completed: boolean
}

export default function SixtyDaysFrontend() {
  const [completedDays, setCompletedDays] = useState<number[]>([])

  const frontendPlan: DayPlan[] = [
    {
      day: 1,
      title: "HTML Fundamentals",
      topics: ["HTML Structure", "Tags & Elements", "Semantic HTML"],
      youtubePlaylist: "https://youtube.com/playlist?list=PLgUwDviBIf0rGEWe64KWas0Nfk2TqFBiP",
      practiceSheet: "https://docs.google.com/spreadsheets/d/1example1",
      notes: "https://drive.google.com/file/d/1example1",
      completed: false,
    },
    {
      day: 2,
      title: "HTML Forms & Media",
      topics: ["Forms", "Input Types", "Audio & Video", "Images"],
      youtubePlaylist: "https://youtube.com/playlist?list=PLgUwDviBIf0rGEWe64KWas0Nfk2TqFBiP",
      practiceSheet: "https://docs.google.com/spreadsheets/d/1example2",
      notes: "https://drive.google.com/file/d/1example2",
      completed: false,
    },
    {
      day: 3,
      title: "CSS Basics",
      topics: ["CSS Syntax", "Selectors", "Properties", "Box Model"],
      youtubePlaylist: "https://youtube.com/playlist?list=PLgUwDviBIf0rGEWe64KWas0Nfk2TqFBiP",
      practiceSheet: "https://docs.google.com/spreadsheets/d/1example3",
      notes: "https://drive.google.com/file/d/1example3",
      completed: false,
    },
    // Add more days as needed...
  ]

  const toggleDayCompletion = (day: number) => {
    setCompletedDays((prev) => (prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]))
  }

  const progressPercentage = (completedDays.length / frontendPlan.length) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="bg-slate-900/95 backdrop-blur-sm shadow-xl border-b border-blue-500/20 sticky top-0 z-50">
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
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Code className="h-5 w-5 text-white" />
                </div>
                <h1 className="text-2xl font-bold text-white">60 Days Frontend Mastery</h1>
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
                    <Target className="h-6 w-6 mr-2 text-blue-400" />
                    Your Frontend Journey
                  </CardTitle>
                  <CardDescription className="text-gray-300">Master frontend development in 60 days</CardDescription>
                </div>
                <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                  {completedDays.length}/{frontendPlan.length} Days
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Progress value={progressPercentage} className="h-3" />
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                  <div className="bg-slate-700/50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-400">{completedDays.length}</div>
                    <div className="text-sm text-gray-300">Days Completed</div>
                  </div>
                  <div className="bg-slate-700/50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-purple-400">
                      {frontendPlan.length - completedDays.length}
                    </div>
                    <div className="text-sm text-gray-300">Days Remaining</div>
                  </div>
                  <div className="bg-slate-700/50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-400">{Math.round(progressPercentage)}%</div>
                    <div className="text-sm text-gray-300">Progress</div>
                  </div>
                  <div className="bg-slate-700/50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-orange-400">5</div>
                    <div className="text-sm text-gray-300">Projects</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Learning Path */}
          <Card className="mb-8 bg-slate-800/80 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Palette className="h-6 w-6 mr-2 text-purple-400" />
                Learning Path Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-orange-500/10 rounded-lg border border-orange-500/20">
                  <div className="text-2xl font-bold text-orange-400 mb-2">Week 1-2</div>
                  <div className="text-sm text-gray-300">HTML & CSS Fundamentals</div>
                </div>
                <div className="text-center p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                  <div className="text-2xl font-bold text-blue-400 mb-2">Week 3-4</div>
                  <div className="text-sm text-gray-300">JavaScript Basics</div>
                </div>
                <div className="text-center p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                  <div className="text-2xl font-bold text-green-400 mb-2">Week 5-6</div>
                  <div className="text-sm text-gray-300">DOM & Events</div>
                </div>
                <div className="text-center p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
                  <div className="text-2xl font-bold text-purple-400 mb-2">Week 7-8</div>
                  <div className="text-sm text-gray-300">React Fundamentals</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Day-wise Plan */}
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Day-wise Learning Plan</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Complete frontend development roadmap from HTML to React
              </p>
            </div>

            {frontendPlan.map((dayPlan) => (
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
                            : "bg-blue-500/20 text-blue-400"
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
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        checked={completedDays.includes(dayPlan.day)}
                        onCheckedChange={() => toggleDayCompletion(dayPlan.day)}
                        className="border-blue-500 data-[state=checked]:bg-blue-500"
                      />
                      <span className="text-sm text-gray-400">Mark Complete</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Button asChild variant="outline" className="border-blue-500/50 text-blue-300 hover:bg-blue-500/10">
                      <Link href={dayPlan.youtubePlaylist} target="_blank">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Video Tutorials
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10"
                    >
                      <Link href={dayPlan.practiceSheet} target="_blank">
                        <FileText className="h-4 w-4 mr-2" />
                        Practice Exercises
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="border-green-500/50 text-green-300 hover:bg-green-500/10"
                    >
                      <Link href={dayPlan.notes} target="_blank">
                        <BookOpen className="h-4 w-4 mr-2" />
                        Study Notes
                      </Link>
                    </Button>
                  </div>

                  <div className="mt-4 p-4 bg-slate-700/30 rounded-lg">
                    <h4 className="font-semibold text-white mb-2">Learning Objectives:</h4>
                    <div className="flex flex-wrap gap-2">
                      {dayPlan.topics.map((topic, index) => (
                        <Badge key={index} variant="outline" className="border-blue-500/30 text-blue-300">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
