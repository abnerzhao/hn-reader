# Cloudflare scheduled dispatcher

This Worker triggers the existing GitHub Actions workflow at 09:17 China Standard Time. Cloudflare Cron uses UTC, so `17 1 * * *` is configured in `wrangler.toml`.

## One-time setup

1. Create a fine-grained GitHub personal access token limited to `abnerzhao/hn-reader`, with **Actions: Read and write** permission.
2. Install dependencies on your machine, then log in to Cloudflare:

   ```bash
   cd automation/cloudflare-dispatch
   npx wrangler login
   npx wrangler deploy
   npx wrangler secret put GITHUB_TOKEN
   ```

3. Confirm the schedule in Cloudflare Dashboard: **Workers & Pages → hn-reader-dispatch → Settings → Triggers**.

The Worker has no public route. It only responds to its Cron Trigger. Cron changes can take up to 15 minutes to propagate.

## Verify locally

```bash
node --test test/dispatch.test.mjs
```
