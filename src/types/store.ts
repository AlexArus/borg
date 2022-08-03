import { ArrayElement } from "./utils";

export const predefinedTags = [
  "science",
  "humor",
  "tech",
  "it",
  "other",
] as const;

export const sourceTypes = {
  rss_full: 0,
  rss_short: 1,
} as const;

export type Store = {
  version: string;
  sources: Array<{
    title: string;
    type: typeof sourceTypes[keyof typeof sourceTypes];
    description?: string;
    source: string;
    tags?: Array<ArrayElement<typeof predefinedTags> | string>;
  }>;
  links: Array<{
    title: string;
    description?: string;
    url: string;
    tags?: Array<ArrayElement<typeof predefinedTags> | string>;
  }>;
};
