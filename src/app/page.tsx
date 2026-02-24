import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Truck, MapPin, ShieldCheck, Clock, CheckCircle, Zap, Phone } from "lucide-react";
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
            <Button size="lg" className="h-14 px-8 text-lg font-semibold bg-yellow-400 hover:bg-yellow-500 text-black border-none" asChild>
              <a href="https://wa.me/966500606861" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="ml-2 inline-block">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                راسلنا واتساب
              </a>
            </Button>
            <Button size="lg" className="h-14 px-8 text-lg font-semibold bg-red-600 hover:bg-red-700 text-white border-none animate-pulse-subtle" asChild>
              <a href="tel:0500606861">
                <Phone className="ml-2 h-5 w-5 fill-white/20" />
                اتصل الآن (0500606861)
              </a>
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
              title="وصول خلال دقائق"
              description="نضمن لك سرعة الاستجابة والوصول لموقعك في وقت قياسي."
            />
            <FeatureCard 
              icon={<MapPin className="h-8 w-8 text-primary" />}
              title="تغطية شاملة للمدينة"
              description="من الملقا إلى الشفا، نحن معك في كل مكان داخل الرياض."
            />
            <FeatureCard 
              icon={<ShieldCheck className="h-8 w-8 text-primary" />}
              title="سائقون موثوقون"
              description="طاقم عمل محترف ومدرب للتعامل مع كافة المواقف الصعبة."
            />
            <FeatureCard 
              icon={<Truck className="h-8 w-8 text-primary" />}
              title="جميع أنواع المركبات"
              description="أسطول متنوع لنقل السيارات الصغيرة، العائلية، والفاخرة."
            />
          </div>
        </div>
      </section>

      {/* Fleet Types Section */}
      <section className="py-24 bg-white">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-headline mb-4 text-primary">أنواع السطحات المتوفرة</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">لدينا أسطول متكامل مجهز بأحدث التقنيات لنقل سيارتك بأمان تامة.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <FleetCard 
              imageUrl={PlaceHolderImages.find(img => img.id === 'fleet-normal')?.imageUrl || ""}
              title="سطحة عادية"
              description="مثالية لنقل السيارات المتعطلة والمسافات القصيرة."
              imageHint="tow truck"
            />
            <FleetCard 
              imageUrl={PlaceHolderImages.find(img => img.id === 'fleet-hydraulic')?.imageUrl || ""}
              title="سطحة هيدروليك"
              description="لنقل السيارات الفاخرة والرياضية بأقصى درجات الحماية."
              imageHint="hydraulic truck"
            />
            <FleetCard 
              imageUrl={PlaceHolderImages.find(img => img.id === 'fleet-fulldown')?.imageUrl || ""}
              title="سطحة فل داون"
              description="تتميز بالنزول الكامل على الأرض لسهولة تحميل السيارات."
              imageHint="flatbed truck"
            />
            <FleetCard 
              imageUrl={PlaceHolderImages.find(img => img.id === 'fleet-low')?.imageUrl || ""}
              title="نزول كامل"
              description="مخصصة للسيارات المنخفضة جداً لضمان عدم حدوث خدوش."
              imageHint="low truck"
            />
            <FleetCard 
              imageUrl={PlaceHolderImages.find(img => img.id === 'fleet-tire')?.imageUrl || ""}
              title="سطحة كفرات"
              description="مخصصة للسيارات التي تعاني من مشاكل في الإطارات."
              imageHint="wheel lift"
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

function FleetCard({ imageUrl, title, description, imageHint }: { imageUrl: string, title: string, description: string, imageHint: string }) {
  return (
    <Card className="border-2 border-primary/5 hover:border-accent/30 transition-all hover:shadow-md bg-white overflow-hidden group">
      <div className="relative h-48 w-full">
        <Image 
          src={imageUrl} 
          alt={title} 
          fill 
          className="object-cover transition-transform group-hover:scale-105"
          data-ai-hint={imageHint}
        />
      </div>
      <CardContent className="pt-6 text-center px-4">
        <h3 className="text-md font-bold mb-2">{title}</h3>
        <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}
