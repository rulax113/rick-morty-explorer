# Wymagania projektu semestralnego Angular

## Cel projektu

Celem projektu jest zaprojektowanie i zaimplementowanie nowoczesnej aplikacji internetowej typu **Single Page Application (SPA)** z użyciem **Angular** oraz współczesnego toolchainu frontendowego.

Projekt ma rozwijać umiejętności:

- projektowania architektury aplikacji frontendowej w Angular,
- pracy z komponentami, szablonami i mechanizmem wiązania danych,
- organizacji kodu z użyciem modułów, serwisów i Dependency Injection,
- konfiguracji routingu i podziału aplikacji na funkcjonalne obszary,
- tworzenia formularzy reaktywnych i walidacji danych,
- integracji z zewnętrznym API,
- zarządzania stanem aplikacji,
- testowania interfejsu użytkownika,
- pracy z repozytorium Git i dokumentowania decyzji projektowych.

Projekt jest realizowany indywidualnie.

## Koncepcja projektu

Każdy student przygotowuje aplikację typu CRUD w bardziej angażującej formule: **panel operacyjny do zarządzania wyprawami / misjami / wydarzeniami / zgłoszeniami tematycznymi**. Aplikacja ma zawierać realny scenariusz użytkowy, a nie jedynie formularz i tabelę.

### Rekomendowany motyw bazowy
**Mission Planner / Expedition Tracker**

Przykładowy opis:
Użytkownik zarządza własnymi „misjami” lub „wyprawami”, które posiadają:
- tytuł,
- opis,
- kategorię,
- priorytet,
- termin,
- status,
- tagi,
- notatki,
- ocenę lub poziom trudności.

Aplikacja powinna umożliwiać:
- tworzenie nowych wpisów,
- przeglądanie listy wpisów,
- filtrowanie i wyszukiwanie,
- edycję wpisów,
- usuwanie wpisów,
- przegląd szczegółów,
- prezentację danych w bardziej atrakcyjny sposób niż zwykła tabela.

Dopuszczalne są inne motywy, o ile projekt zachowuje złożoność i pełny zakres CRUD, np.:
- planer wydarzeń i atrakcji,
- system zarządzania kampanią fabularną,
- katalog wypraw turystycznych,
- panel zarządzania przypadkami serwisowymi,
- organizer treningów lub wyzwań,
- biblioteka scenariuszy zajęć lub projektów.

## Cele projektu

Student powinien wykazać umiejętność:

- tworzenia komponentów, modułów i serwisów Angular,
- wykorzystania mechanizmu **Dependency Injection**,
- budowy aplikacji wielowidokowej z routingiem,
- implementacji formularzy i walidacji,
- wykonania operacji **CRUD**,
- integracji z backendem lub symulowanym REST API,
- organizacji kodu zgodnie z czytelną architekturą,
- przygotowania testów funkcjonalnych wybranych elementów,
- optymalizacji jakości kodu i podstaw wydajności aplikacji.

## Stos technologiczny

Projekt musi zostać wykonany z użyciem poniższych technologii.

### Technologie obowiązkowe
- **Angular**
- **TypeScript**
- **Angular CLI**
- **Angular Router**
- **Angular HttpClient**
- **Reactive Forms**
- **RxJS**
- **SCSS** lub CSS
- **Angular Testing Utilities**
- **Jasmine** lub **Jest** (jeżeli student świadomie skonfiguruje alternatywę)
- **Karma** lub inne uzasadnione środowisko testowe
- **ESLint**
- **Prettier**
- **Git + GitHub**

### Podejście obowiązkowe
- podział aplikacji na komponenty,
- wydzielenie logiki komunikacji do serwisów,
- korzystanie z routingu,
- stosowanie formularzy reaktywnych,
- czytelne rozdzielenie logiki, widoków i modeli danych,
- stosowanie Observable tam, gdzie jest to uzasadnione architekturą Angular.

## Wymagania architektoniczne

Aplikacja musi być zbudowana zgodnie z podejściem warstwowym.

Rekomendowana struktura:

```text
src/
└── app/
    ├── core/
    │   ├── services/
    │   ├── guards/
    │   ├── interceptors/
    │   └── models/
    ├── shared/
    │   ├── components/
    │   ├── pipes/
    │   ├── directives/
    │   └── utils/
    ├── features/
    │   ├── dashboard/
    │   ├── items/
    │   ├── item-details/
    │   ├── item-form/
    │   └── settings/
    ├── store/
    ├── app-routing.module.ts
    └── app.module.ts
```

### Obowiązkowe elementy architektury
- warstwa komponentów UI,
- warstwa widoków / feature modules albo feature areas,
- routing aplikacji,
- warstwa serwisów do komunikacji z API,
- modele lub interfejsy TypeScript,
- czytelny podział odpowiedzialności,
- konfiguracja formularzy w wydzielonej logice,
- podstawowa separacja elementów współdzielonych od elementów domenowych.

