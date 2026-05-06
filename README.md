# Marvel Library

Aplikacja SPA w Angular 18 do przeglądania i zarządzania bohaterami Marvel.

## Uruchomienie

```bash
npm install
ng serve
```

Aplikacja dostępna pod adresem `http://localhost:4200`

## Technologie

- Angular 18 (standalone components)
- TypeScript
- SCSS
- Angular Router (lazy loading)
- ReactiveFormsModule

## Architektura
src/app/
├── core/
│   ├── models/
│   │   ├── character.model.ts     # interfejs Character, STATUS_LABELS
│   │   └── characters.data.ts     # dane mock (4 postacie)
│   └── services/
│       └── character.service.ts   # mock API na Observable
├── features/
│   ├── home/                      # strona główna ze statystykami
│   ├── characters/                # lista bohaterów z wyszukiwarką
│   ├── character-detail/          # szczegóły bohatera
│   └── character-form/            # formularz dodawania
└── shared/
└── components/
├── header/                # nawigacja
├── item-card/             # karta bohatera (@Input/@Output)
├── empty-state/           # komunikat braku wyników (@Input)
└── error-message/         # komunikat błędu (@Input)

## Funkcjonalności

- Lista bohaterów z wyszukiwarką (filtrowanie po nazwie i serii)
- Szczegóły bohatera (routing z parametrem `:id`)
- Formularz dodawania nowej postaci (walidacja reaktywna)
- Obsługa stanów: ładowanie / błąd / brak wyników
- Mock API — serwis zwracający `Observable` z symulowanym delay 200ms

## Routing (lazy loading)

| Ścieżka | Komponent |
|---|---|
| `/home` | Home |
| `/characters` | Characters |
| `/characters/new` | CharacterForm |
| `/characters/:id` | CharacterDetail |

## Git Workflow

Projekt rozwijany na branchach feature:

- `feature/character-service` — mock API serwis + podpięcie do komponentów
- `feature/error-message` — komponent błędu + obsługa stanów

## Autor

Dominik Ruszkiewicz — Informatyka, sem. VI  
Projekt semestralny z przedmiotu Framework Angular