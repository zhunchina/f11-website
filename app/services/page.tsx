import { ServiceVisualCard } from "../components/content-cards";
import { GreenDots, PageFrame, PageHero, SectionShell, SectionTitle } from "../components/site-chrome";
import { services } from "../data/site";

export default function ServicesPage() {
  return (
    <PageFrame>
      <PageHero
        code="标准化工位 / 透明报价 / 综合维修 / 保险维修沟通"
        title="一站式汽车服务中心"
        text="覆盖保养、轮胎、洗美、钣喷修复、新能源检测等到店服务，满足日常养护与综合维修需求。"
        image="/f11/bg/hero-services-clean-workshop.jpg"
        compact
      />

      <section className="relative bg-[#10141A] px-5 py-20 lg:px-8 lg:py-24">
        <GreenDots className="left-0 top-12 h-72 w-72 opacity-25" />
        <SectionShell>
          <SectionTitle
            code="核心项目"
            title="从日常养护到事故维修"
            text="围绕车主高频养护、外观修复、钣喷维修和事故车承接，提供更完整的到店服务入口。"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {services.map((service, index) => (
              <ServiceVisualCard key={service.title} index={index} {...service} />
            ))}
          </div>
        </SectionShell>
      </section>

      <section className="relative bg-[#080A0D] px-5 py-20 lg:px-8 lg:py-24">
        <SectionShell>
          <SectionTitle
            code="交付标准"
            title="透明 · 高效 · 保真"
            text="F11 香河超级工厂已开始运营，建议到店前先预约，便于门店提前了解车辆、维修范围和服务需求。"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "透明报价", text: "服务项、维修范围和费用提前沟通。" },
              { title: "标准施工", text: "按项目流程执行，减少随意施工。" },
              { title: "记录可查", text: "服务信息沉淀，方便后续跟进。" },
              { title: "维修评估清楚", text: "事故车和钣喷项目先评估，再确认维修方案。" },
            ].map((item, index) => (
              <article key={item.title} className="glass-card reveal p-6">
                <p className="text-xs font-black tracking-[0.22em] text-[#00D66B]">
                  标准 {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-8 text-2xl font-black text-[#F5F7FA]">{item.title}</h3>
                <p className="mt-4 leading-7 text-[#B8C0CC]">{item.text}</p>
              </article>
            ))}
          </div>
        </SectionShell>
      </section>
    </PageFrame>
  );
}
