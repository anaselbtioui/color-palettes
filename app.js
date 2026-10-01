const palettes = [
  {
    name: "Iceland Descent",
    mood: "Cold light, open air",
    description: "Dark terrain, mineral sky, and one sharp light source. Built from the longboard descent's open scale and motion.",
    colors: ["#131C19", "#454D36", "#5F9CA4", "#F7FAF4"],
    referenceType: "Scene reference",
    reference: "The Secret Life of Walter Mitty. The longboard descent in Iceland: blue distance, dark road, and one electric yellow jacket.",
    sceneImage: "assets/art/the-secret-life-of-walter-mitty.jpg",
    referenceSource: "https://www.youtube.com/results?search_query=The+Secret+Life+of+Walter+Mitty+skateboarding+scene+official",
    referenceTag: "Film",
    prompt: "Use Iceland Descent as the visual direction for my project. Study the longboard scene in The Secret Life of Walter Mitty, Lefos, and Huts. Build from dark terrain, mineral sky, muted grass, and bright air. Keep the interface quiet and editorial. Use the lightest color only for meaningful focus or action.",
  },
  {
    name: "Ash After Impact",
    mood: "Blue night, pale ash",
    description: "A hard blue-black base with smoke-blue light. Use it for aftermath, distance, and controlled tension.",
    colors: ["#0B0E19", "#212F57", "#6892C9", "#C5CECE"],
    referenceType: "Scene reference",
    reference: "The Dark Knight. Batman standing over the burned ruins after the explosion: pale ash, blue night, and a small human figure.",
    sceneImage: "assets/art/dark-knight.jpeg",
    referenceSource: "https://www.youtube.com/results?search_query=The+Dark+Knight+Batman+ruins+explosion+scene+official",
    referenceTag: "Film",
    prompt: "Adapt Ash After Impact to my project. Study Batman over the ruins in The Dark Knight, BetterHelp, and 37signals. Build a blue-black base with steel-blue hierarchy and pale ash text. Let one warm brown note soften the system. Keep layout plain, spacious, and controlled.",
  },
  {
    name: "Her Red",
    mood: "Warm, intimate",
    description: "Rust red and amber sit inside a dark room. Use red as a recurring emotional signal against quiet shadow.",
    colors: ["#25170D", "#552714", "#B05E40", "#EFC290"],
    referenceType: "Film reference",
    reference: "Her. Red runs through the film: the protagonist's shirt, warm interiors, and small signals of intimacy against pale blue-grey space.",
    sceneImage: "assets/art/her.jpg",
    referenceSource: "https://www.youtube.com/results?search_query=Her+2013+official+trailer+red+shirt",
    referenceTag: "Film",
    prompt: "Translate Her Red into a visual language for my project. Study the recurring red in Her, BetterHelp, and Huts. Use dark brown as the room, rust red as the emotional signal, and warm cream for human presence. Keep red consistent across key states without making every element loud.",
  },
  {
    name: "Synthetic Loneliness",
    mood: "Electric and tender",
    description: "Violet shadow, magenta light, and one soft pink highlight. Artificial color carries a human feeling.",
    colors: ["#1A0D2A", "#4F2A90", "#B94390", "#E081B7"],
    referenceType: "Scene reference",
    reference: "Blade Runner 2049. The 'You seem lonely' hologram scene: dusty orange air, electric blue shadow, and artificial warmth.",
    sceneImage: "assets/art/blade-runner-2099.jpeg",
    referenceSource: "https://www.youtube.com/results?search_query=Blade+Runner+2049+you+seem+lonely+scene+official",
    referenceTag: "Film",
    prompt: "Use Synthetic Loneliness as the direction for my project. Study the 'You seem lonely' scene in Blade Runner 2049, Omarchy, Lefos, and 37signals. Build depth through violet shadow and purple structure. Use magenta for emotional emphasis and soft pink for human warmth. Keep saturation intentional.",
  },
  {
    name: "Hell's Kitchen",
    mood: "Acidic red tension",
    description: "A near-black field under sickly yellow-green light. Red appears as a signal, not decoration.",
    colors: ["#10140A", "#384B11", "#A09F05", "#C21F2B"],
    referenceType: "Scene reference",
    reference: "Daredevil. The hallway and rooftop fights use dirty green light, black silhouettes, and red as a warning signal.",
    sceneImage: "assets/art/daredevil.jpg",
    referenceSource: "https://www.youtube.com/results?search_query=Daredevil+hallway+fight+scene+official",
    referenceTag: "Series",
    prompt: "Use Hell's Kitchen as the visual direction for my project. Study Daredevil's green-lit fight scenes, Lefos, and Omarchy. Build a near-black shell with dirty yellow-green atmosphere. Reserve red for warnings, active states, and decisive actions. Keep contrast controlled and avoid decorative neon.",
  },
  {
    name: "Quiet Lefos",
    mood: "Cool, soft structure",
    favouriteNote: "Anas's favourite, for now",
    favouriteProgression: "Hoping it turns blue later",
    description: "A blue-grey field with mineral light and a restrained green note. Use it for calm editorial systems.",
    colors: ["#17252B", "#4E6671", "#9BAEAE", "#DCE4D7"],
    referenceType: "Website inspiration",
    reference: "Lefos. Cool dark field, soft hierarchy, grain, and a quiet balance between organic and geometric forms.",
    sceneImage: "media/work/lefos.gif",
    referenceSource: "https://lefos.com/",
    referenceTag: "Website",
    prompt: "Adapt Quiet Lefos to my project. Study Lefos and its cool dark field, soft hierarchy, grain, and organic geometry. Use blue-grey as the shell, mineral grey for structure, and pale green only for calm emphasis. Keep copy sparse and spacing generous.",
  },
  {
    name: "Open Care",
    mood: "Warm, human, clear",
    description: "Soft sand and eucalyptus create a supportive interface. Use it for trust, care, and low-friction guidance.",
    colors: ["#213B38", "#66877A", "#C6B9A4", "#F3EBDD"],
    referenceType: "Website inspiration",
    reference: "BetterHelp. Warm off-white surfaces, gentle green, and friendly contrast keep a care-focused interface approachable.",
    sceneImage: "media/work/betterhelp.gif",
    referenceSource: "https://www.betterhelp.com/",
    referenceTag: "Website",
    prompt: "Adapt Open Care to my project. Study BetterHelp's warm surfaces, eucalyptus green, and supportive contrast. Use dark green for trust, sand for secondary structure, and cream for open space. Keep actions obvious and language human.",
  },
  {
    name: "Terminal Bloom",
    mood: "Dark utility, bright signal",
    description: "Nordic blue-grey depth, muted steel, and pale text create calm utility. Use it for tools that need focus without noise.",
    colors: ["#2E3440", "#3B4252", "#81A1C1", "#D8DEE9"],
    referenceType: "Website inspiration",
    reference: "Omarchy's Nordic theme. Blue-grey backgrounds, steel-blue accents, pale text, and restrained status colors create calm utility.",
    sceneImage: "media/work/omarchy.gif",
    referenceSource: "https://omarchy.org/",
    referenceTag: "Website",
    prompt: "Adapt Terminal Bloom to my project. Use Omarchy's Nordic theme as the color system. Build from #2E3440, #3B4252, #81A1C1, and #D8DEE9. Use #A3BE8C for positive states, #BF616A for errors, and #EBCB8B for warnings. Keep panels dense but readable, with direct labels and no decorative gradients.",
  },
  {
    name: "Signal Red",
    mood: "Plain, direct, editorial",
    description: "Warm paper, black ink, and one clear red action. Use it for confident products with a human voice.",
    colors: ["#201D1A", "#62594F", "#C84B36", "#F1E8D8"],
    referenceType: "Website inspiration",
    reference: "37signals. Plain language, paper-like surfaces, strong red calls to action, and editorial confidence.",
    sceneImage: "media/work/signals.gif",
    referenceSource: "https://37signals.com/",
    referenceTag: "Website",
    prompt: "Adapt Signal Red to my project. Study 37signals' plain language, warm paper, black ink, and decisive red actions. Keep hierarchy editorial. Use red for one important action per view and avoid softening every edge with cards.",
  },
  {
    name: "Moss Catalog",
    mood: "Earthy, patient, tactile",
    description: "Walnut ink, coffee paper, and moss green make a quiet catalog. Use it for thoughtful systems and collections.",
    colors: ["#2A211A", "#665044", "#89956B", "#E9DDC8"],
    referenceType: "Website inspiration",
    reference: "Huts. Coffee parchment, walnut ink, moss accent, and a pastoral catalog rhythm.",
    sceneImage: "media/work/huts.gif",
    referenceSource: "https://huts.com/",
    referenceTag: "Website",
    prompt: "Adapt Moss Catalog to my project. Study Huts' coffee parchment, walnut ink, moss accent, and pastoral catalog rhythm. Use paper as the main surface, walnut for text, and moss for selected states. Keep the interface tactile and unhurried.",
  },
  {
    name: "Voice Current",
    mood: "Soft utility, human signal",
    description: "A dark blue-grey base meets bright coral and warm white. Use it for tools that make communication feel immediate.",
    colors: ["#17252B", "#334B56", "#FF5C5C", "#F8F4EA"],
    referenceType: "Website inspiration",
    reference: "Wispr Flow product UI. Soft panels, warm white surfaces, dark blue-grey framing, and vivid coral action color make voice input feel immediate.",
    sceneImage: "media/work/wisprflow.gif",
    referenceSource: "https://wisprflow.ai/",
    referenceTag: "Website",
    prompt: "Adapt Voice Current to my project. Study Wispr Flow's downloaded product UI: soft panels, warm white surfaces, dark blue-grey framing, and vivid coral action color. Use coral for direct action and active feedback. Keep the interface fast, friendly, and focused on reducing friction.",
  },
  {
    name: "Scarlet Throne",
    mood: "Worn red, cold stone",
    description: "Near-black stone, charcoal wall, and a cold arch. Red stays on the figure that has already paid the cost.",
    colors: ["#100A09", "#342F33", "#7C7F84", "#B73630"],
    referenceType: "Cover reference",
    reference: "Daredevil (1998) #50, Hardcore, Part 5. Brian Michael Bendis and Alex Maleev. Unmasked Matt slumped in a stone chair under a cold arch, red costume carrying the fight.",
    sceneImage: "assets/comic_panels/daredevil.jpeg",
    referenceSource: "https://www.marvel.com/comics/issue/15654/daredevil_1998_50",
    referenceTag: "Comic",
    prompt: "Use Scarlet Throne as the visual direction for my project. Study the cover of Daredevil (1998) #50, Hardcore, Part 5, by Brian Michael Bendis and Alex Maleev. Build from near-black stone, charcoal, and cold arch grey. Reserve #B73630 for the state that has already cost something. Keep the interface heavy, quiet, and physical.",
  },
  {
    name: "When It Counts",
    mood: "Primary ink, hard strain",
    description: "Black ink under the machinery, Ditko blue and red, and flat yellow captions. Yellow is the voice that keeps the lift going.",
    colors: ["#080A08", "#0C499C", "#F4431B", "#FDFC40"],
    referenceType: "Panel reference",
    reference: "The Amazing Spider-Man (1963) #33, The Final Chapter. Stan Lee and Steve Ditko. Page 4: Spider-Man under the machinery, red and blue against black ink, yellow captions, white water and green rubble.",
    sceneImage: "assets/comic_panels/spider-man.jpeg",
    referenceSource: "https://www.marvel.com/comics/issue/6738/the_amazing_spider-man_1963_33",
    referenceTag: "Comic",
    prompt: "Use When It Counts as the visual direction for my project. Study page 4 of The Amazing Spider-Man (1963) #33, The Final Chapter, by Stan Lee and Steve Ditko. Build from black ink, costume blue, costume red, and caption yellow. Use yellow for the line that keeps the work going. Keep shapes flat, contrast hard, and decoration out.",
  },
  {
    name: "Return Bolt",
    mood: "Blue night, hard bolt",
    description: "A slate-blue field, a black silhouette, gold type, and one white bolt. The bolt is the only break in the field.",
    colors: ["#050B11", "#344F6C", "#FCCB22", "#EEFAFF"],
    referenceType: "Cover reference",
    reference: "Batman: The Dark Knight Returns, 30th Anniversary Edition cover. The lightning silhouette is the 1986 miniseries image by Frank Miller, with Klaus Janson and Lynn Varley.",
    sceneImage: "assets/comic_panels/the-dark-knight-returns-cover.jpg",
    referenceSource: "https://www.dc.com/graphic-novels/batman-the-dark-knight-returns-1986/batman-the-dark-knight-returns",
    referenceTag: "Comic",
    prompt: "Use Return Bolt as the visual direction for my project. Study the 30th Anniversary cover of Batman: The Dark Knight Returns, the lightning silhouette by Frank Miller, Klaus Janson, and Lynn Varley. Build a slate-blue field with a black figure and gold for titles. Use the white bolt once, for the break in the field. Keep the layout tall, sparse, and severe.",
  },
];

