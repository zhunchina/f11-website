import Image from "next/image";
import Link from "next/link";
import { CopyAddressButton } from "../components/copy-address-button";
import { ContactItem, PageFrame, PageHero, SectionShell, SectionTitle } from "../components/site-chrome";
import { contactInfo } from "../data/site";

const locationPhotos = [
  {
    src: "/f11/location/location-xianghe-storefront-real.jpg?v=20260518-storefront-real",
    alt: "F11 香河首店门头实景",
    label: "门头实景",
  },
  {
    src: "/f11/location/location-xianghe-pylon.jpg",
    alt: "F11 香河首店立柱实景",
    label: "导视立柱",
  },
  {
    src: "/f11/location/location-xianghe-reception.jpg",
    alt: "F11 香河首店接待区实景",
    label: "接待区",
  },
  {
    src: "/f11/location/location-xianghe-lounge.jpg",
    alt: "F11 香河首店客休区实景",
    label: "客休区",
  },
  {
    src: "/f11/location/location-xianghe-guide-sign.jpg",
    alt: "F11 香河首店导视系统实景",
    label: "导视系统",
  },
];

export default function LocationsPage() {
  const [mainPhoto, ...detailPhotos] = locationPhotos;

  return (
    <PageFrame>
      <PageHero
        code="全国首店 / 香河城区 / 预约到店"
        title="F11 养护超级工厂，"
        redTitle="全国首店已上线"
        text="F11 香河超级工厂&新欧维已正式营业，支持汽车养护、维修、钣喷、事故车维修和新能源检测等服务，欢迎预约到店体验。"
        image="/f11/bg/hero-locations-storefront.jpg"
      />

      <section className="relative bg-[#080A0D] px-5 py-20 lg:px-8 lg:py-24">
        <SectionShell>
          <SectionTitle
            code="真实门店"
            title="门店实景展示"
            text="首店已正常营业，门头、接待区、客休区和导视系统持续完善升级中。"
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-[1.18fr_0.82fr]">
            <div className="relative min-h-[310px] overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#171B22] sm:min-h-[430px]">
              <Image
                src={mainPhoto.src}
                alt={mainPhoto.alt}
                fill
                unoptimized
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover object-center brightness-[0.96] saturate-[1.03]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(8,10,13,0.58),rgba(8,10,13,0.02)_55%,rgba(8,10,13,0.12))]" />
              <p className="absolute bottom-5 left-5 rounded-full border border-white/15 bg-black/45 px-4 py-2 text-sm font-black text-white backdrop-blur">
                {mainPhoto.label}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {detailPhotos.map((photo) => (
                <div
                  className="relative min-h-[150px] overflow-hidden rounded-[1.1rem] border border-white/10 bg-[#171B22] sm:min-h-[205px]"
                  key={photo.src}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    unoptimized
                    sizes="(min-width: 1024px) 21vw, 50vw"
                    className="object-cover object-center brightness-[0.96] saturate-[1.03]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(8,10,13,0.52),rgba(8,10,13,0.02)_60%)]" />
                  <p className="absolute bottom-3 left-3 rounded-full border border-white/15 bg-black/45 px-3 py-1.5 text-xs font-black text-white backdrop-blur">
                    {photo.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)] sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <p className="inline-flex rounded-full border border-[#00D66B]/30 bg-[#00D66B]/10 px-4 py-2 text-sm font-black text-[#00D66B]">
                  营业中
                </p>
                <h2 className="mt-5 text-2xl font-black text-[#F5F7FA] sm:text-4xl">
                  F11 香河超级工厂
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-[#B8C0CC]">
                  全国首店已正式运营，支持电话咨询与预约到店。
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link className="cta-button bg-[#E60012]" href="/booking">
                  立即预约
                </Link>
                <a className="cta-button bg-white/[0.08]" href={`tel:${contactInfo.phone}`}>
                  电话咨询
                </a>
                <CopyAddressButton address={contactInfo.address} />
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
                <ContactItem label="地址" value={contactInfo.address} />
                <ContactItem label="电话" value={contactInfo.phone} />
                <ContactItem label="微信服务号" value={contactInfo.wechat} />
            </div>

            <div className="mt-4 grid gap-4 lg:grid-cols-[1.18fr_0.82fr]">
              <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-6">
                <p className="text-sm font-black tracking-[0.22em] text-[#E60012]">服务能力</p>
                <p className="mt-4 text-base font-black leading-8 text-[#F5F7FA] sm:text-lg">
                  机油保养 / 轮胎服务 / 洗美贴膜 / 钣喷维修 / 事故车维修 / 新能源检测
                </p>
              </div>
              <div className="rounded-2xl border border-[#00D66B]/20 bg-[#00D66B]/[0.06] p-6">
                <p className="text-sm font-black tracking-[0.22em] text-[#00D66B]">官网预约新客权益</p>
                <p className="mt-4 text-base leading-7 text-[#D9DEE6]">
                  线上提交预约并首次到店，可免费领取一次新客专属权益，具体内容以门店确认为准。
                </p>
              </div>
            </div>
          </div>
        </SectionShell>
      </section>
    </PageFrame>
  );
}