## Wymagania funkcjonalne

Każda aplikacja musi zawierać poniższe elementy, niezależnie od wariantu tematycznego.

### Dashboard lub ekran startowy
Aplikacja musi posiadać stronę startową prezentującą ogólny kontekst projektu, np.:
- liczbę elementów,
- statystyki statusów,
- ostatnio zmodyfikowane wpisy,
- skróty do najważniejszych akcji.

### Lista danych
Aplikacja musi prezentować dane w formie listy, siatki, kart lub innej sensownej reprezentacji.

### Widok szczegółów
Aplikacja musi posiadać podstronę szczegółów pojedynczego elementu.

### Tworzenie elementu
Użytkownik musi móc dodać nowy rekord.

### Edycja elementu
Użytkownik musi móc edytować istniejący rekord.

### Usuwanie elementu
Użytkownik musi móc usunąć rekord, z zachowaniem czytelnego potwierdzenia akcji lub zabezpieczenia przed przypadkowym usunięciem.

### Wyszukiwanie i filtrowanie
Aplikacja musi umożliwiać:
- wyszukiwanie danych,
- filtrowanie po minimum 2 polach,
- sortowanie po minimum 1 polu.

### Obsługa stanów aplikacji
Aplikacja musi obsługiwać:
- stan ładowania,
- stan błędu,
- pusty stan danych,
- sukces operacji użytkownika,
- walidacyjne błędy formularzy.

## Routing i nawigacja

Aplikacja musi wykorzystywać **Angular Router**.

Minimalny zestaw tras:

```text
/
/dashboard
/items
/items/new
/items/:id
/items/:id/edit
```

Dopuszczalne są inne nazwy tras, jeśli są logiczne dla danego projektu.

### Wymagania dodatkowe dla routingu
- aktywna nawigacja,
- przekierowanie dla nieistniejących tras,
- minimum jeden obszar przygotowany jako osobna sekcja funkcjonalna,
- mile widziane **lazy loading** dla większych fragmentów aplikacji.

## Integracja z API

Projekt musi wykorzystywać backend lub symulowane REST API.

### Dopuszczalne warianty
- własny backend REST,
- `json-server`,
- Firebase lub Supabase w formule REST / API,
- inne uzasadnione rozwiązanie zaakceptowane przez prowadzącego.

### Wymagania
- pobieranie danych z API,
- tworzenie danych,
- aktualizacja danych,
- usuwanie danych,
- parametryzacja zapytań,
- obsługa błędów,
- wydzielenie komunikacji do warstwy `services/`,
- użycie `HttpClient`.

Nie wolno umieszczać logiki HTTP bezpośrednio w komponentach widoku, jeśli prowadzi to do nieczytelnej architektury.

## Formularze i walidacja

Projekt musi zawierać co najmniej jeden rozbudowany formularz oparty o **Reactive Forms**.

Formularz powinien zawierać:
- pola tekstowe,
- minimum jedno pole wyboru,
- minimum jedno pole zależne od innego pola lub walidację warunkową,
- komunikaty błędów,
- walidację synchroniczną,
- co najmniej jedną walidację niestandardową.

Przykładowe walidacje:
- wymagane pola,
- minimalna i maksymalna długość,
- zakres liczbowy,
- poprawność daty,
- unikalność nazwy,
- zależność statusu od innych pól.

## Zarządzanie stanem

### Obowiązkowo
- lokalny stan komponentów tam, gdzie to wystarcza,
- logika współdzielona w serwisach,
- wykorzystanie **RxJS**.

### Dla wyższej oceny
- świadome użycie prostego store opartego o serwis i `BehaviorSubject`,
- albo podstawowe użycie **NgRx** w uzasadnionym zakresie.

Student nie musi wdrażać pełnego NgRx, ale powinien rozumieć, kiedy warto użyć centralnego zarządzania stanem.

## Testowanie

Projekt musi zawierać **minimum 2 testy automatyczne**.

### Narzędzia obowiązkowe
- Angular testing tools,
- Jasmine + Karma lub równoważne, poprawnie skonfigurowane rozwiązanie.

### Zalecane obszary testów
- renderowanie listy,
- działanie formularza,
- walidacja formularza,
- działanie serwisu,
- przejście między widokami,
- reakcja na pusty stan lub błąd.

Testy mają sprawdzać zachowanie aplikacji z perspektywy użytkownika lub poprawność kluczowej logiki.

## Wymagania jakościowe

Projekt musi spełniać następujące wymagania jakościowe:

