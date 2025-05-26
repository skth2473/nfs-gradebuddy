import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Calculator,
  Code,
  Users,
  Trophy,
  Briefcase,
  Star,
  ArrowRight,
  GraduationCap,
  Target,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-slate-900/95 backdrop-blur-sm shadow-xl border-b border-purple-500/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src="/placeholder.svg?height=40&width=40"
                alt="NFSxRFP Logo"
                className="w-10 h-10 rounded-lg object-cover"
              />
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  NFSxRFP
                </h1>
                <p className="text-xs text-gray-400">Notes for Study x Road for Placement</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="#nfs" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">
                NFS
              </Link>
              <Link href="#gradebuddy" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">
                GradeBuddy
              </Link>
              <Link href="#rfp" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">
                RFP
              </Link>
              <Link href="#about" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">
                About
              </Link>
              <Link href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10"></div>
        <div className="container mx-auto text-center relative z-10">
          <Badge className="mb-6 bg-purple-500/20 text-purple-300 border-purple-500/30">
            🚀 Your Academic & Career Success Partner
          </Badge>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">NFSxRFP</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Complete platform combining Notes for Study with Road for Placement - comprehensive notes, structured
            courses, grade calculation tools, and career guidance for computer science students.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3"
            >
              <Link href="/nfs-courses">
                Start Learning
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 bg-transparent px-8 py-3"
            >
              <Link href="/nfs-courses">Explore Courses</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* NFS Section */}
      <section id="nfs" className="py-16 px-4 bg-slate-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-500/20 text-blue-300 border-blue-500/30">📚 Notes for Study</Badge>
            <h3 className="text-4xl font-bold text-white mb-4">NFS - Learning Hub</h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive study materials and structured learning programs for academic excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Join Community Card */}
            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-slate-800/80 border-slate-700 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-purple-500/30 transition-colors">
                  <Users className="h-8 w-8 text-purple-400" />
                </div>
                <CardTitle className="text-xl font-bold text-white">Join Community</CardTitle>
                <CardDescription className="text-gray-300">
                  Connect with fellow students and get support
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  <Users className="mr-2 h-4 w-4" />
                  Join NFS Community
                </Button>
              </CardContent>
            </Card>

            {/* Courses Card */}
            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-slate-800/80 border-slate-700 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-500/30 transition-colors">
                  <BookOpen className="h-8 w-8 text-green-400" />
                </div>
                <CardTitle className="text-xl font-bold text-white">Courses</CardTitle>
                <CardDescription className="text-gray-300">
                  Structured learning programs and study materials
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                  <Link href="/nfs-courses">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Explore Courses
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* GradeBuddy Section */}
      <section id="gradebuddy" className="py-16 px-4 bg-slate-800/50 relative">
        {/* Background Image with 40% opacity */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage: "url('/path/to/different/placeholder.svg?height=800&width=1200')",
          }}
        ></div>

        {/* Overlay to ensure content readability */}
        <div className="absolute inset-0 bg-slate-800/60"></div>

        {/* Content */}
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-500/20 text-green-300 border-green-500/30">🧮 Academic Calculator</Badge>
            <h3 className="text-4xl font-bold text-white mb-4">GradeBuddy</h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Your comprehensive academic calculation companion for SGPA, CGPA, and marks calculation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-slate-800/80 border-slate-700 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors">
                  <Calculator className="h-8 w-8 text-blue-400" />
                </div>
                <CardTitle className="text-xl font-bold text-white">SGPA Calculator</CardTitle>
                <CardDescription className="text-gray-300">Calculate your Semester Grade Point Average</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="/sgpa-calculator">Calculate SGPA</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-slate-800/80 border-slate-700 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-500/30 transition-colors">
                  <Trophy className="h-8 w-8 text-green-400" />
                </div>
                <CardTitle className="text-xl font-bold text-white">CGPA Calculator</CardTitle>
                <CardDescription className="text-gray-300">
                  Calculate your Cumulative Grade Point Average
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                  <Link href="/cgpa-calculator">Calculate CGPA</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-slate-800/80 border-slate-700 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-500/30 transition-colors">
                  <Target className="h-8 w-8 text-orange-400" />
                </div>
                <CardTitle className="text-xl font-bold text-white">CGPA Predictor</CardTitle>
                <CardDescription className="text-gray-300">Predict required SGPA for target CGPA</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button asChild className="w-full bg-orange-600 hover:bg-orange-700">
                  <Link href="/cgpa-predictor">Predict CGPA</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-slate-800/80 border-slate-700 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-purple-500/30 transition-colors">
                  <GraduationCap className="h-8 w-8 text-purple-400" />
                </div>
                <CardTitle className="text-xl font-bold text-white">Marks Calculator</CardTitle>
                <CardDescription className="text-gray-300">Calculate marks for all subject types</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button asChild className="w-full bg-purple-600 hover:bg-purple-700">
                  <Link href="/marks-calculator">Calculate Marks</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* RFP Section - Road for Placement */}
      <section id="rfp" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-orange-500/20 text-orange-300 border-orange-500/30">🛣️ Road for Placement</Badge>
            <h3 className="text-4xl font-bold text-white mb-4">RFP - Career Success</h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Complete roadmap for placement success with coding interviews, system design, and career guidance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Code2Crack */}
            <Card className="bg-slate-800/80 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-4">
                    <Code className="h-10 w-10 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">Code2Crack</h4>
                  <p className="text-gray-300">Master coding interviews and crack your dream tech job</p>
                </div>
                <ul className="space-y-3 text-gray-300 mb-6">
                  <li className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 mr-2" />
                    Data Structures & Algorithms Mastery
                  </li>
                  <li className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 mr-2" />
                    System Design Fundamentals
                  </li>
                  <li className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 mr-2" />
                    Mock Interview Sessions
                  </li>
                  <li className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 mr-2" />
                    Industry Expert Mentorship
                  </li>
                </ul>
                <div className="flex gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    <Link href="/code2crack-program">
                      <BookOpen className="mr-2 h-5 w-5" />
                      Know More
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 bg-transparent"
                  >
                    <Users className="mr-2 h-5 w-5" />
                    Join Group
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* GATE Preparation */}
            <Card className="bg-slate-800/80 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mb-4">
                    <Trophy className="h-10 w-10 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">GATE CSE Preparation</h4>
                  <p className="text-gray-300">Comprehensive GATE preparation with expert guidance</p>
                </div>
                <ul className="space-y-3 text-gray-300 mb-6">
                  <li className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 mr-2" />
                    Complete Syllabus Coverage
                  </li>
                  <li className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 mr-2" />
                    Previous Year Questions Analysis
                  </li>
                  <li className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 mr-2" />
                    Weekly Mock Tests
                  </li>
                  <li className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 mr-2" />
                    Doubt Resolution Sessions
                  </li>
                </ul>
                <div className="flex gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
                  >
                    <Link href="/gate-cse-program">
                      <BookOpen className="mr-2 h-5 w-5" />
                      Know More
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 bg-transparent"
                  >
                    <Users className="mr-2 h-5 w-5" />
                    Join Group
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Internship & Placement */}
            <Card className="md:col-span-2 bg-slate-800/80 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-4">Career Acceleration Program</h4>
                    <ul className="space-y-3 text-gray-300 mb-6">
                      <li className="flex items-center">
                        <Star className="h-5 w-5 text-yellow-400 mr-2" />
                        Resume Building & Optimization
                      </li>
                      <li className="flex items-center">
                        <Star className="h-5 w-5 text-yellow-400 mr-2" />
                        Interview Preparation
                      </li>
                      <li className="flex items-center">
                        <Star className="h-5 w-5 text-yellow-400 mr-2" />
                        Company Referrals
                      </li>
                      <li className="flex items-center">
                        <Star className="h-5 w-5 text-yellow-400 mr-2" />
                        Salary Negotiation Tips
                      </li>
                    </ul>
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                    >
                      <Briefcase className="mr-2 h-5 w-5" />
                      Join Placement Group
                    </Button>
                  </div>
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4">
                      <Briefcase className="h-16 w-16 text-white" />
                    </div>
                    <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">95% Placement Rate</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section - Meet the Trio */}
      <section id="about" className="py-16 px-4 bg-slate-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-indigo-500/20 text-indigo-300 border-indigo-500/30">👥 Meet the Trio</Badge>
            <h3 className="text-4xl font-bold text-white mb-4">Our Founders</h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The passionate team behind NFSxRFP, dedicated to empowering students in their academic and career journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Aryaman */}
            <Card className="bg-slate-800/80 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <img
                  src="/placeholder.svg?height=150&width=150"
                  alt="Aryaman"
                  className="w-32 h-32 mx-auto rounded-full object-cover mb-6"
                />
                <h4 className="text-2xl font-bold text-white mb-2">Aryaman</h4>
                <p className="text-purple-400 mb-4 font-semibold">Founder & Visionary</p>
                <p className="text-gray-300 leading-relaxed">
                  A final-year CSE student, Aryaman is the founder of NFS and RSP. Known for his leadership and
                  innovative thinking, he brings bold ideas to life and has a knack for building strong communities
                  around impactful initiatives.
                </p>
              </CardContent>
            </Card>

            {/* Vaibhav */}
            <Card className="bg-slate-800/80 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <img
                  src="/placeholder.svg?height=150&width=150"
                  alt="Vaibhav"
                  className="w-32 h-32 mx-auto rounded-full object-cover mb-6"
                />
                <h4 className="text-2xl font-bold text-white mb-2">Vaibhav</h4>
                <p className="text-blue-400 mb-4 font-semibold">Co-Founder & Operations</p>
                <p className="text-gray-300 leading-relaxed">
                  The planner and backbone of the team, Vaibhav is the go-to guy for structuring chaos. From setting
                  clear goals to managing timelines, he ensures everything runs like a well-oiled machine — calm,
                  composed, and always one step ahead.
                </p>
              </CardContent>
            </Card>

            {/* Adith */}
            <Card className="bg-slate-800/80 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <img
                  src="/placeholder.svg?height=150&width=150"
                  alt="Adith"
                  className="w-32 h-32 mx-auto rounded-full object-cover mb-6"
                />
                <h4 className="text-2xl font-bold text-white mb-2">Adith</h4>
                <p className="text-green-400 mb-4 font-semibold">Co-Founder & Tech Lead</p>
                <p className="text-gray-300 leading-relaxed">
                  Handling Code2Crack with confidence and clarity, Adith is the front-facing tech communicator. Whether
                  it's mentoring, managing sessions, or interacting with people, he makes sure the tech meets the
                  audience where they are — with clarity and impact.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-pink-500/20 text-pink-300 border-pink-500/30">📞 Get in Touch</Badge>
          <h3 className="text-4xl font-bold text-white mb-6">Contact Us</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Have questions or need guidance? We're here to help you succeed in your academic and career journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700"
            >
              Send Message
            </Button>
            <Button size="lg" variant="outline" className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10">
              Join Discord
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 border-t border-slate-700">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">NFSxRFP</span>
              </div>
              <p className="text-gray-400">Empowering students with quality education and career guidance.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2 text-gray-400">
                <Link href="#nfs" className="block hover:text-white transition-colors">
                  NFS
                </Link>
                <Link href="#gradebuddy" className="block hover:text-white transition-colors">
                  GradeBuddy
                </Link>
                <Link href="#rfp" className="block hover:text-white transition-colors">
                  RFP
                </Link>
                <Link href="#about" className="block hover:text-white transition-colors">
                  About
                </Link>
                <Link href="#contact" className="block hover:text-white transition-colors">
                  Contact
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Programs</h4>
              <div className="space-y-2 text-gray-400">
                <Link href="/60-days-dsa" className="block hover:text-white transition-colors">
                  60 Days DSA
                </Link>
                <Link href="/60-days-frontend" className="block hover:text-white transition-colors">
                  60 Days Frontend
                </Link>
                <Link href="/120-days-fullstack" className="block hover:text-white transition-colors">
                  120 Days Full Stack
                </Link>
                <Link href="/gate-cse-program" className="block hover:text-white transition-colors">
                  GATE Preparation
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Tools</h4>
              <div className="space-y-2 text-gray-400">
                <Link href="/sgpa-calculator" className="block hover:text-white transition-colors">
                  SGPA Calculator
                </Link>
                <Link href="/cgpa-calculator" className="block hover:text-white transition-colors">
                  CGPA Calculator
                </Link>
                <Link href="/cgpa-predictor" className="block hover:text-white transition-colors">
                  CGPA Predictor
                </Link>
                <Link href="/marks-calculator" className="block hover:text-white transition-colors">
                  Marks Calculator
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-gray-400">
            <p>
              © {new Date().getFullYear()} NFSxRFP - Notes for Study x Road for Placement. All rights reserved. -
              Developed with ❤️ By Sarthak
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
