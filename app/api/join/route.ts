import { NextResponse } from "next/server";
import { getString, isValidPhone, normalizePhone, validateRequired } from "../_lib/lead-utils";
import { sendLeadMail, sendWeworkMessage } from "../_lib/notify";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const payload = {
      name: getString(body.name, 60),
      phone: normalizePhone(body.phone),
      city: getString(body.city, 80),
      type: getString(body.type, 80),
      note: getString(body.note, 500),
    };

    const missing = validateRequired(payload, ["name", "phone", "city", "type"]);

    if (missing.length > 0) {
      return NextResponse.json({ message: "请填写完整合作信息" }, { status: 400 });
    }

    if (!isValidPhone(payload.phone)) {
      return NextResponse.json({ message: "请输入有效的 11 位手机号" }, { status: 400 });
    }

    const mailPayload = {
      subject: "【F11官网合作咨询】新的合作意向",
      source: "/join",
      fields: [
        { label: "姓名", value: payload.name },
        { label: "电话", value: payload.phone },
        { label: "所在城市", value: payload.city },
        { label: "合作类型", value: payload.type },
        { label: "备注", value: payload.note },
      ],
    };

    await sendLeadMail(mailPayload);
    await sendWeworkMessage(process.env.WEWORK_JOIN_WEBHOOK_URL, mailPayload);

    return NextResponse.json({ message: "合作意向已提交" });
  } catch (error) {
    const message = error instanceof Error ? error.message : "提交失败";
    console.error("[join] lead submit failed:", message);

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
