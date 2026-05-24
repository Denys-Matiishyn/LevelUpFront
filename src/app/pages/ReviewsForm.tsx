import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Star, Send, Heart, MessageSquare } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";

export default function ReviewsForm() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    rating: 0,
    message: "",
  });
  const [hoveredRating, setHoveredRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  // useEffect(() => {
  //   fetch(import.meta.env.VITE_REVIEWS_URL)
  //     .then((res) => {
  //       if (!res.ok) throw new Error();
  //       return res.json();
  //     })
  //     .then((data) => {
  //       const published = data.filter((r: any) => r.is_published === true);
  //       setReviews(published);
  //     })
  //     .catch(() => setError(true))
  //     .finally(() => setLoading(false));
  // }, []);

  const services = [
    "Індивідуальна консультація",
    "Дитячий психолог",
    "Сімейна консультація",
    "Онлайн консультація",
    "Груповий тренінг",
    "Корпоративна програма",
    "Коучинг",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(import.meta.env.VITE_REVIEWS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_name: formData.name,
          user_email: formData.email,
          service_id: null,
          rating: formData.rating,
          comment: formData.message,
          is_published: true,
        }),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: "",
          email: "",
          service: "",
          rating: 0,
          message: "",
        });
      }, 3000);
    } catch {
      alert("Не вдалося відправити відгук. Спробуйте пізніше.");
    }
  };

  const handleRatingClick = (rating: number) => {
    setFormData({ ...formData, rating });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 -z-10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10" />

        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary mb-6">
              <MessageSquare className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Залишити{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                відгук
              </span>
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Ваша думка дуже важлива для нас! Поділіться своїм досвідом роботи
              з нашим центром, щоб допомогти іншим зробити правильний вибір
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10 border border-border">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <Label
                        htmlFor="name"
                        className="text-foreground font-medium mb-2 block"
                      >
                        Ім'я *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Введіть ваше ім'я"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                        className="w-full"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <Label
                        htmlFor="email"
                        className="text-foreground font-medium mb-2 block"
                      >
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                        className="w-full"
                      />
                    </div>

                    {/* Service */}
                    <div>
                      <Label
                        htmlFor="service"
                        className="text-foreground font-medium mb-2 block"
                      >
                        Послуга *
                      </Label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                      >
                        <option value="">Оберіть послугу</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Rating */}
                    <div>
                      <Label className="text-foreground font-medium mb-3 block">
                        Ваша оцінка *
                      </Label>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => handleRatingClick(star)}
                            onMouseEnter={() => setHoveredRating(star)}
                            onMouseLeave={() => setHoveredRating(0)}
                            className="transition-transform hover:scale-110"
                          >
                            <Star
                              className={`w-10 h-10 transition-colors ${
                                star <= (hoveredRating || formData.rating)
                                  ? "fill-accent text-accent"
                                  : "text-gray-300"
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                      {formData.rating > 0 && (
                        <p className="text-sm text-foreground/60 mt-2">
                          Ваша оцінка: {formData.rating} з 5
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <Label
                        htmlFor="message"
                        className="text-foreground font-medium mb-2 block"
                      >
                        Ваш відгук *
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Розкажіть про свій досвід роботи з нашим центром..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        required
                        rows={6}
                        className="w-full resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="w-full py-6 text-lg font-medium bg-gradient-to-r from-primary to-secondary hover:shadow-xl transition-all"
                      disabled={formData.rating === 0}
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Відправити відгук
                    </Button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-secondary to-emerald-400 flex items-center justify-center mx-auto mb-6">
                      <Heart className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      Дякуємо за ваш відгук!
                    </h3>
                    <p className="text-foreground/70">
                      Ваша думка дуже важлива для нас
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Info Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              {/* Why Reviews Matter */}
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 border border-primary/20">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Чому важливі відгуки?
                </h3>
                <ul className="space-y-3 text-foreground/70">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <span>
                      Допомагають іншим людям зробити усвідомлений вибір
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <span>Дозволяють нам покращувати якість наших послуг</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <span>
                      Надихають нашу команду продовжувати свою важливу роботу
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <span>
                      Створюють довірливе середовище для нових клієнтів
                    </span>
                  </li>
                </ul>
              </div>

              {/* Guidelines */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Поради щодо написання відгуку
                </h3>
                <ul className="space-y-3 text-foreground/70 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>
                      Будьте конкретними: опишіть, що саме вам сподобалось або
                      не сподобалось
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>
                      Розкажіть про свій досвід: як змінилося ваше життя після
                      консультацій
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>
                      Будьте чесними: ваш відгук допоможе іншим прийняти
                      правильне рішення
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>
                      Дотримуйтесь конфіденційності: не розголошуйте особисті
                      деталі інших людей
                    </span>
                  </li>
                </ul>
              </div>

              {/* Statistics */}
              <div className="bg-gradient-to-br from-accent/10 to-yellow-100 rounded-3xl p-8 border border-accent/20">
                <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                  Наші досягнення
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">
                      500+
                    </div>
                    <div className="text-sm text-foreground/70">
                      Задоволених клієнтів
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">
                      98%
                    </div>
                    <div className="text-sm text-foreground/70">
                      Позитивних відгуків
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">
                      10+
                    </div>
                    <div className="text-sm text-foreground/70">
                      Років досвіду
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">
                      4.9
                    </div>
                    <div className="text-sm text-foreground/70">
                      Середня оцінка
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Existing Reviews Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Відгуки наших клієнтів
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Те, що говорять люди, яким ми допомогли на їхньому шляху до змін
            </p>
          </motion.div>

          {/* Display existing testimonials */}
          {loading ? (
            <div className="text-center py-8">Завантаження відгуків...</div>
          ) : error ? (
            <div className="text-center py-8">
              Не вдалося завантажити відгуки
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {reviews.map((testimonial: any, index: number) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-border"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-accent text-accent"
                      />
                    ))}
                  </div>

                  <p className="text-foreground/80 mb-6 leading-relaxed">
                    "{testimonial.comment}"
                  </p>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                      {testimonial.user_name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-foreground">
                        {testimonial.user_name}
                      </div>
                      <div className="text-sm text-foreground/60">Клієнт</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
