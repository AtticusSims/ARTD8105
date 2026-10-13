const test = require('node:test');
const assert = require('node:assert/strict');
const core = require('./review-core.js');
const review = {reviewer_name:'Test Reviewer',presenter_names:'Test Presenter',project_title:'Test Project',contribution:'A method for generating joined forms.',strongest_support:'Three parameter variations retain the joints.',main_challenge:'Show whether the narrowest joint can be printed.'};
test('saving, editing and exporting preserve one review and its previous version', () => {
  const one=core.upsert([],review,'r1','2026-10-14T10:00:00+08:00');
  const edited=core.upsert(one,{...review,main_challenge:'Measure the minimum joint clearance.'},'r1','2026-10-14T10:05:00+08:00');
  assert.equal(edited.length,1);
  assert.equal(edited[0].created_at,one[0].created_at);
  assert.equal(edited[0].revisions[0].main_challenge,review.main_challenge);
  const restored=core.parse(JSON.stringify(core.document(edited,'Test Reviewer','2026-10-14T10:06:00+08:00')));
  assert.equal(restored.reviews[0].main_challenge,'Measure the minimum joint clearance.');
});
test('required feedback rejects whitespace and missing names', () => {
  for(const field of Object.keys(review)) assert.throws(()=>core.upsert([],{...review,[field]:'  '},'r1',new Date().toISOString()));
});
test('opening a saved file merges rather than discards existing reviews', () => {
  const one=core.upsert([],review,'r1','2026-10-14T10:00:00Z');
  const other=core.upsert([],review,'r2','2026-10-14T10:00:00Z');
  assert.equal(core.merge(one,other).length,2);
  assert.equal(core.merge(one,one).length,1);
  const newer=core.upsert(one,{...review,project_title:'Changed project'},'r1','2026-10-14T10:05:00Z');
  assert.equal(core.merge(newer,one)[0].project_title,'Changed project');
  assert.equal(core.merge(one,newer)[0].project_title,'Changed project');
});
test('invalid files and duplicate review IDs are rejected', () => {
  assert.throws(()=>core.parse(JSON.stringify({reviews:[]})));
  const one=core.upsert([],review,'r1','2026-10-14T10:00:00Z');
  assert.throws(()=>core.parse(JSON.stringify(core.document([...one,...one],'Test Reviewer','2026-10-14T10:00:00Z'))));
});
