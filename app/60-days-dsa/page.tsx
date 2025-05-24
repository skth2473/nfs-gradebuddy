"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { Home, Calendar, BookOpen, ExternalLink, CheckCircle, Target, Zap, FileText } from "lucide-react"
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

export default function SixtyDaysDSA() {
  const [completedDays, setCompletedDays] = useState<number[]>([])

  const dsaPlan: DayPlan[] = [
    {
      day: 1,
      title: "Introduction to DSA & Time Complexity",
      topics: ["What is DSA?", "Time & Space Complexity", "Big O Notation"],
      youtubePlaylist: "https://youtube.com/playlist?list=PLgUwDviBIf0rGEWe64KWas0Nfk2TqFBiP",
      practiceSheet: "https://docs.google.com/spreadsheets/d/1example1",
      notes: "https://drive.google.com/file/d/1example1",
      completed: false,
    },
    {
      day: 2,
      title: "Arrays - Basics",
      topics: ["Array Declaration", "Traversal", "Insertion & Deletion"],
      youtubePlaylist: "https://youtube.com/playlist?list=PLgUwDviBIf0rGEWe64KWas0Nfk2TqFBiP",
      practiceSheet: "https://docs.google.com/spreadsheets/d/1example2",
      notes: "https://drive.google.com/file/d/1example2",
      completed: false,
    },
    {
      day: 3,
      title: "Arrays - Problems",
      topics: ["Two Sum", "Maximum Subarray", "Rotate Array"],
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

  const progressPercentage = (completedDays.length / dsaPlan.length) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      {/* Header */}
      <header className="bg-slate-900/95 backdrop-blur-sm shadow-xl border-b border-red-500/20 sticky top-0 z-50">
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
                <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <h1 className="text-2xl font-bold text-white">60 Days DSA Challenge</h1>
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
                    <Target className="h-6 w-6 mr-2 text-red-400" />
                    Your Progress
                  </CardTitle>
                  <CardDescription className="text-gray-300">Track your 60-day DSA journey</CardDescription>
                </div>
                <Badge className="bg-red-500/20 text-red-300 border-red-500/30">
                  {completedDays.length}/{dsaPlan.length} Days
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Progress value={progressPercentage} className="h-3" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="bg-slate-700/50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-red-400">{completedDays.length}</div>
                    <div className="text-sm text-gray-300">Days Completed</div>
                  </div>
                  <div className="bg-slate-700/50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-orange-400">{dsaPlan.length - completedDays.length}</div>
                    <div className="text-sm text-gray-300">Days Remaining</div>
                  </div>
                  <div className="bg-slate-700/50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-400">{Math.round(progressPercentage)}%</div>
                    <div className="text-sm text-gray-300">Progress</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Day-wise Plan */}
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Day-wise Learning Plan</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Follow this structured 60-day plan to master Data Structures and Algorithms
              </p>
            </div>

            {dsaPlan.map((dayPlan) => (
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
                            : "bg-red-500/20 text-red-400"
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
                        className="border-red-500 data-[state=checked]:bg-red-500"
                      />
                      <span className="text-sm text-gray-400">Mark Complete</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Button asChild variant="outline" className="border-red-500/50 text-red-300 hover:bg-red-500/10">
                      <Link href={dayPlan.youtubePlaylist} target="_blank">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        YouTube Playlist
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="border-orange-500/50 text-orange-300 hover:bg-orange-500/10"
                    >
                      <Link href={dayPlan.practiceSheet} target="_blank">
                        <FileText className="h-4 w-4 mr-2" />
                        Practice Sheet
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="border-blue-500/50 text-blue-300 hover:bg-blue-500/10">
                      <Link href={dayPlan.notes} target="_blank">
                        <BookOpen className="h-4 w-4 mr-2" />
                        Notes
                      </Link>
                    </Button>
                  </div>

                  <div className="mt-4 p-4 bg-slate-700/30 rounded-lg">
                    <h4 className="font-semibold text-white mb-2">Topics Covered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {dayPlan.topics.map((topic, index) => (
                        <Badge key={index} variant="outline" className="border-red-500/30 text-red-300">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Motivation Section */}
          <Card className="mt-8 bg-gradient-to-r from-red-500/10 to-orange-500/10 border-red-500/30">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">🚀 Stay Motivated!</h3>
              <p className="text-gray-300 mb-6">
                "The expert in anything was once a beginner. Every pro was once an amateur. Every icon was once an
                unknown."
              </p>
              <div className="flex justify-center space-x-4">
                <Badge className="bg-red-500/20 text-red-300 border-red-500/30">Consistency is Key</Badge>
                <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30">Practice Daily</Badge>
                <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">Never Give Up</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
