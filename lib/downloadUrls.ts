import type { Locale } from './localePath';

/** Local mirror of https://www.optronic.ch/download — files live under `public/downloads/`. */
export const DOWNLOAD_ROOT = '/downloads';

export function enDownload(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${DOWNLOAD_ROOT}${normalized}`;
}

export function deDownload(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${DOWNLOAD_ROOT}/de${normalized}`;
}

export function downloadByLocale(locale: Locale, enPath: string, dePath?: string): string {
  return locale === 'de' && dePath ? deDownload(dePath) : enDownload(enPath);
}

export function batteryModulePdf(locale: Locale): string {
  return downloadByLocale(
    locale,
    '/doc/control_systems/Ni-MH_Battery_Module_510.330.02a.pdf',
    '/doc/control_systems/Ni-MH_Akkumodule_510.330.02a.pdf',
  );
}

export function omc300Pdf(): string {
  return deDownload('/cnc/OMC300.pdf');
}

const FSU200_DOWNLOAD_PATHS: { en: string; de: string }[] = [
  {
    en: '/doc/control_systems/FSU201_Operating_Instructions.pdf',
    de: '/doc/control_systems/FSU201_Bedienungsanleitung.pdf',
  },
  {
    en: '/doc/control_systems/FSU201_D145F_D150F_Replacement_Instructions.pdf',
    de: '/doc/control_systems/FSU201_D145F_D150F_Austauschanleitung.pdf',
  },
  {
    en: '/doc/control_systems/FSU201_E102_Replacement_Instructions.pdf',
    de: '/doc/control_systems/FSU201_E102_Austauschanleitung.pdf',
  },
  {
    en: '/doc/control_systems/FSU201_E114_E152_E153_Replacement_Instructions.pdf',
    de: '/doc/control_systems/FSU201_E114_E152_E153_Austauschanleitung.pdf',
  },
  {
    en: '/doc/control_systems/FSU202_Operating_Instructions.pdf',
    de: '/doc/control_systems/FSU202_Bedienungsanleitung.pdf',
  },
  {
    en: '/doc/control_systems/FSU202_Replacement_Instructions.pdf',
    de: '/doc/control_systems/FSU202_Austauschanleitung.pdf',
  },
  {
    en: '/doc/control_systems/FSU202_Active_Video_Cable.pdf',
    de: '/doc/control_systems/FSU202_Aktives_Videokabel.pdf',
  },
  {
    en: '/doc/control_systems/FSU203_Operating_Instructions.pdf',
    de: '/doc/control_systems/FSU203_Bedienungsanleitung.pdf',
  },
  {
    en: '/doc/control_systems/FSU203_Replacement_Instructions.pdf',
    de: '/doc/control_systems/FSU203_Austauschanleitung.pdf',
  },
  {
    en: '/doc/control_systems/FSU211_Operating_Instructions.pdf',
    de: '/doc/control_systems/FSU211_Bedienungsanleitung.pdf',
  },
  {
    en: '/doc/control_systems/FSU211_D145F_D150F_Replacement_Instructions.pdf',
    de: '/doc/control_systems/FSU211_D145F_D150F_Austauschanleitung.pdf',
  },
  {
    en: '/doc/control_systems/FPDI200_Flyer.pdf',
    de: '/doc/control_systems/FPDI200_Flyer.pdf',
  },
];

export function fsu200DownloadHrefs(locale: Locale): string[] {
  return FSU200_DOWNLOAD_PATHS.map(({ en, de }) => downloadByLocale(locale, en, de));
}

export function lvObsoleteDownloads(locale: Locale) {
  return {
    lv100dDatasheet: downloadByLocale(
      locale,
      '/doc/sensors/Light_Screen_LV100D.pdf',
      '/doc/sensors/Lichtvorhang_LV100D_LV150D.pdf',
    ),
    lv100dEmitter: downloadByLocale(
      locale,
      '/doc/sensors/Light_Screen_LV100D_Replacing_the_Emitter_Receiver_Block.pdf',
      '/doc/sensors/Lichtvorhang%20LV100D_Wechsel_des_Sender-Empfaengerblocks.pdf',
    ),
    lvMirrors: downloadByLocale(
      locale,
      '/doc/sensors/Light_Screen_LV100_LV150_LV100D_LV150D_Replacing_the_Mirrors.pdf',
      '/doc/sensors/Lichtvorhang_LV100_LV150_LV100D_LV150D_Wechsel_der_Spiegel.pdf',
    ),
    lvCompatibility: downloadByLocale(
      locale,
      '/doc/sensors/Light_Screen_LV100D_LV150D_Compatibility_with_LV..M.pdf',
      '/doc/sensors/Lichtvorhang_LV100D_LV150D_Kompatibilitaet_mit_LV..M.pdf',
    ),
  };
}

export function lvObsoleteDownloadHrefs(locale: Locale): string[] {
  const d = lvObsoleteDownloads(locale);
  return [d.lv100dDatasheet, d.lv100dEmitter, d.lvMirrors, d.lvCompatibility];
}
