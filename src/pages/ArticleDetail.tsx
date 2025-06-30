
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { User } from "lucide-react";
import Navbar from "@/components/Navbar";
import ShareButton from "@/components/ShareButton";
import LanguageSelector, { Language } from "@/components/LanguageSelector";
import { translateContent, getDefaultLanguage, Translations } from "@/utils/translations";

// Mock article data - in production this would come from MongoDB
const mockArticleData: Translations = {
  title: "The Rise of AI in Content Creation: What Writers Need to Know",
  content: `
    <p>Artificial Intelligence is fundamentally transforming the landscape of content creation, ushering in an era where machines can assist, enhance, and sometimes even replace human writers in various capacities. This technological revolution is not just a distant future concept—it's happening right now, and its implications are profound for writers, marketers, and content creators across all industries.</p>

    <h2>The Current State of AI Content Creation</h2>
    <p>Today's AI writing tools have evolved far beyond simple text generators. Advanced language models can now produce coherent, contextually appropriate content that often rivals human-written material in quality and engagement. From blog posts and social media content to technical documentation and creative writing, AI is making its mark across diverse content formats.</p>

    <h2>Key Benefits for Content Creators</h2>
    <ul>
      <li><strong>Speed and Efficiency:</strong> AI can generate first drafts in minutes rather than hours</li>
      <li><strong>Idea Generation:</strong> Overcome writer's block with AI-powered brainstorming</li>
      <li><strong>SEO Optimization:</strong> Automated keyword integration and content structure</li>
      <li><strong>Consistency:</strong> Maintain brand voice across large volumes of content</li>
      <li><strong>Research Assistance:</strong> Quick fact-checking and topic exploration</li>
    </ul>

    <h2>The Human Element Remains Crucial</h2>
    <p>While AI capabilities are impressive, human creativity, emotional intelligence, and cultural understanding remain irreplaceable. The most successful content strategies combine AI efficiency with human insight, creating a collaborative approach that leverages the strengths of both.</p>

    <blockquote>
      "The future of content creation isn't about replacing humans with AI—it's about empowering humans with AI to create better content faster than ever before."
    </blockquote>

    <h2>Practical Implementation Strategies</h2>
    <p>Writers looking to integrate AI into their workflow should start small. Begin with ideation and research, then gradually expand to first-draft generation and editing assistance. The key is finding the right balance between automation and human oversight.</p>

    <h2>Looking Ahead</h2>
    <p>As AI technology continues to advance, we can expect even more sophisticated content creation capabilities. However, the writers who will thrive are those who adapt and learn to work alongside these tools, using them to enhance rather than replace their creative abilities.</p>
  `,
  author: "Sarah Johnson",
  publishedAt: "2024-01-15",
  category: "Technology",
  readTime: "5 min read",
  tags: ["AI", "Content Creation", "Writing", "Technology", "Future of Work"]
};

const mockArticle = {
  id: 1,
  thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
  trending: true,
  ...mockArticleData
};

