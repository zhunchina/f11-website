import { JoinForm } from "../components/forms";
import { GreenDots, PageFrame, PageHero, SectionShell, SectionTitle } from "../components/site-chrome";
import { partners } from "../data/site";

export default function JoinPage() {
  return (
    <PageFrame>
      <PageHero
        code="招商合作"
        title="开放区域合作，"
        redTitle="共建超级工厂"
        text="F11 面向区域合伙人、产业投资人、供应链伙伴和本地流量合作方，开放标准门店与运营模型。"
        image="/images/space/workshop-main.png"
      />

      <section className="relative bg-[#10141A] px-5 py-20 lg:px-8 lg:py-24">
        <GreenDots className="right-0 top-20 h-80 w-80 opacity-25" />
        <SectionShell>
          <SectionTitle
            code="合作方向"
            title="四类合作入口"
            text="围绕区域门店建设、资本协同、供应链稳定和本地车主流量，共同放大超级工厂模型。"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
        </SectionShell>
      </section>

      <section className="relative bg-[#080A0D] px-5 py-20 lg:px-8 lg:py-24">
        <SectionShell>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <SectionTitle
              code="合作表单"
              title="留下合作意向"
              text="当前表单仅做前端展示与基础校验，后续可接入 CRM、企微或门店线索系统。"
            />
            <JoinForm />
          </div>
        </SectionShell>
      </section>
    </PageFrame>
  );
}
