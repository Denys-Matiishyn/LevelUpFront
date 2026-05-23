import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, Sparkles, CheckCircle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground/80">
                Психологічні консультації та тренінги
              </span>
            </motion.div>

            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              LEVEL UP
              <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Твій крок до успіху!
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-foreground/70 mb-8 max-w-xl mx-auto lg:mx-0">
              Психологічні консультації та тренінги для особистісного зростання
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-medium inline-flex items-center gap-2 justify-center shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all"
                >
                  Записатись на консультацію
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/services"
                  className="px-8 py-4 rounded-xl border-2 border-primary text-primary font-medium inline-flex items-center gap-2 justify-center hover:bg-primary/5 transition-all"
                >
                  Дізнатись більше
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Tests Link Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative"
          >
            <Link to="/tests" className="block group">
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Decorative circles */}
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full"
                >
                  <div className="absolute top-0 left-0 w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl" />
                </motion.div>

                {/* Main image with overlay */}
                <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-300 border-4 border-white/20">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1593444286621-98245b7d4530?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwc3ljaG9sb2d5JTIwdGVzdCUyMG1lbnRhbCUyMGFzc2Vzc21lbnR8ZW58MXx8fHwxNzc0NTIxMDU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Психологічні тести"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/90 to-transparent" />

                  {/* Content overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 z-10">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="shrink-0 w-16 h-16 sm:w-24 sm:h-24 mx-auto rounded-full bg-gradient-to-br from-accent to-yellow-400 flex items-center justify-center mb-3 sm:mb-4 shadow-lg"
                    >
                      <CheckCircle className="w-8 h-8 sm:w-12 sm:h-12 text-white" />
                    </motion.div>

                    <h3 className="text-3xl font-bold text-white mb-3 drop-shadow-lg">
                      Пройди психологічний тест
                    </h3>

                    <p className="text-white/90 text-lg mb-6 max-w-md drop-shadow">
                      3 інтерактивні тести для самопізнання та особистісного
                      зростання
                    </p>

                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-primary font-medium group-hover:bg-primary group-hover:text-white transition-all shadow-lg">
                      Перейти до тестів
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl bg-gradient-to-br from-accent to-secondary shadow-lg flex items-center justify-center"
                >
                  <Sparkles className="w-12 h-12 text-white" />
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 15, 0],
                    rotate: [0, -5, 0],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="absolute -bottom-4 -left-4 w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent shadow-lg flex items-center justify-center"
                >
                  <Sparkles className="w-10 h-10 text-white" />
                </motion.div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