- czytelne nazewnictwo plików, komponentów, serwisów i klas,
- spójne formatowanie kodu,
- brak dużych, monolitycznych komponentów bez uzasadnienia,
- podstawowa modularność,
- brak nieużywanego kodu,
- sensowna struktura katalogów,
- podstawowa dbałość o dostępność interfejsu,
- konsekwentne typowanie w TypeScript,
- unikanie powielania logiki.

## Wymagania dotyczące Git i GitHub

Projekt musi być rozwijany w repozytorium GitHub.

### Minimalne wymagania
- minimum **20 commitów** w historii projektu,
- commity rozłożone w czasie,
- czytelne komunikaty commitów,
- regularne publikowanie zmian do repozytorium.

### Zalecany format commitów
- `feat:`
- `fix:`
- `refactor:`
- `test:`
- `docs:`

Przykłady:

```yaml
feat: dodanie widoku dashboardu
fix: poprawa walidacji formularza edycji
refactor: wydzielenie logiki API do serwisu
test: dodanie testu komponentu listy
docs: aktualizacja README
```

Projekt musi zawierać:
- czytelny kod,
- jednolite formatowanie,
- uporządkowaną strukturę folderów i plików,
- konfigurację ESLint i Prettier.

## Dokumentacja projektu

Repozytorium musi zawierać plik `README.md`.

### README musi zawierać
- tytuł projektu,
- krótki opis problemu, który rozwiązuje aplikacja,
- użyte technologie,
- instrukcję uruchomienia,
- opis architektury,
- opis modelu danych,
- opis integracji z API,
- opis minimum dwóch funkcjonalności dodatkowych,
- krótkie uzasadnienie decyzji projektowych.

## Wymagania antykopiujące i weryfikacyjne

W związku z łatwym dostępem do internetu i narzędzi AI projekt podlega dodatkowej weryfikacji.

### Student musi być gotowy do:
- krótkiej prezentacji działania aplikacji,
- odpowiedzi na pytania dotyczące własnego kodu,
- uzasadnienia decyzji architektonicznych,
- wskazania fragmentów kodu odpowiedzialnych za konkretne funkcje,
- samodzielnego dopisania drobnej zmiany podczas zaliczenia lub konsultacji.

### Ocenie podlega również:
- zgodność kodu z historią commitów,
- spójność repozytorium,
- umiejętność omówienia architektury,
- zgodność deklarowanych technologii z faktycznym kodem.

Oznacza to, że samo posiadanie działającego kodu nie jest wystarczające.

## Funkcjonalności dodatkowe

Każdy student otrzymuje **2 funkcjonalności dodatkowe**, które są obowiązkowe dla jego wariantu projektu.

Przykładowe funkcjonalności dodatkowe:
- widok kanban,
- tagowanie,
- historia zmian,
- panel statystyk,
- eksport danych do JSON lub CSV,
- filtrowanie wielokryterialne,
- tryb ciemny,
- system notatek,
- archiwizacja rekordów,
- widok kalendarza,
- paginacja,
- wyszukiwanie pełnotekstowe,
- oznaczanie priorytetów kolorami.

## Minimalne wymagania zaliczeniowe

Aby uzyskać ocenę pozytywną, projekt musi zawierać:

- działającą aplikację SPA w Angular,
- routing,
- formularze reaktywne,
- integrację z API,
- pełny zakres CRUD,
- listę danych,
- widok szczegółów,
- wyszukiwanie,
- filtrowanie,
- minimum 2 funkcjonalności dodatkowe,
- minimum 2 testy,
- repozytorium GitHub,
- README,
- minimum 20 commitów.

## Uruchomienie projektu

Projekt musi uruchamiać się poleceniami:

```bash
npm install
ng serve
```

Jeżeli projekt wymaga uruchomienia osobnego backendu, student musi to jasno opisać w `README.md`.

## Kryteria oceny

### Ocena 3.0
- aplikacja działa,
- zawiera podstawowy CRUD,
- routing działa poprawnie,
- formularze są zaimplementowane,
- dane pobierane są z API,
- kod jest czytelny na podstawowym poziomie.

### Ocena 4.0
- projekt ma sensowną architekturę,
- zastosowano walidację i dobre rozdzielenie odpowiedzialności,
- aplikacja jest estetyczna i spójna,
- występują dodatkowe funkcjonalności,
- testy obejmują ważne elementy.

### Ocena 5.0
- projekt jest dopracowany architektonicznie,
- posiada przemyślany interfejs i dobry UX,
- użyto świadomie mechanizmów Angular, RxJS i routingu,
- kod jest modularny i dobrze opisany,
- student potrafi merytorycznie obronić decyzje techniczne,
- projekt wyraźnie wykracza poza minimalne CRUD „formularz + tabela”.
