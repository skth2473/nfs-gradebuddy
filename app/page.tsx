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
  Calendar,
  Star,
  ArrowRight,
  GraduationCap,
  Target,
  Zap,
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
              {/* Logo Image */}
              <img
                src="/public/NFS.png"
                alt="NFS Logo"
                className="w-10 h-10 rounded-lg object-cover"
              />
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  NFS
                </h1>
                <p className="text-xs text-gray-400">Notes for Study</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="#" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">
                Home
              </Link>
              <Link href="#gradebuddy" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">
                GradeBuddy
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
            🚀 Your Academic Success Partner
          </Badge>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Notes for{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Study</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Complete study platform with comprehensive notes, structured courses, grade calculation tools, and career
            guidance for computer science students.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3"
            >
              Start Learning
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3"
            >
              Explore Courses
            </Button>
          </div>
        </div>
      </section>

      {/* GradeBuddy Section */}
      <section id="gradebuddy" className="py-16 px-4 bg-slate-800/50 relative">
        {/* Background Image with 40% opacity */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage: "url('/public/Gb.png')",
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
            {/* Calculator cards remain the same */}
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

      {/* Flagship Programs */}
      <section className="py-16 px-4 relative">
        {/* Code2Crack Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-9xl font-bold text-blue-500 transform rotate-12">Code2Crack</div>
          </div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-500/20 text-blue-300 border-blue-500/30">🚀 Flagship Program</Badge>
            <h3 className="text-4xl font-bold text-white mb-4">Code2Crack</h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Master coding interviews and crack your dream tech job with our comprehensive programming bootcamp
            </p>
          </div>

          <Card className="max-w-4xl mx-auto bg-slate-800/80 border-slate-700 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h4 className="text-2xl font-bold text-white mb-4">Join the Code2Crack Community</h4>
                  <ul className="space-y-3 text-gray-300 mb-6">
                    <li className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-400 mr-2" />
                      Data Structures & Algorithms 
                    </li>
                    <li className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-400 mr-2" />
                      System Design Fundamentals
                    </li>
                    <li className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-400 mr-2" />
                      Aptitude
                    </li>
                    <li className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-400 mr-2" />
                      Placement Preparation
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
                      asChild
                      size="lg"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      <Link href="">
                        <BookOpen className="mr-2 h-5 w-5" />
                        Join Community
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-4">
                    <Code className="h-16 w-16 text-white" />
                  </div>
                  <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">Exclusive for 2026 batch</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* GATE Preparation */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-500/20 text-green-300 border-green-500/30">🎯 GATE Preparation</Badge>
            <h3 className="text-4xl font-bold text-white mb-4">GATE CSE Preparation</h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive GATE Computer Science preparation with expert guidance and structured study plans
            </p>
          </div>

          <Card className="max-w-4xl mx-auto bg-slate-800/80 border-slate-700 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mb-4">
                    <Trophy className="h-16 w-16 text-white" />
                  </div>
                  <Badge className="bg-green-500/20 text-green-300 border-green-500/30">2027</Badge>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white mb-4">GATE Success Program</h4>
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
                      asChild
                      size="lg"
                      className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
                    >
                      <Link href="">
                        <BookOpen className="mr-2 h-5 w-5" />
                        Join Community
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Internship & Placement */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-purple-500/20 text-purple-300 border-purple-500/30">💼 Career Support</Badge>
            <h3 className="text-4xl font-bold text-white mb-4">Internship & Placement</h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Dedicated support for internships and placements with expert guidance and resources to help you land your
              dream job or internship
            </p>
          </div>

          <Card className="max-w-4xl mx-auto bg-slate-800/80 border-slate-700 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h4 className="text-2xl font-bold text-white mb-4">Career Acceleration Program</h4>
                  <ul className="space-y-3 text-gray-300 mb-6">
                    <li className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-400 mr-2" />
                      Opportunity Alerts
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
                      Special Session by our Founder Ashish
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
                  <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">Build Your Future</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Structured Programs */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-yellow-500/20 text-yellow-300 border-yellow-500/30">📚 Structured Learning</Badge>
            <h3 className="text-4xl font-bold text-white mb-4">Learning Programs</h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive learning paths designed for different career goals and skill levels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                </div>
                <Button asChild className="w-full bg-red-600 hover:bg-red-700">
                  <Link href="/60-days-dsa">Start DSA Journey</Link>
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
                </div>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="/60-days-frontend">Start Frontend</Link>
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
                </div>
                <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                  <Link href="/120-days-fullstack">Start Full Stack</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-indigo-500/20 text-indigo-300 border-indigo-500/30">👨‍💻 About the Founder</Badge>
            <h3 className="text-4xl font-bold text-white mb-4">Meet Ashish</h3>
          </div>

          <Card className="max-w-4xl mx-auto bg-slate-800/80 border-slate-700 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-center">
                  <div className="w-48 h-48 mx-auto bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
                    <img src="/public/Ashish.jpg" alt="Ashish Bhai" />
                  </div>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-white mb-6">Ashish Kumar</h4>
                  <div className="space-y-4 text-gray-300">
                    <p className="text-lg leading-relaxed">
                      A passionate Computer Science Engineering student in his 3rd year, dedicated to helping fellow
                      students excel in their academic journey.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Star className="h-5 w-5 text-yellow-400 mr-3" />
                        <span>Secretary of SciFi Club</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="h-5 w-5 text-yellow-400 mr-3" />
                        <span>Full Stack Developer</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="h-5 w-5 text-yellow-400 mr-3" />
                        <span>Competitive Programming Enthusiast</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="h-5 w-5 text-yellow-400 mr-3" />
                        <span>Open Source Contributor</span>
                      </div>
                    </div>
                    <p className="text-lg leading-relaxed mt-6">
                      "My mission is to make quality education accessible to every student and help them achieve their
                      career goals through structured learning and mentorship."
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-slate-800/50">
  <div className="container mx-auto text-center">
    <img src="public\NFS.png" alt="NFS" className="mx-auto mb-6 w-full max-w-md rounded-lg shadow-lg" />
    <h3 className="text-4xl font-bold text-white mb-6">Contact Us</h3>
    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
      Have questions or need guidance? We're here to help you succeed in your academic journey.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button
        size="lg"
        className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700"
      >
        <a href="whatsapp.com">
          
          Send Message
          </a>
      </Button>
      <Button
        size="lg"
        className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700"
      >
        <a href="discord.gg">
          
          Join Discord Community
          </a>
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
                <span className="text-xl font-bold">NFS</span>
              </div>
              <p className="text-gray-400">Empowering students with quality education and career guidance.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2 text-gray-400">
                <Link href="#" className="block hover:text-white transition-colors">
                  Home
                </Link>
                <Link href="#gradebuddy" className="block hover:text-white transition-colors">
                  GradeBuddy
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
                <Link href="#" className="block hover:text-white transition-colors">
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
            <p>© {new Date().getFullYear()} NFS - Notes for Study. All rights reserved. Built with ❤️ by <a href="https://www.linkedin.com/in/sarthak-kumar-thakur-097498231/">Sarthak Kumar Thakur</a></p>
          </div>
        </div>
      </footer>
    </div>
  )
}
