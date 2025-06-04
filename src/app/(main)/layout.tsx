// src/app/(site)/layout.tsx
import NavBar from '@/components/Navbar'

export default function InnerLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <main className="pt-20">{children}</main> {/* push content below nav */}
    </>
  );
}
