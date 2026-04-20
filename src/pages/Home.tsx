import React, { useEffect, useRef, useState } from "react";
import { Music, Drama, Flame, Map, ChevronRight, Users, Film } from "lucide-react";
import { cn } from "../lib/utils";

import imgQuanzhouOldCity from "../assets/images/quanzhou_old_city.jpg";
import imgNanguanMusic from "../assets/images/nanguan_music.jpg";
import imgPuppetMonkey from "../assets/images/puppet_monkey.jpg";

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const carouselImages = [
    {
      id: 1,
      src: imgQuanzhouOldCity,
      title: "世界遗产 · 宋元泉州",
    },
    {
      id: 2,
      src: imgNanguanMusic,
      title: "千年古乐 · 泉州南音",
    },
    {
      id: 3,
      src: imgPuppetMonkey,
      title: "掌上绝技 · 布袋木偶",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((current) => (current + 1) % carouselImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const goToSlide = (index: number) => {
    setActiveSlide((index + carouselImages.length) % carouselImages.length);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const startX = touchStartX.current;
    const endX = e.changedTouches[0]?.clientX ?? null;

    touchStartX.current = null;

    if (startX === null || endX === null) return;

    const deltaX = startX - endX;
    if (Math.abs(deltaX) < 40) return;

    if (deltaX > 0) {
      goToSlide(activeSlide + 1);
    } else {
      goToSlide(activeSlide - 1);
    }
  };

  const categories = [
    { icon: Drama, label: "提线木偶" },
    { icon: Music, label: "南音古乐" },
    { icon: Flame, label: "乌龙茶艺" },
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
      location: "西街旧面粉厂 · 持续开放",
    },
  ];

  return (
    <div className="flex flex-col pb-6 space-y-5 pt-4">
      {/* Carousel */}
      <div className="px-4">
        <section className="relative h-48 w-full overflow-hidden rounded-2xl bg-[#A68966] shadow-lg">
          <div
            className="flex h-full overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex h-full w-full transition-transform duration-500 ease-out"
              style={{ transform: `translate3d(-${activeSlide * 100}%, 0, 0)` }}
            >
              {carouselImages.map((img) => (
                <div key={img.id} className="relative h-full w-full shrink-0">
                  <div
                    className="absolute inset-0 bg-cover bg-center mix-blend-multiply opacity-80"
                    style={{ backgroundImage: `url(${img.src})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="mb-1.5 inline-block rounded-sm bg-[#8B2323] px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-white shadow-sm">
                      非遗文化
                    </span>
                    <h2 className="text-2xl font-bold leading-tight tracking-tight text-white italic">
                      {img.title}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="absolute bottom-4 right-4 flex gap-1">
            {carouselImages.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goToSlide(i)}
                aria-label={`切换到第 ${i + 1} 张轮播图`}
                className={cn(
                  "h-1 rounded-full transition-all cursor-pointer",
                  activeSlide === i ? "w-6 bg-white" : "w-1.5 bg-white/40"
                )}
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
            <div
              key={idx}
              className="flex cursor-pointer flex-col items-center gap-1.5 transition-transform active:scale-95"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-[14px] border border-[#E5E1D9] bg-white text-[#2C2C2C] shadow-sm">
                <Icon size={20} strokeWidth={1.5} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider">{cat.label}</span>
            </div>
          );
        })}
      </section>

      {/* Action Cards */}
      <section className="flex gap-3 px-4">
        <div className="flex flex-1 cursor-pointer items-center gap-3 rounded-xl border border-[#D1CEC8] bg-white p-3 shadow-sm transition-colors active:bg-gray-50">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#8B2323]/10 text-[#8B2323]">
            <Users size={18} />
          </div>
          <div>
            <h4 className="text-xs font-bold text-[#2C2C2C]">非遗大咖</h4>
            <p className="mt-0.5 text-[9px] tracking-wider opacity-60">探访百位技艺传承人</p>
          </div>
        </div>
        <div className="flex flex-1 cursor-pointer items-center gap-3 rounded-xl border border-[#D1CEC8] bg-white p-3 shadow-sm transition-colors active:bg-gray-50">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#8B2323]/10 text-[#8B2323]">
            <Film size={18} />
          </div>
          <div>
            <h4 className="text-xs font-bold text-[#2C2C2C]">数字展馆</h4>
            <p className="mt-0.5 text-[9px] tracking-wider opacity-60">3D云游世遗泉州</p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="relative mx-4 space-y-3 overflow-hidden rounded-2xl border border-[#D1CEC8] bg-white p-4 shadow-sm">
        <div className="absolute right-0 top-0 h-24 w-24 -translate-y-8 translate-x-8 rounded-full bg-[#8B2323]/5" />
        <div className="relative z-10 flex items-end justify-between border-b border-[#F0F0EE] pb-2">
          <h3 className="text-xs font-black italic tracking-widest text-[#8B2323]">QUANZHOU HERITAGE</h3>
          <span className="text-[9px] opacity-40">UNESCO-2021</span>
        </div>
        <div className="relative z-10 grid grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <p className="text-[10px] font-bold uppercase tracking-tighter opacity-60">文化渊源</p>
            <p className="text-[10px] leading-relaxed line-clamp-3">
              泉州古称“刺桐”，是海上丝绸之路的重要起点，拥有深厚的历史积淀和多元文化交汇的城市气质。
            </p>
          </div>
          <div className="space-y-1.5">
            <p className="text-[10px] font-bold uppercase tracking-tighter opacity-60">传承体系</p>
            <p className="text-[10px] leading-relaxed line-clamp-3">
              这里保存着南音、木偶戏、茶文化等多项世界级非遗，以活态传承的方式延续千年文脉。
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="px-4 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="flex items-center gap-2 text-base font-bold">
            <span className="h-4 w-1 bg-[#8B2323]" />
            推荐活动
          </h3>
          <span className="flex items-center text-[10px] text-[#2C2C2C] opacity-50">
            查看全部 <ChevronRight size={12} />
          </span>
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
              <p className={cn("text-xs font-bold leading-snug tracking-tight", index === 0 && "text-[#8B2323]")}>
                {item.title}
              </p>
              <p className="mt-2 text-[9px] italic opacity-60">{item.location}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
