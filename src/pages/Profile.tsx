import { useNavigate } from "react-router-dom";
import { Settings, Bookmark, Heart, Image as ImageIcon, ChevronRight, Store, Medal, History } from "lucide-react";

export default function Profile() {
  const navigate = useNavigate();

  const menuItems = [
    { icon: History, label: "浏览历史", color: "text-[#2C2C2C]", count: "24篇" },
    { icon: Bookmark, label: "我的收藏", color: "text-[#2C2C2C]", count: "12项" },
    { icon: Store, label: "文创商城订单", color: "text-[#2C2C2C]", count: "" },
    { icon: Settings, label: "系统设置", color: "text-[#2C2C2C] opacity-60", count: "" },
  ];

  return (
    <div className="min-h-full flex flex-col p-4 space-y-4">
      {/* User Header */}
      <div className="bg-white border-2 border-[#8B2323] px-5 py-6 rounded-2xl shadow-lg flex items-center justify-between relative overflow-hidden">
        <div className="absolute -right-4 -top-8 text-[#8B2323] opacity-5 text-9xl italic font-black">
          刺
        </div>
        <div className="flex items-center space-x-4 relative z-10">
          <div className="w-14 h-14 rounded-full bg-[#EFECE7] p-1 shrink-0 border border-[#8B2323]">
            <img 
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80" 
              alt="Avatar" 
              className="w-full h-full rounded-full object-cover grayscale opacity-90"
            />
          </div>
          <div>
            <h2 className="text-xl font-black tracking-tight text-[#8B2323] italic">刺桐行者</h2>
            <div className="flex items-center mt-1 space-x-2">
               <span className="text-[9px] bg-[#8B2323] text-white px-1.5 py-0.5 rounded-sm uppercase tracking-widest font-bold">LV.4 传承者</span>
               <span className="text-[10px] text-[#2C2C2C] opacity-60 uppercase tracking-widest">积分 1250</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white border border-[#D1CEC8] rounded-xl shadow-sm p-4 flex justify-around text-center">
        <div>
          <div className="text-lg font-black italic text-[#8B2323]">12</div>
          <div className="text-[9px] font-bold tracking-widest uppercase opacity-60 mt-0.5">参与活动</div>
        </div>
        <div className="w-px bg-[#E5E1D9]" />
        <div>
          <div className="text-lg font-black italic text-[#8B2323]">45</div>
          <div className="text-[9px] font-bold tracking-widest uppercase opacity-60 mt-0.5">图文动态</div>
        </div>
        <div className="w-px bg-[#E5E1D9]" />
        <div>
          <div className="text-lg font-black italic text-[#8B2323]">298</div>
          <div className="text-[9px] font-bold tracking-widest uppercase opacity-60 mt-0.5">累积获赞</div>
        </div>
      </div>

      {/* Badges */}
      <div className="bg-white border border-[#D1CEC8] rounded-xl shadow-sm p-4">
         <div className="flex items-center justify-between mb-3">
            <h3 className="text-xs font-bold text-[#2C2C2C]">我的荣誉勋章</h3>
            <span className="text-[9px] text-[#2C2C2C] opacity-50 flex items-center">全部勋章 <ChevronRight size={10} /></span>
         </div>
         <div className="flex justify-between items-start px-2">
            <div className="flex flex-col items-center gap-1 active:scale-95 transition-transform cursor-pointer">
               <div className="w-10 h-10 rounded-full bg-[#F5F2ED] border border-[#8B2323] flex items-center justify-center text-lg shadow-sm">🎭</div>
               <span className="text-[9px] font-bold text-[#8B2323]">梨园客</span>
            </div>
            <div className="flex flex-col items-center gap-1 active:scale-95 transition-transform cursor-pointer">
               <div className="w-10 h-10 rounded-full bg-[#F5F2ED] border border-[#D1CEC8] flex items-center justify-center text-lg shadow-sm grayscale opacity-70">🍵</div>
               <span className="text-[9px] font-bold text-[#2C2C2C] opacity-60">未获得</span>
            </div>
            <div className="flex flex-col items-center gap-1 active:scale-95 transition-transform cursor-pointer">
               <div className="w-10 h-10 rounded-full bg-[#F5F2ED] border border-[#8B2323] flex items-center justify-center text-lg shadow-sm">🏮</div>
               <span className="text-[9px] font-bold text-[#8B2323]">赏灯人</span>
            </div>
            <div className="flex flex-col items-center gap-1 active:scale-95 transition-transform cursor-pointer">
               <div className="w-10 h-10 rounded-full bg-[#F5F2ED] border border-[#D1CEC8] flex items-center justify-center text-lg shadow-sm grayscale opacity-70">🛶</div>
               <span className="text-[9px] font-bold text-[#2C2C2C] opacity-60">未获得</span>
            </div>
         </div>
      </div>

      {/* Poster Generation Entry */}
      <div>
        <button 
          onClick={() => navigate('/poster')}
          className="w-full bg-[#8B2323] text-white rounded-2xl p-4 flex items-center justify-between shadow-md active:scale-[0.98] transition-transform border border-[#6b1a1a]"
        >
          <div className="flex items-center">
            <div className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center mr-3 border border-white/20">
              <ImageIcon size={18} className="text-white" />
            </div>
            <div className="text-left">
              <h3 className="font-bold text-sm tracking-tight italic">生成专属非遗海报</h3>
              <p className="text-[9px] text-white/70 mt-0.5 tracking-widest">传播泉州文化 · 生成数字纪念戳</p>
            </div>
          </div>
          <ChevronRight size={18} className="text-white/60" />
        </button>
      </div>

      {/* Menu List */}
      <div className="flex-1 mb-4">
        <div className="bg-white rounded-2xl shadow-sm border border-[#D1CEC8] overflow-hidden">
          {menuItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="flex items-center justify-between px-5 py-4 border-b border-[#E5E1D9] last:border-0 active:bg-[#F5F2ED] cursor-pointer transition-colors"
              >
                <div className="flex items-center text-[#2C2C2C]">
                  <Icon size={16} className={`mr-3 ${item.color}`} />
                  <span className="text-xs font-bold">{item.label}</span>
                </div>
                <div className="flex items-center">
                  {item.count && <span className="text-[10px] text-[#2C2C2C] opacity-50 font-bold mr-2">{item.count}</span>}
                  <ChevronRight size={14} className="opacity-30" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
