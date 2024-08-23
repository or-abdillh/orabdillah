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
  </Head>
  <slot />
</template>
