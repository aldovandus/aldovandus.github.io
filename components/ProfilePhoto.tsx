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
  lg: "h-48 w-48 sm:h-56 sm:w-56",
} as const;

const sizePixels = {
  sm: 96,
  md: 128,
  lg: 224,
} as const;

export function ProfilePhoto({
  alt,
  size = "lg",
  className = "",
  priority = false,
}: ProfilePhotoProps) {
  return (
    <div
      className={`relative shrink-0 overflow-hidden border border-border bg-surface ${sizeClasses[size]} ${className}`}
    >
      <Image
        src={siteConfig.profilePhoto}
        alt={alt}
        width={sizePixels[size]}
        height={sizePixels[size]}
        className="h-full w-full object-cover object-[center_18%]"
        priority={priority}
      />
      <span
        aria-hidden
        className="absolute bottom-0 left-0 h-0.5 w-full bg-accent"
      />
    </div>
  );
}
