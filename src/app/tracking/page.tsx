
"use client";

import { useEffect, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Truck, Phone, MessageSquare, Clock, MapPin, CheckCircle2 } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function TrackingPage() {
  const [eta, setEta] = useState(15);
  const [status, setStatus] = useState("En Route");
  const driverImage = PlaceHolderImages.find(img => img.id === 'driver-avatar');

  useEffect(() => {
    const timer = setInterval(() => {
      setEta(prev => (prev > 1 ? prev - 1 : prev));
    }, 60000); // Reduce ETA every minute
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navigation />
      
      <main className="flex-1 flex flex-col md:flex-row h-[calc(100vh-64px)] overflow-hidden">
        {/* Map Side (Simulated) */}
        <div className="flex-1 relative bg-gray-200">
           <div className="absolute inset-0 bg-[#E8EDF2] flex items-center justify-center">
              {/* Mock Map View */}
              <div className="w-full h-full relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.google.com/maps/vt/pb=!1m4!1m3!1i12!2i1225!3i1564!2m3!1e0!2sm!3i637149099!3m8!2sen!3ssa!5e1105!12m4!1e68!2m2!1sset!2sRoadmap!4e0!5m1!1e0!23i4111425')] bg-cover" />
                
                {/* Simulated Pins */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                   <div className="relative">
                      <div className="h-10 w-10 bg-primary/20 rounded-full animate-ping absolute -top-1 -left-1" />
                      <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center text-white shadow-lg relative">
                        <MapPin className="h-5 w-5" />
                      </div>
                   </div>
                </div>

                <div className="absolute top-1/3 left-1/3 animate-bounce">
                   <div className="h-8 w-8 bg-accent rounded-xl flex items-center justify-center text-white shadow-lg">
                      <Truck className="h-5 w-5" />
                   </div>
                </div>
              </div>
           </div>

           {/* Overlay Badge */}
           <div className="absolute top-4 left-4">
              <Badge className="bg-white/90 backdrop-blur-sm text-primary border-primary/20 text-sm py-2 px-4 shadow-md flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                {status} to your location
              </Badge>
           </div>
        </div>

        {/* Info Side */}
        <div className="w-full md:w-[400px] bg-white shadow-2xl z-10 flex flex-col border-l">
          <div className="p-6 space-y-6">
             <div className="space-y-1">
                <h2 className="text-2xl font-bold font-headline">Arrival in {eta} min</h2>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Clock className="h-4 w-4" />
                  <span>Expected arrival at 4:45 PM</span>
                </div>
             </div>

             <div className="border-t pt-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-14 w-14 border-2 border-primary/10">
                      <AvatarImage src={driverImage?.imageUrl} />
                      <AvatarFallback>AM</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-bold">Ahmed Mohammed</h3>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Truck className="h-3 w-3" />
                        <span>Toyota Dyna • 7412 JKA</span>
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-accent/10 text-accent-foreground border-accent/20">
                    4.9 ★
                  </Badge>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="h-12 border-primary/20 hover:bg-primary/5">
                    <Phone className="mr-2 h-4 w-4 text-primary" /> Call
                  </Button>
                  <Button variant="outline" className="h-12 border-primary/20 hover:bg-primary/5">
                    <MessageSquare className="mr-2 h-4 w-4 text-primary" /> Message
                  </Button>
                </div>
             </div>

             <div className="space-y-4">
                <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Order Status</h4>
                <div className="space-y-4">
                  <StatusStep completed title="Request Received" time="4:22 PM" />
                  <StatusStep active title="Driver Dispatched" time="4:25 PM" />
                  <StatusStep title="Tow in Progress" />
                  <StatusStep title="Delivery Completed" />
                </div>
             </div>
          </div>

          <div className="mt-auto p-6 bg-muted/30 border-t">
            <Button variant="destructive" variant="outline" className="w-full h-12 text-destructive border-destructive/20 hover:bg-destructive/5">
               Cancel Request
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}

function StatusStep({ title, time, completed, active }: { title: string, time?: string, completed?: boolean, active?: boolean }) {
  return (
    <div className="flex gap-3">
      <div className="flex flex-col items-center">
        <div className={cn(
          "h-6 w-6 rounded-full flex items-center justify-center",
          completed ? "bg-primary text-white" : active ? "bg-accent text-white" : "bg-gray-200 text-gray-400"
        )}>
          {completed ? <CheckCircle2 className="h-4 w-4" /> : <div className="h-2 w-2 rounded-full bg-current" />}
        </div>
        <div className="w-[2px] h-full bg-gray-200 mt-1" />
      </div>
      <div className="pb-4">
        <p className={cn("text-sm font-bold", !completed && !active && "text-muted-foreground")}>{title}</p>
        {time && <p className="text-xs text-muted-foreground">{time}</p>}
      </div>
    </div>
  );
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}
