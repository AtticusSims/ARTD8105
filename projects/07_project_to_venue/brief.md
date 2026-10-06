# Session 7 — From Project to Venue

**Wed 7 October 2026 · 10:00–13:00 · Room G1015**

---

## In class

**Your print — the fabrication checkpoint (graded).** Three minutes each. One question: *what is the parameter you would change next?*

**Publishing** — how publishing works in design research, the six contribution types, how to choose a venue, finding the gap in the literature, and why your final project should be physical.

**Working block** — groups first, then you choose your project and your venue, here in the room.

---

## The order

**Project → contribution type → format → venue.**

Not the other way round. A venue chosen first gets you writing to a call your work does not fit.

---

## Working together

- **Pairs are welcome.** Three or more only if each member has a distinct role.
- **In the working block:** if you want to work with someone, say so, give the direction you are interested in in one sentence, and find someone heading the same way.
- **Each member documents their own part in their own repository**, and the idea evaluation names each member's role.

---

## How to do it

```
@projects/07_project_to_venue/venue_agent.md
```

The agent reads your repository first — reading notes, `topic.md`, your recreation system, your 3D object — and asks you questions before it suggests anything. When it is time to search, it writes you a prompt for **Gemini Deep Research**: see `gemini_deep_research.md` in this folder.

**Gemini finds; you verify.** Nothing goes into a venue file until you have opened the venue's official page yourself.

**The Publication Venue Briefing** — `course/guides/publication_venue_briefing.md` — lists what is open between December 2026 and June 2027, what each venue takes, and what it costs. Checked on 6 October. Any peer-reviewed publication counts for this course.

---

## Find the gap — the literature check

A good idea can still be one that has been done, or one that misses what has already been tried. Find out now.

- **Use an AI research tool:** Claude or ChatGPT in research mode if you have access, Gemini Deep Research if not. The prompt is in `gemini_deep_research.md` and works in all three.
- **Ask it to find the work that makes your project redundant** — not to reassure you.
- **Open every source.** Check authors, year, title and venue. AI tools invent citations.
- **Write `my_work/literature_verification.md`:** the five closest works with a critique of each, the gap in one sentence, and a verdict — green (open), amber (partly done — narrow it) or red (done — change it).

---

## Make it physical

**I strongly encourage a fabricated final project.** The Faculty workshops can cut, print, stitch, weave and knit what your system generates — and the machine's limits are where a paper's findings tend to come from.

The **FDS equipment guide** is on the course Notion page, and in this repository at `course/guides/fds_equipment_guide.md`. Start with its **Quick chooser**.

---

## Due session 8 · Wednesday 14 October

- [ ] **`my_work/idea_evaluation.md`, version 1** — sections 1–5 and 7, copied from `course/templates/idea_evaluation.md`. Assessed
- [ ] **`my_work/literature_verification.md`** — the literature check
- [ ] **`my_work/venue/<slug>.md`** — your primary venue, with the review form found; and a backup. Use `course/templates/venue_file.md` and `course/guides/venue_interrogation_protocol.md`
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
│   ├── <primary>.md
│   ├── <backup>.md
│   └── search/          the Gemini report, saved as markdown
└── reading_notes/
```

**Commit and push before you leave the room.**
