
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Share2, MessageCircle, Send, Link, Check } from 'lucide-react';

interface ShareButtonProps {
  title: string;
  url?: string;
  text?: string;
}

const ShareButton = ({ title, url, text }: ShareButtonProps) => {
  const [copied, setCopied] = useState(false);
  const shareUrl = url || window.location.href;
  const shareText = text || title;

  const handleWhatsAppShare = () => {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`${shareText}\n${shareUrl}`)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleTelegramShare = () => {
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
    window.open(telegramUrl, '_blank');
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareText,
          url: shareUrl,
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="flex items-center space-x-2">
          <Share2 className="h-4 w-4" />
          <span>Share</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48 bg-white border shadow-lg">
        <DropdownMenuItem onClick={handleWhatsAppShare} className="flex items-center space-x-2 cursor-pointer">
          <MessageCircle className="h-4 w-4 text-green-600" />
          <span>Share on WhatsApp</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleTelegramShare} className="flex items-center space-x-2 cursor-pointer">
          <Send className="h-4 w-4 text-blue-500" />
          <span>Share on Telegram</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleCopyLink} className="flex items-center space-x-2 cursor-pointer">
          {copied ? (
            <>
              <Check className="h-4 w-4 text-green-600" />
              <span>Link Copied!</span>
            </>
          ) : (
            <>
              <Link className="h-4 w-4" />
              <span>Copy Link</span>
            </>
          )}
        </DropdownMenuItem>
        {navigator.share && (
          <DropdownMenuItem onClick={handleNativeShare} className="flex items-center space-x-2 cursor-pointer">
            <Share2 className="h-4 w-4" />
            <span>More Options</span>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ShareButton;
