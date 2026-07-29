function wait(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

function parseContent(content) {
  if (typeof content !== 'string') throw new Error('OpenRouter returned no text content');
  const json = content.trim().replace(/^```json\s*/i, '').replace(/\s*```$/, '');
  return JSON.parse(json);
}

export async function requestOpenRouterJson({ apiKey, model, prompt, schemaName, schema, fetchImpl = fetch, retries = 3 }) {
  let lastError;

  for (let attempt = 1; attempt <= retries; attempt += 1) {
    try {
      const response = await fetchImpl('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': 'https://github.com/abnerzhao/hn-reader',
          'X-Title': 'HN Reader'
        },
        body: JSON.stringify({
          model,
          messages: [{ role: 'user', content: prompt }],
          max_tokens: 3_200,
          provider: { require_parameters: true },
          response_format: { type: 'json_schema', json_schema: { name: schemaName, strict: true, schema } }
        })
      });
      const result = await response.json();
      if (!response.ok) throw new Error(`OpenRouter request failed: ${response.status} ${result.error?.message || JSON.stringify(result)}`);
      return parseContent(result.choices?.[0]?.message?.content);
    } catch (error) {
      lastError = error;
      if (attempt < retries) await wait(attempt * 1_000);
    }
  }

  throw new Error(`OpenRouter did not return valid structured JSON after ${retries} attempts: ${lastError.message}`);
}
