
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Twitter, Linkedin, Github } from "lucide-react";
import Navbar from "@/components/Navbar";

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "AI Content Strategist",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300",
    bio: "Sarah leads our AI content generation with 8+ years in tech writing and machine learning."
  },
  {
    name: "Michael Chen",
    role: "Trend Analysis Expert",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300",
    bio: "Michael specializes in identifying emerging trends across industries using data analytics."
  },
  {
    name: "Emily Rodriguez",
    role: "SEO & Content Optimization",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300",
    bio: "Emily ensures our content reaches the right audience with advanced SEO strategies."
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium">
            🚀 About TrendWise
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Empowering Content Creation with
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}AI Intelligence
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            TrendWise combines artificial intelligence with human expertise to deliver trending topics, 
            insightful articles, and data-driven content that keeps you ahead of the curve.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We believe that staying informed shouldn't be overwhelming. In a world where information moves 
              at lightning speed, TrendWise serves as your intelligent filter, delivering only the most 
              relevant and impactful content.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our AI-powered platform analyzes thousands of data points daily to identify emerging trends, 
              generate insights, and create content that matters to your personal and professional growth.
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">AI-Powered</Badge>
              <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">Data-Driven</Badge>
              <Badge className="bg-green-100 text-green-800 hover:bg-green-200">SEO Optimized</Badge>
              <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200">Real-time Analysis</Badge>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600"
              alt="Team collaboration"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Impact by Numbers
            </h2>
            <p className="text-gray-600">
              Our commitment to quality content and user satisfaction
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">10K+</div>
              <div className="text-gray-600">Articles Generated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600">Trending Topics Daily</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">99%</div>
              <div className="text-gray-600">SEO Optimized</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">24/7</div>
              <div className="text-gray-600">Content Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-600">
            The experts behind TrendWise's intelligent content platform
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.name} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <CardTitle className="text-xl font-bold text-gray-900">
                  {member.name}
                </CardTitle>
                <Badge variant="secondary" className="w-fit mx-auto">
                  {member.role}
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  {member.bio}
                </p>
                <div className="flex justify-center space-x-3">
                  <Button variant="ghost" size="sm">
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Get in Touch</h2>
          <p className="text-xl text-blue-100 mb-8">
            Have questions about TrendWise or want to collaborate? We'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3">
              <Mail className="h-5 w-5 mr-2" />
              Contact Us
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-3">
              Join Our Newsletter
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
