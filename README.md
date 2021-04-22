# Vefforritun 2, 2021, verkefni 6

Keyra með npm start 3000

[Kynning á verkefni](https://youtu.be/).

Tengjast skal SWAPI GraphQL endapunkt og birta upplýsingar um Star Wars myndir (fyrstu sex) ásamt karakterum í þeim.

## GraphQL

Hægt er að nálgast GraphiQL viðmót til að skoða gögnin á https://graphql.org/swapi-graphql/

Endapunktur fyrir GraphQL API má nálgast á https://swapi-graphql.netlify.app/.netlify/functions/index

Ekki þarf að nota neitt annað en `POST` á endapunktinn með gögnum í querystring breytunum `query` og `variables`. Sjá gefinn grunn.

## TypeScript og týpur

Nota skal TypeScript og þær stillingar sem gefnar eru í `tsconfig.json` (sér í lagi skal `strict` vera `true`) og með eslint reglum í `.eslintrc.js`. Slökkva má á einstaka reglum ef ástæða er til.

Öll gögn skulu vera með týpum og þarf því að útbúa `type` eða `interface` fyrir gögn sem koma úr GraphQL.

## Síður, gögn og virkni

Í haus skulu vera hlekkir á `Films` (forsíða) og `Characters` (`/characters`).

Forsíða skal birta gögn úr `allFilms` í GraphQL API, sér í lagi `title`, `episodeID`, `openingCrawl` og þá karaktera sem koma fram í myndinni ásamt hlekk á nánari upplýsingar um viðkomandi. Sjá gefinn grunn.

`/characters` skal birta fyrstu 10 karaktera úr myndunum (`allPeople(first: 10)`) en einnig takka sem leyfir að sækja næstu 10 o.s.fr. þar til búið er að birta alla karaktera.

Ekki skal nota sama fall og síða (`/pages/characters/index.tsx`) heldur skal gera sérstakt `fetch` kall af framenda á bakenda gegnum `/pages/api/characters.ts`. Þetta þýðir að fyrstu gögnin verða _server-side renderuð_ og ekki bara aðgengileg af framenda eftir að React forrit keyrir.

`/characters/[id]` skal birta upplýsingar um valinn karakter (úr `person`) eða 404 villu. Birta skal a.m.k. `birthYear`, `eyeColor`, `hairColor`, `height` og `mass`.

## `getServerSideProps`

Þó svo að NextJS skjölun ýti mjög undir að `getStaticProps` sé notað, þá munum við nota `getServerSideProps` sem passar inn í umfjöllun áfangans. Það sem skilað er úr því falli verður útbúið á _bakenda_ (líkt og með Express) og gert aðgengilegt React forriti á _framenda_.

Við getum því gert köll í API/gagnagrunn innan `getServerSideProps` án þess að það keyri á framenda.

[Sjá nánar í skjölun](https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering).

## Útlit

[Sjá útlit](./utlit).

Setja skal upp Sass og útfæra útlit per component í Sass skrá fyrir hann.

## Tæki og tól

Gefinn er grunnur, með uppbyggingu á verkefni, byggt á `create-next-app` ásamt TypeScript. Reynt hefur verið að setja slatta af athugasemdum til að hjálpa við heildarskipulag og skilning.

Ekki ætti að þurfa að búa til fleiri componenta en það er leyfilegt. Ekki þarf að útbúa _container_ component, en það er leyfilegt.

## Mat

* 20% – Forsíða sett upp með gögnum úr GraphQL endapunkti
* 20% – Yfirlitssíða karaktera sett upp með gögnum úr GraphQL endapunkti
* 20% – Hægt að sækja fleiri karaktera skv. forskrift
* 20% – Hægt að sækja nánari upplýsingar um hvern karakter
* 20% – Verkefni sett upp á Heroku, TypeScript týpur settar upp, og engar TypeScript/lint villur og almennt snyrtilegur kóði

## Sett fyrir

Verkefni sett fyrir í fyrirlestri fimmtudaginn 25. mars 2021.

## Skil

Skila skal í Canvas í seinasta lagi fyrir lok dags laugardaginn 10. apríl 2021.

Skilaboð skulu innihalda slóð á Heroku og slóð á GitHub repo fyrir verkefni, og dæmatímakennurum skal hafa verið boðið í repo ([sjá leiðbeiningar](https://docs.github.com/en/free-pro-team@latest/github/setting-up-and-managing-your-github-user-account/inviting-collaborators-to-a-personal-repository)). Notendanöfn þeirra eru:

* `jonnigs`
* `mimiqkz`
* `Steinalicious`
* `zurgur`

Hver dagur eftir skil dregur verkefni niður um 10%, allt að 20% ef skilað mánudaginn 12. apríl 2021 en þá lokar fyrir skil.

## Einkunn

Sett verða fyrir 6 minni verkefni þar sem 5 bestu gilda 8% hvert, samtals 40% af lokaeinkunn.

Sett verða fyrir tvö hópverkefni þar sem hvort um sig gildir 10%, samtals 20% af lokaeinkunn.

---

> Útgáfa 0.1

| Útgáfa | Breyting |
|--------|----------|
| 0.1    | Fyrsta útgáfa |
