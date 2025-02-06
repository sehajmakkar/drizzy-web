import React from 'react';

const ChatButton = () => {
  const openChat = () => {
    if (window.CollectChatLauncher) {
      window.CollectChatLauncher.open();
    }
  };

  return (
    <button 
      onClick={openChat}
      className="bg-yellow-500 text-black px-8 py-4 rounded-full font-semibold text-lg md:text-xl hover:bg-yellow-600 transition-colors w-full sm:w-auto"
    >
      Book a Trainer
    </button>
  );
};

export default ChatButton;