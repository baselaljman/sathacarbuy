
export const RIYADH_DISTRICTS = {
  "شمال الرياض (North)": [
    "الملقا (Al-Malqa)",
    "الصحافة (Al-Sahafa)",
    "الياسمين (Al-Yasmin)",
    "النفل (Al-Nafil)",
    "الغدير (Al-Ghadir)",
    "العقيق (Al-Aqiq)",
    "القيروان (Al-Qirawan)",
    "حطين (Hittin)",
    "النخيل (An Nakheel)",
    "الوادي (Al Wadi)",
    "المصيف (Al Masif)",
    "التعاون (At Taawun)",
    "الازدهار (Al Izdihar)",
    "الفلاح (Al Falah)",
    "الندى (An Nada)",
    "العارض (Al Arid)"
  ],
  "شرق الرياض (East)": [
    "الروضة (Al-Rawdah)",
    "القدس (Al-Quds)",
    "اليرموك (Al-Yarmouk)",
    "الحمراء (Al-Hamra)",
    "النهضة (Al-Nahda)",
    "غرناطة (Ghirnatah)",
    "الخليج (Al-Khaleej)",
    "الشهداء (Ash Shuhada)",
    "أشبيلية (Ishbilia)",
    "المؤنسية (Al Munsiyah)",
    "الرمال (Ar Rimal)",
    "القادسية (Al Qadisiyah)",
    "الريان (Ar Rayyan)",
    "السلام (As Salam)",
    "النسيم الشرقي (An Naseem)",
    "النسيم الغربي (An Naseem)"
  ],
  "غرب الرياض (West)": [
    "طويق (Tuwaiq)",
    "ظهرة لبن (Dhahrat Laban)",
    "العريجاء (Al-Uraija)",
    "البديعة (Al-Badi'ah)",
    "السويدي (Al-Suwaidi)",
    "نمار (Namar)",
    "الحزم (Al Hazm)",
    "الشفا الغربي (Al Shifa West)",
    "المهدية (Al Mahdiyah)",
    "ديراب (Dirab)"
  ],
  "جنوب الرياض (South)": [
    "الشفا (Al-Shifa)",
    "البطحاء (Al-Batha)",
    "العزيزية (Al-Aziziyah)",
    "الحائر (Al-Ha'ir)",
    "الدار البيضاء (Al-Dar Al-Baida)",
    "المروة (Al Marwah)",
    "المصانع (Al Masani)",
    "المنصورية (Al Mansouriyah)",
    "بدر (Badr)",
    "الفواز (Al Fawwaz)"
  ],
  "وسط الرياض (Central)": [
    "العليا (Al-Olaya)",
    "السليمانية (Al-Sulaimaniyah)",
    "المعذر (Al-Ma'ather)",
    "المربع (Al-Murabba)",
    "الوزارات (Al-Wazarat)",
    "الفخارية (Al-Fakhariyah)",
    "الملز (Al-Malaz)",
    "الضباط (Ad Dubbat)",
    "النموذجية (An Namudhajiyah)",
    "الناصرية (An Nasiriyah)"
  ]
};

export type DistrictKey = keyof typeof RIYADH_DISTRICTS;
