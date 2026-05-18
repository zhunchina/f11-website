import Image from "next/image";
import Link from "next/link";
import { CopyAddressButton } from "../components/copy-address-button";
import { ContactItem, GreenDots, PageFrame, PageHero, SectionShell, SectionTitle } from "../components/site-chrome";
import { contactInfo } from "../data/site";

export default function LocationsPage() {
  return (
    <PageFrame>
      <PageHero
        code="查找门店"
        title="F11 香河超级工厂，"
        redTitle="全国首店已运营"
        text="门店已正式营业，支持汽车养护、维修、钣喷、事故车维修和新能源检测等服务，欢迎电话咨询或预约到店。"
        image="/f11/bg/hero-locations-storefront.jpg"
      />

      <section className="relative bg-[#080A0D] px-5 py-20 lg:px-8 lg:py-24">
        <GreenDots className="right-0 top-16 h-80 w-80 opacity-25" />
        <SectionShell>
          <SectionTitle
            code="首店信息"
            title="F11 香河超级工厂"
            text="全国首店 / 香河开业 / 预约到店"
          />
          <div className="mt-10 overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
            <div className="relative min-h-[260px] bg-[#171B22] sm:min-h-[420px]">
              <Image
                src="/f11/storefront/store-xianghe-renovation.jpg?v=20260518-store"
                alt="F11 香河超级工厂门店实景"
                fill
                unoptimized
                sizes="100vw"
                className="object-cover object-center brightness-[0.95] saturate-[1.03]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(8,10,13,0.66),rgba(8,10,13,0.10)_58%,rgba(8,10,13,0.22))]" />
            </div>
            <div className="p-6 sm:p-10">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <p className="inline-flex rounded-full border border-[#00D66B]/30 bg-[#00D66B]/10 px-4 py-2 text-sm font-black text-[#00D66B]">
                    营业中
                  </p>
                  <h2 className="mt-6 text-3xl font-black text-[#F5F7FA] sm:text-5xl">
                    F11 香河超级工厂
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-[#B8C0CC]">
                    支持电话咨询与预约到店。
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a className="cta-button bg-[#E60012]" href={`tel:${contactInfo.phone}`}>
                    电话咨询
                  </a>
                  <Link className="cta-button bg-white/[0.08]" href="/booking">
                    预约到店
                  </Link>
                  <CopyAddressButton address={contactInfo.address} />
                </div>
              </div>

              <div className="mt-10 grid gap-4 md:grid-cols-3">
                <ContactItem label="地址" value={contactInfo.address} />
                <ContactItem label="电话" value={contactInfo.phone} />
                <ContactItem label="微信服务号" value={contactInfo.wechat} />
              </div>
              <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.055] p-6">
                <p className="text-sm font-black tracking-[0.22em] text-[#E60012]">服务能力</p>
                <p className="mt-4 text-lg font-black leading-8 text-[#F5F7FA]">
                  机油保养 / 轮胎服务 / 洗美贴膜 / 钣喷维修 / 事故车维修 / 新能源检测
                </p>
              </div>
              <div className="mt-4 rounded-2xl border border-[#00D66B]/20 bg-[#00D66B]/[0.06] p-6">
                <p className="text-sm font-black tracking-[0.22em] text-[#00D66B]">新店开业权益</p>
                <p className="mt-4 text-base leading-7 text-[#D9DEE6]">
                  到店可咨询新店专属服务权益，具体活动以门店现场确认为准。
                </p>
              </div>
            </div>
          </div>
        </SectionShell>
      </section>
    </PageFrame>
  );
}
