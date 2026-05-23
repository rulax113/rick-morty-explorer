# Rick & Morty Explorer

Projekt semestralny z przedmiotu **Framework Angular**

**Autor:** Dominik Ruszkiewicz — Informatyka, sem. VI

---

## Informacja dla wykładowcy

Pierwotnie projekt był zaplanowany jako **Marvel Library** z wykorzystaniem Marvel API.
Ze względu na niedostępność Marvel API (wymaga klucza, ograniczenia CORS, problemy z rejestracją)
— po wcześniejszym uzgodnieniu — zmieniłem temat projektu na **Rick & Morty Explorer**.

Rick and Morty API zostało wybrane ponieważ:
- jest w pełni publiczne i nie wymaga klucza API
- posiada obrazki każdej postaci
- ma pole statusu (Alive / Dead / Unknown) które mapuje się na wymagany model
- pasuje do istniejącej architektury CRUD / list / detail

Cała architektura projektu, komponenty, routing i wymagania funkcjonalne pozostały bez zmian.

---

## Tech stack

- Angular 21 (standalone components, lazy loading, SSR)
- TypeScript
- RxJS
- SCSS
- Rick and Morty API (https://rickandmortyapi.com)
- localStorage (własne postacie)

## Funkcjonalności

- Przeglądanie listy 40 postaci z prawdziwego API
- Wyszukiwanie postaci po nazwie i lokacji
- Filtrowanie po statusie (Wszyscy / Aktywni / Polegli / Na emeryturze)
- Strona szczegółów każdej postaci
- Dodawanie własnych postaci przez formularz z podglądem zdjęcia
- Edycja i usuwanie własnych postaci
- Własne postacie zapisywane w localStorage
- Loading spinner i obsługa błędów
- Responsywny layout (mobile i desktop)

---

## Uruchomienie lokalne

Wymagania: Node.js 18+, Angular CLI

```bash
npm install -g @angular/cli
npm install
ng serve
```

Aplikacja dostępna pod adresem: `http://localhost:4200`

**Uwaga:** Przy pierwszym wejściu na stronę może pojawić się krótki spinner — wystarczy odświeżyć stronę (F5). Jest to znane zachowanie Angular SSR w trybie deweloperskim, w buildzie produkcyjnym nie występuje.

---

## Struktura projektu

**src/app/core/models/**
- character.model.ts — interfejs Character i statusy
- rick-and-morty.model.ts — interfejsy odpowiedzi API

**src/app/core/services/**
- character.service.ts — logika HTTP i localStorage

**src/app/features/**
- home — strona główna ze statystykami
- characters — lista postaci z wyszukiwarką i filtrami
- character-detail — szczegóły postaci
- character-form — formularz dodawania nowej postaci
- character-edit — formularz edycji własnej postaci

**src/app/shared/components/**
- header — nawigacja
- item-card — karta postaci na liście
- empty-state — komunikat braku wyników
- error-message — komunikat błędu

---

## Architektura

- Standalone components — każdy komponent jest niezależny, bez NgModule
- Lazy loading — każda trasa ładuje komponent dopiero przy wejściu
- SSR (Server Side Rendering) — Angular Universal
- Reactive Forms — formularz z walidacją i komunikatami błędów
- RxJS — forkJoin, Observable, catchError, map
- localStorage — persystencja własnych postaci między sesjami

---

## API

Projekt używa publicznego Rick and Morty API, bez kluczy i rejestracji.

- Endpoint: https://rickandmortyapi.com/api/character
- Pobierane strony 1 i 2 (łącznie 40 postaci)
- Dokumentacja: https://rickandmortyapi.com/documentation

---

## Routing

- /home — strona główna
- /characters — lista postaci
- /characters/new — dodaj postać
- /characters/:id — szczegóły postaci
- /characters/:id/edit — edycja własnej postaci

---

## Własne postacie

Postacie dodane przez formularz są zapisywane w localStorage pod kluczem custom_characters.
Widoczne są na liście razem z postaciami z API i oznaczone zielonym badge "Twoja postac".
Można je edytować i usuwać ze strony szczegółów.