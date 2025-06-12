<template>
  <header class="navbar bg-base-300 shadow-sm">
    <div class="navbar-start">
      <NuxtLink to="/" class="btn btn-ghost text-xl">
        <Icon name="SvgoNavbarIcon" style="width: 10rem" />
      </NuxtLink>
    </div>

    <div class="navbar-end">
      <a class="btn btn-accent">
        <Icon name="tabler:brand-github" size="24" />
        Sign In With Github
      </a>
    </div>
  </header>
</template>
