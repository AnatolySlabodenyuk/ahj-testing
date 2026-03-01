import { luhnCheck, detectCardType } from "./validator";

const CARD_LABELS = {
  visa: "Visa",
  mastercard: "Mastercard",
  amex: "Amex",
  mir: "Мир",
  discover: "Discover",
};

function formatCardNumber(value) {
  const digits = value.replace(/\D/g, "").slice(0, 16);
  return digits.replace(/(.{4})/g, "$1 ").trim();
}

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("card-number");
  const typeBadge = document.getElementById("card-type");
  const statusEl = document.getElementById("card-status");

  input.addEventListener("input", () => {
    const raw = input.value.replace(/\D/g, "");
    input.value = formatCardNumber(raw);

    const type = detectCardType(raw);
    typeBadge.textContent = type ? CARD_LABELS[type] : "";
    typeBadge.className = "card-type-badge" + (type ? ` badge-${type}` : "");

    if (raw.length >= 13) {
      const valid = luhnCheck(raw);
      input.classList.toggle("input-valid", valid);
      input.classList.toggle("input-invalid", !valid);
      statusEl.textContent = valid
        ? "Карта действительна"
        : "Неверный номер карты";
      statusEl.className =
        "card-status " + (valid ? "status-valid" : "status-invalid");
    } else {
      input.classList.remove("input-valid", "input-invalid");
      statusEl.textContent = "";
      statusEl.className = "card-status";
    }
  });
});
