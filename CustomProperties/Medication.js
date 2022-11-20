const medication = [
  {
    id: 1,
    title: 'DAFALGAN Supp 80 mg',
    manufacturer: 'UPSA Switzerland AG',
    characteristics: 'Analgetikum, Paracetamol',
    atc: 'N02BE01 Paracetamol',
    composition: 'Paracetamol (80 mg)',
    therapy: 'Analgetika/Antiphlogistika/Antirheumatika',
    indication: 'Leichte bis mässig starke Schmerzen, Fieber.',
    dosage: 'Dosierungsintervall: 6–8 h',
    contraindication:
      'Schwere Leberfunktionsstörung, akute Hepatitis, dekompensierte aktive Lebererkrankung, M. Meulengracht.',
    uri: 'https://documedis.hcisolutions.ch/2020-01/api/products/image/PICFRONT3D/productnumber/35594/350',
    stock: '50'
  },
  {
    id: 2,
    title: 'PARACETAMOL Axapharm Filmtabl 500 mg',
    manufacturer: 'Axapharm AG',
    characteristics: 'Analgetikum, Paracetamol',
    atc: 'N02BE01 Paracetamol',
    composition: 'Paracetamol (500 mg)',
    therapy: 'Analgetika/Antiphlogistika/Antirheumatika',
    indication: 'Leichte bis mässig starke Schmerzen, Fieber.',
    dosage: 'Dosierungsintervall: 4–8 h',
    contraindication:
      'Schwere Leberfunktionsstörung, akute Hepatitis, dekompensierte aktive Lebererkrankung, M. Meulengracht.',
    uri: 'https://documedis.hcisolutions.ch/2020-01/api/products/image/PICFRONT3D/productnumber/1406559/350',
    stock: '50'
  },
  {
    id: 3,
    title: 'BRUFEN Filmtabl 200 mg',
    manufacturer: 'Mylan Pharma GmbH',
    characteristics: 'Nicht-steroidales Antiphlogistikum (NSAR), Propionsäure-Derivat',
    atc: 'M01AE01 Ibuprofen',
    composition: 'Ibuprofen (200 mg)',
    therapy: 'Analgetika/Antiphlogistika/Antirheumatika',
    indication: 'Rheumatische Erkrankungen, Schmerzen, Dysmenorrhö, Kopfschmerzen, Migräne, Adjuvans bei Infektionen.',
    dosage:
      'In mehreren Gaben, evtl. erste Morgendosis nüchtern, weitere Dosen nach dem Essen; Granulat in min. 150 ml Wasser auflösen.',
    contraindication:
      'Aktive Magen-Darm-Ulzera oder gastrointestinale Blutungen (oder Anamnese von 2 Episoden von Ulzerationen oder Blutungen), entzündliche Darmerkrankung, gastrointestinale Blutungen oder Perforation nach NSAR, hämorrhagische Diathese, schwere Leberfunktionsstörung, schwere Niereninsuffizienz (Clcr <30 ml/Min.), schwere Herzinsuffizienz (NYHA III-IV), postoperative Schmerzen nach koronarem Bypass oder Einsatz von Herz-Lungen-Maschine. Schwangerschaft (3. Trimenon; 1. und 2. Trimenon «FI»), Stillzeit.',
    uri: 'https://documedis.hcisolutions.ch/2020-01/api/products/image/PICFRONT3D/productnumber/13701/350',
    stock: '76'
  },
  {
    id: 4,
    title: 'IRFEN DOLO forte Lactab 400 mg',
    manufacturer: 'Mepha Pharma AG',
    characteristics: 'Nicht-steroidales Antiphlogistikum (NSAR), Propionsäure-Derivat',
    atc: 'M01AE01 Ibuprofen',
    composition: 'Ibuprofen (400 mg)',
    therapy: 'Analgetika/Antiphlogistika/Antirheumatika',
    indication: 'Schmerzen, Fieber bei grippalen Erkrankungen.',
    dosage: 'Therapiedauer ohne ärztliche Verschreibung: max. 3 Tage.',
    contraindication:
      'Aktive Magen-Darm-Ulzera, gastrointestinale Blutungen, entzündliche Darmerkrankung, schwere Leberfunktionsstörung, schwere Niereninsuffizienz (Clcr <30 ml/Min.), schwere Herzinsuffizienz (NYHA III-IV), postoperative Schmerzen nach koronarem Bypass oder Einsatz von Herz-Lungen-Maschine. Schwangerschaft (3. Trimenon; 1. und 2. Trimenon «FI»), Stillzeit.',
    uri: 'https://documedis.hcisolutions.ch/2020-01/api/products/image/PICFRONT3D/productnumber/1383449/350',
    stock: '23'
  },
  {
    id: 5,
    title: 'TEMESTA Expidet Schmelztabl 1 mg',
    manufacturer: 'Pfizer AG',
    characteristics: 'Anxiolytikum, Benzodiazepin\nMissbrauchs- oder Abhängigkeitspotenzial',
    atc: 'N05BA06 Lorazepam',
    composition: 'Lorazepam (1 mg)',
    therapy: 'Anxiolytika',
    indication:
      'Erregungszustände; Angstzustände, Spannungszustände und damit verbundene Schlafstörungen; präoperative Sedation.',
    dosage:
      'Je nach Schweregrad der Symptomatik, der Dauer der Behandlung und entsprechend dem individuellen Bedarf 1 mg Lorazepam 2-3 mal täglich.',
    contraindication:
      'Myasthenia gravis, schwere Ateminsuffizienz, Schlafapnoe, schwere Leberinsuffizienz, schwere Niereninsuffizienz, Schock, Kollaps, Koma; akute Alkohol-, Psychopharmaka-, Schlafmittel- oder Schmerzmittelintoxikation; Abhängigkeit. Schwangerschaft, Stillzeit. <12 J.',
    uri: 'https://documedis.hcisolutions.ch/2020-01/api/products/image/PICFRONT3D/productnumber/20230/350',
    stock: '12'
  },
  {
    id: 6,
    title: 'COMIRNATY Original/Omicron BA.1 (iH 10/22)',
    manufacturer: 'Pfizer AG',
    description: 'Comirnaty Original/Omicron BA.1 Inj Emuls für Personen ab 18 Jahren (GRAUE Kappe)',
    characteristics: 'COVID-19-mRNA-Impfstoff',
    atc: 'J07BX03 COVID-19-Impfstoffe',
    composition: 'Tozinameran (15 mcg) , Riltozinameran (15 mcg)\nNeue aktive Substanz (NAS)',
    therapy: 'Immunologika',
    stock: '25'
  },
  {
    id: 7,
    title: 'INSULIN Insulatard HM',
    manufacturer: 'Novo Nordisk Pharma AG',
    characteristics: 'Humaninsulin, intermediärwirksam\nBiopharmazeutikum',
    atc: 'A10AC01 Human-Insulin',
    composition: 'Insulin-Isophan (human) (100 UI)',
    therapy: 'Antidiabetika',
    indication: 'Diabetes.',
    dosage:
      'S.c. Inj.; Wirkungseintritt: 1½ h, Wirkungsdauer: bis 24 h.\nErw., Kinder: individuell, allein oder in Kombination mit schnell wirkendem Insulin, meistens 0,3–1,0 E/kg/Tag.',
    uri: 'https://documedis.hcisolutions.ch/2020-01/api/products/image/PICFRONT3D/productnumber/29146/350',
    stock: '8'
  },
  {
    id: 8,
    title: 'ALGIFOR-L Filmtabl 200 mg',
    manufacturer: 'VERFORA SA',
    characteristics: 'Nicht-steroidales Antiphlogistikum (NSAR), Propionsäure-Derivat',
    atc: 'M01AE01 Ibuprofen',
    composition: 'Ibuprofen (200 mg)',
    therapy: 'Analgetika/Antiphlogistika/Antirheumatika',
    indication: 'Schmerzen, Fieber bei grippalen Erkrankungen.',
    dosage: 'Max. Therapiedauer ohne ärztliche Verschreibung: 3 Tage.',
    contraindication:
      'Aktive Magen-Darm-Ulzera, gastrointestinale Blutungen, entzündliche Darmerkrankung, schwere Leberfunktionsstörung, schwere Niereninsuffizienz (Clcr <30 ml/Min.), schwere Herzinsuffizienz (NYHA III-IV), postoperative Schmerzen nach koronarem Bypass oder Einsatz von Herz-Lungen-Maschine. Schwangerschaft (3. Trimenon; 1. und 2. Trimenon «FI»), Stillzeit.',
    uri: 'https://documedis.hcisolutions.ch/2020-01/api/products/image/PICFRONT3D/productnumber/1058987/350',
    stock: '17'
  },
  {
    id: 9,
    title: 'NACL Braun 0.9 % 5ml Mini Pl connect',
    manufacturer: 'B. Braun Medical AG',
    description: 'NaCl B. Braun Inf Lös 0.9 % 5ml Ecobag',
    characteristics: 'Elektrolytlösung i.v.',
    atc: 'B05BB01 Elektrolytlösungen',
    composition: 'Natriumchlorid (0.045 g)',
    therapy: 'Infundibilia',
    indication:
      'Hypotone Dehydratation, isotone Dehydratation, Hyponatriämie, Hypochlorämie, Flüssigkeitsersatz, kurzfristiger Volumenersatz, Trägerlösung, Unterhalt von venösen Zugängen.',
    dosage: 'I.v. Inf.',
    contraindication: 'Hyperhydratation, Hypernatriämie, Hyperchlorämie, hypertone Dehydratation.',
    stock: '30'
  },
  {
    id: 10,
    title: 'NACL Braun 0.9 % 50ml Ecofl pl',
    manufacturer: 'B. Braun Medical AG',
    description: 'NaCl B. Braun Inf Lös 0.9 % 50ml Ecoflac plus',
    characteristics: 'Elektrolytlösung i.v.',
    atc: 'B05BB01 Elektrolytlösungen',
    composition: 'Natriumchlorid (0.45 g)',
    therapy: 'Infundibilia',
    indication:
      'Hypotone Dehydratation, isotone Dehydratation, Hyponatriämie, Hypochlorämie, Flüssigkeitsersatz, kurzfristiger Volumenersatz, Trägerlösung, Unterhalt von venösen Zugängen.',
    dosage: 'I.v. Inf.',
    contraindication: 'Hyperhydratation, Hypernatriämie, Hyperchlorämie, hypertone Dehydratation.',
    stock: '25'
  },
  {
    id: 11,
    title: 'NACL Braun 0.9 % 100ml Miniflac',
    manufacturer: 'B. Braun Medical AG',
    description: 'NaCl B. Braun Inf Lös 0.9 % 100ml Miniflac',
    characteristics: 'Elektrolytlösung i.v.',
    atc: 'B05BB01 Elektrolytlösungen',
    composition: 'Natriumchlorid (0.9 g) , Natrium (7.7 mmol)',
    therapy: 'Infundibilia',
    indication:
      'Hypotone Dehydratation, isotone Dehydratation, Hyponatriämie, Hypochlorämie, Flüssigkeitsersatz, kurzfristiger Volumenersatz, Trägerlösung, Unterhalt von venösen Zugängen.',
    dosage: 'I.v. Inf.',
    contraindication: 'Hyperhydratation, Hypernatriämie, Hyperchlorämie, hypertone Dehydratation.',
    uri: 'https://documedis.hcisolutions.ch/2020-01/api/products/image/PICFRONT3D/productnumber/31316/350',
    stock: '10'
  },
  {
    id: 12,
    title: 'NACL Braun 0.9 % 10ml Mini Pl connect',
    manufacturer: 'B. Braun Medical AG',
    description: 'NaCl B. Braun Träger Lös 0.9 % 10ml Mini Plasco connect',
    characteristics: 'Elektrolytlösung i.v.',
    atc: 'B05BB01 Elektrolytlösungen',
    composition: 'Natriumchlorid (0.09 g)',
    therapy: 'Infundibilia',
    indication:
      'Hypotone Dehydratation, isotone Dehydratation, Hyponatriämie, Hypochlorämie, Flüssigkeitsersatz, kurzfristiger Volumenersatz, Trägerlösung, Unterhalt von venösen Zugängen.',
    dosage: 'I.v. Inf.',
    contraindication: 'Hyperhydratation, Hypernatriämie, Hyperchlorämie, hypertone Dehydratation.',
    stock: '23'
  },
  {
    id: 13,
    title: 'NACL Braun 0.9 % 20ml Mini Pl connect',
    manufacturer: 'B. Braun Medical AG',
    description: 'NaCl B. Braun Träger Lös 0.9 % 20ml Mini Plasco connect',
    characteristics: 'Elektrolytlösung i.v.',
    atc: 'B05BB01 Elektrolytlösungen',
    composition: 'Natriumchlorid (0.18 g)',
    therapy: 'Infundibilia',
    indication:
      'Hypotone Dehydratation, isotone Dehydratation, Hyponatriämie, Hypochlorämie, Flüssigkeitsersatz, kurzfristiger Volumenersatz, Trägerlösung, Unterhalt von venösen Zugängen.',
    dosage: 'I.v. Inf.',
    contraindication: 'Hyperhydratation, Hypernatriämie, Hyperchlorämie, hypertone Dehydratation.',
    stock: '23'
  },
  {
    id: 14,
    title: 'ASPIRIN CARDIO Filmtabl 100 mg',
    manufacturer: 'Bayer (Schweiz) AG',
    characteristics: 'Thrombozytenaggregationshemmer',
    atc: 'B01AC06 Acetylsalicylsäure, inkl. Lysinacetylsalicylat',
    composition: 'Acetylsalicylsäure (100 mg)',
    therapy: 'Antithrombotika',
    indication:
      'Prophylaxe von Schlaganfall nach TIA, Herzinfarktprophylaxe bei sehr hohem kardiovaskulärem Risiko, Reinfarktprophylaxe; Reokklusionsprophylaxe nach koronarem Bypass, PTCA oder arteriovenösem Shunt bei Dialysepatienten; instabile Angina pectoris, akuter Herzinfarkt, Prophylaxe von arteriellen Thrombosen nach gefässchirurgischen Eingriffen, Prophylaxe von Gefässverschlüssen bei arterieller Verschlusskrankheit.',
    dosage: 'Min. 30 Min. vor dem Essen.',
    contraindication:
      'Hämorrhagische Diathese, Magen-Darm-Ulzera, schwere Leberfunktionsstörungen, schwere Niereninsuffizienz, schwere dekompensierte Herzinsuffizienz, gleichzeitig mit Methotrexat ≥15 mg/Wo. Schwangerschaft (3. Trimenon; 1. und 2. Trimenon «FI»), Stillzeit (Dosen >300 mg tgl.).',
    uri: 'https://documedis.hcisolutions.ch/2020-01/api/products/image/PICFRONT3D/productnumber/32511/350',
    stock: '8'
  },
  {
    id: 15,
    title: 'ASPIRIN S Tabl 500 mg',
    manufacturer: 'Bayer (Schweiz) AG',
    characteristics: 'Analgetikum, Salicylat',
    atc: 'N02BA01 Acetylsalicylsäure, inkl. Lysinacetylsalicylat',
    composition: 'Acetylsalicylsäure (500 mg)',
    therapy: 'Analgetika/Antiphlogistika/Antirheumatika',
    indication:
      'Leichte bis mässig starke Schmerzen, Schmerzen und/oder Fieber bei Erkältungskrankheiten. 12–18 J.: 2. Wahl und nur auf ärztliche Verschreibung.',
    dosage: 'Nicht nüchtern einnehmen. Als Selbstmedikation während max. 3 Tagen.',
    contraindication:
      'Hämorrhagische Diathese, aktive Magen-Darm-Ulzera, gastrointestinale Blutung, entzündliche Darmerkrankung, schwere Leberfunktionsstörung, schwere Niereninsuffizienz (Clcr <30 ml/Min.), schwere Herzinsuffizienz (NYHA III-IV), gleichzeitig mit Methotrexat ≥15 mg/Wo., postoperative Schmerzen nach koronarem Bypass oder Einsatz von Herz-Lungen-Maschine. Schwangerschaft (3. Trimenon; 1. und 2. Trimenon «FI»), Stillzeit.',
    uri: 'https://documedis.hcisolutions.ch/2020-01/api/products/image/PICFRONT3D/productnumber/1277731/350',
    stock: '5'
  },
  {
    id: 16,
    title: 'XANAX retard Ret Tabl 0.5 mg',
    manufacturer: 'Pfizer PFE Switzerland GmbH',
    characteristics: 'Anxiolytikum, Benzodiazepin\nMissbrauchs- oder Abhängigkeitspotenzial',
    atc: 'N05BA12 Alprazolam',
    composition: 'Alprazolam (0.5 mg)',
    therapy: 'Anxiolytika',
    indication: 'Angst, Panikstörung.',
    dosage: 'Tabletten, in mehreren Gaben.',
    contraindication:
      'Myasthenia gravis, schwere Ateminsuffizienz, Schlafapnoe, schwere Leberinsuffizienz, gleichzeitig mit HIV-Protease-Inhibitoren oder Azol-Antimykotika. Schwangerschaft (1. Trimenon; 2. und 3. Trimenon «FI»), Stillzeit.',
    uri: 'https://documedis.hcisolutions.ch/2020-01/api/products/image/PICFRONT3D/productnumber/50667/350',
    stock: '0'
  },
  {
    id: 17,
    title: 'KEPPRA Filmtabl 250 mg',
    manufacturer: 'UCB-Pharma SA',
    characteristics: 'Antiepileptikum',
    atc: 'N03AX14 Levetiracetam',
    composition: 'Levetiracetam (250 mg)',
    therapy: 'Antiepileptika',
    indication:
      'Monotherapie von partiellen Epilepsien ab 16 J., Zusatztherapie von partiellen Epilepsien ab 1 Mon., Zusatztherapie von myoklonischen Anfällen bei juveniler myoklonischer Epilepsie ab 12 J., Zusatztherapie von primär generalisierten tonisch-klonischen Anfällen bei idiopathischer generalisierter Epilepsie ab 12 J.',
    dosage: 'Unabhängig der Mahlzeiten.',
    contraindication: 'Fortpflanzung bei der Frau, Schwangerschaft «FI», Stillzeit.',
    uri: 'https://documedis.hcisolutions.ch/2020-01/api/products/image/PICFRONT3D/productnumber/82935/350',
    stock: '5'
  }
];

export default medication;
