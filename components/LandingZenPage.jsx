// components/LandingZenPage.jsx
"use client";
import React, { useState } from "react";
import {
  Menu,
  X,
  Zap,
  Target,
  Rocket,
  CheckCircle,
  Star,
  ArrowRight,
  Globe,
  Shield,
  Users,
} from "lucide-react";

const LandingZenPage = ({ onLogout, userSession }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const features = [
    {
      icon: <Zap className="w-7 h-7 text-blue-500" />,
      title: "Lightning Fast Setup",
      description:
        "Get your landing page live in minutes with our intuitive drag-and-drop builder",
    },
    {
      icon: <Target className="w-7 h-7 text-green-500" />,
      title: "Conversion Optimized",
      description:
        "Templates designed with psychology and data to maximize your conversion rates",
    },
    {
      icon: <Rocket className="w-7 h-7 text-purple-500" />,
      title: "Performance Focused",
      description:
        "Lightning-fast loading times and SEO optimization built into every template",
    },
    {
      icon: <Globe className="w-7 h-7 text-indigo-500" />,
      title: "Mobile Responsive",
      description:
        "Your pages look perfect on every device, from desktop to mobile",
    },
    {
      icon: <Shield className="w-7 h-7 text-red-500" />,
      title: "Enterprise Security",
      description:
        "Bank-level security with SSL certificates and GDPR compliance",
    },
    {
      icon: <Users className="w-7 h-7 text-orange-500" />,
      title: "Team Collaboration",
      description:
        "Work together seamlessly with real-time editing and commenting",
    },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$9",
      period: "/month",
      description: "Perfect for individuals and small projects",
      features: [
        "5 Landing Pages",
        "Basic Templates",
        "Mobile Responsive",
        "Basic Analytics",
        "Email Support",
      ],
      popular: false,
    },
    {
      name: "Pro",
      price: "$29",
      period: "/month",
      description: "Ideal for growing businesses and agencies",
      features: [
        "Unlimited Landing Pages",
        "Premium Templates",
        "Advanced Analytics",
        "A/B Testing",
        "Priority Support",
        "Custom Domain",
        "Team Collaboration",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/month",
      description: "For large teams and organizations",
      features: [
        "Everything in Pro",
        "White Label Solution",
        "API Access",
        "Dedicated Manager",
        "Custom Integrations",
        "SLA Guarantee",
        "Advanced Security",
      ],
      popular: false,
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechFlow",
      content:
        "LandingZen helped us increase our conversion rate by 340% in just 2 months!",
      rating: 5,
    },
    {
      name: "Mike Chen",
      role: "Startup Founder",
      company: "InnovateLab",
      content:
        "The fastest way to create professional landing pages. Our team loves it!",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Digital Marketer",
      company: "GrowthHive",
      content:
        "Amazing templates and incredible support. Couldn't be happier with the results.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - Original Size */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">
                LandingZen
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Pricing
              </a>
              <a
                href="#testimonials"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Reviews
              </a>
              {userSession && (
                <span className="text-sm text-gray-500">
                  Welcome, {userSession.user?.name}
                </span>
              )}
              <button
                onClick={onLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Logout
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t bg-white">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a
                  href="#features"
                  className="block px-3 py-2 text-gray-600 hover:text-gray-900"
                >
                  Features
                </a>
                <a
                  href="#pricing"
                  className="block px-3 py-2 text-gray-600 hover:text-gray-900"
                >
                  Pricing
                </a>
                <a
                  href="#testimonials"
                  className="block px-3 py-2 text-gray-600 hover:text-gray-900"
                >
                  Reviews
                </a>
                {userSession && (
                  <div className="px-3 py-2 text-sm text-gray-500">
                    Welcome, {userSession.user?.name}
                  </div>
                )}
                <button
                  onClick={onLogout}
                  className="w-full text-left bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg mt-2"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center py-16 lg:py-0">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Create{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                Stunning
              </span>{" "}
              Landing Pages in Minutes
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Build high-converting landing pages with our drag-and-drop
              builder. No coding required. Start converting visitors into
              customers today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="w-1/2 sm:w-52 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-7 py-3 rounded-lg text-base font-semibold transition-all transform hover:scale-105 flex items-center justify-center space-x-2">
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="w-1/2 sm:w-52 border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-7 py-3 rounded-lg text-base font-semibold transition-colors">
                Watch Demo
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Free 14-day trial • No credit card required
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-3 sm:px-5 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Everything You Need to Succeed
            </h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Powerful features designed to help you create, optimize, and scale
              your landing pages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-5 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-3">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-3 sm:px-5 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-600">
              Choose the plan that's right for your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-xl p-6 ${
                  plan.popular
                    ? "bg-gradient-to-br from-blue-500 to-purple-600 text-white transform scale-105"
                    : "bg-white border border-gray-200"
                }`}
              >
                {plan.popular && (
                  <div className="text-center mb-3">
                    <span className="bg-white text-blue-600 px-2 py-1 rounded-full text-xs font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-5">
                  <h3
                    className={`text-xl font-bold mb-2 ${
                      plan.popular ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center">
                    <span
                      className={`text-3xl font-bold ${
                        plan.popular ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {plan.price}
                    </span>
                    <span
                      className={`ml-1 text-sm ${
                        plan.popular ? "text-blue-100" : "text-gray-600"
                      }`}
                    >
                      {plan.period}
                    </span>
                  </div>
                  <p
                    className={`mt-2 text-sm ${
                      plan.popular ? "text-blue-100" : "text-gray-600"
                    }`}
                  >
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle
                        className={`w-4 h-4 mr-2 ${
                          plan.popular ? "text-blue-200" : "text-green-500"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          plan.popular ? "text-blue-50" : "text-gray-600"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-2 px-5 rounded-lg text-sm font-semibold transition-colors ${
                    plan.popular
                      ? "bg-white text-blue-600 hover:bg-blue-50"
                      : "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700"
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Reduced sizes */}
      <section id="testimonials" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-3 sm:px-5 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Loved by Thousands of Users
            </h2>
            <p className="text-lg text-gray-600">
              See what our customers have to say
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-5 rounded-xl">
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-3 italic text-sm">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-600 text-xs">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Reduced sizes */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-3 sm:px-5 lg:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Ready to Build Your Perfect Landing Page?
          </h2>
          <p className="text-lg text-blue-100 mb-6">
            Join thousands of businesses already using LandingZen to grow their
            revenue
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="bg-white text-blue-600 hover:bg-blue-50 px-7 py-3 rounded-lg text-base font-semibold transition-colors">
              Start Your Free Trial
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-7 py-3 rounded-lg text-base font-semibold transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Footer - Reduced sizes */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="max-w-6xl mx-auto px-3 sm:px-5 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-7 h-7 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg font-bold">LandingZen</span>
              </div>
              <p className="text-gray-400 mb-3 text-sm">
                Create stunning, high-converting landing pages in minutes with
                our powerful drag-and-drop builder.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-sm">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors text-sm"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors text-sm"
                  >
                    Templates
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors text-sm"
                  >
                    Integrations
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors text-sm"
                  >
                    API
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-sm">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors text-sm"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors text-sm"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors text-sm"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors text-sm"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-sm">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors text-sm"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors text-sm"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors text-sm"
                  >
                    Community
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors text-sm"
                  >
                    Status
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-xs">
              © 2025 LandingZen. All rights reserved.
            </p>
            <div className="flex space-x-5 mt-3 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-xs"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-xs"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-xs"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingZenPage;
