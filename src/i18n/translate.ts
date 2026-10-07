import keys from "./keys.json";

export type Translate = (source: string, values?: Record<string, string | number>) => string;
const normalize = (value: string) => value.trim().replace(/\s+/g, " ");
const registry: Record<string, string> = keys;
const templates = Object.entries(registry).filter(([source]) => source.includes("{value"));

// Translate only reviewed, authored copy. IDs, URLs, brands and official titles stay intact.
export function createTranslator(read: (key: string) => string, locale: string): Translate {
  return (source, values = {}) => {
    const normalized = normalize(source);
    let key = registry[normalized];
    if (!key) {
      for (const [template, templateKey] of templates) {
        const names: string[] = [];
        const expression = template.split(/(\{value\d+\})/).map((part) => {
          if (/^\{value\d+\}$/.test(part)) { names.push(part.slice(1, -1)); return "(.+?)"; }
          return part.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        }).join("");
        const match = normalized.match(new RegExp(`^${expression}$`));
        if (match) { key = templateKey; values = Object.fromEntries(names.map((name, i) => [name, match[i + 1]])); break; }
      }
    }
    const translated = key && locale === "en" ? read(key) : source;
    return translated.replace(/\{(\w+)\}/g, (token, name) => name in values ? String(values[name]) : token);
  };
}

const stableFields = new Set(["id", "category", "niche", "niches", "title", "company", "companyShort", "href", "deployUrl", "repositoryUrl", "imageSrc", "src"]);
export function translateContent<T>(content: T, translate: Translate, field = ""): T {
  if (stableFields.has(field)) return content;
  if (typeof content === "string") {
    if (field === "technology") return content.split(" · ").map((item) => translate(item)).join(" · ") as T;
    return translate(content) as T;
  }
  if (Array.isArray(content)) return content.map((item) => translateContent(item, translate)) as T;
  if (content && typeof content === "object") return Object.fromEntries(Object.entries(content).map(([key, value]) => [key, translateContent(value, translate, key)])) as T;
  return content;
}
