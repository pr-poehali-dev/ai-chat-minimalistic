import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950/30 to-slate-900">
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
              className="border-slate-600 text-slate-200 hover:text-white hover:bg-slate-800 px-8 py-6 text-lg"
              onClick={() => navigate("/models")}
            >
              <Icon name="Sparkles" className="mr-2" size={24} />
              Посмотреть модели
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 pt-16">
            <Card 
              className="bg-gradient-to-br from-sky-500/10 to-sky-600/5 border-sky-500/30 p-8 hover:from-sky-500/20 hover:to-sky-600/10 transition-all hover-scale cursor-pointer backdrop-blur-sm"
              onClick={() => navigate("/chat")}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-sky-500/20 flex items-center justify-center">
                  <Icon name="Zap" className="text-sky-400" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white">Быстрые ответы</h3>
                <p className="text-slate-300 text-sm">
                  Мгновенная генерация от лучших AI моделей
                </p>
              </div>
            </Card>

            <Card 
              className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 border-purple-500/30 p-8 hover:from-purple-500/20 hover:to-purple-600/10 transition-all hover-scale cursor-pointer backdrop-blur-sm"
              onClick={() => navigate("/models")}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center">
                  <Icon name="Brain" className="text-purple-400" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white">Выбор моделей</h3>
                <p className="text-slate-300 text-sm">
                  GPT-4, Claude, Gemini и бесплатные альтернативы
                </p>
              </div>
            </Card>

            <Card 
              className="bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 border-emerald-500/30 p-8 hover:from-emerald-500/20 hover:to-emerald-600/10 transition-all hover-scale cursor-pointer backdrop-blur-sm"
              onClick={() => navigate("/balance")}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center">
                  <Icon name="CreditCard" className="text-emerald-400" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white">Гибкие тарифы</h3>
                <p className="text-slate-300 text-sm">
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