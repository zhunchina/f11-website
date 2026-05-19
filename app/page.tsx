import Image from "next/image";
import Link from "next/link";
import { ServiceCard, StoreGallery } from "./components/content-cards";
import { hasAsset, LineIcon, MissingImage, PageFrame, SectionShell, SectionTitle } from "./components/site-chrome";
import { factoryItems, services } from "./data/site";

const standards = [
  { title: "透明报价", text: "费用清楚展示，减少隐形消费和反复沟通。" },
  { title: "高效交付", text: "围绕高频养护项目，提升到店服务效率。" },
  { title: "正品保真", text: "严选用品和施工流程，保障每一次服务质量。" },
];

const homeServiceTitles = ["机油保养", "轮胎服务", "洗美贴膜", "新能源检测"];

export default function Home() {
  const homeServices = homeServiceTitles
    .map((title) => services.find((service) => service.title === title))
    .filter((service): service is (typeof services)[number] => Boolean(service));

  return (
    <PageFrame>
      <section className="relative min-h-screen bg-[#10141A] pt-20">
        <HeroBackground />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.82)_0%,rgba(0,0,0,0.78)_31%,rgba(0,0,0,0.34)_49%,rgba(0,0,0,0.08)_67%,rgba(0,0,0,0)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,10,13,0.12)_0%,transparent_44%,rgba(0,0,0,0.48)_100%)]" />
        <div className="absolute left-0 top-24 h-px w-[42vw] bg-[linear-gradient(90deg,#E60012,rgba(230,0,18,0.28),transparent)]" />
        <div className="relative flex min-h-[calc(100vh-5rem)] max-w-7xl items-start px-5 pb-18 pt-[24vh] sm:px-8 sm:pt-[26vh] lg:px-16 lg:pt-[28vh] xl:px-20">
          <div className="reveal w-full max-w-[43rem] lg:w-[49%]">
            <p className="text-2xl font-bold tracking-normal text-white sm:text-4xl lg:text-[2.25rem]">
              透明 · 高效 · 保真
            </p>
            <h1 className="mt-5 text-[2.5rem] font-black leading-[1.08] text-[#F5F7FA] sm:text-6xl lg:whitespace-nowrap lg:text-[clamp(3rem,3.8vw,3.6rem)]">
              <span className="block sm:inline">F11 汽车养护</span>
              <span className="block sm:inline">超级工厂</span>
            </h1>
            <div className="mt-6 h-px w-28 bg-[#E60012] shadow-[0_0_18px_rgba(230,0,18,0.62)]" />
            <p className="mt-6 max-w-xl text-base leading-8 text-[#D9DEE6] sm:text-lg lg:text-xl lg:leading-[1.7]">
              以工厂级标准化，重构汽车养护新范式。
            </p>
            <div className="mt-9 flex">
              <Link
                href="/booking"
                className="inline-flex h-11 items-center justify-center rounded-full bg-[#E60012] px-8 text-sm font-black text-white shadow-[0_0_26px_rgba(230,0,18,0.30)] transition hover:bg-[#ff1e1e]"
              >
                立即预约
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-[#080A0D] px-5 py-14 lg:px-8 lg:py-16">
        <SectionShell>
          <SectionTitle
            code="F11 标准"
            title="F11 标准"
            text="把报价、流程和交付做清楚，让车主更放心。"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {standards.map((item, index) => (
              <article key={item.title} className="glass-card reveal p-6">
                <div className="mb-8 flex items-center justify-between">
                  <LineIcon index={index} />
                  <span className="text-xs font-black tracking-[0.22em] text-[#7D8794]">
                    标准 {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-2xl font-black text-[#F5F7FA]">{item.title}</h3>
                <p className="mt-4 leading-7 text-[#B8C0CC]">{item.text}</p>
              </article>
            ))}
          </div>
        </SectionShell>
      </section>

      <section className="relative bg-[#10141A] px-5 py-20 lg:px-8 lg:py-24">
        <SectionShell>
          <SectionTitle
            code="工厂体系"
            title="为什么叫超级工厂"
            text="把车间、流程、工位和记录做标准，让养护过程更清楚。"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
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
            text="从门头、接待区到透明车间，用统一空间标准建立清楚、专业的到店体验。"
          />
          <div className="mt-10">
            <StoreGallery />
          </div>
        </SectionShell>
      </section>

      <section className="relative bg-[#171B22] px-5 py-20 lg:px-8 lg:py-24">
        <SectionShell>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionTitle
              code="服务项目"
              title="常用养护服务入口"
              text="先把高频项目讲清楚，让车主快速找到需要的服务。"
            />
            <Link className="cta-button bg-white/[0.08]" href="/services">
              查看全部服务
            </Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {homeServices.map((item, index) => (
              <ServiceCard key={item.title} index={index} title={item.title} text={item.text} />
            ))}
          </div>
        </SectionShell>
      </section>

      <section className="relative bg-[#080A0D] px-5 py-20 lg:px-8 lg:py-24">
        <SectionShell>
          <div className="reveal rounded-[1.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)] sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div>
              <p className="text-sm font-black tracking-[0.28em] text-[#E60012]">预约到店</p>
              <h2 className="mt-4 text-3xl font-black leading-tight text-[#F5F7FA] sm:text-5xl">
                准备到店或了解合作？
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#B8C0CC]">
                车主可提前预约到店，合作伙伴可提交项目沟通需求。
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-[#7D8794]">
                F11 香河超级工厂已开始运营，建议到店前先电话确认服务时间。
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0">
              <Link className="cta-button bg-[#E60012]" href="/booking">
                预约到店
              </Link>
              <Link className="cta-button bg-white/[0.08]" href="/join">
                招商合作
              </Link>
            </div>
          </div>
        </SectionShell>
      </section>
    </PageFrame>
  );
}

function HeroBackground() {
  const src = "/f11/bg/hero-home-dark-gray-factory.jpg";

  if (!hasAsset(src)) {
    return (
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#10141A,#343A43)]">
        <MissingImage title="首页首屏大图缺失" hint="请将 hero-home-dark-gray-factory.jpg 放入 public/f11/bg 目录" />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt="F11 正前方门头图"
      fill
      preload
      unoptimized
      sizes="100vw"
      className="object-cover opacity-95 brightness-[1.1] saturate-[1.02]"
      style={{ objectPosition: "center right" }}
    />
  );
}
