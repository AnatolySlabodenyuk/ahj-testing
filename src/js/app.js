import { luhnCheck, detectCardType } from "./validator";

function formatCardNumber(value) {
  const digits = value.replace(/\D/g, "").slice(0, 16);
  return digits.replace(/(.{4})/g, "$1 ").trim();
}

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("card-number");
  const btn = document.getElementById("validate-btn");
  const statusEl = document.getElementById("card-status");
  const icons = document.querySelectorAll(".card-icon");

  input.addEventListener("input", () => {
    const raw = input.value.replace(/\D/g, "");
    input.value = formatCardNumber(raw);

    const type = detectCardType(raw);
    icons.forEach((icon) => {
      icon.classList.toggle("active", icon.dataset.type === type);
    });

    input.classList.remove("input-valid", "input-invalid");
    statusEl.textContent = "";
    statusEl.className = "card-status";
  });

  btn.addEventListener("click", () => {
    const raw = input.value.replace(/\D/g, "");
    if (raw.length < 13) {
      statusEl.textContent = "Введите номер карты";
      statusEl.className = "card-status status-invalid";
      return;
    }
    const valid = luhnCheck(raw);
    input.classList.toggle("input-valid", valid);
    input.classList.toggle("input-invalid", !valid);
    statusEl.textContent = valid
      ? "Карта действительна"
      : "Неверный номер карты";
    statusEl.className =
      "card-status " + (valid ? "status-valid" : "status-invalid");
  });
});
