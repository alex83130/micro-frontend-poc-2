import { useLocalStorageSync } from './useLocalStorageSync';
import { useCookie } from './useCookie';

function useDrawer() {
  //const { value, setItem } = useLocalStorageSync('@micro-frontend-poc/appdrawer/open');
  const { cookie, updateCookie } = useCookie('@micro-frontend-poc/appdrawer/open');

  return {
    open: !!cookie,
    closeDrawer() {
      //setItem(false);
      updateCookie(false);
    },
    openDrawer() {
      //setItem(true);
      updateCookie(true);
    },
  };
}

export { useDrawer };
