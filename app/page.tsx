import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";

const navItems = [
  { label: "首页", href: "#home" },
  { label: "工厂体系", href: "#factory" },
  { label: "空间体系", href: "#space" },
  { label: "服务能力", href: "#service" },
  { label: "合作加盟", href: "#partner" },
  { label: "联系我们", href: "#contact" },
];

const heroMetrics = [
  { value: "15+", label: "标准工位" },
  { value: "120+", label: "台日服务能力" },
  { value: "45min", label: "快保模型" },
  { value: "100%", label: "透明报价" },
  { value: "SOP", label: "标准施工" },
  { value: "企微", label: "客户管理" },
];

const factoryItems = [
  {
    title: "工厂化透明车间",
    text: "车间工位、施工进度与交付节点清晰可见。",
  },
  {
    title: "标准化维修流程",
    text: "检测、报价、施工、质检按统一 SOP 交付。",
  },
  {
    title: "可视化服务交付",
    text: "服务过程可追踪，减少车主与门店沟通损耗。",
  },
  {
    title: "数字化客户管理",
    text: "用数据沉淀车况、消费、保养周期与复购线索。",
  },
  {
    title: "企业微信私域体系",
    text: "门店顾问、客户触达和售后关怀形成闭环。",
  },
  {
    title: "新能源服务能力",
    text: "面向新能源时代扩展检测、养护与标准服务模型。",
  },
];

const spaces = [
  {
    title: "科技银灰外立面",
    tag: "银灰金属 / 红色灯带 / 玻璃幕墙",
    code: "空间 01",
    src: "/f11/storefront.png",
    hint: "请将 storefront.png 放入 public/f11 目录",
    featured: true,
  },
  {
    title: "客户接待中心",
    tag: "高端接待 / 透明沟通 / 车主信任",
    code: "空间 02",
    src: "/f11/interior/reception-main.png",
    hint: "请将 reception-main.png 放入 public/f11/interior 目录",
  },
  {
    title: "工厂化车间",
    tag: "标准工位 / 透明施工 / 效率交付",
    code: "空间 03",
    src: "/f11/workshop/workshop-main.png",
    hint: "请将 workshop-main.png 放入 public/f11/workshop 目录",
  },
  {
    title: "户外导视系统",
    tag: "品牌导视 / 远距识别 / 连锁形象",
    code: "空间 04",
    src: "/f11/signage/totem-main.png",
    hint: "请将 totem-main.png 放入 public/f11/signage 目录",
  },
  {
    title: "工服形象系统",
    tag: "统一工服 / 专业识别 / 服务信任",
    code: "空间 05",
    src: "/f11/team/gongfu.png",
    hint: "请将 gongfu.png 放入 public/f11/team 目录",
  },
];

const services = [
  { title: "轮胎服务", text: "检测、更换、动平衡与安全建议。" },
  { title: "机油保养", text: "高频快保标准化交付。" },
  { title: "洗美贴膜", text: "精洗美容、漆面护理与贴膜服务。" },
  { title: "新能源检测", text: "面向新能源车型的基础检测能力。" },
];

const efficiency = [
  { value: "15+", label: "标准工位" },
  { value: "120+", label: "日服务能力" },
  { value: "45min", label: "平均保养" },
  { value: "透明", label: "报价体系" },
  { value: "企微", label: "客户管理" },
  { value: "SOP", label: "标准交付" },
];

const partners = [
  { title: "区域合伙人", text: "共同建设区域标杆店，复制超级工厂模型。" },
  { title: "产业投资人", text: "以标准门店和运营模型承接汽车后市场升级机会。" },
  { title: "供应链伙伴", text: "围绕配件、轮胎、养护产品建立稳定协同。" },
  { title: "本地流量合作方", text: "把本地车主流量导入高转化服务场景。" },
];

const publicDir = join(process.cwd(), "public");

