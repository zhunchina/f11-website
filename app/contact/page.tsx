import Image from "next/image";
import Link from "next/link";
import { ContactItem, PageFrame, PageHero, SectionShell, SectionTitle } from "../components/site-chrome";
import { contactInfo } from "../data/site";

export default function ContactPage() {
  return (
    <PageFrame>
      <PageHero
        code="联系我们"
        title="联系门店"
        text="电话咨询、微信服务号、到店预约和地址信息，都可以在这里找到。"
        image="/f11/storefront/storefront-dark-gray-render.jpg"
      />

      <section className="relative bg-[#080A0D] px-5 py-20 lg:px-8 lg:py-24">
        <SectionShell>
          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-10">
            <SectionTitle
              code="联系信息"
              title="门店服务咨询"
              text="F11 香河超级工厂已开始运营，车主可通过电话、微信服务号或预约入口联系门店。"
            />
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <ContactItem label="电话咨询" value={contactInfo.phone} />
              <ContactItem label="微信服务号" value={contactInfo.wechat} />
              <ContactItem label="门店地址" value={contactInfo.address} />
            </div>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a className="cta-button bg-[#E60012]" href={`tel:${contactInfo.phone}`}>
                电话咨询
              </a>
              <Link className="cta-button bg-white/[0.08]" href="/booking">
                预约到店
              </Link>
              <Link className="cta-button bg-white/[0.08]" href="/locations">
                查找门店
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
              title="微信服务号"
              text="扫码关注 F11 超级保养工厂，可用于预约咨询、门店动态和售后沟通。"
            />
            <div className="glass-card reveal p-6 sm:p-8">
              <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-center">
                <div className="rounded-2xl bg-white p-4 shadow-[0_24px_70px_rgba(0,0,0,0.24)]">
                  <Image
                    src="/f11/qrcode/wechat-service-qrcode.png"
                    alt="F11超级保养工厂微信服务号二维码"
                    width={210}
                    height={210}
                    unoptimized
                    className="h-52 w-52 object-contain"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-2xl font-black text-[#F5F7FA]">{contactInfo.wechat}</p>
                  <p className="mt-4 max-w-sm text-base leading-8 text-[#B8C0CC]">
                    扫码关注 F11 超级保养工厂，获取预约咨询、门店动态和售后沟通入口。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SectionShell>
      </section>

      <section className="relative bg-[#080A0D] px-5 py-16 lg:px-8 lg:py-20">
        <SectionShell>
          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-6 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-8">
            <p className="max-w-3xl text-base leading-8 text-[#B8C0CC]">
              加盟合作、供应链合作、本地流量合作等，可电话沟通，或前往招商合作页面提交意向。
            </p>
            <Link className="cta-button mt-6 bg-white/[0.08] sm:mt-0" href="/join">
              招商合作
            </Link>
          </div>
        </SectionShell>
      </section>
    </PageFrame>
  );
}
