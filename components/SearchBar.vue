<template>
  <div class="search">
    <div class="search-box">
      <span>검색</span>
      <input type="text" placeholder="email" />
    </div>
  </div>
</template>
<script></script>
<style lang="scss" scoped>
.search {
  margin-bottom: 150px;
  &-box {
    display: flex;
    align-items: center;
    span {
      font-size: 30px;
    }
    input {
      font-size: 20px;
      margin-left: 20px;
      border-bottom: 1px solid #aaa;
      padding: 3px;
      &::placeholder {
        color: #aaa;
      }
    }
  }
}
</style>
