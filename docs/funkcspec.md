# Funkcionális specifikáció
>Wellness Budget Project
>AFP-Team-6

## Bevezetés

Egy készpénz nélküli fizetést megvalósító rendszert fejlesztünk egy wellness hotel számára. A vendégeknek a hotelben tartózkodás idején nem szükséges
készpénzt tartaniuk maguknál. A szolgáltatásokat a bejelentkezéskor kapott óra segítségével tudják igénybe venni, amely rögzít minden egyes használatot. 
A számlát a kijelentkezéskor tudják a vendégek kiegyenlíteni készpénzes vagy bankkártyás fizetési módon.
A rendszert a recepciós kezeli.
A rendszer megkönnyíti és kényelmesebbé teszi a hotel vendégei számára a fizetős szolgáltatások használatát, 
illetve segít betartani a gyerekekre vonatkozó korlátozásokat (pl. nem vehetnek alkoholos italt).

## Jelenlegi helyzet

A hotelünk jelenleg készpénzes és bankkártyás fizetési lehetőséget biztosít az egyes szolgáltatásokhoz. 
A wellnes részleg előre megváltott karsszalaggal használható a bárban és az étteremben készpénzzel, illetve bankkártyával lehet fizetni. 
Ez a megoldás viszont kényelmetlen egyes vendégeink számára, hiszen folyamatosan maguknál kell tartaniuk pénztárcájukat. 
A technikai háttér már biztosított. Az órák már rendelkezésre állnak, illetve az olvasók is beszerelésre kerültek. 
Ezek működtetéséhez lenne szükségünk a megfelelő szoftverre. 
A terminálok egy része képes üzenetek közvetítésére, kiírására is. Pl. ha egy kiskorú alkoholt szeretne venni, a pultos egy figyelmeztető üzenetet kap, 
hogy ne adja ki az italt vagy ha egy gyermek egyedül szeretné használni a medencéket, a kapu nem engedi át.

## Vágyálom rendszer

A Wellness hotelünk szeretne egy készpénz mentes rendszert, amellyel a vendégeink könnyen igényevehetik a fizetős szolgáltatásainkat. A vendégek egy órát kapnak, amely azonosítja őket. Amikor a vendégek távoznak, visszaadják az órát, amely ezután újra kiadható lesz egy másik vendégnek. A vendégek az óra terminálhoz való érintésével vehetik igénybe a szolgáltatásokat, hasonlóan mint a PayPass rendszer. Szeretnénk nyomonkövetni a fogyasztásukat és erről számlát is készíteni, amenyiben igénylik. Szeretnénk bizonyos szolgáltatásokat korlátozni adott vendégcsoport esetén (pl. kiskorú ne vehessen alkoholt). Néhány szolgáltatás az alkalmazottak által biztosított (pl. az italokat a pultos adja ki a bárban), és néhány szolgáltatáshoz beléptetés szükséges (pl. szauna).

## Igényelt üzleti folyamatok 

A recepciós a felületen tud új órát hozzáadni a rendszerhez. A recepciós a felületen tud új vendéget hozzáadni a rendszerhez. Az óra hozzárendelhető egy vendéghez. Attól függően, hogy az óra tulajdonosa gyerek vagy felnőtt, különböző szolgáltatásokat vehet igénybe (pl. gyerek nem vehet alkoholt a bárban, és nem használhatja a szaunát). Az óra rögzíti az igényevett szolgáltatásokat. A távozáskor a recepciós le tudja kérdezni az óra birtokosa által igénybevett szolgáltatásokat és a fizetendő összeget. Fizetés után az órát alapállapotba helyezi.

## Használati esetek

![](https://www.planttext.com/api/plantuml/img/RP9DZeCm38NtEKMMiA07YAfHRrAPn825YL5-fgggkVk42dM2XftvdktdF76B2KBA2ol68UaaEj0u9Uqee4qaNgcj03yowbBXki6NQY8cRLdih1qc88wjQWB-qHuOlCL2LtZgdfXRzLClw_Fp7cN1D94VNmUNSbCEu5EnALrw477RS3KBOTU0hKnITjTVUWY8sWNoypPtiCqHxn73DrcCjUi3sMCig2aTEaBsqExrWvQbtBYAyBxEV9AWc4pNVPt5yR_fD1y3BlDRFoHIyVha2bV17gAuNYvc9cVC8A4dvz3NRpfH3xxNhdlhgdRzm1jwj_qilm00)

_Recepciós:_
- beállítja az óra adatait
- lekérdezi távozáskor a számlát
- visszaállítja az órát alapállapotba

_Felnőtt:_
- vásárolhat az étteremben
- vehet italt (alkoholosat is) a bárban
- használhatja a medencéket
- használhatja a szaunát
- fizeti a számlát

_Gyerek:_
- vásárolhat az étteremben
- vehet italt a bárban, de csak ALKOHOLMENTESET
- használhatja a szaunát


## Képernyő tervek

Mivel képeket nem lehetséges beszúrni , ezért egy driveba lettek feltöltve.

https://drive.google.com/drive/folders/1H4-clpWIFFyiWhjuF3P1GDWBlcLjBzFO?usp=sharing

## Forgatókönyvek

A kezdőlapra érkezve megtaláljuk a menüpontokat melyek tartalmazzák az óra hozzáadását, óra listázását,guest hozzáadását, guest listázását,Home oldal,a weboldal csapatot akik készítették.
Az óra hozzáadása menüpontra kattintva tudunk hozzáadni összeget és ,hogy az fizetve volt illetve nem.
Az óra listázása menüpontra kattintva tudunk törölni, illetve egy táblázatban hogy épp kik azok akiknek történt valami tranzakciója.
A guest hozzáadása menüpontra kattintva tudunk guest-et hozzáadni aminek megtudjuk adni , vezetéknév , keresztnév , életkor, és email elérhetőségünket, vagyis ezáltal bekerülni az adatbázisrendszerébe.
A guest listázása menüpontra kattintva tudunk törölni, illetve egy táblázatban hogy épp kik azok akik szerepelnek benne.
