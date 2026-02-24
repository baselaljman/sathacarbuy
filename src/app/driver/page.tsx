
"use client";

import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Truck, MapPin, User, ChevronLeft, AlertTriangle, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

export default function DriverDashboard() {
  const [isOnline, setIsOnline] = useState(true);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navigation />
      
      <main className="container py-10 px-4 max-w-2xl mx-auto space-y-8">
        <div className="flex items-center justify-between bg-white p-6 rounded-2xl shadow-sm border">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold font-headline">أهلاً بك، أحمد</h2>
            <p className="text-sm text-muted-foreground">أنت الآن {isOnline ? "متاح للطلبات" : "غير متاح"}</p>
          </div>
          <div className="flex items-center gap-2 bg-muted/50 p-2 rounded-lg border">
            <Label htmlFor="online-status" className="text-xs font-bold">نشط</Label>
            <Switch id="online-status" checked={isOnline} onCheckedChange={setIsOnline} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
           <StatCard label="أرباح اليوم" value="450 ر.س" color="text-green-600" />
           <StatCard label="الطلبات المكتملة" value="3" color="text-primary" />
        </div>

        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold">طلبات جديدة (1)</h3>
            <Badge variant="outline" className="bg-accent/5 text-accent border-accent/20">قريب منك</Badge>
          </div>

          <Card className="border-2 border-primary/20 shadow-lg animate-pulse-subtle">
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="flex items-center gap-2">
                <Badge className="bg-destructive/10 text-destructive border-destructive/20">عاجل</Badge>
                <span className="text-xs text-muted-foreground">منذ دقيقتين</span>
              </div>
              <p className="text-lg font-bold text-primary">180 ر.س</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                 <div className="flex gap-3">
                    <div className="mt-1"><MapPin className="h-4 w-4 text-primary" /></div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">موقع العميل</p>
                      <p className="font-semibold">حي الملقا، شمال الرياض</p>
                    </div>
                 </div>
                 <div className="flex gap-3">
                    <div className="mt-1"><Truck className="h-4 w-4 text-accent" /></div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">الوجهة</p>
                      <p className="font-semibold">مركز صيانة الفيصلية</p>
                    </div>
                 </div>
              </div>

              <div className="p-3 bg-muted rounded-lg flex gap-3">
                 <AlertTriangle className="h-5 w-5 text-orange-500 shrink-0" />
                 <div>
                    <p className="text-sm font-bold">عطل في المحرك</p>
                    <p className="text-xs text-muted-foreground">تويوتا كامري بيضاء 2022. خروج دخان من غطاء المحرك.</p>
                 </div>
              </div>
            </CardContent>
            <CardFooter className="flex gap-3">
              <Button variant="outline" className="w-1/3">رفض</Button>
              <Button className="flex-1 bg-accent text-white hover:bg-accent/90">
                 قبول الطلب <ChevronLeft className="mr-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </section>

        <section className="space-y-4">
           <h3 className="text-lg font-bold">سجل اليوم</h3>
           <Card className="p-4 space-y-4">
              <HistoryItem title="نقل حي الروضة" status="مكتمل" price="120 ر.س" />
              <HistoryItem title="خدمة حي الياسمين" status="مكتمل" price="150 ر.س" />
           </Card>
        </section>
      </main>
    </div>
  );
}

function StatCard({ label, value, color }: { label: string, value: string, color: string }) {
  return (
    <Card>
      <CardContent className="pt-6">
        <p className="text-xs font-semibold text-muted-foreground mb-1 uppercase tracking-wider">{label}</p>
        <p className={cn("text-2xl font-bold", color)}>{value}</p>
      </CardContent>
    </Card>
  );
}

function HistoryItem({ title, status, price }: { title: string, status: string, price: string }) {
  return (
    <div className="flex items-center justify-between border-b last:border-0 pb-3 last:pb-0">
       <div className="flex items-center gap-3">
          <div className="h-10 w-10 bg-muted rounded-full flex items-center justify-center">
            <Truck className="h-5 w-5 text-muted-foreground" />
          </div>
          <div>
            <p className="font-bold text-sm">{title}</p>
            <Badge variant="secondary" className="text-[10px] py-0">{status}</Badge>
          </div>
       </div>
       <p className="font-bold text-sm text-primary">{price}</p>
    </div>
  );
}
