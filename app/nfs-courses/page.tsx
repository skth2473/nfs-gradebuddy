"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Code, Trophy, Calendar, ArrowRight, Target, Zap, Home, Users, GraduationCap } from "lucide-react"
import Link from "next/link"

export default function NFSCourses() {
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
                <img
                  src="/placeholder.svg?height=32&width=32"
                  alt="NFSxRFP Logo"
                  className="w-8 h-8 rounded-lg object-cover"
                />
                <h1 className="text-2xl font-bold text-white">📚 NFS Courses</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-500/20 text-blue-300 border-blue-500/30">📚 Notes for Study</Badge>
            <h2 className="text-4xl font-bold text-white mb-4">NFS Learning Programs</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Curated resources and study materials for different learning paths
            </p>
          </div>

          {/* Main Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* GATE Preparation */}
            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-slate-800/80 border-slate-700 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-500/30 transition-colors">
                  <Trophy className="h-8 w-8 text-green-400" />
                </div>
                <CardTitle className="text-xl font-bold text-white">GATE Preparation</CardTitle>
                <CardDescription className="text-gray-300">
                  Comprehensive GATE CSE preparation resources
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-green-400" />
                    Complete syllabus coverage
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-2 text-green-400" />
                    Previous year questions
                  </div>
                  <div className="flex items-center">
                    <Target className="h-4 w-4 mr-2 text-green-400" />
                    Mock test series
                  </div>
                </div>
                <Button asChild className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  <Link href="/gate-cse-program">
                    <ArrowRight className="mr-2 h-4 w-4" />
                    View GATE Resources
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Programming Courses */}
            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-slate-800/80 border-slate-700 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors">
                  <Code className="h-8 w-8 text-blue-400" />
                </div>
                <CardTitle className="text-xl font-bold text-white">Programming Courses</CardTitle>
                <CardDescription className="text-gray-300">Structured programming learning paths</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-blue-400" />
                    60 Days DSA & Frontend
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-2 text-blue-400" />
                    120 Days Full Stack
                  </div>
                  <div className="flex items-center">
                    <Target className="h-4 w-4 mr-2 text-blue-400" />
                    Project-based learning
                  </div>
                </div>
                <Button asChild className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  <Link href="#programming-courses">
                    <ArrowRight className="mr-2 h-4 w-4" />
                    View Programming
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Semester Materials */}
            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-slate-800/80 border-slate-700 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-purple-500/30 transition-colors">
                  <GraduationCap className="h-8 w-8 text-purple-400" />
                </div>
                <CardTitle className="text-xl font-bold text-white">Semester Materials</CardTitle>
                <CardDescription className="text-gray-300">Subject-wise notes and study materials</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-purple-400" />
                    Semester-wise organization
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-2 text-purple-400" />
                    Subject notes & PDFs
                  </div>
                  <div className="flex items-center">
                    <Target className="h-4 w-4 mr-2 text-purple-400" />
                    Exam preparation
                  </div>
                </div>
                <Button asChild className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  <Link href="/semester-materials">
                    <ArrowRight className="mr-2 h-4 w-4" />
                    View Materials
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Programming Courses Section */}
          <section id="programming-courses" className="mb-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">Programming Learning Paths</h3>
              <p className="text-gray-300 max-w-2xl mx-auto">Structured programming courses for skill development</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-slate-800/80 border-slate-700 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-500/30 transition-colors">
                    <Zap className="h-8 w-8 text-red-400" />
                  </div>
                  <CardTitle className="text-xl font-bold text-white">60 Days DSA</CardTitle>
                  <CardDescription className="text-gray-300">
                    Master Data Structures & Algorithms in 60 days
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-red-400" />
                      Day-wise structured plan
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="h-4 w-4 mr-2 text-red-400" />
                      Curated problem sets
                    </div>
                    <div className="flex items-center">
                      <Target className="h-4 w-4 mr-2 text-red-400" />
                      Interview preparation
                    </div>
                  </div>
                  <Button asChild className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                    <Link href="/60-days-dsa">
                      <ArrowRight className="mr-2 h-4 w-4" />
                      Start DSA Journey
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-slate-800/80 border-slate-700 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors">
                    <Code className="h-8 w-8 text-blue-400" />
                  </div>
                  <CardTitle className="text-xl font-bold text-white">60 Days Frontend</CardTitle>
                  <CardDescription className="text-gray-300">Complete frontend development mastery</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-blue-400" />
                      HTML, CSS, JavaScript, React
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="h-4 w-4 mr-2 text-blue-400" />
                      Real-world projects
                    </div>
                    <div className="flex items-center">
                      <Target className="h-4 w-4 mr-2 text-blue-400" />
                      Portfolio building
                    </div>
                  </div>
                  <Button asChild className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                    <Link href="/60-days-frontend">
                      <ArrowRight className="mr-2 h-4 w-4" />
                      Start Frontend
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-slate-800/80 border-slate-700 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-500/30 transition-colors">
                    <Trophy className="h-8 w-8 text-green-400" />
                  </div>
                  <CardTitle className="text-xl font-bold text-white">120 Days Full Stack</CardTitle>
                  <CardDescription className="text-gray-300">Complete web development bootcamp</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-green-400" />
                      Frontend + Backend + Database
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="h-4 w-4 mr-2 text-green-400" />
                      Industry-ready projects
                    </div>
                    <div className="flex items-center">
                      <Target className="h-4 w-4 mr-2 text-green-400" />
                      Job placement support
                    </div>
                  </div>
                  <Button asChild className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                    <Link href="/120-days-fullstack">
                      <ArrowRight className="mr-2 h-4 w-4" />
                      Start Full Stack
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Call to Action */}
          <Card className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/30">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">🚀 Ready to Start Your Learning Journey?</h3>
              <p className="text-gray-300 mb-6">
                Join thousands of students who have transformed their careers with our structured learning programs.
              </p>
              <div className="flex justify-center space-x-4 mb-6">
                <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">Expert Mentorship</Badge>
                <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">Structured Learning</Badge>
                <Badge className="bg-green-500/20 text-green-300 border-green-500/30">Career Support</Badge>
              </div>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
              >
                <Users className="mr-2 h-5 w-5" />
                Join NFS Community
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
