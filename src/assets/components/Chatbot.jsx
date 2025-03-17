import React, { useState, useRef, useEffect } from 'react';
import { Send, X, MessageSquare, ChevronUp } from 'lucide-react';
import { FaWhatsapp, FaPhone, FaEnvelope, FaHeadset } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      text: 'Hi! How can I help you today?',
      sender: 'bot',
      timestamp: new Date()
    },
  ]);
  const [userInput, setUserInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isContactsOpen, setIsContactsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [theme, setTheme] = useState('light');
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleSendMessage = () => {
    if (userInput.trim()) {
      const newUserMessage = {
        text: userInput,
        sender: 'user',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, newUserMessage]);
      setUserInput('');
      setIsTyping(true);

      // Simulate bot typing with a realistic delay
      setTimeout(() => {
        const botResponse = {
          text: getBotResponse(userInput),
          sender: 'bot',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botResponse]);
        setIsTyping(false);
      }, 700 + Math.random() * 1200); // Random delay between 700-1900ms
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (isContactsOpen) setIsContactsOpen(false);
  };

  const toggleContacts = () => {
    setIsContactsOpen(!isContactsOpen);
    if (isOpen) setIsOpen(false);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const getBotResponse = (input) => {
    const responses = {
      'hello': 'Hello! How can I assist you with your booking today? 👋',
      'hi': 'Hi there! Looking to make a reservation? 👋',
      'book a room': 'You can book a room directly through our website. Would you like me to guide you through the process? 🏨',
      'offers': 'We currently have several special offers:\n• 10% off on weekend stays\n• Free breakfast with 3+ night bookings\n• 15% discount for returning guests\n\nWould you like to book now? 🎁',
      'check availability': 'I can help you check availability. Could you please provide your preferred dates and the type of room you\'re looking for? 📅',
      'thank you': 'You\'re very welcome! Is there anything else I can help you with today? 😊',
      'prices': 'Our room prices start from $89 per night for a standard room. Luxury suites are available from $159 per night. All rates include WiFi and access to our facilities. 💰',
      'help': 'I can help with bookings, checking availability, special offers, amenities information, and more. Just let me know what you need! 🤝',
    };

    const lowerCaseInput = input.toLowerCase();

    if (responses[lowerCaseInput]) {
      return responses[lowerCaseInput];
    }

    for (const key in responses) {
      if (lowerCaseInput.includes(key)) {
        return responses[key];
      }
    }

    if (lowerCaseInput.includes('price') || lowerCaseInput.includes('cost')) {
      return responses['prices'];
    }

    if (lowerCaseInput.includes('available') || lowerCaseInput.includes('when')) {
      return responses['check availability'];
    }

    if (lowerCaseInput.includes('discount') || lowerCaseInput.includes('special')) {
      return responses['offers'];
    }

    return "I'm not sure I understand. Could you try rephrasing that? You can ask about room availability, prices, or special offers. 🤔";
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const contactOptions = [
    { icon: <FaHeadset size={22} />, label: 'Live Chat', action: toggleChat, color: 'bg-indigo-500 hover:bg-indigo-600' },
    { icon: <FaWhatsapp size={22} />, label: 'WhatsApp', action: () => window.open('https://wa.me/1234567890', '_blank'), color: 'bg-green-500 hover:bg-green-600' },
    { icon: <FaPhone size={20} />, label: 'Call', action: () => window.open('tel:+1234567890', '_blank'), color: 'bg-blue-500 hover:bg-blue-600' },
    { icon: <FaEnvelope size={20} />, label: 'Email', action: () => window.open('mailto:support@example.com', '_blank'), color: 'bg-purple-500 hover:bg-purple-600' },
  ];

  const themeStyles = {
    light: {
      chatContainer: 'bg-white',
      header: 'bg-gradient-to-r from-indigo-500 to-purple-600',
      messageUser: 'bg-gradient-to-r from-blue-500 to-blue-600 text-white',
      messageBot: 'bg-gray-100 text-gray-800',
      input: 'bg-white border-gray-300 focus:ring-indigo-500',
      sendButton: 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700'
    },
    dark: {
      chatContainer: 'bg-gray-900',
      header: 'bg-gradient-to-r from-gray-800 to-gray-900',
      messageUser: 'bg-gradient-to-r from-blue-700 to-blue-800 text-white',
      messageBot: 'bg-gray-800 text-gray-200',
      input: 'bg-gray-800 border-gray-700 text-white focus:ring-purple-500',
      sendButton: 'bg-gradient-to-r from-purple-700 to-indigo-800 hover:from-purple-800 hover:to-indigo-900'
    }
  };

  const currentTheme = themeStyles[theme];

  return (
    <>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        onClick={toggleContacts}
        className={`fixed z-50 bottom-6 right-6 p-4 rounded-full shadow-lg cursor-pointer ${
          isContactsOpen
            ? 'bg-gray-600 text-white'
            : 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white'
        }`}
        style={{ width: '60px', height: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        {isContactsOpen ? <X size={26} /> : <MessageSquare size={26} />}
      </motion.div>

      <AnimatePresence>
        {isContactsOpen && (
          <motion.div
            className="fixed z-40 bottom-24 right-6 space-y-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {contactOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className={`flex items-center ${option.color} px-4 py-3 rounded-full shadow-md cursor-pointer`}
                onClick={option.action}
              >
                <div className="mr-2">{option.icon}</div>
                <span className="text-white font-medium">{option.label}</span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed z-50 bottom-6 right-6 w-full sm:w-96 max-w-[calc(100vw-2rem)] shadow-2xl rounded-2xl overflow-hidden"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <div className={`flex flex-col h-[500px] max-h-[80vh] ${currentTheme.chatContainer} rounded-2xl`}>
              {/* Chat Header */}
              <div className={`${currentTheme.header} p-4 text-white flex justify-between items-center`}>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                    <FaHeadset size={20} />
                  </div>
                  <div>
                    <h2 className="font-semibold text-lg">Customer Support</h2>
                    <div className="text-xs flex items-center">
                      <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                      Online now
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <button onClick={toggleTheme} className="p-2 text-white/70 hover:text-white mr-2">
                    {theme === 'light' ? '🌙' : '☀️'}
                  </button>
                  <button onClick={toggleChat} className="p-2 text-white/70 hover:text-white">
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} message-container`}
                  >
                    {message.sender === 'bot' && (
                      <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center mr-2 flex-shrink-0">
                        <FaHeadset className="text-indigo-600" size={16} />
                      </div>
                    )}
                    
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`max-w-[80%] ${
                        message.sender === 'user'
                          ? currentTheme.messageUser
                          : `${currentTheme.messageBot}`
                      } px-4 py-3 rounded-2xl ${
                        message.sender === 'user' ? 'rounded-tr-none' : 'rounded-tl-none'
                      }`}
                    >
                      <div className="whitespace-pre-line">{message.text}</div>
                      <div className={`text-xs mt-1 text-right ${
                        message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                      }`}>
                        {formatTime(message.timestamp)}
                      </div>
                    </motion.div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center mr-2">
                      <FaHeadset className="text-indigo-600" size={16} />
                    </div>
                    <motion.div
                      className={`${currentTheme.messageBot} px-4 py-3 rounded-2xl rounded-tl-none`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <div className="flex space-x-1">
                        <motion.div
                          className="w-2 h-2 bg-gray-400 rounded-full"
                          animate={{ y: [0, -5, 0] }}
                          transition={{ repeat: Infinity, duration: 0.8, delay: 0 }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-gray-400 rounded-full"
                          animate={{ y: [0, -5, 0] }}
                          transition={{ repeat: Infinity, duration: 0.8, delay: 0.2 }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-gray-400 rounded-full"
                          animate={{ y: [0, -5, 0] }}
                          transition={{ repeat: Infinity, duration: 0.8, delay: 0.4 }}
                        />
                      </div>
                    </motion.div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className={`p-3 ${theme === 'dark' ? 'bg-gray-900 border-t border-gray-800' : 'bg-white border-t border-gray-100'}`}>
                <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }} 
                      className="flex items-center">
                  <input
                    type="text"
                    ref={inputRef}
                    value={userInput}
                    onChange={handleUserInput}
                    onKeyPress={handleKeyPress}
                    className={`${currentTheme.input} border rounded-full py-3 px-4 w-full focus:outline-none focus:ring-2`}
                    placeholder="Type a message..."
                  />
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    type="submit"
                    className={`ml-2 p-3 ${currentTheme.sendButton} text-white rounded-full flex-shrink-0 transition-all duration-300`}
                    disabled={!userInput.trim()}
                  >
                    <Send className="w-5 h-5" />
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
