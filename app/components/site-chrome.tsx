import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import Link from "next/link";
import { contactInfo, navItems } from "../data/site";

const publicDir = join(process.cwd(), "public");

export function hasAsset(src: string) {
  const assetPath = src.split(/[?#]/)[0];

  return existsSync(join(publicDir, assetPath.replace(/^\//, "")));
}

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[rgba(16,20,26,0.84)] shadow-[0_12px_42px_rgba(0,0,0,0.24)] backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-2 py-3 sm:px-3 lg:px-4">
        <Link href="/" className="flex items-center gap-1 sm:gap-1.5" aria-label="F11 首页">
          <span className="relative block h-[3.8rem] w-[9.1rem] overflow-hidden sm:h-[4.15rem] sm:w-[12.2rem]">
            <Image
              src="/f11/logo/logo-black.png"
              alt="F11 Logo"
              width={1536}
              height={1024}
              preload
              className="absolute -left-4 -top-[1.1rem] h-[6.9rem] w-auto max-w-none object-contain mix-blend-screen sm:-left-5 sm:-top-[1.35rem] sm:h-[7.6rem]"
            />
          </span>
          <span className="hidden items-center gap-1.5 text-sm font-black tracking-[0.16em] text-[#D9DEE6] sm:flex">
            <span className="h-px w-4 bg-[#E60012]" />
            <span>透明 · 高效 · 保真</span>
            <span className="h-px w-4 bg-[#E60012]" />
          </span>
        </Link>

        <div className="hidden items-center gap-6 text-sm font-semibold text-[#B8C0CC] lg:flex">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="group relative py-2 transition hover:text-white">
              {item.label}
              <span className="absolute inset-x-0 -bottom-0.5 h-px scale-x-0 bg-[#E60012] transition group-hover:scale-x-100" />
            </Link>
          ))}
        </div>

        <Link
          href="/booking"
          className="rounded-full border border-[#FF1E1E]/70 bg-[#E60012] px-4 py-2 text-sm font-bold text-white shadow-[0_0_28px_rgba(230,0,18,0.28)] transition hover:bg-[#ff1e1e] sm:px-5 sm:py-2.5"
        >
          预约到店
        </Link>
      </nav>
      <div className="border-t border-white/8 px-3 pb-3 lg:hidden">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto pt-2 [scrollbar-width:none]">
          {navItems.slice(1).map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="shrink-0 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-bold text-[#B8C0CC]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#10141A] px-5 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-sm text-[#7D8794] sm:flex-row">
        <Image
          src="/f11/logo/logo-black.png"
          alt="F11 Logo"
          width={1536}
          height={1024}
          className="h-12 w-auto object-contain mix-blend-lighten"
        />
        <p>© 2026 F11汽车养护超级工厂. All rights reserved.</p>
      </div>
    </footer>
  );
}

export function FloatingContact() {
  return (
    <div className="fixed inset-x-4 bottom-4 z-40 grid grid-cols-3 gap-2 sm:inset-x-auto sm:bottom-7 sm:right-6 sm:flex sm:flex-col">
      <a
        href={`tel:${contactInfo.phone}`}
        className="flex h-11 items-center justify-center rounded-full border border-white/12 bg-[#10141A]/88 px-3 text-xs font-black text-white shadow-[0_12px_42px_rgba(0,0,0,0.28)] backdrop-blur-xl transition hover:border-[#E60012]/70 sm:px-4 sm:text-sm"
      >
        电话
      </a>
      <Link
        href="/contact#wechat"
        className="flex h-11 items-center justify-center rounded-full border border-white/12 bg-[#10141A]/88 px-3 text-xs font-black text-white shadow-[0_12px_42px_rgba(0,0,0,0.28)] backdrop-blur-xl transition hover:border-[#00D66B]/70 sm:px-4 sm:text-sm"
      >
        微信
      </Link>
      <Link
        href="/booking"
        className="flex h-11 items-center justify-center rounded-full border border-[#FF1E1E]/70 bg-[#E60012] px-3 text-xs font-black text-white shadow-[0_0_28px_rgba(230,0,18,0.32)] transition hover:bg-[#ff1e1e] sm:px-4 sm:text-sm"
      >
        预约
      </Link>
    </div>
  );
}

export function PageFrame({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080A0D] pb-20 text-[#F5F7FA] sm:pb-0">
      <SiteHeader />
      {children}
      <SiteFooter />
      <FloatingContact />
    </main>
  );
}

export function SectionShell({ children }: { children: React.ReactNode }) {
  return <div className="relative mx-auto max-w-7xl">{children}</div>;
}

export function SectionTitle({
  code,
  title,
  text,
}: {
  code: string;
  title: string;
  text: string;
}) {
  return (
    <div className="reveal">
      <p className="text-sm font-black tracking-[0.28em] text-[#E60012]">{code}</p>
      <h2 className="mt-4 max-w-4xl text-4xl font-black tracking-normal text-[#F5F7FA] sm:text-5xl">
        {title}
      </h2>
      <p className="mt-6 max-w-3xl text-base leading-8 text-[#B8C0CC]">{text}</p>
    </div>
  );
}

export function PageHero({
  code,
  title,
  redTitle,
  text,
  image = "/f11/storefront/storefront-dark-gray-render.jpg",
  compact = false,
}: {
  code: string;
  title: string;
  redTitle?: string;
  text: string;
  image?: string;
  compact?: boolean;
}) {
  return (
    <section className="relative min-h-[68vh] bg-[#10141A] px-5 pt-28 lg:px-8">
      {hasAsset(image) ? (
        <Image
          src={image}
          alt={title}
          fill
          preload
          unoptimized
          sizes="100vw"
          className="object-cover object-center opacity-70 brightness-[1.12] saturate-[1.04]"
        />
      ) : null}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,15,19,0.92)_0%,rgba(16,20,26,0.66)_48%,rgba(200,204,210,0.12)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_28%,rgba(230,0,18,0.22),transparent_24%),radial-gradient(circle_at_78%_16%,rgba(0,214,107,0.16),transparent_24%),radial-gradient(circle_at_70%_70%,rgba(200,204,210,0.18),transparent_30%)]" />
      <GreenDots className="right-4 top-32 h-72 w-72 opacity-30" />
      <SectionShell>
        <div className="relative flex min-h-[calc(68vh-7rem)] max-w-4xl flex-col justify-center py-16">
          <p className="inline-flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-black tracking-[0.24em] text-[#B8C0CC] backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-[#00D66B] shadow-[0_0_18px_rgba(0,214,107,0.9)]" />
            {code}
          </p>
          <h1
            className={`mt-8 font-black leading-[1.08] text-[#F5F7FA] ${
              compact ? "text-[2.25rem] sm:text-5xl lg:text-6xl" : "text-[2.45rem] sm:text-6xl lg:text-7xl"
            }`}
          >
            {title}
            {redTitle ? (
              <span className="block text-[#FF1E1E] drop-shadow-[0_0_24px_rgba(230,0,18,0.35)]">
                {redTitle}
              </span>
            ) : null}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#D9DEE6]">{text}</p>
        </div>
      </SectionShell>
    </section>
  );
}

