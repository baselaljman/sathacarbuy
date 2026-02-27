import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { FloatingContactButtons } from "@/components/FloatingContactButtons";
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'سطحة الرياض | أسرع خدمة نقل سيارات 24 ساعة 0500606861',
  description: 'أفضل خدمة سطحة في الرياض (شمال، شرق، غرب، جنوب). سطحة الملز، العقيق، الياسمين، نمار، لبن. نقل سيارات متعطلة ومصدومة، تقدير حوادث، سطحة هيدروليك وعادية. نصلك في 15 دقيقة.',
  keywords: [
    'سطحة الرياض', 'رقم سطحة الرياض', 'سطحة شمال الرياض', 'سطحة شرق الرياض', 'سطحة غرب الرياض', 'سطحة جنوب الرياض',
    'سطحة الملز', 'سطحة العقيق', 'سطحة الياسمين', 'سطحة الصحافة', 'سطحة الملقا', 'سطحة الروضة',
    'سطحة لبن', 'سطحة نمار', 'سطحة الشفا', 'سطحة العزيزية', 'سطحة السليمانية', 'سطحة العليا',
    'نقل سيارات الرياض', 'تقدير الحوادث الرياض', 'سطحة هيدروليك الرياض', 'سطحة الرياض 24 ساعة',
    'ارخص سطحة في الرياض', 'سطحة الرمال', 'سطحة القادسية', 'سطحة المونسية', 'سطحة طويق'
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17766606847"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17766606847');
          `}
        </Script>
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        {children}
        <FloatingContactButtons />
        <Toaster />
      </body>
    </html>
  );
}
