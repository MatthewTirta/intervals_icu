export default function handler(req, res) {
  res.status(200).json({
    ok: true,
    service: "intervals-icu-mcp",
    api_key_set: Boolean(process.env.INTERVALS_API_KEY),
    token_set: Boolean(process.env.MCP_TOKEN && process.env.MCP_TOKEN.length >= 16),
  });
}
