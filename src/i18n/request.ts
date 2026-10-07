import { cookies } from "next/headers";
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  const requested = (await cookies()).get("portfolio-locale")?.value;
  const locale = requested === "en" ? "en" : "pt";
  return { locale, messages: (await import(`./messages/${locale}.json`)).default };
});
