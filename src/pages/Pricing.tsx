import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star, Zap, Crown } from "lucide-react";
import { Navigation } from "@/components/ui/navigation";

const plans = [
  {
    name: "Starter",
    price: "$9",
    period: "/month",
    description: "Perfect for individual creators and hobbyists",
    icon: Star,
    features: [
      "10 podcast generations per month",
      "Up to 15 minutes per podcast",
      "Basic voice selection",
      "Standard transcript quality",
      "Email support",
      "MP3 downloads"
    ],
    popular: false,
    cta: "Start Free Trial"
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "Ideal for content creators and small teams",
    icon: Zap,
    features: [
      "50 podcast generations per month",
      "Up to 60 minutes per podcast",
      "Premium voice library (20+ voices)",
      "High-quality transcripts",
      "Priority support",
      "Multiple export formats",
      "Custom voice training",
      "Analytics dashboard",
      "Team collaboration (3 users)"
    ],
    popular: true,
    cta: "Start Pro Trial"
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations with custom needs",
    icon: Crown,
    features: [
      "Unlimited podcast generations",
      "No time limits",
      "Full voice library + custom voices",
      "API access",
      "24/7 dedicated support",
      "On-premise deployment options",
      "Custom integrations",
      "Advanced analytics",
      "Unlimited team members",
      "SLA guarantee",
      "White-label options"
    ],
    popular: false,
    cta: "Contact Sales"
  }
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gradient-secondary">
      <Navigation />
      
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Choose Your Plan
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Start with our free trial, then pick the plan that fits your podcast creation needs
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative shadow-card hover:shadow-elegant transition-smooth ${
                plan.popular 
                  ? "border-primary shadow-glow scale-105" 
                  : "border-border/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="gradient-primary text-white px-6 py-2 rounded-full text-sm font-semibold shadow-elegant">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <div className={`mx-auto mb-4 p-3 rounded-xl ${
                  plan.popular ? "gradient-primary shadow-glow" : "bg-muted"
                }`}>
                  <plan.icon className={`h-8 w-8 ${
                    plan.popular ? "text-white" : "text-primary"
                  }`} />
                </div>
                
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <CardDescription className="text-base">{plan.description}</CardDescription>
                
                <div className="flex items-baseline justify-center mt-6">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground ml-1">{plan.period}</span>
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="mt-0.5">
                        <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      </div>
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full transition-smooth ${
                    plan.popular 
                      ? "gradient-primary shadow-elegant hover:shadow-glow" 
                      : "variant-outline"
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-card rounded-2xl p-8 shadow-card max-w-4xl mx-auto border border-border/50">
            <h3 className="text-2xl font-bold mb-4">All plans include:</h3>
            <div className="grid md:grid-cols-3 gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span>30+ Languages supported</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span>Commercial usage rights</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span>99.9% uptime guarantee</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Need a custom solution? We'd love to help.
          </p>
          <Button variant="outline" size="lg">
            Contact our sales team
          </Button>
        </div>
      </div>
    </div>
  );
}