import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const navItems = [
  { path: "/", label: "Главная", icon: "Home" },
  { path: "/project", label: "Проектная деятельность", icon: "BookOpen" },
  { path: "/gallery", label: "Галерея", icon: "Image" },
  { path: "/parents", label: "Родителям", icon: "Heart" },
  { path: "/colleagues", label: "Коллегам ДОУ", icon: "Users" },
  { path: "/achievements", label: "Наши достижения", icon: "Star" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-3xl">☀️</span>
            <div>
              <div className="font-bold text-primary text-base leading-tight">Группа «Солнышко»</div>
              <div className="text-xs text-muted-foreground font-caveat text-sm">Семейный альбом</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-xl text-sm font-medium transition-all ${
                  location.pathname === item.path
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile burger */}
          <button
            className="lg:hidden p-2 rounded-xl hover:bg-muted transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-border px-4 pb-4 animate-fade-in">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl mt-1 text-sm font-medium transition-all ${
                  location.pathname === item.path
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/70 hover:text-primary hover:bg-muted"
                }`}
              >
                <Icon name={item.icon} size={18} fallback="Circle" />
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Main */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-white/60 backdrop-blur-sm border-t border-border mt-12">
        <div className="container mx-auto px-4 py-6 text-center">
          <p className="font-caveat text-2xl text-primary mb-1">Группа «Солнышко» ☀️</p>
          <p className="text-sm text-muted-foreground">Проект «Семейный альбом» • 2024</p>
          <p className="text-xs text-muted-foreground mt-1">
            Некоммерческий образовательный проект детского сада
          </p>
        </div>
      </footer>
    </div>
  );
}
