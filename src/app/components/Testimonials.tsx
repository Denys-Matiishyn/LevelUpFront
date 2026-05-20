import { motion } from "motion/react";
import { Link } from "react-router";
import { Star, Quote, MessageSquare, ArrowRight } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Олена М.",
      role: "Клієнт центру",
      text: "Звернулася до LEVEL UP в складний період мого життя. Психолог допоміг мені зрозуміти себе, пропрацювати внутрішні конфлікти та знайти сили рухатися далі. Дуже вдячна за професійну підтримку!",
      rating: 5,
    },
    {
      name: "Андрій К.",
      role: "Учасник тренінгу",
      text: "Проходив груповий тренінг з управління стресом. Отримав не тільки корисні техніки, а й підтримку від інших учасників. Атмосфера довіри та розуміння дозволила відкритися та працювати над собою.",
      rating: 5,
    },
    {
      name: "Марія В.",
      role: "HR-менеджер",
      text: "Замовляли корпоративну програму для нашої команди. Результат перевершив очікування - покращилася комунікація, зменшилася кількість конфліктів. Команда LEVEL UP - справжні професіонали!",
      rating: 5,
    },
    {
      name: "Дмитро П.",
      role: "Клієнт центру",
      text: "Довго не міг вирішитися на консультацію психолога, але зробив правильний вибір. Спеціаліст центру допоміг мені побачити ситуацію під іншим кутом та знайти рішення, про яке я навіть не думав.",
      rating: 5,
    },
    {
      name: "Тетяна С.",
      role: "Учасниця тренінгу",
      text: 'Тренінг з підвищення самооцінки змінив моє ставлення до себе. Навчилася цінувати себе, встановлювати межі та говорити "ні". Рекомендую всім, хто хоче стати впевненішим!',
      rating: 5,
    },
    {
      name: "Ігор Л.",
      role: "Керівник компанії",
      text: "Співпраця з LEVEL UP допомогла нам створити здорову робочу атмосферу. Програма з профілактики вигорання дала відчутні результати - продуктивність зросла, плинність кадрів зменшилась.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Відгуки наших клієнтів
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Те, що говорять люди, яким ми допомогли на їхньому шляху до змін
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-border relative"
            >
              <div className="absolute top-6 right-6 text-primary/10">
                <Quote className="w-12 h-12" />
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-foreground/80 mb-6 leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-foreground/60">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action for Reviews */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-3xl p-8 lg:p-12 border border-primary/20">
            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Поділіться своїм досвідом
            </h3>
            <p className="text-foreground/70 mb-8 text-lg">
              Ваш відгук допоможе іншим людям зробити правильний вибір та
              надихне нашу команду на нові досягнення
            </p>
            <Link
              to="/reviews"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-xl transition-all group"
            >
              <MessageSquare className="w-5 h-5" />
              Залишити відгук
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
