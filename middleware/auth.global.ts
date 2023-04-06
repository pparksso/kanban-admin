import { useAuthStore } from '@/stores/auth';

export default defineNuxtRouteMiddleware((to, from) => {
  // to : 현재 페이지, from : 이전 페이지
  const authStore = useAuthStore();

  if (to.path === '/login') {
    if (authStore.kanbanLoginState === 'true') return navigateTo('/');
  } else if (authStore.kanbanLoginState === 'false' || authStore.kanbanLoginState === '') {
    return navigateTo('/login');
  }
  return true;
});