const STORAGE_KEY = "chromatic-index:selected-palette";
let savedIndex = Number.NaN;
try {
  savedIndex = Number.parseInt(window.localStorage.getItem(STORAGE_KEY) || "", 10);
} catch {
  // Continue with default palette when browser storage is unavailable.
}
const state = {
  selectedIndex: Number.isInteger(savedIndex) && savedIndex >= 0 && savedIndex < palettes.length ? savedIndex : 0,
};
const thinking = {
  "Iceland Descent": {
    why: "Deep green gives terrain and weight. Mineral blue opens the composition. Pale air creates one clean release.",
    use: "Outdoor products, travel tools, climate dashboards, or interfaces that need calm movement.",
  },
  "Ash After Impact": {
    why: "Blue-black creates distance. Steel blue carries structure. Pale ash keeps information visible without breaking mood.",
    use: "Incident tools, operations dashboards, news products, or focused dark interfaces.",
  },
  "Her Red": {
    why: "Brown shadow makes rust red feel intimate. Cream keeps red emotional instead of aggressive.",
    use: "Relationship products, journals, cultural platforms, or warm editorial commerce.",
  },
  "Synthetic Loneliness": {
    why: "Violet builds depth. Magenta adds signal. Soft pink gives saturated color a human edge.",
    use: "Creative tools, music products, digital culture, or expressive onboarding flows.",
  },
  "Hell's Kitchen": {
    why: "Sickly green creates pressure. Near-black absorbs noise. Red becomes a precise warning.",
    use: "Security tools, monitoring systems, games, or products built around alert states.",
  },
  "Quiet Lefos": {
    why: "Blue-grey lowers visual noise. Pale green gives system warmth without losing restraint.",
    use: "Portfolio systems, architecture tools, research products, or quiet editorial workspaces.",
  },
  "Open Care": {
    why: "Green signals trust. Sand softens the interface. Cream gives content room to breathe.",
    use: "Care products, education, health services, or guided workflows.",
  },
  "Terminal Bloom": {
    why: "Near-black makes utility feel focused. Acid green creates fast recognition. Warm paper prevents sterility.",
    use: "Developer tools, personal dashboards, creative utilities, or command-heavy products.",
  },
  "Signal Red": {
    why: "Warm paper feels human. Black ink gives authority. One red action creates clear priority.",
    use: "Publishing, project management, civic tools, or products with a direct voice.",
  },
  "Moss Catalog": {
    why: "Walnut anchors the palette. Coffee paper adds tactility. Moss gives collection and growth a quiet signal.",
    use: "Libraries, marketplaces, cultural archives, hospitality, or slow catalog experiences.",
  },
  "Voice Current": {
    why: "Dark blue-grey gives focus. Coral creates immediate action. Warm white keeps the experience human and readable.",
    use: "Voice tools, productivity software, communication products, or interfaces built around quick input.",
  },
  "Scarlet Throne": {
    why: "Stone black holds the room. Arch grey is the only light. Red reads as cost, not decoration.",
    use: "Legal tools, night editorial, security products, or interfaces that need weight without neon.",
  },
  "When It Counts": {
    why: "Black ink is the load. Blue and red stay flat and primary. Yellow captions carry the human line.",
    use: "Training tools, progress trackers, sports products, or interfaces about effort under pressure.",
  },
  "Return Bolt": {
    why: "Slate blue is the field. Black is the figure. Gold marks the title. White is one interruption.",
    use: "Editorial covers, launch pages, night dashboards, or products that need one severe signal.",
  },
};
const elements = {
  list: document.querySelector("#palette-list"),
  swatchHero: document.querySelector("#swatch-hero"),
  detailTitle: document.querySelector("#detail-title"),
  detailDescription: document.querySelector("#detail-description"),
  whyWorks: document.querySelector("#why-works"),
  possibleUse: document.querySelector("#possible-use"),
  referenceExample: document.querySelector("#reference-example"),
  sceneStill: document.querySelector("#scene-still"),
  referenceSource: document.querySelector("#reference-source"),
  shuffleButton: document.querySelector("#shuffle-button"),
  copyButton: document.querySelector("#copy-button"),
  detailPanel: document.querySelector(".detail-panel"),
};

