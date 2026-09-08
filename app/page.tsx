import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const programs = [
  ['Spotlight', 'Søker raskt etter programmer, filer og mapper på Macen.'],
  ['Finder', 'Brukes til å finne, åpne, flytte og organisere filer og mapper.'],
  ['Aktivitetsmonitor', 'Viser hvor mye CPU, minne, energi og nettverk programmer bruker.'],
  ['Diskverktøy', 'Brukes til å formatere, administrere og kontrollere disker for feil.'],
  ['Terminal', 'Lar deg styre Macen og arbeide med filer ved å skrive kommandoer.'],
] as const;

const shortcuts = [
  { keys: ['⌘', 'Space'], label: 'Command + mellomrom', text: 'Åpner Spotlight, slik at du raskt kan søke på Macen.' },
  { keys: ['⌘', 'Tab'], label: 'Command + Tab', text: 'Bytter mellom åpne programmer.' },
  { keys: ['⌘', 'Shift', '3'], label: 'Command + Shift + 3', text: 'Tar et skjermbilde av hele skjermen.' },
  { keys: ['⌘', 'Shift', '4'], label: 'Command + Shift + 4', text: 'Lar deg velge et område av skjermen og ta skjermbilde av det.' },
  { keys: ['⌘', 'Option', 'Esc'], label: 'Command + Option + Escape', text: 'Åpner vinduet for å tvangsavslutte programmer som ikke svarer.' },
] as const;

const filesystems = [
  { name: 'APFS', medium: 'SSD / HDD', journal: 'Nei', journalNote: 'Bruker copy-on-write', os: 'macOS', size: '8 EiB', sizeNote: 'Teoretisk' },
  { name: 'HFS+', medium: 'HDD / SSD', journal: 'Ja', journalNote: 'I journalført variant', os: 'macOS', size: '8 EiB', sizeNote: 'Teoretisk' },
  { name: 'NTFS', medium: 'HDD / SSD', journal: 'Ja', os: 'Windows', size: 'Opptil 8 PiB', sizeNote: 'Avhenger av Windows-versjon og klyngestørrelse' },
  { name: 'ext4', medium: 'HDD / SSD', journal: 'Ja', os: 'Linux', size: '16 TiB', sizeNote: 'Med 4 KiB blokker' },
  { name: 'exFAT', medium: 'USB-minne / SD-kort / SSD', journal: 'Nei', os: 'Windows, macOS, Linux', size: '16 EiB − 1 byte', sizeNote: 'Teoretisk' },
  { name: 'FAT32', medium: 'USB-minne / SD-kort', journal: 'Nei', os: 'Windows, macOS, Linux', size: '4 GiB − 1 byte' },
  { name: 'ISO 9660', medium: 'CD / DVD', journal: 'Nei', os: 'Windows, macOS, Linux', size: '4 GiB − 1 byte', sizeNote: 'Nivå 1 og 2' },
];

export default function Home() {
  return (
    <main className="assignment">
      <header className="page-header">
        <p className="topic">macOS</p>
        <h1>Operativsystem og filsystem</h1>
        <p className="intro">macOS er operativsystemet på Mac. Det styrer maskinen og lar oss bruke programmer og arbeide med filer.</p>
      </header>

      <section className="assignment-section" aria-labelledby="part-one">
        <h2 id="part-one"><span className="section-number" aria-hidden="true">01</span> Systemprogrammer og snarveier</h2>
        <div className="item-columns">
          <div className="item-group">
            <h3>Systemprogrammer <span className="count">5</span></h3>
            <dl className="item-list" id="systemprogrammer">
              {programs.map(([name, description]) => (
                <div className="item" key={name}>
                  <dt>{name}</dt>
                  <dd>{description}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="item-group">
            <h3>Snarveier <span className="count">5</span></h3>
            <dl className="item-list" id="snarveier">
              {shortcuts.map(({ keys, label, text }) => (
                <div className="item" key={label}>
                  <dt className="shortcut" aria-label={label}>
                    {keys.map((key, index) => (
                      <span className="key-part" key={key} aria-hidden="true">
                        {index > 0 && <span className="plus">+</span>}
                        <kbd>{key}</kbd>
                      </span>
                    ))}
                  </dt>
                  <dd>{text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="assignment-section" aria-labelledby="part-two">
        <h2 id="part-two"><span className="section-number" aria-hidden="true">02</span> Filsystemer</h2>
        <div className="table-frame" role="region" aria-label="Tabell over sju filsystemer. Rull vannrett på små skjermer." tabIndex={0}>
          <Table className="filesystem-table" aria-label="Sammenligning av sju filsystemer" aria-describedby="size-note">
            <TableHeader>
              <TableRow>
                {['Navn', 'Medium', 'Journalling', 'Operativsystem', 'Maks filstørrelse'].map((heading) => (
                  <TableHead scope="col" key={heading}>{heading}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {filesystems.map((fs) => (
                <TableRow key={fs.name}>
                  <TableHead scope="row">{fs.name}</TableHead>
                  <TableCell>{fs.medium}</TableCell>
                  <TableCell>{fs.journal}{fs.journalNote && <span className="cell-note">{fs.journalNote}</span>}</TableCell>
                  <TableCell>{fs.os}</TableCell>
                  <TableCell>{fs.size}{fs.sizeNote && <span className="cell-note">{fs.sizeNote}</span>}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <p className="table-note" id="size-note">GiB, TiB, PiB og EiB er binære størrelsesenheter. 1 GiB = 1024 MiB. Teoretiske grenser kan være høyere enn det operativsystemet og lagringsmediet støtter.</p>
        <div className="journal-note">
          <h3>Hva betyr journalling?</h3>
          <p>Journalling betyr at filsystemet registrerer endringer i en logg før de fullføres. Loggen gjør det lettere å gjenopprette et konsistent filsystem etter strømbrudd eller krasj.</p>
        </div>
      </section>

      <section className="sources" aria-labelledby="sources-title">
        <h2 id="sources-title">Kilder</h2>
        <ul>
          <li><span>Apple Support</span> — <a href="https://support.apple.com/guide/mac-help/welcome/mac">Mac-brukerhåndbok</a>, <a href="https://support.apple.com/en-us/102650">tastatursnarveier</a>, <a href="https://support.apple.com/guide/activity-monitor/welcome/mac">Aktivitetsmonitor</a>, <a href="https://support.apple.com/guide/disk-utility/welcome/mac">Diskverktøy</a> og <a href="https://support.apple.com/guide/terminal/welcome/mac">Terminal</a>.</li>
          <li><span>Apple Developer</span> — <a href="https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/APFS_Guide/VolumeFormatComparison/VolumeFormatComparison.html">APFS og HFS+</a> og <a href="https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/APFS_Guide/FAQ/FAQ.html">copy-on-write</a>.</li>
          <li><span>Microsoft Learn</span> — <a href="https://learn.microsoft.com/en-us/windows-server/storage/file-server/ntfs-overview">NTFS</a> og <a href="https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison">sammenligning av filsystemer</a>.</li>
          <li><span>Red Hat / Linux-kjernen</span> — <a href="https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/7/html/storage_administration_guide/ch-ext4">ext4 og journalling</a> og <a href="https://www.kernel.org/doc/html/latest/filesystems/ext4/blocks.html">størrelsesgrenser</a>.</li>
          <li><span>Ecma International</span> — <a href="https://ecma-international.org/publications-and-standards/standards/ecma-119/">ECMA-119 / ISO 9660</a>.</li>
        </ul>
      </section>
    </main>
  );
}
