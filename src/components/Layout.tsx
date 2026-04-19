import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const BANNER_URL = "https://cdn.poehali.dev/projects/c1666bf3-3a06-4060-894f-5feebb6ed718/files/ee7b22c8-99e9-43e3-a855-23ecfa08abb3.jpg";

const parentsSub = [
  { path: "/parents?tab=tasks", label: "Задачи по проекту" },
  { path: "/parents?tab=roadmap", label: "Дорожная карта проекта" },
  { path: "/parents?tab=presentation", label: "Презентация проекта" },
  { path: "/parents?tab=videos", label: "Задание по проекту" },
];

const colleaguesSub = [
  { path: "/colleagues?tab=tasks", label: "Задачи по проекту" },
  { path: "/colleagues?tab=experience", label: "Обобщение педагогического опыта" },
];

const navItems = [
  { path: "/", label: "ГЛАВНАЯ" },
  { path: "/parents", label: "РОДИТЕЛЯМ", sub: parentsSub },
  { path: "/colleagues", label: "КОЛЛЕГАМ ДОУ", sub: colleaguesSub },
  { path: "/gallery", label: "ГАЛЕРЕЯ" },
  { path: "/achievements", label: "НАШИ ДОСТИЖЕНИЯ" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Top banner image */}
      <div className="w-full h-32 md:h-44 overflow-hidden">
        <img
          src={BANNER_URL}
          alt="Группа Солнышко"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Navigation bar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        {/* Handprint decorations */}
        <div className="relative">
          {/* Desktop nav */}
          <div ref={navRef} className="hidden md:flex items-center justify-center gap-2 px-4 py-3 flex-wrap">
            {navItems.map((item) =>
              item.sub ? (
                <div key={item.path} className="relative">
                  <button
                    onClick={() => setOpenMenu(openMenu === item.path ? null : item.path)}
                    className={`nav-pill flex items-center gap-1 ${isActive(item.path) ? "nav-pill-active" : ""}`}
                  >
                    {item.label}
                    <Icon name="ChevronDown" size={14} className={`transition-transform ${openMenu === item.path ? "rotate-180" : ""}`} />
                  </button>
                  {openMenu === item.path && (
                    <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-lg z-50 min-w-[260px] overflow-hidden animate-fade-in">
                      {item.sub.map((s) => (
                        <Link
                          key={s.path}
                          to={s.path}
                          onClick={() => setOpenMenu(null)}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-yellow-50 hover:text-green-700 font-medium border-b border-gray-100 last:border-0"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-pill ${isActive(item.path) ? "nav-pill-active" : ""}`}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* Mobile nav */}
          <div className="md:hidden flex items-center justify-between px-4 py-3">
            <span className="font-caveat text-xl text-green-700 font-bold">Группа «Солнышко» ☀️</span>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <Icon name={mobileOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
          {mobileOpen && (
            <div className="md:hidden bg-white border-t border-gray-100 px-3 pb-3 animate-fade-in">
              {navItems.map((item) => (
                <div key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-4 py-2.5 rounded-xl my-0.5 text-sm font-semibold transition-all ${
                      isActive(item.path) ? "bg-yellow-300 text-gray-900" : "text-gray-700 hover:bg-yellow-50"
                    }`}
                  >
                    {item.label}
                  </Link>
                  {item.sub &&
                    item.sub.map((s) => (
                      <Link
                        key={s.path}
                        to={s.path}
                        onClick={() => setMobileOpen(false)}
                        className="block pl-8 pr-4 py-2 text-xs text-gray-500 hover:text-green-700"
                      >
                        — {s.label}
                      </Link>
                    ))}
                </div>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Page content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 mt-12">
        <div className="max-w-5xl mx-auto px-4 py-6 text-center">
          <p className="font-caveat text-2xl text-green-700 mb-1">Группа «Солнышко» ☀️</p>
          <p className="text-sm text-gray-500">Проект «Семейный альбом» • 2024</p>
          <p className="text-xs text-gray-400 mt-1">
            Некоммерческий образовательный проект детского сада
          </p>
        </div>
      </footer>
    </div>
  );
}