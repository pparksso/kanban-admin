import { useAuthStore } from '@/stores/auth';

export default defineNuxtRouteMiddleware((to, from) => {
  // to : 현재 페이지, from : 이전 페이지
  const router = useRouter();
  const authStore = useAuthStore();
  const token = authStore.kanbanLoginState;

  if (token === 'true') {
    return false;
  }
  return navigateTo('/login');
});
