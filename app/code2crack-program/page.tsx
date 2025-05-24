"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { Home, Calendar, BookOpen, ExternalLink, CheckCircle, Code, Target, FileText, Users } from "lucide-react"
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

export default function Code2CrackProgram() {
  const [completedDays, setCompletedDays] = useState<number[]>([])

  const code2crackPlan: DayPlan[] = [
    {
      day: 1,
      title: "Programming Fundamentals & Problem Solving",
      topics: ["Programming Basics", "Problem Analysis", "Pseudocode", "Flowcharts"],
      youtubePlaylist: "https://youtube.com/playlist?list=PLgUwDviBIf0rGEWe64KWas0Nfk2TqFBiP",
      practiceSheet: "https://docs.google.com/spreadsheets/d/1example1",
      notes: "https://drive.google.com/file/d/1example1",
      completed: false,
    },
    {
      day: 2,
      title: "Arrays & String Manipulation",
      topics: ["Array Operations", "String Processing", "Two Pointers", "Sliding Window"],
      youtubePlaylist: "https://youtube.com/playlist?list=PLgUwDviBIf0rGEWe64KWas0Nfk2TqFBiP",
      practiceSheet: "https://docs.google.com/spreadsheets/d/1example2",
      notes: "https://drive.google.com/file/d/1example2",
      completed: false,
    },
    {
      day: 3,
      title: "Sorting & Searching Algorithms",
      topics: ["Bubble Sort", "Quick Sort", "Merge Sort", "Binary Search"],
      youtubePlaylist: "https://youtube.com/playlist?list=PLgUwDviBIf0rGEWe64KWas0Nfk2TqFBiP",
      practiceSheet: "https://docs.google.com/spreadsheets/d/1example3",
      notes: "https://drive.google.com/file/d/1example3",
      completed: false,
    },
    {
      day: 4,
      title: "Recursion & Backtracking",
      topics: ["Recursive Thinking", "Base Cases", "Backtracking Problems", "Tree Recursion"],
      youtubePlaylist: "https://youtube.com/playlist?list=PLgUwDviBIf0rGEWe64KWas0Nfk2TqFBiP",
      practiceSheet: "https://docs.google.com/spreadsheets/d/1example4",
      notes: "https://drive.google.com/file/d/1example4",
      completed: false,
    },
    {
      day: 5,
      title: "Linked Lists & Pointers",
      topics: ["Singly Linked List", "Doubly Linked List", "Circular Lists", "Pointer Manipulation"],
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

  const progressPercentage = (completedDays.length / code2crackPlan.length) * 100

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
                <h1 className="text-2xl font-bold text-white">Code2Crack Program</h1>
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
                    <Target className="h-6 w-6 mr-2 text-blue-400" />
                    Code2Crack - Crack Your Dream Job
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    Master coding interviews with our comprehensive programming bootcamp
                  </CardDescription>
                </div>
                <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                  {completedDays.length}/{code2crackPlan.length} Days
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
                      {code2crackPlan.length - completedDays.length}
                    </div>
                    <div className="text-sm text-gray-300">Days Remaining</div>
                  </div>
                  <div className="bg-slate-700/50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-400">{Math.round(progressPercentage)}%</div>
                    <div className="text-sm text-gray-300">Progress</div>
                  </div>
                  <div className="bg-slate-700/50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-orange-400">500+</div>
                    <div className="text-sm text-gray-300">Students Placed</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Program Features */}
          <Card className="mb-8 bg-slate-800/80 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Users className="h-6 w-6 mr-2 text-purple-400" />
                What You'll Learn
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-white">Core Programming Skills</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      Data Structures & Algorithms
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      Problem Solving Techniques
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      Time & Space Complexity
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      Competitive Programming
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-white">Interview Preparation</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      Mock Interview Sessions
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      System Design Basics
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      Behavioral Questions
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      Industry Best Practices
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Day-wise Plan */}
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Day-wise Learning Plan</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Structured learning path to master coding interviews and crack your dream tech job
              </p>
            </div>

            {code2crackPlan.map((dayPlan) => (
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
                        Video Lectures
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10"
                    >
                      <Link href={dayPlan.practiceSheet} target="_blank">
                        <FileText className="h-4 w-4 mr-2" />
                        Practice Problems
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
                    <h4 className="font-semibold text-white mb-2">Topics Covered:</h4>
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

          {/* Join Community */}
          <Card className="mt-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/30">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">🚀 Join the Code2Crack Community!</h3>
              <p className="text-gray-300 mb-6">
                "Success is not final, failure is not fatal: it is the courage to continue that counts."
              </p>
              <div className="flex justify-center space-x-4 mb-6">
                <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">500+ Placements</Badge>
                <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">Expert Mentorship</Badge>
                <Badge className="bg-green-500/20 text-green-300 border-green-500/30">Live Sessions</Badge>
              </div>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                <Users className="mr-2 h-5 w-5" />
                Join Code2Crack Group
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
