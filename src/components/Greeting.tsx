import { useState, useEffect } from 'preact/hooks';

interface GreetingProps {
  messages: string[];
}

export default function Greeting({ messages }: GreetingProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentMessage = messages[currentIndex];
    let charIndex = 0;
    setDisplayText('');
    setIsTyping(true);

    const typingInterval = setInterval(() => {
      if (charIndex < currentMessage.length) {
        setDisplayText(currentMessage.slice(0, charIndex + 1));
        charIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
        
        // 显示完整消息后等待2秒，然后切换到下一个
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % messages.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [currentIndex, messages]);

  return (
    <div class="greeting">
      <h2 class="greeting-text">
        {displayText}
        {isTyping && <span class="greeting-cursor">|</span>}
      </h2>
    </div>
  );
}
