import { useLocalStorageSync } from './useLocalStorageSync';
import { useCookie } from './useCookie';

function useDrawer() {
  //const { value, setItem } = useLocalStorageSync('@micro-frontend-poc/appdrawer/open');
  const { cookie, updateCookie } = useCookie('@micro-frontend-poc/appdrawer/open');

  return {
    open: cookie === 'true',
    closeDrawer() {
      console.log('closeDrawer');

      //setItem(false);
      updateCookie(false);
    },
    openDrawer() {
      console.log('openDrawer');

      //setItem(true);
      updateCookie(true);
    },
  };
}

export { useDrawer };
