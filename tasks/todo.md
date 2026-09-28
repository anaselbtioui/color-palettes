# Color Palette Explorer Tasks

## Task 1: Create semantic app shell and palette data model

**Description:** Create the static entry point and centralized palette records for swatches, names, moods, art examples, UI examples, and adaptation prompts.

**Acceptance criteria:**
- [x] Page contains header, palette list area, and selected palette detail area.
- [x] Palette records expose every field required by the interface.

**Verification:**
- [ ] Open page directly in a browser.
- [ ] Confirm no external dependency is required.

**Dependencies:** None

**Files likely touched:**
- `index.html`
- `app.js`

**Estimated scope:** Medium: 3-5 files

## Task 2: Add dark blue-grey visual system and responsive layout

**Description:** Define a minimal visual language with dark blue-grey chrome, warm surfaces, strong swatches, and mobile layout behavior.

**Acceptance criteria:**
- [x] Desktop view uses a clear two-column composition.
- [x] Mobile view stacks content without horizontal scrolling.
- [x] Text and controls remain readable against every background.

**Verification:**
- [ ] Inspect at desktop and narrow viewport widths.

**Dependencies:** Task 1

**Files likely touched:**
- `styles.css`

**Estimated scope:** Medium: 3-5 files

## Task 3: Render palette cards with art and UI usage examples

**Description:** Render palette choices and selected palette content from the shared data model, including provisional reference examples users can replace.

**Acceptance criteria:**
- [x] Every palette card shows swatch strip, title, and concise mood text.
- [x] Selected detail shows art reference, UI use case, and adaptation prompt.
- [x] Selected state is visually clear.

**Verification:**
- [ ] Select every palette and confirm content changes.

**Dependencies:** Tasks 1-2

**Files likely touched:**
- `app.js`
- `styles.css`

**Estimated scope:** Medium: 3-5 files

## Task 4: Add palette selection, shuffle, and prompt-copy interactions

**Description:** Add lightweight interactions that help users explore suggestions and reuse the generated prompt.

**Acceptance criteria:**
- [x] Clicking a palette updates the detail panel.
- [x] Shuffle selects a different palette.
- [x] Copy action copies the current prompt and shows temporary success feedback.

**Verification:**
- [ ] Exercise selection, shuffle, and copy in a browser.

**Dependencies:** Task 3

**Files likely touched:**
- `app.js`

**Estimated scope:** Small: 1-2 files

## Task 5: Add accessible states, restrained motion, and final content hierarchy

**Description:** Add keyboard focus treatment, reduced-motion handling, and final polish without increasing label density.

**Acceptance criteria:**
- [x] Interactive controls are keyboard reachable.
- [x] Focus states are visible.
- [x] Reduced-motion preference disables nonessential transitions.

**Verification:**
- [ ] Navigate controls with keyboard.
- [ ] Inspect with reduced-motion enabled.

**Dependencies:** Task 4

**Files likely touched:**
- `index.html`
- `styles.css`
- `app.js`

**Estimated scope:** Medium: 3-5 files
