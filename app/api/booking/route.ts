import { NextResponse } from "next/server";
import { getString, isValidPhone, normalizePhone, validateRequired } from "../_lib/lead-utils";
import { sendLeadMail, sendWeworkMessage } from "../_lib/notify";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const payload = {
      name: getString(body.name, 60),
      phone: normalizePhone(body.phone),
      car: getString(body.car, 100),
      service: getString(body.service, 80),
      time: getString(body.time, 80),
      note: getString(body.note, 500),
    };

    const missing = validateRequired(payload, ["name", "phone", "car", "service", "time"]);

    if (missing.length > 0) {
      return NextResponse.json({ message: "请填写完整预约信息" }, { status: 400 });
    }

    if (!isValidPhone(payload.phone)) {
      return NextResponse.json({ message: "请输入有效的 11 位手机号" }, { status: 400 });
    }

    const mailPayload = {
      subject: "【F11官网预约】新的到店预约",
      source: "/booking",
      fields: [
        { label: "姓名", value: payload.name },
        { label: "手机号", value: payload.phone },
        { label: "车型", value: payload.car },
        { label: "服务项目", value: payload.service },
        { label: "预约时间", value: payload.time },
        { label: "备注", value: payload.note },
      ],
    };

    await sendLeadMail(mailPayload);
    await sendWeworkMessage(process.env.WEWORK_BOOKING_WEBHOOK_URL, mailPayload);

    return NextResponse.json({ message: "预约信息已提交" });
  } catch (error) {
    const message = error instanceof Error ? error.message : "提交失败";
    console.error("[booking] lead submit failed:", message);

    return NextResponse.json(
      {
        message: message.includes("环境变量缺失")
          ? "邮件通知尚未配置完整，请直接拨打 13146385035 咨询。"
          : "提交失败，请稍后重试，或直接拨打 13146385035 咨询。",
      },
      { status: 500 },
    );
  }
}
