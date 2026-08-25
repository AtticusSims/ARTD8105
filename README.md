# ARTD8105 — Advanced Topics in Digital Art

**Doctor of Design in Visual Communication Design · Faculty of Design · University of Macau**
Semester 1, 2026/27 · Section 001 · Atticus Sims

This repository holds everything you need for the course. Open it in Cursor at the start of every working session and the agent picks up its instructions automatically.

---

## Setting it up — once, in session 2

You already have your own private repository from the session 1 homework. You add this one as a **second source** for it, so course material lands alongside your work and my updates reach you.

**Full instructions, including what to do if you have no repository yet or if git is broken: `course/guides/getting_the_course_repo.md`.**

Easiest way — paste this into Cursor:

```
Add the ARTD8105 course repository as a second remote called `course` and
pull it in, so the course files sit alongside my own work in this same
repository:

    https://github.com/AtticusSims/ARTD8105.git

Our histories are unrelated, so the pull needs --allow-unrelated-histories.
Do not clone it into a subfolder.

Commit anything I have outstanding first. Show me each command before you
run it and say what it does. If something fails, stop and explain the error.
```

What that runs, which you should be able to read:

```bash
git remote add course https://github.com/AtticusSims/ARTD8105.git
git pull course main --allow-unrelated-histories
```

> ⛔ **Do not `git clone` this repository into a folder inside your own.** A repository nested inside another repository breaks both — your commits stop covering it and GitHub shows an empty grey box where the files should be. It is a second remote, not a subfolder.

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
| `projects/` | One folder per session — the brief, and the agent file you load. **Read only.** |
| `course/` | Guides and templates. **Read only.** |
| `context/` | Reference the agent reads — rubric, logging spec, glossary. **Read only.** |
| `.cursor/rules/` | Standing rules. Cursor loads these by itself. **Read only.** |

**Start with `course/guides/00_start_here.md`.** If you are setting up, or you joined after session 1, go to `course/guides/getting_the_course_repo.md` first.

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
