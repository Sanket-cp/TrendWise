
import { Language } from '@/components/LanguageSelector';

export interface Translations {
  title: string;
  content: string;
  author: string;
  publishedAt: string;
  readTime: string;
  category: string;
  tags: string[];
}

// Basic translation function - in production, you would use a proper translation service
export const translateContent = async (content: Translations, targetLanguage: Language): Promise<Translations> => {
  // Mock translation - replace with actual API call to Google Translate, DeepL, etc.
  if (targetLanguage === 'en') {
    return content; // Return original content for English
  }

  // Mock translations for demonstration
  const mockTranslations: Record<Language, Partial<Translations>> = {
    en: content,
    hi: {
      title: translateText(content.title, 'hi'),
      content: translateText(content.content, 'hi'),
      author: content.author, // Keep author name unchanged
      publishedAt: content.publishedAt,
      readTime: translateText(content.readTime, 'hi'),
      category: translateText(content.category, 'hi'),
      tags: content.tags.map(tag => translateText(tag, 'hi')),
    },
    bn: {
      title: translateText(content.title, 'bn'),
      content: translateText(content.content, 'bn'),
      author: content.author, // Keep author name unchanged
      publishedAt: content.publishedAt,
      readTime: translateText(content.readTime, 'bn'),
      category: translateText(content.category, 'bn'),
      tags: content.tags.map(tag => translateText(tag, 'bn')),
    },
  };

  return { ...content, ...mockTranslations[targetLanguage] };
};

// Mock translation function - replace with actual translation API
const translateText = (text: string, targetLang: Language): string => {
  if (targetLang === 'en') return text;
  
  // Mock translations for common terms
  const commonTranslations: Record<Language, Record<string, string>> = {
    en: {},
    hi: {
      'Technology': 'प्रौद्योगिकी',
      'AI': 'एआई',
      'Content Creation': 'सामग्री निर्माण',
      'Writing': 'लेखन',
      'Future of Work': 'काम का भविष्य',
      'min read': 'मिनट पढ़ें',
      'Trending': 'ट्रेंडिंग',
    },
    bn: {
      'Technology': 'প্রযুক্তি',
      'AI': 'এআই',
      'Content Creation': 'বিষয়বস্তু তৈরি',
      'Writing': 'লেখা',
      'Future of Work': 'কাজের ভবিষ্যৎ',
      'min read': 'মিনিট পড়ুন',
      'Trending': 'ট্রেন্ডিং',
    },
  };

  // Check if we have a direct translation
  if (commonTranslations[targetLang][text]) {
    return commonTranslations[targetLang][text];
  }

  // For longer content, you would call a translation API here
  // For now, return original text with a note
  return text + (targetLang === 'hi' ? ' (हिंदी में)' : ' (বাংলায়)');
};

// Function to detect browser language and set default
export const getDefaultLanguage = (): Language => {
  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith('hi')) return 'hi';
  if (browserLang.startsWith('bn')) return 'bn';
  return 'en';
};
