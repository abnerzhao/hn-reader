import assert from 'node:assert/strict';
import test from 'node:test';
import { dispatchWorkflow } from '../src/index.js';

const env = {
  GITHUB_TOKEN: 'token',
  GITHUB_OWNER: 'abnerzhao',
  GITHUB_REPO: 'hn-reader',
  GITHUB_WORKFLOW: 'publish-daily.yml',
  GITHUB_REF: 'main'
};

test('dispatches the configured GitHub workflow', async () => {
  let request;
  await dispatchWorkflow(env, async (url, options) => {
    request = { url, options };
    return new Response(null, { status: 204 });
  });

  assert.equal(request.url, 'https://api.github.com/repos/abnerzhao/hn-reader/actions/workflows/publish-daily.yml/dispatches');
  assert.equal(request.options.headers.Authorization, 'Bearer token');
  assert.deepEqual(JSON.parse(request.options.body), { ref: 'main' });
});

test('reports GitHub dispatch errors', async () => {
  await assert.rejects(
    dispatchWorkflow(env, async () => new Response('Bad credentials', { status: 401 })),
    /GitHub workflow dispatch failed: 401 Bad credentials/
  );
});
