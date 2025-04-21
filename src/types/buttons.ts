import { ButtonHTMLAttributes } from "react";

export interface BaseButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg";
}
