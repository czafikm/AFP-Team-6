# Követelmény specifikáció
>Wellness Budget Project
>AFP-Team-6

## Jelenlegi helyzet

A hotelünk jelenleg készpénzes és bankkártyás fizetési lehetőséget biztosít az egyes szolgáltatásokhoz.
A wellnes részleg előre megváltott karsszalaggal használható a bárban és az étteremben készpénzzel,
illetve bankkártyával lehet fizetni.
Ez a megoldás viszont kényelmetlen egyes vendégeink számára, hiszen folyamatosan maguknál kell tartaniuk pénztárcájukat.
A technikai háttér már biztosított.
Az órák már rendelkezésre állnak, illetve az olvasók is beszerelésre kerültek.
Ezek működtetéséhez lenne szükségünk a megfelelő szoftverre.
A terminálok egy része képes üzenetek közvetítésére, kiírására is.
Pl. ha egy kiskorú alkoholt szeretne venni, a pultos egy figyelmeztető üzenetet kap,
hogy ne adja ki az italt vagy ha egy gyermek egyedül szeretné használni a medencéket, a kapu
nem engedi át.

## Vágyálom rendszer

A Wellness hotelünk szeretne egy készpénz mentes rendszert, amellyel a vendégeink könnyen 
igényevehetik a fizetős szolgáltatásainkat. A vendégek egy órát kapnak, amely azonosítja őket.
Amikor a vendégek távoznak, visszaadják az órát, amely ezután újra kiadható lesz egy másik vendégnek.
A vendégek az óra terminálhoz való érintésével vehetik igénybe a szolgáltatásokat, hasonlóan mint a PayPass rendszer.
Szeretnénk nyomonkövetni a fogyasztásukat és erről számlát is készíteni, amenyiben igénylik.
Szeretnénk bizonyos szolgáltatásokat korlátozni adott vendégcsoport esetén (pl. kiskorú ne vehessen alkoholt).
Néhány szolgáltatás az alkalmazottak által biztosított (pl. az italokat a pultos adja ki a bárban), és néhány szolgáltatáshoz
beléptetés szükséges (pl. szauna).

## Igényelt üzleti folyamatok 

A recepciós a felületen tud új órát hozzáadni a rendszerhez.
A recepciós a felületen tud új vendéget hozzáadni a rendszerhez.
Az óra hozzárendelhető egy vendéghez.
Attól függően, hogy az óra tulajdonosa gyerek vagy felnőtt, különböző szolgáltatásokat vehet igénybe
(pl. gyerek nem vehet alkoholt a bárban, és nem használhatja a szaunát).
Az óra rögzíti az igényevett szolgáltatásokat.
A távozáskor a recepciós le tudja kérdezni az óra birtokosa által igénybevett szolgáltatásokat és a fizetendő összeget.
Fizetés után az órát alapállapotba helyezi.

## Rendszerre vonatkozó szabályok

A web felület szabványos eszközökkel készüljön, html/css/java/javascript.
A biztonságos fizetéses rendszer megoldása.
A felhasználókat azonosító web oldalak esetében szükséges jogszabályokat be kell tartani: GDPR.

## Követelmény lista 

- K1 Könnyen átlátható kezelő felület
- K2 Reszponzív dizájn
- K3 Egyszerű megoldás a fizetéshez
- K4 Könnyen üzemeltethető rendszer
- K5 Minden szolgáltatáshoz tartozik egy ár
- K6 Minden szerepkör rendelkezik különböző funkciókkal
- K7 Az óra leadásást követően kikell fizetnünk a keletkezett költségeket
- K8 Az óra birtokosa különböző szolgáltatásokhoz fér hozzá az életkora alapján
- K9 Amint a vendég leadja az óráját, akkor a rajta található egyenleg nullázódik
- K10 A vendég által igénybe vett szolgáltatások listája
- K11 Az órával természetesen képesek vagyunk vásárolni is ami terheli az eszközön lévő számlánkat

## Fogalom szótár
|                |Fogalom                  |Magyarul          | Magyarázat|
|----------------|-------------------------|-----------------|---------|
|        1       |SQL          |strukturált lekérdezőnyelv  |relációs adatbázis-kezelők lekérdezési nyelve    |
|        2       |HTML :HyperText Makeup Language|hiperszöveges jelölőnyelv  |weboldalak készítéséhez kifejlesztett leírónyelv.		|
|        3       |CSS :Cascading Style Sheets             |Egymásba ágyazott stílusalapok |weboldalak külleméhez kifejlesztett stílusleíró nyelv    |
|        4       |Front-End          | |Egy adott rendszer legfelsőbb, a felhasználóval kapcsolatot taró rétege, amelynek feladata a rendszerből kijutó adatok megjelenítése, prezentálása, illetve a bejövő adatok fogadása.    |
|        5       |Back-End            |    |Egy adott rendszer alsóbb rétege, aminek feladata a front-end réteg felől érkező adatok feldolgozása, valamint a keletkezett eredmény front-end számára történő visszajuttatása.		|
