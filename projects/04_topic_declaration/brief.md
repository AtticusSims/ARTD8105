# Session 4 — Computer Art History and the Two Declarations

**Wed 9 September 2026 · 10:00–13:00 · Room G1015**

---

## In class

**The two declarations** — fifteen minutes, at the top. How the course works from here: you choose the rung, you learn your own tools, and you become the person in this room who knows the most about yours.

**One artist, five minutes each** — set in session 3. The bullet that carries is the third: *what the rule or procedure in that work actually is*, stated precisely enough that a stranger could execute it.

**The algorithm explorers, shown** — briefly, around the room. One thing you found, one idea for your own work.

---

## Assignment 1 — build a system that recreates your artist's work

**Build a system with Cursor to recreate one of the artworks you presented this week.**

The result should be a *design system* similar to the one that you made for the instruction-based project for the pop-up exhibition. With this system you should be able to recreate the original work, and create variations on the underlying rules of the work to create innovative, fresh new works.

### What this is really asking

You spent five minutes stating the rule inside someone else's work precisely enough that a stranger could execute it. **Now you are the stranger.** The system is the test of whether the rule you stated was actually the rule — if you cannot rebuild the work from it, the statement was a description, not a procedure.

Two things have to be true of what you build:

- **It reproduces the original.** Not pixel for pixel — that is not the point and often not possible. It reproduces it in the sense that someone who knows the work would recognise the output as that work.
- **It goes somewhere the original did not.** Move the parameters past where the artist stopped. That is where the new work is, and it is the half that makes this yours rather than a copy.

The second is the harder and more interesting one. Most of these artists were working with constraints — plotter speed, memory, one afternoon of computer time — that you do not have. **Ask what they would have done with more, and then do it.**

### Where it goes

```
my_work/artist_system/
```

The system itself, plus the outputs: at least one recreation, and at least three variations that depart from the original rule. Say in a short `README.md` in that folder which is which, and what you changed.

The agent file from last week still applies for how to build — `@projects/03_algorithmic_systems/algorithm_agent.md`. Same rules: one thing at a time, every meaningful number gets a labelled control, you must be able to point at the line that implements the rule.

---

## Assignment 2 — the two declarations

**Due session 5, Wednesday 16 September. You present it: two minutes, no slides.** One file: `my_work/topic.md`, committed and pushed before class.

### 1 · The rung — where the material of your work comes from

This decides what you make, and which tools become yours to learn.

`rule in 2D → rule in 3D → external data → live input → capture → learned models`

The list is ordered by **decreasing authorial control**. At the top you specify everything. At the bottom you are choosing, framing and constraining rather than specifying. Choosing a rung is taking a position on what your authorship consists of — not picking a technology.

**You have all already done rung one.** The algorithm explorer was rule-in-2D. The question is where you go next.

### 2 · The field — the conversation your doctorate is already in

This decides what you read, and where you would publish. For most of you this is not a new decision — you are being asked to **name** it, and to find two or three places where that conversation happens.

### What to hand in

- [ ] **Territory** — two or three sentences on what you keep circling
- [ ] **Where it came from** — named files. Which reading notes, which artefact, which part of your own practice
- [ ] **The rung**, and why that one, in your own words
- [ ] **The field**, and two or three candidate venues — unverified until you have checked them yourself
- [ ] **What you would make** — one object, one sentence. The smallest version that would still surprise you
- [ ] **The pairing sentence** — *I am going to make ———, using ———, and it would tell someone in ——— that ———*

### How to do it

```
@projects/04_topic_declaration/topic_agent.md
```

The agent reads what is already in your repository — your reading notes, your *where you are starting from* page, your journal, your instruction and parameters files, your explorer — and tells you what it sees before offering you any menu.

**You are not starting from a blank page, and you should not treat this as though you were.** You chose every one of those papers yourself, one at a time, without having to justify the choice. The pattern in what you chose is better evidence of what you care about than anything you would say if asked directly.

It will push you to cut a large idea down to something you can actually make by November. **That narrowing is the point of the exercise.** Once you have given it enough, it drafts `my_work/topic.md` from your own answers — read every line and change anything that is not how you would put it.

### None of this binds you

The commitment is the idea evaluation on **7 October**. Change your mind before then — on evidence — and tell me when you do.

---

## Also this week

- [ ] **One reading note** — a paper of your own choosing. `course/templates/reading_note.md`, copied into `my_work/reading_notes/`.

**No additional reading this week.** Your reading note stands; the rest of that time goes on the two assignments above.

---

## Where everything lands

```
my_work/
├── artist_system/        the recreation system, its outputs, and a short README
├── topic.md              the two declarations
├── reading_notes/        this week's note
└── algorithm_explorer/   from session 3, if it is not committed yet
```

If you are not sure where something goes, ask the agent — the standing folder rules are in `.cursor/rules/00-course.mdc` and it will put things in the right place and tell you what it did.
