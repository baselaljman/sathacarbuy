
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Truck, MapPin, ShieldCheck, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-tow');

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[600px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage?.imageUrl || ""}
            alt="Hero Tow"
            fill
            className="object-cover brightness-[0.4]"
            priority
            data-ai-hint="tow truck"
          />
        </div>
        
        <div className="container relative z-10 px-4 text-center text-white animate-fade-in">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl font-headline mb-6">
            Riyadh's Most Reliable <br />
            <span className="text-accent">Tow Truck Network</span>
          </h1>
          <p className="mx-auto max-w-[700px] text-lg text-gray-200 mb-10">
            Stranded in Riyadh? We connect you with the nearest tow truck in minutes. 
            Covering North, East, West, South, and Central Riyadh.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="h-14 px-8 text-lg font-semibold" asChild>
              <Link href="/request">Request Tow Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-semibold bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20" asChild>
              <Link href="/driver">Join as a Driver</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats/Features Section */}
      <section className="py-24 bg-background">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-headline mb-4">Why Choose Riyadh TowAssist?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">We provide the fastest and most secure roadside assistance in the capital.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<Clock className="h-8 w-8 text-primary" />}
              title="15-Min Arrival"
              description="Average arrival time within Riyadh city limits."
            />
            <FeatureCard 
              icon={<MapPin className="h-8 w-8 text-primary" />}
              title="City-Wide Coverage"
              description="From Al-Malqa to Al-Shifa, we've got you covered."
            />
            <FeatureCard 
              icon={<ShieldCheck className="h-8 w-8 text-primary" />}
              title="Verified Drivers"
              description="All our drivers undergo strict background checks."
            />
            <FeatureCard 
              icon={<Truck className="h-8 w-8 text-primary" />}
              title="All Vehicle Types"
              description="Support for cars, SUVs, and light commercial vehicles."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-12 border-t bg-white">
        <div className="container px-4 mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Truck className="h-6 w-6 text-primary" />
            <span className="font-bold text-primary">Riyadh TowAssist</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2024 Riyadh TowAssist. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm hover:underline">Privacy Policy</Link>
            <Link href="#" className="text-sm hover:underline">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow bg-white">
      <CardContent className="pt-8 text-center">
        <div className="mb-4 flex justify-center">{icon}</div>
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
