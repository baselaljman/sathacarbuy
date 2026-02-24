
"use client";

import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Truck, User, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AuthPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate auth
    setTimeout(() => {
      window.location.href = "/";
    }, 1500);
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navigation />
      
      <main className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-2xl animate-fade-in border-2 border-primary/5">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold font-headline">مرحباً بك مجدداً</CardTitle>
            <CardDescription>انضم إلى أسرع شبكة سطحات في الرياض.</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="user" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8 h-12">
                <TabsTrigger value="user" className="flex items-center gap-2">
                  <User className="h-4 w-4" /> عميل
                </TabsTrigger>
                <TabsTrigger value="driver" className="flex items-center gap-2">
                  <Truck className="h-4 w-4" /> سائق
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="user">
                <form className="space-y-4" onSubmit={handleAuth}>
                  <div className="space-y-2">
                    <Label htmlFor="phone">رقم الجوال</Label>
                    <Input id="phone" dir="ltr" placeholder="05X XXX XXXX" className="h-12 text-right" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">كلمة المرور</Label>
                    <Input id="password" type="password" className="h-12" required />
                  </div>
                  <Button className="w-full h-12 text-lg font-bold" disabled={isLoading}>
                    {isLoading ? "جاري تسجيل الدخول..." : "دخول كعميل"}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="driver">
                <form className="space-y-4" onSubmit={handleAuth}>
                  <div className="space-y-2">
                    <Label htmlFor="driver-id">هوية السائق / الجوال</Label>
                    <Input id="driver-id" placeholder="رقم الهوية" className="h-12" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="d-pass">كلمة المرور</Label>
                    <Input id="d-pass" type="password" className="h-12" required />
                  </div>
                  <Button className="w-full h-12 text-lg font-bold bg-accent text-white hover:bg-accent/90" disabled={isLoading}>
                    {isLoading ? "جاري تسجيل الدخول..." : "دخول كسائق"}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex flex-col gap-4 border-t pt-6">
            <p className="text-sm text-center text-muted-foreground w-full">
              ليس لديك حساب؟ <Link href="#" className="text-primary font-bold hover:underline">سجل الآن</Link>
            </p>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
