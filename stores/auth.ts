import { defineStore } from 'pinia';

export const useAuthStore = defineStore(
  'auth',
  () => {
    // 로그인 상태
    const kanbanLoginState = ref('');

    // 로그인 상태 변경 함수
    function changeLoginState(val: string) {
      kanbanLoginState.value = val;
    }
    return { kanbanLoginState };
  },
  { persist: true },
);
