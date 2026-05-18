import Image from "next/image";
import { services, spaces } from "../data/site";
import { GreenDots, hasAsset, LineIcon, MissingImage } from "./site-chrome";

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
  objectPosition = "center",
  index,
}: {
  title: string;
  text: string;
  src: string;
  objectPosition?: string;
  index: number;
}) {
  return (
    <article className="reveal group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] shadow-[0_24px_70px_rgba(0,0,0,0.24)] transition duration-300 hover:-translate-y-1 hover:border-[#00D66B]/50 hover:shadow-[0_30px_90px_rgba(0,214,107,0.12)]">
      <div className="relative aspect-[16/9] bg-[#171B22]">
        {hasAsset(src) ? (
          <Image
            src={src}
            alt={title}
            fill
            unoptimized
            sizes="(max-width: 1024px) 100vw, 32vw"
            className="object-contain p-2 brightness-[0.96] saturate-[1.04] transition duration-500 group-hover:scale-[1.02] group-hover:brightness-105"
            style={{ objectPosition }}
          />
        ) : (
          <MissingImage title={`${title}图片缺失`} hint="请将服务图片放入 public/f11/service 目录" />
        )}
        <div className="absolute inset-x-0 top-0 h-px bg-[#E60012] opacity-70 transition group-hover:opacity-100" />
        <GreenDots className="right-4 top-4 h-24 w-24 opacity-0 transition duration-300 group-hover:opacity-45" />
      </div>
      <div className="p-5">
        <p className="text-xs font-black tracking-[0.2em] text-[#00D66B]">
          服务 {String(index + 1).padStart(2, "0")}
        </p>
        <h3 className="mt-3 text-xl font-black text-white sm:text-2xl">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-[#D9DEE6] opacity-90">{text}</p>
      </div>
    </article>
  );
}
