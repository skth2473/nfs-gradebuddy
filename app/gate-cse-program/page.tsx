"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { Home, Calendar, BookOpen, ExternalLink, CheckCircle, Trophy, Target, FileText, Users } from "lucide-react"
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

export default function GateCSEProgram() {
  const [completedDays, setCompletedDays] = useState<number[]>([])

  const gateCSEPlan: DayPlan[] = [
    {
      day: 1,
      title: "Mathematical Foundations",
      topics: ["Discrete Mathematics", "Set Theory", "Logic", "Probability"],
      youtubePlaylist: "https://youtube.com/playlist?list=PLgUwDviBIf0rGEWe64KWas0Nfk2TqFBiP",
      practiceSheet: "https://docs.google.com/spreadsheets/d/1example1",
      notes: "https://drive.google.com/file/d/1example1",
      completed: false,
    },
    {
      day: 2,
      title: "Programming & Data Structures",
      topics: ["C Programming", "Arrays", "Linked Lists", "Stacks & Queues"],
      youtubePlaylist: "https://youtube.com/playlist?list=PLgUwDviBIf0rGEWe64KWas0Nfk2TqFBiP",
      practiceSheet: "https://docs.google.com/spreadsheets/d/1example2",
      notes: "https://drive.google.com/file/d/1example2",
      completed: false,
    },
    {
      day: 3,
      title: "Algorithms",
      topics: ["Sorting", "Searching", "Graph Algorithms", "Dynamic Programming"],
      youtubePlaylist: "https://youtube.com/playlist?list=PLgUwDviBIf0rGEWe64KWas0Nfk2TqFBiP",
      practiceSheet: "https://docs.google.com/spreadsheets/d/1example3",
      notes: "https://drive.google.com/file/d/1example3",
      completed: false,
    },
    {
      day: 4,
      title: "Theory of Computation",
      topics: ["Finite Automata", "Regular Languages", "Context-Free Grammar", "Turing Machines"],
      youtubePlaylist: "https://youtube.com/playlist?list=PLgUwDviBIf0rGEWe64KWas0Nfk2TqFBiP",
      practiceSheet: "https://docs.google.com/spreadsheets/d/1example4",
      notes: "https://drive.google.com/file/d/1example4",
      completed: false,
    },
    {
      day: 5,
      title: "Computer Organization & Architecture",
      topics: ["CPU Design", "Memory Hierarchy", "I/O Systems", "Pipeline"],
      youtubePlaylist: "https://youtube.com/playlist?list=PLgUwDviBIf0rGEWe64KWas0Nfk2TqFBiP",
      practiceSheet: "https://docs.google.com/spreadsheets/d/1example5",
      notes: "https://drive.google.com/file/d/1example5",
      completed: false,
    },
    // Add more days as needed...
  ]

  const toggleDayCompletion = (day: number) => {
    setCompletedDays((prev) => (prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]))
  }

  const progressPercentage = (completedDays.length / gateCSEPlan.length) * 100

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
                  <Trophy className="h-5 w-5 text-white" />
                </div>
                <h1 className="text-2xl font-bold text-white">GATE CSE Preparation</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Program Overview */}
          <Card className="mb-8 bg-slate-800/80 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-white flex items-center">
                    <Target className="h-6 w-6 mr-2 text-green-400" />
                    GATE CSE Success Program
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    Comprehensive GATE Computer Science preparation with expert guidance
                  </CardDescription>
                </div>
                <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                  {completedDays.length}/{gateCSEPlan.length} Days
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
                    <div className="text-2xl font-bold text-blue-400">{gateCSEPlan.length - completedDays.length}</div>
                    <div className="text-sm text-gray-300">Days Remaining</div>
                  </div>
                  <div className="bg-slate-700/50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-purple-400">{Math.round(progressPercentage)}%</div>
                    <div className="text-sm text-gray-300">Progress</div>
                  </div>
                  <div className="bg-slate-700/50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-orange-400">AIR 1-100</div>
                    <div className="text-sm text-gray-300">Achievers</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* GATE Subjects */}
          <Card className="mb-8 bg-slate-800/80 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <BookOpen className="h-6 w-6 mr-2 text-blue-400" />
                GATE CSE Syllabus Coverage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-white">Core Subjects</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      Data Structures & Algorithms
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      Theory of Computation
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      Computer Organization
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      Operating Systems
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-white">Mathematics</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      Discrete Mathematics
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      Linear Algebra
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      Probability & Statistics
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      Calculus
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-white">Systems</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      Database Management
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      Computer Networks
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      Compiler Design
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      Software Engineering
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Day-wise Plan */}
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Day-wise Study Plan</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Structured preparation plan covering complete GATE CSE syllabus with practice questions
              </p>
            </div>

            {gateCSEPlan.map((dayPlan) => (
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
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        checked={completedDays.includes(dayPlan.day)}
                        onCheckedChange={() => toggleDayCompletion(dayPlan.day)}
                        className="border-green-500 data-[state=checked]:bg-green-500"
                      />
                      <span className="text-sm text-gray-400">Mark Complete</span>
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
                        Video Lectures
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="border-blue-500/50 text-blue-300 hover:bg-blue-500/10">
                      <Link href={dayPlan.practiceSheet} target="_blank">
                        <FileText className="h-4 w-4 mr-2" />
                        Previous Year Questions
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
                    <h4 className="font-semibold text-white mb-2">Topics Covered:</h4>
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
          </div>

          {/* Join Community */}
          <Card className="mt-8 bg-gradient-to-r from-green-500/10 to-blue-500/10 border-green-500/30">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">🏆 Join GATE CSE Success Community!</h3>
              <p className="text-gray-300 mb-6">
                "Success is where preparation and opportunity meet. Start your GATE journey today!"
              </p>
              <div className="flex justify-center space-x-4 mb-6">
                <Badge className="bg-green-500/20 text-green-300 border-green-500/30">AIR 1-100 Achievers</Badge>
                <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">Expert Faculty</Badge>
                <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">Mock Tests</Badge>
              </div>
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
              >
                <Users className="mr-2 h-5 w-5" />
                Join GATE CSE Group
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
