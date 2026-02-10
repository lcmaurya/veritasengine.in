function analyze() {
  const result = document.getElementById("result");
  result.innerHTML = `
    <h3>RISK LEVEL: HIGH</h3>
    <p>Pattern detected: repeated pressure / threat signals</p>
    <p>Proof ID: DEMO-${Date.now()}</p>
  `;
}
