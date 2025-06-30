
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface Article {
  id: number;
  title: string;
  excerpt: string;
  thumbnail: string;
  author: string;
  publishedAt: string;
  category: string;
  readTime: string;
  trending?: boolean;
}

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

const ArticleCard = ({ article, featured = false }: ArticleCardProps) => {
  return (
    <Link to={`/article/${article.id}`}>
      <Card className={`group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
        featured ? 'ring-2 ring-blue-500/20' : ''
      }`}>
        <div className="relative">
          <img
            src={article.thumbnail}
            alt={article.title}
            className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
          />
          {article.trending && (
            <Badge className="absolute top-3 left-3 bg-red-500 hover:bg-red-600">
              🔥 Trending
            </Badge>
          )}
          <Badge 
            variant="secondary" 
            className="absolute top-3 right-3 bg-white/90 text-gray-700"
          >
            {article.category}
          </Badge>
        </div>
        
        <CardHeader className="pb-2">
          <h3 className={`font-bold leading-tight group-hover:text-blue-600 transition-colors ${
            featured ? 'text-lg' : 'text-base'
          }`}>
            {article.title}
          </h3>
        </CardHeader>
        
        <CardContent className="pt-0">
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {article.excerpt}
          </p>
          
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">
                  {article.author.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <span>{article.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>{article.readTime}</span>
              <span>•</span>
              <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ArticleCard;