export function GreenDots({ className }: { className: string }) {
  return (
    <div
      className={`pointer-events-none absolute bg-[radial-gradient(circle,#00D66B_1px,transparent_2px)] [background-size:18px_18px] ${className}`}
    />
  );
}

export function LineIcon({ index }: { index: number }) {
  const rotation = (index % 4) * 45;

  return (
    <span className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06]">
      <span className="absolute h-px w-7 bg-[#E60012]" style={{ transform: `rotate(${rotation}deg)` }} />
      <span className="h-2 w-2 rounded-full bg-[#00D66B] shadow-[0_0_16px_rgba(0,214,107,0.8)]" />
    </span>
  );
}

export function MissingImage({ title, hint }: { title: string; hint: string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
      <div className="rounded-2xl border border-dashed border-white/20 bg-[#10141A]/88 p-6 backdrop-blur-xl">
        <p className="font-black text-[#F5F7FA]">{title}</p>
        <p className="mt-3 text-sm leading-6 text-[#B8C0CC]">{hint}</p>
      </div>
    </div>
  );
}

export function ContactItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 shadow-sm">
      <p className="text-sm font-black tracking-[0.22em] text-[#E60012]">{label}</p>
      <p className="mt-5 break-words text-lg font-black leading-7 text-[#F5F7FA] sm:text-xl">{value}</p>
    </div>
  );
}
