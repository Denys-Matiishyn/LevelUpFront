import { motion } from "motion/react";
import olgaImage from "/src/app/components/figma/Olga Kolodchak.jpg";
import {
  GraduationCap,
  Award,
  BookOpen,
  Users,
  CheckCircle2,
  Briefcase,
  Heart,
  Target,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function CVForm() {
  const cvData = {
    personalInfo: {
      name: "Ольга Колодчак",
      title: "Психолог, засновниця та керівник центру LEVEL UP",
      email: "ctc.level.up.lviv@gmail.com",
      phone: "+380 67 962 5843",
      location: "Україна",
      experience: "10+ років досвіду",
    },
    summary:
      "Практикуючий психолог з понад 10-річним досвідом роботи, спеціалізація на сімейній психології, консультуванні дорослих та дітей. Засновниця тренінгово-консультаційного центру LEVEL UP. Експерт у роботі з сімейними відносинами, дитячо-батьківськими стосунками, кризовими станами та особистісним зростанням.",
    education: [
      {
        degree: "Спеціаліст",
        institution: "Міжрегіональна академія управління персоналом",
        specialization: "Практична психологія",
        graduated: "2017",
      },
    ],
    certifications: [
      "Сертифікація з когнітивно-поведінкової терапії (CBT)",
      "Курс сімейної системної терапії",
      "Підготовка з кризової психології",
      "Практикум з арт-терапії",
      "Тренінг з Mindfulness та технік усвідомленості",
    ],
    professionalApproaches: [
      "Когнітивно-поведінкова терапія (CBT)",
      "Гештальт-терапія",
      "Сімейна системна терапія",
      "Арт-терапія",
      "Mindfulness та техніки усвідомленості",
      "Позитивна психотерапія",
    ],
    specializations: [
      "Сімейна та подружня терапія",
      "Дитяча та підліткова психологія",
      "Робота з тривожними розладами",
      "Подолання психологічних травм",
      "Розвиток самооцінки та впевненості",
      "Кризове консультування",
      "Профілактика професійного вигорання",
      "Особистісне зростання та розвиток",
    ],
    worksWith: [
      "Подружні пари та сім'ї",
      "Діти та підлітки (від 6 років)",
      "Дорослі з особистими кризами",
      "Люди з тривожними розладами",
      "Робота з самооцінкою та впевненістю",
      "Подолання психотравм",
      "Керівники та бізнес-лідери",
    ],
    achievements: [
      "Понад 2000 успішних індивідуальних консультацій",
      "Автор статей з психології у фахових виданнях",
      "Спікер на національних та міжнародних конференціях з психології",
      "Розробка авторських тренінгових програм для організацій",
      "Член Української асоціації психологів",
      "Організація та проведення понад 100 групових тренінгів",
    ],
    experience: [
      {
        position: "Засновниця та керівниця",
        company: "Тренінгово-консультаційний центр LEVEL UP",
        period: "2015 - Дотепер",
        responsibilities: [
          "Управління центром психологічних послуг",
          "Проведення індивідуальних та сімейних консультацій",
          "Розробка та реалізація тренінгових програм",
          "Супервізія роботи психологів центру",
          "Організація корпоративних програм для компаній",
        ],
      },
      {
        position: "Практикуючий психолог",
        company: "Приватна практика",
        period: "2009 - 2015",
        responsibilities: [
          "Індивідуальне психологічне консультування",
          "Сімейна та подружня терапія",
          "Робота з дітьми та підлітками",
          "Проведення групових тренінгів",
        ],
      },
    ],
    continuingEducation: [
      "Регулярна участь у міжнародних конференціях з психології",
      "Щорічне підвищення кваліфікації та сертифікація",
      "Членство у професійних асоціаціях психологів",
      "Навчання новим методикам та підходам у психотерапії",
    ],
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Profile Image Placeholder */}
                <div className="flex-shrink-0">
                  <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-2xl mb-6 ring-4 ring-primary/20">
                    <img
                      src={olgaImage}
                      alt="Ольга Колодчак"
                      className="w-full h-full object-cover object-[center_5%]"
                    />
                  </div>
                </div>

                {/* Personal Info */}
                <div className="flex-1">
                  <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                    {cvData.personalInfo.name}
                  </h1>
                  <p className="text-xl text-primary font-medium mb-4">
                    {cvData.personalInfo.title}
                  </p>

                  <div className="space-y-2 text-foreground/70">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{cvData.personalInfo.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-primary" />
                      <span>{cvData.personalInfo.experience}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-primary" />
                      <span>{cvData.personalInfo.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-primary" />
                      <span>{cvData.personalInfo.phone}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                Професійний профіль
              </h2>
            </div>
            <p className="text-foreground/70 leading-relaxed text-lg">
              {cvData.summary}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-cyan-400 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                Освіта
              </h2>
            </div>

            <div className="space-y-6">
              {cvData.education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-border"
                >
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-primary font-medium mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-foreground/60 text-sm mb-2">
                    {edu.specialization} • {edu.graduated}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-emerald-400 flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                Сертифікації та підвищення кваліфікації
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {cvData.certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-muted/30 rounded-xl p-4"
                >
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/70">{cert}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-yellow-400 flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                Професійний досвід
              </h2>
            </div>

            <div className="space-y-6">
              {cvData.experience.map((exp, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-border"
                >
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {exp.position}
                  </h3>
                  <p className="text-primary font-medium mb-2">{exp.company}</p>
                  <p className="text-foreground/60 text-sm mb-4">
                    {exp.period}
                  </p>

                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-foreground/70"
                      >
                        <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Professional Approaches */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-emerald-400 flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                Методи роботи
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {cvData.professionalApproaches.map((approach, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-muted/30 rounded-xl p-4"
                >
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/70">{approach}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                Спеціалізації
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {cvData.specializations.map((spec, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-md border border-border"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/70">{spec}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Works With */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-yellow-400 flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                З ким працює
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {cvData.worksWith.map((client, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-muted/30 rounded-xl p-4"
                >
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/70">{client}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                Професійні досягнення
              </h2>
            </div>

            <div className="space-y-4">
              {cvData.achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-md border border-border"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/70">{achievement}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Continuing Education */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-emerald-400 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                Постійний професійний розвиток
              </h2>
            </div>

            <div className="space-y-4">
              {cvData.continuingEducation.map((edu, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-muted/30 rounded-xl p-4"
                >
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/70">{edu}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
