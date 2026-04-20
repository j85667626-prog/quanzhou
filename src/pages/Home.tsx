import React, { useRef, useEffect, useState } from "react";
import { Music, Drama, Flame, Map, ChevronRight, Users, Film } from "lucide-react";
import { cn } from "../lib/utils";

export default function Home() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const carouselImages = [
    {
      id: 1,
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/20230130_Old_City_of_Quanzhou_01.jpg/960px-20230130_Old_City_of_Quanzhou_01.jpg",
      title: "世界遗产 · 宋元泉州",
    },
    {
      id: 2,
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Concert_de_musique_chinoise_Nanguan_%28Auditorium_du_mus%C3%A9e_Guimet%29_%288027971895%29.jpg/960px-Concert_de_musique_chinoise_Nanguan_%28Auditorium_du_mus%C3%A9e_Guimet%29_%288027971895%29.jpg",
      title: "千年古乐 · 泉州南音",
    },
    {
      id: 3,
      src: "https://upload.wikimedia.org/wikipedia/commons/7/72/Taiwan-Puppet-Monkey-god2.jpg",
      title: "掌上绝技 · 布袋木偶",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const { scrollLeft, clientWidth, scrollWidth } = carouselRef.current;
        const nextScroll = scrollLeft + clientWidth;
        const isEnd = nextScroll >= scrollWidth - 10;
        
        carouselRef.current.scrollTo({
          left: isEnd ? 0 : nextScroll,
          behavior: "smooth"
        });
      }
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const index = Math.round(e.currentTarget.scrollLeft / e.currentTarget.clientWidth);
    setActiveSlide(index);
  };

  const categories = [
    { icon: Drama, label: "提线木偶" },
    { icon: Music, label: "南音古乐" },
    { icon: Flame, label: "乌龙茶技" },
    { icon: Map, label: "海丝遗存" },
  ];

  const highlights = [
    {
      id: 1,
      title: "泉州南音传习所展演",
      location: "文庙南音传习所 · 本周六",
    },
    {
      id: 2,
      title: "木偶剧院《天下第一操》",
      location: "泉州市木偶剧院 · 下周",
    },
    {
      id: 3,
      title: "红砖古厝摄影体验营",
      location: "西街旧面粉厂 · 持续中",
    }
  ];

  return (
    <div className="flex flex-col pb-6 space-y-5 pt-4">
      {/* Carousel */}
      <div className="px-4">
        <section className="relative h-48 w-full rounded-2xl overflow-hidden shadow-lg bg-[#A68966]">
          <div 
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto h-full snap-x snap-mandatory no-scrollbar"
          >
            {carouselImages.map((img) => (
              <div key={img.id} className="w-full h-full shrink-0 snap-center relative">
                <div 
                  className="absolute inset-0 bg-cover bg-center mix-blend-multiply opacity-80" 
                  style={{ backgroundImage: `url(${img.src})` }} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="px-2 py-0.5 bg-[#8B2323] text-white text-[9px] uppercase tracking-widest font-bold rounded-sm shadow-sm inline-block mb-1.5">人类非物质文化遗产</span>
                  <h2 className="text-2xl font-bold text-white leading-tight tracking-tight italic">
                    {img.title.split('·')[0]} <span className="text-xl opacity-90">· {img.title.split('·')[1]}</span>
                  </h2>
                </div>
              </div>
            ))}
          </div>
          {/* Indicators */}
          <div className="absolute bottom-4 right-4 flex gap-1">
            {carouselImages.map((_, i) => (
              <div 
                key={i} 
                className={cn("h-1 rounded-full transition-all", activeSlide === i ? "w-6 bg-white" : "w-1.5 bg-white/40")}
              />
            ))}
          </div>
        </section>
      </div>

      {/* Categories Grid */}
      <section className="grid grid-cols-4 gap-2 px-4">
        {categories.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <div key={idx} className="flex flex-col items-center gap-1.5 cursor-pointer active:scale-95 transition-transform">
              <div className="w-12 h-12 rounded-[14px] bg-white shadow-sm flex items-center justify-center border border-[#E5E1D9] text-[#2C2C2C]">
                <Icon size={20} strokeWidth={1.5} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider">{cat.label}</span>
            </div>
          );
        })}
      </section>

      {/* Action Cards (New Section) */}
      <section className="px-4 flex gap-3">
        <div className="flex-1 bg-white border border-[#D1CEC8] rounded-xl p-3 shadow-sm flex items-center gap-3 cursor-pointer active:bg-gray-50 transition-colors">
          <div className="w-10 h-10 bg-[#8B2323]/10 text-[#8B2323] rounded-full flex items-center justify-center shrink-0">
            <Users size={18} />
          </div>
          <div>
            <h4 className="text-xs font-bold text-[#2C2C2C]">非遗大咖</h4>
            <p className="text-[9px] opacity-60 mt-0.5 tracking-wider">探访百位技艺传人</p>
          </div>
        </div>
        <div className="flex-1 bg-white border border-[#D1CEC8] rounded-xl p-3 shadow-sm flex items-center gap-3 cursor-pointer active:bg-gray-50 transition-colors">
          <div className="w-10 h-10 bg-[#8B2323]/10 text-[#8B2323] rounded-full flex items-center justify-center shrink-0">
            <Film size={18} />
          </div>
          <div>
            <h4 className="text-xs font-bold text-[#2C2C2C]">数字展厅</h4>
            <p className="text-[9px] opacity-60 mt-0.5 tracking-wider">3D云游世遗泉州</p>
          </div>
        </div>
      </section>

      {/* Intro Section - Compact */}
      <section className="bg-white border border-[#D1CEC8] p-4 space-y-3 mx-4 rounded-2xl shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-[#8B2323]/5 rounded-full -translate-y-8 translate-x-8"></div>
        <div className="flex justify-between items-end border-b border-[#F0F0EE] pb-2 relative z-10">
          <h3 className="text-xs font-black italic tracking-widest text-[#8B2323]">QUANZHOU HERITAGE</h3>
          <span className="text-[9px] opacity-40">UNESCO-2021</span>
        </div>
        <div className="grid grid-cols-2 gap-4 relative z-10">
          <div className="space-y-1.5">
            <p className="text-[10px] font-bold uppercase opacity-60 tracking-tighter">文化渊源</p>
            <p className="text-[10px] leading-relaxed line-clamp-3">古称“刺桐”，联合国教科文组织认定的海上丝绸之路起点。“宋元中国的世界海洋商贸中心”尽显深厚底蕴。</p>
          </div>
          <div className="space-y-1.5">
            <p className="text-[10px] font-bold uppercase opacity-60 tracking-tighter">传承体系</p>
            <p className="text-[10px] leading-relaxed line-clamp-3">拥抱南音、木偶戏等6项世界级非遗，及多项国家级瑰宝。“见人见物见生活”的活态传承在此生生不息。</p>
          </div>
        </div>
      </section>

      {/* Highlights - Tighter Scroll */}
      <section className="px-4 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold flex items-center gap-2">
            <span className="w-1 h-4 bg-[#8B2323]"></span> 推荐活动
          </h3>
          <span className="text-[10px] text-[#2C2C2C] opacity-50 flex items-center">查看全部 <ChevronRight size={12} /></span>
        </div>
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2 snap-x pr-4">
          {highlights.map((item, index) => (
            <div 
              key={item.id} 
              className={cn(
                "min-w-[160px] h-24 rounded-xl p-3 flex flex-col justify-between border snap-start shrink-0 cursor-pointer active:scale-95 transition-transform",
                index === 0 
                  ? "bg-white border-2 border-[#8B2323] shadow-md text-[#8B2323]" 
                  : "bg-[#EFECE7] border-[#D1CEC8] text-[#2C2C2C]"
              )}
            >
              <p className={cn("text-xs font-bold leading-snug tracking-tight", index === 0 && "text-[#8B2323]")}>{item.title}</p>
              <p className="text-[9px] opacity-60 italic mt-2">{item.location}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
