<template>
  <header class="navbar bg-base-300 shadow-sm">
    <div class="navbar-start">
      <NuxtLink to="/" class="btn btn-ghost text-xl">
        <Icon name="SvgoNavbarIcon" style="width: 10rem" />
      </NuxtLink>
    </div>

    <div class="navbar-end">
      <AppThemeToggle />
      <NuxtLink to="/login" class="btn btn-accent">
        Sign In
      </NuxtLink>
    </div>
  </header>
</template>
