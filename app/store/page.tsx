import { StoreGallery } from "../components/content-cards";
import { GreenDots, PageFrame, PageHero, SectionShell, SectionTitle } from "../components/site-chrome";
import { spaces } from "../data/site";

export default function StorePage() {
  return (
    <PageFrame>
      <PageHero
        code="门店形象"
        title="科技银灰门店，"
        redTitle="建立第一眼信任"
        text="F11 以银灰金属、红色品牌识别、透明玻璃界面和绿色点阵细节，形成连锁服务中心的高端形象体系。"
        image="/images/space/storefront.png"
      />

      <section className="relative bg-[#080A0D] px-5 py-20 lg:px-8 lg:py-24">
        <GreenDots className="right-0 top-16 h-80 w-80 opacity-25" />
        <SectionShell>
          <SectionTitle
            code="空间图集"
            title="门店空间系统"
            text="从外立面、接待中心、透明车间到导视和工服，保持统一识别与专业质感。"
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
            title="让门店像工厂一样被管理"
            text="门头、导视、工位、接待和人员形象共同构成品牌资产，也让车主更容易理解服务流程。"
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
    </PageFrame>
  );
}
