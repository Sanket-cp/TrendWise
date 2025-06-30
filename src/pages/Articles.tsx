
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import ArticleCard from "@/components/ArticleCard";

// Mock data - same as Index but structured for articles page
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
    thumbnail: "https://images.unsplash.com/photo-1593941707882-a5bac6861f75?w=500",
    author: "Alex Wang",
    publishedAt: "2024-01-10",
    category: "Automotive",
    readTime: "6 min read",
    trending: false
  }
];

const Articles = () => {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      
      {/* Header */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            All Articles
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover insights, trends, and expert analysis across various topics that matter to you.
          </p>
        </div>
        
        {/* Search and Filter */}
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

      {/* Articles Grid */}
      <section className="px-4 max-w-7xl mx-auto pb-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>
          <h2 className="text-2xl font-bold text-gray-900">
            {selectedCategory === "All" ? `${filteredArticles.length} Articles` : `${filteredArticles.length} ${selectedCategory} Articles`}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
        
        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Articles;
