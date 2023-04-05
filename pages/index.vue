<template>
  <section class="main"><p>관리자 페이지 연습용 프로젝트</p></section>
</template>
<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
});
</script>
<style lang="scss" scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-size: 32px;
    font-weight: 700;
  }
}
</style>
