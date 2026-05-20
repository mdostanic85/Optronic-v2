# Audit: `/support/hints` stranica — poredjenje sa live sajtom

## Zaključak: Stranica postoji, ali COPY NE ODGOVARA live sajtu

Stranica `/en/support/hints` i `/de/support/hints` postoje u repo-u i rade (`views/SupportHintsPage.tsx`).
Sadržaj je u `locales/supportDetailsLocales.ts` (`importantHints` sekcija, linije 68–96 za EN, 285–313 za DE).

**Problem**: Repo koristi prepisani/parafrazirani copy. Live sajt (`optronic.ch`) ima konkretniji i kraći copy koji se direktno oslanja na identifikacione labele uređaja. Razlike su opisane ispod.

---

## Poređenje tekst po tekst

### Engleski (EN)

#### Heading

| | Tekst |
|---|---|
| **Live sajt** | `Important Hints for Support Requests` |
| **Repo** | `Important Hints for Support Requests` |
| Status | ✅ Identično |

#### Uvodni paragraf 1 (ispod headinga / PageHeader description)

| | Tekst |
|---|---|
| **Live sajt** | *"Each device manufactured by OPTRONIC AG is labeled with a type plate and a control label. Additionally, depending on the device type, a type tape exists. Type plate, control label and type tape are located on the back side or a side wall of the device. OPTRONIC parts are equipped with a control label and a serial number tape."* |
| **Repo (`p1`)** | *"Every OPTRONIC device carries identification markings on its rear or side panels — including type plates, type labels, inspection plates, and serial number labels. Component modules carry inspection plates and serial number labels."* |
| Status | ❌ **Parafrazirano** — drugačija formulacija, drugačiji redosled informacija |

#### Callout / ključna napomena (`p2`)

| | Tekst |
|---|---|
| **Live sajt** | *"If you have a request, please name device or part name, item number, and serial number!"* |
| **Repo (`p2`)** | *"When submitting a support request, please provide the device designation, article number, and serial number where possible. This allows us to identify your device uniquely and respond quickly and accurately."* |
| Status | ❌ **Parafrazirano** — live sajt je kraći i direktniji; repo dodaje rečenicu koje nema na live sajtu |

#### Labele (4 tipa)

Live sajt ne grupiše labele kao "labelTypesHeading" sa 4 kartice — on ih prikazuje kao jednostavne heading + bullet liste. Repo ih prezentuje kao 4 kartice sa `title`, `description` i `examples`.

Konkretni primeri (article numbers, serial numbers) su **isti** na oba mesta:
- `35303` — Seriennummer / Serial number
- `E3450` — Applikationsspezifische / Application-specific device name
- `737.153.02` — Artikelnummer / Part number
- `-1.10/33 or -1/10-80` — Inspection code
- `SN2081310/1` — Serial number of the component

#### Journal napomena

| | Tekst |
|---|---|
| **Live sajt** | *"The application specific device name and the device serial number are printed on the type plate and the type tape. The information serves for exact identification of the device. OPTRONIC AG keeps a journal for each control unit, that holds information about occurred problems and all work done. Item number and OPTRONIC internal inspection code are printed on the control label."* |
| **Repo (`journalNote`)** | *"OPTRONIC maintains a journal for each control system, documenting all issues encountered and any work performed on the device. Please reference these records when contacting support."* |
| Status | ❌ **Nepotpuno** — repo ne sadrži rečenicu o type plate/type tape, i dodaje rečenicu koje nema na sajtu |

---

### Nemački (DE)

Live sajt na `optronic.ch/support/hints/` (bez locale prefiksa) servira **nemački** sadržaj (default jezik je DE na starom sajtu).

#### Uvodni paragraf 1

| | Tekst |
|---|---|
| **Live sajt** | *"Jedes von OPTRONIC AG hergestellte Gerät ist mit einem Typenschild und einem Kontrollschild versehen. Zusätzlich ist abhängig vom Gerätetyp ein Typenkleber vorhanden. Die Schilder und der Typenkleber befinden sich auf der Rückseite oder einer Seitenwand des Gerätes. OPTRONIC-Baugruppen sind mit einem Kontrollschild und einem Seriennummernkleber ausgestattet."* |
| **Repo (`p1`)** | *"Jedes OPTRONIC-Gerät trägt auf der Rück- oder Seitenwand Identifikationsmerkmale — darunter Typenschilder, Typenkleber, Kontrollschilder und Seriennummernkleber. Baugruppen tragen Kontrollschilder und Seriennummernkleber."* |
| Status | ❌ **Parafrazirano** |

#### Callout (`p2`)

| | Tekst |
|---|---|
| **Live sajt** | *"Bitte nennen Sie bei Anfragen falls möglich Geräte- bzw. Baugruppenbezeichnung, Artikelnummer und Seriennummer!"* |
| **Repo (`p2`)** | *"Bitte nennen Sie bei Supportanfragen wenn möglich Gerätebezeichnung, Artikelnummer und Seriennummer. Damit können wir Ihr Gerät eindeutig identifizieren und Ihre Anfrage schnell und präzise bearbeiten."* |
| Status | ❌ **Parafrazirano** — live sajt nema drugu rečenicu |

#### Journal napomena

