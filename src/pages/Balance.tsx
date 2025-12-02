import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";

const plans = [
  {
    name: "Месячная подписка",
    price: "990₽",
    period: "/мес",
    features: [
      "Все нейросети без ограничений",
      "50 бонусных баллов ежедневно",
      "Приоритетная обработка",
      "История всех чатов",
    ],
    popular: false,
  },
  {
    name: "Годовая подписка",
    price: "9990₽",
    period: "/год",
    features: [
      "Все нейросети без ограничений",
      "100 бонусных баллов ежедневно",
      "Приоритетная обработка",
      "История всех чатов",
      "Скидка 2 месяца",
    ],
    popular: true,
  },
];

const pointsPackages = [
  { amount: 100, price: 99, bonus: 0 },
  { amount: 500, price: 449, bonus: 50 },
  { amount: 1000, price: 799, bonus: 200 },
  { amount: 5000, price: 3499, bonus: 1500 },
];

const Balance = () => {
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
              <Button variant="ghost" className="text-white" onClick={() => navigate("/balance")}>
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
          <h2 className="text-4xl font-bold text-white mb-2">Баланс и тарифы</h2>
          <p className="text-slate-400">Выберите удобный способ оплаты</p>
        </div>

        <Card className="bg-slate-800/50 border-slate-700 p-6 mb-8 animate-fade-in">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-400 mb-1">Ваш баланс</p>
              <div className="flex items-center gap-2">
                <Icon name="Coins" className="text-yellow-400" size={32} />
                <span className="text-4xl font-bold text-white">150</span>
                <span className="text-slate-400">баллов</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-slate-400 mb-1">Подписка</p>
              <Badge className="bg-slate-700 text-slate-300">Не активна</Badge>
            </div>
          </div>
        </Card>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">Подписки</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`p-6 transition-all hover-scale animate-fade-in ${
                  plan.popular
                    ? "bg-sky-500/10 border-sky-500"
                    : "bg-slate-800/50 border-slate-700"
                }`}
              >
                {plan.popular && (
                  <Badge className="bg-sky-500 text-white mb-4">Популярный</Badge>
                )}
                <h4 className="text-2xl font-bold text-white mb-2">{plan.name}</h4>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-slate-400">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-slate-300">
                      <Icon name="Check" className="text-emerald-400" size={18} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-sky-500 hover:bg-sky-600"
                      : "bg-slate-700 hover:bg-slate-600"
                  } text-white`}
                >
                  Оформить подписку
                </Button>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-6">Купить баллы</h3>
          <div className="grid md:grid-cols-4 gap-4">
            {pointsPackages.map((pkg, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 p-6 hover:bg-slate-800 transition-all hover-scale animate-fade-in"
              >
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Icon name="Coins" className="text-yellow-400" size={28} />
                    <span className="text-3xl font-bold text-white">{pkg.amount}</span>
                  </div>
                  {pkg.bonus > 0 && (
                    <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 mb-3">
                      +{pkg.bonus} бонус
                    </Badge>
                  )}
                  <p className="text-2xl font-bold text-white mb-4">{pkg.price}₽</p>
                  <Button className="w-full bg-sky-500 hover:bg-sky-600 text-white">
                    Купить
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balance;
