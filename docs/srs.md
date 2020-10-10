# Software Requirement Specification

## Desired system

A *recepciós* tudja az órához tartozó virtuális számlát nullázni (***ResetClockBalance***), távozáskor elkéri az órát (***Leave***) a **recepció**nál.

A *felnőtt* a számlát fizeti (***Payment***) a **recepció**nál, szaunát használhat, úszómedencét használhat a **wellness részleg**nél (***Services***), 	
alkoholos-alkolmentes italt tud vásárolni a **bár**ból és ételt tud venni az **étterem**ből (***BuySomething***).

A *gyerek* használni tudja az úszómedencét a **wellness részleg**en (***Services***), csak alkolmentes italt tud vásárolni a **bár**ból és		
ételt tud venni az **étterem**ből(***BuySomething***). 

Az alábbi felsorolás a fentebb leírtakat szemlélteti: 

**Recepció:**
		
- Virtuális számla nullázása (***ResetClockBalance***): - *Recepciós*	
- Távozáskor elkéri az órát (***Leave***): - *Recepciós*	
- A felnőtt a számlát fizeti (***Payment***) : - *Felnőtt*
	
__Wellness részleg:__

- Szauna használat (***Services***): - *Felnőtt*				
- Úszómedence használata (***Services***): - *Felnőtt , Gyerek*	

__Bár:__

- Alkoholos ital vásárlás (***BuySomething***): - *Felnőtt* 			
- Alkoholmentes ital vásárlás (***BuySomething***): - *Felnőtt , Gyerek*

__Étterem:__		

- Étel-t tud venni (***BuySomething***): - *Felnőtt , Gyerek*

## Funckciók listája

|    ID     |    Name                         |    Description                                                                                            | 
|-----------|---------------------------------|-----------------------------------------------------------------------------------------------------------|
|    F1     |    ClockDetails                 |   Az órához tartozik egy egyedi azonosító, valamint tartalmazza a használójának nevét és életkorát is.    |
|    F2     |    TransactionList              |   A vendég által igénybe vett szolgáltatások listája.                                                     | 
|    F3     |    ReadLogHistory               |   Sikertelen tranzakció, egyenleg terhelés, megtagadott belépés időpontokkal együtt megtekinthető.        | 
|    F4     |    GetClockBalance              |   Ez a funkció szemlélteti,hogy az adott vendég mennyit költött.		                          | 
|    F5     |    ResetClockBalance            |   Amint a vendég leadja az óráját, akkor a rajta található egyenleg nullázódik.                           |  
|    F6     |    DistinguisGuest              |   Az óra birtokosa különböző szolgáltatásokhoz fér hozzá az életkora alapján.                             |
|    F7     |    BuySomething                 |   Az órával természetesen képesek vagyunk vásárolni is ami terheli az eszközön lévő számlánkat.           |
|    F8     |    Payment                      |   Az óra leadásást követően kikell fizetnünk a keletkezett költségeket.                               	  |
|    F9     |    Leave			      |   Leadja az órát a recepcióshoz, majd ezt követően meghívjuk a Payment majd a ResetClockBalance metódust. |
|    F10    |    Services		      |   Minden szolgáltatáshoz tartozik egy ár. 								  |
|    F11    |    RoleList		      |	  Minden szerepkör rendelkezik különböző funkciókkal. 							  |		
## Adat struktúra

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
