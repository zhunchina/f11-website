import { JoinForm } from "../components/forms";
import { PageFrame, PageHero, SectionShell, SectionTitle } from "../components/site-chrome";

const joinOffers = [
  { title: "品牌形象标准", text: "统一门头、立柱、接待区和车间视觉。" },
  { title: "服务项目体系", text: "围绕高频养护项目，建立清晰服务菜单。" },
  { title: "门店运营流程", text: "覆盖接车、报价、施工、质检、交车。" },
  { title: "供应链协同", text: "围绕高频品类，优化采购与履约效率。" },
  { title: "本地引流方法", text: "结合洗车、保养、短视频和私域，持续获取车主。" },
];

const joinSteps = [
  { title: "初步沟通", text: "了解城市、资源和合作意向。" },
  { title: "城市评估", text: "评估位置、客群、竞争和投入条件。" },
  { title: "方案确认", text: "确认合作模式、建设标准和推进节奏。" },
  { title: "门店落地", text: "推进空间建设、人员培训、流程导入和运营准备。" },
];

export default function JoinPage() {
  return (
    <PageFrame>
      <PageHero
        code="招商合作"
        title="开放区域合作，"
        redTitle="共建超级工厂"
        text="F11 面向区域合伙人、产业投资人、供应链伙伴和本地流量合作方，开放门店标准、服务体系和运营方法，共同建设更高效的汽车服务中心。"
        image="/f11/bg/hero-join-workshop-dark.jpg"
      />

      <section className="relative bg-[#10141A] px-5 py-20 lg:px-8 lg:py-24">
        <SectionShell>
          <SectionTitle
            code="合作支持"
            title="F11 提供什么"
            text="F11 香河超级工厂已进入运营阶段，门店形象和服务流程将持续优化。"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {joinOffers.map((item, index) => (
              <article key={item.title} className="glass-card reveal p-6">
                <p className="text-xs font-black tracking-[0.22em] text-[#00D66B]">
                  支持 {String(index + 1).padStart(2, "0")}
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
          <SectionTitle
            code="合作流程"
            title="从沟通到落地"
            text="先判断城市和资源是否匹配，再确认模式、标准和推进节奏。"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {joinSteps.map((item, index) => (
              <article key={item.title} className="glass-card reveal p-6">
                <p className="text-xs font-black tracking-[0.22em] text-[#E60012]">
                  {String(index + 1).padStart(2, "0")}
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
              title="获取合作方案"
              text="留下城市、资源和合作意向，便于后续预约项目沟通。"
            />
            <JoinForm />
          </div>
        </SectionShell>
      </section>
    </PageFrame>
  );
}
