import Image from "next/image";
import { siteConfig } from "@/lib/site";

type ProfilePhotoProps = {
  alt: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  priority?: boolean;
};

const sizeClasses = {
  sm: "h-24 w-24",
  md: "h-32 w-32",
  lg: "h-44 w-44 sm:h-52 sm:w-52",
} as const;

const sizePixels = {
  sm: 96,
  md: 128,
  lg: 208,
} as const;

export function ProfilePhoto({
  alt,
  size = "lg",
  className = "",
  priority = false,
}: ProfilePhotoProps) {
  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-2xl border border-border bg-surface shadow-[var(--shadow)] ring-4 ring-accent-muted ${sizeClasses[size]} ${className}`}
    >
      <Image
        src={siteConfig.profilePhoto}
        alt={alt}
        width={sizePixels[size]}
        height={sizePixels[size]}
        className="h-full w-full object-cover"
        priority={priority}
      />
    </div>
  );
}
