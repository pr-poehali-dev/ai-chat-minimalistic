import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  model?: string;
}

const models = [
  { id: "gpt-4", name: "GPT-4", cost: 5, free: false, provider: "OpenAI" },
  { id: "claude-3", name: "Claude 3", cost: 4, free: false, provider: "Anthropic" },
  { id: "gemini-pro", name: "Gemini Pro", cost: 3, free: false, provider: "Google" },
  { id: "llama-3", name: "Llama 3", cost: 0, free: true, provider: "Meta" },
  { id: "mistral", name: "Mistral", cost: 0, free: true, provider: "Mistral AI" },
];

const Chat = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Привет! Я AI ассистент. Выберите модель и задайте вопрос.",
    },
  ]);
  const [input, setInput] = useState("");
  const [selectedModel, setSelectedModel] = useState("gpt-4");
  const [balance] = useState(150);

  const currentModel = models.find((m) => m.id === selectedModel);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    };

    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: "assistant",
      content: `[${currentModel?.name}] Это демо-ответ. В полной версии здесь будет реальный ответ AI.`,
      model: currentModel?.name,
    };

    setMessages([...messages, userMessage, assistantMessage]);
    setInput("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <nav className="border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <h1 className="text-xl font-bold text-white cursor-pointer" onClick={() => navigate("/")}>
              AI Chat
            </h1>
            <div className="flex gap-2">
              <Button variant="ghost" className="text-white" onClick={() => navigate("/chat")}>
                <Icon name="MessageSquare" className="mr-2" size={18} />
                Чат
              </Button>
              <Button variant="ghost" className="text-slate-300" onClick={() => navigate("/models")}>
                <Icon name="Sparkles" className="mr-2" size={18} />
                Модели
              </Button>
              <Button variant="ghost" className="text-slate-300" onClick={() => navigate("/balance")}>
                <Icon name="Wallet" className="mr-2" size={18} />
                Баланс
              </Button>
              <Button variant="ghost" className="text-slate-300" onClick={() => navigate("/faq")}>
                <Icon name="HelpCircle" className="mr-2" size={18} />
                FAQ
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-full">
              <Icon name="Coins" className="text-yellow-400" size={18} />
              <span className="text-white font-medium">{balance}</span>
            </div>
            <Button variant="ghost" className="text-slate-300" onClick={() => navigate("/profile")}>
              <Icon name="User" size={20} />
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-6 max-w-5xl">
        <Card className="bg-slate-800/50 border-slate-700 mb-4 p-4">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <label className="text-sm text-slate-400 mb-2 block">Выберите модель</label>
              <Select value={selectedModel} onValueChange={setSelectedModel}>
                <SelectTrigger className="w-full bg-slate-900 border-slate-700 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-slate-900 border-slate-700">
                  {models.map((model) => (
                    <SelectItem key={model.id} value={model.id} className="text-white">
                      <div className="flex items-center gap-2">
                        <span>{model.name}</span>
                        {model.free ? (
                          <Badge variant="outline" className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
                            Бесплатно
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="bg-sky-500/20 text-sky-400 border-sky-500/30">
                            {model.cost} ⚡
                          </Badge>
                        )}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="ml-4 text-right">
              <div className="text-sm text-slate-400">Стоимость запроса</div>
              <div className="text-2xl font-bold text-white">
                {currentModel?.free ? (
                  <span className="text-emerald-400">FREE</span>
                ) : (
                  <span className="text-sky-400">{currentModel?.cost} ⚡</span>
                )}
              </div>
            </div>
          </div>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700 h-[calc(100vh-320px)] flex flex-col">
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"} animate-fade-in`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.role === "user"
                      ? "bg-sky-500 text-white"
                      : "bg-slate-700 text-slate-100"
                  }`}
                >
                  {message.model && (
                    <div className="text-xs opacity-70 mb-1">{message.model}</div>
                  )}
                  <p className="whitespace-pre-wrap">{message.content}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-700 p-4">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Напишите сообщение..."
                className="bg-slate-900 border-slate-700 text-white placeholder:text-slate-500"
              />
              <Button
                onClick={sendMessage}
                className="bg-sky-500 hover:bg-sky-600 text-white"
                disabled={!input.trim()}
              >
                <Icon name="Send" size={20} />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Chat;
