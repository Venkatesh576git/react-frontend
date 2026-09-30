const crops = [
  {
    id: 1,
    name: "Rice",
    category: "Cereal Crop",
    season: "Kharif",
    duration: "120-150 days",
    water: "High",
    soil: "Clayey and loamy soils",
    temperature: "20°C - 35°C",
    icon: "🌾",
    description:
      "Rice is one of the most important cereal crops cultivated for food production. It requires suitable soil moisture, proper nutrient management, and appropriate crop care.",

    cultivation: {
      landPreparation:
        "Prepare the field by ploughing and leveling the soil. Ensure proper drainage and suitable soil moisture before planting.",

      seedSelection:
        "Select quality seeds from reliable sources and choose varieties suitable for the local climate and growing conditions.",

      sowing:
        "Rice can be established through direct seeding or transplanting depending on the cultivation method and local practices.",

      irrigation:
        "Maintain appropriate soil moisture and manage irrigation according to crop growth stage, soil conditions, and rainfall.",

      fertilizer:
        "Apply nutrients based on soil testing and crop requirements. Balanced nutrient management supports healthy growth.",

      pestManagement:
        "Monitor the field regularly for pests and diseases. Use integrated pest management practices and seek expert advice when necessary.",

      harvesting:
        "Harvest when the crop reaches maturity, following suitable local indicators and recommended harvesting practices."
    }
  },

  {
    id: 2,
    name: "Groundnut",
    category: "Oilseed Crop",
    season: "Kharif / Rabi",
    duration: "100-120 days",
    water: "Medium",
    soil: "Well-drained sandy loam",
    temperature: "25°C - 30°C",
    icon: "🥜",
    description:
      "Groundnut is an important oilseed and food crop. It grows well in suitable well-drained soils with proper moisture and nutrient management.",

    cultivation: {
      landPreparation:
        "Prepare a fine, well-drained seedbed suitable for healthy root development and pod formation.",

      seedSelection:
        "Choose healthy, high-quality seeds suitable for the local growing conditions.",

      sowing:
        "Sow seeds at an appropriate depth and spacing based on the selected variety and agricultural recommendations.",

      irrigation:
        "Provide irrigation when necessary, especially during moisture-sensitive growth stages.",

      fertilizer:
        "Use soil-test-based nutrient management and follow locally recommended fertilizer practices.",

      pestManagement:
        "Inspect plants regularly for pest damage and disease symptoms. Adopt integrated management practices.",

      harvesting:
        "Harvest when pods are sufficiently mature and follow proper drying and storage procedures."
    }
  },

  {
    id: 3,
    name: "Maize",
    category: "Cereal Crop",
    season: "Kharif / Rabi",
    duration: "90-120 days",
    water: "Medium",
    soil: "Well-drained loamy soil",
    temperature: "21°C - 30°C",
    icon: "🌽",
    description:
      "Maize is a versatile cereal crop used for food, feed, and industrial purposes. Proper soil preparation, irrigation, and nutrient management support production.",

    cultivation: {
      landPreparation:
        "Prepare the soil thoroughly and ensure good drainage before sowing.",

      seedSelection:
        "Select suitable hybrid or open-pollinated varieties recommended for the local region.",

      sowing:
        "Sow seeds at recommended spacing and depth based on variety and growing conditions.",

      irrigation:
        "Provide sufficient moisture during important growth stages and avoid prolonged water stress.",

      fertilizer:
        "Apply balanced nutrients according to soil test results and local recommendations.",

      pestManagement:
        "Monitor the crop for common pests and diseases and use integrated pest management techniques.",

      harvesting:
        "Harvest when the crop reaches the maturity stage appropriate for its intended use."
    }
  },

  {
    id: 4,
    name: "Tomato",
    category: "Vegetable Crop",
    season: "Year-round with suitable conditions",
    duration: "90-120 days",
    water: "Medium",
    soil: "Well-drained loamy soil",
    temperature: "18°C - 30°C",
    icon: "🍅",
    description:
      "Tomato is a widely cultivated vegetable crop used in household cooking and food processing. It requires careful irrigation, nutrient management, and disease monitoring.",

    cultivation: {
      landPreparation:
        "Prepare fertile, well-drained soil and incorporate suitable organic matter based on soil requirements.",

      seedSelection:
        "Choose healthy seeds or seedlings of varieties suited to the local climate.",

      sowing:
        "Raise seedlings where appropriate and transplant healthy plants at recommended spacing.",

      irrigation:
        "Maintain consistent soil moisture while avoiding waterlogging.",

      fertilizer:
        "Apply nutrients based on soil testing and crop growth requirements.",

      pestManagement:
        "Monitor for insect pests and disease symptoms. Use integrated management and expert guidance.",

      harvesting:
        "Harvest fruits at the maturity stage required for fresh consumption or transportation."
    }
  }
];

export default crops;