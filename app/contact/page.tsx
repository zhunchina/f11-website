import Link from "next/link";
import { ContactItem, GreenDots, PageFrame, PageHero, SectionShell, SectionTitle } from "../components/site-chrome";
import { contactInfo } from "../data/site";

export default function ContactPage() {
  return (
    <PageFrame>
      <PageHero
        code="联系我们"
        title="预约、合作、咨询，"
        redTitle="都从这里开始"
        text="进入 F11 汽车养护超级工厂，获取门店服务、合作加盟和项目沟通入口。"
        image="/images/space/storefront.png"
      />

      <section className="relative bg-[#080A0D] px-5 py-20 lg:px-8 lg:py-24">
        <GreenDots className="right-0 top-16 h-80 w-80 opacity-25" />
        <SectionShell>
          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-10">
            <SectionTitle
              code="联系信息"
              title="联系我们"
              text="预约到店、合作咨询、项目沟通，进入 F11 汽车养护超级工厂。"
            />
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <ContactItem label="联系方式" value={contactInfo.phone} />
              <ContactItem label="微信服务号" value={contactInfo.wechat} />
              <ContactItem label="地址" value={contactInfo.address} />
            </div>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a className="cta-button bg-[#E60012]" href={`tel:${contactInfo.phone}`}>
                电话咨询
              </a>
              <Link className="cta-button bg-white/[0.08]" href="/booking">
                预约到店
              </Link>
              <Link className="cta-button bg-white/[0.08]" href="/join">
                加盟咨询
              </Link>
            </div>
          </div>
        </SectionShell>
      </section>

      <section id="wechat" className="relative bg-[#10141A] px-5 py-20 lg:px-8 lg:py-24">
        <SectionShell>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <SectionTitle
              code="微信服务号"
              title="预留二维码位置"
              text="后续可将微信服务号二维码图片放入 public/images/contact，并替换这里的占位区域。"
            />
            <div className="glass-card reveal flex min-h-[360px] items-center justify-center p-6">
              <div className="flex h-64 w-64 items-center justify-center rounded-2xl border border-dashed border-white/22 bg-white/[0.05] text-center">
                <div>
                  <p className="text-xl font-black text-[#F5F7FA]">二维码占位</p>
                  <p className="mt-3 text-sm font-bold leading-6 text-[#B8C0CC]">
                    微信服务号
                    <br />
                    {contactInfo.wechat}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SectionShell>
      </section>
    </PageFrame>
  );
}
