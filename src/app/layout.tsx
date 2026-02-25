import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { FloatingContactButtons } from "@/components/FloatingContactButtons";

export const metadata: Metadata = {
  title: 'سطحة الرياض | أفضل خدمة سطحة في جميع أحياء الرياض 0500606861',
  description: 'أسرع سطحة في الرياض لنقل السيارات المتعطلة والمصدومة. نغطي أحياء شمال، شرق، غرب، وجنوب الرياض: سطحة الملز، سطحة العقيق، سطحة الياسمين، سطحة نمار، سطحة الشفا، وسطحة لبن. متوفرون 24 ساعة.',
  keywords: [
    'سطحة الرياض', 'سطحة شمال الرياض', 'سطحة شرق الرياض', 'سطحة غرب الرياض', 'سطحة جنوب الرياض',
    'سطحة الملز', 'سطحة العقيق', 'سطحة الياسمين', 'سطحة الصحافة', 'سطحة الملقا', 'سطحة الروضة',
    'سطحة لبن', 'سطحة نمار', 'سطحة الشفا', 'سطحة العزيزية', 'سطحة السليمانية', 'سطحة العليا',
    'نقل سيارات الرياض', 'تقدير الحوادث الرياض', 'سطحة هيدروليك الرياض', 'رقم سطحة الرياض'
  ],
  alternates: {
    canonical: 'https://xn--ogbhrq.vip/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Kufi+Arabic:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        {children}
        <FloatingContactButtons />
        <Toaster />
      </body>
    </html>
  );
}
