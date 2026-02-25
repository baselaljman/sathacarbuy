import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Truck, MapPin, ShieldCheck, Clock, CheckCircle, Zap, Phone, FileText, ClipboardCheck, Star, Award, ThumbsUp, ArrowDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { RIYADH_DISTRICTS } from "@/lib/riyadh-districts";

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-tow');

  const regionIds: Record<string, string> = {
    "شمال الرياض (North)": "north",
    "شرق الرياض (East)": "east",
    "غرب الرياض (West)": "west",
    "جنوب الرياض (South)": "south",
    "وسط الرياض (Central)": "central"
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      
      {/* Hero Section - Optimized for Ad Conversion */}
      <section className="relative h-[650px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage?.imageUrl || ""}
            alt="سطحة الرياض - خدمة سريعة 24 ساعة"
            fill
            className="object-cover brightness-[0.4]"
            priority
            data-ai-hint="tow truck"
          />
        </div>
        
        <div className="container relative z-10 px-4 text-center text-white animate-fade-in">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl font-headline mb-6 leading-tight">
            مجموعة سطحات الأكثر <br />
            <span className="text-accent">ثقة وسرعة في الرياض</span>
          </h1>
          <p className="mx-auto max-w-[700px] text-lg text-gray-200 mb-10 font-medium">
            هل تعطلت سيارتك؟ نرسل لك أقرب سطحة في جميع أحياء الرياض فوراً. 
            خدمة 24 ساعة لجميع الأحياء: سطحة الملز، العقيق، لبن، ونمار.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="h-16 px-10 text-xl font-bold bg-yellow-400 hover:bg-yellow-500 text-black border-none shadow-xl" asChild>
              <a href="https://wa.me/966500606861" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="ml-2 inline-block">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                راسلنا واتساب
              </a>
            </Button>
            <Button size="lg" className="h-16 px-10 text-xl font-bold bg-red-600 hover:bg-red-700 text-white border-none shadow-xl animate-pulse-subtle" asChild>
              <a href="tel:0500606861">
                <Phone className="ml-2 h-6 w-6 fill-white/20" />
                اتصل الآن (0500606861)
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Internal Links Navigation Bar */}
      <section className="bg-white border-b sticky top-16 z-40 shadow-sm hidden md:block">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-center gap-8 py-3 overflow-x-auto no-scrollbar">
            {Object.keys(RIYADH_DISTRICTS).map((region) => (
              <a 
                key={region} 
                href={`#${regionIds[region]}`} 
                className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors whitespace-nowrap flex items-center gap-1"
              >
                {region.split(' (')[0]} <ArrowDown className="h-3 w-3" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Stats - Important for Ads */}
      <section className="py-12 bg-white border-b">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <StatItem icon={<Truck className="h-6 w-6 text-primary" />} label="أسطول سطحات" value="+50" />
            <StatItem icon={<Clock className="h-6 w-6 text-primary" />} label="متوسط الوصول" value="8 دقيقة" />
            <StatItem icon={<Star className="h-6 w-6 text-yellow-500" />} label="تقييم العملاء" value="4.9/5" />
            <StatItem icon={<Award className="h-6 w-6 text-primary" />} label="سنوات الخبرة" value="+10 سنوات" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-headline mb-4">خدمات سطحة الرياض الشاملة</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">نحن نوفر لك كافة حلول نقل السيارات والمساعدة على الطريق بأفضل الأسعار وأعلى جودة في العاصمة.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Clock className="h-8 w-8 text-primary" />}
              title="سرعة فائقة 24/7"
              description="خدمة مستمرة على مدار الساعة طوال أيام الأسبوع لضمان عدم تأخرك في أي وقت."
            />
            <FeatureCard 
              icon={<ClipboardCheck className="h-8 w-8 text-primary" />}
              title="تقدير الحوادث (تقدير)"
              description="متخصصون في نقل سيارات الحوادث إلى مراكز التقدير المعتمدة في الرياض وإنهاء الفواتير."
            />
            <FeatureCard 
              icon={<ShieldCheck className="h-8 w-8 text-primary" />}
              title="أمان تام لسيارتك"
              description="سائقون محترفون يضمنون سلامة سيارتك أثناء الرفع والنقل والإنزال."
            />
            <FeatureCard 
              icon={<MapPin className="h-8 w-8 text-primary" />}
              title="تغطية كافة الأحياء"
              description="من شمال الرياض إلى جنوبها، سطحاتنا منتشرة في كل حي لخدمتكم."
            />
            <FeatureCard 
              icon={<Truck className="h-8 w-8 text-primary" />}
              title="سطحات متنوعة"
              description="يتوفر لدينا سطحات هيدروليك، عادية، وفل داون لتناسب جميع أنواع السيارات."
            />
            <FeatureCard 
              icon={<ThumbsUp className="h-8 w-8 text-primary" />}
              title="أسعار تنافسية"
              description="نقدم أفضل أسعار السطحات في الرياض مع التزام تام بالشفافية والوضوح."
            />
          </div>
        </div>
      </section>

      {/* Taqdeer Highlight Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 space-y-6">
              <Badge className="bg-accent text-primary-foreground font-bold px-4 py-1">خدمة تقدير الحوادث</Badge>
              <h2 className="text-4xl font-bold font-headline leading-tight">هل تعرضت لحادث؟ <br />ننقل سيارتك لمركز التقدير فوراً</h2>
              <p className="text-primary-foreground/90 text-lg">
                نقدم خدمة متكاملة لنقل سيارات الحوادث إلى جميع مراكز التقدير المعتمدة في الرياض (مركز الرمال، القادسية، وغيرها). نساعدك في تسهيل الإجراءات ونقل سيارتك بأمان.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-accent shrink-0" />
                  <span className="text-lg">تغطية شاملة لجميع مراكز تقدير في الرياض</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-accent shrink-0" />
                  <span className="text-lg">إصدار فواتير معتمدة لتقديمها لشركات التأمين</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-accent shrink-0" />
                  <span className="text-lg">سحب السيارات المتضررة والمنقلبة باحترافية</span>
                </li>
              </ul>
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold h-14 px-8" asChild>
                <a href="tel:0500606861">طلب سطحة تقدير حوادث</a>
              </Button>
            </div>
            <div className="flex-1 relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
              <Image 
                src={PlaceHolderImages.find(img => img.id === 'taqdeer-service')?.imageUrl || ""} 
                alt="تقدير الحوادث في الرياض" 
                fill 
                className="object-cover"
                data-ai-hint="car service"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Areas Section - Optimized for Local SEO and Ad Relevance */}
      <section id="coverage" className="py-24 bg-muted/30 scroll-mt-32">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-headline mb-4">نصلك أينما كنت في أحياء الرياض</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground max-w-2xl mx-auto">سواء كنت تبحث عن سطحة في شمال، شرق، غرب، أو جنوب الرياض، فنحن نغطي كافة الأحياء لضمان وصول الخدمة إليك في أسرع وقت ممكن.</p>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full border border-primary/20 shadow-sm animate-pulse-subtle">
                <Zap className="h-5 w-5 text-accent fill-accent" />
                <span className="font-bold text-lg">سطحة قريبة منك في كل حي - وصول خلال دقائق</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(RIYADH_DISTRICTS).map(([region, districts]) => (
              <Card 
                key={region} 
                id={regionIds[region]} 
                className="border-2 border-primary/5 hover:border-primary/20 transition-all shadow-sm h-full group bg-white scroll-mt-28"
              >
                <CardHeader className="bg-primary/5 group-hover:bg-primary/10 transition-colors">
                  <CardTitle className="text-xl font-bold text-primary flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    {region.split(' (')[0]}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="flex flex-wrap gap-2">
                    {districts.map((district) => {
                      const cityName = district.split(' (')[0];
                      return (
                        <Badge key={district} variant="outline" className="bg-white hover:bg-primary/5 border-primary/10 text-xs font-medium py-1">
                          <CheckCircle className="h-3 w-3 ml-1 text-accent" />
                          {`سطحة حي ${cityName}`}
                        </Badge>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Detailed SEO Keywords for Google Ads Landing Experience */}
          <div className="mt-16 text-center text-xs text-muted-foreground/60 max-w-5xl mx-auto border-t pt-8">
            <p className="mb-4 leading-relaxed">
              نحن نوفر خدماتنا في كافة مناطق الرياض: سطحة الملز، سطحة العقيق، سطحة الياسمين، سطحة الصحافة، سطحة الملقا، سطحة الروضة، سطحة القدس، سطحة لبن، سطحة نمار، سطحة الشفا، سطحة العزيزية، سطحة العليا، سطحة السليمانية، سطحة النخيل، سطحة حطين، سطحة القيروان، سطحة المهدية، سطحة المربع، سطحة المعذر، سطحة الوزارات، سطحة النسيم، سطحة اليرموك، سطحة الخليج، سطحة الحمراء، سطحة غرناطة، سطحة الشهداء، سطحة إشبيلية، سطحة المونسية، سطحة الرمال، سطحة القادسية، سطحة طويق، سطحة العريجاء، سطحة البديعة، سطحة السويدي، سطحة الحائر، سطحة الدار البيضاء.
            </p>
            <p className="font-bold text-primary/80">
              خدماتنا تشمل: نقل سيارات، تقدير حوادث، سطحة هيدروليك، سطحة فل داون، مساعدة على الطريق، سحب سيارات، رقم سطحة الرياض 0500606861.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-12 border-t bg-white">
        <div className="container px-4 mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Truck className="h-6 w-6 text-primary" />
            <span className="font-bold text-primary text-xl">سطحة الرياض</span>
          </div>
          <p className="text-sm text-muted-foreground font-medium">© 2024 سطحة الرياض. جميع الحقوق محفوظة. رقم الاتصال: 0500606861</p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm hover:underline font-medium">سياسة الخصوصية</Link>
            <Link href="#" className="text-sm hover:underline font-medium">شروط الخدمة</Link>
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

function StatItem({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="bg-primary/5 p-3 rounded-full mb-1">{icon}</div>
      <p className="text-2xl font-bold text-primary">{value}</p>
      <p className="text-sm text-muted-foreground font-medium">{label}</p>
    </div>
  );
}
