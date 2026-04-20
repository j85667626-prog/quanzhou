import { Eye, Flame } from "lucide-react";

export default function News() {
  const newsList = [
    {
      id: 1,
      title: "“宋元中国·海丝泉州”申遗成功，22处代表性古迹入选《世界遗产名录》",
      date: "2021-07-25",
      views: "9.5k",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/20230130_Old_City_of_Quanzhou_01.jpg/960px-20230130_Old_City_of_Quanzhou_01.jpg"
    },
    {
      id: 2,
      title: "南音《百鸟归巢》亮相春晚，千年古乐绽放时代魅力与数字创新",
      date: "2023-01-22",
      views: "12.8k",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Concert_de_musique_chinoise_Nanguan_%28Auditorium_du_mus%C3%A9e_Guimet%29_%288027971895%29.jpg/960px-Concert_de_musique_chinoise_Nanguan_%28Auditorium_du_mus%C3%A9e_Guimet%29_%288027971895%29.jpg"
    },
    {
      id: 3,
      title: "德化白瓷国际巡展收官：感受“中国白”泥与火的东方神韵",
      date: "2024-03-12",
      views: "8.9k",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/MET_DP170116.jpg/960px-MET_DP170116.jpg"
    },
    {
      id: 4,
      title: "非遗大师走进安海镇，在安平桥讲述古代造桥智慧与跨代传承",
      date: "2024-04-10",
      views: "5.6k",
      img: "https://upload.wikimedia.org/wikipedia/commons/0/0b/%E5%AE%89%E6%B5%B7%E9%8E%AE%E7%9A%84%E5%AE%89%E5%B9%B3%E6%A9%8B.JPG"
    }
  ];

  const trending = ["# 泉州南音上春晚", "# 宋元泉州申遗大赏", "# 提线木偶世界巡演", "# 蟳埔女簪花围"];

  return (
    <div className="min-h-full pb-10">
      {/* Featured News Top */}
      <div className="p-4">
        <section className="relative h-44 w-full rounded-2xl overflow-hidden shadow-lg border border-[#D1CEC8] active:scale-[0.99] transition-transform cursor-pointer bg-[#A68966]">
          <div 
            className="absolute inset-0 bg-cover bg-center mix-blend-multiply opacity-80" 
            style={{ backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Tieguanyin2.jpg/960px-Tieguanyin2.jpg')` }} 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute top-4 right-4 flex items-center bg-[#8B2323] text-white text-[9px] px-2 py-1 rounded font-bold tracking-widest uppercase opacity-90 shadow-sm">
             <Flame size={10} className="mr-1"/> 专题聚焦
          </div>
          <div className="absolute bottom-4 left-4 right-4">
             <h2 className="text-white font-bold text-lg leading-tight italic">安溪铁观音制作技艺：<br/>入选人类非遗代表作名录</h2>
          </div>
        </section>
      </div>

      {/* Trending Tags */}
      <div className="px-4 pb-2">
        <h3 className="text-sm font-bold flex items-center gap-2 text-[#8B2323] mb-3">
          <span className="w-1 h-3.5 bg-[#8B2323]"></span> 热门话题
        </h3>
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
          {trending.map((tag, idx) => (
            <span 
              key={idx} 
              className="px-3 py-1 bg-white border border-[#E5E1D9] rounded-md text-[10px] font-bold text-[#2C2C2C] whitespace-nowrap shadow-sm active:bg-gray-50 cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="h-px bg-[#D1CEC8] mx-4 my-2 opacity-50" />

      {/* News List */}
      <div className="px-4 space-y-3 pt-2">
        {newsList.map((item) => (
          <div key={item.id} className="bg-white border border-[#D1CEC8] rounded-xl p-3 flex gap-4 active:scale-[0.98] transition-transform cursor-pointer shadow-sm">
             <div className="flex-1 flex flex-col justify-between">
                <h3 className="text-[#2C2C2C] font-bold text-xs leading-snug line-clamp-2">{item.title}</h3>
                <div className="flex items-center text-[10px] text-[#2C2C2C] opacity-50 mt-2 font-bold uppercase tracking-wider">
                  <span>{item.date}</span>
                  <span className="flex items-center ml-4">
                    <Eye size={12} className="mr-1" />
                    {item.views}
                  </span>
                </div>
             </div>
             <div className="w-24 h-16 shrink-0 rounded-lg overflow-hidden border border-[#E5E1D9]">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
             </div>
          </div>
        ))}
      </div>
    </div>
  );
}
