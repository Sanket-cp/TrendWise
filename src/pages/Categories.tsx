
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";

const categories = [
  {
    name: "Technology",
    description: "Latest trends in AI, software development, and digital innovation",
    count: 12,
    color: "bg-blue-500",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400"
  },
  {
    name: "Business",
    description: "Entrepreneurship, market trends, and business strategy insights",
    count: 8,
    color: "bg-green-500",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
  },
  {
    name: "Lifestyle",
    description: "Health, wellness, and sustainable living practices",
    count: 15,
    color: "bg-purple-500",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400"
  },
  {
    name: "Finance",
    description: "Investment strategies, cryptocurrency, and financial planning",
    count: 6,
    color: "bg-yellow-500",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400"
  },
  {
    name: "Health",
    description: "Mental health, fitness, and medical breakthroughs",
    count: 10,
    color: "bg-red-500",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400"
  },
  {
    name: "Automotive",
    description: "Electric vehicles, automotive technology, and transportation",
    count: 4,
    color: "bg-indigo-500",
    image: "https://images.unsplash.com/photo-1593941707882-a5bac6861f75?w=400"
  }
];

const Categories = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      
      {/* Header */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Browse Categories
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore articles organized by topics that interest you most. Stay updated with the latest trends and insights.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="px-4 max-w-7xl mx-auto pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Card key={category.name} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <Badge className={`${category.color} text-white`}>
                    {category.count} Articles
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {category.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {category.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Content Statistics
            </h2>
            <p className="text-gray-600">
              Our growing collection of expert insights and trending topics
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">55+</div>
              <div className="text-gray-600">Total Articles</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">6</div>
              <div className="text-gray-600">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">15</div>
              <div className="text-gray-600">Expert Authors</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">12</div>
              <div className="text-gray-600">Trending Topics</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Categories;
