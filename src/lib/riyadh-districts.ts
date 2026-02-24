
export const RIYADH_DISTRICTS = {
  "North (شمال الرياض)": [
    "Al-Malqa (الملقا)",
    "Al-Sahafa (الصحافة)",
    "Al-Yasmin (الياسمين)",
    "Al-Nafil (النفل)",
    "Al-Ghadir (الغدير)",
    "Al-Aqiq (العقيق)",
    "Al-Qirawan (القيروان)",
    "Al-Munsiyah (المونسية)"
  ],
  "East (شرق الرياض)": [
    "Al-Rawdah (الروضة)",
    "Al-Quds (القدس)",
    "Al-Yarmouk (اليرموك)",
    "Al-Hamra (الحمراء)",
    "Al-Nahda (النهضة)",
    "Ghirnatah (غرناطة)",
    "Al-Khaleej (الخليج)"
  ],
  "West (غرب الرياض)": [
    "Tuwaiq (طويق)",
    "Dhahrat Laban (ظهرة لبن)",
    "Al-Uraija (العريجاء)",
    "Al-Badi'ah (البديعة)",
    "Al-Suwaidi (السويدي)"
  ],
  "South (جنوب الرياض)": [
    "Al-Shifa (الشفا)",
    "Al-Batha (البطحاء)",
    "Al-Aziziyah (العزيزية)",
    "Al-Ha'ir (الحائر)",
    "Al-Dar Al-Baida (الدار البيضاء)"
  ],
  "Central (وسط الرياض)": [
    "Al-Olaya (العليا)",
    "Al-Sulaimaniyah (السليمانية)",
    "Al-Ma'ather (المعذر)",
    "Al-Murabba (المربع)"
  ]
};

export type DistrictKey = keyof typeof RIYADH_DISTRICTS;
