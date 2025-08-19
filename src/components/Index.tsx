"use client"

import { motion } from "framer-motion"
import { Button } from "./shadcn/button"
import { Card, CardContent } from "./shadcn/card"
import { CheckCircle2, Smartphone, Cloud, Users } from "lucide-react"

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-gray-900"
        >
          Organize Your Tasks, <br /> Boost Your Productivity
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
        >
          TodoApp is your simple yet powerful productivity tool. Plan smarter, work better, and 
          achieve more—every single day.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
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
            desc: "Easily create, organize, and track your tasks with an intuitive interface."
          },
          {
            icon: <Smartphone size={28} className="text-blue-600" />,
            title: "Cross-Platform",
            desc: "Access your tasks anywhere—on web or mobile, synced in real-time."
          },
          {
            icon: <Cloud size={28} className="text-blue-600" />,
            title: "Cloud Backup",
            desc: "Your tasks are securely stored in the cloud with instant backups."
          }
        ].map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
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

      {/* Call-to-Action Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-blue-600 py-16 text-center text-white"
      >
        <h2 className="text-3xl md:text-4xl font-bold">Start your productivity journey today!</h2>
        <p className="mt-3 text-lg opacity-90">Join thousands of users who trust TodoApp.</p>
        <div className="mt-6 flex justify-center gap-4">
          <Button size="lg" variant="secondary">Get Started</Button>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">Learn More</Button>
        </div>
      </motion.section>
    </div>
  )
}
