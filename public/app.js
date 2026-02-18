const data = [
  { id: 101, verdict: 0 },
  { id: 102, verdict: 1 },
  { id: 103, verdict: 2 },
  { id: 104, verdict: 3 }
];

const labels = ["NORMAL", "RISK", "SUSPECT", "HIGH-RISK"];

const tbody = document.querySelector("#auditTable tbody");

data.forEach(tx => {
  const tr = document.createElement("tr");
  tr.className = "verdict-" + tx.verdict;

  tr.innerHTML = `
    <td>${tx.id}</td>
    <td>${labels[tx.verdict]}</td>
    <td>Verified</td>
  `;

  tr.onclick = () => openVault(tx);
  tbody.appendChild(tr);
});

function openVault(tx) {
  document.getElementById("vault").classList.remove("hidden");
  document.getElementById("vaultData").textContent =
`Transaction ID: ${tx.id}
Verdict: ${labels[tx.verdict]}
SHA-256: demo_hash_${tx.id}
Signature: demo_signature
Integrity: Verified by Frozen Core v1.0.0`;
}

function closeVault() {
  document.getElementById("vault").classList.add("hidden");
}
