# FROM VERTEX TO REALITY — PLAN.md

## 1. Cel projektu
Stwórz **zjawiskową stronę scroll-driven** typu one-page experience, która pokazuje dwa połączone etapy historii:

1. **Build the World** — jak z punktów i geometrii powstaje scena 3D.
2. **Enter the World** — gotowy samochód rusza przez cyberpunkowe miasto i wjeżdża do świetlistego tunelu.

Strona ma być portfolio-quality, dopracowana wizualnie, płynna, responsywna i nowoczesna. Efekt końcowy ma robić **wow** już od pierwszych sekund.

---

## 2. Materiały wejściowe
Użyj dokładnie tych plików:

- `public/videos/build-the-world-gop1.mp4`
- `public/videos/enter-the-world-gop1.mp4`
- `references/transition-frame.png`

Założenia dla filmów:
- 1920×1080
- 24 FPS
- 10 sekund każdy
- GOP=1 (każda klatka kluczowa) dla precyzyjnego scrubowania po scrollu
- bez dźwięku

---

## 3. Stack technologiczny
Zbuduj projekt w:
- **React + Vite + TypeScript**
- **Tailwind CSS** do stylowania
- **GSAP + ScrollTrigger** do sterowania scrollem i pinningiem sekcji
- opcjonalnie **Lenis** do wygładzenia scrolla, ale tylko jeśli nie psuje precyzji scrubowania

Nie używaj ciężkich, zbędnych bibliotek. Priorytet: płynność, porządek w kodzie i dobra architektura.

---

## 4. Ogólna koncepcja UX
### Narracja:
Użytkownik przewija stronę i **steruje historią**.

### Odcinki strony:
1. **Hero / Intro**
2. **Video chapter 1: Build the World**
3. **Transition chapter**
4. **Video chapter 2: Enter the World**
5. **Interactive finale / CTA**

### Ton projektu:
- premium
- filmowy
- futurystyczny
- minimalistyczny
- bez przeładowania tekstem

---

## 5. Najważniejsze wymagania funkcjonalne
### 5.1 Scroll-controlled video scrub
Każdy film ma być sterowany scrollowaniem, a nie zwykłym autoplay.

Wymagania:
- sekcja z filmem przypięta (`pin`) na czas przewijania
- scroll mapowany na `video.currentTime`
- ruch ma być płynny, ale przewidywalny
- obie animacje mają działać dobrze przy scrollowaniu w dół i w górę
- użytkownik ma mieć poczucie „sterowania renderem”

### 5.2 Dwa osobne rozdziały
Film 1 i Film 2 mają działać jako dwa osobne etapy historii:
- najpierw budowa świata
- potem wejście do świata

### 5.3 Płynne przejście między rozdziałami
Po zakończeniu pierwszego filmu:
- ostatnia klatka może zostać chwilowo „zamrożona”
- pojawia się krótki tekst przejściowy
- następnie użytkownik wchodzi w drugi rozdział

Przejście nie może wyglądać jak przypadkowe ucięcie. Ma sprawiać wrażenie świadomej kontynuacji historii.

---

## 6. Szczegółowy układ strony

## 6.1 Hero section
Pełnoekranowy ekran startowy.

Zawartość:
- duży tytuł: **FROM VERTEX TO REALITY**
- krótki subtitle: np. `See how a digital world comes alive.`
- mała wskazówka: `Scroll to begin`
- delikatne, subtelne tło (gradient / ziarno / glow)

Efekt:
- tekst może lekko fade-in / slide-up
- subtelny shimmer lub film-grain
- bez ciężkich animacji w tle

---

## 6.2 Chapter 1 — Build the World
Pełnoekranowa sekcja ze scrubowanym filmem `build-the-world-gop1.mp4`.

### Overlay narracyjny
Nałożony tekst powinien zmieniać się w trakcie scrolla.

Proponowane etapy:
1. **Everything starts with a point**
2. **Vertices become structure**
3. **Geometry defines the world**
4. **Materials add identity**
5. **Light creates atmosphere**
6. **The scene becomes real**

Teksty:
- krótkie
- czytelne
- subtelne animacje wejścia/wyjścia
- nie mogą zasłaniać kluczowych elementów obrazu

