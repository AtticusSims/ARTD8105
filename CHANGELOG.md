# Changelog

What changed, and when. Run `git pull course main` to get it.

---

## 2026-08-26 — session 2

- **New:** `course/guides/getting_the_course_repo.md` — how to add this repository to your own, with the exact prompts for Cursor. Covers having no repository yet, joining the course late, and git being broken entirely.
- **Rewritten:** the session 2 brief. The session is now student presentations plus a setup-and-worked-example hour; the tool is built during the week, so the brief carries the full build procedure.
- **Fixed:** guides and templates referenced filenames from before this repository existed — `research_agent.md`, `06_Git_and_GitHub_Setup.md`, `templates/`. Every path now points at a file that is actually here. The agent rules in `.cursor/rules/` replace the old `research_agent.md` and load automatically.
- **Updated:** the session 2 agent rule now checks your workspace before starting, handles students who joined after session 1, and knows the build happens away from class.

---

## 2026-08-25 — initial release

Everything, for the first time.

- `course/guides/` — Start Here, *Turning Practice into Research*, the research workbook, the venue interrogation protocol, git setup, readings and sources, and the session 1 companion
- `course/templates/` — reading note, process journal entry, venue file, idea evaluation, peer review
- `course/sessions/` — session 1 homework, session 2 brief
- `course/examples/` — a worked parametric SVG generator
- `context/` — assessment rubric, provenance logging spec
- `.cursor/rules/` — standing course rules, the research log rules, and the session 2 instruction agent
- `my_work/` — empty scaffolding for your own work
