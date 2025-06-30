
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

const MitraBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "नमस्ते! I'm MitraBot, your helpful assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date().toLocaleTimeString()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [language, setLanguage] = useState("en");

  const helpResponses = {
    en: {
      navigation: "I can help you navigate through our website. You can visit Articles, Categories, About page, or manage your account through Sign In/Register.",
      registration: "To register, click on 'Sign up' and fill in your details including your Indian mobile number (+91). Make sure your name contains only alphabets and spaces (3-30 characters).",
      login: "To sign in, use your email and Indian mobile number along with your password. Remember to use a valid 10-digit mobile number starting with 6-9.",
      phone: "Please enter a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9. The format should be: +91 followed by 10 digits.",
      default: "I'm here to help! You can ask me about navigation, registration, login issues, or phone number format. Type 'help' for more options."
    },
    hi: {
      navigation: "मैं आपको वेबसाइट पर नेविगेट करने में मदद कर सकता हूं। आप Articles, Categories, About पेज देख सकते हैं या Sign In/Register के जरिए अपना खाता बना सकते हैं।",
      registration: "रजिस्टर करने के लिए 'Sign up' पर क्लिक करें और अपना भारतीय मोबाइल नंबर (+91) सहित सभी जानकारी भरें।",
      login: "साइन इन करने के लिए अपना ईमेल और भारतीय मोबाइल नंबर पासवर्ड के साथ उपयोग करें।",
      phone: "कृपया 6, 7, 8, या 9 से शुरू होने वाला 10 अंकों का भारतीय मोबाइल नंबर दर्ज करें।",
      default: "मैं आपकी मदद के लिए यहां हूं! आप मुझसे नेविगेशन, रजिस्ट्रेशन, लॉगिन या फोन नंबर के बारे में पूछ सकते हैं।"
    }
  };

  const getResponse = (message) => {
    const lowerMessage = message.toLowerCase();
    const responses = helpResponses[language];

    if (lowerMessage.includes("navigate") || lowerMessage.includes("navigation") || lowerMessage.includes("page")) {
      return responses.navigation;
    } else if (lowerMessage.includes("register") || lowerMessage.includes("signup") || lowerMessage.includes("sign up")) {
      return responses.registration;
    } else if (lowerMessage.includes("login") || lowerMessage.includes("signin") || lowerMessage.includes("sign in")) {
      return responses.login;
    } else if (lowerMessage.includes("phone") || lowerMessage.includes("mobile") || lowerMessage.includes("number")) {
      return responses.phone;
    } else if (lowerMessage.includes("help")) {
      return responses.default;
    } else {
      return responses.default;
    }
  };

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const userMessage = {
        id: messages.length + 1,
        text: inputMessage,
        sender: "user",
        timestamp: new Date().toLocaleTimeString()
      };

      const botResponse = {
        id: messages.length + 2,
        text: getResponse(inputMessage),
        sender: "bot",
        timestamp: new Date().toLocaleTimeString()
      };

      setMessages(prev => [...prev, userMessage, botResponse]);
      setInputMessage("");
    }
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === "en" ? "hi" : "en");
    const langMessage = {
      id: messages.length + 1,
      text: language === "en" ? "भाषा हिंदी में बदल दी गई है!" : "Language switched to English!",
      sender: "bot",
      timestamp: new Date().toLocaleTimeString()
    };
    setMessages(prev => [...prev, langMessage]);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 h-96">
          <Card className="h-full flex flex-col shadow-xl">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center space-x-2 text-lg">
                <Bot className="h-5 w-5" />
                <span>MitraBot - आपका सहायक</span>
              </CardTitle>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={toggleLanguage}
                  className="text-white border-white hover:bg-white hover:text-blue-600"
                >
                  {language === "en" ? "हिंदी" : "English"}
                </Button>
              </div>
            </CardHeader>
            
            <CardContent className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-xs p-3 rounded-lg ${
                      message.sender === "user"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    <div className="flex items-center space-x-2 mb-1">
                      {message.sender === "bot" ? (
                        <Bot className="h-4 w-4" />
                      ) : (
                        <User className="h-4 w-4" />
                      )}
                      <span className="text-xs opacity-75">{message.timestamp}</span>
                    </div>
                    <p className="text-sm">{message.text}</p>
                  </div>
                </div>
              ))}
            </CardContent>
            
            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder={language === "en" ? "Type your message..." : "अपना संदेश टाइप करें..."}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  className="flex-1"
                />
                <Button onClick={handleSendMessage} size="sm">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </>
  );
};

export default MitraBot;
