import { useNavigate } from "react-router-dom";
import { ArrowLeft, Download } from "lucide-react";
import imgKaiyuanTemple from '../assets/images/kaiyuan_temple.jpg';

export default function Poster() {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full max-w-md mx-auto bg-black relative flex flex-col items-center justify-center overflow-hidden">
      {/* Top bar for closing the poster view */}
      <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-center z-50">
        <button 
          onClick={() => navigate(-1)}
          className="w-10 h-10 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white active:scale-90 transition-transform"
        >
          <ArrowLeft size={20} />
        </button>
        <div className="flex space-x-3">
          <button 
             onClick={() => alert("海报保存指令已发送！请前往系统相册查看。")}
             className="w-10 h-10 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white active:scale-90 transition-transform"
          >
            <Download size={18} />
          </button>
        </div>
      </div>

      {/* Actual Poster Container */}
      <div id="poster-capture-area" className="relative w-[320px] h-[568px] bg-red-900 overflow-hidden shadow-2xl rounded-sm">
        {/* Background Image / Texture */}
        <div className="absolute inset-0 z-0">
          <img 
            src={imgKaiyuanTemple}
            alt="Background" 
            className="w-full h-full object-cover opacity-30 mix-blend-overlay grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-red-900/60 via-red-800/80 to-[#1a0000] mix-blend-multiply" />
        </div>

        {/* Poster Content */}
        <div className="relative z-10 w-full h-full flex flex-col p-6 items-center border-[10px] border-[#8b1111]/30 border-double">
          
          <div className="mt-4 text-center">
            <span className="inline-block border border-[#d4af37] text-[#d4af37] text-[10px] px-2 py-0.5 tracking-widest uppercase mb-4">
              世界文化遗产
            </span>
            <h1 className="text-4xl font-black text-white tracking-[0.2em] mb-1 drop-shadow-lg" style={{ writingMode: "vertical-rl" }}>
              刺桐遗韵
            </h1>
          </div>

          <div className="absolute right-6 top-1/4 h-1/2 flex flex-col items-center justify-center text-[#d4af37] text-lg font-serif">
            <p className="tracking-[0.4em] mb-4" style={{ writingMode: "vertical-rl" }}>宋元中国的世界</p>
            <p className="tracking-[0.4em]" style={{ writingMode: "vertical-rl" }}>海洋商贸中心</p>
          </div>

          <div className="absolute left-6 top-1/4 h-1/2 flex flex-col items-center justify-center opacity-80 text-white text-sm font-serif">
            <p className="tracking-[0.2em]" style={{ writingMode: "vertical-rl" }}>传承千年文脉</p>
          </div>

          <div className="mt-auto w-full flex items-end justify-between border-t border-[#d4af37]/30 pt-4">
            <div className="text-left">
              <h2 className="text-[#d4af37] text-lg font-bold tracking-wider mb-1">泉州非物质文化遗产</h2>
              <p className="text-white/60 text-[10px] max-w-[140px] leading-tight">
                保护非遗，共守精神家园。扫码开启您的泉州非遗之旅。
              </p>
            </div>
            
            {/* Mock QR Code */}
            <div className="w-16 h-16 bg-white p-1 rounded-sm shrink-0 shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1605092676920-8ac5aece074f?w=100&q=80" 
                alt="QR Code" 
                className="w-full h-full object-cover rounded-sm border border-gray-200"
              />
            </div>
          </div>
        </div>
      </div>
      
      <p className="text-gray-400 text-xs mt-6 px-8 text-center">
        长按海报保存至相册，或点击右上角按钮进行分享
      </p>
    </div>
  );
}
