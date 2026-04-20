import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Home, Calendar, Compass, User } from "lucide-react";
import { cn } from "../lib/utils";

export default function Layout() {
  const location = useLocation();
  const navigate = useNavigate();

  const tabs = [
    { path: "/", label: "首页", icon: Home },
    { path: "/activities", label: "活动", icon: Calendar },
    { path: "/news", label: "资讯", icon: Compass },
    { path: "/profile", label: "我的", icon: User },
  ];

  const getHeaderTitle = () => {
    switch (location.pathname) {
      case "/": return "刺桐 · 泉州";
      case "/activities": return "推荐活动";
      case "/news": return "非遗资讯";
      case "/profile": return "个人中心";
      default: return "刺桐 · 泉州";
    }
  };

  return (
    <div className="flex flex-col h-screen w-full max-w-md mx-auto bg-[#F5F2ED] text-[#2C2C2C] font-serif relative overflow-hidden shadow-2xl">
      {/* Top Navigation Bar */}
      <nav className="flex-none h-16 px-6 flex items-center justify-between border-b border-[#D1CEC8] bg-white/80 backdrop-blur-sm z-50 shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#8B2323] rounded-full flex items-center justify-center text-white font-bold text-xs italic shadow-lg">刺</div>
          <h1 className="text-xl font-black tracking-tighter text-[#8B2323]">{getHeaderTitle()}</h1>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto no-scrollbar pb-[80px]">
        <Outlet />
      </main>

      {/* Bottom Tab Bar */}
      <footer className="absolute bottom-0 w-full flex-none h-20 bg-white border-t border-[#D1CEC8] flex items-center justify-around px-2 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] shrink-0 pb-safe z-50">
        {tabs.map((tab) => {
          const isActive = location.pathname === tab.path;
          const Icon = tab.icon;
          return (
            <button
              key={tab.path}
              onClick={() => navigate(tab.path)}
              className={cn(
                "flex flex-col items-center gap-1 transition-all active:scale-95",
                isActive ? "text-[#8B2323]" : "opacity-30 grayscale text-[#2C2C2C]"
              )}
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
              </div>
              <span className="text-[10px] font-bold tracking-widest uppercase">
                {tab.label}
              </span>
            </button>
          );
        })}
      </footer>
    </div>
  );
}
