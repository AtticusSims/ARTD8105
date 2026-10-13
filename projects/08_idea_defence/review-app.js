(function () {
  'use strict';
  const key = 'artd8105-session8-reviews-v1';
  const core = window.ReviewCore;
  const $ = id => document.getElementById(id);
  const fields = {presenter_names:'presenters', project_title:'project', contribution:'contribution', strongest_support:'support', main_challenge:'challenge'};
  let state = {reviewer:'', reviews:[], drafts:{}, editing:null};
  let fileHandle = null;
  let fileDirty = false;
  try {
    const saved = JSON.parse(localStorage.getItem(key) || 'null');
    if (saved && Array.isArray(saved.reviews) && saved.drafts && typeof saved.drafts === 'object') {
      core.parse(JSON.stringify(core.document(saved.reviews, saved.reviewer, new Date().toISOString())));
      state = saved;
    }
  } catch (error) {
    setStatus('The saved browser copy could not be read. Open your saved review file to recover it.', true);
  }
  function setStatus(message, error) { $('status').textContent = message; $('status').classList.toggle('error', !!error); }
  function remember() {
    try { localStorage.setItem(key, JSON.stringify(state)); return true; }
    catch (error) { setStatus('Browser storage is unavailable. Save a review file before moving on.', true); return false; }
  }
  function values() {
    return {reviewer_name:$('reviewer').value, ...Object.fromEntries(Object.entries(fields).map(([field,id]) => [field,$(id).value]))};
  }
  function keepDraft() {
    state.reviewer = $('reviewer').value;
    state.drafts[state.editing || 'new'] = values();
    remember();
  }
  function display(id) {
    keepDraft();
    state.editing = id;
    const entry = state.drafts[id || 'new'] || state.reviews.find(item => item.id === id) || {};
    for (const [field, element] of Object.entries(fields)) $(element).value = entry[field] || '';
    $('form-title').textContent = id ? 'Edit review' : 'New review';
    $('next').textContent = id ? 'Save changes & next' : 'Save & next';
    remember(); renderList(); $('presenters').focus();
  }
  function renderList() {
    $('count').textContent = '(' + state.reviews.length + ')';
    $('empty').hidden = state.reviews.length > 0;
    $('reviews').replaceChildren();
    for (const entry of state.reviews) {
      const li = document.createElement('li');
      const button = document.createElement('button');
      button.type = 'button'; button.setAttribute('aria-current', String(entry.id === state.editing));
      button.textContent = entry.presenter_names;
      const title = document.createElement('small'); title.textContent = entry.project_title; button.append(title);
      button.addEventListener('click', () => display(entry.id)); li.append(button); $('reviews').append(li);
    }
  }
  function fileText() { return JSON.stringify(core.document(state.reviews,state.reviewer,new Date().toISOString()), null, 2) + '\n'; }
  async function writeFile() {
    const writer = await fileHandle.createWritable();
    try { await writer.write(fileText()); await writer.close(); }
    catch (error) { try { await writer.abort(); } catch (_) {} throw error; }
    fileDirty = false;
    $('storage-note').textContent = 'Saving to ' + fileHandle.name + '. Commit and push this file to GitHub after your last edit.';
  }
  function download() {
    const url = URL.createObjectURL(new Blob([fileText()], {type:'application/json'}));
    const link = document.createElement('a'); link.href=url; link.download='idea_defence_reviews.json'; link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    fileDirty = false;
    setStatus('Copy downloaded. Put the latest copy in my_work/peer_reviews/, then commit and push it to GitHub.');
  }
  async function saveFile() {
    keepDraft();
    try {
      if (!fileHandle) {
        if (!window.showSaveFilePicker) { download(); return; }
        const handle = await window.showSaveFilePicker({suggestedName:'idea_defence_reviews.json', types:[{description:'Review file', accept:{'application/json':['.json']}}]});
        const existing = await handle.getFile();
        if (existing.size) {
          const doc = core.parse(await existing.text());
          state.reviews = core.merge(state.reviews, doc.reviews); remember(); renderList();
        }
        fileHandle = handle;
      }
      await writeFile();
      setStatus('Review file saved. Commit and push it to GitHub for the reviews to count.');
    } catch (error) {
      if (error.name !== 'AbortError') setStatus('File was not saved: ' + error.message + ' Your reviews remain in this browser.', true);
      else setStatus('File selection cancelled. Your reviews remain in this browser; save them before leaving.');
    }
  }
  async function importFile(file) {
    const doc = core.parse(await file.text());
    state.reviews = core.merge(state.reviews, doc.reviews);
    if (!state.reviewer) { state.reviewer = doc.reviewer_name || ''; $('reviewer').value = state.reviewer; }
    fileDirty = true; remember(); renderList();
    setStatus('Previous reviews opened. Select an entry to edit it, then save the updated file and push to GitHub.');
  }
  $('review-form').addEventListener('submit', async event => {
    event.preventDefault();
    if (!$('reviewer').reportValidity() || !$('review-form').reportValidity()) return;
    const button = $('next'); button.disabled = true;
    try {
      const id = state.editing || (crypto.randomUUID ? crypto.randomUUID() : Date.now() + '-' + Math.random().toString(36).slice(2));
      const oldKey = state.editing || 'new';
      state.reviews = core.upsert(state.reviews, values(), id, new Date().toISOString());
      state.reviewer = $('reviewer').value;
      fileDirty = true;
      const backedUp = remember();
      if (fileHandle) await writeFile();
      else if (!backedUp) throw new Error('Connect a review file, or download a copy, before moving on.');
      delete state.drafts[oldKey]; state.editing = null;
      for (const element of Object.values(fields)) $(element).value = '';
      $('form-title').textContent = 'New review'; button.textContent = 'Save & next';
      remember(); renderList(); $('presenters').focus();
      setStatus(fileHandle ? 'Review saved to your file. Ready for the next presentation. Remember to commit and push.' : 'Review saved on this device. Save the review file and push it to GitHub before leaving.');
    } catch (error) {
      // Keep the same entry selected after a file error, so retrying cannot duplicate it.
      const last = state.reviews[state.reviews.length - 1];
      if (!state.editing && last) state.editing = last.id;
      remember(); renderList();
      setStatus('Save needs attention: ' + error.message + ' Keep this tab open and save your review file.', true);
    } finally { button.disabled = false; }
  });
  $('review-form').addEventListener('input', keepDraft);
  $('reviewer').addEventListener('input', keepDraft);
  $('save-file').addEventListener('click', saveFile);
  $('download').addEventListener('click', () => {keepDraft(); download();});
  $('new-review').addEventListener('click', () => display(null));
  $('open-file').addEventListener('click', () => $('import-file').click());
  $('import-file').addEventListener('change', async event => {
    try { if (event.target.files[0]) await importFile(event.target.files[0]); }
    catch (error) { setStatus('Reviews were not opened: ' + error.message + ' Existing reviews are unchanged.', true); }
    event.target.value = '';
  });
  window.addEventListener('beforeunload', event => {
    if (fileDirty) { event.preventDefault(); event.returnValue = ''; }
  });
  $('reviewer').value = state.reviewer || '';
  const draft = state.drafts[state.editing || 'new'] || state.reviews.find(item => item.id === state.editing) || {};
  for (const [field,element] of Object.entries(fields)) $(element).value = draft[field] || '';
  if (state.editing) { $('form-title').textContent = 'Edit review'; $('next').textContent = 'Save changes & next'; }
  fileDirty = state.reviews.length > 0;
  renderList();
  if (state.reviews.length) setStatus('Previous reviews restored. Save your review file again after any edits, then commit and push.');
})();
