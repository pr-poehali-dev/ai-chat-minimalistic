import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-6xl font-bold text-white">
              AI Chat Platform
            </h1>
            <p className="text-xl text-slate-300">
              Выбирайте лучшие нейросети. Общайтесь без границ.
            </p>
          </div>

          <div className="flex justify-center gap-4 pt-8">
            <Button
              size="lg"
              className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-6 text-lg"
              onClick={() => navigate("/chat")}
            >
              <Icon name="MessageSquare" className="mr-2" size={24} />
              Начать чат
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-600 text-white hover:bg-slate-800 px-8 py-6 text-lg"
              onClick={() => navigate("/models")}
            >
              <Icon name="Sparkles" className="mr-2" size={24} />
              Посмотреть модели
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 pt-16">
            <Card className="bg-slate-800/50 border-slate-700 p-6 hover:bg-slate-800 transition-all hover-scale">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-sky-500/20 flex items-center justify-center">
                  <Icon name="Zap" className="text-sky-400" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white">Быстрые ответы</h3>
                <p className="text-slate-400 text-sm">
                  Мгновенная генерация от лучших AI моделей
                </p>
              </div>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 p-6 hover:bg-slate-800 transition-all hover-scale">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <Icon name="Brain" className="text-purple-400" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white">Выбор моделей</h3>
                <p className="text-slate-400 text-sm">
                  GPT-4, Claude, Gemini и бесплатные альтернативы
                </p>
              </div>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 p-6 hover:bg-slate-800 transition-all hover-scale">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <Icon name="CreditCard" className="text-emerald-400" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white">Гибкие тарифы</h3>
                <p className="text-slate-400 text-sm">
                  Подписка или баллы — выбирайте удобный формат
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;