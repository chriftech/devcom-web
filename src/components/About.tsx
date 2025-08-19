import React from 'react'

import { Card, CardContent, CardHeader, CardTitle } from "./shadcn/card"
import { Separator } from "./shadcn/separator"
import { CheckCircle2, Users, Rocket } from "lucide-react"
import {motion} from "framer-motion"

function About() {
  return (
    <div className="w-full min-h-screen bg-gray-50">
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
    </div>
  )
}


export default About
