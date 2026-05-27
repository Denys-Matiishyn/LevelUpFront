import { motion } from "motion/react";
import { Link } from "react-router";
import { Star, Quote, MessageSquare, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export function Testimonials() {
  const [testimonials, setTestimonials] = useState<
    {
      id: number;
      user_name: string;
      comment: string;
      rating: number;
      role?: string;
    }[]
  >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(import.meta.env.VITE_REVIEWS_URL)
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((data) => {
        const published = data.filter((r: any) => r.is_published === true);
        setTestimonials(published);
      })
      .catch((error) => {
        console.error("Помилка завантаження відгуків:", error); // Додав логування помилки на всякий випадок
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return null;
  if (testimonials.length === 0) return null;

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
              key={testimonial.id}
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
                  <div className="text-sm text-foreground/70">
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
