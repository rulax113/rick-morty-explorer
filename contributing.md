# Wytyczne dotyczące współtworzenia projektu

Dokument opisuje workflow pracy który musi zostać spełniony podczas pracy nad projektem w repozytorium.

## Git Workflow

Wymagane użycie Git i Github podczas tworzenia projektu.

Rekomendowane workflow:

1. Zaciągni ostatnie zmiany (git pull)
2. Zaimplementuj funkcjonalność (feature)
3. Wrzuć zmianny (git commit)
4. Wypchnij zmiany (git push)


## Wiadomość commita

Wymagane jasne i czytelne wiadomości commitów.

Rekomendowany format (Conventional Commits):

```yaml
feat: new feature 
fix: bug fix 
refactor: code improvement 
test: adding
tests docs: documentation changes
```

Przykład:

```yaml
feat: add task creation form 
fix: correct API request handling 
refactor: simplify component structure
```


## Częstotliwość dodawania zmian

Wymagana częste dodawanie zmian do repozytorium.

Rekomendacja:

- po każdym skończonym zadaniu
- po naprawionym błędzie (bug)
- po zaimplementowaniu nowej funkcjonalności


## Styl kodu

Cały kod musi być zgodny z formatowaniem projektowym.

Narzędzia:

- ESLint
- Prettier

Wymagane wykorzystywanie komend:

`npm run lint`

przed dodawaniem kodu do repozytorium.


## Branching

Tworzenie branchy (gałęzi) w repozytorium:

main (stable version)

feature (new features)

Przykład:

- feature/task-form 
- feature/api-integration


## Pull Requests

Podczas używania branchy:

1. Stworzenie 'feature' branch
2. Push branch'a
3. Otwórz "Pull Request" (tzw. PR)
4. Przegląd zmian
5. Merge do main (połączenie gałęzi ze stabilna wersją)


## Dokumentacja

Każde repozytorium musi zawierać plik README.md z dokumentacją projektu. Dokumentacja ma być na tyle przejrzysta i wyjaśniająca projekt w taki sposób aby inny deweloper czytając to wiedział na czym projekt polega, gdzie są i co robią wszystkie istotne rzeczy.
