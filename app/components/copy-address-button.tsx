"use client";

import { useState } from "react";

export function CopyAddressButton({ address }: { address: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      type="button"
      className="cta-button bg-white/[0.08]"
      onClick={async () => {
        await navigator.clipboard.writeText(address);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1800);
      }}
    >
      {copied ? "已复制地址" : "复制地址"}
    </button>
  );
}