const ArticleDetail = () => {
  const { id } = useParams();
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');
  const [translatedContent, setTranslatedContent] = useState<Translations>(mockArticleData);
  const [isTranslating, setIsTranslating] = useState(false);

  useEffect(() => {
    setCurrentLanguage(getDefaultLanguage());
  }, []);

  useEffect(() => {
    const handleTranslation = async () => {
      if (currentLanguage === 'en') {
        setTranslatedContent(mockArticleData);
        return;
      }

      setIsTranslating(true);
      try {
        const translated = await translateContent(mockArticleData, currentLanguage);
        setTranslatedContent(translated);
      } catch (error) {
        console.error('Translation failed:', error);
        setTranslatedContent(mockArticleData);
      } finally {
        setIsTranslating(false);
      }
    };

    handleTranslation();
  }, [currentLanguage]);

  const handleLanguageChange = (language: Language) => {
    setCurrentLanguage(language);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <article className="max-w-4xl mx-auto px-4 py-8">
        {/* Article Header */}
        <header className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Badge variant="secondary">{translatedContent.category}</Badge>
              {mockArticle.trending && (
                <Badge className="bg-red-500 hover:bg-red-600">
                  🔥 {currentLanguage === 'hi' ? 'ट्रेंडिंग' : currentLanguage === 'bn' ? 'ট্রেন্ডিং' : 'Trending'}
                </Badge>
              )}
            </div>
            <LanguageSelector 
              currentLanguage={currentLanguage} 
              onLanguageChange={handleLanguageChange}
            />
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {isTranslating ? 'Translating...' : translatedContent.title}
          </h1>
          
          <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">
                  {translatedContent.author.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <div className="font-semibold text-gray-900">{translatedContent.author}</div>
                <div className="text-sm text-gray-600">
                  {new Date(translatedContent.publishedAt).toLocaleDateString()} • {translatedContent.readTime}
                </div>
              </div>
            </div>
            
            <div className="flex space-x-2">
              <ShareButton 
                title={translatedContent.title}
                text={`Check out this article: ${translatedContent.title}`}
              />
              <Button variant="outline" size="sm">
                {currentLanguage === 'hi' ? 'सेव करें' : currentLanguage === 'bn' ? 'সেভ করুন' : 'Save'}
              </Button>
            </div>
          </div>
          
          <img
            src={mockArticle.thumbnail}
            alt={translatedContent.title}
            className="w-full h-64 lg:h-96 object-cover rounded-xl shadow-lg"
          />
        </header>

        {/* Article Content */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          {isTranslating ? (
            <div className="flex items-center justify-center py-12">
              <div className="text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p className="text-gray-600">
                  {currentLanguage === 'hi' ? 'अनुवाद हो रहा है...' : 
                   currentLanguage === 'bn' ? 'অনুবাদ হচ্ছে...' : 'Translating...'}
                </p>
              </div>
            </div>
          ) : (
            <div 
              className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900 prose-blockquote:border-blue-500 prose-blockquote:text-gray-700 prose-ul:text-gray-700"
              dangerouslySetInnerHTML={{ __html: translatedContent.content }}
            />
          )}
        </div>

        {/* Tags */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">
            {currentLanguage === 'hi' ? 'टैग्स' : currentLanguage === 'bn' ? 'ট্যাগ' : 'Tags'}
          </h3>
          <div className="flex flex-wrap gap-2">
            {translatedContent.tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="px-3 py-1">
                #{tag}
              </Badge>
            ))}
          </div>
        </div>

        <Separator className="my-8" />

        {/* Author Bio */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xl font-bold">
                  {translatedContent.author.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">{translatedContent.author}</h3>
                <p className="text-gray-600 mb-4">
                  {currentLanguage === 'hi' 
                    ? 'सारा एक तकनीकी लेखिका और एआई शोधकर्ता हैं जिनके पास उभरती प्रौद्योगिकियों को कवर करने का 8 साल से अधिक का अनुभव है। वह जटिल तकनीकी विषयों को रोजमर्रा के पाठकों के लिए सुलभ बनाने में विशेषज्ञ हैं।'
                    : currentLanguage === 'bn'
                    ? 'সারা একজন প্রযুক্তি লেখক এবং এআই গবেষক যার উদীয়মান প্রযুক্তি কভার করার ক্ষেত্রে 8 বছরেরও বেশি অভিজ্ঞতা রয়েছে। তিনি জটিল প্রযুক্তিগত বিষয়গুলিকে সাধারণ পাঠকদের কাছে অ্যাক্সেসযোগ্য করে তোলার ক্ষেত্রে বিশেষজ্ঞ।'
                    : 'Sarah is a technology writer and AI researcher with over 8 years of experience in covering emerging technologies. She specializes in making complex tech topics accessible to everyday readers.'
                  }
                </p>
                <Button variant="outline" size="sm">
                  <User className="h-4 w-4 mr-2" />
                  {currentLanguage === 'hi' ? 'लेखक को फॉलो करें' : 
                   currentLanguage === 'bn' ? 'লেখক ফলো করুন' : 'Follow Author'}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Comments Section */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4">
              {currentLanguage === 'hi' ? 'टिप्पणियाँ' : 
               currentLanguage === 'bn' ? 'মন্তব্য' : 'Comments'}
            </h3>
            <div className="text-center py-8 text-gray-500">
              <User className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p className="mb-4">
                {currentLanguage === 'hi' 
                  ? 'चर्चा में शामिल होने के लिए Google के साथ साइन इन करें'
                  : currentLanguage === 'bn'
                  ? 'আলোচনায় যোগ দিতে Google দিয়ে সাইন ইন করুন'
                  : 'Sign in with Google to join the discussion'
                }
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700">
                {currentLanguage === 'hi' ? 'Google के साथ साइन इन करें' : 
                 currentLanguage === 'bn' ? 'Google দিয়ে সাইন ইন করুন' : 'Sign in with Google'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </article>
    </div>
  );
};

export default ArticleDetail;
