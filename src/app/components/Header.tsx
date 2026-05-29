import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import logoPic from "./figma/L.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const menuItems = [
    { label: "Головна", path: "/" },
    { label: "Про нас", path: "/about" },
    {
      label: "Послуги",
      path: "/services",
      submenu: [
        { label: "Всі послуги", path: "/services" },
        { label: "Індивідуальні консультації", path: "/services/individual" },
        { label: "Групові тренінги", path: "/services/group" },
        { label: "Корпоративні програми", path: "/services/corporate" },
      ],
    },
    { label: "Тести", path: "/tests" },
    { label: "Ціни", path: "/pricing" },
    { label: "Відгуки", path: "/reviews" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-b border-border shadow-sm">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
              <img
                src={logoPic}
                alt="Logo"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-xl text-foreground">LEVEL UP</div>
              <div className="text-xs text-muted-foreground">
                Консультаційно-тренінговий центр
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.submenu ? (
                  <>
                    <Link
                      to={item.path}
                      className={`px-4 py-2 rounded-lg flex items-center gap-1 transition-colors ${
                        isActive(item.path) ||
                        location.pathname.startsWith("/services")
                          ? "text-primary bg-primary/5"
                          : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                      }`}
                    >
                      {item.label}
                      <ChevronDown className="w-4 h-4" />
                    </Link>
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          className={`block px-4 py-3 transition-colors first:rounded-t-xl last:rounded-b-xl ${
                            isActive(subItem.path)
                              ? "text-primary bg-primary/5"
                              : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                          }`}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      isActive(item.path)
                        ? "text-primary bg-primary/5"
                        : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              className="ml-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-lg hover:shadow-primary/30 transition-all"
            >
              Записатись
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden border-t border-border"
            >
              <div className="py-4 space-y-2">
                {menuItems.map((item) => (
                  <div key={item.label}>
                    {item.submenu ? (
                      <>
                        <button
                          onClick={() => setIsServicesOpen(!isServicesOpen)}
                          className="w-full flex items-center justify-between px-4 py-2 text-foreground/80 hover:text-primary transition-colors"
                        >
                          {item.label}
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${
                              isServicesOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {isServicesOpen && (
                          <div className="pl-4 space-y-1">
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.path}
                                to={subItem.path}
                                onClick={() => setIsMenuOpen(false)}
                                className={`block px-4 py-2 text-sm transition-colors ${
                                  isActive(subItem.path)
                                    ? "text-primary"
                                    : "text-foreground/70 hover:text-primary"
                                }`}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        to={item.path}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block px-4 py-2 transition-colors ${
                          isActive(item.path)
                            ? "text-primary"
                            : "text-foreground/80 hover:text-primary"
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block mx-4 px-6 py-2.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-medium text-center"
                >
                  Записатись
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
