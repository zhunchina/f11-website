import Image from "next/image";
import Link from "next/link";
import { BatteryModule, MetricCard, ServiceCard, ServiceGallery, StoreGallery } from "./components/content-cards";
import { GreenDots, hasAsset, LineIcon, MissingImage, PageFrame, SectionShell, SectionTitle } from "./components/site-chrome";
import { efficiency, factoryItems, heroMetrics, partners, services } from "./data/site";

export default function Home() {
  return (
    <PageFrame>
      <section className="relative min-h-screen bg-[#10141A] pt-20">
        <HeroBackground />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,15,19,0.90)_0%,rgba(16,20,26,0.58)_46%,rgba(200,204,210,0.16)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_28%,rgba(230,0,18,0.24),transparent_24%),radial-gradient(circle_at_78%_16%,rgba(0,214,107,0.16),transparent_24%),radial-gradient(circle_at_70%_70%,rgba(200,204,210,0.20),transparent_30%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(245,247,250,0.10)_0%,transparent_34%,rgba(8,10,13,0.72)_100%)]" />
        <div className="absolute inset-x-0 top-24 h-px bg-[#E60012] shadow-[0_0_26px_rgba(230,0,18,0.7)]" />
        <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-10 px-5 pb-16 pt-24 sm:pt-20 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div className="reveal max-w-3xl">
            <p className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-black tracking-[0.24em] text-[#B8C0CC] backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-[#00D66B] shadow-[0_0_18px_rgba(0,214,107,0.9)]" />
              新能源汽车服务中心
            </p>
            <h1 className="mt-8 text-[2.6rem] font-black leading-[1.08] text-[#F5F7FA] sm:text-6xl lg:text-7xl">
              <span className="block whitespace-nowrap">F11 汽车养护</span>
              <span className="block text-[#FF1E1E] drop-shadow-[0_0_24px_rgba(230,0,18,0.35)]">
                超级工厂
              </span>
            </h1>
            <p className="mt-6 text-xl font-black tracking-[0.16em] text-white sm:text-3xl">
              透明 · 高效 · 保真
            </p>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#D9DEE6]">
              用工业化标准，重构中国汽车养护服务体验。
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/booking"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#E60012] px-8 text-base font-black text-white shadow-[0_0_32px_rgba(230,0,18,0.34)] transition hover:bg-[#ff1e1e]"
              >
                预约到店
              </Link>
              <Link
                href="/services"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-white/[0.06] px-8 text-base font-black text-white backdrop-blur transition hover:border-[#00D66B]/70 hover:bg-white/[0.10]"
              >
                查看服务项目
              </Link>
            </div>
          </div>

          <div className="reveal grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
            {heroMetrics.map((item) => (
              <MetricCard key={item.label} value={item.value} label={item.label} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-[#10141A] px-5 py-20 lg:px-8 lg:py-24">
        <GreenDots className="left-0 top-16 h-72 w-72 opacity-25" />
        <SectionShell>
          <SectionTitle
            code="工厂体系"
            title="为什么叫超级工厂"
            text="F11 把车间、流程、客户和交付标准整合成可复制的工业化服务系统，而不是普通汽修门店的简单装修。"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {factoryItems.map((item, index) => (
              <article key={item.title} className="glass-card reveal p-6">
                <div className="mb-8 flex items-center justify-between">
                  <LineIcon index={index} />
                  <span className="text-xs font-black tracking-[0.22em] text-[#7D8794]">
                    能力 {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-2xl font-black text-[#F5F7FA]">{item.title}</h3>
                <p className="mt-4 leading-7 text-[#B8C0CC]">{item.text}</p>
              </article>
            ))}
          </div>
        </SectionShell>
      </section>

      <section className="relative bg-[#080A0D] px-5 py-20 lg:px-8 lg:py-24">
        <SectionShell>
          <SectionTitle
            code="空间体系"
            title="门店形象"
            text="以银灰金属、红色灯带、玻璃幕墙和绿色点阵建立高端连锁服务中心的第一视觉识别。"
          />
          <div className="mt-10">
            <StoreGallery />
          </div>
        </SectionShell>
      </section>

      <section className="relative bg-[#171B22] px-5 py-20 lg:px-8 lg:py-24">
        <GreenDots className="right-0 top-16 h-80 w-80 opacity-25" />
        <SectionShell>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
            <div className="flex flex-col">
              <SectionTitle
                code="服务能力"
                title="服务项目"
                text="围绕轮胎、保养、洗美、新能源检测与电池检测，形成高频、标准、可复制的门店服务能力。"
              />
              <div className="mt-8 grid flex-1 gap-4 sm:grid-cols-2">
                {services.map((item, index) => (
                  <ServiceCard key={item.title} index={index} title={item.title} text={item.text} />
                ))}
              </div>
            </div>
            <ServiceGallery />
          </div>
          <BatteryModule />
        </SectionShell>
      </section>

      <section className="relative bg-[#080A0D] px-5 py-20 lg:px-8 lg:py-24">
        <SectionShell>
          <SectionTitle
            code="效率模型"
            title="工厂效率模型"
            text="用数据仪表盘呈现单店能力，让工位、时效、报价、客户管理和 SOP 交付成为可管理资产。"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {efficiency.map((item, index) => (
              <article key={item.label} className="reveal rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.035))] p-6 shadow-[0_20px_64px_rgba(0,0,0,0.25)]">
                <div className="mb-7 flex items-center justify-between">
                  <span className="text-xs font-black tracking-[0.22em] text-[#7D8794]">
                    数据 {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-[#00D66B] shadow-[0_0_16px_rgba(0,214,107,0.8)]" />
                </div>
                <p className="text-3xl font-black text-[#F5F7FA] sm:text-4xl">{item.value}</p>
                <p className="mt-4 text-base font-bold text-[#D9DEE6]">{item.label}</p>
              </article>
            ))}
          </div>
        </SectionShell>
      </section>

      <section className="relative bg-[#10141A] px-5 py-20 lg:px-8 lg:py-24">
        <GreenDots className="right-0 bottom-8 h-72 w-72 opacity-25" />
        <SectionShell>
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="reveal">
              <p className="text-sm font-black tracking-[0.28em] text-[#E60012]">合作加盟</p>
              <h2 className="mt-4 text-4xl font-black leading-tight text-[#F5F7FA] sm:text-5xl">
                开放区域合作，
                <span className="block text-[#FF1E1E]">共建汽车养护超级工厂</span>
              </h2>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#B8C0CC]">
                F11不是一家修理厂，而是一套可复制的汽车养护超级工厂模型。
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link className="cta-button bg-[#E60012]" href="/join">
                  获取合作方案
                </Link>
                <Link className="cta-button bg-white/[0.08]" href="/contact">
                  预约项目沟通
                </Link>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {partners.map((item, index) => (
                <article key={item.title} className="glass-card reveal p-6">
                  <p className="text-xs font-black tracking-[0.22em] text-[#00D66B]">
                    合作 {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-8 text-2xl font-black text-[#F5F7FA]">{item.title}</h3>
                  <p className="mt-4 leading-7 text-[#B8C0CC]">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </SectionShell>
      </section>
    </PageFrame>
  );
}

function HeroBackground() {
  const src = "/images/space/storefront.png";

  if (!hasAsset(src)) {
    return (
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#10141A,#343A43)]">
        <MissingImage title="首页首屏门头图缺失" hint="请将 storefront.png 放入 public/images/space 目录" />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt="F11 正前方门头图"
      fill
      preload
      sizes="100vw"
      className="object-cover object-center opacity-95 brightness-[1.18] saturate-[1.04]"
    />
  );
}
