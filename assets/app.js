function analyze() {
  const result = document.getElementById("result");
  result.innerHTML = `
    <h3>RISK LEVEL: HIGH</h3>
    <p>Behavior pattern: repeated pressure / threat signals</p>
    <p>Proof ID: ${Date.now()}</p>
  `;
}
