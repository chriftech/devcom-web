import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './shadcn/card'
import { Button } from './shadcn/button'

const Pricing = () => {
  return (
    <div className="w-screen min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      {/* Page Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Choose Your Plan</h1>
        <p className="text-gray-600 mt-2">Simple pricing for your todo workflow</p>
      </div>

      {/* Pricing Grid */}
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl w-full">
        {/* Free Plan */}
        <Card className="rounded-2xl shadow-md border border-gray-200">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-700">Basic</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="flex items-end gap-1">
              <p className="text-3xl font-bold text-gray-900">$0</p>
              <p className="text-gray-600">/month</p>
            </div>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>✔ Unlimited personal todos</li>
              <li>✔ Basic task categories</li>
              <li>✔ Up to 2 projects</li>
            </ul>
            <Button className="w-full mt-3">Get Started</Button>
          </CardContent>
        </Card>

        {/* Standard Plan */}
        <Card className="rounded-2xl shadow-lg border-2 border-blue-500">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-700">Standard</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="flex items-end gap-1">
              <p className="text-3xl font-bold text-gray-900">$11.99</p>
              <p className="text-gray-600">/month</p>
            </div>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>✔ Everything in Basic</li>
              <li>✔ Priority levels & deadlines</li>
              <li>✔ Unlimited projects</li>
              <li>✔ Team collaboration (up to 5 users)</li>
            </ul>
            <Button className="w-full mt-3 bg-blue-500 hover:bg-blue-600 text-white">
              Upgrade
            </Button>
          </CardContent>
        </Card>

        {/* Custom Plan */}
        <Card className="rounded-2xl shadow-md border border-gray-200">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-700">Professional</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            {/* <div className="flex items-end gap-1">
              <p className="text-3xl font-bold text-gray-900">Let's Talk</p>
            </div> */}
            <div className="flex items-end gap-1">
              <p className="text-3xl font-bold text-gray-900">$34.99</p>
              <p className="text-gray-600">/month</p>
            </div>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>✔ Everything in Standard</li>
              <li>✔ Unlimited users</li>
              <li>✔ Advanced reporting & analytics</li>
              <li>✔ Dedicated support</li>
            </ul>
            <Button variant="outline" className="w-full mt-3">
              Contact Sales
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Pricing
