import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";

const faqData = [
  {
    question: "Как работает система баллов?",
    answer: "Баллы списываются за каждый запрос к платным нейросетям. GPT-4 стоит 5 баллов, Claude 3 — 4 балла, Gemini Pro — 3 балла. Бесплатные модели (Llama, Mistral) не требуют баллов.",
  },
  {
    question: "Что дает подписка?",
    answer: "Подписка открывает безлимитный доступ ко всем нейросетям без списания баллов. Дополнительно вы получаете ежедневные бонусные баллы: 50 при месячной подписке и 100 при годовой.",
  },
  {
    question: "Можно ли использовать платформу бесплатно?",
    answer: "Да! Вы можете использовать бесплатные модели Llama 3 и Mistral без ограничений. Они не требуют баллов или подписки.",
  },
  {
    question: "Как купить баллы?",
    answer: "Перейдите в раздел 'Баланс', выберите нужный пакет баллов и оплатите удобным способом. Баллы зачисляются мгновенно.",
  },
  {
    question: "Сгорают ли баллы?",
    answer: "Нет, купленные баллы не сгорают и остаются на вашем счету. Бонусные баллы от подписки действуют в течение подписочного периода.",
  },
  {
    question: "Чем отличаются нейросети?",
    answer: "Каждая модель имеет свои сильные стороны: GPT-4 — универсальная и мощная, Claude 3 — отлично работает с документами, Gemini Pro — мультимодальная (текст + изображения), бесплатные модели — хороши для простых задач.",
  },
  {
    question: "Можно ли отменить подписку?",
    answer: "Да, подписку можно отменить в любой момент в личном кабинете. Доступ сохранится до конца оплаченного периода.",
  },
  {
    question: "Есть ли API для разработчиков?",
    answer: "API находится в разработке и будет доступен в ближайшее время для пользователей с подпиской.",
  },
];

const FAQ = () => {
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
              <Button variant="ghost" className="text-white" onClick={() => navigate("/faq")}>
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

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8 animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-2">Часто задаваемые вопросы</h2>
          <p className="text-slate-400">Ответы на популярные вопросы</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-slate-800/50 border-slate-700 rounded-lg px-6 animate-fade-in"
            >
              <AccordionTrigger className="text-white hover:text-sky-400 text-left">
                <span className="font-medium">{item.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-slate-300">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center animate-fade-in">
          <p className="text-slate-400 mb-4">Не нашли ответ на свой вопрос?</p>
          <Button className="bg-sky-500 hover:bg-sky-600 text-white">
            <Icon name="Mail" className="mr-2" size={18} />
            Связаться с поддержкой
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
