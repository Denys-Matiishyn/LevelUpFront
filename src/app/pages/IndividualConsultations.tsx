import { motion } from "motion/react";
import { Link } from "react-router";
import {
  Clock,
  Users,
  CheckCircle2,
  Calendar,
  MessageCircle,
  Shield,
  Heart,
  Target,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function IndividualConsultations() {
  const benefits = [
    {
      icon: Shield,
      title: "Повна конфіденційність",
      description:
        "Всі консультації проходять в атмосфері довіри. Ми гарантуємо анонімність та збереження професійної таємниці.",
    },
    {
      icon: Heart,
      title: "Емпатія та підтримка",
      description:
        "Наші психологи створюють безпечний простір, де ви можете відкрито говорити про свої переживання без осуду.",
    },
    {
      icon: Target,
      title: "Орієнтація на результат",
      description:
        "Ми працюємо над конкретними цілями та допомагаємо вам досягти реальних змін у житті.",
    },
  ];

  const topics = [
    "Робота з невпевненістю у собі, низькою самооцінкою",
    "Допомога у подоланні депресії",
    "Профорієнтація для підлітків",
    "Робота з відсутністю мотивації, лінню, прокрастинацією",
    "Робота з незадоволеністю життям",
    "Робота з незадоволеністю собою",
    "Пошук партнера",
    "Робота з пошуком сенсу життя, коли присутнє незнання як жити далі",
    "Робота з постійним спадом сил та енергії",
    "Допомога та підтримка в момент зміни напрямку діяльності",
    "Допомога у вирішенні непорозуміння в сім'ї",
    "Системна робота з підлітками та їх сім'ями",
    "Допомога в пошуку професійного спрямуванні та відповідного розвитку після закінчення ВУЗу чи під час навчання",
    "Послуги психолога в кризових життєвих ситуаціях (довготривала терапія дорослих та дітей від 7 років)",
    "Допомога в побудові стратегічного плану виходу з кризи в кар'єрі / бізнесі та супровід до досягнення мети",
    "Психологічні консультації пар до одруження для визначення сумісності та запобігання криз та непорозумінь в майбутньому",
    "Індивідуальний та групові Психологічні Трансформаційні Ігри для виявлення прихованих талантів та сильних сторін в реалізації свого бізнесу",
    "Індивідуальні програми-супроводи системних позитивних змін в житті",
    "Психологічна допомога засобами арт-терапії (нейрографіка та інші) дітям від 7 років та дорослим",
    "Он-лайн курси, тренінги, вебінари, майстер-класи з саморозвитку в сферах відносин, фінансів та здоров'я",
    "Індивідуальні курси та тренінги для підлітків з розвитку комунікації, пошуку мотивації до навчання, розвитку креативності, фінансової грамотності, пошуку себе як особистості та професіонала в майбутньому",
    "Курси підвищення кваліфікації педагогічних працівників за КВЕДом 85.59, з наданням сертифікату про підвищення кваліфікації",
  ];

  const process = [
    {
      step: "1",
      title: "Перша зустріч",
      description:
        "Знайомство з психологом, обговорення вашої ситуації та очікувань. Разом визначаємо цілі роботи та підхід.",
    },
    {
      step: "2",
      title: "Регулярні сесії",
      description:
        "Робота над поставленими цілями через діалог, вправи та техніки. Зазвичай сесії проходять 1-2 рази на тиждень.",
    },
    {
      step: "3",
      title: "Прогрес та зміни",
      description:
        "Відстеження результатів, коригування підходу при потребі. Розвиток нових навичок та стратегій.",
    },
    {
      step: "4",
      title: "Завершення",
      description:
        "Підведення підсумків роботи, закріплення досягнень. Можливість періодичних підтримуючих зустрічей.",
    },
  ];

  const formats = [
    {
      title: "Індивідуальні консультації",
      description: "Формат на вибір: онлайн або офлайн",
      features: [
        "Тривалість: 50-60 хвилин",
        "Онлайн (Zoom/Skype) або офлайн (офіс у Львові)",
        "Зручний час за домовленістю",
        "Комфортна атмосфера",
      ],
      price: "500",
    },
    {
      title: "Профорієнтація та кар'єрне самовизначення",
      description: "Формат на вибір: наживо або онлайн",
      features: [
        "Тривалість: 3 заняття по 1 годині",
        "Наживо або онлайн (індивідуально)",
        "Визначення сильних сторін та аналіз нахилів",
        "Складання кар'єрного плану та подолання страху змін",
      ],
      price: "3000",
    },
    {
      title: "Архітектор майбутнього",
      description: "Формат на вибір: наживо або онлайн",
      features: [
        "Тривалість: 4 тижні (1 заняття по 1,5 год на тиждень)",
        "Наживо або онлайн (індивідуально)",
        "Скан сильних сторін та вибір професії мрії",
        "Створення кар'єрного треку та впевнена самопрезентація",
      ],
      price: "від 4400",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 -z-10" />

        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground/80">
                  Індивідуальна робота
                </span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Індивідуальні{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  консультації
                </span>
              </h1>

              <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                Персональна психологічна підтримка для вирішення ваших питань.
                Наші психологи допоможуть вам знайти відповіді, подолати
                труднощі та розкрити свій потенціал в комфортній та довірливій
                атмосфері.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-foreground/70">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>50-60 хвилин</span>
                </div>
                <div className="flex items-center gap-2 text-foreground/70">
                  <Calendar className="w-5 h-5 text-secondary" />
                  <span>Гнучкий графік</span>
                </div>
                <div className="flex items-center gap-2 text-foreground/70">
                  <MessageCircle className="w-5 h-5 text-accent" />
                  <span>Онлайн і офлайн</span>
                </div>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-medium shadow-lg hover:shadow-xl transition-all"
              >
                Записатись на консультацію
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1714974528703-e5ad41abc259?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Individual consultation"
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
              Переваги індивідуальної роботи
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
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6">
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

      {/* Topics */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              З якими питаннями ми працюємо
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Ви можете звернутися до нас з будь-яким питанням, яке вас турбує
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {topics.map((topic, index) => (
              <motion.div
                key={topic}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-foreground/80">{topic}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Як проходить робота
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-6 h-full shadow-lg">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-xl font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary to-secondary" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Formats & Pricing */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Формати та вартість
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-1 gap-8 max-w-2xl mx-auto">
            {formats.map((format, index) => (
              <motion.div
                key={format.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border-2 border-border"
              >
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {format.title}
                </h3>
                <p className="text-foreground/70 mb-6">{format.description}</p>

                <div className="space-y-2 mb-6">
                  {format.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span className="text-sm text-foreground/80">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-border">
                  <Link
                    to="/pricing"
                    className="block w-full px-6 py-3 rounded-xl bg-gradient-to-br from-primary to-cyan-400 text-white font-medium text-center hover:shadow-lg transition-all"
                  >
                    Переглянути ціни
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
