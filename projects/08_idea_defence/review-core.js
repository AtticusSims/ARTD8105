(function (root) {
  'use strict';
  const fields = ['reviewer_name', 'presenter_names', 'project_title', 'contribution', 'strongest_support', 'main_challenge'];
  function validate(review) {
    for (const field of fields) {
      const limit = field.endsWith('_name') ? 150 : field.includes('names') || field.includes('title') ? 250 : 4000;
      if (typeof review[field] !== 'string' || !review[field].trim() || review[field].length > limit) {
        throw new Error('Complete every field with a specific response.');
      }
    }
    return Object.fromEntries(fields.map(field => [field, review[field].trim()]));
  }
  function upsert(reviews, review, id, timestamp) {
    const clean = validate(review);
    const existing = reviews.find(entry => entry.id === id);
    const entry = { id, ...clean, created_at: existing ? existing.created_at : timestamp, updated_at: timestamp };
    if (existing) entry.revisions = [...(existing.revisions || []), { ...existing, revisions: undefined }];
    return existing ? reviews.map(old => old.id === id ? entry : old) : [...reviews, entry];
  }
  function parse(text) {
    const doc = JSON.parse(text);
    if (doc.schema_version !== 1 || doc.course !== 'ARTD8105' || doc.session !== 8 || !Array.isArray(doc.reviews) || doc.reviews.length > 1000) {
      throw new Error('Choose an ARTD8105 Session 8 review file.');
    }
    const ids = new Set();
    for (const entry of doc.reviews) {
      validate(entry);
      if (typeof entry.id !== 'string' || !entry.id || ids.has(entry.id) || !Number.isFinite(Date.parse(entry.updated_at))) {
        throw new Error('This review file contains an invalid or duplicate entry.');
      }
      ids.add(entry.id);
    }
    return doc;
  }
  function merge(local, incoming) {
    const result = local.slice();
    for (const entry of incoming) {
      const index = result.findIndex(old => old.id === entry.id);
      if (index < 0) result.push(entry);
      else if (Date.parse(entry.updated_at) > Date.parse(result[index].updated_at)) result[index] = entry;
    }
    return result;
  }
  function document(reviews, reviewer, timestamp) {
    return {schema_version: 1, course: 'ARTD8105', session: 8, session_date: '2026-10-14', reviewer_name: reviewer, exported_at: timestamp, reviews};
  }
  root.ReviewCore = {validate, upsert, parse, merge, document};
  if (typeof module !== 'undefined') module.exports = root.ReviewCore;
})(typeof globalThis !== 'undefined' ? globalThis : this);
