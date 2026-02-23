function analyze() {
  const input = document.getElementById("input").value;
  const result = document.getElementById("result");

  result.innerHTML = "Analyzing...";

  fetch("https://hsyntygyto.a.pinggy.link/api/scan", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ text: input })
  })
  .then(res => res.json())
  .then(data => {
    result.innerHTML = `
      <h3>VERDICT: ${data.verdict}</h3>
      <p>Confidence: ${data.confidence}%</p>
      <p>Rules: ${data.fired_rules.join(", ")}</p>
      <p>${data.explain_text}</p>
      <small>Audit: ${data.audit_hash}</small>
    `;
  })
  .catch(err => {
    result.innerHTML = "API error";
    console.error(err);
  });
}