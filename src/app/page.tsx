'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function CyberStrikeLanding() {
  const router = useRouter();

  const handleMoreClick = () => {
    router.push('/home');
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Background grid effect */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,211,0,0.15),transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,211,0,0.05)_1px,transparent_1px),linear-gradient(180deg,rgba(255,211,0,0.05)_1px,transparent_1px)] bg-[length:40px_40px]" />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen text-center p-8">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-extrabold mb-6 text-yellow-400 drop-shadow-[0_0_15px_rgba(255,211,0,0.6)]"
        >
          CYBER STRIKE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-lg max-w-2xl text-gray-300"
        >
          Добро пожаловать в будущее гейминга — арену, где технологии встречаются с адреналином. Здесь мощные ПК, PS5-комната и турниры — всё, что нужно игроку.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-10 flex gap-6"
        >
          <Button
            variant="outline"
            onClick={handleMoreClick}
            className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-bold px-8 py-4 text-lg rounded-2xl transition duration-300"
          >
            Подробнее
          </Button>

          {/* Provide a fallback anchor for non-JS environments */}
          <a href="/home" className="sr-only">
            Открыть главную
          </a>
        </motion.div>
      </section>

      {/* Animated glow lines */}
      <motion.div
        className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-70"
        animate={{ x: ['-100%', '100%'] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-70"
        animate={{ x: ['100%', '-100%'] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'linear', delay: 3 }}
      />
    </div>
  );
}
