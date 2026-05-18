const phoneRegExp = /^1[3-9]\d{9}$/;

export type LeadField = {
  label: string;
  value: string;
};

export type MailPayload = {
  subject: string;
  source: string;
  fields: LeadField[];
};

export function normalizePhone(value: unknown) {
  return String(value ?? "").trim().replace(/[\s-]+/g, "");
}

export function isValidPhone(value: string) {
  return phoneRegExp.test(value);
}

export function getString(input: unknown, maxLength = 500) {
  return String(input ?? "").trim().slice(0, maxLength);
}

export function validateRequired(payload: Record<string, string>, keys: string[]) {
  return keys.filter((key) => !payload[key]);
}

export function buildLeadText({ source, fields }: MailPayload) {
  const submittedAt = new Date().toLocaleString("zh-CN", { timeZone: "Asia/Shanghai" });

  return [
    ...fields.map((field) => `${field.label}：${field.value || "未填写"}`),
    `提交时间：${submittedAt}`,
    `来源页面：${source}`,
  ].join("\n");
}

export function requireMailEnv() {
  const requiredKeys = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS", "MAIL_FROM", "MAIL_TO"] as const;
  const missing = requiredKeys.filter((key) => !process.env[key]);

  if (missing.length > 0) {
    throw new Error(`邮件环境变量缺失：${missing.join(", ")}`);
  }

  return {
    host: process.env.SMTP_HOST as string,
    port: Number(process.env.SMTP_PORT),
    user: process.env.SMTP_USER as string,
    pass: process.env.SMTP_PASS as string,
    from: process.env.MAIL_FROM as string,
    to: process.env.MAIL_TO as string,
  };
}
