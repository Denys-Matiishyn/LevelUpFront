import { motion } from "motion/react";
import { Link } from "react-router";
import {
  Users,
  Clock,
  Calendar,
  CheckCircle2,
  TrendingUp,
  MessageSquare,
  Lightbulb,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function GroupTrainings() {
  const benefits = [
    {
      icon: MessageSquare,
      title: "Обмін досвідом",
      description:
        "Можливість почути різні точки зору, поділитися своїм досвідом та дізнатися, як інші справляються з подібними ситуаціями.",
    },
    {
      icon: TrendingUp,
      title: "Розвиток навичок",
      description:
        "Практичні вправи та інтерактивні завдання допомагають швидше засвоїти нові техніки та стратегії поведінки.",
    },
    {
      icon: Lightbulb,
      title: "Нові інсайти",
      description:
        "Групова динаміка створює унікальні можливості для самопізнання та відкриття нових аспектів себе.",
    },
  ];

  const trainings = [
    {
      title: "Управління стресом та емоціями",
      duration: "8 занять по 2 години",
      size: "До 12 учасників",
      description:
        "Навчіться розпізнавати стресові тригери, ефективно керувати емоціями та використовувати техніки релаксації. Розвинете навички емоційної саморегуляції та стресостійкості.",
      topics: [
        "Фізіологія стресу",
        "Техніки релаксації",
        "Емоційний інтелект",
        "Практики усвідомленості",
      ],
      price: "2400 грн",
    },
    {
      title: "Впевненість та самооцінка",
      duration: "6 занять по 2 години",
      size: "До 10 учасників",
      description:
        "Підвищте свою самооцінку, навчіться відстоювати свої межі та впевнено виражати свою думку. Подолайте внутрішнього критика та розвинете здорову любов до себе.",
      topics: [
        "Джерела самооцінки",
        "Робота з внутрішнім критиком",
        "Самоцінності",
        "Асертивність",
        "Встановлення меж",
      ],
      price: "1800 грн",
    },
    {
      title: "Ефективна комунікація",
      duration: "6 занять по 2.5 години",
      size: "До 12 учасників",
      description:
        "Розвинете навички активного слухання, конструктивного вираження думок та вирішення конфліктів. Навчіться будувати якісні стосунки в особистому та професійному житті.",
      topics: [
        "Активне слухання",
        "Невербальна комунікація",
        "Вирішення конфліктів",
        "Емпатія",
      ],
      price: "2100 грн",
    },
    {
      title: "Тінейджер на МІЛЬЙОН: Профорієнтація 3.0",
      duration:
        "4 тижні (інтенсивна прокачка - 1 заняття по 1,5 год на тиждень)",
      size: "До 8 учасників (наживо або онлайн)",
      description:
        "Сучасний курс-трансформація для підлітків (13+), які хочуть знайти свій True Path у світі майбутнього. Допомагаємо вийти з екрана гаджета, монетизувати свої скіли, обрати професію мрії та топовий ЗВО без стресу, вигорання та батьківського тиску.",
      topics: [
        "Скан сильних сторін та навичок",
        "Професії майбутнього та тренди",
        "Створення кар'єрного треку",
        "Самопрезентація та менеджмент емоцій",
      ],
      price: "2100 грн",
    },
  ];

  const process = [
    "Запис на тренінг та попередня анкета",
    "Знайомство з групою та ведучим",
    "Інтерактивні заняття з теорією та практикою",
    "Домашні завдання для закріплення",
    "Підтримка між заняттями в чаті групи",
    "Завершальна зустріч та план подальшого розвитку",
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-accent/5 -z-10" />

        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
                <Users className="w-4 h-4 text-secondary" />
                <span className="text-sm text-foreground/80">
                  Групова робота
                </span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Групові{" "}
                <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                  тренінги
                </span>
              </h1>

              <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                Інтерактивні тренінги в невеликих групах однодумців. Разом
                розвиваємо важливі навички, ділимося досвідом та підтримуємо
                один одного на шляху до особистісного зростання.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-foreground/70">
                  <Clock className="w-5 h-5 text-secondary" />
                  <span>1.5-2.5 години</span>
                </div>
                <div className="flex items-center gap-2 text-foreground/70">
                  <Users className="w-5 h-5 text-accent" />
                  <span>До 12 учасників</span>
                </div>
                <div className="flex items-center gap-2 text-foreground/70">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>6-8 занять</span>
                </div>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-secondary to-accent text-white font-medium shadow-lg hover:shadow-xl transition-all"
              >
                Записатись на тренінг
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1590650046871-92c887180603?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Group training"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Переваги групових тренінгів
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center mb-6">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainings */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Наші тренінги
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Виберіть тренінг, який відповідає вашим потребам та цілям
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {trainings.map((training, index) => (
              <motion.div
                key={training.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-border"
              >
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {training.title}
                </h3>

                <div className="flex flex-wrap gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-2 text-foreground/70">
                    <Clock className="w-4 h-4 text-primary" />
                    {training.duration}
                  </div>
                  <div className="flex items-center gap-2 text-foreground/70">
                    <Users className="w-4 h-4 text-secondary" />
                    {training.size}
                  </div>
                </div>

                <p className="text-foreground/70 mb-6 leading-relaxed">
                  {training.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-bold text-foreground mb-3">
                    Що вивчатимемо:
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {training.topics.map((topic) => (
                      <div key={topic} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                        <span className="text-sm text-foreground/80">
                          {topic}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-border flex items-center justify-between">
                  <div>
                    <div className="text-sm text-foreground/60 mb-1">
                      Вартість програми
                    </div>
                    <div className="text-2xl font-bold text-foreground">
                      {training.price}
                    </div>
                  </div>
                  <Link
                    to="/contact"
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-secondary to-accent text-white font-medium hover:shadow-lg transition-all"
                  >
                    Записатись
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
