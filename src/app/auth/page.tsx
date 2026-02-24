
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
            <CardTitle className="text-3xl font-bold font-headline">Welcome Back</CardTitle>
            <CardDescription>Join the fastest tow truck network in Riyadh.</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="user" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8 h-12">
                <TabsTrigger value="user" className="flex items-center gap-2">
                  <User className="h-4 w-4" /> User
                </TabsTrigger>
                <TabsTrigger value="driver" className="flex items-center gap-2">
                  <Truck className="h-4 w-4" /> Driver
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="user">
                <form className="space-y-4" onSubmit={handleAuth}>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="05X XXX XXXX" className="h-12" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" className="h-12" required />
                  </div>
                  <Button className="w-full h-12 text-lg font-bold" disabled={isLoading}>
                    {isLoading ? "Signing in..." : "Login as User"}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="driver">
                <form className="space-y-4" onSubmit={handleAuth}>
                  <div className="space-y-2">
                    <Label htmlFor="driver-id">Driver ID / Phone</Label>
                    <Input id="driver-id" placeholder="ID Number" className="h-12" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="d-pass">Password</Label>
                    <Input id="d-pass" type="password" className="h-12" required />
                  </div>
                  <Button className="w-full h-12 text-lg font-bold bg-accent text-white hover:bg-accent/90" disabled={isLoading}>
                    {isLoading ? "Signing in..." : "Login as Driver"}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex flex-col gap-4 border-t pt-6">
            <p className="text-sm text-center text-muted-foreground w-full">
              Don't have an account? <Link href="#" className="text-primary font-bold hover:underline">Register now</Link>
            </p>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
