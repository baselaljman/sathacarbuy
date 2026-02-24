
"use client";

import Link from "next/link";
import { Truck } from "lucide-react";

export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white">
            <Truck className="h-6 w-6" />
          </div>
          <span className="text-xl font-bold tracking-tight text-primary font-headline">
            سطحة <span className="text-accent">الرياض</span>
          </span>
        </Link>

        {/* تم حذف روابط التنقل بناءً على طلب المستخدم */}
      </div>
    </nav>
  );
}
