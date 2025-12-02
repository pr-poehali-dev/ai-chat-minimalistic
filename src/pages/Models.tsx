import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";

const models = [
  {
    id: "gpt-4",
    name: "GPT-4 Turbo",
    provider: "OpenAI",
    description: "Универсальная модель для любых задач",
    cost: 3,
    free: false,
    category: "Универсальные",
    features: ["128К контекст", "Высокая точность", "Анализ кода"],
  },
  {
    id: "claude-3",
    name: "Claude 3.5 Sonnet",
    provider: "Anthropic",
    description: "Лучшая для работы с текстами и документами",
    cost: 3,
    free: false,
    category: "Текст и документы",
    features: ["200К токенов", "Глубокий анализ", "Этичность"],
  },
  {
    id: "gemini-pro",
    name: "Gemini 1.5 Pro",
    provider: "Google",
    description: "Мультимодальная: текст, фото, видео",
    cost: 2,
    free: false,
    category: "Мультимодальные",
    features: ["Анализ изображений", "Работа с видео", "1M токенов"],
  },
  {
    id: "gpt-4-vision",
    name: "GPT-4 Vision",
    provider: "OpenAI",
    description: "Анализ изображений и скриншотов",
    cost: 3,
    free: false,
    category: "Мультимодальные",
    features: ["Распознавание объектов", "OCR", "Описание сцен"],
  },
  {
    id: "deepseek",
    name: "DeepSeek Coder",
    provider: "DeepSeek",
    description: "Специализированная модель для кода",
    cost: 1,
    free: false,
    category: "Программирование",
    features: ["Генерация кода", "Рефакторинг", "Поиск ошибок"],
  },
  {
    id: "codestral",
    name: "Codestral",
    provider: "Mistral AI",
    description: "Быстрая модель для кода",
    cost: 1,
    free: false,
    category: "Программирование",
    features: ["80+ языков", "Автодополнение", "32К контекст"],
  },
  {
    id: "perplexity",
    name: "Perplexity Search",
    provider: "Perplexity",
    description: "Поиск в интернете с источниками",
    cost: 2,
    free: false,
    category: "Поиск и информация",
    features: ["Актуальные данные", "Ссылки на источники", "Фактчекинг"],
  },
  {
    id: "llama-3",
    name: "Llama 3 70B",
    provider: "Meta",
    description: "Мощная бесплатная модель",
    cost: 0,
    free: true,
    category: "Бесплатные",
    features: ["Open source", "Быстрая", "Без ограничений"],
  },
  {
    id: "mistral",
    name: "Mistral Large",
    provider: "Mistral AI",
    description: "Европейская open-source модель",
    cost: 0,
    free: true,
    category: "Бесплатные",
    features: ["Мультиязычность", "128К контекст", "Быстрый ответ"],
  },
  {
    id: "qwen",
    name: "Qwen 2.5",
    provider: "Alibaba",
    description: "Китайская модель с поддержкой русского",
    cost: 0,
    free: true,
    category: "Бесплатные",
    features: ["Мультиязычность", "32К контекст", "Open source"],
  },
];

const Models = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <nav className="border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <h1 className="text-xl font-bold text-white cursor-pointer" onClick={() => navigate("/")}>
              AI Chat
            </h1>
            <div className="flex gap-2">
              <Button variant="ghost" className="text-slate-300" onClick={() => navigate("/chat")}>
                <Icon name="MessageSquare" className="mr-2" size={18} />
                Чат
              </Button>
              <Button variant="ghost" className="text-white" onClick={() => navigate("/models")}>
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
          <Button variant="ghost" className="text-slate-300" onClick={() => navigate("/profile")}>
            <Icon name="User" size={20} />
          </Button>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-8 animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-2">Нейросети</h2>
          <p className="text-slate-400">Выберите модель для работы</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {models.map((model) => (
            <Card
              key={model.id}
              className="bg-slate-800/50 border-slate-700 p-6 hover:bg-slate-800 transition-all hover-scale animate-fade-in"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{model.name}</h3>
                  <p className="text-sm text-slate-400">{model.provider}</p>
                </div>
                {model.free ? (
                  <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
                    <Icon name="Sparkles" className="mr-1" size={14} />
                    Бесплатно
                  </Badge>
                ) : (
                  <Badge className="bg-sky-500/20 text-sky-400 border-sky-500/30">
                    {model.cost} баллов
                  </Badge>
                )}
              </div>

              <p className="text-slate-300 mb-4">{model.description}</p>

              <div className="space-y-2 mb-6">
                {model.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-slate-400">
                    <Icon name="Check" className="text-emerald-400" size={16} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                className="w-full bg-sky-500 hover:bg-sky-600 text-white"
                onClick={() => navigate("/chat")}
              >
                Попробовать
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Models;