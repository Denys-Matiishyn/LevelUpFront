import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import olgaImage from "/src/app/components/figma/Olga Kolodchak.jpg";
import {
  Heart,
  Users,
  Target,
  Award,
  Clock,
  CheckCircle2,
  Lightbulb,
  Shield,
  ArrowRight,
  FileText,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function About() {
  const stats = [
    { icon: Users, value: "500+", label: "Задоволених клієнтів" },
    { icon: Clock, value: "10+", label: "Років досвіду" },
    { icon: Award, value: "50+", label: "Успішних програм" },
    { icon: Heart, value: "98%", label: "Позитивних відгуків" },
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Досвідчені фахівці",
      description:
        "Ми співпрацюємо з психологами, психотерапевтами, психіатрами та коучами з практичним досвідом роботи від 5 років.",
      gradient: "from-primary to-cyan-400",
    },
    {
      icon: Heart,
      title: "Індивідуальний підхід",
      description:
        "Кожна людина унікальна, тому ми підбираємо формат роботи та методи підтримки ідповідно до ваших потреб і запиту.",
      gradient: "from-secondary to-emerald-400",
    },
    {
      icon: Lightbulb,
      title: "Сучасні методи роботи",
      description:
        "Наші спеціалісти використовують перевірені та сучасні підходи психологічної допомоги і постійно підвищують свою професійну кваліфікацію.",
      gradient: "from-accent to-yellow-400",
    },
    {
      icon: Shield,
      title: "Безпечний і довірливий простір",
      description:
        "Ми створюємо атмосферу підтримки, конфіденційності та поваги, де ви можете відкрито говорити про важливе.",
      gradient: "from-primary to-secondary",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 -z-10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />

        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Про{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  LEVEL UP
                </span>
              </h1>
              <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
                Наш консультаційно-тренінговий центр — це простір професійної
                підтримки, розвитку та внутрішніх змін. Ми створили середовище,
                у якому кожна людина може отримати якісну психологічну допомогу,
                знайти відповіді на важливі життєві питання та відкрити нові
                ресурси для особистісного зростання.
              </p>
              <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
                Ми співпрацюємо з командою висококваліфікованих фахівців —
                психологів, психотерапевтів, психіатрів та коучів, які мають
                щонайменше 5 років практичного досвіду. Наші спеціалісти
                поєднують глибокі професійні знання, сучасні методи роботи та
                індивідуальний підхід до кожної людини.
              </p>
              <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
                У центрі проводяться індивідуальні консультації, групові
                зустрічі, тренінги та освітні програми, спрямовані на
                психологічне благополуччя, розвиток емоційної стійкості,
                покращення якості життя та розкриття особистісного потенціалу.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Ми віримо, що кожна людина має внутрішні ресурси для змін. Наша
                місія — допомогти їх побачити, зміцнити та використати для
                створення гармонійного й усвідомленого життя.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Professional consultation"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-br from-foreground to-gray-800">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center text-white"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <stat.icon className="w-12 h-12 text-primary" />
                </div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Чому обирають нас
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Наші переваги, які роблять нас надійним партнером на шляху до
              особистісного зростання
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-border"
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4`}
                >
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Керівник центру
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Досвідчений психолог, який допомагає вам на шляху до особистісного
              зростання
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-border"
            >
              <div className="grid lg:grid-cols-5 gap-0">
                {/* Profile Image Section */}
                <div className="lg:col-span-2 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center p-12">
                  <div className="text-center">
                    <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-2xl mb-6 ring-4 ring-primary/20">
                      <img
                        src={olgaImage}
                        alt="Ольга Колодчак"
                        className="w-full h-full object-cover object-[center_5%]"
                      />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-foreground">
                        Ольга Колодчак
                      </h3>
                      <p className="text-primary font-medium">
                        Психолог, засновниця та керівник центру LEVEL UP
                      </p>
                      <p className="text-sm text-foreground/60">
                        15+ років досвіду
                      </p>
                    </div>
                  </div>
                </div>

                {/* Info Section */}
                <div className="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-3">
                        Спеціалізація
                      </h4>
                      <p className="text-foreground/70 leading-relaxed">
                        Сімейна психологія, консультування дорослих та дітей,
                        робота з кризовими станами та особистісним зростанням
                      </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground/70">
                          Сертифікований фахівець
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground/70">
                          2000+ консультацій
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground/70">
                          Член УАП
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground/70">
                          Автор статей
                        </span>
                      </div>
                    </div>

                    <Link
                      to="/cv"
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-xl transition-all group"
                    >
                      <FileText className="w-5 h-5" />
                      Ознайомитись детальніше
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
