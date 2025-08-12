import { Mic, FileText, Zap, Brain, Globe, Shield } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Generation",
    description: "Advanced AI understands your prompts and creates engaging, natural-sounding podcast content."
  },
  {
    icon: Mic,
    title: "High-Quality Audio",
    description: "Professional-grade audio generation with multiple voice options and natural speech patterns."
  },
  {
    icon: FileText,
    title: "Smart Transcriptions",
    description: "Get accurate transcripts alongside your audio, perfect for accessibility and content repurposing."
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Generate podcasts in minutes, not hours. Our optimized AI ensures quick turnaround times."
  },
  {
    icon: Globe,
    title: "Multi-Language Support",
    description: "Create content in 30+ languages with native-quality pronunciation and cultural context."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security and privacy protection for your content and data."
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Powerful Features for Content Creators
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to create professional podcasts with AI. From idea to audio in minutes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 bg-card rounded-2xl shadow-card hover:shadow-elegant transition-smooth border border-border/50 hover:border-primary/20"
            >
              <div className="mb-6">
                <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:shadow-glow transition-smooth">
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};