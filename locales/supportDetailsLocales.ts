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
      title: 'Components lists for Older Control Systems',
      description: 'Component lists with order numbers for older systems',
    },
    fsu200: {
      title: 'FSU200 / FPDI200: Replacement for CRT Screen',
      description: 'Flat-screen replacement solutions for CRT monitors',
    },
    lvObsolete: {
      title: 'Light Screens LV100 / LV100D / LV150 / LV150D',
      description: 'Support for LV series light curtains',
    },
    ogObsolete: {
      title: 'Incremental Encoder OG2D / OG7D / OG8D /OG14D',
      description: 'Replacement for older incremental encoders',
    },
  },
  omc300: {
    coverTitle: 'OMC300',
    coverSubtitle: 'PC Compatible VMEbus Single-Board Computer with SERCOS Interface',
    heading: 'SERCOS Multi-Axes CNC Controller OMC300',
    overviewP1:
      'Result of long lasting experiences in developing CNC Control Systems for industrial applications. The CNC core processes assigned CNC command sequences in real-time and handles the complete control of the SERCOS Drives over the integrated SERCOS Interface. Application-specific extension of the CNC command interpreter are possible at any time, in order to incorporate special technological requirements.',
    featuresDesc: '',
    downloads: [
      { label: 'OMC300', href: '/downloads/de/cnc/OMC300.pdf' },
      {
        label: 'Operating Instructions OAGLinux V2.2',
        href: '/downloads/de/cnc/OS.401_030603_Bedienungsanleitung_OAGLinux_V2.2.pdf',
      },
    ],
    downloadsTitle: 'Technical Documentation',
    downloadsDesc: 'Access product datasheets and documentation',
    features: [
      'Result of long lasting experiences in developing CNC Control Systems for industrial applications',
      'CNC core processes assigned CNC command sequences in real-time and handles the complete control of the SERCOS Drives over the integrated SERCOS Interface',
      'Application-specific extension of the CNC command interpreter are possible at any time, in order to incorporate special technological requirements',
      'CompactFlash Slot to use CompactFlash cards for operating system, application, and user data',
      'Ethernet Interface',
      'Four fast interrupt-capable electrically isolated digitale inputs, and four fast electrically isolated digital outputs',
      'Incremental Encoder Input, in order to connect a handwheel, for example',
      'Inegrated BIOS designed for industrial applications: All settings are stored non-volatile or are configured automatically, no battery is necessary to keep the configuration settings',
      'Operating System OAGLinux: Designed for industrial real-time applications',
      'High-Resolution Watchdog: Short reaction time for critical real-time applications',
      'Maintenance-Free: No battery, no fans',
      'Ambient temperature: 0 to 40°C',
    ],
  },
  cncObsolete: {
    coverTitle: 'Notes for Control Systems of Type Series D100 / D200 / D300 / E100',
    coverDownloadLabel: 'OPTRONIC Rechargeable Battery Pack',
    orderingTitle: 'Ordering of Replacement Parts',
    p1: 'Also for control systems of series 100 / D200 / D300 / E100 various replacement parts are still available. Please contact us.',
    p2BeforeLink: 'For each control system of type series D100 / D300 / E100, OPTRONIC AG offers a ',
    p2LinkText: 'Components Lists',
    p2AfterLink:
      '. The list holds all OPTRONIC parts that are components of the device, together with their order numbers.',
    p3: 'Components lists for not listed control systems are available on request.',
    batteryTitle: 'OPTRONIC Rechargeable Battery Pack',
    batteryBeforeLink:
      'Most control systems of type series D100 / D200 / D300 / E100 are equipped with a ',
    batteryLinkText: 'OPTRONIC Rechargeable Battery Pack (item number 510.330.02)',
    batteryAfterLink:
      ' to supply the main memory while power is turned off. To ensure toruble-free operation, the battery pack should be replaced after three years of usage.',
    replacingTitle: 'Replacing the CRT Screen by the Flat-Screen Monitor Unit FSU200',
    replacingPrefix: 'The ',
    replacingLinkText: 'Flat-Screen Monitor Unit FSU200',
    replacingSuffix:
      ' is the optimum replacement for the CRT screens in the operating stations of the type series D1xx, E1xx and OPxxx.',
    imageAltD100ps: 'd100ps',
    imageAltAccu: 'accu',
    imageAltFsu200: 'fsu200',
  },
  importantHints: {
    heading: 'Important Hints for Support Requests',
    p1: 'Each device manufactured by OPTRONIC AG is labeled with a type plate and a control label. Additionally, depending on the device type, a type tape exists. Type plate, control label and type tape are located on the back side or a side wall of the device.\n\nOPTRONIC parts are equipped with a control label and a serial number tape.',
    p2: 'If you have a request, please name device or part name, item number, and serial number!',
    labels: [
      {
        title: 'Type Plate',
        imageAlt: 'OPTRONIC type plate label',
        examples: [
          '35303: Serial number of the device',
          'E3450: Application-specific device name',
        ],
      },
      {
        title: 'Type Tape',
        imageAlt: 'OPTRONIC type tape label',
        examples: [
          'E3450: Application-specific device name',
          '35303: Serial number of the device',
        ],
      },
      {
        title: 'Control Label',
        imageAlt: 'OPTRONIC control label',
        examples: [
          '737.153.02: Part number of the device or component',
          '-1.10/33 or -1/10-80: OPTRONIC internal inspection code',
        ],
      },
      {
        title: 'Serial Number Tape',
        imageAlt: 'OPTRONIC serial number tape on component',
        examples: ['SN2081310/1: Serial number of the component'],
      },
    ],
    journalNote:
      'The application specific device name and the device serial number are printed on the type plate and the type tape. The information serves for exact identification of the device. OPTRONIC AG keeps a journal for each control unit, that holds information about occurred problems and all work done.\n\nItem number and OPTRONIC internal inspection code are printed on the control label.',
  },
  componentLists: {
    heading: 'Component Lists for Older Control Systems',
    intro:
      'For each control system of type series D100 / D300 / E100, OPTRONIC AG offers a components list. The list holds all OPTRONIC parts that are components of the device, together with their order numbers. Components lists for not listed control systems are available on request.',
    table: {
      list: 'List',
      controlSystems: 'Control Systems',
      operatingStations: 'Operating Stations',
      download: 'Download',
    },
  },
  fsu200: {
    coverTitle: 'FSU200 / FPDI200',
    coverSubtitle: 'Replacement for CRT Screens With TTL/CGA Interface',
    imageAltMain: 'fsu200_crt',
    featuresTitle: 'FSU201 / FSU202 / FSU211',
    features: [
      'Replacement for old CRT Screens with TTL/CGA interface',
      'Dor OPTRONIC control systems D1xx, E1xx, E7xx, and OP500',
      'For SIEMENS S5 based devices with WF470 video interface (SIEMENS order number 6FM1470-xxxxx)',
      'Already pre-configured for OPTRONIC control systems',
      'Easy installation',
      'Perfect image, no flickering, no noise',
      'Intuitive on-screen menu, easily operable by use of three buttons',
      '10,4" flat screen, 640x480 pixel',
      'Versorgungsspannung: 100-240V AC',
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
            'Configured for OPTRONIC OP500, or devices with SIEMENS WF470 (6FM1470-xxxxx), respectively\nActive Video Cable optionally available',
        },
        {
          name: 'FSU203',
          display: 'TTL Color Display',
          usage:
            'Configured for OPTRONIC OP500, or devices with SIEMENS WF470 (6FM1470-xxxxx), respectively\nWith Active Video Cable',
        },
        {
          name: 'FSU211',
          display: 'green TTL Monochrome Display',
          usage: 'Model with System Power Supply, configured for OPTRONIC Operating Stations D145F/150F',
        },
      ],
    },
    downloads: [
      { label: 'Operating Instructions to the FSU201' },
      {
        label:
          'Replacement Guide: Replacing the D145F/D150F CRT Monitor by the Monitor Unit FSU201',
      },
      { label: 'Replacement Guide: Replacing the E102 CRT Monitor by the Monitor Unit FSU201' },
      {
        label:
          'Replacement Guide: Replacing the E114/E152/E153 CRT Monitor by the Monitor Unit FSU201',
      },
      { label: 'Operating Instructions to the FSU202' },
      { label: 'Replacement Guide: Replacing the OP500 CRT Monitor by the Monitor Unit FSU202' },
      { label: 'Instructions: Active Video Cable for OP500 Monitor Unit FSU202' },
      { label: 'Operating Instructions to the FSU203' },
      { label: 'Replacement Guide: Replacing the OP500 CRT Monitor by the Monitor Unit FSU203' },
      { label: 'Operating Instructions to the FSU211' },
      {
        label:
          'Replacement Guide: Replacing the D145F/D150F CRT Monitor and the Power Supply by the Monitor Unit FSU211',
      },
      { label: 'FPDI200: TTL/VGA/DVI to Parallel LCD Video Signal Converter' },
    ],
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
    coverTitle: 'Light Screens LV100 / LV100D / LV150 / LV150D',
    intro:
      'OPTRONIC AG offers support and repair service for all devices of previous type series. The first light screens were already delivered in the seventies. Replacement parts are still available for this devices. Additionally, with small adaptions, various devices of the actual type series LV...M can be used as replacement for light screens of type series LV...D.',
    imageAltLv100Lvs: 'lv100_lvs',
    imageAltLv100d: 'lv100d',
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
        { screen: 'LV100D', problem: 'Aging of the light source', part: 'Sender / Receiver block', item: '327.203.01' },
        { screen: 'LV100D', problem: 'Mechanical Damage', part: 'Mirror Set', item: '101.006.01/02' },
        { screen: 'LV150D', problem: 'Mechanical Damage', part: 'Mirror Set', item: '101.010/011' },
        { screen: 'LV100', problem: 'Aging of the light source', part: 'Light Bulb with Centering Flange', item: '115.2' },
        { screen: 'LV100', problem: 'Mechanical Damage', part: 'Mirror Set', item: '101.006.01/02' },
        { screen: 'LV100', problem: 'Pollution Indicator Not Working', part: 'Indicating Instrument', item: '118.100.03' },
        { screen: 'LV150', problem: 'Aging of the light source', part: 'Light Bulb with Centering Flange', item: '115.2' },
        { screen: 'LV150', problem: 'Mechanical Damage', part: 'Mirror Set', item: '101.010/011' },
        { screen: 'LV150', problem: 'Pollution Indicator Not Working', part: 'Indicating Instrument', item: '118.100.03' },
      ],
    },
    downloads: [
      { label: 'Datasheet to Light Screen LV100D' },
      { label: 'Light Screen LV100D: Replacing the Emitter / Receiver Block' },
      { label: 'Light Screen LV100D, LV150D, LV100, LV150: Replacing the Mirrors' },
      { label: 'Light Screen LV100D, LV150D: Compatibility with Light Screens LV…M' },
    ],
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
      title: 'Baugruppenlisten zu älteren Steuerungen',
      description: 'Baugruppenlisten mit Bestellnummern für ältere Systeme',
    },
    fsu200: {
      title: 'FSU200 / FPDI200: Ersatz für CRT-Monitor',
      description: 'Flachbild-Ersatzlösungen für CRT-Monitore',
    },
    lvObsolete: {
      title: 'Lichtvorhänge LV100 / LV100D / LV150 / LV150D',
      description: 'Support für LV-Lichtvorhang-Serien',
    },
    ogObsolete: {
      title: 'Inkrementale Drehgeber OG2D / OG7D / OG8D /OG14D',
      description: 'Ersatz für ältere Inkrementalgeber',
    },
  },
  omc300: {
    coverTitle: 'OMC300',
    coverSubtitle: 'PC-kompatibler VMEbus Single-Board Computer mit SERCOS Schnittstelle',
    heading: 'SERCOS Multi-Achsen CNC-Controller OMC300',
    overviewP1:
      'Resultat jahrelanger Erfahrung bei der Entwicklung von CNC-Steuerungen für den industriellen Einsatz. Der CNC-Kern verarbeitet übergebene CNC-Kommando-Sequenzen in Echtzeit und übernimmt die komplette Ansteuerung der SERCOS-Antriebe über die integrierte SERCOS-Schnittstelle. Anwendungsbezogene Erweiterungen des CNC-Befehls-Interpreters zur Berücksichtigung spezieller technologischer Anforderungen sind jederzeit möglich.',
    featuresDesc: '',
    downloads: [
      { label: 'OMC300', href: '/downloads/de/cnc/OMC300.pdf' },
      {
        label: 'Bedienungsanleitung OAGLinux V2.2',
        href: '/downloads/de/cnc/OS.401_030603_Bedienungsanleitung_OAGLinux_V2.2.pdf',
      },
    ],
    downloadsTitle: 'Technische Dokumentation',
    downloadsDesc: 'Zugang zu Produktdatenblättern und Dokumentation',
    features: [
      'Resultat jahrelanger Erfahrung bei der Entwicklung von CNC-Steuerungen für den industriellen Einsatz',
      'CNC-Kern verarbeitet übergebene CNC-Kommando-Sequenzen in Echtzeit und übernimmt die komplette Ansteuerung der SERCOS Antriebe über die integrierte SERCOS-Schnittstelle',
      'anwendungsbezogene Erweiterungen des CNC-Befehls-Interpreters zur optimalen Berücksichtigung von speziellen technologischen Anforderungen jederzeit möglich',
      'CompactFlash Slot zum Einsatz von CompactFlash Karten für Betriebssystem, Applikation und Benutzerdaten',
      'Ethernet Interface',
      'Vier schnelle interruptfähige galvanisch getrennte digitale Eingänge und vier schnelle digitale galvanisch getrennte Ausgänge',
      'Inkrementalgebereingang, z.B. für den Anschluss eines Handrades',
      'integriertes BIOS ausgelegt für industrielle Applikationen:  alle Einstellungen fest hinterlegt oder automatisch konfiguriert, keine Batterie für den Erhalt der Konfiguration notwendig',
      'Betriebssystem OAGLinux: speziell für industrielle Echtzeitapplikationen ausgelegt',
      'hochauflösender Watchdog: kurze Reaktionszeit für kritische Echtzeit-Applikationen',
      'wartungsfrei: keine Batterie, lüfterloser Betrieb',
      'Umgebungstemperatur: 0 bis 40°C',
    ],
  },
  cncObsolete: {
    coverTitle: 'Hinweise zu Steuerungen der Baureihen D100 / D200 / D300 / E100',
    coverDownloadLabel: 'OPTRONIC-Akkumodul',
    orderingTitle: 'Bestellung von Ersatz-Baugruppen',
    p1: 'Auch für Steuerungen der Baureihen D100 / D200 / D300 / E100 sind noch diverse Ersatz-Baugruppen verfügbar. Bitte kontaktieren Sie uns.',
    p2BeforeLink: 'OPTRONIC AG führt zu jeder Steuerung der Baureihen D100 / D300 / E100 eine ',
    p2LinkText: 'Baugruppenliste',
    p2AfterLink:
      ', in der alle im Gerät eingesetzten OPTRONIC-Baugruppen zusammen mit den Bestellnummern aufgeführt sind.',
    p3: 'Baugruppenlisten zu nicht aufgeführten Steuerungen sind auf Anfrage erhältlich.',
    batteryTitle: 'OPTRONIC-Akkumodul',
    batteryBeforeLink:
      'Die meisten Steuerungen der Baureihen D100 / D200 / D300 / E100 enthalten ein ',
    batteryLinkText: 'OPTRONIC-Akkumodul (Artikelnummer 510.330.02)',
    batteryAfterLink:
      ' zur Stromversorgung des Hauptspeichers bei ausgeschaltetem Gerät. Um einen störungsfreien Betrieb zu gewährleisten, sollte das Akkumodul nach drei Jahre ausgetauscht werden.',
    replacingTitle: 'Ersatz des CRT-Monitors durch die Flachbildschirm-Monitorbaugruppe FSU200',
    replacingPrefix: 'Die ',
    replacingLinkText: 'Flachbildschirm-Monitorbaugruppe FSU200',
    replacingSuffix:
      ' ist der optimale Ersatz für die in den Bedienstationen der Baureihen D1xx, E1xx und OPxxx eingesetzen CRT-Monitore.',
    imageAltD100ps: 'd100ps',
    imageAltAccu: 'accu',
    imageAltFsu200: 'fsu200',
  },
  importantHints: {
    heading: 'Wichtige Hinweise für Supportanfragen',
    p1: 'Jedes von OPTRONIC AG hergestellte Gerät ist mit einem Typenschild und einem Kontrollschild versehen. Zusätzlich ist abhängig vom Gerätetyp ein Typenkleber vorhanden. Die Schilder und der Typenkleber befinden sich auf der Rückseite oder einer Seitenwand des Gerätes.\n\nOPTRONIC-Baugruppen sind mit einem Kontrollschild und einem Seriennummernkleber ausgestattet.',
    p2: 'Bitte nennen Sie bei Anfragen falls möglich Geräte- bzw. Baugruppenbezeichnung, Artikelnummer und Seriennummer!',
    labels: [
      {
        title: 'Typenschild',
        imageAlt: 'OPTRONIC Typenschild',
        examples: [
          '35303: Seriennummer des Geräts',
          'E3450: Applikationsspezifische Gerätebezeichnung',
        ],
      },
      {
        title: 'Typenkleber',
        imageAlt: 'OPTRONIC Typenkleber',
        examples: [
          'E3450: Applikationsspezifische Gerätebezeichnung',
          '35303: Seriennummer des Geräts',
        ],
      },
      {
        title: 'Kontrollschild',
        imageAlt: 'OPTRONIC Kontrollschild',
        examples: [
          '737.153.02: Artikelnummer des Geräts oder der Baugruppe',
          '-1.10/33 oder -1/10-80: OPTRONIC-interner Prüfcode',
        ],
      },
      {
        title: 'Seriennummernkleber',
        imageAlt: 'OPTRONIC Seriennummernkleber auf Baugruppe',
        examples: ['SN2081310/1: Seriennummer der Baugruppe'],
      },
    ],
    journalNote:
      'Auf dem Typenschild und dem Typenkleber sind die applikationsspezifische Gerätebezeichnung sowie die Geräteseriennummer festgehalten. Die Angaben dienen zur eindeutigen Identifikation des Geräts. OPTRONIC AG führt zu jeder Steuerung ein Journal, das Auskunft gibt über allenfalls aufgetretene Problem und am Gerät vorgenommene Arbeiten.\n\nAuf dem Kontrollschild sind die Artikelnummer des Geräts sowie ein OPTRONIC-interner Prüfcode festgehalten.',
  },
  componentLists: {
    heading: 'Baugruppenlisten zu älteren Steuerungen',
    intro:
      'OPTRONIC AG führt zu jeder Steuerung der Baureihen D100 / D300 / E100 eine Baugruppenliste, in der alle im Gerät eingesetzten OPTRONIC-Baugruppen zusammen mit den Bestellnummern aufgeführt sind. Baugruppenlisten zu nicht aufgeführten Steuerungen sind auf Anfrage erhältlich.',
    table: {
      list: 'Liste',
      controlSystems: 'Steuerungen',
      operatingStations: 'Bedienstationen',
      download: 'Download',
    },
  },
  fsu200: {
    coverTitle: 'FSU200 / FPDI200',
    coverSubtitle: 'Ersatz für CRT-Monitore mit TTL/CGA-Schnittstelle',
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
    downloads: [
      { label: 'Bedienungsanleitung zu FSU201' },
      { label: 'Austauschanleitung: Ersatz des D145F/D150F CRT-Monitors durch FSU201' },
      { label: 'Austauschanleitung: Ersatz des E102 CRT-Monitors durch FSU201' },
      { label: 'Austauschanleitung: Ersatz des E114/E152/E153 CRT-Monitors durch FSU201' },
      { label: 'Bedienungsanleitung zu FSU202' },
      { label: 'Austauschanleitung: Ersatz des OP500 CRT-Monitors durch FSU202' },
      { label: 'Anleitung: Aktives Videokabel zu FSU202' },
      { label: 'Bedienungsanleitung zu FSU203' },
      { label: 'Austauschanleitung: Ersatz des OP500 CRT-Monitors durch FSU203' },
      { label: 'Bedienungsanleitung zu FSU211' },
      { label: 'Austauschanleitung: Ersatz des D145F/D150F CRT-Monitors durch FSU211' },
      { label: 'FPDI200: TTL/VGA/DVI to Parallel LCD Video Signal Converter' },
    ],
    fpdiHeading: 'FPDI200',
    fpdiIntro:
      'Die Aufbereitung des TTL/CGA Video Signals für die Anzeige auf einem Flachbildschirm erfolgt über die integrierte Interface-Karte FPDI200. Die Baugruppe ist für OEM-Lösungen separat erhältlich.',
    fpdiImageAlt: 'fpdi200',
    fpdiFeatures: [
      'unterstützte Videoformate: TTL/CGA monochrom und RGB, VGA RGB analog',
      'unterstützte Synchronisationen: separate VSYNC und HSYNC Signale, Sync-On-Green, Composite Sync',
      'maximale Signal-Frequenzen: Pixelclock: 12 bis 50MHz, HSYNC: 15 bis 110kHz, HSYNC: beliebig',
      'Versorgungsspannung: 5V +-10%',
      'Stromaufnahme: 2W',
      'Betriebstemperatur: 0° bis +40°C',
    ],
  },
  lvObsolete: {
    coverTitle: 'Lichtvorhänge LV100 / LV100D / LV150 / LV150D',
    intro:
      'OPTRONIC AG bietet Support und Reparaturdienst zu allen Geräten aus früheren Baureihen. Die ersten Lichtvorhänge wurden bereits in den 70er Jahren geliefert. Auch zu diesen Geräten sind nach wie vor Ersatzteile lieferbar. Ausserdem eignen sich verschiedene Geräte aus der aktuellen Baureihe LV...M mit geringfügigen Adaptionen als Ersatz für Lichtvorhänge vom Typ LV...D.',
    imageAltLv100Lvs: 'lv100_lvs',
    imageAltLv100d: 'lv100d',
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
    downloads: [
      { label: 'Datenblatt zum Lichtvorhang LV100D und LV150D' },
      { label: 'Lichtvorhang LV100D: Auswechseln des Sender- / Empfängerblocks 327.203.01' },
      { label: 'Lichtvorhang LV100D, LV150D, LV100, LV150: Ersetzen der Spiegel' },
      { label: 'Lichtvorhang LV100D, LV150D: Kompatibilität mit Lichtvorhängen LV...M' },
    ],
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

