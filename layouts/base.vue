<script setup lang="ts">
// initials
const runtime = useRuntimeConfig();

// setup title page with pattern title + app name from runtime public
useHead({
  titleTemplate(title) {
    return title
      ? `${title} — ${runtime.public.appName}`
      : runtime.public.appName;
  },
  link: [{ rel: "manifest", href: "/manifest.json" }],
});
</script>

<template>
  <Head>
    <!-- favicon: for andoid chrome -->
    <Link
      rel="icon"
      type="image/png"
      sizes="192x192"
      href="/images/favicons/android-chrome-192x192.png"
    />

    <!-- favicon: for ios safari -->
    <Link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/images/favicons/apple-touch-icon.png"
    />

    <!-- Primary Meta Tags -->
    <Meta
      name="description"
      content="Full-stack developer fluent in Vue, Nuxt, Express, and TypeScript, crafting digital solutions with precision and passion"
    />

    <!-- Open Graph / Facebook -->
    <Meta property="og:type" content="website" />
    <Meta property="og:url" content="https://orabdillah.id/" />
    <Meta property="og:title" content="Oka Rajeb Abdillah" />
    <Meta
      property="og:description"
      content="Full-stack developer fluent in Vue, Nuxt, Express, and TypeScript, crafting digital solutions with precision and passion"
    />
    <Meta
      property="og:image"
      content="https://res.cloudinary.com/diundang-digital/image/upload/v1724399949/akxpnmejhrgkli9mtuwv.png"
    />

    <!-- Twitter -->
    <Meta property="twitter:card" content="summary_large_image" />
    <Meta property="twitter:url" content="https://orabdillah.id/" />
    <Meta property="twitter:title" content="Oka Rajeb Abdillah" />
    <Meta
      property="twitter:description"
      content="Full-stack developer fluent in Vue, Nuxt, Express, and TypeScript, crafting digital solutions with precision and passion"
    />
    <Meta
      property="twitter:image"
      content="https://res.cloudinary.com/diundang-digital/image/upload/v1724399949/akxpnmejhrgkli9mtuwv.png"
    />

    <!-- Meta Tags Generated with https://metatags.io -->
  </Head>
  <slot />
</template>
