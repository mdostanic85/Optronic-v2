export const supportDetailsEn = {
  backToSupport: 'Back to Support',
  supportCategories: 'Support Categories',
  legacyProductSupport: 'Legacy Product Support',
  viewDetails: 'View Details',
  downloadsHeading: 'Downloads',
  categories: {
    omc300: {
      title: 'OMC300: SERCOS Single Board Computer',
      description: 'Support for SERCOS Single Board Computer systems',
    },
    cncObsolete: {
      title: 'Control Systems D100 / D200 / D300 / E100',
      description: 'Support for D and E series control systems',
    },
    importantHints: {
      title: 'Important Hints for Support Requests',
      description: 'What to include for faster and accurate support',
    },
    componentLists: {
      title: 'Component Lists for Older Control Systems',
      description: 'Component lists with order numbers for older systems',
    },
    fsu200: {
      title: 'FSU200 / FPDI200: Replacement for CRT Screens',
      description: 'Flat-screen replacement solutions for CRT monitors',
    },
    lvObsolete: {
      title: 'Light Screens LV100 / LV100D / LV150 / LV150D',
      description: 'Support for LV series light curtains',
    },
    ogObsolete: {
      title: 'Replacement for Incremental Encoders OG2D / OG7D / OG8D /OG14D',
      description: 'Replacement for older incremental encoders',
    },
  },
  omc300: {
    heading: 'SERCOS Multi-Axes CNC Controller OMC300',
    intro:
      'PC compatible VMEbus single-board computer with SERCOS interface. OMC300 is the result of long-lasting experience in developing CNC control systems for industrial applications.',
    features: [
      'CNC core processes assigned CNC command sequences in real-time with SERCOS drives',
      'Application-specific extension of the CNC command interpreter possible at any time',
      'CompactFlash slot for operating system, application, and user data',
      'Ethernet interface',
      'Four fast interrupt-capable electrically isolated digital inputs and outputs',
      'Incremental encoder input for handwheel connection',
      'Integrated BIOS designed for industrial applications - no battery needed',
      'Operating system OAGLinux for industrial real-time applications',
      'High-resolution watchdog for critical real-time applications',
      'Maintenance-free: no battery, no fans',
      'Ambient temperature: 0 to 40 C',
    ],
  },
  cncObsolete: {
    heading: 'Notes for Control Systems D100 / D200 / D300 / E100',
    p1: 'For control systems in the D100 / D200 / D300 / E100 series, various replacement parts are still available. Please contact us.',
    p2: 'For each control system in the D100 / D300 / E100 series, OPTRONIC AG offers a component list with OPTRONIC parts and order numbers.',
    batteryTitle: 'OPTRONIC Rechargeable Battery Pack',
    batteryDesc:
      'Most control systems in the D100 / D200 / D300 / E100 series are equipped with an OPTRONIC rechargeable battery pack (item number 510.330.02) to supply the main memory while power is turned off. To ensure trouble-free operation, the battery pack should be replaced after three years of usage.',
    replacingTitle: 'Replacing the CRT Screen',
    replacingPrefix: 'The ',
    replacingLinkText: 'Flat-Screen Monitor Unit FSU200',
    replacingSuffix:
      ' is the optimum replacement for CRT screens in operating stations of the D1xx, E1xx and OPxx series.',
  },
  importantHints: {
    heading: 'Important Hints for Support Requests',
    p1: 'Every OPTRONIC device carries identification markings on its rear or side panels — including type plates, type labels, inspection plates, and serial number labels. Component modules carry inspection plates and serial number labels.',
    p2: 'When submitting a support request, please provide the device designation, article number, and serial number where possible. This allows us to identify your device uniquely and respond quickly and accurately.',
    labelTypesHeading: 'Identification Label Types',
    labels: [
      {
        title: 'Type Plate (Typenschild)',
        description: 'Found on the device housing. Shows the device serial number and the application-specific device designation.',
        examples: ['Serial number: e.g. 35303', 'Device designation: e.g. E3450'],
      },
      {
        title: 'Type Label (Typenkleber)',
        description: 'A sticker version of the type plate, containing the same information. May be found on the side or rear of the device.',
        examples: ['Device designation: e.g. E3450', 'Serial number: e.g. 35303'],
      },
      {
        title: 'Inspection Plate (Kontrollschild)',
        description: 'Identifies component modules. Contains the OPTRONIC article number and internal inspection code.',
        examples: ['Article number: e.g. 737.153.02', 'Inspection code: e.g. -1.10/33 or -1/10-80'],
      },
      {
        title: 'Serial Number Label (Seriennummernkleber)',
        description: 'Found on individual component modules. Contains the component serial number for precise identification.',
        examples: ['Serial number: e.g. SN2081310/1'],
      },
    ],
    journalNote: 'OPTRONIC maintains a journal for each control system, documenting all issues encountered and any work performed on the device. Please reference these records when contacting support.',
  },
  componentLists: {
    heading: 'Component Lists for Older Control Systems',
    intro:
      'For each control system of type series D100 / D300 / E100, OPTRONIC AG offers a components list. The list holds all OPTRONIC parts that are components of the device, together with their order numbers. Components lists for selected OPTRONIC control systems (Components lists for not listed control systems are available on request):',
    table: {
      list: 'List',
      controlSystems: 'Control Systems',
      operatingStations: 'Operating Stations',
      download: 'Download',
    },
  },
  fsu200: {
    heading: 'FSU200 / FPDI200: Replacement for CRT Screens',
    intro:
      'Replacement for CRT screens with TTL/CGA interface. The FSU200 series provides modern flat-screen replacements for CRT monitors in OPTRONIC control systems and SIEMENS S5 based devices with WF470 video interface.',
    imageAltMain: 'fsu200_crt',
    featuresTitle: 'FSU201 / FSU202 / FSU211',
    features: [
      'Replacement for old CRT Screens with TTL/CGA interface',
      'For OPTRONIC control systems D1xx, E1xx, E7xx, and OP500',
      'For SIEMENS S5 based devices with WF470 video interface (SIEMENS order number 6FM1470-xxxxx)',
      'Already pre-configured for OPTRONIC control systems',
      'Easy installation',
      'Perfect image, no flickering, no noise',
      'Intuitive on-screen menu, easily operable by use of three buttons',
      '10,4" flat screen, 640x480 pixel',
      'Supply voltage: 100–240 V AC',
    ],
    tableTitle: 'FSU200: Standard Models',
    table: {
      partName: 'Part Name',
      displayType: 'Display Type',
      usage: 'Usage',
      rows: [
        {
          name: 'FSU201',
          display: 'green TTL Monochrome Display',
          usage: 'Configured for OPTRONIC CNCs and Operating Stations D1xx, E1xx, E7xx',
        },
        {
          name: 'FSU202',
          display: 'TTL Color Display',
          usage:
            'Configured for OPTRONIC OP500, or devices with SIEMENS WF470 (6FM1470-xxxxx), respectively Active Video Cable optionally available',
        },
        {
          name: 'FSU203',
          display: 'TTL Color Display',
          usage:
            'Configured for OPTRONIC OP500, or devices with SIEMENS WF470 (6FM1470-xxxxx), respectively with active video cable',
        },
        {
          name: 'FSU211',
          display: 'green TTL Monochrome Display',
          usage: 'Model with System Power Supply, configured for OPTRONIC Operating Stations D145F/150F',
        },
      ],
    },
    fpdiHeading: 'FPDI200',
    fpdiIntro:
      'Processing of the TTL/CGA video signal in order to present the image on a flat screen is done by the integrated interface card FPDI200. For OEM solutions, the card is separately available.',
    fpdiImageAlt: 'fpdi200',
    fpdiFeatures: [
      'Supported Video Formats: TTL/CGA monochrome and RGB, VGA RGB analog',
      'Supported Synchronization Types: Separate VSYNC and HSYNC signals, Sync-On-Green, Composite Sync',
      'Maximum Signal Frequency: Pixel clock: 12 to 50MHz, HSYNC: 15 to 110kHz, HSYNC: any',
      'Power Supply: 5V +-10%',
      'Power Consumption: 2W',
      'Operating Temperature: 0° to +40°C',
    ],
  },
  lvObsolete: {
    heading: 'Support for Light Screens LV100 / LV100D / LV150 / LV150D',
    intro:
      'OPTRONIC AG offers support and repair service for all devices of previous type series. The first light screens were already delivered in the seventies. Replacement parts are still available for this devices. Additionally, with small adaptions, various devices of the actual type series LV...M can be used as replacement for light screens of type series LV...D.',
    replacementPartsTitle: 'Replacement Parts for LV100, LV100D, LV150, and LV150D',
    additionalPartsNote: 'Additional not named parts on request. Please name the serial number.',
    replacementByTitle: 'Light Screens LV...M as Replacement for LV100D and LV150D',
    replacementBy: {
      lightScreen: 'Light Screen',
      replaceBy: 'Replace by (Item Number)',
      adapterFlange: 'Adapter Flange',
      rows: [
        { screen: 'LV100D', replaceBy: 'LV100M (329.101.11)', adapterFlange: '329.200.01' },
        { screen: 'LV150D', replaceBy: 'LV150/150M (329.113.11)', adapterFlange: '329.200.02' },
      ],
    },
    adaptationInfo: 'Information about mechanical and electrical adaption:',
    adaptationLinkText: 'LV100D, LV150D: Compatibility with Light Screens LV...M',
    table: {
      lightScreen: 'Light Screen',
      problem: 'Problem',
      replacementPart: 'Replacement Part',
      itemNumber: 'Item Number',
      rows: [
        { screen: 'LV100D', problem: 'Aging of the light source', part: 'Transmitter / receiver block', item: '327.203.01' },
        { screen: 'LV100D', problem: 'Mechanical damage', part: 'Mirror set', item: '101.006.01/02' },
        { screen: 'LV150D', problem: 'Mechanical damage', part: 'Mirror set', item: '101.010/011' },
        { screen: 'LV100', problem: 'Aging of the light source', part: 'Light bulb with centering flange', item: '115.2' },
        { screen: 'LV100', problem: 'Mechanical damage', part: 'Mirror set', item: '101.006.01/02' },
        { screen: 'LV100', problem: 'Pollution indicator not working', part: 'Indicating instrument', item: '118.100.03' },
        { screen: 'LV150', problem: 'Aging of the light source', part: 'Light bulb with centering flange', item: '115.2' },
        { screen: 'LV150', problem: 'Mechanical damage', part: 'Mirror set', item: '101.010/011' },
        { screen: 'LV150', problem: 'Pollution indicator not working', part: 'Indicating instrument', item: '118.100.03' },
      ],
    },
  },
  ogObsolete: {
    heading: 'Compatibility to Older OPTRONIC Incremental Encoders',
    compatibilityHeading: 'Compatibility to Older OPTRONIC Incremental Encoders',
    intro:
      'Compatible replacement devices are available for older OPTRONIC incremental encoders. The following table shows the mapping from old to new device names.',
    table: {
      oldDeviceName: 'Old Device Name',
      newDeviceName: 'New Device Name',
    },
    note: 'zzz: Impulses per revolution of the concerning incremental encoder',
    note2: '*): Adapter flange necessary for adaptation Item number 333.002.01',
  },
};