### Dodatkowe mikrodetale
Można dodać subtelne HUD labels, np.:
- `Vertices`
- `Edges`
- `Geometry`
- `Materials`
- `Lighting`
- `Final Render`

Ale minimalistycznie — bez przesady.

---

## 6.3 Transition section
Krótka sekcja pomiędzy filmami.

Cel:
- dać oddech
- zaznaczyć zmianę rozdziału
- przygotować użytkownika na wejście do świata

Zawartość:
- zamrożona lub powiększona ostatnia klatka pierwszego filmu
- krótki tekst, np.:
  - `The world is built.`
  - `Now enter it.`

Efekt:
- delikatny zoom
- glow / vignette
- płynne przejście do kolejnej sekcji

---

## 6.4 Chapter 2 — Enter the World
Pełnoekranowa sekcja ze scrubowanym filmem `enter-the-world-gop1.mp4`.

### Overlay narracyjny
Proponowane etapy:
1. **A finished scene is only the beginning**
2. **Motion gives it life**
3. **Light, speed and atmosphere take over**
4. **You are no longer observing the world**
5. **You are inside it**

Zadbaj, aby teksty pojawiały się w miejscach, które nie psują odbioru samochodu i tunelu.

---

## 6.5 Finale / CTA
Ostatnia sekcja po filmie 2.

Ma zostawiać dobre domknięcie i wyglądać portfolio-ready.

Zawartość:
- duży tekst końcowy, np.:
  - `Built from data. Brought to life with motion.`
- krótki opis: że to eksperyment scroll-driven / cinematic web experience
- CTA button, np.:
  - `View more experiments`
  - `See the process`
  - `Back to top`

Można dodać mały panel z metadanymi:
- Scroll-driven storytelling
- React / GSAP / Video scrubbing
- 2 cinematic sequences

---

## 7. Mapowanie scrolla
Zaprojektuj długie sekcje tak, aby każda z nich dawała dużo przestrzeni na płynne scrubowanie.

### Proponowane wartości:
- Hero: `100vh`
- Chapter 1: `500–700vh`
- Transition: `120–180vh`
- Chapter 2: `500–700vh`
- Finale: `120–180vh`

Dokładne wartości dobierz eksperymentalnie, ale:
- animacja ma być płynna
- teksty mają mieć czas wybrzmieć
- użytkownik nie może czuć pośpiechu

---

## 8. Wymagania techniczne implementacji
### 8.1 Struktura komponentów
Przykładowa architektura:

- `App.tsx`
- `components/Hero.tsx`
- `components/ScrollVideoSection.tsx`
- `components/OverlayNarration.tsx`
- `components/TransitionSection.tsx`
- `components/Finale.tsx`
- `hooks/useScrollVideo.ts`
- `data/story.ts`

### 8.2 Reużywalny komponent video section
Zrób jeden reużywalny komponent do scrubowania filmu, który przyjmuje np.:
- `videoSrc`
- `title`
- `steps`
- `scrollLength`
- `theme`

Nie duplikuj logiki dla obu filmów.

### 8.3 Hook do sterowania video po scrollu
Wydziel logikę do hooka, np. `useScrollVideo()`.

Hook powinien:
- inicjalizować `ScrollTrigger`
- pilnować gotowości metadanych video
- mapować progres scrolla na `currentTime`
- czyścić instancje przy unmount
- dobrze działać po odświeżeniu strony i resize

### 8.4 Preload i stabilność
Zadbaj o:
- preload metadanych / filmu
- brak błędów przy szybkim przewijaniu
- fallback, jeśli video nie jest jeszcze gotowe
- poprawne odpinanie event listenerów

---

## 9. Styling i direction artystyczny
### Estetyka:
- ciemne tło
- cyberpunkowe akcenty: cyan / magenta / soft white
- delikatne blury, glowy i przezroczystości
- bardzo dobre spacingi
- nowoczesna typografia (np. Inter / Satoshi / Geist)

### Zasady:
- dużo powietrza
- mało tekstu
- duże kontrasty
- żadnego chaosu
- nowoczesne, eleganckie UI

### Dodatki mile widziane:
- subtle noise overlay
- animated gradient glow
- thin borders / glass panels
- małe HUD-style numeracje sekcji

---

