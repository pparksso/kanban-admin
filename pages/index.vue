<template>
  <section class="main"><p>관리자 페이지 연습용 프로젝트</p></section>
</template>
<script setup lang="ts">
import { getDatabase, ref as rtdbRef, get, child } from 'firebase/database';

const db = getDatabase();
const dbRef = rtdbRef(db);

const path = `pssh5124%40gmail%252Ecom`;

get(child(dbRef, path)).then((snapshot) => console.log(snapshot.val()));
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
