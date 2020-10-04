# Software Requirement Specification

## Desired system

Ide jöhet a szoftver részletesebb leírása (az egyes funkciók mit is tudnak kicsit bővebben, felhasználók jogosultságai srb) a Use Case alapján.

## Function list

|    Module                  |    ID     |    Name                         |    Description                                                                                       | 
|----------------------------|-----------|---------------------------------|------------------------------------------------------------------------------------------------------|
|    Database                |    D1     |    Adatbázis                    |   Az adatbázisban tárolódnak a webalkalmazáshoz szükséges adatok.                                    |  |    Frontend GUI            |    F1     |    Órához tartozó adatok        |   Ezen oldalon áttekinthető az órához tartozó egyenleg,valamint a vendég adatai is.                  |
|    Frontend GUI            |    F2     |    Tranzakciók listázása        |   A vendég által igénybe vett szolgáltatások listája.                                                | 
|    Frontend GUI            |    F3     |    Logolás megtekintése         |   Sikertelen tranzakció, egyenleg terhelés, megtagadott belépés időpontokkal együtt megtekinthető.   | 
|    Backend                 |    B1     |    Óra egyenleg lekérdezés      |   Ez a funkció szemlélteti,hogy az adott vendég mennyit költött.		                                  | |    Backend                 |    B2     |    Óra egyenleg lezárása        |   Amint a vendég leadja az óráját, akkor a rajta található egyenleg nullázódik.                      |  |    Backend    	            |    B3     |    Órához tartozó hibaüzenetek  |   A használat során az óra képes visszajelzést küldeni egy adott funkció használatának kimeneteléről.|
|    Backend    	           |    B4     |    Vendégek megkülönböztetése   |   Az óra birtokosa különböző szolgáltatásokhoz fér hozzá az életkora alapján.                        |
|    Backend    	           |    B5     |    Tranzakciók lebonyolítása    |   Az órával természetesen képesek vagyunk vásárolni is ami terheli az eszközön lévő számlánkat.      |
|    Backend    	           |    B6     |    Logolás                      |   Az óra használata során keletkezett visszajelzések áttekinthetőek.                                 | 
