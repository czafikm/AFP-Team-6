# Tesztelési terv

Projekt: Welness Badget Project
Csapat: AFP-Team6
Tesztelést végezet: Komjáti Evelin


|                |Ellenőrzendő                     |Ellenőrzés módja           | Eredmény|
|----------------|---------------------------------|---------------------------|---------|
|        1       |`Backend végpontok elérhetősége`          |Ellenőrzés swagger segítségével   |Láthatóak         |
|        2       |`Adat felvitele watch-hoz`                |Ellenőrzés swagger segítségével, adatok felvitele   |Sikeres			|
|        3       |`Adat lekérdezése watch-ról `             |Ellenőrzés swagger segítségével, az adatbázisban levő watch adatok lekérdezése, annak ellenőrzése, hogy megjelennek-e   |Sikeres		    |
|        4       |`Watch törlése                `           |Ellenőrzés swagger segítségével, egy korábban felvett watch törlése   |Sikeres           |
|        5       |`Adat felvitele guest-hez`                |Ellenőrzés swagger segítségével, adatok felvitele      |Sikeres			|
|        6       |`Adat lekérdezése guest-ről `             |Ellenőrzés swagger segítségével, az adatbázisban levő guest adatok lekérdezése, annak ellenőrzése, hogy megjelennek-e     |Sikeres		    |
|        7       |`Guest törlése                `           |Ellenőrzés swagger segítségével, egy korábban felvett guest törlése   |Sikeres           |
|        8       |`Frontend elérhetőségének ellenőrzése `   |A frontend megnyitása a böngészőben |Elérhető, látható		    |
|        9       |`Menüpontok működésének ellenőrzése` |Megnézni, hogy a megfelelő menüpontok választásakor a megfelelő felület jelenjen meg   |Minden a helyén van, a megjelenés megfelelő           |
|        10      |`Adatok felvitelének tesztelése a frontenden` | A megfelelő menüpont alatt, a megfelelő beviteli mezők kitöltésével adatot viszünk fel |Sikeresen felvételre került egy watch és egy guest a frontenden keresztül|
|       11       |`Adatbázisban lévő adatok megjeleníthetőségének ellenőrzése` | Egy gombbal kilistázzuk egy táblázatba, az adatbázisban szereplő elemeket|Sikeresen kilistázta egy táblázatba|
|       12       |`Törlés frontenden keresztül`| A törlésre kialakított felületen id alapján tudunk elemet törölni| Sikeres törlés watch és guest esetén is|
