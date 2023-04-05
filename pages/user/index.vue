<template>
  <section class="user">
    <SearchBar />
    <UserTable />
  </section>
</template>
<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
});
</script>
<style lang="scss">
.user {
  padding: 100px;
}
</style>
