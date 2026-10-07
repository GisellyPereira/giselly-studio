"use server";
import { cookies } from "next/headers";
export async function setLocale(locale: "pt" | "en") {
  if (locale !== "pt" && locale !== "en") return;
  (await cookies()).set("portfolio-locale", locale, { path: "/", maxAge: 60 * 60 * 24 * 365, sameSite: "lax", httpOnly: true, secure: process.env.NODE_ENV === "production" });
}
