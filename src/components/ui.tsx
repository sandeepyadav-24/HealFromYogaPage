import Link from "next/link";
import type { ReactNode } from "react";
import { SITE } from "@/lib/config";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage";

  const variants = {
    primary: "bg-sage text-white shadow-md shadow-sage/20 hover:bg-sage/90 hover:shadow-lg",
    secondary: "bg-terracotta text-white shadow-md shadow-terracotta/20 hover:bg-terracotta/90",
    outline:
      "border-2 border-sage text-sage bg-transparent hover:bg-sage hover:text-white",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (external || href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={classes}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

export function TextLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`text-sage font-semibold underline-offset-4 hover:underline ${className}`}
    >
      {children}
    </a>
  );
}

export function SectionHeading({
  title,
  subtitle,
  centered = true,
}: {
  title: string;
  subtitle?: string;
  centered?: boolean;
}) {
  return (
    <div className={centered ? "text-center" : ""}>
      <h2 className="font-serif text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-charcoal/75 mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function SiteLogo({ className = "" }: { className?: string }) {
  return (
    <span className={`font-serif text-xl font-semibold text-sage ${className}`}>
      {SITE.name}
    </span>
  );
}
