"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  RiArrowRightLine, 
  RiShieldLine, 
  RiRocketLine, 
  RiCodeLine, 
  RiBrainLine,
  RiGitBranchLine,
  RiSettingsLine,
  RiGithubLine,
  RiPlayLine
} from "@remixicon/react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function MarketingHome() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const features = [
    {
      icon: <RiBrainLine className="h-6 w-6" />,
      title: "AI-Powered Workflows",
      description: "Connect any AI model with your own API keys. Support for OpenAI, Anthropic, Google, and more."
    },
    {
      icon: <RiCodeLine className="h-6 w-6" />,
      title: "No-Code Visual Builder",
      description: "Build complex AI workflows with an intuitive drag-and-drop interface. No programming required."
    },
    {
      icon: <RiShieldLine className="h-6 w-6" />,
      title: "Privacy First",
      description: "Runs entirely in your browser. Your data never leaves your device. Complete privacy and security."
    },
    {
      icon: <RiGitBranchLine className="h-6 w-6" />,
      title: "Workflow Management",
      description: "Create, save, and organize multiple workflows. Import and export your creations easily."
    },
    {
      icon: <RiSettingsLine className="h-6 w-6" />,
      title: "Customizable Nodes",
      description: "Extend functionality with custom nodes. Perfect for email automation, content creation, and data analysis."
    },
    {
      icon: <RiRocketLine className="h-6 w-6" />,
      title: "Lightning Fast",
      description: "Built with Next.js and optimized for performance. Get your workflows running in seconds."
    }
  ];

  const useCases = [
    {
      title: "Email Automation",
      description: "Automatically process incoming emails, extract key information, and generate responses using AI."
    },
    {
      title: "Content Creation",
      description: "Generate blog posts, social media content, and marketing copy with customizable AI workflows."
    },
    {
      title: "Data Analysis",
      description: "Process and analyze data files, generate insights, and create reports automatically."
    },
    {
      title: "Customer Support",
      description: "Create intelligent chatbots and support systems that can handle complex customer inquiries."
    }
  ];

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="border-b bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <span className="text-2xl tracking-tighter font-sans leading-none font-bold bg-gradient-to-r from-orange-500 via-amber-500 to-teal-500 bg-clip-text text-transparent drop-shadow-sm">
                FlowState
              </span>
              <Badge variant="secondary" className="text-xs">
                Beta
              </Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="https://github.com/hatif03/flow-state" target="_blank">
                <Button variant="ghost" size="sm">
                  <RiGithubLine className="h-4 w-4 mr-2" />
                  GitHub
                </Button>
              </Link>
              <Link href="/app">
                <Button>
                  Launch App
                  <RiArrowRightLine className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
              Build AI Workflows
              <span className="block bg-gradient-to-r from-orange-500 via-amber-500 to-teal-500 bg-clip-text text-transparent">
                Without Code
              </span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              Create powerful AI workflows with an intuitive visual interface. Connect any AI model, 
              process data, and automate tasks—all while keeping your data private and secure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/app">
                <Button size="lg" className="text-lg px-8 py-6">
                  <RiPlayLine className="h-5 w-5 mr-2" />
                  Start Building
                  <RiArrowRightLine className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                View Demo
              </Button>
            </div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-400/20 to-amber-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-teal-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Everything you need to build AI workflows
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Powerful features designed to make AI accessible to everyone, regardless of technical expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-teal-500 rounded-lg flex items-center justify-center text-white mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Perfect for any use case
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              From simple automation to complex AI workflows, FlowState adapts to your needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {useCase.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 via-amber-500 to-teal-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to build your first AI workflow?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of users who are already automating their work with AI. 
            No credit card required, no data collection, completely free.
          </p>
          <Link href="/app">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <RiRocketLine className="h-5 w-5 mr-2" />
              Get Started Now
              <RiArrowRightLine className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-2xl tracking-tighter font-sans leading-none font-bold bg-gradient-to-r from-orange-500 via-amber-500 to-teal-500 bg-clip-text text-transparent">
                  FlowState
                </span>
              </div>
              <p className="text-slate-400 mb-4">
                Build powerful AI workflows with an intuitive visual interface. 
                Your data stays private, your creativity flows freely.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="/app" className="hover:text-white transition-colors">Launch App</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Templates</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Community</h3>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="https://github.com/hatif03/flow-state" target="_blank" className="hover:text-white transition-colors">GitHub</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Documentation</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Support</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2025 FlowState. Built with ❤️ for the AI community.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