## 10. Responsywność
Strona ma działać dobrze na:
- desktop
- laptop
- tablet
- mobile

### Wymagania mobilne:
- uproszczone overlaye tekstowe
- czytelne marginesy
- bez mikrotekstów trudnych do odczytu
- zachować klimat, ale nie przeciążać urządzeń

Jeżeli pełne scrubowanie okaże się zbyt ciężkie na słabszym mobile, można przygotować bardziej uproszczone zachowanie, ale tylko jeśli to konieczne.

---

## 11. Performance
To bardzo ważne.

### Dopilnuj:
- brak zbędnych rerenderów
- sensowne użycie `requestAnimationFrame`
- lekkie overlaye
- brak ciężkich filtrów CSS nakładanych bez potrzeby
- rozsądne użycie blurów
- odświeżanie `ScrollTrigger` po załadowaniu metadanych

### Nie rób:
- nie dodawaj ciężkiego canvas background bez potrzeby
- nie używaj kilku konkurujących bibliotek do scrolla
- nie twórz skomplikowanego systemu animacji, jeśli prostszy działa lepiej

---

## 12. SEO i meta
Mimo że to showcase page, zadbaj o podstawy:
- poprawny `title`
- `meta description`
- Open Graph
- favicon
- semantic HTML tam, gdzie ma sens

### Propozycja meta title:
`From Vertex to Reality — Scroll-Driven CGI Experience`

### Propozycja meta description:
`An immersive scroll-driven web experience showing how a digital world is built and brought to life through motion, lighting and cinematic storytelling.`

---

## 13. Accessibility
Nie przesadzaj, ale zachowaj podstawy:
- sensowny kontrast tekstu
- focus states dla przycisków
- `prefers-reduced-motion` tam, gdzie ma to sens
- sensowna hierarchia nagłówków

---

## 14. Copy / treści
Jeżeli agent będzie potrzebował gotowych tekstów, może użyć poniższych.

### Hero
**Title:**
`FROM VERTEX TO REALITY`

**Subtitle:**
`See how a digital world comes alive.`

**Hint:**
`Scroll to begin`

### Chapter 1 steps
- `Everything starts with a point.`
- `Vertices become structure.`
- `Geometry defines the world.`
- `Materials add identity.`
- `Light creates atmosphere.`
- `The scene becomes real.`

### Transition
- `The world is built.`
- `Now enter it.`

### Chapter 2 steps
- `A finished scene is only the beginning.`
- `Motion gives it life.`
- `Speed sharpens perception.`
- `Atmosphere takes over.`
- `You are no longer watching the world.`
- `You are inside it.`

### Finale
**Headline:**
`Built from data. Brought to life with motion.`

**Body:**
`A cinematic scroll-driven experiment about how digital worlds are created, rendered and experienced.`

**CTA:**
`View more experiments`

---

## 15. Kryteria akceptacji
Projekt uznaj za gotowy dopiero wtedy, gdy spełnia wszystkie punkty:

1. Oba filmy scrubują się płynnie podczas scrolla.
2. Sekcje są przypięte i czytelne.
3. Przejście między filmami wygląda naturalnie.
4. Teksty są estetyczne i nie zasłaniają kluczowego obrazu.
5. Strona działa dobrze na desktopie i sensownie na mobile.
6. UI wygląda premium i nowocześnie.
7. Kod jest czysty, podzielony na komponenty i łatwy do rozwijania.
8. Nie ma rażących problemów z wydajnością.
9. Nie zakładaj, że jest dobrze — sprawdź dokładnie działanie scrolla, synchronizacji video, layoutów i responsywności.
10. Jeżeli coś wygląda przeciętnie, dopracuj to, zamiast zostawiać „na później”.

---

## 16. Dodatkowe wskazówki dla agenta AI
- Myśl jak twórca nowoczesnego digital experience, nie jak generator zwykłej landing page.
- Priorytet to wrażenie, płynność i jakość wykonania.
- Zachowaj porządek w kodzie i opisz ewentualne decyzje techniczne.
- Jeżeli widzisz lepsze rozwiązanie niż literalne wykonanie planu, możesz je zastosować, ale tylko jeśli poprawia końcowy efekt.
- Nie przesadzaj z efektami. Lepszy minimalizm premium niż chaos.