function hasAsset(src: string) {
  return existsSync(join(publicDir, src.replace(/^\//, "")));
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080A0D] text-[#F5F7FA]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[rgba(16,20,26,0.78)] backdrop-blur-2xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-2 py-3 sm:px-3 lg:px-4">
          <a href="#home" className="flex items-center gap-1 sm:gap-1.5" aria-label="F11 首页">
            <span className="relative block h-[4.15rem] w-[10.2rem] overflow-hidden sm:w-[12.2rem]">
              <Image
                src="/f11/logo/logo-black.png"
                alt="F11 Logo"
                width={1536}
                height={1024}
                priority
                className="absolute -left-5 -top-[1.35rem] h-[7.6rem] w-auto max-w-none object-contain mix-blend-screen"
              />
            </span>
            <span className="hidden items-center gap-1.5 text-sm font-black tracking-[0.16em] text-[#D9DEE6] sm:flex">
              <span className="h-px w-4 bg-[#E60012]" />
              <span>透明 · 高效 · 保真</span>
              <span className="h-px w-4 bg-[#E60012]" />
            </span>
          </a>

          <div className="hidden items-center gap-7 text-sm font-semibold text-[#B8C0CC] lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group relative py-2 transition hover:text-white"
              >
                {item.label}
                <span className="absolute inset-x-0 -bottom-0.5 h-px scale-x-0 bg-[#E60012] transition group-hover:scale-x-100" />
              </a>
            ))}
          </div>

          <a
            href="#partner"
            className="rounded-full border border-[#FF1E1E]/70 bg-[#E60012] px-5 py-2.5 text-sm font-bold text-white shadow-[0_0_28px_rgba(230,0,18,0.28)] transition hover:bg-[#ff1e1e]"
          >
            加盟咨询
          </a>
        </nav>
      </header>

      <section id="home" className="relative min-h-screen bg-[#080A0D] pt-20">
        <HeroBackground />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,10,13,0.96)_0%,rgba(8,10,13,0.78)_45%,rgba(8,10,13,0.26)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_28%,rgba(230,0,18,0.22),transparent_26%),radial-gradient(circle_at_75%_18%,rgba(0,214,107,0.12),transparent_24%)]" />
        <div className="absolute inset-x-0 top-24 h-px bg-[#E60012] shadow-[0_0_26px_rgba(230,0,18,0.7)]" />
        <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div className="reveal max-w-3xl">
            <p className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-black tracking-[0.24em] text-[#B8C0CC] backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-[#00D66B] shadow-[0_0_18px_rgba(0,214,107,0.9)]" />
              新能源汽车服务中心
            </p>
            <h1 className="mt-8 text-5xl font-black leading-tight text-[#F5F7FA] sm:text-6xl lg:text-7xl">
              F11 汽车养护
              <span className="block text-[#FF1E1E] drop-shadow-[0_0_24px_rgba(230,0,18,0.35)]">
                超级工厂
              </span>
            </h1>
            <p className="mt-6 text-2xl font-black tracking-[0.16em] text-white sm:text-3xl">
              透明 · 高效 · 保真
            </p>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#D9DEE6]">
              用工业化标准，重构中国汽车养护服务体验
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#E60012] px-8 text-base font-black text-white shadow-[0_0_32px_rgba(230,0,18,0.34)] transition hover:bg-[#ff1e1e]"
              >
                预约到店
              </a>
              <a
                href="#factory"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-white/[0.06] px-8 text-base font-black text-white backdrop-blur transition hover:border-[#00D66B]/70 hover:bg-white/[0.10]"
              >
                了解工厂体系
              </a>
            </div>
          </div>

          <div className="reveal grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
            {heroMetrics.map((item) => (
              <MetricCard key={item.label} value={item.value} label={item.label} />
            ))}
          </div>
        </div>
      </section>

      <section id="factory" className="relative bg-[#10141A] px-5 py-24 lg:px-8">
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

      <section id="space" className="relative bg-[#080A0D] px-5 py-24 lg:px-8">
        <SectionShell>
          <SectionTitle
            code="空间体系"
            title="空间体系"
            text="以银灰金属、红色灯带、玻璃幕墙和绿色点阵建立高端连锁服务中心的第一视觉识别。"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {spaces.map((space) => (
              <SpaceCard key={space.title} {...space} />
            ))}
          </div>
        </SectionShell>
      </section>

      <section id="service" className="relative bg-[#171B22] px-5 py-24 lg:px-8">
        <GreenDots className="right-0 top-16 h-80 w-80 opacity-25" />
        <SectionShell>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
            <div className="flex flex-col">
              <SectionTitle
                code="服务能力"
                title="服务能力"
                text="围绕轮胎、保养、洗美和新能源检测四个关键项目，形成高频、标准、可复制的门店服务能力。"
              />
              <div className="mt-8 grid flex-1 gap-4 sm:grid-cols-2">
                {services.map((item, index) => (
                  <ServiceCard key={item.title} index={index} {...item} />
                ))}
              </div>
            </div>
            <ImagePanel
              src="/f11/service/service-board.png"
              title="服务能力场景图"
              hint="请将 service-board.png 放入 public/f11/service 目录"
            />
          </div>
        </SectionShell>
      </section>

      <section className="relative bg-[#080A0D] px-5 py-24 lg:px-8">
        <SectionShell>
          <SectionTitle
            code="效率模型"
            title="工厂效率模型"
            text="用数据仪表盘呈现单店能力，让工位、时效、报价、客户管理和 SOP 交付成为可管理资产。"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {efficiency.map((item, index) => (
              <DashboardCard key={item.label} index={index} {...item} />
            ))}
          </div>
        </SectionShell>
      </section>

      <section id="partner" className="relative bg-[#10141A] px-5 py-24 lg:px-8">
        <GreenDots className="right-0 bottom-8 h-72 w-72 opacity-25" />
        <SectionShell>
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="reveal">
              <p className="text-sm font-black tracking-[0.28em] text-[#E60012]">
                合作加盟
              </p>
              <h2 className="mt-4 text-4xl font-black leading-tight text-[#F5F7FA] sm:text-5xl">
                开放区域合作，
                <span className="block text-[#FF1E1E]">共建汽车养护超级工厂</span>
              </h2>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#B8C0CC]">
                F11不是一家修理厂，而是一套可复制的汽车养护超级工厂模型。
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-[#E60012] px-8 font-black text-white transition hover:bg-[#ff1e1e]"
                >
                  获取合作方案
                </a>
                <a
                  href="#contact"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-white/16 bg-white/[0.06] px-8 font-black text-white transition hover:border-[#00D66B]/70"
                >
                  预约项目沟通
                </a>
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

      <section id="contact" className="relative bg-[#080A0D] px-5 py-24 lg:px-8">
        <SectionShell>
          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-10">
            <SectionTitle
              code="联系我们"
              title="联系我们"
              text="预约到店、合作咨询、项目沟通，进入 F11 汽车养护超级工厂。"
            />
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <ContactItem label="联系方式" value="13718717577" />
              <ContactItem label="微信服务号" value="f11超级保养工厂" />
              <ContactItem label="地址" value="河北省廊坊市香河县淑阳镇公安局西600米" />
            </div>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a className="cta-button bg-[#E60012]" href="#contact">
                预约到店
              </a>
              <a className="cta-button bg-white/[0.08]" href="#partner">
                加盟咨询
              </a>
              <a className="cta-button bg-white/[0.08]" href="#contact">
                一键导航
              </a>
            </div>
          </div>
        </SectionShell>
      </section>

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
    </main>
  );
}

function HeroBackground() {
  const src = "/f11/storefront.png";

  if (!hasAsset(src)) {
    return (
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#080A0D,#171B22)]">
        <MissingImage
          title="首页首屏门头图缺失"
          hint="请将 storefront.png 放入 public/f11 目录"
        />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt="F11 正前方门头图"
      fill
      priority
      sizes="100vw"
      className="object-cover object-center"
    />
  );
}

function SectionShell({ children }: { children: React.ReactNode }) {
  return <div className="relative mx-auto max-w-7xl">{children}</div>;
}

function SectionTitle({
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

function MetricCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 shadow-[0_18px_48px_rgba(0,0,0,0.22)] backdrop-blur-xl">
      <p className="text-3xl font-black text-[#F5F7FA]">{value}</p>
      <p className="mt-3 text-sm font-bold text-[#B8C0CC]">{label}</p>
    </div>
  );
}

function SpaceCard({
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
      <div className={`relative bg-[#171B22] ${featured ? "aspect-[16/7]" : "aspect-[16/10]"}`}>
        {hasAsset(src) ? (
          <Image
            src={src}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <MissingImage title={`${title}图片缺失`} hint={hint} />
        )}
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(8,10,13,0.82),rgba(8,10,13,0.10)_58%,rgba(8,10,13,0.26))]" />
        <div className="absolute inset-x-0 top-0 h-px bg-[#E60012]" />
        <GreenDots className="right-5 top-5 h-28 w-28 opacity-45" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <p className="text-xs font-black tracking-[0.22em] text-[#00D66B]">{code}</p>
          <h3 className="mt-3 text-2xl font-black text-white sm:text-3xl">{title}</h3>
          <p className="mt-3 text-sm font-semibold text-[#B8C0CC]">{tag}</p>
        </div>
      </div>
    </article>
  );
}

function ServiceCard({
  title,
  text,
  index,
}: {
  title: string;
  text: string;
  index: number;
}) {
  return (
    <article className="glass-card reveal flex min-h-40 flex-col justify-between p-5">
      <div className="flex items-center justify-between">
        <LineIcon index={index} />
        <span className="text-xs font-black tracking-[0.18em] text-[#7D8794]">
          项目 {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="mt-7">
        <h3 className="text-2xl font-black text-[#F5F7FA]">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-[#B8C0CC]">{text}</p>
      </div>
    </article>
  );
}

function DashboardCard({
  value,
  label,
  index,
}: {
  value: string;
  label: string;
  index: number;
}) {
  return (
    <article className="reveal rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.035))] p-6 shadow-[0_20px_64px_rgba(0,0,0,0.25)]">
      <div className="mb-9 flex items-center justify-between">
        <span className="text-xs font-black tracking-[0.22em] text-[#7D8794]">
          数据 {String(index + 1).padStart(2, "0")}
        </span>
        <span className="h-2 w-2 rounded-full bg-[#00D66B] shadow-[0_0_16px_rgba(0,214,107,0.8)]" />
      </div>
      <p className="text-4xl font-black text-[#F5F7FA]">{value}</p>
      <p className="mt-4 text-base font-bold text-[#D9DEE6]">{label}</p>
    </article>
  );
}

function ImagePanel({ src, title, hint }: { src: string; title: string; hint: string }) {
  return (
    <div className="reveal h-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.06] shadow-[0_24px_70px_rgba(0,0,0,0.24)]">
      <div className="relative min-h-[420px] bg-[#171B22] lg:h-full">
        {hasAsset(src) ? (
          <Image
            src={src}
            alt={title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        ) : (
          <MissingImage title={`${title}图片缺失`} hint={hint} />
        )}
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(8,10,13,0.64),transparent_54%)]" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <p className="text-xs font-black tracking-[0.22em] text-[#00D66B]">
            服务场景
          </p>
          <h3 className="mt-3 text-2xl font-black text-white">{title}</h3>
        </div>
      </div>
    </div>
  );
}

function MissingImage({ title, hint }: { title: string; hint: string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
      <div className="rounded-2xl border border-dashed border-white/20 bg-[#10141A]/88 p-6 backdrop-blur-xl">
        <p className="font-black text-[#F5F7FA]">{title}</p>
        <p className="mt-3 text-sm leading-6 text-[#B8C0CC]">{hint}</p>
      </div>
    </div>
  );
}

function ContactItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 shadow-sm">
      <p className="text-sm font-black tracking-[0.22em] text-[#E60012]">{label}</p>
      <p className="mt-5 text-xl font-black text-[#F5F7FA]">{value}</p>
    </div>
  );
}

function LineIcon({ index }: { index: number }) {
  const rotation = (index % 4) * 45;

  return (
    <span className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06]">
      <span
        className="absolute h-px w-7 bg-[#E60012]"
        style={{ transform: `rotate(${rotation}deg)` }}
      />
      <span className="h-2 w-2 rounded-full bg-[#00D66B] shadow-[0_0_16px_rgba(0,214,107,0.8)]" />
    </span>
  );
}

function GreenDots({ className }: { className: string }) {
  return (
    <div
      className={`pointer-events-none absolute bg-[radial-gradient(circle,#00D66B_1px,transparent_2px)] [background-size:18px_18px] ${className}`}
    />
  );
}
