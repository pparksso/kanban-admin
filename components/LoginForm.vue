<template>
  <form class="login-form">
    <div class="login-form__input-box">
      <label for=""><span>ID</span><input v-model="idRef" type="text" placeholder="kanban" /></label>
      <label for=""
        ><span>PW</span
        ><input id="" v-model="pwRef" type="password" name="" placeholder="12341234" @keydown="enterSubmitHandler"
      /></label>
    </div>
    <div class="login-form__btn"><button type="button" @click="submitHandler">Login</button></div>
  </form>
</template>
<script setup lang="ts">
const idRef = ref('');
const pwRef = ref('');
const router = useRouter();

const submitHandler = () => {
  if (idRef.value === 'kanban' && pwRef.value === '12341234') {
    // 미들웨어에서 로컬스토리지 값을 읽어와서 토큰값이 있으면 /login 접근 금지, 없으면 / 접근 금지
    // router.push('/');
  } else {
    // eslint-disable-next-line no-alert
    alert('아이디와 비밀번호를 확인해주세요.');
  }
};
const enterSubmitHandler = (e: KeyboardEvent) => {
  if (e.code === 'Enter') submitHandler();
};
</script>
<style lang="scss" scoped>
.login-form {
  display: flex;
  flex-direction: column;
  &__input-box {
    margin-bottom: 40px;
    label {
      display: flex;
      align-items: flex-end;
      &:first-child {
        margin-bottom: 20px;
      }
      span {
        width: 40px;
        font-size: 20px;
      }
      input {
        flex-grow: 1;
        border-bottom: 2px solid #aaa;
        padding-bottom: 5px;
        &::placeholder {
          color: #aaa;
        }
      }
    }
  }
  &__btn {
    text-align: center;
    button {
      background-color: blueviolet;
      padding: 7px 20px;
      font-size: 20px;
      border-radius: 5px;
      color: #ddd;
      font-weight: 700;
    }
  }
}
</style>
