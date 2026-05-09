import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },

      // Google
      {
        userAgent: "Googlebot",
        allow: "/",
      },

      // AI crawlers (IMPORTANT for modern SEO)
      {
        userAgent: "GPTBot",          // OpenAI (ChatGPT browsing / indexing)
        allow: "/",
      },
      {
        userAgent: "ChatGPT-User",    // ChatGPT browsing tool
        allow: "/",
      },
      {
        userAgent: "PerplexityBot",   // Perplexity AI
        allow: "/",
      },
      {
        userAgent: "ClaudeBot",       
        allow: "/",
      },
    ],

    sitemap: "https://www.multiservicesdelapaix.fr/sitemap.xml",
  };
}