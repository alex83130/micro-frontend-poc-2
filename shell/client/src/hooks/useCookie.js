import React, { useState } from 'react';

const getItem = (key) =>
  document.cookie.split('; ').reduce((total, currentCookie) => {
    const item = currentCookie.split('=');
    const storedKey = item[0];
    const storedValue = item[1];

    return key === storedKey ? decodeURIComponent(storedValue) : total;
  }, '');

const setItem = (key, value, numberOfDays) => {
  const now = new Date();

  // set the time to be now + numberOfDays
  now.setTime(now.getTime() + numberOfDays * 60 * 60 * 24 * 1000);

  console.log('process', process.env);
  const domain = process.env.NODE_ENV === 'production' ? '.herokuapp.com' : 'localhost';

  document.cookie = `${key}=${value}; expires=${now.toUTCString()}; path=/; domain=${domain};`;
};

const convertBoolean = (value) => (value === 'true' ? true : value === 'false' ? false : value);

const useCookie = (key, defaultValue) => {
  const getCookie = () => convertBoolean(getItem(key)) || defaultValue;

  const [cookie, setCookie] = useState(getCookie());

  const updateCookie = (value, numberOfDays) => {
    setCookie(value);
    setItem(key, value, numberOfDays);
  };

  return { cookie, updateCookie };
};

export { useCookie };
