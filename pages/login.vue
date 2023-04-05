<template>
  <div class="login-box">
    <LoginForm />
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: 'login',
});
</script>
<style lang="scss" scoped>
.login-box {
  border: 2px solid #999;
  padding: 40px;
  border-radius: 5px;
}
</style>
