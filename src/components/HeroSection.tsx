import { Button } from "@/components/ui/button";
import { ArrowRight, Mic, FileText, Headphones } from "lucide-react";
import { Link } from "react-router-dom";
import heroBackground from "@/assets/hero-background.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 gradient-hero opacity-90" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
          <Mic className="h-6 w-6 text-white" />
        </div>
      </div>
      
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '2s' }}>
        <div className="p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
          <FileText className="h-6 w-6 text-white" />
        </div>
      </div>
      
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '4s' }}>
        <div className="p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
          <Headphones className="h-6 w-6 text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-medium border border-white/20">
            ✨ AI-Powered Podcast Generation
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Transform Ideas into
          <span className="block bg-gradient-to-r from-white via-purple-100 to-blue-100 bg-clip-text text-transparent">
            Professional Podcasts
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
          Generate engaging podcasts from any prompt with AI. Get transcripts, audio, or both. 
          Perfect for content creators, educators, and businesses.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/generate">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-elegant transition-smooth text-lg px-8 py-4">
              Start Creating
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white/30 text-white hover:bg-white/10 backdrop-blur-md transition-smooth text-lg px-8 py-4"
          >
            Watch Demo
          </Button>
        </div>
        
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/60">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>10K+ Podcasts Generated</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span>30+ Languages Supported</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            <span>99.9% Uptime</span>
          </div>
        </div>
      </div>
    </section>
  );
};