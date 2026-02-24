
"use client";

import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RIYADH_DISTRICTS, DistrictKey } from "@/lib/riyadh-districts";
import { IssueAssistant } from "@/components/IssueAssistant";
import { MapPin, Truck, CheckCircle2, Car, ChevronRight, ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function RequestPage() {
  const [step, setStep] = useState(1);
  const router = useRouter();
  
  // Form State
  const [location, setLocation] = useState({
    district: "" as DistrictKey | "",
    subDistrict: ""
  });
  const [vehicle, setVehicle] = useState({
    make: "",
    model: "",
    plate: ""
  });
  const [issueSummary, setIssueSummary] = useState("");

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleSubmit = () => {
    // Mock submit
    router.push("/tracking");
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navigation />
      
      <main className="container flex-1 py-12 px-4 max-w-4xl mx-auto">
        {/* Progress Header */}
        <div className="flex items-center justify-center mb-10 gap-4">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div className={cn(
                "h-8 w-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors",
                step >= s ? "bg-primary text-white" : "bg-gray-300 text-gray-500"
              )}>
                {s}
              </div>
              {s < 3 && <div className={cn("h-1 w-12 rounded", step > s ? "bg-primary" : "bg-gray-300")} />}
            </div>
          ))}
        </div>

        <div className="animate-fade-in">
          {step === 1 && (
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="text-primary h-6 w-6" />
                  Select Location
                </CardTitle>
                <CardDescription>Where do you need the tow truck? Coverage in all Riyadh districts.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Riyadh District (الحي الرئيسي)</Label>
                  <Select onValueChange={(val) => setLocation(prev => ({ ...prev, district: val as DistrictKey, subDistrict: "" }))}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select District" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.keys(RIYADH_DISTRICTS).map((d) => (
                        <SelectItem key={d} value={d}>{d}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {location.district && (
                  <div className="space-y-2">
                    <Label>Neighborhood (الحي الفرعي)</Label>
                    <Select onValueChange={(val) => setLocation(prev => ({ ...prev, subDistrict: val }))}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select Neighborhood" />
                      </SelectTrigger>
                      <SelectContent>
                        {RIYADH_DISTRICTS[location.district as DistrictKey].map((n) => (
                          <SelectItem key={n} value={n}>{n}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                <div className="pt-4">
                  <div className="h-48 w-full bg-muted rounded-lg flex items-center justify-center border-2 border-dashed relative overflow-hidden">
                    <div className="absolute inset-0 bg-blue-50/50 flex flex-col items-center justify-center gap-2">
                       <MapPin className="h-10 w-10 text-primary/40" />
                       <span className="text-xs text-muted-foreground font-medium">Map View (Interactive Placeholder)</span>
                    </div>
                  </div>
                </div>

                <Button className="w-full h-12 text-lg" disabled={!location.subDistrict} onClick={nextStep}>
                  Next: Vehicle Details <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Car className="text-primary h-6 w-6" />
                    Vehicle Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Vehicle Make</Label>
                    <Input placeholder="e.g. Toyota" value={vehicle.make} onChange={e => setVehicle(p => ({ ...p, make: e.target.value }))} />
                  </div>
                  <div className="space-y-2">
                    <Label>Model & Year</Label>
                    <Input placeholder="e.g. Camry 2022" value={vehicle.model} onChange={e => setVehicle(p => ({ ...p, model: e.target.value }))} />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label>Plate Number (Optional)</Label>
                    <Input placeholder="e.g. ABC 1234" value={vehicle.plate} onChange={e => setVehicle(p => ({ ...p, plate: e.target.value }))} />
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-2">
                <h3 className="text-lg font-bold flex items-center gap-2 mb-2">
                   Tell us what happened
                </h3>
                <IssueAssistant onSummary={(summary) => {
                  setIssueSummary(summary);
                }} />
                {issueSummary && (
                  <div className="bg-white p-4 rounded-lg border-2 border-accent/30 mt-4 shadow-sm">
                    <p className="text-xs font-bold text-accent mb-1 uppercase tracking-wider">Confirmed Summary</p>
                    <p className="text-sm">{issueSummary}</p>
                  </div>
                )}
              </div>

              <div className="flex gap-4">
                <Button variant="outline" className="w-1/3 h-12" onClick={prevStep}>
                  <ChevronLeft className="mr-2 h-5 w-5" /> Back
                </Button>
                <Button className="flex-1 h-12 text-lg" disabled={!vehicle.make || !issueSummary} onClick={nextStep}>
                  Review & Confirm <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <Card className="shadow-lg border-2 border-primary/10">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">Review Your Request</CardTitle>
                <CardDescription>Confirm details before we dispatch the nearest tow truck.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-muted/30 rounded-xl">
                  <div className="space-y-1">
                    <p className="text-xs font-semibold text-muted-foreground">LOCATION</p>
                    <p className="font-bold">{location.subDistrict}, {location.district}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-semibold text-muted-foreground">VEHICLE</p>
                    <p className="font-bold">{vehicle.make} {vehicle.model}</p>
                  </div>
                  <div className="space-y-1 md:col-span-2">
                    <p className="text-xs font-semibold text-muted-foreground">PROBLEM DESCRIPTION</p>
                    <p className="text-sm italic">"{issueSummary}"</p>
                  </div>
                </div>

                <div className="p-4 bg-accent/10 border border-accent/20 rounded-lg flex items-center gap-3">
                  <Truck className="h-6 w-6 text-accent" />
                  <div>
                    <p className="text-sm font-bold">Estimated Dispatch Time</p>
                    <p className="text-xs text-muted-foreground">Estimated 12-18 minutes to Al-Malqa area.</p>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <Button className="w-full h-14 text-xl font-bold shadow-lg shadow-primary/20" onClick={handleSubmit}>
                    Dispatch Tow Truck Now
                  </Button>
                  <Button variant="ghost" className="w-full" onClick={prevStep}>
                    Edit Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
}

// Utility to handle conditional classes easily
function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
