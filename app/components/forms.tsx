"use client";

import { useState } from "react";

const inputClass =
  "mt-2 h-12 w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 text-base font-semibold text-white outline-none transition placeholder:text-[#7D8794] focus:border-[#00D66B]/70";

const textareaClass =
  "mt-2 min-h-32 w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-base font-semibold leading-7 text-white outline-none transition placeholder:text-[#7D8794] focus:border-[#00D66B]/70";

function FieldLabel({ children }: { children: React.ReactNode }) {
  return <label className="block text-sm font-black tracking-[0.12em] text-[#D9DEE6]">{children}</label>;
}

function SubmitNote({ submitted }: { submitted: boolean }) {
  if (!submitted) return null;

  return (
    <p className="rounded-xl border border-[#00D66B]/30 bg-[#00D66B]/10 px-4 py-3 text-sm font-bold text-[#D9DEE6]">
      已完成前端校验。当前表单暂未接入后端，信息不会提交到服务器。
    </p>
  );
}

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="glass-card grid gap-5 p-6 sm:p-8"
      onSubmit={(event) => {
        event.preventDefault();
        if (event.currentTarget.reportValidity()) {
          setSubmitted(true);
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
            placeholder="请输入手机号"
            required
            pattern="^1[3-9]\\d{9}$"
            inputMode="tel"
            title="请输入 11 位中国大陆手机号"
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
            <option>轮胎服务</option>
            <option>机油保养</option>
            <option>洗美贴膜</option>
            <option>新能源检测</option>
            <option>新能源电池检测</option>
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
      <SubmitNote submitted={submitted} />
      <button
        type="submit"
        className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[#E60012] px-8 text-base font-black text-white shadow-[0_0_32px_rgba(230,0,18,0.34)] transition hover:bg-[#ff1e1e] sm:w-fit"
      >
        提交预约
      </button>
    </form>
  );
}

export function JoinForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="glass-card grid gap-5 p-6 sm:p-8"
      onSubmit={(event) => {
        event.preventDefault();
        if (event.currentTarget.reportValidity()) {
          setSubmitted(true);
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
            placeholder="请输入联系电话"
            required
            pattern="^1[3-9]\\d{9}$"
            inputMode="tel"
            title="请输入 11 位中国大陆手机号"
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
      <SubmitNote submitted={submitted} />
      <button
        type="submit"
        className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[#E60012] px-8 text-base font-black text-white shadow-[0_0_32px_rgba(230,0,18,0.34)] transition hover:bg-[#ff1e1e] sm:w-fit"
      >
        提交合作意向
      </button>
    </form>
  );
}