export const supportDetailsDe: typeof supportDetailsEn = {
  backToSupport: 'Zurück zum Support',
  supportCategories: 'Support-Kategorien',
  legacyProductSupport: 'Support für Legacy-Produkte',
  viewDetails: 'Details ansehen',
  downloadsHeading: 'Downloads',
  categories: {
    omc300: {
      title: 'OMC300: SERCOS Single Board Computer',
      description: 'Support für SERCOS Single Board Computer Systeme',
    },
    cncObsolete: {
      title: 'Steuerungen D100 / D200 / D300 / E100',
      description: 'Support für D- und E-Serien-Steuerungen',
    },
    importantHints: {
      title: 'Wichtige Hinweise zu Supportanfragen',
      description: 'Welche Angaben wir für schnellen Support benötigen',
    },
    componentLists: {
      title: 'Baugruppenlisten für ältere Steuerungen',
      description: 'Baugruppenlisten mit Bestellnummern für ältere Systeme',
    },
    fsu200: {
      title: 'FSU200 / FPDI200: Ersatz für CRT-Monitore',
      description: 'Flachbild-Ersatzlösungen für CRT-Monitore',
    },
    lvObsolete: {
      title: 'Light Screens LV100 / LV100D / LV150 / LV150D',
      description: 'Support for LV series light curtains',
    },
    ogObsolete: {
      title: 'Ersatz für Inkrementale Drehgeber OG2D / OG7D / OG8D /OG14D',
      description: 'Ersatz für ältere Inkrementalgeber',
    },
  },
  omc300: {
    heading: 'SERCOS Mehrachsen-CNC-Steuerung OMC300',
    intro:
      'PC-kompatibler VMEbus-Einplatinenrechner mit SERCOS-Schnittstelle. OMC300 ist das Ergebnis langjähriger Erfahrung in der Entwicklung von CNC-Steuerungen für industrielle Anwendungen.',
    features: [
      'CNC-Kern verarbeitet zugeordnete CNC-Befehlsfolgen in Echtzeit mit SERCOS-Antrieben',
      'Anwendungsspezifische Erweiterung des CNC-Interpreters jederzeit möglich',
      'CompactFlash-Slot für Betriebssystem, Applikation und Benutzerdaten',
      'Ethernet-Schnittstelle',
      'Vier schnelle, interruptfahige, galvanisch getrennte digitale Ein- und Ausgange',
      'Inkrementalgeber-Eingang für Handradanschluss',
      'Integriertes BIOS für industrielle Anwendungen - keine Batterie erforderlich',
      'Betriebssystem OAGLinux für industrielle Echtzeitanwendungen',
      'Hochauflösender Watchdog für kritische Echtzeitanwendungen',
      'Wartungsfrei: keine Batterie, keine Lüfter',
      'Umgebungstemperatur: 0 bis 40 C',
    ],
  },
  cncObsolete: {
    heading: 'Hinweise zu Steuerungen D100 / D200 / D300 / E100',
    p1: 'Für Steuerungen der Serien D100 / D200 / D300 / E100 sind weiterhin verschiedene Ersatzteile verfügbar. Bitte kontaktieren Sie uns.',
    p2: 'Für jede Steuerung der Serien D100 / D300 / E100 bietet OPTRONIC AG eine Baugruppenliste mit OPTRONIC-Teilen und Bestellnummern an.',
    batteryTitle: 'OPTRONIC-Akkumodul',
    batteryDesc:
      'Die meisten Steuerungen der Serien D100 / D200 / D300 / E100 sind mit einem OPTRONIC-Akkumodul (Artikelnummer 510.330.02) ausgerüstet, um den Hauptspeicher bei ausgeschalteter Versorgung zu puffern. Für einen störungsfreien Betrieb sollte das Akkumodul nach drei Jahren ersetzt werden.',
    replacingTitle: 'Ersatz des CRT-Bildschirms',
    replacingPrefix: 'Die ',
    replacingLinkText: 'Flat-Screen Monitor Unit FSU200',
    replacingSuffix:
      ' ist der optimale Ersatz für CRT-Bildschirme in Bedienstationen der Serien D1xx, E1xx und OPxx.',
  },
  importantHints: {
    heading: 'Wichtige Hinweise zu Supportanfragen',
    p1: 'Jedes OPTRONIC-Gerät trägt auf der Rück- oder Seitenwand Identifikationsmerkmale — darunter Typenschilder, Typenkleber, Kontrollschilder und Seriennummernkleber. Baugruppen tragen Kontrollschilder und Seriennummernkleber.',
    p2: 'Bitte nennen Sie bei Supportanfragen wenn möglich Gerätebezeichnung, Artikelnummer und Seriennummer. Damit können wir Ihr Gerät eindeutig identifizieren und Ihre Anfrage schnell und präzise bearbeiten.',
    labelTypesHeading: 'Arten von Identifikationsmerkmalen',
    labels: [
      {
        title: 'Typenschild',
        description: 'Am Gerätegehäuse angebracht. Enthält die Seriennummer des Geräts sowie die anwendungsspezifische Gerätebezeichnung.',
        examples: ['Seriennummer: z. B. 35303', 'Gerätebezeichnung: z. B. E3450'],
      },
      {
        title: 'Typenkleber',
        description: 'Eine Kleberversion des Typenschilds mit denselben Angaben. Befindet sich an der Seite oder Rückseite des Geräts.',
        examples: ['Gerätebezeichnung: z. B. E3450', 'Seriennummer: z. B. 35303'],
      },
      {
        title: 'Kontrollschild',
        description: 'Kennzeichnet einzelne Baugruppen. Enthält die OPTRONIC-Artikelnummer sowie den internen Prüfcode.',
        examples: ['Artikelnummer: z. B. 737.153.02', 'Prüfcode: z. B. -1.10/33 oder -1/10-80'],
      },
      {
        title: 'Seriennummernkleber',
        description: 'Auf einzelnen Baugruppen angebracht. Enthält die Seriennummer der Baugruppe zur eindeutigen Identifikation.',
        examples: ['Seriennummer: z. B. SN2081310/1'],
      },
    ],
    journalNote: 'OPTRONIC führt zu jeder Steuerung ein Journal, in dem aufgetretene Probleme und am Gerät vorgenommene Arbeiten dokumentiert werden. Bitte beziehen Sie sich bei Supportanfragen auf diese Aufzeichnungen.',
  },
  componentLists: {
    heading: 'Baugruppenlisten für ältere Steuerungen',
    intro:
      'OPTRONIC AG führt zu jeder Steuerung der Baureihen D100 / D300 / E100 eine Baugruppenliste, in der alle im Gerät eingesetzten OPTRONIC-Baugruppen zusammen mit den Bestellnummern aufgeführt sind. Baugruppenlisten zu ausgewählten OPTRONIC-Steuerungen (Baugruppenlisten zu nicht aufgeführten Steuerungen sind auf Anfrage erhältlich):',
    table: {
      list: 'Liste',
      controlSystems: 'Steuerungen',
      operatingStations: 'Bedienstationen',
      download: 'Download',
    },
  },
  fsu200: {
    heading: 'FSU200 / FPDI200: Ersatz für CRT-Monitore',
    intro:
      'Ersatz für CRT-Bildschirme mit TTL/CGA-Schnittstelle. Die FSU200-Serie bietet moderne Flachbild-Ersatzlösungen für CRT-Monitore in OPTRONIC-Steuerungen und SIEMENS-S5-basierten Geräten mit WF470 Grafikkarte.',
    imageAltMain: 'fsu200_crt',
    featuresTitle: 'FSU201 / FSU202 / FSU211',
    features: [
      'Ersatz alter CRT-Monitore mit TTL/CGA-Schnittstelle',
      'für OPTRONIC Steuerungen D1xx, E1xx, E7xx und OP500',
      'für SIEMENS S5 basierte Geräte mit WF470 Grafikkarte (SIEMENS Bestellnummer 6FM1470-xxxxx)',
      'für OPTRONIC Steuerungen bereits vorkonfiguriert',
      'einfacher Einbau',
      'perfektes Bild, kein Flackern, kein Rauschen',
      'Intuitives On-Screen-Menü, bedienbar über drei Tasten',
      '10.4" Flachbildschirm, 640x480 Pixel',
      'Versorgungsspannung: 100-240V AC',
    ],
    tableTitle: 'FSU200: Standard-Ausführungen',
    table: {
      partName: 'Artikelbezeichnung',
      displayType: 'Bildschirmtyp',
      usage: 'Einsatz',
      rows: [
        {
          name: 'FSU201',
          display: 'grüner TTL Monochrombildschirm',
          usage: 'konfiguriert für OPTRONIC CNCs und Bedienstationen D1xx, E1xx, E7xx',
        },
        {
          name: 'FSU202',
          display: 'TTL-Farbbildschirm',
          usage:
            'konfiguriert für OPTRONIC OP500 bzw. für Geräte mit SIEMENS WF470 (6FM1470-xxxxx)\naktives Videokabel optional erhältlich',
        },
        {
          name: 'FSU203',
          display: 'TTL-Farbbildschirm',
          usage:
            'konfiguriert für OPTRONIC OP500 bzw. für Geräte mit SIEMENS WF470 (6FM1470-xxxxx)\nmit aktivem Videokabel',
        },
        {
          name: 'FSU211',
          display: 'grüner TTL Monochrombildschirm',
          usage:
            'Ausführung mit Systemnetzteil, konfiguriert für OPTRONIC Bedienstationen D145F/D150F',
        },
      ],
    },
    fpdiHeading: 'FPDI200',
    fpdiIntro:
      'Die Verarbeitung des TTL/CGA-Videosignals zur Darstellung des Bildes auf einem Flachbildschirm erfolgt durch die integrierte Schnittstellenkarte FPDI200. Für OEM-Lösungen ist die Karte separat erhältlich.',
    fpdiImageAlt: 'fpdi200',
    fpdiFeatures: [
      'Unterstützte Videoformate: TTL/CGA Monochrom und RGB, VGA RGB analog',
      'Unterstützte Synchronisationsarten: Separate VSYNC- und HSYNC-Signale, Sync-On-Green, Composite Sync',
      'Maximale Signalfrequenz: Pixel-Takt: 12 bis 50MHz, HSYNC: 15 bis 110kHz, HSYNC: beliebig',
      'Versorgungsspannung: 5V +-10%',
      'Leistungsaufnahme: 2W',
      'Betriebstemperatur: 0° bis +40°C',
    ],
  },
  lvObsolete: {
    heading: 'Support zu Lichtvorhängen LV100 / LV100D / LV150 / LV150D',
    intro:
      'OPTRONIC AG bietet Support und Reparaturdienst zu allen Geräten aus früheren Baureihen. Die ersten Lichtvorhänge wurden bereits in den 70er Jahren geliefert. Auch zu diesen Geräten sind nach wie vor Ersatzteile lieferbar. Außerdem eignen sich verschiedene Geräte aus der aktuellen Baureihe LV...M mit geringfügigen Adaptionen als Ersatz für Lichtvorhänge vom Typ LV...D.',
    replacementPartsTitle: 'Ersatzteile zu LV100, LV100D, LV150 und LV150D',
    additionalPartsNote: 'Weitere nicht genannte Teile auf Anfrage. Bitte nennen Sie die Seriennummer.',
    replacementByTitle: 'Lichtvorhänge LV...M als Ersatz für LV100D und LV150D',
    replacementBy: {
      lightScreen: 'Lichtvorhang',
      replaceBy: 'Ersatz durch (Artikelnummer)',
      adapterFlange: 'Adapterflansch',
      rows: [
        { screen: 'LV100D', replaceBy: 'LV100M (329.101.11)', adapterFlange: '329.200.01' },
        { screen: 'LV150D', replaceBy: 'LV150/150M (329.113.11)', adapterFlange: '329.200.02' },
      ],
    },
    adaptationInfo: 'Informationen zur mechanischen und elektrischen Adaption:',
    adaptationLinkText: 'LV100D, LV150D: Kompatibilität mit Lichtvorhängen LV...M',
    table: {
      lightScreen: 'Lichtvorhang',
      problem: 'Problem',
      replacementPart: 'Ersatzteil',
      itemNumber: 'Artikelnummer',
      rows: [
        { screen: 'LV100D', problem: 'Alterung der Lichtquelle', part: 'Sender-/ Empfängerblock', item: '327.203.01' },
        { screen: 'LV100D', problem: 'mechanische Beschädigung', part: 'Spiegel-Set', item: '101.006.01/02' },
        { screen: 'LV150D', problem: 'mechanische Beschädigung', part: 'Spiegel-Set', item: '101.010/011' },
        { screen: 'LV100', problem: 'Alterung der Lichtquelle', part: 'Glühlampe mit Zentrierflansch', item: '115.2' },
        { screen: 'LV100', problem: 'mechanische Beschädigung', part: 'Spiegel-Set', item: '101.006.01/02' },
        { screen: 'LV100', problem: 'keine Verschmutzungsanzeige', part: 'Anzeige-Instrument', item: '118.100.03' },
        { screen: 'LV150', problem: 'Alterung der Lichtquelle', part: 'Glühlampe mit Zentrierflansch', item: '115.2' },
        { screen: 'LV150', problem: 'mechanische Beschädigung', part: 'Spiegel-Set', item: '101.010/011' },
        { screen: 'LV150', problem: 'keine Verschmutzungsanzeige', part: 'Anzeige-Instrument', item: '118.100.03' },
      ],
    },
  },
  ogObsolete: {
    heading: 'Kompatibilität zu älteren OPTRONIC-Inkrementalgebern',
    compatibilityHeading: 'Kompatibilität zu älteren OPTRONIC-Inkrementalgebern',
    intro:
      'Für ältere OPTRONIC-Inkrementalgeber sind kompatible Ersatzgeräte verfügbar. Die folgende Tabelle zeigt die Zuordnung alter zu neuer Gerätebezeichnungen.',
    table: {
      oldDeviceName: 'Alte Gerätebezeichnung',
      newDeviceName: 'Aktuelle Gerätebezeichnung',
    },
    note: 'zzz: Impulse pro Umdrehung des betreffenden Inkrementalgebers',
    note2: '*: Adapterflansch zur Anpassung notwendig (Artikelnummer 333.002.01)',
  },
};

