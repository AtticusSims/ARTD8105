# ARTD8105 — Advanced Topics in Digital Art

**Doctor of Design in Visual Communication Design · Faculty of Design · University of Macau**
Semester 1, 2026/27 · Section 001 · Atticus Sims

This repository holds everything you need for the course. Open it in Cursor at the start of every working session and the agent picks up its instructions automatically.

---

## Setting it up — once, in session 2

You already have your own private repository from the session 1 homework. Add this one as a second source, so course material lands inside your repo and updates reach you.

```bash
cd path/to/artd8105-<yoursurname>
git remote add course https://github.com/AtticusSims/ARTD8105-INSTRUCTOR.git
git pull course main --allow-unrelated-histories
```

That is the only complicated command in the course. After that:

```bash
git pull course main     # get new material from me
git push                 # send your work to your own repository
```

---

## What is where

| | |
|---|---|
| **`my_work/`** | **Yours.** Everything you make lives here. A pull never touches it. |
| `course/` | Guides, session briefs, templates, worked examples. **Read only.** |
| `context/` | Reference the agent reads — the rubric, the logging spec, the glossary. **Read only.** |
| `.cursor/rules/` | How the agent behaves. Cursor loads these by itself. **Read only.** |

### ⛔ Do not edit anything outside `my_work/`

Those folders are replaced every time you pull. If you edit one and then pull, git will stop with *"your local changes would be overwritten"* — nothing is lost, but you cannot continue until it is resolved. Ask the agent to fix it, or run `git checkout -- <file>` to discard your edit.

**To use a template, copy it into `my_work/` first.** Never fill one in where it sits.

---

## Your folder

```
my_work/
├── instruction.md        your instruction, current version
├── parameters.md         every decision it leaves open
├── tools/                generators you build
├── prints/               exhibition output
├── reading_notes/        one file per paper, named author_year.md
├── process_journal/      one entry per event
├── venue/                venue files, from session 6
├── paper/                the manuscript
└── _local/               big files git ignores — see below
```

---

## What not to commit

Some things must stay out of git. The agent checks before each commit, but know the rule yourself:

**Never** — PDFs of readings (they are copyrighted, and they make the repository enormous) · video · raw camera files · Blender working files · anything over about 10 MB.

**Always** — photographs of your physical work, screenshots that evidence a finding, SVG and HTML output, all markdown. **These are assessed evidence.**

Anything large that is not evidence goes in **`my_work/_local/`**, which git ignores entirely. It stays on your computer and never leaves it.

---

## If something breaks

Ask the agent first — it has your terminal and it can read the error. Failing that, email me. Arriving stuck costs you a session; asking a question costs you nothing.
