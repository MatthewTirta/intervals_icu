# intervals-icu-mcp

Remote MCP server (Streamable HTTP) for Intervals.icu, for claude.ai custom connectors.

Env vars (Vercel > Project > Settings > Environment Variables, Production):
- INTERVALS_API_KEY  - intervals.icu > Settings > Developer Settings > API key
- MCP_TOKEN          - random secret, min 16 chars (it lives in the connector URL)
- INTERVALS_ATHLETE_ID (optional) - default "0" = owner of the API key

Deploy: `npx vercel@latest --prod`
Health: https://<project>.vercel.app/  -> api_key_set / token_set should be true
Connector URL: https://<project>.vercel.app/mcp/<MCP_TOKEN>

Tools: get_athlete, list_activities, get_activity, get_activity_streams, get_wellness,
list_events, get_event, list_workout_library, create_event, update_event, delete_event,
update_wellness, update_activity, api_get (raw GET to any /api/v1 path).
