# Catch up your Cursor research logs

1. Get the latest course files in your own repository. Keep your own work and git
   history intact. Confirm that `AGENTS.md` is at the repository root and the
   research-log rule is enabled in Cursor.
2. Open **each previous course chat** in Cursor, in Agent mode, and paste the
   prompt below. Repeat for every chat. A new chat cannot automatically see all
   your old conversations. If part of a chat is unavailable, provide an export or
   record the gap; do not pretend it has been recovered.
3. Read the result, correct mistakes, then commit and push the log changes to
   **your own GitHub repository** for them to count.

```text
Read AGENTS.md and context/provenance_logging_spec.md. Reconstruct the missing
research log for THIS Cursor chat from the conversation you can actually see,
using repository history only as supporting evidence.

Inspect existing logs first, including any legacy root _research_log/. Use this
chat's visible ID/title as source_chat; ask me for a short label if neither is
available. Reuse that identifier and skip exchanges already recorded. Append
missing records to this chat's catch-up file in my_work/_research_log/sessions/;
do not overwrite records or create duplicates on a repeat run.

Record each substantive exchange, visible disposition and substantial decision.
For every reconstructed record use reconstructed: true, current recording time
with +08:00, source_chat and source_turn. Add the reconstructed flag on exchange
records. Include original_ts only when the original time is visible. Do not
invent dates, acceptance, rejections, reasons, citation checks or tool actions.
Use unknown/NA where needed. State which history is unavailable or uncertain.

Update the integrity report, separating reconstructed from live records. Show
the log files, counts and gaps for me to check; do not sign off on my behalf.
After I check them, commit and push only the logging changes to my own origin,
not the shared course repository. Continue logging new work automatically.
```

**From now on:** logging starts automatically when the agent works in this
repository. You still review the weekly summary and push your work. Use
`LOG CHECK` to confirm the records exist. Reconstructed logs remain clearly
labelled; they are not a substitute for records made while you work.
