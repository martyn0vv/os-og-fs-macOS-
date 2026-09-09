# Operativsystem og filsystem – macOS

En skoleoppgave på norsk bokmål med et svart-hvitt uttrykk inspirert av Apple Support. Navigasjonen øverst går til delene på siden.

En kort React-animasjon viser «macOS» på en glassflate når siden åpnes eller lastes på nytt, før den går over til innholdet. Animasjonen hoppes over ved redusert bevegelse og kan avbrytes med tastatur, berøring eller rulling.

## Åpne siden

Last ned prosjektet som ZIP fra GitHub, pakk ut hele mappen og dobbeltklikk på `index.html`. Introen og resten av siden fungerer uten server, installasjon eller internettilkobling. Behold `assets/` i samme mappe som HTML-filen. Kildelenkene åpner eksterne nettsider.

React er allerede pakket i `assets/intro.js`, og animasjonens CSS ligger i `assets/intro.css`. Disse ferdige filene er inkludert i repositoriet.

## Utvikle lokalt

Du trenger Node.js 22.13 eller nyere.

```sh
npm ci
npm run dev
```

Åpne adressen som vises i terminalen.

Etter endringer i `src/main.jsx` eller `src/intro.css`, kjør `npm run build:intro` og last siden på nytt. Ferdigpakkede filer i `assets/` skal også tas med i neste commit.

## Bygg og forhåndsvis

```sh
npm run build
npm run start
```

`dist/` inneholder den ferdige nettsiden. Åpne `dist/index.html` direkte, eller legg hele innholdet på en statisk webserver. Alle JavaScript- og CSS-filer bygges lokalt; siden trenger ingen CDN-er eller API-nøkler.

## Filer

- `index.html`: oppgaven og ankerlenkene. Innholdet er tilgjengelig også uten JavaScript.
- `styles.css`: utforming for datamaskin, mobil og utskrift.
- `src/main.jsx`: React-komponenten som styrer introen og rydder den bort.
- `src/intro.css`: glasseffekten og overgangen.
- `assets/intro.js` og `assets/intro.css`: ferdigpakket React-intro som fungerer også ved direkte åpning av HTML-filen.
- `scripts/build.mjs`: kopierer siden og de ferdige filene til `dist/`.
- `vite.config.js`: oppsett for utvikling og bygging.

Oppgaven har nøyaktig fem systemprogrammer og fem snarveier, sju filsystemer i en tabell med fem kolonner, en kort forklaring av journalling og kilder.
