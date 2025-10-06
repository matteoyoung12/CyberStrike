'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Cookie } from 'lucide-react';

const getCookie = (name: string): string | null => {
  if (typeof document === 'undefined') {
    return null;
  }
  const nameEQ = name + '=';
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

const setCookie = (name: string, value: string, days: number) => {
  let expires = '';
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = '; expires=' + date.toUTCString();
  }
  document.cookie = name + '=' + (value || '') + expires + '; path=/';
};

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // This effect should only run on the client
    const consent = getCookie('cookie_consent');
    if (consent !== 'true') {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    setCookie('cookie_consent', 'true', 365);
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-neutral-900/80 backdrop-blur-md border-t border-yellow-400/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-sm text-gray-300">
          <Cookie className="h-5 w-5 text-yellow-400 flex-shrink-0" />
          <p>
            Мы используем cookie для улучшения вашего опыта. Оставаясь на сайте, вы соглашаетесь с нашей политикой.
          </p>
        </div>
        <Button
          onClick={handleAccept}
          className="bg-yellow-400 text-black hover:bg-yellow-500 font-semibold px-5 py-2 whitespace-nowrap"
        >
          Принять
        </Button>
      </div>
    </div>
  );
}
