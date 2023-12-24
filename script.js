const globe = document.querySelector(".globe");
const numSnowflakes = 100;

for (let i = 0; i < numSnowflakes; i++) {
  createSnowflake();
}

function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.className = "snowflake";
  const startX = Math.random() * window.innerWidth;
  const duration = Math.random() * (6 - 4) + 4;
  snowflake.style.top = "0px";
  snowflake.style.left = startX + "px";

  snowflake.style.animationDuration = duration + "s";

  globe.appendChild(snowflake);
}
