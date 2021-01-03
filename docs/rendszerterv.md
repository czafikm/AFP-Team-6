# Rendszerterv
>Wellness Budget Project
>AFP-Team-6

## A rendszer célja

A rendszer célja, hogy egyszerűsítse a hotel szolgáltatásainak használatát, azok nyomon követését  és kényelmesebbé tegye a vendégek számára azáltal, hogy nem kell folyamatosan készpénzt tartaniuk maguknál.
A szolgáltatások használatát egy-egy egyedi egyedi id-vel rendelkező órával oldjuk meg.
A rendszer kezelését a recepciós végzi, ő viszi fel az adatokat az órához, illetve fizetéskor visszaállítja az alapállapotba.
A vendégeket két csoportba sorolhatjuk, amelyet az órán is rögzítünk: gyerek és felnőtt.
A gyerek korlátozottan használhat egyes szolgáltatásokat, pl. nem vehet alkoholos italt.

## Projekt terv

A projektet web alkalmazásként  fejlesztjük front- és backend segítségével. Az elkülönített feladatokon más-más emberek dolgoznak.
Backend fejlesztése Java segítségével.
Frontend fejlesztése JavaScript segítségével.

Frontend felelősök:
-  A feladat célja, hogy a weblap könnyen kezelhető legyen a felhasználók és adminisztrátorok számára. 

Backend felelősök:
- Feladatuk az adatbázishoz való csatlakozás biztosítása, illetve a benne kezelt műveletek megírása.

## Üzleti folyamatok modellje

## Követelmények

A rendszer fejlesztése HTML/CSS valamint PHP, JavaScript és Java ,Spring Boot segítségével történik.
	A weblap felépítése, valamint dizájnolása a HTML/CSS nyelv implementálásával valósítandó meg. Az adatbázishoz csatlakozás,
	bejelentkezés, adminisztrátori jogosultság felismertetése, stb. pedig a PHP/JavaScript-el.
	A weboldal használatához egy egyszerű böngészőre van szükség.

## Funkcionális terv

Rendszerszereplők
- recepciós
- felnőtt vendég
- gyerek vendég

Rendszer használati esetek
- Recepciós
	- Felvehet új vendéget
	- Összerendelheti a vendéget egy órával
	- Lekérheti egy óra használati adatait
	- Lekérheti a számlát
	- Nullázhatja az óra adatait
	
- Felnőtt vendég
	- Érkezéskor megadja az adatait és átveszi az órát
	- Az étteremben vásárolhat ételt, amelyet az óra lehúzásával rögzít
	- A bárban vásárolhat italt, amelyet az óra lehúzásával rögzít
	- A wellness részlegben használhatja a szaunát és a medencét is, az óra lehúzásával léphet be
	- Távozáskor fizeti a számlát az óra adatai alapján és leadja az órát
	
- Gyerek vendég
	- Érkezéskor átveszi az órát
	- Az étteremben vásárolhat ételt, amelyet az óra lehúzásával rögzít
	- A bárban vásárolhat italt, csak alkoholmenteset, (az óra lehúzásakor jelez a pultosnak, hogy kiskorú a tulajdonosa)
	- A wellness részlegben használhatja a szaunát (a medencét csak szülői engedéllyel) az óra lehúzásával léphet be
	- Távozáskor leadja az órát
	
	Menüpontok:
		- HOME
		- Add Watch
		- Watch List
		- Add Watch
		- Guest List

## Fizikai környezet

A rendszer fejlesztése HTML/CSS valamint PHP, JavaScript és Java,Spring Boot segítségével történik.
Mely nem más keretrendszert használt mint a Spring Boot-ot.
A weblap felépítése, valamint dizájnolása a HTML/CSS nyelv implementálásával valósítandó meg.
A weboldal használatához egy egyszerű böngészőre van szükség.
Az adatbázishoz csatlakozás,bejelentkezés, adminisztrátori jogosultság felismertetése, stb. pedig a PHP/JavaScript-el.
A rendszert bármilyen operációs rendszeren és böngészőben haszálható lesz, bár  telefonról nem lenne képes rá.

## Architekturális terv

A rendszerhez szükség van egy adatbázis szerverre, ebben az esetben
MySql-t használunk. A kliens oldali programokat egy php alapú REST api
szolgálja ki, ez csatlakozik az adatbázis szerverhez. A kliensekkel JSON
objektumokkal kommunikál.

## Adatbázis terv

|    ID     |    Description                               											| 
|-----------|-----------------------------------------------------------------------------------------------------------------------------------|
|    F1     | UUID: ID, String: GuestName, Byte: GuestAge, Uint: Balance  									|
|    F2     | List: Purchases, Óra ID lekérése, majd  Purchases lekérdezése.    								| 
|    F3     | List: LogHistory, Egyes funkciói üzenetei egy listában tárolódnak.								| 
|    F4     | Visszadja az órához tartozó Balance értékét az ID alapján. 									| 
|    F5     | Bool: IsPaid, Amint megtörtént a fizetés(IsPaid = True), az óra Balance mezőjét visszaállítjuk alapértelmezettre. (0 Ft) 		|  
|    F6     | Az óra GuestAge mezőjének értéke alapján a vendég különböző szolgáltatásokat tudd igénybe venni.					|
|    F7     | Amint meghívjuk a Services enum egy értékét, a hozzátartozó értékkel terheli a számlánkat. 					|
|    F8     | A Leave metódus meghívása után az óra Balance mező megfelelő értéket kell kifizetnünk. 						|
|    F9     | Bool: IsLeave, Amint az értéke True-ra változik meghívódik automatikusan a Payment metódus.					|
|    F10    | Enum: ServiceList, Minden enum értékhez tartozik egy ár, amely csak a megfelelő korral(GuestAge) vehető igénybe.			|
|    F11    | Enum: Roles, Minden role rendelkezik saját funkciókkal.										|

## Tesztterv

|                |Ellenőrzendő                     |
|----------------|---------------------------------|
|        1       |`Backend végpontok elérhetősége` |
|        2       |`Adat felvitele watch-hoz`       |
|        3       |`Adat lekérdezése watch-ról `    |
|        4       |`Watch törlése                `  |
|        5       |`Adat felvitele guest-hez`                |
|        6       |`Adat lekérdezése guest-ről `             |
|        7       |`Guest törlése                `           |
|        8       |`Frontend elérhetőségének ellenőrzése `   |
|        9       |`Menüpontok működésének ellenőrzése` |
|        10      |`Adatok felvitelének tesztelése a frontenden` |
|       11       |`Adatbázisban lévő adatok megjeleníthetőségének ellenőrzése` |
|       12       |`Törlés frontenden keresztül`|

