import { motion } from "motion/react";
import { Link } from "react-router";
import { Check, Star, AlertCircle } from "lucide-react";
// import imgCancellationPolicy from "figma:asset/fc5b02982aa81baff38c67727806fd93b735261f.png";

export function Pricing() {
  const plans = [
    {
      title: "Індивідуальна сесія",
      price: "2500",
      description: "Персональна психологічна підтримка",
      features: [
        "Тривалість: 45-50 хвилин",
        "Індивідуальний підхід",
        "Конфіденційність",
        "Гнучкий графік",
      ],
      gradient: "from-primary to-cyan-400",
      popular: true,
    },
    {
      title: "Дитячий психолог",
      price: "2500",
      description: "Консультації для дітей та підлітків",
      features: [
        "Тривалість: 45-50 хвилин",
        "Адаптовані методи роботи",
        "Комфортна атмосфера",
        "Співпраця з батьками",
      ],
      gradient: "from-secondary to-emerald-400",
      popular: false,
    },
    {
      title: "Сімейна пара/сім'я",
      price: "3500",
      description: "Консультації для подружжя та сімей",
      features: [
        "Тривалість: 45-50 хвилин",
        "Робота з відносинами",
        "Сімейна терапія",
        "Вирішення конфліктів",
      ],
      gradient: "from-accent to-yellow-400",
      popular: false,
    },
    {
      title: "Онлайн консультація",
      price: "2000",
      description: "Психологічна підтримка онлайн",
      features: [
        "Тривалість: 45-50 хвилин",
        "Зручний формат",
        "Будь-яка локація",
        "Безпечне підключення",
      ],
      gradient: "from-primary to-cyan-400",
      popular: false,
    },
    {
      title: "Коучинг",
      price: "3000",
      description: "Професійний коучинг для розвитку",
      features: [
        "Тривалість: 45-50 хвилин",
        "Досягнення цілей",
        "Особистісний розвиток",
        "Планування змін",
      ],
      gradient: "from-secondary to-emerald-400",
      popular: false,
    },
    {
      title: "Групова консультація",
      price: "800",
      description: "Інтерактивні групові заняття",
      features: [
        "Тривалість: 2-3 години",
        "Невелика група (до 12 осіб)",
        "Інтерактивні вправи",
        "Практичні навички",
      ],
      gradient: "from-accent to-yellow-400",
      popular: false,
    },
    {
      title: "Соціальна робота",
      price: "600",
      description: "Соціально-психологічна підтримка",
      features: [
        "Тривалість: 45-50 хвилин",
        "Соціальна підтримка",
        "Доступні послуги",
        "Спеціалізована допомога",
      ],
      gradient: "from-primary to-cyan-400",
      popular: false,
    },
    {
      title: "Консультація керівника центру",
      price: "5500",
      description: "Професійна консультація експерта",
      features: [
        "Тривалість: 45-50 хвилин",
        "Найвищий рівень експертизи",
        "Складні кейси",
        "Індивідуальний підхід",
      ],
      gradient: "from-secondary to-emerald-400",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Наші ціни
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Оберіть формат, який найкраще підходить для ваших потреб
          </p>
        </motion.div>

        {/* Cancellation Policy Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="bg-gradient-to-br from-accent/10 via-primary/10 to-secondary/10 rounded-2xl p-8 border-2 border-accent/30 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-yellow-400 flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Зверніть увагу:
                </h3>
                <div className="space-y-3 text-foreground/80 leading-relaxed">
                  <p>
                    У випадку відміни консультації клієнтом менш ніж за 24
                    години призначеного часу сесії, консультація оплачується
                    клієнтом повністю.
                  </p>
                  <p>
                    Якщо психолог відміняє сесію менш ніж за 24 години до
                    початку — він зобов'язується провести наступну консультацію
                    за власний рахунок.
                  </p>
                  <p className="text-sm text-foreground/60 italic">
                    (Винятком є форс-мажорні обставини: різке погіршення стану
                    здоров'я в день консультації, аварія, стихійне лихо).
                  </p>
                  <p className="mt-4 pt-4 border-t border-border">
                    Для того, щоб підтвердити запис на консультацію необхідно
                    здійснити повну передоплату (за 24 год. до часу
                    консультації).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${
                plan.popular ? "border-primary" : "border-border"
              } overflow-hidden flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1.5 rounded-bl-2xl flex items-center gap-1.5 text-sm font-medium">
                    <Star className="w-4 h-4 fill-current" />
                    Популярно
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {plan.title}
                </h3>
                <p className="text-foreground/70 text-sm">{plan.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  {plan.price === "За домовленістю" ? (
                    <span className="text-2xl font-bold text-foreground">
                      {plan.price}
                    </span>
                  ) : (
                    <>
                      <span className="text-sm text-foreground/70">від</span>
                      <span className="text-4xl font-bold text-foreground">
                        {plan.price}
                      </span>
                      <span className="text-foreground/70">грн</span>
                    </>
                  )}
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div
                      className={`w-5 h-5 rounded-full bg-gradient-to-br ${plan.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}
                    >
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-foreground/80 text-sm">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={`block w-full px-6 py-3 rounded-xl text-center font-medium transition-all ${
                  plan.popular
                    ? `bg-gradient-to-br ${plan.gradient} text-white shadow-lg hover:shadow-xl`
                    : "border-2 border-primary text-primary hover:bg-primary/5"
                }`}
              >
                Записатись
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
