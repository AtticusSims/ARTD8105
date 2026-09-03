# Session 3 — Generative Art and Algorithms

**Wed 2 September 2026 · 10:00–13:00 · Room G1015**
*Revised 3 September to match what was actually set in class.*

---

## In class

**The Autonomous Artist project** — the talk given at the Macau Symposium on Emotional AI, and how the research behind it actually gets done.

**Generative art, briefly** — Galanter, "What Is Generative Art?", and what makes a system generative rather than just automated. Discussion.

**The algorithm explorer** — a demonstration: how to research an unfamiliar algorithm, and how to give the agent the context it needs.

---

## Setup

```
@projects/03_algorithmic_systems/algorithm_agent.md
```

No repository yet, or something broken — `course/guides/getting_the_course_repo.md`. The step everyone misses is **Settings → Collaborators → Add people → `AtticusSims`**.

---

## Assignment A — the algorithm explorer

**Build it. Play with it. Then think about how a particular algorithm could work in your own practice.**

### If you have not started

**1 · Research the five algorithms.** Use the **Deep Research** function in Google Gemini to produce a detailed context document for each of:

- reaction–diffusion
- flocking / boids
- L-systems
- genetic algorithms
- cellular automata

**Check the plan Gemini proposes before you let it run.** Deep Research writes you a plan first; read it and say whether it is fit for the purpose. That step is the whole point of the exercise — you are learning to judge whether research you did not do yourself is any good, which is a skill you will need for your paper in November.

When each report is finished, **export it to Google Docs, then download it as Markdown**.

**2 · Put the context documents where the agent can read them.**

```
my_work/algorithm_explorer/context/
    reaction_diffusion.md
    flocking.md
    lsystems.md
    genetic.md
    cellular_automata.md
```

**3 · Ask the agent to build the app.** Something that lets you learn and explore how each algorithm works. **Be specific about the features you want** — a vague request gets a vague app. Then improve it: change things, add features, ask for more control over the parts that interest you.

The app itself goes in `my_work/algorithm_explorer/`.

### If you built it already, outside the repository

Most of you created a separate Cursor project called `algorithm-explorer`, because that is what the instructions said. **Move it into your course repository now** so it is committed, versioned and assessable.

Open your course repository in Cursor and paste this:

```
I built an algorithm explorer in a separate folder at [PASTE THE FULL PATH].
Move it into this repository under my_work/algorithm_explorer/, following the
layout in projects/03_algorithmic_systems/algorithm_agent.md.

Before you move anything: show me what you are going to move and where each
thing will land. Do not overwrite anything that already exists here. Do not
delete the original folder — copy, then I will delete it myself once I have
checked.

Then commit with a message saying what it is.
```

**Nothing outside your repository is assessed, and nothing outside it is backed up.** A folder on your desktop is one dead laptop away from not existing.

### What "play with it" actually means

Not: run it once and look at it. Turn the knobs until something happens that you did not expect. Then write down, in `my_work/process_journal/`, three short entries:

- **The parameter you kept coming back to.** Which one, and what made it interesting.
- **One thing that surprised you.** What you expected, what happened instead.
- **One sentence about your own work.** Which algorithm, and what it could do in your practice. It is fine for this to be speculative. It is not fine for it to be blank.

Those three entries are Step 1 evidence for your paper and they are perishable — write them while you still remember, not in October.

---

## Assignment B — one artist, five minutes

**Due Wednesday 9 September.** No slides required.

**Read:** *Interdisciplinary, International: How Computer Art Crossed Borders in Its First Decade* — <https://www.ragnardigital.art/stories/interdisciplinary-international-how-computer-art-crossed-borders-in-its-first-decade> (about 2,000 words).

**Then browse thoroughly:** *Collection Highlights* — <https://www.ragnardigital.art/stories/highlights-tour> — forty works. Follow anything that interests you further into the collection.

**Choose one artist.** Five minutes on:

- [ ] **Who they are**, and one work in particular
- [ ] **The moment they were working in** — the historical context: technology, art, what else was happening. Who else was working on similar things at the same time, and what was their influence?
- [ ] **What the rule or procedure in that work actually is** — stated precisely enough that a stranger could execute it
- [ ] **Why you chose them**

That third point is the one that carries. Biography is easy and it is not what is being assessed — the rule is.

Working notes go in `my_work/reading_notes/`. Agent file, for pushing back on your own vagueness: `@projects/03_algorithmic_systems/artist_research_agent.md`

---

## Also this week

- [ ] **One reading note** — a paper of your own choosing. Template: `course/templates/reading_note.md`, copied into `my_work/reading_notes/`.

---

## Where everything lands

```
my_work/
├── algorithm_explorer/
│   ├── context/              the five Deep Research documents
│   └── <the app>             index.html, js/, css/ — whatever you built
├── process_journal/          the three entries above
└── reading_notes/            your chosen paper, and notes on your artist
```

If you are not sure where something goes, ask the agent — `algorithm_agent.md` tells it the layout, and it will put things in the right place and tell you what it did.
