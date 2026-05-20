import type { ProductPageData } from '@/components/design-system/ProductDetailLayout';

export const enProductPages: Record<string, ProductPageData> = {
  lvmc: {
    seoTitle: 'Digital Light Screens / Light Grids LVMC',
    seoDescription:
      'LVMC digital light screens for detecting, counting, measuring and classifying. Self-learning automatic mode, object classification, analysis and statistics.',
    title: 'Digital Light Screens / Light Grids LVMC',
    subtitle: 'For Detecting, Counting, Measuring and Classifying',
    downloads: [
      {
        label: 'Brochure to the Digital Light Curtain LVMC',
        href: '/downloads/doc/sensors/Light_Curtain_LVMC_Flyer.pdf',
      },
      {
        label: 'Getting Started with the Digital Light Curtain LVMC',
        href: '/downloads/doc/sensors/Light_Curtain_LVMC_Getting_Started.pdf',
      },
      {
        label: 'User Manual to the Digital Light Curtain LVMC',
        href: '/downloads/doc/sensors/Light_Curtain_LVMC_User_Manual.pdf',
      },
      {
        label:
          'LVMC CMT (Windows based software for configuration, operation, analysis and monitoring)',
        href: '/downloads/sw/sensors/lvmc/cmt/lvmc_cmt_a2_latest_setup.zip',
      },
      {
        label: 'LVMC RC (Windows based software for remote control via Ethernet)',
        href: '/downloads/sw/sensors/lvmc/rc/lvmc_rc_latest.zip',
      },
    ],
    sections: [
      {
        heading: 'Features',
        items: [
          'Self-learning automatic mode',
          'Object classification in up to four groups',
          'Analysis function, object visualization, statistics function',
          'Size measurement, speed measurement, replacement for camera systems',
          'Gapless sensing area, high sampling rate',
          'Detection of complicated shapes',
          'Detection of stuck or unseparated objects',
          'Contamination monitoring',
          'Logging of occurred error conditions',
          'High operational reliability, insensitive to environmental influences',
          'Flexibly configurable inputs and outputs (optocouplers), status LED',
          'Operation via USB and Ethernet, remote control via Ethernet',
          'HTTP server, DHCP client, NTP client',
          'Robust metal housing, available in various dimensions',
          'Supply voltage: +24V or Ethernet (PoE)',
        ],
      },
    ],
    tables: [
      {
        heading: 'Available Standard Models',
        headers: ['Part Name', 'Minimum Object Size', 'Sensing Area Size', 'External Dimensions'],
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
    seoTitle: 'Light Curtains / Light Grids LV..M',
    seoDescription:
      'LV..M light curtains for detecting and counting small objects. Gapless sensing area, high sampling rate, minimum object size ø0.6mm.',
    title: 'Light Curtains / Light Grids LV..M',
    subtitle: 'Detecting and Counting Any Kind of Small Objects',
    downloads: [
      {
        label: 'Brochure to the Light Curtain LV..M',
        href: '/downloads/doc/sensors/Light_Curtain_LV..M_Flyer.pdf',
      },
      {
        label: 'Datasheet to the Light Curtain LV..M',
        href: '/downloads/doc/sensors/Light_Screen_LV...M.pdf',
      },
    ],
    sections: [
      {
        heading: 'Features',
        items: [
          'Gapless sensing area',
          'High sampling rate',
          'Three adjustable response sensitivity levels',
          'High operational reliability',
          'Insensitive to environmental influences',
          'Position and orientation independent object detection',
          'Detection of complicated shapes',
          'Detection of small objects (minimum ø0.6mm)',
          'Avoidance of multiple counts',
          'Detection of stuck objects',
          'Integrated function monitoring (Watchdog)',
          'Contamination monitoring with warning signal',
          'Operation with and without sensing area limiter',
          'Selection of active response sensitivity level by digital inputs or mode switch',
          'Response sensitivity not affected by continuous contamination',
          'Flexible configurable D-Sub interface',
          'Isolated optocoupler outputs and inputs',
          'For small sensing field (minimum 30x30mm) or tight space conditions available with external control unit (LVE)',
          'Robust metal housing',
          'Available in various dimensions',
          'Supply voltage: +24V',
        ],
      },
    ],
    tables: [
      {
        heading: 'Selection of Available Standard Models',
        headers: ['Part Name', 'Minimum Object Size', 'Sensing Area Size', 'External Dimensions'],
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
    seoTitle: 'Measuring Light Barriers G15 / G35',
    seoDescription:
      'G15 and G35 measuring light barriers for length measuring systems or as light curtains for object detection. 100µs response time.',
    title: 'Measuring Light Barriers G15 / G35',
    subtitle: 'Special-purpose Light Barriers for usage in length measuring systems or as light curtains',
    downloads: [
      {
        label: 'Datasheet to the Measuring Light Barrier G15',
        href: '/downloads/doc/sensors/Measuring_Light_Barrier_G15.pdf',
      },
      {
        label: 'Datasheet to the Measuring Light Barrier G35',
        href: '/downloads/doc/sensors/Measuring_Light_Barrier_G35.pdf',
      },
    ],
    sections: [
      {
        heading: 'G35: Features',
        items: [
          'As light barrier in length measuring systems or light curtain for object detection',
          'High operational reliability even under difficult conditions',
          'Light grid consisting of 6 beam paths',
          'Light grid height: 40mm to 65mm (type-dependent)',
          'Response time (object entry and exit): 100us',
          'Resolution: 8mm to 12mm (type-dependent)',
          'Accuracy: ±0.5mm or ±0.8mm (type-dependent)',
          'Repeatability: 0.1mm or 0.2mm (type-dependent)',
          'Distance transmitter-receiver: up to 700mm (type-dependent)',
          'Two isolated optocoupler switching outputs with high load rating (30V/100mA)',
          'Robust metal housing, protection class IP65',
          'Supply voltage: 12V DC, 24V DC or 24V AC',
        ],
      },
      {
        heading: 'G15: Features',
        items: [
          'As light barrier in length measuring systems',
          'High operational reliability even under difficult conditions',
          'Response time (object entry and exit): 100us',
          'Accuracy: ±0.5mm to ±1.0mm (type-dependent)',
          'Repeatability: 0.1mm to 0.3mm (type-dependent)',
          'Distance transmitter-receiver: up to 1m (type-dependent)',
          'Isolated optocoupler switching output with high load rating (30V/100mA)',
          'Robust metal housing, protection class IP65',
          'Supply voltage: 12V DC, 24V DC or 24V AC',
        ],
      },
    ],
    tables: [
      {
        heading: 'G35: Available Standard Models',
        headers: ['Parameter', 'G35EF1Vx', 'G35EF2Vx', 'G35EF3Vx', 'G35EF4Vx', 'G35EF5Vx'],
        rows: [
          ['Light Grid Height', '51.5mm', '51.5mm', '40mm', '65mm', '51.5mm'],
          ['Maximum Distance Transmitter to Receiver', '200mm', '350mm', '200mm', '200mm', '700mm'],
          ['Resolution (Beam Path Distance)', '10mm', '10mm', '8mm', '12mm', '10mm'],
          ['Accuracy (Correctness)', '±0.5mm', '±0.8mm', '±0.5mm', '±0.5mm', '±0.8mm'],
          ['Repeatability (Precision)', '0.1mm', '0.2mm', '0.1mm', '0.1mm', '0.2mm'],
        ],
      },
      {
        heading: 'G15: Available Standard Models',
        headers: ['Parameter', 'G15E1xF10', 'G15E2xF20', 'G15E3xF30', 'G15E4xF40'],
        rows: [
          ['Maximum Distance Transmitter to Receiver', '200mm', '500mm', '700mm', '1000mm'],
          ['Accuracy (Correctness)', '±0.5mm', '±0.8mm', '±1.0mm', '±1.0mm'],
          ['Repeatability (Precision)', '0.1mm', '0.2mm', '0.3mm', '0.3mm'],
        ],
      },
    ],
  },

  og: {
    seoTitle: 'Incremental Encoder OG23D / OG28D',
    seoDescription:
      'Rugged photoelectrical incremental encoders OG23D and OG28D for usage under rough conditions. Resolution up to 625 pulses/rev.',
    title: 'Incremental Encoder OG23D / OG28D',
    subtitle: 'Rugged photoelectrical Incremental Encoders for usage under rough conditions',
    downloads: [
      {
        label: 'Datasheet to the Incremental Encoder OG',
        href: '/downloads/doc/sensors/Incremental_Encoder_OG.pdf',
      },
    ],
    sections: [
      {
        heading: 'Features',
        items: [
          'High operational reliability under difficult conditions',
          'Long-life mechanical-photoelectric design',
          'Resolution: 375, 471, 500 or 625 pulses/rev',
          'Square wave signals A, B, and reference pulse C',
          'With or without inverted signals (type-dependent)',
          'Shaft load capacity: Up to 100N radial and 10N axial',
          'Maximum rotation speed: 5000rpm',
          'Maximum frequency: 100kHz',
          'Low phase shift, high signal quality',
          'Output signals with high load capacity at low voltage drop',
          'With connector plug or connection cable',
          'Insensitive to environmental influences',
          'Extremely robust metal housing, protection class IP65',
          'Supply voltage: 12V DC',
        ],
      },
    ],
    tables: [
      {
        heading: 'Available Standard Models',
        headers: ['Model', 'Resolution', 'Connection', 'Inverted Signals'],
        rows: [
          ['OG23D375Q', '375 pulses/rev', '1.5m Connection Cable', 'YES'],
          ['OG23D471Q', '471 pulses/rev', '1.5m Connection Cable', 'YES'],
          ['OG23D625Q', '625 pulses/rev', '1.5m Connection Cable', 'YES'],
          ['OG23D500Q', '500 pulses/rev', '1.5m Connection Cable', 'YES'],
          ['OG23D500N', '500 pulses/rev', 'Connector', 'YES'],
          ['OG28D500Q', '500 pulses/rev', '1.5m Connection Cable', 'NO'],
          ['OG28D500N', '500 pulses/rev', 'Connector', 'NO'],
          ['OG28D625Q', '625 pulses/rev', '1.5m Connection Cable', 'NO'],
        ],
      },
    ],
  },

  'irv-irt': {
    seoTitle: 'Self-Adjusting Inductive Loop Sensors IRV / IRT',
    seoDescription:
      'Self-adjusting inductive loop sensors IRV and IRT for contact-free detection of metallic material in tube processing applications.',
    title: 'Self-Adjusting Inductive Loop Sensors IRV / IRT',
    subtitle: 'Contact-Free Detection of Metallic Material',
    downloads: [
      {
        label: 'Datasheet to Incuctive Sensing Coil IRT',
        href: '/downloads/doc/sensors/Inductive_Sensing_Coil_IRT.pdf',
      },
      {
        label: 'Datasheet to Self-Adjusting Control Unit IRV20',
        href: '/downloads/doc/sensors/Control_Unit_IRV20.pdf',
      },
    ],
    sections: [
      {
        heading: 'Sensing Coils IRT: Features',
        items: [
          'Typical application areas: Tube processing machines (Straightening, Pilgering), tube feeding by mandrel bars',
          'High operational reliability under difficult conditions',
          'Position and orientation independent object detection',
          'Insensitive to non-metallic contamination',
          'Insensitive to environmental influences like temperature and humidity',
          'Response sensitivity largely constant in the entire sensor area',
          'Detection of even small objects (ferromagnetic bar material with ø1.25mm)',
          'Available in various dimensions',
          'Extremely robust design, protection class IP65',
          'Coil body milled from durable solid plastic',
          'Sensing coil sealed in coil body',
          'Up to 3m long connection cable between IRT and IRV',
        ],
      },
      {
        heading: 'Control Unit IRV20: Features',
        items: [
          'Automatic compensation of environmental metal masses',
          'Automatic compensation of environmental fields',
          'Automatic adjustment of the optimum response sensitivity related to the immersion depth of the material in the coil',
          'Adjustment remains stored after power-off',
          'High operational reliability under difficult conditions',
          'Isolated optocoupler switching outputs with high load rating (30V/100mA)',
          'Isolated optocoupler switching inputs',
          'Robust metal housing, protection class IP65',
          'Supply voltage: 24V DC or 24V AC',
        ],
      },
    ],
    tables: [
      {
        heading: 'Sensing Coil IRT: Available Standard Models',
        headers: ['Part Name', 'Sensing Coil Diameter', 'External Dimensions'],
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
    seoTitle: 'Incremental Encoder Expanders IGV',
    seoDescription:
      'IGV incremental encoder expanders to connect one encoder electrically isolated to up to three targets.',
    title: 'Incremental Encoder Expanders IGV',
    subtitle:
      'To Connect One Encoder Electrically Isolated to Up to Three Targets (CNC, PLC, Measurement Equipment, etc.)',
    downloads: [
      {
        label: 'Datasheet to the Incremental Encoder Expander IGV-133',
        href: '/downloads/doc/sensors/Incremental_Encoder_Expander_IGV-133.pdf',
      },
      {
        label: 'Datasheet to the Incremental Encoder Expander IGV-233',
        href: '/downloads/doc/sensors/Incremental_Encoder_Expander_IGV-233.pdf',
      },
      {
        label: 'Datasheet to the Incremental Encoder Expander IGV-134',
        href: '/downloads/doc/sensors/Incremental_Encoder_Expander_IGV-134.pdf',
      },
      {
        label: 'Datasheet to the Incremental Encoder Expander IGV-334',
        href: '/downloads/doc/sensors/Incremental_Encoder_Expander_IGV-334.pdf',
      },
      {
        label: 'Datasheet to the Incremental Encoder Expander IGV-634',
        href: '/downloads/doc/sensors/Incremental_Encoder_Expander_IGV-634.pdf',
      },
    ],
    sections: [
      {
        heading: 'Features',
        items: [
          'Electrically isolated incremental encoder interfaces for up to three targets',
          'Different variants for different target signal levels: +5V..15V or +10V...+30V',
          'By standard, support for incremental encoder channels A, B, C and their inverted signals, and optionally for channel D to forward of an encoder monitoring signal',
          'Compact design for cap rail mounting (mounting rails TS32 and TS35)',
          '5V, 12V, or 15V supply voltage for the connected incremental encoder',
        ],
      },
    ],
    tables: [
      {
        heading: 'Available Standard Models',
        headers: [
          'Part Name',
          'Available Channels',
          'Maximum Signal Frequency',
          'Power Supply Incremental Encoder',
          'Power Supply Output 1 (X3)',
          'Power Supply Output 2 (X4)',
          'Power Supply Output 3 (X5)',
        ],
        rows: [
          [
            'IGV-133',
            'A, B, C\nA, B, C inverted',
            '500kHz',
            '+5V, +12V\nmax. 300mA',
            '+5V..+15V\nmax. 85mA',
            '+5V..+15V\nmax. 85mA',
            '+5V..+15V\nmax. 85mA',
          ],
          [
            'IGV-233',
            'A, B, C\nA, B, C inverted',
            '300kHz',
            '+5V, +12V\nmax. 300mA',
            '+5V..+15V\nmax. 85mA',
            '+5V..+15V\nmax. 85mA',
            '+10V..+30V\nmax. 160mA',
          ],
          [
            'IGV-134',
            'A, B, C, D\nA, B, C, D inverted',
            '500kHz',
            '+5V, +12V\nmax. 300mA',
            '+5V..+15V\nmax. 85mA',
            '+5V..+15V\nmax. 85mA',
            '+5V..+15V\nmax. 85mA',
          ],
          [
            'IGV-334',
            'A, B, C, D\nA, B, C, D inverted',
            '300kHz',
            '+5V, +12V\nmax. 300mA',
            '+10V..+30V\nmax. 160mA',
            '+10V..+30V\nmax. 160mA',
            '+10V..+30V\nmax. 160mA',
          ],
          [
            'IGV-634',
            'A, B, C, D\nA, B, C, D inverted',
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
    seoTitle: 'CNC D500 / Operating Station E3000',
    seoDescription:
      'CNC D500 modular multi-axis controller on CompactPCI basis with E3000 operating station for industrial real-time applications.',
    title: 'CNC D500 / Operating Station E3000',
    subtitle: 'Designed for Years of Error-Free Use in Harsh Industrial Environments',
    downloads: [
      {
        label: 'Assembly and Maintenance of the CNC D500',
        href: '/downloads/doc/control_systems/CNC_D500_Assembly_and_Maintenance.pdf',
      },
    ],
    blocks: [
      {
        type: 'section',
        heading: 'Modulare Multi-Achsen CNC D500',
        items: [
          'Result of long lasting experiences in developing CNC Control Systems for industrial applications',
          'Powerful CNC core, ideal for use in realizing a multi-axes CNC in technologically demanding projects',
          'CompactFlash Slot to use CompactFlash cards for operating system, application, and user data',
          'Modular design: Rack OMR500 with 24V Power Supply OPS500, CPU Card OMC520, Interface Card OMI500 with up to eight expansion modules of the OIP500 series, optionally with 24 V Add-On Power Supply Module OPM500',
          'High-Resolution Programmable Watchdog with short reaction time (50us minimum) for critical applications, electrically isolated',
          'Interfaces on CPU Card OMC520: Profibus DP Slave, Ethernet, 2xUSB2.0, 2xRS232C/485/422, electrically isolated digital inputs and outputs',
          'Interfaces on Interface Card OMI500: 2x SSI for absolute encoders, 2x TTL for incremental encoders, 4 analog inputs (16Bit resolution), 8 interrupt-capable digital inputs',
          'Interfaces on expansion modules OIP500: SSI for absolute encoders, TTL for incremental encoders, analog inputs (14Bit resolution), analog outputs (16Bit resolution), interrupt-capable digital inputs, digital outputs',
          '1MByte NVRAM for data that needs to be kept over power-off, addressable like normal main memory',
          'Operating System OAGLinux: Designed for industrial real-time applications',
          'Rugged construction',
          'Long-time availability',
          'Maintenance-friendly: No battery, replaceable fan module in rack OMR500',
          'Ambient temperature: 0 to 40°C',
        ],
      },
      {
        type: 'table',
        heading: 'Available Interfaces',
        headers: ['Interface', 'Description'],
        rows: [
          [
            'Absolute Encoder Interfaces',
            'SSI Interfaces to connect absolute encoders. Equipped with broken wires monitoring, data transmission error detection, and evaluation of a maybe available encoder error signal. The counter value can be read-in automatically isochronously.',
          ],
          [
            'Incremental Encoder Interfaces',
            'TTL Interfaces to connect incremental encoders. Equipped with broken wires monitoring, evaluation of a maybe available encoder error signal, and high-accurate speed measuring. The counter value can be read-in automatically isochronously.',
          ],
          [
            'Analog Inputs',
            'Analog inputs with 14Bit or 16Bit resolution. Values can be read in automatically isochronously.',
          ],
          ['Analog Outputs', 'Analog outputs with 16Bit resolution.'],
          [
            'Digital Inputs',
            'Fast electrically isolated interrupt-capable digital inputs. Values can be read in automatically isochronously.',
          ],
          ['Digital Outputs', 'Fast electrically isolated digital outputs.'],
        ],
      },
      {
        type: 'section',
        heading: 'Operating Station E3000 to CNC D500',
        items: [
          'Result of long lasting experiences in developing Operating Stations for industrial applications',
          'CompactFlash Slot to use CompactFlash cards for operating system, application, and user data',
          'Modular design: Front plate with screen and keyboard, 24V or 230V power supply, CPU module OPC',
          'Interfaces: Ethernet, 2xUSB2.0, up to 4xRS232C',
          'Temperature monitoring (digital output, electrically isolated)',
          'Operating System: e.g. OAGLinux',
          'Rugged construction',
          'Long-time availability',
          'Ambient temperature: 0 to 40°C',
        ],
      },
    ],
  },

  oaglinux: {
    seoTitle: 'OPTRONIC OAGLinux',
    seoDescription:
      'OAGLinux: Linux based industrial real-time operating system for hard real-time applications.',
    title: 'OPTRONIC OAGLinux',
    subtitle: 'Linux based industrial real-time Operating System',
    downloads: [
      {
        label: 'Operating Instructions OAGLinux V3',
        href: '/downloads/doc/control_systems/OAGLinux_V3_Operating_Instructions.pdf',
      },
      {
        label: 'Operating Instructions OAGLinux V2.2',
        href: '/downloads/doc/control_systems/OAGLinux_V2.2_Operating_Instructions.pdf',
      },
    ],
    intro: [
      'The operating system OAGLinux was specially developed for use in industrial real-time applications. It is deployed in most of the current OPTRONIC systems. It offers hard real-time capability and supports a wide range of important functions and protocols.',
    ],
    sections: [
      {
        heading: 'Special Features',
        items: [
          'Designed for industrial hard real-time applications with high requirements, but still offers all the advantages of Linux.',
          'Supports a wide range of today\'s critical features and protocols.',
          'Low memory and computing power requirements. The complete operating system occupies less than 12MB of main memory and fits on a 64MB CompactFlash card.',
          'Short start-up time, depending on the constellation a few seconds up to half a minute.',
          'Simple and user-friendly configuration.',
          'License management system for activating application and hardware-specific system and application functions.',
          'Simple, secure and fast update of the application and the system via USB.',
          'Simple, secure and fast loading of licenses and configuration data via USB.',
          'TCP/IP network support with nowadays important protocols (e.g. SMB, NFS, FTP).',
          'Remote maintenance access via network.',
          'The system can be switched-off at any time during normal operation without losing system and application data.',
        ],
      },
    ],
  },

  d571: {
    seoTitle: 'D571: CNC for Flying Saws',
    seoDescription:
      'CNC D571 control system for synchronous running cutting-to-length devices (flying saws) based on D500 and E3000.',
    title: 'D571: CNC for Synchronous Running Cutting-To-Length Devices (Flying Saws)',
    downloads: [
      {
        label: 'CNC D571C: Retrofit of old Flying Saws D115, D141, D151 und D171',
        href: '/downloads/doc/control_systems/CNC_D571C_Retrofit_Flying_Saw_D115_D141_D151_D171.pdf',
      },
    ],
    intro: [
      'The CNC D571 is based on the CompactPCI system D500, and the operating station E3000. It is used as control system for synchronous running cutting-to-length devices (Flying Saws) for example in tube welding lines. The D571 controls the motion of a synchronous running cutting-to-length device (saw carriage and saw stroke) for exact partitioning of endless manufactured material, and offers functionality to automate and control additional linked processes.',
      'The CNC D571 is available in a configuration that can be used as replacement for older OPTRONIC control systems for synchronous running cutting (D115, D141, D151, D171).',
    ],
    sections: [
      {
        heading: 'Functions of the CNC D571',
        items: [
          'Closed loop position and speed control for the saw carriage to enable position and speed synchronous driving with the cut-off point.',
          'Closed loop position and speed control for the saw stroke with programming of the upper and lower position for the cut, by use of the geometry (saw blade diameter and material cross section) or teach-in.',
          'Adaptive control of the motion-sequences in order to prevent the drives from damage and to optimize the cycle time.',
          'Fault detection, fault tracking, and position accurate fault marking. Sorting out of faulty pieces by use of various fault criteria.',
          'Residual length optimization and scrap minimization.',
          'Digital and analog outputs used as subsidiary signals for plant control.',
          'Programming of the lengths and quantities to be manufactured.',
          'Communication with PLC over PROFIBUS DP, or by use of electrically isolated digital inputs and outputs.',
          'User-friendly operation, powerful visualization software.',
          'Testing mode with simulation of control system external components (PLC, drives, etc.) for commissioning support and problem analysis.',
          'Simulation of the production (virtual run of the production process) to determine cycle times, to optimize parameter settings, and to test alternative production data. The simulation can be executed while running normal production.',
          'TCP/IP networking. Data exchange with Windows and Linux computers by use of the protocols FTP, SMB, and NFS.',
          'Optionally with data base to store process data.',
        ],
      },
      {
        heading: 'Operating Station E3000 to CNC D571',
        paragraphs: [
          'The D571 is completely parameterized by use of the operating station E3000. The E3000 also serves to backup and restore machine constants and data sets. The user interface is implemented as simple as possible, so that it is easy to use by the operator. The E3000 is equipped with eight softkeys, four cursor keys, and a numeric key pad.',
          'OAGLinux is used as operating system.',
        ],
      },
    ],
  },
};
