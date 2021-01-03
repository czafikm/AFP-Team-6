# Funkcionális specifikáció
>Wellness Budget Project
>AFP-Team-6

## Bevezetés

Egy készpénz nélküli fizetést megvalósító rendszert fejlesztünk egy wellness hotel számára. A vendégeknek a hotelben tartózkodás idején nem szükséges készpénzt tartaniuk maguknál. A szolgáltatásokat a bejelentkezéskor kapott óra segítségével tudják igénybe venni, amely rögzít minden egyes használatot. A számlát a kijelentkezéskor tudják a vendégek kiegyenlíteni készpénzes vagy bankkártyás fizetési módon.
A rendszert a recepciós kezeli.
A rendszer megkönnyíti és kényelmesebbé teszi a hotel vendégei számára a fizetős szolgáltatások használatát, illetve segít betartani a gyerekekre vonatkozó korlátozásokat (pl. nem vehetnek alkoholos italt).

## Jelenlegi helyzet

The watches and the readers are already installed and they communicate with the system via Internet. These devices usually can process the response and approve or reject the transaction. Some of these devices can print simple reponse messages about the error. For example, if a childre wants to use the sauna then the entrace gate rejects their request. In another scenario, if a 17- years-old person wants to pay for alcohol then the bartender would recieveed a message about the restriction.

## Vágyálom rendszer

Our Wellness hotel wants to introduce a cashless system where our guests can buy services easily. The guests will get a watch which identify them. When many guests arrive they get their own watches but they will pay in a single bill. So the watch identies the customer but multiple customers can belong to a bill. When the guests leave, the give back the wathces that will be assign to new guests. Guests can pay for various services by simply touching the terminal similar to PayPass. We would like to monitor their consumption and give detailed invoice if needed. In addition, we would like to limit available services for guests so some service would be unavailabe for certain guests. For example, children could not by alcohol. Some services are provided by our employees for exmaple the drinks are served by a bartender in the bar. While other services can be accessed via its entrance such as the sanua.

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
