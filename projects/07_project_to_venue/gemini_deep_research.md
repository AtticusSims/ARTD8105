# Searching with AI Deep Research

Two searches this week, in this order: **the literature check** first, then **the venue search** (further down). Both work the same way.

**The tool finds. You verify.**

A Deep Research tool reads dozens of pages for you and comes back with a cited report. It is good at turning up work and venues you would not have thought of. It is not reliable on details — authors, years, deadlines, word limits — and it does not always say which year's call it read. It also invents citations that look real.

So it is the first step of each search, never the last. Nothing goes into your files until you have opened the source yourself.

---

## Before you start

- **Which tool.** For the literature check: Claude or ChatGPT in research mode if you have access, Gemini Deep Research if not. For the venue search: Gemini Deep Research.
- **Gemini account.** gemini.google.com with a personal Google account. It works in Macau. It is not available on personal accounts in mainland China.
- **Limit.** Free accounts get a small number of Deep Research reports a day. One careful prompt beats three quick ones.
- **Time.** A report takes several minutes — about 5–10 in Gemini.

---

## 1 · The literature check

**Find the gap before you name your contribution.** A good idea can still be one that has been done, or one that misses what has already been tried. Due at session 8.

1. **Get your prompt.** In Cursor, the venue agent writes it with you (`@projects/07_project_to_venue/venue_agent.md`, Phase 3). Or fill in the template below yourself.
2. **Run it** in Claude or ChatGPT (research mode) or Gemini (Deep Research). Attach `my_work/topic.md`, and your idea evaluation if you have started it.
3. **Paste the report at the bottom of `my_work/literature_verification.md`**, under a heading naming the tool and the date, marked unverified.
4. **Talk it through with the venue agent:** what has been done, where the gap is, and what it means for your project.
5. **Open every source.** Check authors, year, title and venue against the DOI or the publisher's page. Drop anything you cannot find.
6. **Above the report, write your own version:** the five closest works with a critique of each, the gap in one sentence, and what you changed in your project because of it. The agent can help, but the gap is yours.

**If the closest work already does what you planned, that is a good result.** You found it in October, not in a reviewer's report. Narrow or shift the project with the agent, and check again.

```
I am a doctoral student in Visual Communication Design. Here is my project,
in three sentences:
[what I am making, from what, and the problem it addresses]

My method: [one or two sentences: what I will make, from what, and how].

Search the research literature (design, HCI, digital art, computational
creativity, and my field: [your field]) for work that has already addressed
this problem, or something close to it. Be adversarial: your job is to find
the work that makes my project redundant, not to reassure me.

Give me:
1. What is already established, with full citations: authors, year, title,
   venue, and a DOI or link.
2. What has been tried and failed, or abandoned.
3. The five works closest to my project. For each: what it does, what it
   does not do, and what my project would add.
4. The gap, in one sentence — or tell me plainly that there is none.

Only cite work you can link to. Mark anything you are unsure of as
UNVERIFIED.
```

---

## 2 · The venue search

Once you have your contribution type and format.

1. **Get your prompt.** In Cursor, the venue agent writes it for you from your own answers (Phase 7). Or fill in the template below yourself.
2. **Open gemini.google.com and choose Deep Research** from the tools under the prompt box.
3. **Attach `my_work/topic.md`** — and your idea evaluation draft, if you have started one. The search should start from your work, not from a keyword.
4. **Paste the prompt and submit.**
5. **Read the plan before it runs.** Gemini shows you a research plan first. Click **Edit plan** if it:
   - searches outside **December 2026 to June 2027**;
   - looks only at journals, or only at conferences;
   - drifts into a field that is not yours;
   - does not ask for each venue's **official** call page.
6. **Start the research.** Leave it running.
7. **Save the report.** Use **Export to Docs** or **Copy contents**, and save it as markdown in `my_work/venue/search/`, named by date — for example `2026-10-07_gemini.md`.
8. **Back in Cursor:** *"Here is my Gemini report — run Phase 8."* The agent turns it into a shortlist, and you check every row on the official page.

Fill in the brackets in your own words. Keep the rest.

```
I am a doctoral student in Visual Communication Design at the University of
Macau. I want to publish a paper about a project I am making this semester.

My project: [two sentences — what I am making, from what, and why].
The gap it fills: [one sentence, from my literature check].
What it contributes: [existence proof / method contribution / annotated
portfolio / intermediate-level concept / critical or speculative] —
[one sentence: what a reader will know afterwards that they did not before].
The format I am considering: [pictorial / full paper / art paper /
poster or demo / journal article / visual essay].
My field: [the research conversation my doctorate belongs to].
Venues I already know about: [list them, or "none"].

Find conference tracks and journals where work like this has been published
in the last three years, with a submission deadline between December 2026
and June 2027, or with rolling submission. I am looking for paper formats,
not artwork or exhibition tracks.

For each venue, give me:
1. The venue and the specific track or article type that fits, and why it
   fits my project.
2. The format and length limit for that track.
3. The next deadline — and say whether it comes from the 2027 call or from
   an earlier year.
4. A link to the venue's own call for papers page, not a third-party listing.
5. One or two accepted papers from that track in the last three years that
   are close to my project, with links.
6. Whether the venue publishes its review criteria or reviewer guidelines,
   with a link.

Leave out anything with a deadline before 25 November 2026. Say clearly
when you could not find the 2027 call.
```

### What to watch for in the venue report

- **Years mixed up.** A 2026 call and a 2027 call look alike. If a deadline has no year, or the link is to last year's page, treat it as unknown.
- **Third-party listings.** Call-for-papers aggregator sites copy and go stale. Only the venue's own page counts.
- **Confident numbers.** A word limit stated without a link is a guess until you have seen it on the call page.
- **The wrong track.** A venue can fit while the track Gemini named does not. The track decides the format; check it.

---

## Record it

The literature check is workbook step `S4`; the venue search is a `retrieve` move in step `S5`. Any work or venue a research tool suggested that you keep is an AI contribution, and it goes in your disclosure in November like any other — so note it now, in one line.