function createSwatches(colors, className) {
  const swatches = document.createElement("div");
  swatches.className = className;
  colors.forEach((color) => {
    const swatch = document.createElement("button");
    swatch.type = "button";
    swatch.className = "swatch";
    swatch.style.backgroundColor = color;
    swatch.setAttribute("aria-label", `Copy ${color}`);
    swatch.dataset.color = color;
    swatch.title = color;
    swatch.addEventListener("click", (event) => {
      event.stopPropagation();
      copyColor(swatch, color);
    });
    swatches.append(swatch);
  });
  return swatches;
}

async function copyColor(swatch, color) {
  try {
    await navigator.clipboard.writeText(color);
    swatch.dataset.copied = "Copied";
    window.setTimeout(() => delete swatch.dataset.copied, 1400);
  } catch {
    swatch.dataset.copied = "Copy failed";
  }
}

function renderPaletteList() {
  elements.list.replaceChildren();
  palettes.forEach((palette, index) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = `palette-card${index === state.selectedIndex ? " is-selected" : ""}`;
    card.setAttribute("aria-label", `Select ${palette.name} palette`);
    card.addEventListener("click", () => selectPalette(index));

    const copy = document.createElement("div");
    copy.className = "palette-card-copy";
    copy.innerHTML = `<h3>${palette.name}</h3><p>${palette.mood}</p>${palette.favouriteNote ? `<p class="favourite-note">${palette.favouriteNote}</p><p class="favourite-progression">${palette.favouriteProgression}</p>` : ""}<span class="reference-tag">${palette.referenceTag}</span>`;
    card.append(copy, createSwatches(palette.colors, "mini-swatches"));
    elements.list.append(card);
  });
}

