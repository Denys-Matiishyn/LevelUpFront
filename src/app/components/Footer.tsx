import { Link } from "react-router";
import { Heart, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-foreground to-gray-800 text-white py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <div>
                <div className="font-bold text-lg">LEVEL UP</div>
                <div className="text-xs text-white/60">
                  Консультаційно-тренінговий центр
                </div>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Психологічні консультації та тренінги для особистісного зростання.
              Допомагаємо людям досягати нових висот.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Навігація</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-white/70 hover:text-white transition-colors inline-block hover:translate-x-1 duration-200"
                >
                  Головна
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white/70 hover:text-white transition-colors inline-block hover:translate-x-1 duration-200"
                >
                  Про нас
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-white/70 hover:text-white transition-colors inline-block hover:translate-x-1 duration-200"
                >
                  Послуги
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-white/70 hover:text-white transition-colors inline-block hover:translate-x-1 duration-200"
                >
                  Ціни
                </Link>
              </li>
              <li>
                <Link
                  to="/tests"
                  className="text-white/70 hover:text-white transition-colors inline-block hover:translate-x-1 duration-200"
                >
                  Тести
                </Link>
              </li>
              <li>
                <Link
                  to="/reviews"
                  className="text-white/70 hover:text-white transition-colors inline-block hover:translate-x-1 duration-200"
                >
                  Відгуки
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white/70 hover:text-white transition-colors inline-block hover:translate-x-1 duration-200"
                >
                  Контакти
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Послуги</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/services/individual"
                  className="text-white/70 hover:text-white transition-colors inline-block hover:translate-x-1 duration-200"
                >
                  Індивідуальні консультації
                </Link>
              </li>
              <li>
                <Link
                  to="/services/group"
                  className="text-white/70 hover:text-white transition-colors inline-block hover:translate-x-1 duration-200"
                >
                  Групові тренінги
                </Link>
              </li>
              <li>
                <Link
                  to="/services/corporate"
                  className="text-white/70 hover:text-white transition-colors inline-block hover:translate-x-1 duration-200"
                >
                  Корпоративні програми
                </Link>
              </li>
              <li>
                <span className="text-white/70">Онлайн консультації</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Контакти</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-white/70">
                <Phone className="w-4 h-4 text-primary" />
                <a
                  href="tel:+380679625843"
                  className="hover:text-white transition-colors"
                >
                  +380 (67) 962 5843
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/70">
                <Mail className="w-4 h-4 text-secondary" />
                <a
                  href="mailto:ctc.level.up.lviv@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  ctc.level.up.lviv@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/70">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <a
                  href="https://maps.google.com/?q=Львів, вул. В'ячеслава Чорновола, 63"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Львів, вул. В'ячеслава Чорновола, 63
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <div>© 2026 LEVEL UP. Усі права захищені.</div>
            <div className="flex items-center gap-1.5">
              Створено з{" "}
              <Heart className="w-4 h-4 text-secondary fill-current" /> для
              вашого розвитку
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
