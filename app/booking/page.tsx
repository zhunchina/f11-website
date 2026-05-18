import { BookingForm } from "../components/forms";
import { PageFrame, PageHero, SectionShell, SectionTitle } from "../components/site-chrome";

export default function BookingPage() {
  return (
    <PageFrame>
      <PageHero
        code="预约到店"
        title="提前预约，"
        redTitle="到店少等待"
        text="填写车辆和服务需求，门店顾问会提前了解情况，减少到店沟通时间。"
        image="/f11/interior/interior-reception-dark-gray-render.jpg"
      />

      <section className="relative bg-[#080A0D] px-5 py-20 lg:px-8 lg:py-24">
        <SectionShell>
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <SectionTitle
              code="预约表单"
              title="填写到店信息"
              text="F11 香河超级工厂已正常营业，提交后工作人员将通过电话或微信与你确认到店时间。"
            />
            <div>
              <BookingForm />
              <p className="mt-4 text-sm leading-6 text-[#7D8794]">
                提交即表示你同意我们通过电话或微信与你联系，仅用于本次预约与服务沟通。
              </p>
            </div>
          </div>
        </SectionShell>
      </section>
    </PageFrame>
  );
}
