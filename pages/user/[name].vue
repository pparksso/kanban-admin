<template>
  <section class="user">
    <div class="user-box">
      <ul>
        <li><span class="name">No : </span><span class="val">1</span></li>
        <li><span class="name">e-mail :</span><span class="val">thgml5143@hanmail.net</span></li>
        <li><span class="name">이름 : </span><span class="val">박소희</span></li>
        <li><span class="name">List수 : </span><span class="val">3</span></li>
      </ul>
    </div>
  </section>
</template>
<script setup lang="ts">
const route = useRoute();
// console.log(route.params.name);
</script>
<style lang="scss" scoped>
.user {
  display: flex;
  justify-content: center;
  align-items: center;
  &-box {
    ul li span {
      font-size: 24px;
    }
  }
}
</style>
