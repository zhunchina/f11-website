"use client";

import { useState } from "react";

const inputClass =
  "mt-2 h-12 w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 text-base font-semibold text-white outline-none transition placeholder:text-[#7D8794] focus:border-[#00D66B]/70";

const textareaClass =
  "mt-2 min-h-32 w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-base font-semibold leading-7 text-white outline-none transition placeholder:text-[#7D8794] focus:border-[#00D66B]/70";

function FieldLabel({ children }: { children: React.ReactNode }) {
  return <label className="block text-sm font-black tracking-[0.12em] text-[#D9DEE6]">{children}</label>;
}

type SubmitState = "idle" | "sending" | "booking-success" | "join-success" | "error";

const submitMessages: Record<Exclude<SubmitState, "idle" | "sending">, string> = {
  "booking-success": "预约信息已提交，工作人员将尽快通过电话或微信与你确认到店时间。",
  "join-success": "合作意向已提交，项目负责人将根据城市和合作类型与你初步沟通。",
  error: "提交失败，请稍后重试，或直接拨打 13146385035 咨询。",
};

function SubmitNote({ state }: { state: SubmitState }) {
  if (state === "idle" || state === "sending") return null;

  return (
    <p
      className={`rounded-xl border px-4 py-3 text-sm font-bold text-[#D9DEE6] ${
        state === "error" ? "border-[#E60012]/35 bg-[#E60012]/10" : "border-[#00D66B]/30 bg-[#00D66B]/10"
      }`}
    >
      {submitMessages[state]}
    </p>
  );
}

const phoneRegExp = /^1[3-9]\d{9}$/;

function normalizePhone(value: string) {
  return value.trim().replace(/[\s-]+/g, "");
}

function validatePhone(form: HTMLFormElement) {
  const phoneInput = form.elements.namedItem("phone");

  if (!(phoneInput instanceof HTMLInputElement)) {
    return false;
  }

  const normalizedPhone = normalizePhone(phoneInput.value);
  const isValid = phoneRegExp.test(normalizedPhone);

  phoneInput.setCustomValidity(isValid ? "" : "请输入有效的 11 位手机号");

  if (!isValid) {
    phoneInput.reportValidity();
    return false;
  }

  phoneInput.value = normalizedPhone;
  return true;
}

export function BookingForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  return (
    <form
      className="glass-card grid gap-5 p-6 sm:p-8"
      onSubmit={async (event) => {
        event.preventDefault();
        const form = event.currentTarget;

        if (validatePhone(form) && form.reportValidity()) {
          setSubmitState("sending");

          const formData = new FormData(form);

          try {
            const response = await fetch("/api/booking", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                name: formData.get("name"),
                phone: formData.get("phone"),
                car: formData.get("car"),
                service: formData.get("service"),
                time: formData.get("time"),
                note: formData.get("note"),
              }),
            });

            setSubmitState(response.ok ? "booking-success" : "error");
          } catch {
            setSubmitState("error");
          }
        }
      }}
    >
      <div className="grid gap-5 md:grid-cols-2">
        <FieldLabel>
          姓名
          <input className={inputClass} name="name" placeholder="请输入姓名" required minLength={2} />
        </FieldLabel>
        <FieldLabel>
          手机号
          <input
            className={inputClass}
            name="phone"
            type="tel"
            placeholder="请输入手机号"
            required
            inputMode="tel"
            onInput={(event) => event.currentTarget.setCustomValidity("")}
          />
        </FieldLabel>
        <FieldLabel>
          车型
          <input className={inputClass} name="car" placeholder="例如：特斯拉 Model Y / 宝马 3 系" required />
        </FieldLabel>
        <FieldLabel>
          服务项目
          <select className={inputClass} name="service" required defaultValue="">
            <option value="" disabled>
              请选择服务项目
            </option>
            <option>到店检查 / 服务咨询</option>
            <option>机油保养</option>
            <option>轮胎服务</option>
            <option>洗美贴膜</option>
            <option>制动系统</option>
            <option>空调养护</option>
            <option>新能源检测</option>
            <option>钣喷维修</option>
            <option>事故车维修</option>
            <option>其他</option>
          </select>
        </FieldLabel>
        <FieldLabel>
          预约时间
          <input className={inputClass} name="time" type="datetime-local" required />
        </FieldLabel>
      </div>
      <FieldLabel>
        备注
        <textarea className={textareaClass} name="note" placeholder="可填写车辆问题、到店需求或其他说明" maxLength={240} />
      </FieldLabel>
      <SubmitNote state={submitState} />
      <button
        type="submit"
        disabled={submitState === "sending"}
        className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[#E60012] px-8 text-base font-black text-white shadow-[0_0_32px_rgba(230,0,18,0.34)] transition hover:bg-[#ff1e1e] sm:w-fit"
      >
        {submitState === "sending" ? "提交中..." : "提交预约信息"}
      </button>
    </form>
  );
}

export function JoinForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  return (
    <form
      className="glass-card grid gap-5 p-6 sm:p-8"
      onSubmit={async (event) => {
        event.preventDefault();
        const form = event.currentTarget;

        if (validatePhone(form) && form.reportValidity()) {
          setSubmitState("sending");

          const formData = new FormData(form);

          try {
            const response = await fetch("/api/join", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                name: formData.get("name"),
                phone: formData.get("phone"),
                city: formData.get("city"),
                type: formData.get("type"),
                note: formData.get("note"),
              }),
            });

            setSubmitState(response.ok ? "join-success" : "error");
          } catch {
            setSubmitState("error");
          }
        }
      }}
    >
      <div className="grid gap-5 md:grid-cols-2">
        <FieldLabel>
          姓名
          <input className={inputClass} name="name" placeholder="请输入姓名" required minLength={2} />
        </FieldLabel>
        <FieldLabel>
          电话
          <input
            className={inputClass}
            name="phone"
            type="tel"
            placeholder="请输入联系电话"
            required
            inputMode="tel"
            onInput={(event) => event.currentTarget.setCustomValidity("")}
          />
        </FieldLabel>
        <FieldLabel>
          所在城市
          <input className={inputClass} name="city" placeholder="例如：廊坊 / 北京 / 石家庄" required />
        </FieldLabel>
        <FieldLabel>
          合作类型
          <select className={inputClass} name="type" required defaultValue="">
            <option value="" disabled>
              请选择合作类型
            </option>
            <option>区域合伙人</option>
            <option>产业投资人</option>
            <option>供应链伙伴</option>
            <option>本地流量合作方</option>
          </select>
        </FieldLabel>
      </div>
      <FieldLabel>
        备注
        <textarea className={textareaClass} name="note" placeholder="可填写计划城市、资源情况或合作想法" maxLength={300} />
      </FieldLabel>
      <SubmitNote state={submitState} />
      <button
        type="submit"
        disabled={submitState === "sending"}
        className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[#E60012] px-8 text-base font-black text-white shadow-[0_0_32px_rgba(230,0,18,0.34)] transition hover:bg-[#ff1e1e] sm:w-fit"
      >
        {submitState === "sending" ? "提交中..." : "提交合作意向"}
      </button>
    </form>
  );
}