function renderDetail() {
  const palette = palettes[state.selectedIndex];
  elements.swatchHero.replaceChildren(...createSwatches(palette.colors, "swatch-hero").children);
  elements.detailTitle.textContent = palette.name;
  elements.detailDescription.textContent = palette.description;
  elements.whyWorks.textContent = thinking[palette.name].why;
  elements.possibleUse.textContent = thinking[palette.name].use;
  elements.referenceExample.textContent = palette.reference;
  elements.sceneStill.replaceChildren();
  const sceneImage = document.createElement("img");
  sceneImage.src = palette.sceneImage;
  sceneImage.alt = `${palette.name} reference`;
  elements.sceneStill.append(sceneImage);
  elements.referenceSource.href = palette.referenceSource;
}

function selectPalette(index) {
  state.selectedIndex = index;
  try {
    window.localStorage.setItem(STORAGE_KEY, String(index));
  } catch {
    // Selection still works for current session when browser storage is unavailable.
  }
  renderPaletteList();
  elements.detailPanel.classList.remove("is-changing");
  void elements.detailPanel.offsetWidth;
  elements.detailPanel.classList.add("is-changing");
  renderDetail();
  if (window.matchMedia("(max-width: 760px)").matches) {
    elements.detailPanel.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function shufflePalette() {
  let nextIndex = state.selectedIndex;
  while (nextIndex === state.selectedIndex) {
    nextIndex = Math.floor(Math.random() * palettes.length);
  }
  selectPalette(nextIndex);
}

async function copyPrompt() {
  const copyText = elements.copyButton.querySelector("span");
  const originalLabel = copyText.textContent;
  try {
    await navigator.clipboard.writeText(palettes[state.selectedIndex].prompt);
    elements.copyButton.querySelector("span").textContent = "Copied";
  } catch {
    elements.copyButton.querySelector("span").textContent = "Select text";
  }
  window.setTimeout(() => {
    elements.copyButton.querySelector("span").textContent = originalLabel;
  }, 1800);
}

elements.shuffleButton.addEventListener("click", shufflePalette);
elements.copyButton.addEventListener("click", copyPrompt);

renderPaletteList();
renderDetail();
