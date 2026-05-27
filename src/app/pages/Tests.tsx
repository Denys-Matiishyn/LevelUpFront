import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import {
  Brain,
  Heart,
  TrendingUp,
  Users,
  CheckCircle2,
  AlertCircle,
  Sparkles,
} from "lucide-react";

interface Question {
  text: string;
  options: { text: string; score: number }[];
}

interface CheckboxQuestion {
  category: string;
  items: { text: string; points: number }[];
}

interface Test {
  id: string;
  title: string;
  description: string;
  icon: typeof Brain;
  gradient: string;
  questions?: Question[];
  checkboxQuestions?: CheckboxQuestion[];
  interpretation?: (score: number) => {
    title: string;
    description: string;
    recommendation: string;
  };
  multiResultInterpretation?: (answers: number[]) => {
    title: string;
    description: string;
    recommendation: string;
  };
  subTests?: {
    title: string;
    questions: Question[];
    interpretation: (score: number) => {
      title: string;
      description: string;
      recommendation: string;
    };
  }[];
}

export default function Tests() {
  const [selectedTest, setSelectedTest] = useState<Test | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [checkboxAnswers, setCheckboxAnswers] = useState<Set<string>>(
    new Set(),
  );
  const [showResults, setShowResults] = useState(false);
  const [subTestIndex, setSubTestIndex] = useState(0);
  const [subTestAnswers, setSubTestAnswers] = useState<number[][]>([
    [],
    [],
    [],
  ]);

  const tests: Test[] = [
    {
      id: "anxiety",
      title: "Тест на рівень тривожності",
      description:
        "Визначте рівень вашої тривожності та дізнайтеся, чи потрібна вам професійна підтримка",
      icon: AlertCircle,
      gradient: "from-primary to-cyan-400",
      questions: [
        {
          text: "Як часто ви відчуваєте напруження або нервозність?",
          options: [
            { text: "Ніколи", score: 0 },
            { text: "Іноді", score: 1 },
            { text: "Часто", score: 2 },
            { text: "Майже завжди", score: 3 },
          ],
        },
        {
          text: "Чи важко вам зупинити тривожні думки?",
          options: [
            { text: "Зовсім не важко", score: 0 },
            { text: "Трохи важко", score: 1 },
            { text: "Досить важко", score: 2 },
            { text: "Дуже важко", score: 3 },
          ],
        },
        {
          text: "Як часто ви турбуєтеся про різні речі?",
          options: [
            { text: "Рідко", score: 0 },
            { text: "Іноді", score: 1 },
            { text: "Часто", score: 2 },
            { text: "Постійно", score: 3 },
          ],
        },
        {
          text: "Чи важко вам розслабитися?",
          options: [
            { text: "Зовсім не важко", score: 0 },
            { text: "Іноді важко", score: 1 },
            { text: "Часто важко", score: 2 },
            { text: "Дуже важко", score: 3 },
          ],
        },
        {
          text: "Чи відчуваєте ви фізичні симптоми тривоги (серцебиття, пітливість)?",
          options: [
            { text: "Ніколи", score: 0 },
            { text: "Рідко", score: 1 },
            { text: "Часто", score: 2 },
            { text: "Постійно", score: 3 },
          ],
        },
      ],
      interpretation: (score) => {
        if (score <= 5) {
          return {
            title: "Низький рівень тривожності",
            description:
              "Ваш рівень тривожності в межах норми. Ви добре справляєтеся зі стресовими ситуаціями.",
            recommendation:
              "Продовжуйте підтримувати здоровий спосіб життя та практикуйте техніки релаксації.",
          };
        } else if (score <= 10) {
          return {
            title: "Помірний рівень тривожності",
            description:
              "Ви відчуваєте певний рівень тривожності, що може впливати на вашу повсякденну діяльність.",
            recommendation:
              "Розгляньте можливість консультації з психологом для вивчення технік управління стресом.",
          };
        } else {
          return {
            title: "Високий рівень тривожності",
            description:
              "Ваш рівень тривожності високий і може значно впливати на якість вашого життя.",
            recommendation:
              "Настійно рекомендуємо звернутися до психолога для професійної підтримки.",
          };
        }
      },
    },
    {
      id: "self-esteem",
      title: "Тест на самооцінку",
      description:
        "Дізнайтеся про рівень вашої самооцінки та отримайте рекомендації щодо її підвищення",
      icon: Heart,
      gradient: "from-secondary to-emerald-400",
      questions: [
        {
          text: "Я вважаю себе цінною людиною",
          options: [
            { text: "Повністю не згоден", score: 0 },
            { text: "Скоріше не згоден", score: 1 },
            { text: "Скоріше згоден", score: 2 },
            { text: "Повністю згоден", score: 3 },
          ],
        },
        {
          text: "Я впевнений у своїх можливостях",
          options: [
            { text: "Ніколи", score: 0 },
            { text: "Іноді", score: 1 },
            { text: "Часто", score: 2 },
            { text: "Завжди", score: 3 },
          ],
        },
        {
          text: "Я легко приймаю комплімент и",
          options: [
            { text: "Ніколи", score: 0 },
            { text: "Рідко", score: 1 },
            { text: "Часто", score: 2 },
            { text: "Завжди", score: 3 },
          ],
        },
        {
          text: "Я задоволений собою",
          options: [
            { text: "Зовсім ні", score: 0 },
            { text: "Скоріше ні", score: 1 },
            { text: "Скоріше так", score: 2 },
            { text: "Повністю так", score: 3 },
          ],
        },
        {
          text: "Я вірю, що заслуговую на успіх",
          options: [
            { text: "Не вірю", score: 0 },
            { text: "Іноді", score: 1 },
            { text: "Часто", score: 2 },
            { text: "Завжди", score: 3 },
          ],
        },
      ],
      interpretation: (score) => {
        if (score <= 5) {
          return {
            title: "Низька самооцінка",
            description:
              "Ваша самооцінка потребує уваги. Ви можете недооцінювати свої якості та досягнення.",
            recommendation:
              "Рекомендуємо пройти курс з підвищення самооцінки або звернутися до психолога.",
          };
        } else if (score <= 10) {
          return {
            title: "Помірна самооцінка",
            description:
              "Ваша самооцінка в межах норми, але є простір для зростання.",
            recommendation:
              "Працюйте над самоприйняттям та визнанням власних досягнень.",
          };
        } else {
          return {
            title: "Висока самооцінка",
            description:
              "У вас здорова самооцінка. Ви цінуєте себе та впевнені у своїх можливостях.",
            recommendation:
              "Продовжуйте підтримувати позитивне ставлення до себе.",
          };
        }
      },
    },
    {
      id: "stress",
      title: "Тест на рівень стресу",
      description:
        "Оцініть рівень стресу в вашому житті та дізнайтеся, як краще з ним справлятися",
      icon: TrendingUp,
      gradient: "from-accent to-yellow-400",
      questions: [
        {
          text: "Як часто ви відчуваєте перевантаження?",
          options: [
            { text: "Ніколи", score: 0 },
            { text: "Рідко", score: 1 },
            { text: "Часто", score: 2 },
            { text: "Постійно", score: 3 },
          ],
        },
        {
          text: "Чи маєте ви проблеми зі сном через стрес?",
          options: [
            { text: "Ніколи", score: 0 },
            { text: "Іноді", score: 1 },
            { text: "Часто", score: 2 },
            { text: "Майже завжди", score: 3 },
          ],
        },
        {
          text: "Як часто ви відчуваєте втому без причини?",
          options: [
            { text: "Ніколи", score: 0 },
            { text: "Рідко", score: 1 },
            { text: "Часто", score: 2 },
            { text: "Постійно", score: 3 },
          ],
        },
        {
          text: "Чи важко вам концентруватися на завданнях?",
          options: [
            { text: "Ні", score: 0 },
            { text: "Іноді", score: 1 },
            { text: "Часто", score: 2 },
            { text: "Дуже важко", score: 3 },
          ],
        },
        {
          text: "Як часто ви відчуваєте роздратування?",
          options: [
            { text: "Рідко", score: 0 },
            { text: "Іноді", score: 1 },
            { text: "Часто", score: 2 },
            { text: "Постійно", score: 3 },
          ],
        },
      ],
      interpretation: (score) => {
        if (score <= 5) {
          return {
            title: "Низький рівень стресу",
            description:
              "Ваш рівень стресу в межах норми. Ви добре справляєтеся з життєвими викликами.",
            recommendation:
              "Продовжуйте практикувати здорові звички та техніки релаксації.",
          };
        } else if (score <= 10) {
          return {
            title: "Помірний рівень стресу",
            description:
              "Ви відчуваєте помірний стрес, який може впливати на ваше самопочуття.",
            recommendation:
              "Розгляньте можливість навчитися технікам управління стресом.",
          };
        } else {
          return {
            title: "Високий рівень стресу",
            description:
              "Ваш рівень стресу високий і може негативно впливати на ваше здоров'я.",
            recommendation:
              "Рекомендуємо звернутися до психолога для професійної допомоги.",
          };
        }
      },
    },
    {
      id: "stress-scherbatykh",
      title: "Тест на стрес (за В. Ю. Щербатих)",
      description:
        "Оцініть рівень стресу за 48 симптомами в 4 категоріях: інтелектуальні, поведінкові, емоційні та фізіологічні",
      icon: TrendingUp,
      gradient: "from-accent to-orange-400",
      checkboxQuestions: [
        {
          category: "Інтелектуальні (1 бал)",
          items: [
            { text: "Переважання негативних думок", points: 1 },
            { text: "Труднощі зосередження", points: 1 },
            { text: "Погіршення показників пам'яті", points: 1 },
            {
              text: "Постійне обертання думок навколо однієї проблеми",
              points: 1,
            },
            { text: "Підвищена відволікання", points: 1 },
            { text: "Труднощі прийняття рішень", points: 1 },
            { text: "Погані сни, кошмари", points: 1 },
            { text: "Часті помилки в обчисленнях", points: 1 },
            {
              text: "Пасивність, бажання перекласти відповідальність",
              points: 1,
            },
            { text: "Порушення логіки, сплутане мислення", points: 1 },
            { text: "Імпульсивність мислення, поспішні рішення", points: 1 },
            { text: "Звуження «поля зору»", points: 1 },
          ],
        },
        {
          category: "Поведінкові (1 бал)",
          items: [
            { text: "Втрата апетиту або переїдання", points: 1 },
            { text: "Зростання помилок при звичних діях", points: 1 },
            { text: "Більш швидка або уповільнена мова", points: 1 },
            { text: "Тремтіння голосу", points: 1 },
            { text: "Збільшення конфліктних ситуацій", points: 1 },
            { text: "Хронічна нестача часу", points: 1 },
            { text: "Зменшення часу на спілкування з близькими", points: 1 },
            { text: "Втрата уваги до свого зовнішнього вигляду", points: 1 },
            { text: "Антисоціальна поведінка", points: 1 },
            { text: "Низька продуктивність", points: 1 },
            { text: "Порушення сну або безсоння", points: 1 },
            { text: "Інтенсивне куріння та вживання алкоголю", points: 1 },
          ],
        },
        {
          category: "Емоційні (1.5 бали)",
          items: [
            { text: "Занепокоєння, підвищена тривожність", points: 1.5 },
            { text: "Підозрілість", points: 1.5 },
            { text: "Похмурий настрій", points: 1.5 },
            { text: "Відчуття постійної туги, депресія", points: 1.5 },
            { text: "Дратівливість, напади гніву", points: 1.5 },
            { text: "Емоційна «тупість», байдужість", points: 1.5 },
            { text: "Цинічний, недоречний гумор", points: 1.5 },
            { text: "Зменшення впевненості в собі", points: 1.5 },
            { text: "Зменшення задоволеності життям", points: 1.5 },
            { text: "Почуття відчуженості, самотності", points: 1.5 },
            { text: "Втрата інтересу до життя", points: 1.5 },
            { text: "Зниження самооцінки, почуття провини", points: 1.5 },
          ],
        },
        {
          category: "Фізіологічні (2 бали)",
          items: [
            { text: "Болі в різних частинах тіла, головні болі", points: 2 },
            { text: "Підвищення або зниження тиску", points: 2 },
            { text: "Прискорений або неритмічний пульс", points: 2 },
            { text: "Порушення травлення", points: 2 },
            { text: "Порушення дихання", points: 2 },
            { text: "Відчуття напруги в м'язах", points: 2 },
            { text: "Підвищена стомлюваність", points: 2 },
            { text: "Тремтіння в руках, судоми", points: 2 },
            { text: "Алергія чи шкірні висипання", points: 2 },
            { text: "Підвищена пітливість", points: 2 },
            { text: "Швидке збільшення або втрата ваги", points: 2 },
            { text: "Зниження імунітету, часті нездужання", points: 2 },
          ],
        },
      ],
      interpretation: (score) => {
        if (score <= 5) {
          return {
            title: "Відсутній стрес",
            description:
              "Ваш рівень стресу в межах норми. Ви добре справляєтеся зі стресовими ситуаціями.",
            recommendation:
              "Продовжуйте підтримувати здоровий спосіб життя та практикуйте техніки релаксації.",
          };
        } else if (score <= 12) {
          return {
            title: "Помірний стрес",
            description:
              "Ви відчуваєте помірний рівень стресу. Це нормальна реакція на життєві виклики.",
            recommendation:
              "Розгляньте можливість консультації з психологом для вивчення технік управління стресом.",
          };
        } else if (score <= 24) {
          return {
            title: "Виражене напруження",
            description:
              "Ваш рівень стресу значний. Рекомендується застосувати методи подолання стресу.",
            recommendation:
              "Настійно рекомендуємо звернутися до психолога для професійної підтримки.",
          };
        } else if (score <= 40) {
          return {
            title: "Сильний стрес",
            description:
              "Ваш рівень стресу високий і може негативно впливати на ваше здоров'я.",
            recommendation:
              "Бажана допомога психолога. Не відкладайте звернення за професійною підтримкою.",
          };
        } else {
          return {
            title: "Виснаження адаптаційної енергії",
            description:
              "Ваш організм виснажений від постійного стресу. Це може призвести до серйозних проблем зі здоров'ям.",
            recommendation:
              "Терміново зверніться до психолога або психотерапевта для професійної допомоги.",
          };
        }
      },
    },
    {
      id: "perception",
      title: "Тест на сприйняття інформації",
      description:
        "Визначте свій домінуючий тип сприйняття: візуал, аудіал, кінестетик або дигітал",
      icon: Brain,
      gradient: "from-purple-500 to-pink-400",
      questions: [
        {
          text: "Який із цих образів найкраще описує ваш спосіб мислення?",
          options: [
            { text: "Яскраві картинки та образи", score: 10 },
            { text: "Звуки та слова", score: 20 },
            { text: "Відчуття та емоції", score: 30 },
            { text: "Логіка та факти", score: 40 },
          ],
        },
        {
          text: "Як ви краще запам'ятовуєте інформацію?",
          options: [
            { text: "Через візуальні образи", score: 10 },
            { text: "Через слухання", score: 20 },
            { text: "Через дії та відчуття", score: 30 },
            { text: "Через логічний аналіз", score: 40 },
          ],
        },
        {
          text: "Що для вас найважливіше при спілкуванні?",
          options: [
            { text: "Візуальний контакт", score: 10 },
            { text: "Інтонація голосу", score: 20 },
            { text: "Фізичний контакт", score: 30 },
            { text: "Зміст слів", score: 40 },
          ],
        },
        {
          text: "Як ви краще вчитеся?",
          options: [
            { text: "Через діаграми та схеми", score: 10 },
            { text: "Через пояснення", score: 20 },
            { text: "Через практику", score: 30 },
            { text: "Через читання", score: 40 },
          ],
        },
        {
          text: "Що вас найбільше відволікає?",
          options: [
            { text: "Візуальні подразники", score: 10 },
            { text: "Шум", score: 20 },
            { text: "Незручність", score: 30 },
            { text: "Логічні суперечності", score: 40 },
          ],
        },
        {
          text: "Як ви описуєте свої спогади?",
          options: [
            { text: "Я бачу це в голові", score: 10 },
            { text: "Я чую це в голові", score: 20 },
            { text: "Я відчуваю це", score: 30 },
            { text: "Я розумію це", score: 40 },
          ],
        },
        {
          text: "Який стиль навчання вам найбільше підходить?",
          options: [
            { text: "Візуальний", score: 10 },
            { text: "Аудіальний", score: 20 },
            { text: "Кінестетичний", score: 30 },
            { text: "Логічний", score: 40 },
          ],
        },
        {
          text: "Як ви краще розумієте нову інформацію?",
          options: [
            { text: "Через картинки", score: 10 },
            { text: "Через пояснення", score: 20 },
            { text: "Через досвід", score: 30 },
            { text: "Через текст", score: 40 },
          ],
        },
        {
          text: "Що для вас найважливіше в презентації?",
          options: [
            { text: "Візуальний дизайн", score: 10 },
            { text: "Голос спікера", score: 20 },
            { text: "Інтерактивність", score: 30 },
            { text: "Структура та логіка", score: 40 },
          ],
        },
        {
          text: "Як ви краще плануєте?",
          options: [
            { text: "Через ментальні карти", score: 10 },
            { text: "Через обговорення", score: 20 },
            { text: "Через дії", score: 30 },
            { text: "Через списки", score: 40 },
          ],
        },
        {
          text: "Що вас найбільше надихає?",
          options: [
            { text: "Красиві образи", score: 10 },
            { text: "Музика та звуки", score: 20 },
            { text: "Фізична активність", score: 30 },
            { text: "Ідеї та концепції", score: 40 },
          ],
        },
        {
          text: "Як ви краще вирішуєте проблеми?",
          options: [
            { text: "Через візуалізацію", score: 10 },
            { text: "Через обговорення", score: 20 },
            { text: "Через дії", score: 30 },
            { text: "Через аналіз", score: 40 },
          ],
        },
      ],
      multiResultInterpretation: (answers) => {
        const counts = { V: 0, A: 0, K: 0, D: 0 };
        answers.forEach((score) => {
          if (score === 10) counts.V++;
          else if (score === 20) counts.A++;
          else if (score === 30) counts.K++;
          else if (score === 40) counts.D++;
        });

        const dominant = Object.entries(counts).reduce((a, b) =>
          a[1] > b[1] ? a : b,
        )[0] as "V" | "A" | "K" | "D";

        const descriptions = {
          V: "Візуал: сприймають світ через зорові образи, думають картинками",
          A: "Аудіал: сприймають через звуки та слова, важлива інтонація",
          K: "Кінестетик: сприймають через відчуття та емоції, важливий контакт",
          D: "Дігітал: сприймають через логіку та систему, факти і цифри",
        };

        return {
          title: `Домінуючий тип: ${dominant}`,
          description: descriptions[dominant],
          recommendation:
            "Використовуйте свій домінуючий тип сприйняття для ефективного навчання та спілкування.",
        };
      },
    },
    {
      id: "kon-1",
      title: "Методика КОН-1",
      description: "Виявлення комунікативних та організаторських здібностей",
      icon: Users,
      gradient: "from-blue-500 to-indigo-400",
      questions: [
        {
          text: "Чи багато у вас друзів, з якими ви постійно спілкуєтесь?",
          options: [
            { text: "Так", score: 1 },
            { text: "Ні", score: 0 },
          ],
        },
        {
          text: "Чи часто вам вдається схилити більшість товаришів до прийняття вашої думки?",
          options: [
            { text: "Так", score: 1 },
            { text: "Ні", score: 0 },
          ],
        },
        {
          text: "Чи довго вас турбує відчуття образи, завданої товаришем?",
          options: [
            { text: "Так", score: 0 },
            { text: "Ні", score: 1 },
          ],
        },
        {
          text: "Чи завжди вам важко орієнтуватися в критичній ситуації?",
          options: [
            { text: "Так", score: 0 },
            { text: "Ні", score: 1 },
          ],
        },
        {
          text: "Чи є у вас прагнення до знайомств із новими людьми?",
          options: [
            { text: "Так", score: 1 },
            { text: "Ні", score: 0 },
          ],
        },
        {
          text: "Чи подобається вам займатися громадською роботою?",
          options: [
            { text: "Так", score: 1 },
            { text: "Ні", score: 0 },
          ],
        },
        {
          text: "Правда, що вам приємніше проводити час із книгою, ніж із людьми?",
          options: [
            { text: "Так", score: 0 },
            { text: "Ні", score: 1 },
          ],
        },
        {
          text: "Якщо виникли перешкоди у реалізації намірів, чи легко ви від них відступаєте?",
          options: [
            { text: "Так", score: 0 },
            { text: "Ні", score: 1 },
          ],
        },
        {
          text: "Чи легко ви вступаєте в контакт із людьми, які значно старші вас?",
          options: [
            { text: "Так", score: 1 },
            { text: "Ні", score: 0 },
          ],
        },
        {
          text: "Чи любите Ви організовувати зі своїми товаришами різні ігри та розваги?",
          options: [
            { text: "Так", score: 1 },
            { text: "Ні", score: 0 },
          ],
        },
        {
          text: "Чи важко вам включитися в спілкування в новому товаристві?",
          options: [
            { text: "Так", score: 0 },
            { text: "Ні", score: 1 },
          ],
        },
        {
          text: "Чи часто ви відкладаєте на наступні дні справи, які потрібно виконати сьогодні?",
          options: [
            { text: "Так", score: 0 },
            { text: "Ні", score: 1 },
          ],
        },
        {
          text: "Чи легко вам вдається встановлювати контакт із незнайомими людьми?",
          options: [
            { text: "Так", score: 1 },
            { text: "Ні", score: 0 },
          ],
        },
        {
          text: "Чи домагаєтесь ви, щоб товариші діяли відповідно до ваших думок?",
          options: [
            { text: "Так", score: 1 },
            { text: "Ні", score: 0 },
          ],
        },
        {
          text: "Чи важко ви адаптуєтесь в новому колективі?",
          options: [
            { text: "Так", score: 0 },
            { text: "Ні", score: 1 },
          ],
        },
        {
          text: "Правда, що у вас не буває конфліктів через невиконання товаришами своїх обіцянок?",
          options: [
            { text: "Так", score: 0 },
            { text: "Ні", score: 1 },
          ],
        },
        {
          text: "Чи прагнете ви при нагоді познайомитися й поговорити з новою людиною?",
          options: [
            { text: "Так", score: 1 },
            { text: "Ні", score: 0 },
          ],
        },
        {
          text: "Чи часто при вирішені важливих справ ви берете ініціативу на себе?",
          options: [
            { text: "Так", score: 1 },
            { text: "Ні", score: 0 },
          ],
        },
        {
          text: "Чи дратують вас оточуючі люди, чи хочеться вам побути одному?",
          options: [
            { text: "Так", score: 0 },
            { text: "Ні", score: 1 },
          ],
        },
        {
          text: "Правда, що ви погано орієнтуєтесь в незнайомій ситуації?",
          options: [
            { text: "Так", score: 0 },
            { text: "Ні", score: 1 },
          ],
        },
        {
          text: "Чи подобаєтеся вам постійно знаходитися серед людей?",
          options: [
            { text: "Так", score: 1 },
            { text: "Ні", score: 0 },
          ],
        },
        {
          text: "Чи виникає у вас роздратованість, якщо не вдається закінчити розпочату справу?",
          options: [
            { text: "Так", score: 1 },
            { text: "Ні", score: 0 },
          ],
        },
        {
          text: "Чи відчуваєте труднощі, сором'язливість при прояві ініціативи з новою людиною?",
          options: [
            { text: "Так", score: 0 },
            { text: "Ні", score: 1 },
          ],
        },
        {
          text: "Чи правда, що ви стомлюєтесь від тривалого спілкування з товаришами?",
          options: [
            { text: "Так", score: 0 },
            { text: "Ні", score: 1 },
          ],
        },
        {
          text: "Чи любите ви брати участь у колективних іграх?",
          options: [
            { text: "Так", score: 1 },
            { text: "Ні", score: 0 },
          ],
        },
        {
          text: "Чи часто ви виявляєте ініціативу при вирішені питань?",
          options: [
            { text: "Так", score: 1 },
            { text: "Ні", score: 0 },
          ],
        },
        {
          text: "Чи правда, що ви відчуваєте себе невпевнено серед малознайомих людей?",
          options: [
            { text: "Так", score: 0 },
            { text: "Ні", score: 1 },
          ],
        },
        {
          text: "Чи правда, що ви рідко прагнете довести свою правоту?",
          options: [
            { text: "Так", score: 0 },
            { text: "Ні", score: 1 },
          ],
        },
        {
          text: "Чи вважаєте ви, що потрібно прикласти великі зусилля, щоб внести пожвавлення в незнайоме товариство?",
          options: [
            { text: "Так", score: 0 },
            { text: "Ні", score: 1 },
          ],
        },
        {
          text: "Чи брали ви участь у громадській роботі в школі?",
          options: [
            { text: "Так", score: 1 },
            { text: "Ні", score: 0 },
          ],
        },
        {
          text: "Чи прагнете ви обмежити коло своїх знайомих невеликою кількістю людей?",
          options: [
            { text: "Так", score: 0 },
            { text: "Ні", score: 1 },
          ],
        },
        {
          text: "Правда, що ви намагаєтесь відстоювати свою думку, якщо вона не була прийнята?",
          options: [
            { text: "Так", score: 0 },
            { text: "Ні", score: 1 },
          ],
        },
        {
          text: "Чи почуваєте ви себе невимушено в незнайомому оточенні?",
          options: [
            { text: "Так", score: 1 },
            { text: "Ні", score: 0 },
          ],
        },
        {
          text: "Чи з охотою ви приступаєте до організації різних заходів для товаришів?",
          options: [
            { text: "Так", score: 1 },
            { text: "Ні", score: 0 },
          ],
        },
        {
          text: "Правда, що ви почуваєте себе впевнено, коли говорите великій групі людей?",
          options: [
            { text: "Так", score: 0 },
            { text: "Ні", score: 1 },
          ],
        },
        {
          text: "Чи часто ви спізнюєтесь на ділові зустрічі?",
          options: [
            { text: "Так", score: 0 },
            { text: "Ні", score: 1 },
          ],
        },
        {
          text: "Правда, що у вас багато друзів?",
          options: [
            { text: "Так", score: 1 },
            { text: "Ні", score: 0 },
          ],
        },
        {
          text: "Чи часто ви опиняєтесь в центрі уваги товаришів?",
          options: [
            { text: "Так", score: 1 },
            { text: "Ні", score: 0 },
          ],
        },
        {
          text: "Чи часто ви соромитесь при спілкуванні з малознайомими людьми?",
          options: [
            { text: "Так", score: 0 },
            { text: "Ні", score: 1 },
          ],
        },
        {
          text: "Чи правда, що ви не дуже впевнено почуваєте себе у великій групі товаришів?",
          options: [
            { text: "Так", score: 0 },
            { text: "Ні", score: 1 },
          ],
        },
      ],
      multiResultInterpretation: (answers) => {
        const commAnswers = answers.filter((_, i) => i % 2 === 0);
        const orgAnswers = answers.filter((_, i) => i % 2 === 1);

        const commScore = commAnswers.reduce((sum, score) => sum + score, 0);
        const orgScore = orgAnswers.reduce((sum, score) => sum + score, 0);

        const K_comm = commScore / 20;
        const K_org = orgScore / 20;

        const getLevel = (k: number) => {
          if (k < 0.45) return 1;
          if (k <= 0.55) return 2;
          if (k <= 0.65) return 3;
          if (k <= 0.75) return 4;
          return 5;
        };

        const levelDescriptions = {
          1: "вкрай низький",
          2: "нижче середнього",
          3: "середній",
          4: "високий",
          5: "дуже високий",
        };

        const commLevel = getLevel(K_comm);
        const orgLevel = getLevel(K_org);

        return {
          title: `Комунікативні: ${K_comm.toFixed(2)} | Організаторські: ${K_org.toFixed(2)}`,
          description: `Комунікативні здібності: ${levelDescriptions[commLevel]}. Організаторські здібності: ${levelDescriptions[orgLevel]}.`,
          recommendation:
            "Розвивайте свої сильні сторони та працюйте над слабкими для досягнення кращих результатів.",
        };
      },
    },
    {
      id: "parents",
      title: "Тести для батьків",
      description:
        "Три тести для оцінки вашого батьківства та стосунків з дітьми",
      icon: Heart,
      gradient: "from-pink-500 to-rose-400",
      subTests: [
        {
          title: "Як ви розумієте своїх дітей?",
          questions: [
            {
              text: "На деякі вчинки дитини ви часто реагуєте «вибухом», а потім шкодуєте про це.",
              options: [
                { text: "Так", score: 0 },
                { text: "Ні", score: 10 },
                { text: "Не знаю", score: 5 },
              ],
            },
            {
              text: "Деколи ви користуєтеся допомогою або порадою інших осіб у вихованні.",
              options: [
                { text: "Так", score: 10 },
                { text: "Ні", score: 0 },
                { text: "Не знаю", score: 5 },
              ],
            },
            {
              text: "Ваша інтуїція і досвід — кращі порадники у вихованні дитини.",
              options: [
                { text: "Так", score: 0 },
                { text: "Ні", score: 10 },
                { text: "Не знаю", score: 5 },
              ],
            },
            {
              text: "Деколи вам трапляється довіряти дитині секрет, який нікому іншому не розказали.",
              options: [
                { text: "Так", score: 10 },
                { text: "Ні", score: 0 },
                { text: "Не знаю", score: 5 },
              ],
            },
            {
              text: "Вас ображає негативна думка інших людей про вашу дитину.",
              options: [
                { text: "Так", score: 0 },
                { text: "Ні", score: 10 },
                { text: "Не знаю", score: 5 },
              ],
            },
            {
              text: "Вам траплялося просити у дитини вибачення за свою поведінку.",
              options: [
                { text: "Так", score: 10 },
                { text: "Ні", score: 0 },
                { text: "Не знаю", score: 5 },
              ],
            },
            {
              text: "Чи вважаєте ви, що дитина не повинна мати секретів від батьків.",
              options: [
                { text: "Так", score: 0 },
                { text: "Ні", score: 10 },
                { text: "Не знаю", score: 5 },
              ],
            },
            {
              text: "Помічаєте різницю між своїм характером і характером дитини, яка приємно дивує.",
              options: [
                { text: "Так", score: 10 },
                { text: "Ні", score: 0 },
                { text: "Не знаю", score: 5 },
              ],
            },
            {
              text: "Ви надто сильно переживаєте неприємності вашої дитини.",
              options: [
                { text: "Так", score: 0 },
                { text: "Ні", score: 10 },
                { text: "Не знаю", score: 5 },
              ],
            },
            {
              text: "Чи можете утриматися від купівлі іграшки, знаючи що дома їх вже багато.",
              options: [
                { text: "Так", score: 10 },
                { text: "Ні", score: 0 },
                { text: "Не знаю", score: 5 },
              ],
            },
            {
              text: "Ви знаєте, що до певного віку кращий виховний аргумент — фізичне покарання.",
              options: [
                { text: "Так", score: 0 },
                { text: "Ні", score: 10 },
                { text: "Не знаю", score: 5 },
              ],
            },
            {
              text: "Ваша дитина саме така, про яку ви мрієте.",
              options: [
                { text: "Так", score: 10 },
                { text: "Ні", score: 0 },
                { text: "Не знаю", score: 5 },
              ],
            },
            {
              text: "Ваша дитина завдає більше турбот, аніж радощів.",
              options: [
                { text: "Так", score: 0 },
                { text: "Ні", score: 10 },
                { text: "Не знаю", score: 5 },
              ],
            },
            {
              text: "Здається, що ваша дитина навчає вас по-новому думати і поводитися.",
              options: [
                { text: "Так", score: 10 },
                { text: "Ні", score: 0 },
                { text: "Не знаю", score: 5 },
              ],
            },
            {
              text: "Чи бувають у вас прикрощі з вашою дитиною.",
              options: [
                { text: "Так", score: 0 },
                { text: "Ні", score: 10 },
                { text: "Не знаю", score: 5 },
              ],
            },
          ],
          interpretation: (score) => {
            if (score >= 100) {
              return {
                title: "Великі здібності до розуміння",
                description:
                  "Ви чудово розумієте свою дитину та маєте гармонійні стосунки.",
                recommendation:
                  "Продовжуйте підтримувати теплі стосунки з дитиною.",
              };
            } else if (score >= 50) {
              return {
                title: "На вірному шляху",
                description:
                  "Ви на правильному шляху, але є певні труднощі у розумінні дитини.",
                recommendation:
                  "Розгляньте можливість більш глибокого спілкування з дитиною.",
              };
            } else {
              return {
                title: "Потребує значного покращення",
                description:
                  "Ваше розуміння дитини потребує значного покращення.",
                recommendation:
                  "Рекомендуємо звернутися до психолога для консультації.",
              };
            }
          },
        },
        {
          title: "Які ви батьки?",
          questions: [
            {
              text: "Чи вважаєте ви, що у вашій сім'ї є взаєморозуміння з дітьми?",
              options: [
                { text: "Так", score: 2 },
                { text: "Іноді", score: 1 },
                { text: "Ні", score: 0 },
              ],
            },
            {
              text: "Чи ведуть ваші діти з вами задушевні бесіди, чи радяться з особистих питань?",
              options: [
                { text: "Так", score: 2 },
                { text: "Іноді", score: 1 },
                { text: "Ні", score: 0 },
              ],
            },
            {
              text: "Чи цікавляться діти вашою роботою?",
              options: [
                { text: "Так", score: 2 },
                { text: "Іноді", score: 1 },
                { text: "Ні", score: 0 },
              ],
            },
            {
              text: "Чи знаєте ви друзів своїх дітей?",
              options: [
                { text: "Так", score: 2 },
                { text: "Іноді", score: 1 },
                { text: "Ні", score: 0 },
              ],
            },
            {
              text: "Чи бувають друзі вашої дитини у вас вдома?",
              options: [
                { text: "Так", score: 2 },
                { text: "Іноді", score: 1 },
                { text: "Ні", score: 0 },
              ],
            },
            {
              text: "Чи беруть ваші діти разом з вами участь у господарських справах?",
              options: [
                { text: "Так", score: 2 },
                { text: "Іноді", score: 1 },
                { text: "Ні", score: 0 },
              ],
            },
            {
              text: "Чи є у вас із дітьми спільні справи, захоплення?",
              options: [
                { text: "Так", score: 2 },
                { text: "Іноді", score: 1 },
                { text: "Ні", score: 0 },
              ],
            },
            {
              text: "Чи беруть діти участь у підготовці сімейних свят?",
              options: [
                { text: "Так", score: 2 },
                { text: "Іноді", score: 1 },
                { text: "Ні", score: 0 },
              ],
            },
            {
              text: "Чи бажають діти щоб під час дитячих свят ви були разом із ними?",
              options: [
                { text: "Так", score: 2 },
                { text: "Іноді", score: 1 },
                { text: "Ні", score: 0 },
              ],
            },
            {
              text: "Чи обговорюєте ви з дітьми телепередачі, прочитані книги?",
              options: [
                { text: "Так", score: 2 },
                { text: "Іноді", score: 1 },
                { text: "Ні", score: 0 },
              ],
            },
            {
              text: "Чи берете разом із дітьми участь в екскурсіях, походах, прогулянках?",
              options: [
                { text: "Так", score: 2 },
                { text: "Іноді", score: 1 },
                { text: "Ні", score: 0 },
              ],
            },
            {
              text: "Чи віддаєте ви перевагу відпочинку з дітьми?",
              options: [
                { text: "Так", score: 2 },
                { text: "Іноді", score: 1 },
                { text: "Ні", score: 0 },
              ],
            },
          ],
          interpretation: (score) => {
            if (score > 20) {
              return {
                title: "Все гаразд",
                description:
                  "Ваші стосунки з дітьми чудові, є повне взаєморозуміння.",
                recommendation:
                  "Продовжуйте підтримувати теплі стосунки з дітьми.",
              };
            } else if (score >= 10) {
              return {
                title: "Задовільно",
                description:
                  "Ваші стосунки задовільні, але можуть бути однобічними.",
                recommendation:
                  "Розгляньте можливість більш активного спілкування з дітьми.",
              };
            } else {
              return {
                title: "Контакт неналагоджений",
                description:
                  "Ваш контакт з дітьми потребує значного покращення.",
                recommendation:
                  "Рекомендуємо звернутися до психолога для консультації.",
              };
            }
          },
        },
        {
          title: "Ваші взаємини із дитиною",
          questions: [
            {
              text: "Чи подобається Вам Ваша дитина?",
              options: [
                { text: "Майже завжди", score: 4 },
                { text: "Іноді", score: 2 },
                { text: "Ніколи", score: 0 },
              ],
            },
            {
              text: "Чи слухаєте Ви що говорить дитина?",
              options: [
                { text: "Майже завжди", score: 4 },
                { text: "Іноді", score: 2 },
                { text: "Ніколи", score: 0 },
              ],
            },
            {
              text: "Чи дивитеся Ви на дитину коли вона говорить?",
              options: [
                { text: "Майже завжди", score: 4 },
                { text: "Іноді", score: 2 },
                { text: "Ніколи", score: 0 },
              ],
            },
            {
              text: "Чи намагаєтеся створити відчуття значущості того про що говорить дитина?",
              options: [
                { text: "Майже завжди", score: 4 },
                { text: "Іноді", score: 2 },
                { text: "Ніколи", score: 0 },
              ],
            },
            {
              text: "Чи виправляєте Ви мовлення дитини?",
              options: [
                { text: "Майже завжди", score: 4 },
                { text: "Іноді", score: 2 },
                { text: "Ніколи", score: 0 },
              ],
            },
            {
              text: "Чи дозволяєте дитині робити помилки?",
              options: [
                { text: "Майже завжди", score: 4 },
                { text: "Іноді", score: 2 },
                { text: "Ніколи", score: 0 },
              ],
            },
            {
              text: "Чи хвалите Ви дитину, чи обіймаєте її?",
              options: [
                { text: "Майже завжди", score: 4 },
                { text: "Іноді", score: 2 },
                { text: "Ніколи", score: 0 },
              ],
            },
            {
              text: "Чи смієтеся Ви разом із дитиною?",
              options: [
                { text: "Майже завжди", score: 4 },
                { text: "Іноді", score: 2 },
                { text: "Ніколи", score: 0 },
              ],
            },
            {
              text: "Чи відводите щодня час для читання дитині й для бесід?",
              options: [
                { text: "Майже завжди", score: 4 },
                { text: "Іноді", score: 2 },
                { text: "Ніколи", score: 0 },
              ],
            },
            {
              text: "Чи граєтесь Ви з дитиною в ігри?",
              options: [
                { text: "Майже завжди", score: 4 },
                { text: "Іноді", score: 2 },
                { text: "Ніколи", score: 0 },
              ],
            },
            {
              text: "Чи заохочуєте інтереси та захоплення дитини?",
              options: [
                { text: "Майже завжди", score: 4 },
                { text: "Іноді", score: 2 },
                { text: "Ніколи", score: 0 },
              ],
            },
            {
              text: "Чи має дитина хоча б одну-дві власні книги?",
              options: [
                { text: "Майже завжди", score: 4 },
                { text: "Іноді", score: 2 },
                { text: "Ніколи", score: 0 },
              ],
            },
            {
              text: "Чи має дитина місце відведене для неї?",
              options: [
                { text: "Майже завжди", score: 4 },
                { text: "Іноді", score: 2 },
                { text: "Ніколи", score: 0 },
              ],
            },
            {
              text: "Чи подаєте приклад дитині читаючи газети, журнали, книги?",
              options: [
                { text: "Майже завжди", score: 4 },
                { text: "Іноді", score: 2 },
                { text: "Ніколи", score: 0 },
              ],
            },
            {
              text: "Чи обговорюєте з родиною щось цікаве із прочитаного?",
              options: [
                { text: "Майже завжди", score: 4 },
                { text: "Іноді", score: 2 },
                { text: "Ніколи", score: 0 },
              ],
            },
            {
              text: "Чи намагаєтеся сказати все за дитину перш ніж вона встигне відкрити рота?",
              options: [
                { text: "Майже завжди", score: 4 },
                { text: "Іноді", score: 2 },
                { text: "Ніколи", score: 0 },
              ],
            },
            {
              text: "Чи дивитеся телевізор разом із дитиною?",
              options: [
                { text: "Майже завжди", score: 4 },
                { text: "Іноді", score: 2 },
                { text: "Ніколи", score: 0 },
              ],
            },
            {
              text: "Чи ставите дитині запитання за змістом побаченого на екрані?",
              options: [
                { text: "Майже завжди", score: 4 },
                { text: "Іноді", score: 2 },
                { text: "Ніколи", score: 0 },
              ],
            },
            {
              text: "Чи обмежуєте можливість дитини дивитися телевізор?",
              options: [
                { text: "Майже завжди", score: 4 },
                { text: "Іноді", score: 2 },
                { text: "Ніколи", score: 0 },
              ],
            },
            {
              text: "Чи має дитина можливість виявляти почуття під час ігор?",
              options: [
                { text: "Майже завжди", score: 4 },
                { text: "Іноді", score: 2 },
                { text: "Ніколи", score: 0 },
              ],
            },
            {
              text: "Чи намагаєтеся ходити з дитиною на прогулянки?",
              options: [
                { text: "Майже завжди", score: 4 },
                { text: "Іноді", score: 2 },
                { text: "Ніколи", score: 0 },
              ],
            },
            {
              text: "Чи водили дитину до театру, зоопарку, музею?",
              options: [
                { text: "Майже завжди", score: 4 },
                { text: "Іноді", score: 2 },
                { text: "Ніколи", score: 0 },
              ],
            },
          ],
          interpretation: (score) => {
            if (score >= 88) {
              return {
                title: "Чудово",
                description:
                  "Ваші стосунки з дитиною чудові, ви чудовий батько/матір.",
                recommendation:
                  "Продовжуйте підтримувати теплі стосунки з дитиною.",
              };
            } else if (score >= 44) {
              return {
                title: "Непогано",
                description:
                  "Ваші стосунки з дитиною непогані, але є простір для покращення.",
                recommendation:
                  "Розгляньте можливість більш активного спілкування з дитиною.",
              };
            } else {
              return {
                title: "Варто замислитись",
                description:
                  "Ваші стосунки з дитиною потребують значного покращення.",
                recommendation:
                  "Рекомендуємо звернутися до психолога для консультації.",
              };
            }
          },
        },
      ],
    },
  ];

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);

    if (
      selectedTest?.questions &&
      currentQuestion < selectedTest.questions.length - 1
    ) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleCheckboxToggle = (itemId: string, points: number) => {
    const newAnswers = new Set(checkboxAnswers);
    if (newAnswers.has(itemId)) {
      newAnswers.delete(itemId);
    } else {
      newAnswers.add(itemId);
    }
    setCheckboxAnswers(newAnswers);
  };

  const handleCheckboxSubmit = () => {
    setShowResults(true);
  };

  const handleSubTestAnswer = (score: number) => {
    const updated = subTestAnswers.map((arr) => [...arr]);
    updated[subTestIndex] = [...(updated[subTestIndex] || []), score];
    setSubTestAnswers(updated);
    const currentSubTest = selectedTest?.subTests?.[subTestIndex];
    if (
      currentSubTest &&
      updated[subTestIndex].length >= currentSubTest.questions.length
    ) {
      setShowResults(true);
    }
  };

  const handleNextSubTest = () => {
    if (
      selectedTest?.subTests &&
      subTestIndex < selectedTest.subTests.length - 1
    ) {
      setSubTestIndex((prev) => prev + 1);
      setShowResults(false);
    } else {
      resetTest();
    }
  };

  const resetTest = () => {
    setSelectedTest(null);
    setCurrentQuestion(0);
    setAnswers([]);
    setCheckboxAnswers(new Set());
    setShowResults(false);
    setSubTestIndex(0);
    setSubTestAnswers([[], [], []]);
  };

  const totalScore = answers.reduce((sum, score) => sum + score, 0);
  const checkboxScore = Array.from(checkboxAnswers).reduce((sum, itemId) => {
    for (const category of selectedTest?.checkboxQuestions || []) {
      const item = category.items.find((i) => i.text === itemId);
      if (item) return sum + item.points;
    }
    return sum;
  }, 0);
  const finalScore = totalScore + checkboxScore;
  const result = selectedTest?.interpretation
    ? selectedTest.interpretation(finalScore)
    : selectedTest?.multiResultInterpretation?.(answers);

  if (selectedTest?.checkboxQuestions && !showResults) {
    return (
      <div className="pt-20 min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <div className="mb-8">
              <button
                onClick={resetTest}
                className="text-primary hover:text-primary/70 transition-colors mb-4"
              >
                ← Повернутися до вибору тесту
              </button>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                {selectedTest.title}
              </h2>
              <p className="text-foreground/70">
                Відмітьте симптоми, які ви відчуваєте
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              {selectedTest.checkboxQuestions.map((category) => (
                <div key={category.category} className="mb-8 last:mb-0">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {category.category}
                  </h3>
                  <div className="space-y-3">
                    {category.items.map((item) => (
                      <label
                        key={item.text}
                        className="flex items-start gap-3 p-3 rounded-xl border-2 border-border hover:border-primary hover:bg-primary/5 cursor-pointer transition-all"
                      >
                        <input
                          type="checkbox"
                          checked={checkboxAnswers.has(item.text)}
                          onChange={() =>
                            handleCheckboxToggle(item.text, item.points)
                          }
                          className="mt-1 h-4 w-4 accent-current"
                        />
                        <span className="text-foreground">{item.text}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={handleCheckboxSubmit}
              className="mt-8 w-full px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Переглянути результат
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  // Sub-test active question view
  if (selectedTest?.subTests && !showResults) {
    const currentSubTest = selectedTest.subTests[subTestIndex];
    const answeredCount = subTestAnswers[subTestIndex]?.length || 0;
    if (!currentSubTest?.questions?.length) return null;
    const currentQuestion = currentSubTest.questions[answeredCount];
    const progress = (answeredCount / currentSubTest.questions.length) * 100;

    return (
      <div className="pt-20 min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto"
          >
            <div className="mb-8">
              <button
                onClick={resetTest}
                className="text-primary hover:text-primary/70 transition-colors mb-4"
              >
                ← Повернутися до вибору тесту
              </button>
              <h2 className="text-3xl font-bold text-foreground mb-2">
                {selectedTest.title}
              </h2>
              <p className="text-foreground/70 mb-1">
                Тест {subTestIndex + 1} з {selectedTest.subTests.length}:{" "}
                {currentSubTest.title}
              </p>
              <p className="text-sm text-foreground/50">
                Питання {answeredCount + 1} з {currentSubTest.questions.length}
              </p>
              <div className="w-full bg-border rounded-full h-2 mt-3">
                <div
                  className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <p className="text-xl font-semibold text-foreground mb-6">
                {currentQuestion.text}
              </p>
              <div className="space-y-3">
                {currentQuestion.options.map((option) => (
                  <button
                    key={option.text}
                    onClick={() => handleSubTestAnswer(option.score)}
                    className="w-full text-left p-4 rounded-xl border-2 border-border hover:border-primary hover:bg-primary/5 transition-all text-foreground"
                  >
                    {option.text}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // Sub-test results view
  if (selectedTest?.subTests && showResults) {
    const currentSubTest = selectedTest.subTests[subTestIndex];
    const score = subTestAnswers[subTestIndex]?.reduce((s, v) => s + v, 0) || 0;
    const subResult = currentSubTest.interpretation(score);
    const isLast = subTestIndex === selectedTest.subTests.length - 1;

    return (
      <div className="pt-20 min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {subResult.title}
              </h3>
              <p className="text-foreground/70 mb-4">{subResult.description}</p>
              <p className="text-sm text-primary font-medium">
                {subResult.recommendation}
              </p>
            </div>
            <p className="text-foreground/50 text-sm mb-6">
              {isLast
                ? "Це був останній тест"
                : `Далі: ${selectedTest.subTests[subTestIndex + 1].title}`}
            </p>
            <button
              onClick={handleNextSubTest}
              className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:opacity-90 transition-opacity"
            >
              {isLast ? "Завершити" : "Наступний тест →"}
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  if (selectedTest && selectedTest.questions && !showResults) {
    const question = selectedTest.questions[currentQuestion];
    const progress =
      ((currentQuestion + 1) / selectedTest.questions.length) * 100;

    return (
      <div className="pt-20 min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <div className="mb-8">
              <button
                onClick={resetTest}
                className="text-primary hover:text-primary/70 transition-colors mb-4"
              >
                ← Повернутися до вибору тесту
              </button>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                {selectedTest.title}
              </h2>
              <div className="w-full bg-muted rounded-full h-2 mb-6">
                <div
                  className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-foreground/70">
                Питання {currentQuestion + 1} з {selectedTest.questions.length}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                {question.text}
              </h3>
              <div className="space-y-4">
                {question.options.map((option, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAnswer(option.score)}
                    className="w-full p-4 rounded-xl border-2 border-border hover:border-primary hover:bg-primary/5 text-left transition-all"
                  >
                    {option.text}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  if (showResults && result) {
    return (
      <div className="pt-20 min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <div
                  className={`w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br ${selectedTest?.gradient} flex items-center justify-center`}
                >
                  <Sparkles className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  Результати тесту
                </h2>
                <p className="text-lg text-foreground/70">
                  Ваш результат: {totalScore} балів
                </p>
              </div>

              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-3">
                    {result.title}
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    {result.description}
                  </p>
                </div>

                <div className="bg-primary/5 rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    Рекомендації
                  </h4>
                  <p className="text-foreground/80">{result.recommendation}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={resetTest}
                  className="flex-1 px-6 py-3 rounded-xl border-2 border-primary text-primary hover:bg-primary/5 transition-all"
                >
                  Пройти інший тест
                </button>
                <Link
                  to="/contact"
                  className="flex-1 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white text-center font-medium shadow-lg hover:shadow-xl transition-all"
                >
                  Записатися на консультацію
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 -z-10" />

        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Brain className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground/80">
                Психологічне тестування
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Психологічні{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                тести
              </span>
            </h1>

            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Пройдіть безкоштовні психологічні тести, щоб краще зрозуміти себе
              та отримати персональні рекомендації
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tests.map((test, index) => (
              <motion.div
                key={test.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedTest(test)}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all cursor-pointer group"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${test.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <test.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {test.title}
                </h3>

                <p className="text-foreground/70 mb-6">{test.description}</p>

                <div className="flex items-center justify-between text-sm text-foreground/60">
                  <span>
                    {test.questions?.length ||
                      test.checkboxQuestions?.reduce(
                        (acc, cat) => acc + cat.items.length,
                        0,
                      ) ||
                      test.subTests?.reduce(
                        (acc, sub) => acc + sub.questions.length,
                        0,
                      ) ||
                      0}{" "}
                    питань
                  </span>
                  <span className="text-primary font-medium group-hover:gap-2 transition-all flex items-center gap-1">
                    Почати тест →
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 text-center"
          >
            <Brain className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Потрібна професійна консультація?
            </h3>
            <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
              Наші психологи готові допомогти вам розібратися з будь-якими
              питаннями та надати професійну підтримку
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-medium shadow-lg hover:shadow-xl transition-all"
            >
              Записатися на консультацію
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
