const githubApiVersion = '2026-03-10';

export async function dispatchWorkflow(env, fetchImpl = fetch) {
  if (!env.GITHUB_TOKEN) throw new Error('GITHUB_TOKEN is not configured');

  const response = await fetchImpl(
    `https://api.github.com/repos/${env.GITHUB_OWNER}/${env.GITHUB_REPO}/actions/workflows/${env.GITHUB_WORKFLOW}/dispatches`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${env.GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
        'X-GitHub-Api-Version': githubApiVersion
      },
      body: JSON.stringify({ ref: env.GITHUB_REF })
    }
  );

  if (!response.ok) throw new Error(`GitHub workflow dispatch failed: ${response.status} ${await response.text()}`);
}

export default {
  async scheduled(_controller, env, ctx) {
    ctx.waitUntil(dispatchWorkflow(env));
  },

  fetch() {
    return new Response('Not found', { status: 404 });
  }
};
