// src/components/NavBar.tsx
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const links = [
  { href: '/about', label: 'About' },
  { href: '/experience', label: 'Experience' },
  { href: '/projects', label: 'Projects' },
  { href: '/accolades', label: 'Accolades' },
  { href: '/contact', label: 'Contact' },
];

export default function NavBar() {
  const path = usePathname();

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 inset-x-0 z-40 bg-white/70 dark:bg-zinc-900/80
                 backdrop-blur-sm shadow-sm"
    >
      <div className="mx-auto flex max-w-5xl items-center gap-6 px-4 py-3">
        {links.map(l => (
          <Link
            key={l.href}
            href={l.href}
            className={
              'text-sm font-medium transition hover:text-pink-700 ' +
              (path === l.href ? 'text-pink-700' : 'text-gray-700 dark:text-gray-200')
            }
          >
            {l.label}
          </Link>
        ))}
      </div>
    </motion.nav>
  );
}
