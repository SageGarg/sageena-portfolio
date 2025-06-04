// src/components/NavBar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import clsx from 'clsx';  // yarn add clsx

const links = [
  { href: '/about',      label: 'About' },
  { href: '/experience', label: 'Experience' },
  { href: '/projects',   label: 'Projects' },
  { href: '/accolades',  label: 'Accolades' },
  { href: '/hire',       label: 'Hire Me' },
  { href: '/contact',    label: 'Contact' },
] as const;

export default function NavBar() {
  const pathname = usePathname() ?? '/';
  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <motion.nav
      role="navigation"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 120, damping: 14 }}
      className="fixed inset-x-0 top-0 z-40 bg-white/70 dark:bg-zinc-900/80
                 backdrop-blur-sm shadow-sm"
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        {/* —— Left-side brand / home link —— */}
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-gray-900
                     dark:text-gray-50 hover:text-pink-700 transition-colors"
        >
          Sageena Garg{/* or simply “Home” */}
        </Link>

        {/* —— Right-side nav links —— */}
        <div className="flex items-center gap-6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              aria-current={isActive(href) ? 'page' : undefined}
              className={clsx(
                'relative px-1 text-sm font-medium transition-colors',
                isActive(href)
                  ? 'text-pink-700'
                  : 'text-gray-700 dark:text-gray-200 hover:text-pink-700'
              )}
            >
              {label}

              {isActive(href) && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-pink-700"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
