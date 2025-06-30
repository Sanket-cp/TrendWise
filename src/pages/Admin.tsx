
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from "@/components/Navbar";

const Admin = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("");
  
  const trendingTopics = [
    { topic: "AI in Healthcare", trend: "Rising", engagement: "High" },
    { topic: "Remote Work Culture", trend: "Stable", engagement: "Medium" },
    { topic: "Cryptocurrency Regulations", trend: "Falling", engagement: "High" },
    { topic: "Sustainable Technology", trend: "Rising", engagement: "Medium" },
    { topic: "Mental Health Apps", trend: "Rising", engagement: "High" }
  ];

  const recentArticles = [
    { id: 1, title: "The Rise of AI in Content Creation", status: "Published", views: "2.3k", engagement: "High" },
    { id: 2, title: "Sustainable Living Trends", status: "Draft", views: "0", engagement: "N/A" },
    { id: 3, title: "Remote Work Evolution", status: "Published", views: "1.8k", engagement: "Medium" },
    { id: 4, title: "Cryptocurrency Market Trends", status: "Scheduled", views: "0", engagement: "N/A" }
  ];

  const handleGenerateContent = async () => {
    setIsGenerating(true);
    // Simulate AI content generation
    await new Promise(resolve => setTimeout(resolve, 3000));
    setIsGenerating(false);
    // In production, this would call the OpenAI API
  };

  const handleCrawlTrends = async () => {
    // Simulate trend crawling
    console.log("Crawling trending topics...");
    // In production, this would use Puppeteer/Cheerio
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage your TrendWise content and monitor performance</p>
        </div>

        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="content">Content Generation</TabsTrigger>
            <TabsTrigger value="trends">Trending Topics</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">Total Articles</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="text-2xl font-bold">247</div>
                  <p className="text-xs text-green-600">+12% from last month</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">Total Views</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="text-2xl font-bold">58.2k</div>
                  <p className="text-xs text-green-600">+8% from last month</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">Trending Topics</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="text-2xl font-bold">15</div>
                  <p className="text-xs text-blue-600">Updated hourly</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">AI Generated</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="text-2xl font-bold">189</div>
                  <p className="text-xs text-purple-600">76% of total content</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Articles */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Articles</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentArticles.map((article) => (
                    <div key={article.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-medium">{article.title}</h3>
                        <div className="flex items-center space-x-4 mt-1 text-sm text-gray-600">
                          <Badge variant={article.status === 'Published' ? 'default' : 'secondary'}>
                            {article.status}
                          </Badge>
                          <span>{article.views} views</span>
                          <span>Engagement: {article.engagement}</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">Edit</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="content" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* AI Content Generator */}
              <Card>
                <CardHeader>
                  <CardTitle>AI Content Generator</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Topic</label>
                    <Input placeholder="Enter topic or keyword" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Content Type</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select content type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="article">Full Article</SelectItem>
                        <SelectItem value="summary">Summary</SelectItem>
                        <SelectItem value="listicle">Listicle</SelectItem>
                        <SelectItem value="guide">How-to Guide</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Target Length</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select length" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="short">Short (500-800 words)</SelectItem>
                        <SelectItem value="medium">Medium (800-1500 words)</SelectItem>
                        <SelectItem value="long">Long (1500+ words)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Additional Instructions</label>
                    <Textarea placeholder="Any specific requirements or style preferences..." />
                  </div>
                  
                  <Button 
                    onClick={handleGenerateContent} 
                    disabled={isGenerating}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    {isGenerating ? "Generating Content..." : "Generate Article"}
                  </Button>
                </CardContent>
              </Card>

              {/* Manual Content Creation */}
              <Card>
                <CardHeader>
                  <CardTitle>Manual Content Creation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Title</label>
                    <Input placeholder="Article title" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Category</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technology">Technology</SelectItem>
                        <SelectItem value="business">Business</SelectItem>
                        <SelectItem value="lifestyle">Lifestyle</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="health">Health</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Content</label>
                    <Textarea 
                      placeholder="Write your article content..." 
                      className="min-h-32"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Tags</label>
                    <Input placeholder="Enter tags separated by commas" />
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button variant="outline" className="flex-1">Save Draft</Button>
                    <Button className="flex-1">Publish</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="trends" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Trending Topics</h2>
              <Button onClick={handleCrawlTrends} variant="outline">
                Refresh Trends
              </Button>
            </div>
            
            <Card>
              <CardContent className="p-0">
                <div className="space-y-0">
                  {trendingTopics.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-6 border-b last:border-b-0">
                      <div className="flex-1">
                        <h3 className="font-medium">{item.topic}</h3>
                        <div className="flex items-center space-x-4 mt-1">
                          <Badge variant={item.trend === 'Rising' ? 'default' : item.trend === 'Falling' ? 'destructive' : 'secondary'}>
                            {item.trend}
                          </Badge>
                          <span className="text-sm text-gray-600">Engagement: {item.engagement}</span>
                        </div>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setSelectedTopic(item.topic)}
                      >
                        Generate Article
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Content Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Average Page Views</span>
                      <span className="font-semibold">2,847</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Average Time on Page</span>
                      <span className="font-semibold">3:42</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Bounce Rate</span>
                      <span className="font-semibold">34%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Social Shares</span>
                      <span className="font-semibold">1,249</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Top Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {['Technology', 'Business', 'Lifestyle', 'Finance'].map((category, index) => (
                      <div key={category} className="flex items-center justify-between">
                        <span>{category}</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 h-2 bg-gray-200 rounded-full">
                            <div 
                              className="h-full bg-blue-600 rounded-full" 
                              style={{ width: `${100 - index * 20}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium">{100 - index * 20}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
