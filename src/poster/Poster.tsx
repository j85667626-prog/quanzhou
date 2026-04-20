import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import imgKaiyuanTemple from "../assets/images/kaiyuan_temple.jpg";
import imgQrCode from "../assets/images/quanzhou-qr.png";

export default function Poster() {
  const navigate = useNavigate();

  return (
    <div className="relative mx-auto flex h-screen w-full max-w-md flex-col items-center justify-center overflow-hidden bg-black">
      <div className="absolute left-0 top-0 z-50 flex w-full items-center justify-between p-4">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition-transform active:scale-90"
          aria-label="返回"
        >
          <ArrowLeft size={20} />
        </button>
      </div>

      <div
        className="relative h-[568px] w-[320px] overflow-hidden bg-[#7f1717] shadow-2xl"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={imgKaiyuanTemple}
            alt="Background"
            className="h-full w-full object-cover opacity-30 grayscale mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#7f1717]/60 via-[#6f1010]/80 to-[#1a0000] mix-blend-multiply" />
        </div>

        <div className="relative z-10 flex h-full w-full flex-col items-center border-[10px] border-[#8b1111]/30 border-double p-6">
          <div className="mt-4 text-center">
            <span className="mb-4 inline-block border border-[#d4af37] px-2 py-0.5 text-[10px] uppercase tracking-widest text-[#d4af37]">
              世界文化遗产
            </span>
            <h1
              className="mb-1 text-[38px] font-black tracking-[0.18em] text-white drop-shadow-lg"
              style={{ writingMode: "vertical-rl", textOrientation: "upright" }}
            >
              刺桐遗韵
            </h1>
          </div>

          <div className="absolute right-6 top-1/4 flex h-1/2 flex-col items-center justify-center text-lg font-serif text-[#d4af37]">
            <p className="mb-4 tracking-[0.4em]" style={{ writingMode: "vertical-rl" }}>
              宋元中国的世界记忆
            </p>
            <p className="tracking-[0.4em]" style={{ writingMode: "vertical-rl" }}>
              海上丝路的文化枢纽
            </p>
          </div>

          <div className="absolute left-6 top-1/4 flex h-1/2 flex-col items-center justify-center text-sm font-serif text-white opacity-80">
            <p className="tracking-[0.2em]" style={{ writingMode: "vertical-rl" }}>
              传承千年文脉
            </p>
          </div>

          <div className="mt-auto flex w-full items-end justify-between border-t border-[#d4af37]/30 pt-4">
            <div className="text-left">
              <h2 className="mb-1 text-lg font-bold tracking-wider text-[#d4af37]">
                泉州非物质文化遗产
              </h2>
              <p className="max-w-[140px] text-[10px] leading-tight text-white/60">
                扫码进入泉州非遗之旅，探索南音、木偶戏与海丝文化的千年魅力。
              </p>
            </div>

            <div className="shrink-0 rounded-sm bg-white p-1 shadow-lg">
              <img
                src={imgQrCode}
                alt="泉州跳转二维码"
                className="h-16 w-16 rounded-sm border border-gray-200 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
