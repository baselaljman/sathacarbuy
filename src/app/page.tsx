
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Truck, MapPin, ShieldCheck, Clock, CheckCircle, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { RIYADH_DISTRICTS } from "@/lib/riyadh-districts";

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
            alt="سطحة الرياض"
            fill
            className="object-cover brightness-[0.4]"
            priority
            data-ai-hint="tow truck"
          />
        </div>
        
        <div className="container relative z-10 px-4 text-center text-white animate-fade-in">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl font-headline mb-6">
            شبكة السطحات الأكثر <br />
            <span className="text-accent">موثوقية في الرياض</span>
          </h1>
          <p className="mx-auto max-w-[700px] text-lg text-gray-200 mb-10">
            متعطل في الرياض؟ نصلك بأقرب سطحة خلال دقائق. 
            نغطي كافة أحياء الرياض العاصمة على مدار الساعة.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="h-14 px-8 text-lg font-semibold" asChild>
              <Link href="/request">اطلب سطحة الآن</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-semibold bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20" asChild>
              <Link href="/driver">انضم كقائد سطحة</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats/Features Section */}
      <section className="py-24 bg-background">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-headline mb-4">لماذا تختار سطحة الرياض؟</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">نقدم أسرع وأكثر خدمات المساعدة على الطريق أماناً في العاصمة.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<Clock className="h-8 w-8 text-primary" />}
              title="وصول خلال 15 دقيقة"
              description="متوسط وقت الوصول داخل حدود مدينة الرياض."
            />
            <FeatureCard 
              icon={<MapPin className="h-8 w-8 text-primary" />}
              title="تغطية شاملة للمدينة"
              description="من الملقا إلى الشفا، نحن معك في كل مكان."
            />
            <FeatureCard 
              icon={<ShieldCheck className="h-8 w-8 text-primary" />}
              title="سائقون موثوقون"
              description="جميع سائقينا يخضعون لفحوصات أمنية دقيقة."
            />
            <FeatureCard 
              icon={<Truck className="h-8 w-8 text-primary" />}
              title="جميع أنواع المركبات"
              description="دعم للسيارات الصغيرة، العائلية، والمركبات التجارية الخفيفة."
            />
          </div>
        </div>
      </section>

      {/* Coverage Areas Section */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-headline mb-4">نطاق تغطيتنا في الرياض</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground max-w-2xl mx-auto">نغطي كافة أحياء العاصمة لضمان وصول أسرع خدمة إليك أينما كنت.</p>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full border border-primary/20 shadow-sm animate-pulse-subtle">
                <Zap className="h-5 w-5 text-accent fill-accent" />
                <span className="font-bold text-lg">في كل حي هناك سطحة بالقرب منك وصول خلال دقائق</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(RIYADH_DISTRICTS).map(([region, districts]) => (
              <Card key={region} className="border-2 border-primary/5 hover:border-primary/20 transition-all shadow-sm h-full group bg-white">
                <CardHeader className="bg-primary/5 group-hover:bg-primary/10 transition-colors">
                  <CardTitle className="text-xl font-bold text-primary flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    {region.split(' (')[0]}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="flex flex-wrap gap-2">
                    {districts.map((district) => (
                      <Badge key={district} variant="outline" className="bg-white hover:bg-primary/5 border-primary/10 text-xs font-medium py-1">
                        <CheckCircle className="h-3 w-3 ml-1 text-accent" />
                        {district.split(' (')[0]}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-12 border-t bg-white">
        <div className="container px-4 mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Truck className="h-6 w-6 text-primary" />
            <span className="font-bold text-primary">سطحة الرياض</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2024 سطحة الرياض. جميع الحقوق محفوظة.</p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm hover:underline">سياسة الخصوصية</Link>
            <Link href="#" className="text-sm hover:underline">شروط الخدمة</Link>
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
