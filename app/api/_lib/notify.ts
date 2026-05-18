import { buildLeadText, MailPayload, requireMailEnv } from "./lead-utils";

type NodemailerModule = {
  createTransport?: (options: unknown) => {
    sendMail: (message: unknown) => Promise<unknown>;
  };
};

function loadNodemailer() {
  try {
    return require("nodemailer") as NodemailerModule;
  } catch {
    throw new Error("邮件服务依赖未安装：nodemailer");
  }
}

export async function sendLeadMail(payload: MailPayload) {
  const env = requireMailEnv();
  const nodemailer = loadNodemailer();
  const createTransport = nodemailer.createTransport;

  if (!createTransport) {
    throw new Error("邮件服务初始化失败");
  }

  const transporter = createTransport({
    host: env.host,
    port: env.port,
    secure: env.port === 465,
    auth: {
      user: env.user,
      pass: env.pass,
    },
  });

  await transporter.sendMail({
    from: env.from,
    to: env.to,
    subject: payload.subject,
    text: buildLeadText(payload),
  });
}

export async function sendWeworkMessage(webhookUrl: string | undefined, payload: MailPayload) {
  if (!webhookUrl) return;

  const text = [`${payload.subject}`, buildLeadText(payload)].join("\n\n");

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      msgtype: "text",
      text: { content: text },
    }),
  });

  if (!response.ok) {
    throw new Error("企业微信推送失败");
  }
}
