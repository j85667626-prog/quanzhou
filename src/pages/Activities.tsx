import { MapPin, Clock, Search, SlidersHorizontal } from "lucide-react";
import { cn } from "../lib/utils";

import imgMarionette from '../assets/images/marionette.jpg';
import imgKaiyuanTemple from '../assets/images/kaiyuan_temple.jpg';
import imgAnpingBridge from '../assets/images/anping_bridge.jpg';

export default function Activities() {
  const categories = ["全部", "非遗演出", "展览讲座", "手工体验", "研学踩线"];
  
  const events = [
    {
      id: 1,
      title: "泉州木偶戏常规演出专场",
      desc: "我国唯一拥有独立剧种的提线木偶艺术，感受“十指可做百万兵”的传承魅力。",
      time: "每周二至周日",
      location: "木偶剧院",
      img: imgMarionette,
      status: "售票中",
      tag: "非遗演出"
    },
    {
      id: 2,
      title: "开元寺世界遗产公益讲解",
      desc: "跟随文化学者探访福建省规模最大佛教寺院，领略宋元石雕艺术。",
      time: "每周六 09:30",
      location: "开元寺",
      img: imgKaiyuanTemple,
      status: "预约中",
      tag: "展览讲座"
    },
    {
      id: 3,
      title: "无桥长此桥：安平桥踏勘",
      desc: "探访现存最长海港大石桥，感受古代桥梁建筑巅峰及红砖文化。",
      time: "常态化全天",
      location: "安平桥景区",
      img: imgAnpingBridge,
      status: "免费开放",
      tag: "研学踩线"
    }
  ];

  return (
    <div className="min-h-full pb-10 space-y-4">
      {/* Search and Filters */}
      <div className="pt-4 px-4 space-y-4">
        <div className="flex gap-2">
          <div className="flex-1 bg-white border border-[#D1CEC8] rounded-xl flex items-center px-4 h-10 shadow-sm text-[#2C2C2C]">
            <Search size={16} className="opacity-40 mr-2" />
            <input type="text" placeholder="搜索非遗活动..." className="bg-transparent border-none outline-none w-full text-xs" />
          </div>
          <button className="w-10 h-10 bg-white border border-[#D1CEC8] rounded-xl flex items-center justify-center shadow-sm active:scale-95 transition-transform text-[#8B2323]">
            <SlidersHorizontal size={16} />
          </button>
        </div>
        
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
          {categories.map((cat, idx) => (
            <button 
              key={idx}
              className={cn(
                "px-4 py-1.5 rounded-full text-[11px] font-bold whitespace-nowrap transition-colors border",
                idx === 0 
                  ? "bg-[#8B2323] text-white border-[#8B2323]" 
                  : "bg-white text-[#2C2C2C] border-[#D1CEC8] active:bg-gray-50"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="h-px bg-[#D1CEC8] w-full opacity-50" />

      {/* List */}
      <div className="px-4 space-y-5">
        <h3 className="text-base font-bold flex items-center gap-2">
          <span className="w-1 h-4 bg-[#8B2323]"></span> 文化日历
        </h3>
        <div className="space-y-4">
          {events.map((event, index) => (
            <div 
              key={event.id} 
              className={cn(
                "rounded-2xl overflow-hidden flex flex-col active:scale-[0.99] transition-transform",
                index === 0 
                  ? "border border-[#8B2323] shadow-md bg-[#EFECE7] relative" 
                  : "border border-[#D1CEC8] bg-white shadow-sm"
              )}
            >
              {index === 0 && <div className="absolute top-0 right-0 w-16 h-16 bg-[#8B2323]/5 rounded-bl-full z-0 pointer-events-none"></div>}
              
              <div className="relative h-36 w-full bg-[#A68966]">
                <div 
                  className="absolute inset-0 bg-cover bg-center mix-blend-multiply opacity-90" 
                  style={{ backgroundImage: `url(${event.img})` }} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded text-[9px] font-bold text-[#8B2323] tracking-widest uppercase">
                  {event.status}
                </div>
                <div className="absolute top-3 left-3 bg-[#2C2C2C]/60 backdrop-blur-sm px-2 py-0.5 rounded text-[9px] font-bold text-white tracking-widest uppercase">
                  {event.tag}
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                   <h3 className="text-lg font-bold italic tracking-tight leading-snug">{event.title}</h3>
                </div>
              </div>
              
              <div className="p-4 flex flex-col flex-1 relative z-10">
                <p className="text-[11px] text-[#2C2C2C] opacity-70 mb-3 leading-relaxed italic line-clamp-2">{event.desc}</p>
                
                <div className="flex items-center justify-between mt-auto text-[10px] font-bold text-[#2C2C2C]">
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center">
                      <Clock size={12} className="mr-2 text-[#8B2323]" />
                      <span className="uppercase tracking-wider">{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={12} className="mr-2 text-[#8B2323]" />
                      <span className="uppercase tracking-wider line-clamp-1">{event.location}</span>
                    </div>
                  </div>
                  <button 
                    className={cn(
                      "shrink-0 ml-4 px-4 py-2 font-bold rounded-xl text-[10px] tracking-widest uppercase transition-colors shadow-sm",
                      index === 0 
                        ? "bg-[#8B2323] text-white active:bg-[#6b1a1a]" 
                        : "bg-[#F5F2ED] text-[#8B2323] border border-[#D1CEC8] active:bg-[#E5E1D9]"
                    )}
                  >
                    立即参与
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
