# Session 7 — From Project to Venue

**Wed 7 October 2026 · 10:00–13:00 · Room G1015**

---

## In class

**Your print — the fabrication checkpoint (graded).** Three minutes each. One question: *what is the parameter you would change next?*

**Publishing** — how publishing works in design research, and the five steps from project to venue: the project, the literature check, the contribution type, the format and the venue. Working alone or together.

**Working block** — groups first, then your project and the start of your literature check, here in the room.

---

## The order

**Project → literature check → contribution type → format → venue.**

- The **literature check** tells you what has already been done, and where the gap is.
- The **gap** tells you which contribution type is open.
- The **type** decides the format, and the **format** decides the venue.

Not the other way round. A venue chosen first gets you writing to a call your work does not fit.

---

## How to do it

```
@projects/07_project_to_venue/venue_agent.md
```

The agent reads your repository first — reading notes, `topic.md`, your recreation system, your 3D object — and asks you questions before it suggests anything. It takes you through the five steps in order. When it is time to search, it writes you a prompt for an AI Deep Research tool: see `gemini_deep_research.md` in this folder.

---

## Working together

- **Pairs are welcome.** Three or more only if each member has a distinct role.
- **In the working block:** if you want to work with someone, say so, give the direction you are interested in in one sentence, and find someone heading the same way.
- **Each member documents their own part in their own repository**, and the idea evaluation names each member's role.

---

## Make it physical

**I strongly encourage a fabricated final project.** The Faculty workshops can cut, print, stitch, weave and knit what your system generates — and the machine's limits are where a paper's findings tend to come from.

**Everyone makes an exhibitable piece for the Faculty exhibition, whatever your contribution type.** What you publish is a paper: artwork tracks, where the object itself is the submission, are not for this course.

The **FDS equipment guide** is on the course Notion page, and in this repository at `course/guides/fds_equipment_guide.md`. Start with its **Quick chooser**.

---

## Find the gap — the literature check

A good idea can still be one that has been done, or one that misses what has already been tried. Find out before you name your contribution.

- **Use an AI research tool:** Claude or ChatGPT in research mode if you have access, Gemini Deep Research if not. The prompt is in `gemini_deep_research.md` and works in all three.
- **Ask it to find the work that makes your project redundant** — not to reassure you.
- **Talk the report through with the agent:** what has been done, where the gap is, and what to change in your project.
- **Open every source.** Check authors, year, title and venue. AI tools invent citations.
- **Write `my_work/literature_verification.md`:** the five closest works with a critique of each, the gap in one sentence, and what you changed in your project because of it.

### What the gap tells you

- Nobody has made it → **existence proof**
- It has been made, but nobody has shown a way of doing it others can follow → **method**
- There are one-offs, but nobody has looked across a series → **annotated portfolio**
- The same pattern turns up in several works and has no name → **intermediate-level concept**
- An argument about technology or culture that nobody has made through an object → **critical or speculative**
- The thing exists, but nobody knows how people respond to it → **empirical**

---

## Then the format, then the venue

**The type decides the format.** The slides show which formats suit which type, with a published example of each type.

**Gemini finds; you verify.** Nothing goes into a venue file until you have opened the venue's official page yourself.

**The Publication Venue Briefing** — `course/guides/publication_venue_briefing.md` — lists what is open between December 2026 and June 2027, what each venue takes, and what it costs. Checked on 6 October. Any peer-reviewed publication counts for this course.

---

## Due session 8 · Wednesday 14 October

- [ ] **`my_work/idea_evaluation.md`, version 1** — sections 1–5 and 7, copied from `course/templates/idea_evaluation.md`. Assessed
- [ ] **`my_work/literature_verification.md`** — the literature check
- [ ] **One venue file for your primary venue and one for a backup**, each named after the venue — for example `my_work/venue/dis-2027.md`. Use `course/templates/venue_file.md` and `course/guides/venue_interrogation_protocol.md`; find the primary's review form
- [ ] **Your defence** — 3 minutes, then 2 minutes of questions. Five slides, using `course/templates/idea_evaluation_defence.pptx`. Do not add slides
- [ ] **The made thing** — what it is, which machine or material, and a booking if it needs one
- [ ] **One reading note** — ideally an accepted paper from your primary venue

---

## Where everything lands

```
my_work/
├── idea_evaluation.md
├── literature_verification.md
├── venue/
│   ├── dis-2027.md          your primary venue, for example
│   ├── eva-london-2027.md   and your backup
│   └── search/              your venue search report, saved as markdown
└── reading_notes/
```

**Commit and push before you leave the room.**
