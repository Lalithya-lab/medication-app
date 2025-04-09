import Link from "next/link";

const ChatbotButton = () => {
  return (
    <Link
      href="/chatbot"
      className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all"
    >
      💬 Chat
    </Link>
  );
};

export default ChatbotButton;
