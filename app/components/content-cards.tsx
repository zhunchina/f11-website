import Image from "next/image";
import { batteryCapabilities, services, spaces } from "../data/site";
import { GreenDots, hasAsset, LineIcon, MissingImage } from "./site-chrome";

export function MetricCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 shadow-[0_18px_48px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:p-5">
      <p className="text-2xl font-black text-[#F5F7FA] sm:text-3xl">{value}</p>
      <p className="mt-3 text-sm font-bold text-[#B8C0CC]">{label}</p>
    </div>
  );
}

export function SpaceCard({
  title,
  code,
  src,
  hint,
  tag,
  featured = false,
}: {
  title: string;
  code: string;
  src: string;
  hint: string;
  tag: string;
  featured?: boolean;
}) {
  return (
    <article
      className={`reveal group overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.06] shadow-[0_24px_70px_rgba(0,0,0,0.24)] ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      <div className={`relative bg-[#171B22] ${featured ? "aspect-[16/10] sm:aspect-[16/7]" : "aspect-[16/11] sm:aspect-[16/10]"}`}>
        {hasAsset(src) ? (
          <Image
            src={src}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center transition duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <MissingImage title={`${title}图片缺失`} hint={hint} />
        )}
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(8,10,13,0.82),rgba(8,10,13,0.10)_58%,rgba(8,10,13,0.26))]" />
        <div className="absolute inset-x-0 top-0 h-px bg-[#E60012]" />
        <GreenDots className="right-5 top-5 h-28 w-28 opacity-45" />
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
          <p className="text-xs font-black tracking-[0.22em] text-[#00D66B]">{code}</p>
          <h3 className="mt-3 text-xl font-black text-white sm:text-3xl">{title}</h3>
          <p className="mt-3 text-sm font-semibold text-[#B8C0CC]">{tag}</p>
        </div>
      </div>
    </article>
  );
}

export function StoreGallery() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {spaces.map((space) => (
        <SpaceCard key={space.title} {...space} />
      ))}
    </div>
  );
}

export function ServiceCard({
  title,
  text,
  index,
}: {
  title: string;
  text: string;
  index: number;
}) {
  return (
    <article className="glass-card reveal flex min-h-36 flex-col justify-between p-5 sm:min-h-40">
      <div className="flex items-center justify-between">
        <LineIcon index={index} />
        <span className="text-xs font-black tracking-[0.18em] text-[#7D8794]">
          项目 {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="mt-7">
        <h3 className="text-xl font-black text-[#F5F7FA] sm:text-2xl">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-[#B8C0CC]">{text}</p>
      </div>
    </article>
  );
}

export function ServiceGallery() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:min-h-[560px]">
      {services.map((item, index) => (
        <ServiceVisualCard key={item.title} index={index} {...item} />
      ))}
    </div>
  );
}

export function ServiceVisualCard({
  title,
  text,
  src,
  index,
}: {
  title: string;
  text: string;
  src: string;
  index: number;
}) {
  const featured = index === 4;

  return (
    <article
      className={`reveal group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] shadow-[0_24px_70px_rgba(0,0,0,0.24)] transition duration-300 hover:-translate-y-1 hover:border-[#00D66B]/50 hover:shadow-[0_30px_90px_rgba(0,214,107,0.12)] ${
        featured ? "sm:col-span-2" : ""
      }`}
    >
      <div className={`relative bg-[#24282D] ${featured ? "aspect-[16/7]" : "aspect-[4/3]"}`}>
        {hasAsset(src) ? (
          <Image
            src={src}
            alt={title}
            fill
            sizes="(max-width: 1024px) 100vw, 32vw"
            className="object-cover object-center brightness-[0.92] saturate-[1.04] transition duration-500 group-hover:scale-[1.06] group-hover:brightness-105"
          />
        ) : (
          <MissingImage title={`${title}图片缺失`} hint="请将服务图片放入 public/images 目录" />
        )}
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(8,10,13,0.88),rgba(8,10,13,0.18)_58%,rgba(200,204,210,0.12))] transition duration-300 group-hover:bg-[linear-gradient(0deg,rgba(8,10,13,0.76),rgba(8,10,13,0.10)_58%,rgba(200,204,210,0.18))]" />
        <div className="absolute inset-x-0 top-0 h-px bg-[#E60012] opacity-70 transition group-hover:opacity-100" />
        <GreenDots className="right-4 top-4 h-24 w-24 opacity-0 transition duration-300 group-hover:opacity-45" />
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <p className="text-xs font-black tracking-[0.2em] text-[#00D66B]">
            服务 {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-3 text-xl font-black text-white sm:text-2xl">{title}</h3>
          <p className="mt-3 max-w-lg text-sm leading-6 text-[#D9DEE6] opacity-90">{text}</p>
        </div>
      </div>
    </article>
  );
}

export function BatteryModule() {
  return (
    <div className="reveal mt-8 overflow-hidden rounded-[1.5rem] border border-[#00D66B]/25 bg-[linear-gradient(135deg,rgba(200,204,210,0.13),rgba(255,255,255,0.045))] shadow-[0_28px_80px_rgba(0,0,0,0.26)]">
      <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="relative min-h-[260px] bg-[#24282D]">
          <Image
            src="/images/service/service-board.png"
            alt="新能源电池检测服务能力"
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover object-center brightness-[1.02] saturate-[1.05]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,10,13,0.30),rgba(8,10,13,0.76))]" />
          <GreenDots className="left-5 top-5 h-28 w-28 opacity-55" />
        </div>
        <div className="relative p-6 sm:p-8 lg:p-10">
          <p className="text-sm font-black tracking-[0.28em] text-[#00D66B]">
            新能源电池检测
          </p>
          <h3 className="mt-4 text-3xl font-black leading-tight text-[#F5F7FA] sm:text-4xl">
            把电池健康纳入标准养护入口
          </h3>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[#D9DEE6]">
            面向新能源车主，F11 将电池状态、高压安全和续航衰减纳入门店检测流程，帮助车主更早发现风险，也为门店建立更高价值的服务能力。
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {batteryCapabilities.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3">
                <span className="h-2 w-2 rounded-full bg-[#00D66B] shadow-[0_0_14px_rgba(0,214,107,0.8)]" />
                <span className="text-sm font-bold text-[#F5F7FA]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
