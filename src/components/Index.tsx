"use client"

import { motion } from "framer-motion"
import { Button } from "./shadcn/button"
import { Card, CardContent, CardHeader, CardTitle } from "./shadcn/card"
import { CheckCircle2, Smartphone, Cloud, Users, Rocket } from "lucide-react"
import { Separator } from "./shadcn/separator"
import { useNavigate } from "react-router-dom"

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-gray-900"
        >
          Organize Your Tasks, <br /> Boost Your Productivity
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
        >
          YangaList is your simple yet powerful productivity tool. Plan smarter, work better, and
          achieve more—every single day.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 flex justify-center gap-4"
        >
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            Get Started
          </Button>
          <Button size="lg" variant="outline">
            View Pricing
          </Button>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <CheckCircle2 size={28} className="text-blue-600" />,
            title: "Simple Task Management",
            desc: "Easily create, organize, and track your tasks with an intuitive interface.",
          },
          {
            icon: <Smartphone size={28} className="text-blue-600" />,
            title: "Cross-Platform",
            desc: "Access your tasks anywhere—on web or mobile, synced in real-time.",
          },
          {
            icon: <Cloud size={28} className="text-blue-600" />,
            title: "Cloud Backup",
            desc: "Your tasks are securely stored in the cloud with instant backups.",
          },
        ].map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Card className="p-6 shadow-md hover:shadow-lg transition">
              <CardContent className="space-y-3">
                {feature.icon}
                <h3 className="font-semibold text-lg text-gray-900">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      {/* About Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">About YangaList</h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            YangaList helps you stay organized and productive by keeping all your tasks in one place.
            Whether you’re an individual, a team, or a growing business, YangaList adapts to your needs.
          </p>
        </div>

        <Separator className="my-8" />

        {/* Mission + Values */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="shadow-sm">
            <CardHeader>
              <CheckCircle2 className="text-blue-600 mb-2" size={28} />
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                To simplify task management and empower people to achieve more by reducing stress and
                improving productivity.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardHeader>
              <Users className="text-blue-600 mb-2" size={28} />
              <CardTitle>Our Users</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                From students to entrepreneurs, teams to enterprises—YangaList is built for anyone who
                wants to get things done faster and smarter.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardHeader>
              <Rocket className="text-blue-600 mb-2" size={28} />
              <CardTitle>Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                To become the most intuitive productivity tool that integrates seamlessly with your daily
                workflow across devices.
              </p>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-8" />

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ready to simplify your life?</h2>
          <p className="text-gray-600 mb-6">
            Join thousands of users who rely on YangaList every day to organize their lives.
          </p>
          <a
            href="/plans"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Get Started
          </a>
        </div>
      </motion.div>

      {/* Testimonials Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
        className="w-full bg-gray-50 py-16"
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="relative overflow-hidden">
            {/* Testimonials Section */}
            <section className="w-full bg-gray-50 py-16 pt-0">
              <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16">
                  What Our Users Say
                </h2>

                <div className="relative overflow-hidden">
                  {/* Scrolling Container */}
                  <motion.div
                    className="flex gap-8"
                    animate={{ x: ["20%", "-100%"] }}
                    transition={{
                      repeat: Infinity,
                      duration: 30,
                      ease: "linear",
                    }}
                  >
                    {[
                      {
                        name: "Sophia M.",
                        role: "Student",
                        feedback:
                          "YangaList has made managing my study schedule so much easier. I’ve never missed an assignment since I started using it!",
                        rating: 5,
                      },
                      {
                        name: "James K.",
                        role: "Entrepreneur",
                        feedback:
                          "A simple yet powerful app. My productivity has doubled because I can now keep track of everything in one place.",
                        rating: 4,
                      },
                      {
                        name: "Elena P.",
                        role: "Project Manager",
                        feedback:
                          "Perfect for my team. Task assignments and updates are clear, and the real-time sync keeps us all on the same page.",
                        rating: 5,
                      },
                      {
                        name: "David L.",
                        role: "Freelancer",
                        feedback:
                          "I love the clean interface. It’s minimal but does everything I need without distractions.",
                        rating: 4,
                      },
                    ].map((testimonial, i) => (
                      <Card
                        key={i}
                        className="min-w-[300px] max-w-sm p-6 shadow-md flex-shrink-0"
                      >
                        <CardContent className="space-y-4">
                          <p className="text-gray-700 italic">"{testimonial.feedback}"</p>
                          <div className="flex items-center justify-center gap-1">
                            {Array.from({ length: 5 }).map((_, star) => (
                              <span key={star}>
                                {star < testimonial.rating ? (
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 text-yellow-500"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.2 3.674a1 1 0 00.95.69h3.862c.969 0 1.371 1.24.588 1.81l-3.124 2.27a1 1 0 00-.364 1.118l1.2 3.674c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.124 2.27c-.785.57-1.84-.197-1.54-1.118l1.2-3.674a1 1 0 00-.364-1.118L3.048 9.1c-.783-.57-.38-1.81.588-1.81h3.862a1 1 0 00.95-.69l1.2-3.674z" />
                                  </svg>
                                ) : (
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 text-gray-300"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.2 3.674a1 1 0 00.95.69h3.862c.969 0 1.371 1.24.588 1.81l-3.124 2.27a1 1 0 00-.364 1.118l1.2 3.674c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.124 2.27c-.785.57-1.84-.197-1.54-1.118l1.2-3.674a1 1 0 00-.364-1.118L3.048 9.1c-.783-.57-.38-1.81.588-1.81h3.862a1 1 0 00.95-.69l1.2-3.674z" />
                                  </svg>
                                )}
                              </span>
                            ))}
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">{testimonial.name}</p>
                            <p className="text-sm text-gray-500">{testimonial.role}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </motion.div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </motion.section>

      {/* Call-to-Action Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="bg-blue-600 py-16 text-center text-white"
      >
        <h2 className="text-3xl md:text-4xl font-bold">Start your productivity journey today!</h2>
        <p className="mt-3 text-lg opacity-90">Join thousands of users who trust YangaList.</p>
        <div className="mt-6 flex justify-center gap-4">
          <Button
            size="lg"
            onClick={() => {
              navigate("/plans");
            }}
            variant="secondary"
          >
            Get Started
          </Button>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Learn More
          </Button>
        </div>
      </motion.section>
    </div>

  )
}
