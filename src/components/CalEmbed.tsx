"use client";

import Cal from "@calcom/embed-react";

type CalEmbedProps = {
  calLink: string;
};

export function CalEmbed({ calLink }: CalEmbedProps) {
  return (
    <Cal
      calLink={calLink}
      style={{ width: "100%", height: "100%", minHeight: "600px", overflow: "scroll" }}
      config={{ layout: "month_view" }}
    />
  );
}
