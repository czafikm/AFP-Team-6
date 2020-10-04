# Software Requirement Specification

## Desired system

A *recepciós* tud zárni és számlát nyomtatni , meglévő számlát tud csatolni az órához a **recepció**nál.

A *felnőtt* a számlát fizeti a **recepció**nál, szaunát használhat, úszómedencét használhat a **wellness részleg**nél, 	
alkoholos-alkolmentes italt tud vásárolni a **bár**ból, ételt tud venni az **étterem**ből.

A *gyerek* használni tudja az úszómedencét a **wellness részleg**en,csak alkolmentes italt tud vásárolni a **bár**ból, 		
ételt tud venni az **étterem**ből. 

Az alábbi felsorolás a fentebb leírtakat szemlélteti: 

**Recepció:**
		
- Zárás és számla nyomtatás (close and print bill): - *Recepciós*	
- Meglévő számla csatolása az órához (attach bill): - *Recepciós*	
- Kifizeti a számlát (pay bill): - *Felnőtt*
	
__Wellness részleg:__

- Szauna használat (use sauna) : - *Felnőtt*				
- Úszómedence használata (use swimmingpool): - *Felnőtt, Gyerek*	

__Bár:__

- Alkoholos ital vásárlás(buy alcohol): - *Felnőtt* 			
- Alkoholmentes ital vásárlás(buy non alcohol drink): - *Felnőtt,Gyerek*

__Étterem:__		

- Étel-t tud venni(buy food): - *Felnőtt,Gyerek*


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
