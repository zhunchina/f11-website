import Image from "next/image";
import Link from "next/link";
import { StoreGallery } from "../components/content-cards";
import { PageFrame, PageHero, SectionShell, SectionTitle } from "../components/site-chrome";
import { spaces } from "../data/site";

export default function StorePage() {
  return (
    <PageFrame>
      <PageHero
        code="门店形象"
        title="从进店到交车，"
        redTitle="每一步都更清楚"
        text="接待、报价、施工、质检和交车都有清晰空间与流程，让车主放心把车交给门店。"
        image="/f11/storefront/storefront-dark-gray-render.jpg"
      />

      <section className="relative bg-[#080A0D] px-5 py-20 lg:px-8 lg:py-24">
        <SectionShell>
          <SectionTitle
            code="空间图集"
            title="车主看得见的服务空间"
            text="门头、接待区、透明车间和标准工位共同组成清晰的到店动线。"
          />
          <div className="mt-10">
            <StoreGallery />
          </div>
        </SectionShell>
      </section>

      <section className="relative bg-[#10141A] px-5 py-20 lg:px-8 lg:py-24">
        <SectionShell>
          <SectionTitle
            code="识别体系"
            title="清楚的区域，清楚的流程"
            text="接待、等候、施工和交付分区明确，让到店服务更有秩序。"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {spaces.slice(0, 3).map((space, index) => (
              <article key={space.title} className="glass-card reveal p-6">
                <p className="text-xs font-black tracking-[0.22em] text-[#00D66B]">
                  体系 {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-8 text-2xl font-black text-[#F5F7FA]">{space.title}</h3>
                <p className="mt-4 leading-7 text-[#B8C0CC]">{space.tag}</p>
              </article>
            ))}
          </div>
        </SectionShell>
      </section>

      <section className="relative bg-[#080A0D] px-5 py-20 lg:px-8 lg:py-24">
        <SectionShell>
          <div className="grid overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] shadow-[0_24px_80px_rgba(0,0,0,0.28)] lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative min-h-[280px] bg-[#171B22] sm:min-h-[360px]">
              <Image
                src="/f11/storefront/store-xianghe-renovation.jpg?v=20260518-store"
                alt="F11 香河首店门店形象"
                fill
                unoptimized
                sizes="(max-width: 1024px) 100vw, 56vw"
                className="object-cover object-center brightness-[0.96] saturate-[1.03]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(8,10,13,0.52),rgba(8,10,13,0.08)_55%,rgba(8,10,13,0.20))]" />
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-10">
              <p className="text-sm font-black tracking-[0.28em] text-[#00D66B]">营业中 / 形象升级中</p>
              <h2 className="mt-4 text-3xl font-black leading-tight text-[#F5F7FA] sm:text-5xl">
                香河首店已开始运营
              </h2>
              <p className="mt-6 text-base leading-8 text-[#B8C0CC]">
                F11 香河超级工厂已正常承接到店服务，门店形象和服务流程持续升级中。
              </p>
              <p className="mt-4 text-sm leading-6 text-[#7D8794]">
                门店服务信息将根据实际运营情况持续更新。
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link className="cta-button bg-white/[0.08]" href="/locations">
                  查看门店位置
                </Link>
                <Link className="cta-button bg-[#E60012]" href="/booking">
                  预约到店
                </Link>
              </div>
            </div>
          </div>
        </SectionShell>
      </section>
    </PageFrame>
  );
}
