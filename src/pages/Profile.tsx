import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";

const Profile = () => {
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
          <Button variant="ghost" className="text-white" onClick={() => navigate("/profile")}>
            <Icon name="User" size={20} />
          </Button>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8 animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-2">Профиль</h2>
          <p className="text-slate-400">Управление аккаунтом</p>
        </div>

        <div className="grid gap-6">
          <Card className="bg-slate-800/50 border-slate-700 p-6 animate-fade-in">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 rounded-full bg-sky-500/20 flex items-center justify-center">
                <Icon name="User" className="text-sky-400" size={40} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Иван Петров</h3>
                <p className="text-slate-400">ivan@example.com</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Badge className="bg-slate-700 text-slate-300">Без подписки</Badge>
              <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
                150 баллов
              </Badge>
            </div>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 p-6 animate-fade-in">
            <h3 className="text-xl font-bold text-white mb-4">Личные данные</h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-slate-300">Имя</Label>
                <Input
                  id="name"
                  defaultValue="Иван Петров"
                  className="bg-slate-900 border-slate-700 text-white mt-1"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-slate-300">Email</Label>
                <Input
                  id="email"
                  type="email"
                  defaultValue="ivan@example.com"
                  className="bg-slate-900 border-slate-700 text-white mt-1"
                />
              </div>
              <Button className="bg-sky-500 hover:bg-sky-600 text-white">
                Сохранить изменения
              </Button>
            </div>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 p-6 animate-fade-in">
            <h3 className="text-xl font-bold text-white mb-4">Статистика</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-slate-900/50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="MessageSquare" className="text-sky-400" size={20} />
                  <span className="text-slate-400 text-sm">Всего чатов</span>
                </div>
                <p className="text-3xl font-bold text-white">24</p>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="Zap" className="text-yellow-400" size={20} />
                  <span className="text-slate-400 text-sm">Потрачено баллов</span>
                </div>
                <p className="text-3xl font-bold text-white">350</p>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="Calendar" className="text-emerald-400" size={20} />
                  <span className="text-slate-400 text-sm">Дней с нами</span>
                </div>
                <p className="text-3xl font-bold text-white">7</p>
              </div>
            </div>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 p-6 animate-fade-in">
            <h3 className="text-xl font-bold text-white mb-4">Безопасность</h3>
            <div className="space-y-4">
              <Button variant="outline" className="w-full border-slate-600 text-white hover:bg-slate-700">
                <Icon name="Lock" className="mr-2" size={18} />
                Изменить пароль
              </Button>
              <Button variant="outline" className="w-full border-red-600 text-red-400 hover:bg-red-950">
                <Icon name="LogOut" className="mr-2" size={18} />
                Выйти из аккаунта
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
