import type { ProductPageData } from '@/components/design-system/ProductDetailLayout';

export const deProductPages: Record<string, ProductPageData> = {
  lvmc: {
    seoTitle: 'Digitale Lichtvorhänge / Lichtgitter LVMC',
    seoDescription:
      'Digitale Lichtvorhänge LVMC zum Erfassen, Zählen, Messen und Klassifizieren. Selbstlernender Automatikmodus, Objektklassifizierung, Analyse und Statistik.',
    title: 'Digitale Lichtvorhänge / Lichtgitter LVMC',
    subtitle: 'Zum Erfassen, Zählen, Messen und Klassifizieren',
    downloads: [
      {
        label: 'Prospekt zum digitalen Lichtvorhang LVMC',
        href: '/downloads/doc/sensors/Lichtvorhang_LVMC_Flyer.pdf',
      },
      {
        label: 'Kurzanleitung zum digitalen Lichtvorhang LVMC',
        href: '/downloads/doc/sensors/Lichtvorhang_LVMC_Kurzanleitung.pdf',
      },
      {
        label: 'Benutzerhandbuch zum digitalen Lichtvorhang LVMC',
        href: '/downloads/doc/sensors/Lichtvorhang_LVMC_Benutzerhandbuch.pdf',
      },
      {
        label:
          'LVMC CMT (Windows-basierte Software für Konfiguration, Bedienung, Analyse und Überwachung)',
        href: '/downloads/sw/sensors/lvmc/cmt/lvmc_cmt_a2_latest_setup.zip',
      },
      {
        label: 'LVMC RC (Windows-basierte Software zur Fernsteuerung über Ethernet)',
        href: '/downloads/sw/sensors/lvmc/rc/lvmc_rc_latest.zip',
      },
    ],
    sections: [
      {
        heading: 'Eigenschaften',
        items: [
          'selbstlernender Automatikmodus',
          'Objektklassifizierung in bis zu vier Gruppen',
          'Analysefunktion, Objekt-Visualisierung, Statistikfunktion',
          'Grössenmessung, Geschwindigkeitsmessung, Ersatz für Kamerasysteme',
          'lückenloses Tastfeld, hohe Abtastrate',
          'Erkennung von komplizierten Formen',
          'Erkennung von hängengebliebenen oder nicht separierten Objekten',
          'Verschmutzungsüberwachung',
          'Protokollierung von aufgetretenen Fehlzuständen',
          'hohe Betriebssicherheit, unempfindlich gegenüber Umwelteinflüssen',
          'flexibel konfigurierbare Ein- und Ausgänge (Optokoppler), Status-LED',
          'Bedienung über USB und Ethernet, fernsteuerbar über Ethernet',
          'HTTP-Server, DHCP-Client, NTP-Client',
          'robustes Metallgehäuse, in verschiedenen Dimensionen lieferbar',
          'Versorgungsspannung: +24V oder Ethernet (PoE)',
        ],
      },
    ],
    tables: [
      {
        heading: 'Lieferbare Standard-Ausführungen',
        headers: ['Artikelbezeichnung', 'minimale Objektgrösse', 'Tastfeldgrösse', 'Aussenmasse'],
        rows: [
          ['LVMC100/50M', '1mm', '100mm x 52mm', '160mm x 165mm'],
          ['LVMC100/100M', '1mm', '100mm x 100mm', '160mm x 213mm'],
          ['LVMC150/50M', '1mm', '150mm x 52mm', '210mm x 165mm'],
          ['LVMC150/100M', '1mm', '150mm x 100mm', '210mm x 213mm'],
          ['LVMC150/150M', '1mm', '150mm x 150mm', '210mm x 263mm'],
          ['LVMC200/100M', '2mm', '200mm x 100mm', '260mm x 213mm'],
          ['LVMC200/200M', '2mm', '200mm x 200mm', '260mm x 313mm'],
          ['LVMC250/100M', '3mm', '250mm x 100mm', '310mm x 213mm'],
          ['LVMC250/250M', '3mm', '250mm x 250mm', '310mm x 363mm'],
          ['LVMC300/100M', '4mm', '300mm x 100mm', '360mm x 213mm'],
          ['LVMC300/200M', '4mm', '300mm x 200mm', '360mm x 313mm'],
          ['LVMC400/400M', '8mm', '400mm x 400mm', '460mm x 513mm'],
        ],
      },
    ],
  },

  lvm: {
    seoTitle: 'Lichtvorhänge / Lichtgitter LV...M',
    seoDescription:
      'Lichtvorhänge LV...M zum Erfassen und Zählen von Kleinteilen. Lückenloses Tastfeld, hohe Abtastrate, Erkennung kleiner Objekte ab ø0.6mm.',
    title: 'Lichtvorhänge / Lichtgitter LV...M',
    subtitle: 'Erfassen und Zählen von Kleinteilen jeglicher Art',
    downloads: [
      {
        label: 'Prospekt zum Lichtvorhang LV...M',
        href: '/downloads/doc/sensors/Lichtvorhang_LV..M_Flyer.pdf',
      },
      {
        label: 'Datenblatt zum Lichtvorhang LV...M',
        href: '/downloads/doc/sensors/Lichtvorhang_LV...M.pdf',
      },
    ],
    sections: [
      {
        heading: 'Eigenschaften',
        items: [
          'lückenloses Tastfeld',
          'hohe Abtastrate',
          'drei anpassbare Ansprechempfindlichkeitsstufen',
          'hohe Betriebssicherheit',
          'unempfindlich gegenüber Umwelteinflüssen',
          'positions- und lageunabhängige Objekterkennung',
          'sichere Erkennung von komplizierten Formen',
          'Erkennung von kleinen Objekten (minimal ø0.6mm)',
          'Vermeidung von Mehrfachzählungen',
          'Signalisierung von hängengebliebenen Objekten',
          'integrierte Funktionsüberwachung (Watchdog)',
          'Verschmutzungsüberwachung mit Warnsignal',
          'Betrieb mit oder ohne Tastfeldbegrenzung',
          'Auswahl der aktiven Ansprechempfindlichkeitsstufe über digitale Eingänge oder über Wahlschalter',
          'Ansprechempfindlichkeit nicht durch kontinuierliche Verschmutzung beeinträchtigt',
          'flexibel konfigurierbare D-Sub-Schnittstelle',
          'isolierte Optokopplerausgänge und -eingänge',
          'bei kleinem Tastfeld (minimal 30x30mm) oder engen Platzverhältnissen mit externem Steuergerät lieferbar (LVE)',
          'robustes Metallgehäuse',
          'in vielen verschiedenen Dimensionen verfügbar',
          'Versorgungsspannung: +24V',
        ],
      },
    ],
    tables: [
      {
        heading: 'Auswahl lieferbarer Standard-Ausführungen',
        headers: ['Artikelbezeichnung', 'minimale Objektgrösse', 'Tastfeldgrösse', 'Aussenmasse'],
        rows: [
          ['LV100M', '1mm', '100mm x 100mm', '160mm x 213mm'],
          ['LV150M', '1mm', '150mm x 100mm', '210mm x 213mm'],
          ['LV200M', '1mm', '200mm x 100mm', '260mm x 213mm'],
          ['LV250M', '1mm', '250mm x 100mm', '310mm x 213mm'],
          ['LV300M', '2mm', '300mm x 100mm', '360mm x 213mm'],
          ['LV100/50M', '0.6mm', '100mm x 52mm', '160mm x 165mm'],
          ['LV150/50M', '0.6mm', '150mm x 52mm', '210mm x 165mm'],
          ['LV150/150M', '2mm', '150mm x 150mm', '210mm x 263mm'],
          ['LV200/200M', '3mm', '200mm x 200mm', '260mm x 313mm'],
          ['LV250/250M', '5mm', '250mm x 250mm', '310mm x 363mm'],
          ['LV300/200M', '4mm', '300mm x 200mm', '360mm x 313mm'],
          ['LV400/400M', '8mm', '400mm x 400mm', '460mm x 513mm'],
          ['LVE30/30M', '0.6mm', '30mm x 30mm', '90mm x 91mm'],
          ['LVE50/50M', '0.6mm', '50mm x 50mm', '110mm x 115mm'],
        ],
      },
    ],
  },

  'g15-g35': {
    seoTitle: 'Messlichtschranken G15 / G35',
    seoDescription:
      'Messlichtschranken G15 und G35 für Längenmess-Systeme oder als Lichtvorhänge zur Objekterkennung. Ansprechzeit 100µs, Genauigkeit bis ±0.5mm.',
    title: 'Messlichtschranken G15 / G35',
    subtitle:
      'Spezial-Lichtschranken zum Einsatz in Längenmess-Systemen oder als Lichtvorhänge',
    downloads: [
      {
        label: 'Datenblatt zur Messlichtschranke G15',
        href: '/downloads/doc/sensors/Messlichtschranke_G15.pdf',
      },
      {
        label: 'Datenblatt zur Messlichtschranke G35',
        href: '/downloads/doc/sensors/Messlichtschranke_G35.pdf',
      },
    ],
    sections: [
      {
        heading: 'G35: Eigenschaften',
        items: [
          'Einsatz als Lichtschranke in Längenmess-Systemen oder als Lichtvorhang zur Objekterkennung',
          'hohe Betriebssicherheit auch unter erschwerten Bedingungen',
          'Lichtgitter aus 6 Strahlengängen',
          'Lichtgitterhöhe: 40mm bis 65mm (typabhängig)',
          'Ansprechzeit (Objekteintritt und -austritt): 100us',
          'Auflösung: 8mm bis 12mm (typabhängig)',
          'Genauigkeit: ±0.5mm oder ±0.8mm (typabhängig)',
          'Wiederholgenauigkeit: 0.1mm oder 0.2mm (typabhängig)',
          'Abstand Sender zu Empfänger: bis zu 700mm (typabhängig)',
          'zwei isolierte Optokoppler-Schaltausgänge mit hoher Belastbarkeit (30V/100mA)',
          'robustes Metallgehäuse, Schutzart IP65',
          'Versorgungsspannung: 12V DC, 24V DC oder 24V AC',
        ],
      },
      {
        heading: 'G15: Eigenschaften',
        items: [
          'Einsatz als Lichtschranke in Längenmess-Systemen',
          'hohe Betriebssicherheit auch unter erschwerten Bedingungen',
          'Ansprechzeit (Objekteintritt und -austritt): 100us',
          'Genauigkeit: ±0.5mm bis ±1.0mm (typabhängig)',
          'Wiederholgenauigkeit: 0.1mm bis 0.3mm (typabhängig)',
          'Abstand Sender zu Empfänger: bis zu 1m (typabhängig)',
          'isolierter Optokoppler-Schaltausgang mit hoher Belastbarkeit (30V/100mA)',
          'robustes Metallgehäuse, Schutzart IP65',
          'Versorgungsspannung: 12V DC, 24V DC oder 24V AC',
        ],
      },
    ],
    tables: [
      {
        heading: 'G35: Lieferbare Standard-Ausführungen',
        headers: ['Parameter', 'G35EF1Vx', 'G35EF2Vx', 'G35EF3Vx', 'G35EF4Vx', 'G35EF5Vx'],
        rows: [
          ['Lichtgitterhöhe', '51.5mm', '51.5mm', '40mm', '65mm', '51.5mm'],
          ['Maximalabstand Sender zu Empfänger', '200mm', '350mm', '200mm', '200mm', '700mm'],
          ['Auflösung (Abstand der Stahlengänge)', '10mm', '10mm', '8mm', '12mm', '10mm'],
          ['Genauigkeit (Richtigkeit)', '±0.5mm', '±0.8mm', '±0.5mm', '±0.5mm', '±0.8mm'],
          ['Wiederholgenauigkeit (Präzision)', '0.1mm', '0.2mm', '0.1mm', '0.1mm', '0.2mm'],
        ],
      },
      {
        heading: 'G15: Lieferbare Standard-Ausführungen',
        headers: ['Parameter', 'G15E1xF10', 'G15E2xF20', 'G15E3xF30', 'G15E4xF40'],
        rows: [
          ['Maximalabstand Sender zu Empfänger', '200mm', '500mm', '700mm', '1000mm'],
          ['Genauigkeit (Richtigkeit)', '±0.5mm', '±0.8mm', '±1.0mm', '±1.0mm'],
          ['Wiederholgenauigkeit (Präzision)', '0.1mm', '0.2mm', '0.3mm', '0.3mm'],
        ],
      },
    ],
  },

  og: {
    seoTitle: 'Inkrementale Drehgeber OG23D / OG28D',
    seoDescription:
      'Robuste fotoelektrische Inkrementalgeber OG23D und OG28D für den Einsatz unter erschwerten Bedingungen. Auflösung bis 625 Impulse/U.',
    title: 'Inkrementale Drehgeber OG23D / OG28D',
    subtitle: 'Robuste fotoelektrische Inkrementalgeber für den Einsatz unter erschwerten Bedingungen',
    downloads: [
      {
        label: 'Datenblatt zum Inkrementalgeber OG',
        href: '/downloads/doc/sensors/Inkrementalgeber_OG.pdf',
      },
    ],
    sections: [
      {
        heading: 'Eigenschaften',
        items: [
          'hohe Betriebssicherheit unter erschwerten Bedingungen',
          'langlebiger mechanisch-fotoelektrischer Aufbau',
          'Auflösung: 375, 471, 500 oder 625 Impulse/U',
          'Rechtecksignale A, B und Referenzimpuls C',
          'mit oder ohne invertierte Signale (typanhängig)',
          'Wellenbelastbarkeit: bis zu 100N radial und 10N axial',
          'maximale Drehzahl: 5000U/min',
          'maximale Frequenz: 100kHz',
          'geringe Phasenverschiebung, hohe Signalqualität',
          'Ausgangssignale mit hoher Belastbarkeit bei geringem Spannungsabfall',
          'mit Anschlussstecker oder Anschlusskabel',
          'unempfindlich gegenüber Umwelteinflüssen',
          'äusserst robustes Metallgehäuse, Schutzart IP65',
          'Versorgungsspannung: 12V DC',
        ],
      },
    ],
    tables: [
      {
        heading: 'Lieferbare Standard-Ausführungen',
        headers: ['Ausführung', 'Auflösung', 'Anschluss', 'invertierte Signale'],
        rows: [
          ['OG23D375Q', '375 Impulse/U', '1.5m Anschlusskabel', 'JA'],
          ['OG23D471Q', '471 Impulse/U', '1.5m Anschlusskabel', 'JA'],
          ['OG23D625Q', '625 Impulse/U', '1.5m Anschlusskabel', 'JA'],
          ['OG23D500Q', '500 Impulse/U', '1.5m Anschlusskabel', 'JA'],
          ['OG23D500N', '500 Impulse/U', 'Anschlussstecker', 'JA'],
          ['OG28D500Q', '500 Impulse/U', '1.5m Anschlusskabel', 'NEIN'],
          ['OG28D500N', '500 Impulse/U', 'Anschlussstecker', 'NEIN'],
          ['OG28D625Q', '625 Impulse/U', '1.5m Anschlusskabel', 'NEIN'],
        ],
      },
    ],
  },

  'irv-irt': {
    seoTitle: 'Selbstjustierende Induktive Ringtaster IRV / IRT',
    seoDescription:
      'Selbstjustierende induktive Ringtaster IRV und IRT für berührungsloses Erfassen von metallischem Material in Rohrbearbeitungsmaschinen.',
    title: 'Selbstjustierende Induktive Ringtaster IRV / IRT',
    subtitle: 'Berührungsloses Erfassen von metallischem Material',
    downloads: [
      {
        label: 'Datenblatt zur Induktiven Tastspule IRT',
        href: '/downloads/doc/sensors/Induktive_Tastspule_IRT.pdf',
      },
      {
        label: 'Datenblatt zum Selbstjustierenden Steuergerät IRV20',
        href: '/downloads/doc/sensors/Steuergeraet_IRV20.pdf',
      },
      {
        label: 'Datenblatt zum Steuergerät IRV10',
        href: '/downloads/doc/sensors/Steuergeraet_IRV10.pdf',
      },
      {
        label: 'Datenblatt zum Steuergerät IRV11',
        href: '/downloads/doc/sensors/Steuergeraet_IRV11.pdf',
      },
    ],
    sections: [
      {
        heading: 'Tastspulen IRT: Eigenschaften',
        items: [
          'typische Einsatzgebiete: Rohrbearbeitungsmaschinen (Richten, Pilgern), Rohrzuführungen über Dornstangen',
          'hohe Betriebssicherheit unter erschwerten Bedingungen',
          'positions- und lageunabhängige Objekterfassung',
          'unempfindlich gegen nichtmetallische Verschmutzung',
          'unempfindlich gegenüber Umwelteinflüsse wie Temperatur und Feuchtigkeit',
          'Ansprechempfindlichkeit weitgehend konstant über den gesamten Sensorbereich',
          'Erkennung auch von kleinen Objekten (ferromagnetisches Stangenmaterial mit ø1.25mm)',
          'in vielen verschiedenen Dimensionen verfügbar',
          'äusserst robuste Ausführung, Schutzart IP65',
          'Spulenkörper aus langlebigem massivem Kunststoff',
          'Tastspule im Spulenkörper versiegelt eingelassen',
          'bis zu 3m langes Verbindungskabel zwischen IRT und IRV',
        ],
      },
      {
        heading: 'Steuergerät IRV20: Eigenschaften',
        items: [
          'automatischer Ausgleich umgebender Metallmassen',
          'automatischer Ausgleich umgebender Felder',
          'automatische Einstellung der optimalen Ansprechempfindlichkeit bezogen auf die Eintauchtiefe des Materials in die Tastspule',
          'Justierung bleibt über Netz-Aus gespeichert',
          'hohe Betriebssicherheit unter erschwerten Bedingungen',
          'isolierte Optokoppler-Schaltausgänge mit hoher Belastbarkeit (30V/100mA)',
          'isolierte Optokoppler-Schalteingänge',
          'robustes Metallgehäuse, Schutzart IP65',
          'Versorgungsspannung: 24V DC oder 24V AC',
        ],
      },
    ],
    tables: [
      {
        heading: 'Tastspulen IRT: Lieferbare Standard-Ausführungen',
        headers: ['Artikelbezeichnung', 'Tastspulen-Durchmesser', 'Aussen-Abmessungen'],
        rows: [
          ['IRT25A', '25mm', '90mm x 97mm'],
          ['IRT40A', '40mm', '100mm x 106mm'],
          ['IRT50A', '50mm', '100mm x 112mm'],
          ['IRT60A', '60mm', '120mm x 120mm'],
          ['IRT75A', '75mm', '135mm x 135mm'],
          ['IRT100A', '100mm', '150mm x 153mm'],
          ['IRT150A', '150mm', '210mm x 210mm'],
          ['IRT200A', '200mm', '260mm x 260mm'],
          ['IRT250A', '250mm', '310mm x 310mm'],
          ['IRT300A', '300mm', '380mm x 380mm'],
        ],
      },
    ],
  },

  igv: {
    seoTitle: 'Mehrfach-Inkrementalgeberverzweigungen IGV',
    seoDescription:
      'Inkrementalgeber-Verzweigungen IGV zum potentialfreien Anschluss eines Gebers an bis zu drei Ziel-Baugruppen.',
    title: 'Mehrfach-Inkrementalgeberverzweigungen IGV',
    subtitle:
      'Zum potentialfreien Anschluss eines Inkrementalgebers an bis zu drei Ziel-Baugruppen (CNC, SPS, Messgeräte, usw.)',
    downloads: [
      {
        label: 'Datenblatt zur Inkrementalgeber-Verzweigung IGV-133',
        href: '/downloads/doc/sensors/Inkrementalgeber-Verzweigung_IGV-133.pdf',
      },
      {
        label: 'Datenblatt zur Inkrementalgeber-Verzweigung IGV-233',
        href: '/downloads/doc/sensors/Inkrementalgeber-Verzweigung_IGV-233.pdf',
      },
      {
        label: 'Datenblatt zur Inkrementalgeber-Verzweigung IGV-134',
        href: '/downloads/doc/sensors/Inkrementalgeber-Verzweigung_IGV-134.pdf',
      },
      {
        label: 'Datenblatt zur Inkrementalgeber-Verzweigung IGV-334',
        href: '/downloads/doc/sensors/Inkrementalgeber-Verzweigung_IGV-334.pdf',
      },
      {
        label: 'Datenblatt zur Inkrementalgeber-Verzweigung IGV-634',
        href: '/downloads/doc/sensors/Inkrementalgeber-Verzweigung_IGV-634.pdf',
      },
    ],
    sections: [
      {
        heading: 'Eigenschaften',
        items: [
          'potentialgetrennte Inkrementalgeberanschlüsse für bis zu drei Zielgeräte',
          'verschiedene Varianten für unterschiedliche Signalpegel an den Zielgeräten: +5V..15V oder +10V...+30V',
          'standardmässige Unterstützung der Inkrementalgeber-Kanäle A, B, C und deren invertierter Signale, sowie wahlweise des Kanals D zur Weiterleitung eines Geberüberwachungssignals',
          'kompakte Bauweise für Hutschienenmontage (Tragschienen TS32 und TS35)',
          '5V, 12V oder 15V Versorgungsspannung für den angeschlossenen Inkrementalgeber',
        ],
      },
    ],
    tables: [
      {
        heading: 'Lieferbare Standard-Ausführungen',
        headers: [
          'Artikelbezeichnung',
          'verfügbare Kanäle',
          'maximale Signalfrequenz',
          'Stromversorgung Inkrementalgeber',
          'Stromversorgung Ausgang 1 (X3)',
          'Stromversorgung Ausgang 2 (X4)',
          'Stromversorgung Ausgang 3 (X5)',
        ],
        rows: [
          [
            'IGV-133',
            'A, B, C\nA, B, C invertiert',
            '500kHz',
            '+5V, +12V\nmax. 300mA',
            '+5V..+15V\nmax. 85mA',
            '+5V..+15V\nmax. 85mA',
            '+5V..+15V\nmax. 85mA',
          ],
          [
            'IGV-233',
            'A, B, C\nA, B, C invertiert',
            '300kHz',
            '+5V, +12V\nmax. 300mA',
            '+5V..+15V\nmax. 85mA',
            '+5V..+15V\nmax. 85mA',
            '+10V..+30V\nmax. 160mA',
          ],
          [
            'IGV-134',
            'A, B, C, D\nA, B, C, D invertiert',
            '500kHz',
            '+5V, +12V\nmax. 300mA',
            '+5V..+15V\nmax. 85mA',
            '+5V..+15V\nmax. 85mA',
            '+5V..+15V\nmax. 85mA',
          ],
          [
            'IGV-334',
            'A, B, C, D\nA, B, C, D invertiert',
            '300kHz',
            '+5V, +12V\nmax. 300mA',
            '+10V..+30V\nmax. 160mA',
            '+10V..+30V\nmax. 160mA',
            '+10V..+30V\nmax. 160mA',
          ],
          [
            'IGV-634',
            'A, B, C, D\nA, B, C, D invertiert',
            '300kHz',
            '+5V, +15V\nmax. 300mA',
            '+10V..+30V\nmax. 160mA',
            '+10V..+30V\nmax. 160mA',
            '+10V..+30V\nmax. 160mA',
          ],
        ],
      },
    ],
  },

  'd500-e3000': {
    seoTitle: 'CNC D500 / Bedienstation E3000',
    seoDescription:
      'CNC D500 modulare Mehrachsen-CNC-Steuerung auf CompactPCI-Basis mit Bedienstation E3000 für industrielle Echtzeitanwendungen.',
    title: 'CNC D500 / Bedienstation E3000',
    subtitle: '<strong>entwickelt für den jahrelangen fehlerfreien Einsatz im rauhen industriellen Umfeld</strong>',
    downloads: [
      {
        label: 'Aufbau und Wartung der CNC D500',
        href: '/downloads/doc/control_systems/CNC_D500_Aufbau_und_Wartung.pdf',
      },
    ],
    blocks: [
      {
        type: 'section',
        heading: 'Modulare Multi-Achsen CNC D500',
        items: [
          'Resultat jahrelanger Erfahrung bei der Entwicklung von CNC-Steuerungen für den industriellen Einsatz',
          'Leistungsfähiger CNC-Kern, optimal einsetzbar zur Realisierung einer Multi-Achsen CNC bei technologisch anspruchsvollen Projekten',
          'Compact Flash Slot zum Einsatz von CompactFlash Karten für Betriebssystem, Applikation und Benutzerdaten',
          'Modularer Aufbau: Rack OMR500 mit 24V-Stromversorgungseinschub OPS500, CPU-Karte OMC520, Schnittstellenkarte OMI500 mit bis zu acht Erweiterungskarten der Baureihe OIP500, optional mit 24V-Zusatz-Stromversorgungsmodul OPM500',
          'Hochauflösender programmierbarer Watchdog mit kurzer Reaktionszeit (minimal 50us) für kritische Applikationen, galvanisch getrennt',
          'Schnittstellen auf CPU-Karte OMC520: Profibus DP Slave, Ethernet, 2xUSB2.0, 2xRS232C/485/422, galvanisch getrennte digitale Ein- und Ausgänge',
          'Schnittstellen auf Schnittstellenkarte OMI500: 2x SSI für Absolutgeber, 2x TTL für Inkrementalgeber, 4 analoge Eingänge (16Bit Auflösung), 8 interruptfähige digitale Eingänge',
          'Schnittstellen auf Erweiterungskarten OIP500: SSI für Absolutgeber, TTL für Inkrementalgeber, analoge Eingänge (14Bit Auflösung), analoge Ausgänge (16Bit Auflösung), interruptfähige digitale Eingänge, digitale Ausgänge',
          '1MByte NVRAM für Daten die über Netz-Aus gehalten werden müssen, ansprechbar wie normaler Hauptspeicher',
          'Betriebssystem OAGLinux: speziell für industrielle Echtzeitapplikationen ausgelegt',
          'robuster Aufbau',
          'lange Verfügbarkeit',
          'wartungsfreundlich: keine Batterie, austauschbares Lüftermodul im Rack OMR500',
          'Umgebungstemperatur: 0 bis 40°C',
        ],
      },
      {
        type: 'table',
        heading: 'Verfügbare Schnittstellen',
        headers: ['Schnittstelle', 'Beschreibung'],
        rows: [
          [
            'Absolutgeber-Schnittstellen',
            'SSI-Schnittstellen zum Anschluss von Absolutgebern. Ausgestattet mit Drahtbruchüberwachung, Datenübertragungsfehlererkennung und Auswertung eines eventuell vorhandenen Geber-Fehlersignals. Die Geberstände können automatisch taktsynchron eingelesen werden.',
          ],
          [
            'Inkrementalgeber-Schnittstellen',
            'TTL-Schnittstellen zum Anschluss von Inkrementalgebern. Ausgestattet mit Drahtbruchüberwachung, Auswertung eines evtl. vorhandenen Geber-Fehlersignals und hochgenauer Geschwindigkeitsmessung. Die Geberstände können automatisch taktsynchron eingelesen werden.',
          ],
          [
            'analoge Eingänge',
            'Analoge Eingänge mit 14Bit- oder 16Bit-Auflösung. Werte können automatisch taktsynchron eingelesen werden.',
          ],
          ['analoge Ausgänge', 'Analoge Ausgänge mit 16Bit-Auflösung.'],
          [
            'digitale Eingänge',
            'Schnelle galvanisch getrennte interruptfähige digitale Eingänge. Werte können automatisch taktsynchron eingelesen werden.',
          ],
          ['digitale Ausgänge', 'Schnelle galvanisch getrennte digitale Ausgänge.'],
        ],
      },
      {
        type: 'section',
        heading: 'Bedienstation E3000 zu CNC D500',
        items: [
          'Resultat jahrelanger Erfahrung bei der Entwicklung von Bedienstationen für den industriellen Einsatz',
          'Compact Flash Slot zum Einsatz von CompactFlash Karten für Betriebssystem, Applikation und Benutzerdaten',
          'Modularer Aufbau: Frontplatte mit Bildschirm und Tastatur, 24V- oder 230V Stromversorgung, CPU-Modul OPC',
          'Schnittstellen: Ethernet, 2xUSB2.0, bis zu 4xRS232C',
          'Temperaturüberwachung (digtaler Ausgang, galvanisch getrennt)',
          'Betriebssystem: z.B. OAGLinux',
          'robuster Aufbau',
          'lange Verfügbarkeit',
          'Umgebungstemperatur: 0 bis 40°C',
        ],
      },
    ],
  },

  oaglinux: {
    seoTitle: 'OPTRONIC OAGLinux',
    seoDescription:
      'OAGLinux: Linux-basiertes industrielles Echtzeitbetriebssystem für industrielle Hard-Real-Time-Anwendungen.',
    title: 'OPTRONIC OAGLinux',
    subtitle: 'Linux basiertes industrielles Echtzeitbetriebssystem',
    downloads: [
      {
        label: 'Bedienungsanleitung OAGLinux V3',
        href: '/downloads/doc/control_systems/OAGLinux_V3_Bedienungsanleitung.pdf',
      },
      {
        label: 'Bedienungsanleitung OAGLinux V2.2',
        href: '/downloads/doc/control_systems/OAGLinux_V2.2_Bedienungsanleitung.pdf',
      },
    ],
    intro: [
      'Das Betriebssystem OAGLinux wurde speziell für die Verwendung in industriellen Echtzeitapplikationen entwickelt. Es kommt in den meisten aktuellen OPTRONIC Systemen zum Einsatz. Es bietet harte Echtzeitfähigkeit und unterstütz ein breites Spektrum an wichtigen Funktionen und Protokollen.',
    ],
    sections: [
      {
        heading: 'Besondere Merkmale',
        items: [
          'Ausgelegt für industrielle harte Echtzeitapplikationen mit hohen Anforderungen, bietet aber trotzdem alle Vorteile von Linux.',
          'Unterstützt ein breites Spektrum an heute wichtigen Funktionen und Protokollen.',
          'Geringe Anforderungen an Speicher und Rechenleistung. Das komplette Betriebssystem belegt im Betrieb weniger als 12MByte Hauptspeicher und passt auf eine 64MByte CompactFlash Karte.',
          'kurze Aufstartzeit, je nach Konstellation wenige Sekunden bis zu einer halben Minute.',
          'Einfache und benutzerfreundliche Konfiguration.',
          'Lizenzverwaltungssystem zum Freischalten von applikations- und hardwarespezifisch System- und Applikationsfunktionen.',
          'Einfaches, sicheres und schnelles Update der Applikation und des Systems über USB.',
          'Einfaches, sicheres und schnelles Einspielen von Lizenzen und Konfigurationsdaten über USB.',
          'TCP/IP Netzwerksupport mit heute wichtigen Protokollen (z.B. SMB, NFS, FTP).',
          'Fernwartungszugang über Netzwerk.',
          'Das System kann im normalen Betrieb jederzeit ausgeschaltet werden, ohne dass dabei System- und Applikationsdaten verloren gehen.',
        ],
      },
    ],
  },

  d571: {
    seoTitle: 'D571: CNC für fliegende Sägen',
    seoDescription:
      'CNC D571 Steuerung für synchron mitlaufende Trenneinrichtungen (fliegende Sägen) auf Basis von D500 und E3000.',
    title: 'D571: CNC für synchron mitlaufende Trenneinrichtungen (fliegende Sägen)',
    downloads: [
      {
        label: 'CNC D571C: Retrofit alter fliegender Sägen D115, D141, D151 und D171',
        href: '/downloads/doc/control_systems/CNC_D571C_Retrofit_Fliegende_Saege_Retrofit_D115_D141_D151_D171.pdf',
      },
    ],
    intro: [
      'Die CNC D571 basiert auf dem CompactPCI System D500 und der Bedienstation E3000. Sie kommt als Steuerung für synchron mitlaufendes Trennen (fliegende Säge) z.B. in Rohrschweissstrassen zum Einsatz. Die D571 steuert die Bewegungen einer synchron mitlaufenden Trenneinrichtung (Sägewagen und Sägeschwinge) für exaktes Aufteilen endlos gefertigten Materials und dient zur Automatisierung und Steuerung weiterer damit verbundener Prozesse.',
      'In entsprechender Konfiguration kann die CNC D571 auch statt älterer OPTRONIC-Steuerungen für synchron mitlaufendes Trennen (D115, D141, D151, D171) eingesetzt werden.',
    ],
    sections: [
      {
        heading: 'Funktionen der CNC D571',
        items: [
          'Lageregelung und Geschwindigkeitssteuerung des Sägewagens für ortssynchrones und geschwindigkeitssynchrones Fahren mit der Trennstelle.',
          'Lageregelung und Geschwindigkeitssteuerung des Sägehubs mit Programmierung der oberen und unteren Endlage für den Schnitt, wahlweise über Geometrie (Sägeblattdurchmesser und Materialquerschnitt) oder durch Teach-In.',
          'Adaptive Steuerung der Bewegungsabläufe zur Antriebsschonung und für Zykluszeitoptimierung.',
          'Fehleraufnahme, Fehlerverfolgung und ortsgetreue Fehlermarkierung. Aussortierung fehlerhafter Stücke nach unterschiedlichen Fehlerkriterien.',
          'Restlängenoptimierung und Schrottminimierung.',
          'Ausgabe digitaler und analoger Hilfssignale zur Anlagensteuerung.',
          'Programmierung der zu fertigenden Längen und Stückzahlen.',
          'Kommunikation mit SPS über PROFIBUS DP oder wahlweise mittels potentialfreier digitaler Ein- und Ausgänge.',
          'Benutzerfreundliche Bedienung, leistungsfähige Visualisierungssoftware.',
          'Testbetrieb mit Simulation der steuerungsexternen Komponenten (SPS, Antriebe, usw.) für Inbetriebnahmeunterstützung und Problemanalyse.',
          'Produktionssimulation (virtueller Ablauf des Fertigungsprozesses) zur Ermittlung von Zykluszeiten, Optimierung von Parametereinstellungen und Erprobung alternativer Fertigungsdaten auch während laufender Produktion.',
          'Netzwerkanschluss über TCP/IP. Dateiaustausch mit Windows und Linux-Rechnern über die Protokolle FTP, SMB und NFS.',
          'Optional mit Datensatzverwaltung zur Ablage von Prozessdaten.',
        ],
      },
      {
        heading: 'Bedienstation E3000 zur CNC D571',
        paragraphs: [
          'Mittels der Bedienstation E3000 erfolgt die komplette Parametrierung der CNC D571, sowie die Datensicherung und das Zurücklesen von Maschinenkonstanten und Datensätzen. Die Bedienung ist so einfach wie möglich gehalten, um den Anwender nicht unnötig zu belasten. Zur Bedienung stehen acht Softkeys, vier Cursortasten, sowie ein Zahlenblock zur Verfügung.',
          'Als Betriebssystem kommt OAGLinux zum Einsatz.',
        ],
      },
    ],
  },
};
