// Data for the six cards
const cards = [
  { icon: "🚀", title: "Launch", text: "Ship your ideas fast with a streamlined workflow." },
  { icon: "⚡", title: "Speed", text: "Optimized performance that keeps everything snappy." },
  { icon: "🎨", title: "Design", text: "Beautiful, modern visuals out of the box." },
  { icon: "🔒", title: "Security", text: "Your data is protected with best-in-class encryption." },
  { icon: "📊", title: "Analytics", text: "Gain insights with real-time dashboards and reports." },
  { icon: "💬", title: "Support", text: "Friendly help available around the clock, every day." }
];

const grid = document.getElementById("card-grid");

// Build each card element dynamically
cards.forEach((card) => {
  const el = document.createElement("article");
  el.className = "card";
  el.innerHTML = `
    <div class="icon">${card.icon}</div>
    <h2>${card.title}</h2>
    <p>${card.text}</p>
  `;
  grid.appendChild(el);
});
