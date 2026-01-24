const map = L.map("map").setView([22.9734, 78.6569], 5);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap"
}).addTo(map);


const stateCenters = {
  "andhra pradesh": [15.9129, 79.7400],
  "arunachal pradesh": [28.2180, 94.7278],
  "assam": [26.2006, 92.9376],
  "bihar": [25.0961, 85.3131],
  "chhattisgarh": [21.2787, 81.8661],
  "goa": [15.2993, 74.1240],
  "gujarat": [22.2587, 71.1924],
  "haryana": [29.0588, 76.0856],
  "himachal pradesh": [31.1048, 77.1734],
  "jharkhand": [23.6102, 85.2799],
  "karnataka": [15.3173, 75.7139],
  "kerala": [10.8505, 76.2711],
  "madhya pradesh": [22.9734, 78.6569],
  "maharashtra": [19.7515, 75.7139],
  "manipur": [24.6637, 93.9063],
  "meghalaya": [25.4670, 91.3662],
  "mizoram": [23.1645, 92.9376],
  "nagaland": [26.1584, 94.5624],
  "odisha": [20.9517, 85.0985],
  "punjab": [31.1471, 75.3412],
  "rajasthan": [27.0238, 74.2179],
  "sikkim": [27.5330, 88.5122],
  "tamil nadu": [11.1271, 78.6569],
  "telangana": [18.1124, 79.0193],
  "tripura": [23.9408, 91.9882],
  "uttar pradesh": [26.8467, 80.9462],
  "uttarakhand": [30.0668, 79.0193],
  "west bengal": [22.9868, 87.8550],

  // UNION TERRITORIES
  "andaman and nicobar islands": [11.7401, 92.6586],
  "chandigarh": [30.7333, 76.7794],
  "dadra and nagar haveli and daman and diu": [20.1809, 73.0169],
  "delhi": [28.7041, 77.1025],
  "jammu and kashmir": [33.7782, 76.5762],
  "ladakh": [34.1526, 77.5770],
  "lakshadweep": [10.5667, 72.6417],
  "puducherry": [11.9416, 79.8083]
};

const layer = L.layerGroup().addTo(map);


async function searchState() {
  const input = document.getElementById("stateInput").value.trim().toLowerCase();

  if (!input) {
    layer.clearLayers();
    map.setView([22.9734, 78.6569], 5);
    return;
  }

  if (!stateCenters[input]) {
    alert("State not found. Please enter a valid Indian state.");
    return;
  }

  layer.clearLayers();
  map.setView(stateCenters[input], 7);

  const res = await fetch(`/api/map/${input}`);
  const data = await res.json();

  data.forEach(item => {
    const [lng, lat] = item.location.coordinates;

    L.marker([lat, lng])
      .addTo(layer)
      .bindPopup(`
        <b>${item.name}</b><br>
        ${item.type}<br>
        ${item.description}
      `);
  });
}