| | Tekst |
|---|---|
| **Live sajt** | *"Auf dem Typenschild und dem Typenkleber sind die applikationsspezifische Gerätebezeichnung sowie die Geräteseriennummer festgehalten. Die Angaben dienen zur eindeutigen Identifikation des Geräts. OPTRONIC AG führt zu jeder Steuerung ein Journal, das Auskunft gibt über allenfalls aufgetretene Problem und am Gerät vorgenommene Arbeiten. Auf dem Kontrollschild sind die Artikelnummer des Geräts sowie ein OPTRONIC-interner Prüfcode festgehalten."* |
| **Repo (`journalNote`)** | *"OPTRONIC führt zu jeder Steuerung ein Journal, in dem aufgetretene Probleme und am Gerät vorgenommene Arbeiten dokumentiert werden. Bitte beziehen Sie sich bei Supportanfragen auf diese Aufzeichnungen."* |
| Status | ❌ **Nepotpuno** — fale rečenice o type plate/type tape i Kontrollschild; poslednja rečenica u repo-u ne postoji na live sajtu |

---

## Tačan copy sa live sajta

### Engleski — ispravan copy (direktno sa `optronic.ch/en/support/hints`)

```
Heading:
Important Hints for Support Requests

Uvod (p1):
Each device manufactured by OPTRONIC AG is labeled with a type plate and a control label. Additionally, depending on the device type, a type tape exists. Type plate, control label and type tape are located on the back side or a side wall of the device.

OPTRONIC parts are equipped with a control label and a serial number tape.

Callout / ključna napomena (p2):
If you have a request, please name device or part name, item number, and serial number!

Labele (ostaju 4 tipa, nazivi i primeri su isti kao na live sajtu):
  Type Plate       → 35303 (serial number), E3450 (device name)
  Type Tape        → E3450 (device name), 35303 (serial number)
  Control Label    → 737.153.02 (part number), -1.10/33 or -1/10-80 (inspection code)
  Serial Nr Tape   → SN2081310/1

Journal napomena:
The application specific device name and the device serial number are printed on the type plate and the type tape. The information serves for exact identification of the device. OPTRONIC AG keeps a journal for each control unit, that holds information about occurred problems and all work done.

Item number and OPTRONIC internal inspection code are printed on the control label.
```

### Nemački — ispravan copy (direktno sa `optronic.ch/support/hints/`)

```
Heading:
Wichtige Hinweise für Supportanfragen

Uvod (p1):
Jedes von OPTRONIC AG hergestellte Gerät ist mit einem Typenschild und einem Kontrollschild versehen. Zusätzlich ist abhängig vom Gerätetyp ein Typenkleber vorhanden. Die Schilder und der Typenkleber befinden sich auf der Rückseite oder einer Seitenwand des Gerätes.

OPTRONIC-Baugruppen sind mit einem Kontrollschild und einem Seriennummernkleber ausgestattet.

Callout / ključna napomena (p2):
Bitte nennen Sie bei Anfragen falls möglich Geräte- bzw. Baugruppenbezeichnung, Artikelnummer und Seriennummer!

Labele (ostaju 4 tipa, isti nazivi i primeri):
  Typenschild        → 35303 (Seriennummer), E3450 (Gerätebezeichnung)
  Typenkleber        → E3450 (Gerätebezeichnung), 35303 (Seriennummer)
  Kontrollschild     → 737.153.02 (Artikelnummer), -1.10/33 oder -1/10-80 (Prüfcode)
  Seriennummernkleber → SN2081310/1

Journal napomena:
Auf dem Typenschild und dem Typenkleber sind die applikationsspezifische Gerätebezeichnung sowie die Geräteseriennummer festgehalten. Die Angaben dienen zur eindeutigen Identifikation des Geräts. OPTRONIC AG führt zu jeder Steuerung ein Journal, das Auskunft gibt über allenfalls aufgetretene Problem und am Gerät vorgenommene Arbeiten.

Auf dem Kontrollschild sind die Artikelnummer des Geräts sowie ein OPTRONIC-interner Prüfcode festgehalten.
```

---

## Fajlovi koji se menjaju

| Fajl | Šta se menja |
|------|-------------|
| `locales/supportDetailsLocales.ts` | `importantHints.p1`, `p2`, `journalNote` — EN verzija (linije 70–95) i DE verzija (linije 286–312) |
| `views/SupportHintsPage.tsx` | Nema izmena UI-a — samo locale tekst se menja |
| `locales/supportDetailsLocales.ts` | Napomena: `labelTypesHeading` i `labels` array ostaju jer nemaju direktan pandan na live sajtu (live sajt koristi `<h6>` headinge, repo ih prikazuje kao kartice — UI je bolji, samo naslovi/opisi kartica se mogu podesiti ako treba) |

---

## Napomena o slikama labela

Na live sajtu se nalaze 4 slike (`type.png`, `serial_device.png`, `control.png`, `serial_part.png`) koje prikazuju stvarne labele sa OPTRONIC uređaja.
Repo trenutno **ne prikazuje te slike** — koristi ikone umesto toga.
To je odvojen zadatak (trebaju fajlovi slike); nije blokator za copy korekciju.

---

## Naredni koraci

1. **[Prioritet 1]** Ažurirati `locales/supportDetailsLocales.ts` — promeniti `importantHints.p1`, `p2` i `journalNote` za EN i DE sa tačnim copy-jem sa live sajta (tekst iznad u sekciji "Tačan copy").
2. **[Prioritet 2]** Odlučiti da li se prikaz 4 labele zadržava kao kartice (bolji UX) ili prebacuje na plain listu kao na live sajtu.
3. **[Opciono]** Dodati slike labela (`type.png`, `serial_device.png`, `control.png`, `serial_part.png`) u `public/assets/` i prikazati ih uz kartice — to bi bio direktan visual parity sa live sajtom.
