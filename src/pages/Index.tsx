
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, User } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ArticleCard from "@/components/ArticleCard";
import Hero from "@/components/Hero";

// Mock data for articles - in production this would come from MongoDB
const mockArticles = [
  {
    id: 1,
    title: "The Rise of AI in Content Creation: What Writers Need to Know",
    excerpt: "Artificial Intelligence is revolutionizing how we create content. From automated writing to personalized recommendations, discover the trends shaping the future of digital publishing.",
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500",
    author: "Sarah Johnson",
    publishedAt: "2024-01-15",
    category: "Technology",
    readTime: "5 min read",
    trending: true
  },
  {
    id: 2,
    title: "Sustainable Living Trends: Green Choices That Actually Work",
    excerpt: "Explore practical sustainable living practices that are gaining momentum worldwide. From zero-waste kitchens to renewable energy solutions.",
    thumbnail: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=500",
    author: "Michael Chen",
    publishedAt: "2024-01-14",
    category: "Lifestyle",
    readTime: "7 min read",
    trending: false
  },
  {
    id: 3,
    title: "Remote Work Evolution: The New Workplace Dynamics",
    excerpt: "How remote work culture is reshaping business operations and employee satisfaction. Insights from companies leading the digital transformation.",
    thumbnail: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500",
    author: "Emily Rodriguez",
    publishedAt: "2024-01-13",
    category: "Business",
    readTime: "6 min read",
    trending: true
  },
  {
    id: 4,
    title: "Cryptocurrency Market Trends: What to Watch in 2024",
    excerpt: "Navigate the evolving cryptocurrency landscape with expert insights on emerging trends, regulations, and investment opportunities.",
    thumbnail: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500",
    author: "David Kim",
    publishedAt: "2024-01-12",
    category: "Finance",
    readTime: "8 min read",
    trending: false
  },
  {
    id: 5,
    title: "Mental Health in the Digital Age: Finding Balance",
    excerpt: "Understanding the impact of digital technology on mental well-being and strategies for maintaining healthy boundaries in our connected world.",
    thumbnail: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500",
    author: "Dr. Lisa Thompson",
    publishedAt: "2024-01-11",
    category: "Health",
    readTime: "9 min read",
    trending: true
  },
  {
    id: 6,
    title: "The Future of Electric Vehicles: Market Predictions",
    excerpt: "Analyzing the rapid growth of the EV market, upcoming innovations, and the infrastructure developments driving the transition to electric transportation.",
    thumbnail: "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=500",
    author: "Alex Wang",
    publishedAt: "2024-01-10",
    category: "Automotive",
    readTime: "6 min read",
    trending: false
  }
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredArticles, setFilteredArticles] = useState(mockArticles);

  const categories = ["All", "Technology", "Lifestyle", "Business", "Finance", "Health", "Automotive"];

  useEffect(() => {
    let filtered = mockArticles;
    
    if (selectedCategory !== "All") {
      filtered = filtered.filter(article => article.category === selectedCategory);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(article => 
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredArticles(filtered);
  }, [searchTerm, selectedCategory]);

  const trendingArticles = mockArticles.filter(article => article.trending);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      
      <Hero />
      
      {/* Trending Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>
          <h2 className="text-3xl font-bold text-gray-900">Trending Now</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {trendingArticles.map((article) => (
            <ArticleCard key={article.id} article={article} featured={true} />
          ))}
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12 text-lg"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className="h-12"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles Section */}
      <section className="py-8 px-4 max-w-7xl mx-auto mb-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1 h-8 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full"></div>
          <h2 className="text-3xl font-bold text-gray-900">
            {selectedCategory === "All" ? "Latest Articles" : `${selectedCategory} Articles`}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Stay Updated with TrendWise</h2>
          <p className="text-xl text-blue-100 mb-8">
            Get the latest trending articles and insights delivered to your inbox weekly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              placeholder="Enter your email"
              className="h-12 text-lg bg-white/90 border-0"
            />
            <Button className="h-12 bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">TrendWise</h3>
              <p className="text-gray-400">
                Your source for trending topics and AI-generated insights on what matters most.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Technology</a></li>
                <li><a href="#" className="hover:text-white">Business</a></li>
                <li><a href="#" className="hover:text-white">Lifestyle</a></li>
                <li><a href="#" className="hover:text-white">Finance</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Twitter</a></li>
                <li><a href="#" className="hover:text-white">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white">Newsletter</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TrendWise. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
