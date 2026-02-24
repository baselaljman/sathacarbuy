
"use client";

import Link from "next/link";
import { Truck, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white">
            <Truck className="h-6 w-6" />
          </div>
          <span className="text-xl font-bold tracking-tight text-primary font-headline">
            Riyadh <span className="text-accent">TowAssist</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link href="/request" className="text-sm font-medium hover:text-primary transition-colors">
            Request a Tow
          </Link>
          <Link href="/driver" className="text-sm font-medium hover:text-primary transition-colors">
            Driver Portal
          </Link>
          <Button variant="default" asChild>
            <Link href="/auth">Sign In</Link>
          </Button>
        </div>

        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem asChild>
                <Link href="/request">Request a Tow</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/driver">Driver Portal</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/auth">Sign In</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}
