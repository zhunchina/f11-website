import { BatteryModule, ServiceVisualCard } from "../components/content-cards";
import { GreenDots, PageFrame, PageHero, SectionShell, SectionTitle } from "../components/site-chrome";
import { services } from "../data/site";

export default function ServicesPage() {
  return (
    <PageFrame>
      <PageHero
        code="服务项目"
        title="标准化服务，"
        redTitle="覆盖燃油与新能源"
        text="F11 用透明报价、高效流程和标准施工，把高频汽车养护项目做成可复制、可管理、可交付的门店能力。"
        image="/images/service/service-board.png"
      />

      <section className="relative bg-[#10141A] px-5 py-20 lg:px-8 lg:py-24">
        <GreenDots className="left-0 top-12 h-72 w-72 opacity-25" />
        <SectionShell>
          <SectionTitle
            code="核心项目"
            title="服务项目矩阵"
            text="围绕车主高频需求设计项目入口，同时把新能源电池检测作为下一阶段核心增长能力。"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {services.map((service, index) => (
              <ServiceVisualCard key={service.title} index={index} {...service} />
            ))}
          </div>
          <BatteryModule />
        </SectionShell>
      </section>

      <section className="relative bg-[#080A0D] px-5 py-20 lg:px-8 lg:py-24">
        <SectionShell>
          <SectionTitle
            code="交付标准"
            title="透明 · 高效 · 保真"
            text="每个项目都围绕检测、报价、施工、质检和客户记录形成闭环，让门店交付可感知、可复盘、可复制。"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {["检测记录清晰", "报价过程透明", "施工标准统一"].map((item, index) => (
              <article key={item} className="glass-card reveal p-6">
                <p className="text-xs font-black tracking-[0.22em] text-[#00D66B]">
                  标准 {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-8 text-2xl font-black text-[#F5F7FA]">{item}</h3>
              </article>
            ))}
          </div>
        </SectionShell>
      </section>
    </PageFrame>
  );
}
