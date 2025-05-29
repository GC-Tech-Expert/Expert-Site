
import React from "react";
import { motion } from "framer-motion";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Menu,
  X,
  Star,
  Zap,
  Shield,
  BarChart3,
  Clock,
  Users,
  Github,
  Twitter,
  Linkedin
} from "lucide-react";

const App = () => {
  const { toast } = useToast();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const handleDemoRequest = () => {
    toast({
      title: "Demo requested!",
      description: "Our team will contact you shortly to schedule your demo.",
    });
  };

  const handleSubscribe = () => {
    toast({
      title: "Thanks for subscribing!",
      description: "You'll receive our newsletter with the latest updates.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Toaster />
      
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex-shrink-0"
              >
                <span className="text-2xl font-bold gradient-text">Nexus</span>
              </motion.div>
              <nav className="hidden md:ml-10 md:flex md:items-center md:space-x-8">
                <motion.a 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  href="#features" 
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  Features
                </motion.a>
                <motion.a 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  href="#pricing" 
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  Pricing
                </motion.a>
                <motion.a 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  href="#testimonials" 
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  Testimonials
                </motion.a>
                <motion.a 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  href="#faq" 
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  FAQ
                </motion.a>
              </nav>
            </div>
            <div className="hidden md:flex md:items-center md:space-x-4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Button variant="outline" className="text-sm">
                  Log in
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Button className="text-sm">
                  Sign up
                </Button>
              </motion.div>
            </div>
            <div className="md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground focus:outline-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-b border-border">
              <a
                href="#features"
                className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#pricing"
                className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#testimonials"
                className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonials
              </a>
              <a
                href="#faq"
                className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <div className="pt-4 pb-3 border-t border-border">
                <div className="flex items-center px-5">
                  <Button variant="outline" className="w-full mr-2">
                    Log in
                  </Button>
                  <Button className="w-full">
                    Sign up
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 gradient-bg opacity-50"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI3NjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PHBhdGggZD0iTTAgMGgyMHYyMEgweiIgZmlsbD0ibm9uZSIvPjxjaXJjbGUgY3g9IjEiIGN5PSIxIiByPSIxIiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+')] opacity-10"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
                  <span className="gradient-text">Streamline Your Workflow</span> with Our Modern SaaS Platform
                </h1>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                  Boost productivity and collaboration with our intuitive tools designed for modern teams. Get started today and transform how your team works.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row justify-center gap-4"
              >
                <Button size="lg" className="text-base px-8 py-6">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-base px-8 py-6"
                  onClick={handleDemoRequest}
                >
                  Request Demo
                </Button>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-16 relative"
            >
              <div className="relative mx-auto max-w-5xl overflow-hidden rounded-xl shadow-2xl">
                <div className="gradient-border">
                  <div className="card-shine bg-secondary/50 backdrop-blur-sm p-1">
                    <img  
                      alt="Nexus dashboard interface showing analytics, tasks and team collaboration features" 
                      className="w-full rounded-lg"
                     src="https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
        </section>

        {/* Logos Section */}
        <section className="py-12 border-y border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <p className="text-sm font-medium text-muted-foreground">TRUSTED BY INNOVATIVE COMPANIES</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.5 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="h-8 flex items-center justify-center"
                >
                  <div className="text-xl font-bold text-muted-foreground">COMPANY {i}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 sm:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                  Powerful Features for Modern Teams
                </h2>
                <p className="text-lg text-muted-foreground">
                  Everything you need to streamline your workflow, boost productivity, and enhance collaboration.
                </p>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Zap className="h-6 w-6 text-purple-400" />,
                  title: "Lightning Fast Performance",
                  description: "Experience blazing fast load times and responsive interactions that keep your team productive."
                },
                {
                  icon: <Shield className="h-6 w-6 text-blue-400" />,
                  title: "Enterprise-Grade Security",
                  description: "Rest easy with our robust security measures, including end-to-end encryption and regular audits."
                },
                {
                  icon: <BarChart3 className="h-6 w-6 text-indigo-400" />,
                  title: "Advanced Analytics",
                  description: "Gain valuable insights with comprehensive analytics and customizable dashboards."
                },
                {
                  icon: <Clock className="h-6 w-6 text-pink-400" />,
                  title: "Automated Workflows",
                  description: "Save time with intelligent automation that streamlines repetitive tasks and processes."
                },
                {
                  icon: <Users className="h-6 w-6 text-cyan-400" />,
                  title: "Seamless Collaboration",
                  description: "Work together effortlessly with real-time collaboration tools and intuitive sharing features."
                },
                {
                  icon: <CheckCircle2 className="h-6 w-6 text-green-400" />,
                  title: "Customizable Workspaces",
                  description: "Tailor your workspace to fit your team's unique needs with flexible customization options."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="gradient-border h-full">
                    <div className="card-shine bg-secondary/30 backdrop-blur-sm p-6 rounded-lg h-full">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-background/50 backdrop-blur-sm mb-5">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Showcase Section */}
        <section className="py-24 sm:py-32 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                  Transform How Your Team Works
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our platform brings together all the tools your team needs in one seamless experience. No more switching between apps or losing track of important information.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Centralize team communication and knowledge",
                    "Track projects from inception to completion",
                    "Automate routine tasks and approvals",
                    "Generate insightful reports in seconds"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
                <Button size="lg">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="gradient-border">
                  <div className="card-shine bg-secondary/50 backdrop-blur-sm p-1 rounded-lg">
                    <img  
                      alt="Team collaboration interface showing project management and communication features" 
                      className="w-full rounded-lg"
                     src="https://images.unsplash.com/photo-1651009188116-bb5f80eaf6aa" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24 sm:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                  Simple, Transparent Pricing
                </h2>
                <p className="text-lg text-muted-foreground">
                  Choose the plan that's right for your team. All plans include a 14-day free trial.
                </p>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: "Starter",
                  price: "$12",
                  description: "Perfect for individuals and small teams just getting started.",
                  features: [
                    "Up to 5 team members",
                    "5GB storage",
                    "Basic analytics",
                    "24/7 email support",
                    "3 workspaces"
                  ],
                  popular: false
                },
                {
                  name: "Professional",
                  price: "$29",
                  description: "Ideal for growing teams that need more power and flexibility.",
                  features: [
                    "Up to 20 team members",
                    "50GB storage",
                    "Advanced analytics",
                    "Priority support",
                    "Unlimited workspaces",
                    "Custom integrations",
                    "API access"
                  ],
                  popular: true
                },
                {
                  name: "Enterprise",
                  price: "$79",
                  description: "For organizations that need ultimate scalability and security.",
                  features: [
                    "Unlimited team members",
                    "500GB storage",
                    "Enterprise analytics",
                    "Dedicated support",
                    "Unlimited workspaces",
                    "Custom integrations",
                    "API access",
                    "SSO & advanced security",
                    "Custom onboarding"
                  ],
                  popular: false
                }
              ].map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative ${plan.popular ? 'pricing-popular z-10 md:-mt-4 md:-mb-4' : ''}`}
                >
                  <div className={`h-full bg-secondary/30 backdrop-blur-sm rounded-lg p-8 ${plan.popular ? 'md:py-12' : ''}`}>
                    {plan.popular && (
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary px-4 py-1 rounded-full text-xs font-semibold">
                        MOST POPULAR
                      </div>
                    )}
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                      <div className="flex items-end justify-center">
                        <span className="text-4xl font-extrabold">{plan.price}</span>
                        <span className="text-muted-foreground ml-1">/month per user</span>
                      </div>
                      <p className="mt-3 text-sm text-muted-foreground">{plan.description}</p>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full ${plan.popular ? '' : 'bg-secondary hover:bg-secondary/80'}`}
                      variant={plan.popular ? "default" : "outline"}
                    >
                      Get Started
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <p className="text-muted-foreground mb-6">
                Need a custom plan for your enterprise? Contact our sales team.
              </p>
              <Button variant="outline">
                Contact Sales
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-24 sm:py-32 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                  What Our Customers Say
                </h2>
                <p className="text-lg text-muted-foreground">
                  Don't just take our word for it. Here's what teams are saying about their experience with our platform.
                </p>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  quote: "Nexus has completely transformed how our team collaborates. We've seen a 40% increase in productivity since implementing it.",
                  author: "Sarah Johnson",
                  role: "Product Manager, TechCorp",
                  rating: 5
                },
                {
                  quote: "The automation features alone have saved us countless hours each week. The interface is intuitive and our team was up and running in no time.",
                  author: "Michael Chen",
                  role: "CTO, StartupX",
                  rating: 5
                },
                {
                  quote: "We evaluated several platforms before choosing Nexus. The combination of powerful features and ease of use made it the clear winner.",
                  author: "Emily Rodriguez",
                  role: "Operations Director, GrowthCo",
                  rating: 5
                },
                {
                  quote: "The customer support team is exceptional. They've been responsive and helpful throughout our onboarding process.",
                  author: "David Kim",
                  role: "Team Lead, InnovateInc",
                  rating: 4
                },
                {
                  quote: "Nexus has become an essential part of our daily workflow. I can't imagine running our team without it now.",
                  author: "Lisa Thompson",
                  role: "Marketing Manager, BrandWorks",
                  rating: 5
                },
                {
                  quote: "The analytics features provide insights we never had before. It's helped us make data-driven decisions that have improved our outcomes.",
                  author: "James Wilson",
                  role: "Data Analyst, InsightCo",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="gradient-border h-full">
                    <div className="card-shine bg-background/50 backdrop-blur-sm p-6 rounded-lg h-full">
                      <div className="flex mb-4">
                        {Array(testimonial.rating).fill(0).map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                        ))}
                      </div>
                      <p className="mb-6 text-muted-foreground">"{testimonial.quote}"</p>
                      <div>
                        <p className="font-semibold">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-24 sm:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                  Frequently Asked Questions
                </h2>
                <p className="text-lg text-muted-foreground">
                  Find answers to common questions about our platform, pricing, and support.
                </p>
              </motion.div>
            </div>

            <div className="max-w-3xl mx-auto">
              {[
                {
                  question: "How does the 14-day free trial work?",
                  answer: "Our 14-day free trial gives you full access to all features of your selected plan. No credit card is required to start, and you can cancel anytime during the trial period with no obligation."
                },
                {
                  question: "Can I change plans later?",
                  answer: "Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll be billed the prorated difference immediately. When downgrading, the new rate will apply at the start of your next billing cycle."
                },
                {
                  question: "Is there a limit to how many team members I can add?",
                  answer: "The Starter plan supports up to 5 team members, the Professional plan supports up to 20, and the Enterprise plan has no limit on team members."
                },
                {
                  question: "Do you offer discounts for non-profits or educational institutions?",
                  answer: "Yes, we offer special pricing for qualified non-profit organizations and educational institutions. Please contact our sales team for more information."
                },
                {
                  question: "How secure is my data on your platform?",
                  answer: "We take security seriously. Your data is encrypted both in transit and at rest. We use industry-standard security practices, conduct regular security audits, and offer features like SSO and 2FA on higher-tier plans."
                },
                {
                  question: "What kind of support do you offer?",
                  answer: "All plans include email support. The Professional plan includes priority support with faster response times, while the Enterprise plan includes dedicated support with a named account manager."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="mb-6"
                >
                  <FaqItem question={faq.question} answer={faq.answer} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 sm:py-32 relative overflow-hidden">
          <div className="absolute inset-0 gradient-bg opacity-30"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI3NjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PHBhdGggZD0iTTAgMGgyMHYyMEgweiIgZmlsbD0ibm9uZSIvPjxjaXJjbGUgY3g9IjEiIGN5PSIxIiByPSIxIiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+')] opacity-10"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  Ready to Transform Your Workflow?
                </h2>
                <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                  Join thousands of teams that have already improved their productivity with our platform.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button size="lg" className="text-base px-8 py-6">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="text-base px-8 py-6"
                    onClick={handleDemoRequest}
                  >
                    Request Demo
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 sm:py-20 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                  Stay Updated
                </h2>
                <p className="text-muted-foreground mb-8">
                  Subscribe to our newsletter for the latest updates, tips, and insights.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <Button onClick={handleSubscribe}>
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  By subscribing, you agree to our Privacy Policy and Terms of Service.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2 lg:col-span-1">
              <span className="text-2xl font-bold gradient-text mb-6 inline-block">Nexus</span>
              <p className="text-muted-foreground mb-6">
                Modern SaaS platform for teams that want to work smarter, not harder.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </div>
            <div>
              <p className="font-semibold mb-4">Product</p>
              <ul className="space-y-3">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Integrations</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Changelog</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Roadmap</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-4">Resources</p>
              <ul className="space-y-3">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Documentation</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Guides</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">API Reference</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Community</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-4">Company</p>
              <ul className="space-y-3">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Careers</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Partners</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Press</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-4">Legal</p>
              <ul className="space-y-3">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">GDPR</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              © 2025 Nexus. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// FAQ Item Component
const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-border pb-4">
      <button
        className="flex justify-between items-center w-full text-left py-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-lg">{question}</span>
        <ChevronDown
          className={`h-5 w-5 text-muted-foreground transition-transform ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="pb-4 text-muted-foreground">
          {answer}
        </div>
      </motion.div>
    </div>
  );
};

export default App;
