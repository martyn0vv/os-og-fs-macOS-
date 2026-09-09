# Operativsystem og filsystem – macOS

En skoleoppgave på norsk bokmål med et svart-hvitt uttrykk inspirert av Apple Support. Navigasjonen øverst går til delene på siden.

En kort React-animasjon viser «macOS» på en glassflate når siden åpnes eller lastes på nytt, før den går over til innholdet. Animasjonen hoppes over ved redusert bevegelse og kan avbrytes med tastatur, berøring eller rulling.

## Kjør lokalt

Du trenger Node.js 22.13 eller nyere.

```sh
npm ci
npm run dev
```

Åpne adressen som vises i terminalen.

## Bygg og forhåndsvis

```sh
npm run build
npm run start
```

`dist/` inneholder den ferdige nettsiden og kan legges på en statisk webserver. Alle JavaScript- og CSS-filer bygges lokalt; siden trenger ingen CDN-er eller API-nøkler.

## Filer

- `index.html`: oppgaven og ankerlenkene. Innholdet er tilgjengelig også uten JavaScript.
- `styles.css`: utforming for datamaskin, mobil og utskrift.
- `src/main.jsx`: React-komponenten som styrer introen og rydder den bort.
- `src/intro.css`: glasseffekten og overgangen.
- `vite.config.js`: oppsett for utvikling og bygging.

Oppgaven har nøyaktig fem systemprogrammer og fem snarveier, sju filsystemer i en tabell med fem kolonner, en kort forklaring av journalling og kilder.
