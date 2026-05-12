import { BookingForm } from "../components/forms";
import { PageFrame, PageHero, SectionShell, SectionTitle } from "../components/site-chrome";

export default function BookingPage() {
  return (
    <PageFrame>
      <PageHero
        code="预约到店"
        title="提前预约，"
        redTitle="到店更高效"
        text="填写车辆与服务需求，门店顾问可提前准备服务项目。当前预约表单暂不接后端，仅展示前端校验流程。"
        image="/images/space/reception-main.png"
      />

      <section className="relative bg-[#080A0D] px-5 py-20 lg:px-8 lg:py-24">
        <SectionShell>
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <SectionTitle
              code="预约表单"
              title="填写到店信息"
              text="姓名、手机号、车型、服务项目、预约时间和备注会在浏览器侧完成基础校验。"
            />
            <BookingForm />
          </div>
        </SectionShell>
      </section>
    </PageFrame>
  );
}
