'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Logo } from '@/components/logo';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Gamepad2, Dices, Mouse, Menu } from 'lucide-react';


const Accent = ({ children }: { children: React.ReactNode }) => (
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 font-extrabold">
    {children}
  </span>
);

const FeatureCard: React.FC<{
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}> = ({ title, icon, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.45 }}
    viewport={{ once: true, amount: 0.5 }}
    className="bg-neutral-900/50 border border-yellow-400/20 p-6 rounded-2xl backdrop-blur-sm shadow-md shadow-yellow-500/5 flex flex-col"
  >
    <div className="flex items-center gap-4">
      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-yellow-500/20 to-yellow-400/30 flex items-center justify-center border border-yellow-400/30 flex-shrink-0">
        {icon}
      </div>
      <div className="font-bold text-xl text-white">{title}</div>
    </div>
    <div className="mt-4 text-gray-300 space-y-2 text-sm">{children}</div>
  </motion.div>
);

const SpecItem = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between">
    <span className="text-gray-400">{label}:</span>
    <span className="text-right font-medium text-white">{value}</span>
  </div>
);

const CurrentYear = () => {
  const [year, setYear] = useState<number | null>(null);
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  if (year === null) {
    return null; // Render nothing on the server
  }

  return <>{year}</>;
};


export default function CyberStrikeHome() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white antialiased">
      {/* Top gradient glow */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-8 left-1/2 w-[900px] h-[420px] -translate-x-1/2 bg-yellow-400 opacity-10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-yellow-500 opacity-10 blur-3xl rounded-full" />
      </div>

      <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between sticky top-0 bg-black/50 backdrop-blur-lg z-50">
        <Link href="/" className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-lg flex items-center justify-center">
            <Logo className="rounded-lg" />
          </div>
          <div>
            <div className="text-xl font-extrabold tracking-tight">
              CyberStrike
            </div>
            <div className="text-xs text-gray-400 -mt-1">
              Компьютерный клуб - Гродно
            </div>
          </div>
        </Link>
        <nav className="hidden md:flex gap-4 items-center">
        <a
            href="#location"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('location');
            }}
            className="text-sm text-gray-300 hover:text-white transition-colors"
          >
            Где нас найти
          </a>
          <a
            href="#hardware"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('hardware');
            }}
            className="text-sm text-gray-300 hover:text-white transition-colors"
          >
            Наше железо
          </a>
           <a
            href="#interior"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('interior');
            }}
            className="text-sm text-gray-300 hover:text-white transition-colors"
          >
            Интерьер
          </a>
          <a
            href="#playstation"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('playstation');
            }}
            className="text-sm text-gray-300 hover:text-white transition-colors"
          >
            PlayStation 5
          </a>
          <a
            href="#rules"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('rules');
            }}
            className="text-sm text-gray-300 hover:text-white transition-colors"
          >
            Правила клуба
          </a>
          <Button
            onClick={() => scrollTo('booking')}
            className="ml-2 px-4 py-2 bg-yellow-400 rounded-md font-semibold text-black shadow-lg shadow-yellow-500/30 hover:bg-yellow-500 transition-colors"
          >
            Бронирование
          </Button>
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="border-yellow-400/20 bg-neutral-900/50">
                <Menu className="h-5 w-5 text-yellow-300" />
                <span className="sr-only">Открыть меню</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black border-l-yellow-400/20">
              <div className="flex flex-col gap-6 pt-16">
                <SheetClose asChild>
                  <a
                    href="#location"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo('location');
                    }}
                    className="text-lg text-gray-300 hover:text-white transition-colors"
                  >
                    Где нас найти
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a
                    href="#hardware"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo('hardware');
                    }}
                    className="text-lg text-gray-300 hover:text-white transition-colors"
                  >
                    Наше железо
                  </a>
                </SheetClose>
                 <SheetClose asChild>
                  <a
                    href="#interior"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo('interior');
                    }}
                    className="text-lg text-gray-300 hover:text-white transition-colors"
                  >
                    Интерьер
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a
                    href="#playstation"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo('playstation');
                    }}
                    className="text-lg text-gray-300 hover:text-white transition-colors"
                  >
                    PlayStation 5
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a
                    href="#rules"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo('rules');
                    }}
                    className="text-lg text-gray-300 hover:text-white transition-colors"
                  >
                    Правила клуба
                  </a>
                </SheetClose>
                 <SheetClose asChild>
                  <Button
                    onClick={() => scrollTo('booking')}
                    className="mt-4 px-4 py-2 bg-yellow-400 rounded-md font-semibold text-black shadow-lg shadow-yellow-500/30 hover:bg-yellow-500 transition-colors"
                  >
                    Бронирование
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* HERO */}
        <section className="flex flex-col items-center text-center py-16">
          <div className="space-y-6 flex flex-col items-center">
            <motion.h1
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-extrabold leading-tight"
            >
              Твой <Accent>игровой</Accent> рай в{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500">
                Гродно
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gray-300 max-w-xl"
            >
              CyberStrike - современное игровое пространство для всех любителей видеоигр. Мощные ПК, PS5-комната и уютная атмосфера.
            </motion.p>

            <div className="flex gap-3">
              <motion.button
                onClick={() => scrollTo('booking')}
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-yellow-400 text-black font-semibold shadow-xl shadow-yellow-500/30"
              >
                Забронировать ПК или PS5
              </motion.button>

              <motion.a
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('pricing');
                }}
                href="#pricing"
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center cursor-pointer gap-2 px-4 py-3 rounded-lg border border-yellow-400/30 bg-yellow-400/10 text-yellow-300"
              >
                Смотреть прайс
              </motion.a>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-6 pt-6">
              <div className="text-sm">
                <div className="text-gray-300 font-semibold">16</div>
                <div className="text-gray-500 text-xs">Игровых ПК</div>
              </div>
              <div className="text-sm">
                <div className="text-gray-300 font-semibold">PS5</div>
                <div className="text-gray-500 text-xs">Отдельная комната</div>
              </div>
            </div>
          </div>
        </section>

        {/* LOCATION */}
        <section
          id="location"
          className="mb-24 scroll-mt-24 bg-neutral-900/50 p-8 rounded-2xl border border-yellow-400/20 text-center"
        >
          <h2 className="text-3xl font-extrabold">
            Где нас <Accent>найти</Accent>
          </h2>
          <div className="mt-4 text-lg text-gray-300">
            <p>📍 г. Гродно, ул. Максима Горького, 47</p>
            <p className="mt-2">📞 +375 (29) 730-10-10 (Круглосуточно)</p>
          </div>
          <div className="mt-6">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black">
                  Подробнее
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[625px]">
                <DialogHeader>
                  <DialogTitle className="text-yellow-400">Как нас найти</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <p className="text-gray-300">
                    Мы находимся по адресу: г. Гродно, ул. Максима Горького, 47.
                    Вот несколько фотографий, которые помогут вам сориентироваться.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <Image
                      src="/images/location1.jpg"
                      alt="Фото местоположения 1"
                      width={600}
                      height={400}
                      className="rounded-lg object-cover"
                      data-ai-hint="building exterior"
                    />
                    <Image
                      src="/images/location2.jpg"
                      alt="Фото местоположения 2"
                      width={600}
                      height={400}
                      className="rounded-lg object-cover"
                      data-ai-hint="street view"
                    />
                     <Image
                      src="/images/location3.jpg"
                      alt="Фото местоположения 3"
                      width={600}
                      height={400}
                      className="rounded-lg object-cover"
                      data-ai-hint="building entrance"
                    />
                     <Image
                      src="/images/location4.png"
                      alt="Фото местоположения 4"
                      width={600}
                      height={400}
                      className="rounded-lg object-cover"
                      data-ai-hint="nearby landmark"
                    />
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </section>

        {/* HARDWARE */}
        <section id="hardware" className="mt-24 scroll-mt-24">
          <h2 className="text-3xl font-extrabold text-center">
            Наши <Accent>компьютеры</Accent>
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mt-2">
            Ощутите новый уровень погружения в игровой мир благодаря нашим игровым станциям высокой производительности.
            В вашем распоряжении: 13 ПК категории Standart, 2 ПК Comfort и 3 ПК VIP.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard
              title="Standart"
              icon={<Gamepad2 className="text-yellow-300" />}
            >
              <SpecItem label="Процессор" value="Ryzen 5 5600" />
              <SpecItem label="Видеокарта" value="RTX 3060" />
              <SpecItem label="ОЗУ" value="16GB DDR4" />
              <SpecItem label="Монитор" value="165Hz 23.8″" />
            </FeatureCard>
            <FeatureCard
              title="VIP"
              icon={<Dices className="text-yellow-300" />}
            >
              <SpecItem label="Процессор" value="i5-14600KF" />
              <SpecItem label="Видеокарта" value="RTX 4070 Ti" />
              <SpecItem label="ОЗУ" value="32GB DDR5" />
              <SpecItem label="Монитор" value="240Hz 23.8″" />
            </FeatureCard>
            <FeatureCard
              title="Периферия"
              icon={<Mouse className="text-yellow-300" />}
            >
              <SpecItem label="Мышь" value="Razer Basilisk V3" />
              <SpecItem label="Клавиатура" value="Razer BlackWidow V3 Tenkeyless" />
              <SpecItem label="Наушники" value="Razer BlackShark V2" />
            </FeatureCard>
          </div>
        </section>

        {/* INTERIOR */}
        <section id="interior" className="mt-24 scroll-mt-24">
           <h2 className="text-3xl font-extrabold text-center">
            Наш <Accent>интерьер</Accent>
          </h2>
           <p className="text-gray-400 text-center max-w-2xl mx-auto mt-2">
            Современный интерьер компьютерного клуба с стильным дизайном, удобными креслами и высоким качеством освещения создаёт идеальную атмосферу для погружения в игры и общения с друзьями.
          </p>
          <div className="mt-8">
            <Carousel
              opts={{
                align: 'start',
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <Image
                    src="/images/pc1.jpg"
                    alt="Игровые компьютеры 1"
                    width={600}
                    height={400}
                    className="rounded-xl object-cover"
                    data-ai-hint="gaming setup"
                  />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <Image
                    src="/images/pc2.jpg"
                    alt="Игровые компьютеры 2"
                    width={600}
                    height={400}
                    className="rounded-xl object-cover"
                    data-ai-hint="esports computers"
                  />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <Image
                    src="/images/pc3.jpg"
                    alt="Игровые компьютеры 3"
                    width={600}
                    height={400}
                    className="rounded-xl object-cover"
                    data-ai-hint="gaming chairs"
                  />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <Image
                    src="/images/pc4.jpg"
                    alt="Игровые компьютеры 4"
                    width={600}
                    height={400}
                    className="rounded-xl object-cover"
                    data-ai-hint="pc gaming"
                  />
                </CarouselItem>
                 <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <Image
                    src="/images/pc5.jpg"
                    alt="Игровые компьютеры 5"
                    width={600}
                    height={400}
                    className="rounded-xl object-cover"
                    data-ai-hint="computer club"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="ml-16" />
              <CarouselNext className="mr-16" />
            </Carousel>
          </div>
        </section>

        {/* PLAYSTATION */}
        <section id="playstation" className="mt-24 scroll-mt-24">
           <h2 className="text-3xl font-extrabold text-center">
            <Accent>PlayStation 5</Accent>
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mt-2">
            Отдельная комната с PlayStation 5 для максимального досуга. Удобные диваны, большой телевизор, библиотека из 750 игр.
          </p>
           <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <Image
                src="/images/ps5-1.jpg"
                alt="PlayStation 5 комната 1"
                width={800}
                height={600}
                className="rounded-xl object-cover"
                data-ai-hint="playstation room"
              />
              <Image
                src="/images/ps5-2.jpg"
                alt="PlayStation 5 комната 2"
                width={800}
                height={600}
                className="rounded-xl object-cover"
                data-ai-hint="gaming console setup"
              />
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="mt-24 scroll-mt-24">
          <div className="bg-neutral-900/50 p-8 rounded-2xl border border-yellow-400/20">
            <h2 className="text-3xl font-extrabold text-center mb-8">
              Наш <Accent>прайс</Accent>
            </h2>

            {/* PC Pricing */}
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-4 gap-x-4 text-center mb-4">
                <div className="font-semibold text-lg"></div>
                <div className="font-semibold text-lg text-yellow-300">Standard</div>
                <div className="font-semibold text-lg text-yellow-300">Comfort</div>
                <div className="font-semibold text-lg text-yellow-300">VIP</div>
              </div>
              <table className="w-full text-sm text-gray-300">
                <tbody>
                  <tr className="border-t border-yellow-400/10">
                    <td className="py-3 font-semibold">1 час</td>
                    <td className="py-3 text-center">5 BYN</td>
                    <td className="py-3 text-center">6 BYN</td>
                    <td className="py-3 text-center">7 BYN</td>
                  </tr>
                  <tr className="border-t border-yellow-400/10">
                    <td className="py-3 font-semibold">3 часа</td>
                    <td className="py-3 text-center">12 BYN</td>
                    <td className="py-3 text-center">14 BYN</td>
                    <td className="py-3 text-center">17 BYN</td>
                  </tr>
                  <tr className="border-t border-b border-yellow-400/10">
                    <td className="py-3 font-semibold">5 часов</td>
                    <td className="py-3 text-center">17 BYN</td>
                    <td className="py-3 text-center">19 BYN</td>
                    <td className="py-3 text-center">22 BYN</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-center text-sm text-gray-400 mt-4">2 BYN - клубный Steam аккаунт</p>
            </div>

            {/* Day/Night Packages */}
            <div className="max-w-4xl mx-auto mt-10">
              <h3 className="text-xl font-bold text-center text-yellow-400 mb-4">Пакет "День" (8:00-21:00) / "Ночь" (21:00-8:00)</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="p-4 rounded-lg bg-yellow-400/10 border border-yellow-400/20">
                  <div className="font-semibold">Standard</div>
                  <div className="text-2xl font-bold text-yellow-300 mt-1">23 BYN</div>
                </div>
                <div className="p-4 rounded-lg bg-yellow-400/10 border border-yellow-400/20">
                  <div className="font-semibold">Comfort</div>
                  <div className="text-2xl font-bold text-yellow-300 mt-1">25 BYN</div>
                </div>
                <div className="p-4 rounded-lg bg-yellow-400/10 border border-yellow-400/20">
                  <div className="font-semibold">VIP</div>
                  <div className="text-2xl font-bold text-yellow-300 mt-1">28 BYN</div>
                </div>
              </div>
            </div>

            {/* PlayStation 5 Pricing */}
            <div className="max-w-4xl mx-auto mt-10">
              <h3 className="text-xl font-bold text-center text-yellow-400 mb-4">PlayStation 5</h3>
              <table className="w-full text-sm text-gray-300">
                <tbody>
                  <tr className="border-t border-yellow-400/10">
                    <td className="py-3 font-semibold">1 час</td>
                    <td className="py-3 text-right font-bold text-yellow-300">8 BYN</td>
                    <td className="py-3 font-semibold pl-8">3 часа</td>
                    <td className="py-3 text-right font-bold text-yellow-300">20 BYN</td>
                  </tr>
                  <tr className="border-t border-b border-yellow-400/10">
                    <td className="py-3 font-semibold">5 часов</td>
                    <td className="py-3 text-right font-bold text-yellow-300">30 BYN</td>
                    <td className="py-3 font-semibold pl-8">Ночь</td>
                    <td className="py-3 text-right font-bold text-yellow-300">50 BYN</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-center text-sm text-gray-400 mt-4">Каждый следующий час - 7 BYN</p>
            </div>
          </div>
        </section>

        {/* RULES */}
        <section id="rules" className="mt-24 scroll-mt-24">
        <div className="bg-neutral-900/50 p-8 rounded-2xl border border-yellow-400/20">
          <h2 className="text-3xl font-extrabold text-center mb-4">
            Правила <Accent>клуба</Accent>
          </h2>
          <h3 className="text-xl font-bold text-center text-yellow-400 mb-6">CyberStrike Гродно</h3>
          <ul className="text-gray-300 space-y-3 text-sm max-w-4xl mx-auto text-left">
            <li><span className="text-yellow-400 font-bold mr-2">—</span>Клуб имеет право в ограничении доступа в соответствии с требованиями служб правопорядка и органов милиции, прописанными в законе о местах массового пребывания людей.</li>
            <li><span className="text-yellow-400 font-bold mr-2">—</span>Запрещается спать в клубе.</li>
            <li><span className="text-yellow-400 font-bold mr-2">—</span>Запрещен доступ в клуб с животными.</li>
            <li><span className="text-yellow-400 font-bold mr-2">—</span>Запрещен доступ в клуб лицам в состоянии алкогольного или наркотического опьянения, степень которого администрация клуба определяет по своему усмотнению.</li>
            <li><span className="text-yellow-400 font-bold mr-2">—</span>Запрещается пользоваться симуляторами интернет-казино.</li>
            <li><span className="text-yellow-400 font-bold mr-2">—</span>В клубе возможно находиться при оплаченном игровом времени, либо при ожидании свободного компьютера.</li>
            <li><span className="text-yellow-400 font-bold mr-2">—</span>Запрещается употреблять на территории клуба снюс, насвай и другие виды бездымного табака.</li>
            <li><span className="text-yellow-400 font-bold mr-2">—</span>Запрещается наносить ущерб имуществу клуба или стучать по нему.</li>
            <li><span className="text-yellow-400 font-bold mr-2">—</span>Запрещается класть ноги на стол.</li>
            <li><span className="text-yellow-400 font-bold mr-2">—</span>Запрещается любая несанкционированная торговля на территории клуба.</li>
            <li><span className="text-yellow-400 font-bold mr-2">—</span>Фото- и видеосъемка возможна с использованием непрофессиональной техники. Профессиональная видео- и фотосъемка возможны только для аккредитованных журналистов.</li>
            <li><span className="text-yellow-400 font-bold mr-2">—</span>Вам придется покинуть клуб, если вы будете агрессивно себя вести по отношению к другим гостям и (или) персоналу, а также нарушать правила клуба.</li>
            <li><span className="text-yellow-400 font-bold mr-2">—</span>Посетители несут ответственность за соблюдение правопорядка, правил и условии‌ нахождения в клубе.</li>
            <li><span className="text-yellow-400 font-bold mr-2">—</span>Администрация не несет ответственности за сохранность личных вещей и ценностей в помещениях клуба.</li>
            <li><span className="text-yellow-400 font-bold mr-2">—</span>Оплачивая игровое время, Посетитель автоматически соглашается с изложенными в данном документе правилами.</li>
            <li><span className="text-yellow-400 font-bold mr-2">—</span>Продление игрового времени на ПК свыше того, которое вы приобрели, возможно только после уточнения у администратора.</li>
            <li><span className="text-yellow-400 font-bold mr-2">—</span>При нарушении настоящих Правил, общепринятых правил и норм поведения сотрудники компьютерного клуба имеют право вывести такого посетителя из компьютерного клуба без компенсации стоимости услуг.</li>
          </ul>
        </div>
      </section>

        {/* BOOKING */}
        <section
          id="booking"
          className="mt-24 scroll-mt-24 bg-neutral-900/50 p-8 rounded-2xl border border-yellow-400/20 text-center"
        >
          <h2 className="text-3xl font-extrabold">
            <Accent>Забронировать</Accent> ПК или PS5
          </h2>
          <div className="mt-4 text-lg text-gray-300">
            <p>Чтобы забронировать место, позвоните нам:</p>
            <p className="mt-2">📞 +375 (29) 730-10-10 (Круглосуточно)</p>
          </div>

          <div className="mt-6">
            <a href="tel:+375297301010">
              <Button
                className="px-8 py-3 rounded-lg bg-yellow-400 text-black font-semibold hover:bg-yellow-500 transition-colors shadow-lg shadow-yellow-500/30"
              >
                Позвонить для брони
              </Button>
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-20 border-t border-yellow-400/10 pt-8 pb-20 text-sm text-gray-400">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-4">
            <div>
              © <CurrentYear /> CyberStrike — Все права защищены
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
