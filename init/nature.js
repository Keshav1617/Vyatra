const natureEntities = (stateMap) => [
  /* ===================== UTTARAKHAND ===================== */
  {
    name: "Jim Corbett National Park",
    type: "National Park",
    description: "India’s oldest national park, famous for Bengal tigers",
    state: stateMap["uttarakhand"],
    location: {
      type: "Point",
      coordinates: [78.7747, 29.5300]
    }
  },
  {
    name: "Valley of Flowers",
    type: "National Park",
    description: "UNESCO World Heritage alpine flower valley",
    state: stateMap["uttarakhand"],
    location: {
      type: "Point",
      coordinates: [79.6044, 30.7280]
    }
  },
  {
    name: "Nanda Devi Peak",
    type: "Mountain",
    description: "Second highest peak in India",
    elevation: 7816,
    state: stateMap["uttarakhand"],
    location: {
      type: "Point",
      coordinates: [79.9700, 30.3750]
    }
  },

  /* ===================== HIMACHAL PRADESH ===================== */
  {
    name: "Great Himalayan National Park",
    type: "National Park",
    description: "High-altitude Himalayan biodiversity hotspot",
    state: stateMap["himachal pradesh"],
    location: {
      type: "Point",
      coordinates: [77.3441, 31.7516]
    }
  },
  {
    name: "Beas River",
    type: "River",
    description: "Major river flowing through Kullu and Manali",
    state: stateMap["himachal pradesh"],
    location: {
      type: "Point",
      coordinates: [77.1887, 32.2396]
    }
  },
  {
    name: "Reo Purgyil",
    type: "Mountain",
    description: "Highest mountain peak in Himachal Pradesh",
    elevation: 6816,
    state: stateMap["himachal pradesh"],
    location: {
      type: "Point",
      coordinates: [78.6250, 31.9250]
    }
  },

  /* ===================== KARNATAKA ===================== */
  {
    name: "Bandipur National Park",
    type: "National Park",
    description: "Tiger reserve in the Nilgiri Biosphere",
    state: stateMap["karnataka"],
    location: {
      type: "Point",
      coordinates: [76.6220, 11.6544]
    }
  },
  {
    name: "Jog Falls",
    type: "Waterfall",
    description: "Second highest plunge waterfall in India",
    height: 253,
    state: stateMap["karnataka"],
    location: {
      type: "Point",
      coordinates: [74.8167, 14.2167]
    }
  },
  {
    name: "Mullayanagiri",
    type: "Mountain",
    description: "Highest peak in Karnataka",
    elevation: 1930,
    state: stateMap["karnataka"],
    location: {
      type: "Point",
      coordinates: [75.7200, 13.3900]
    }
  },

  /* ===================== KERALA ===================== */
  {
    name: "Silent Valley National Park",
    type: "National Park",
    description: "Undisturbed rainforest ecosystem",
    state: stateMap["kerala"],
    location: {
      type: "Point",
      coordinates: [76.4330, 11.1296]
    }
  },
  {
    name: "Athirappilly Waterfalls",
    type: "Waterfall",
    description: "Largest waterfall in Kerala",
    height: 24,
    state: stateMap["kerala"],
    location: {
      type: "Point",
      coordinates: [76.5694, 10.2856]
    }
  },
  {
    name: "Anamudi Peak",
    type: "Mountain",
    description: "Highest peak in South India",
    elevation: 2695,
    state: stateMap["kerala"],
    location: {
      type: "Point",
      coordinates: [77.0667, 10.1667]
    }
  },

  /* ===================== RAJASTHAN ===================== */
  {
    name: "Ranthambore National Park",
    type: "National Park",
    description: "Famous tiger reserve near Sawai Madhopur",
    state: stateMap["rajasthan"],
    location: {
      type: "Point",
      coordinates: [76.5026, 26.0173]
    }
  },
  {
    name: "Keoladeo National Park",
    type: "National Park",
    description: "World-famous bird sanctuary",
    state: stateMap["rajasthan"],
    location: {
      type: "Point",
      coordinates: [77.5210, 27.1595]
    }
  },
  {
    name: "Guru Shikhar",
    type: "Mountain",
    description: "Highest point of the Aravalli Range",
    elevation: 1722,
    state: stateMap["rajasthan"],
    location: {
      type: "Point",
      coordinates: [72.7156, 24.5925]
    }
  },

  /* ===================== WEST BENGAL ===================== */
  {
    name: "Sundarbans National Park",
    type: "National Park",
    description: "Largest mangrove forest in the world",
    state: stateMap["west bengal"],
    location: {
      type: "Point",
      coordinates: [88.8883, 21.9497]
    }
  },
  {
    name: "Teesta River",
    type: "River",
    description: "Major river flowing through North Bengal",
    state: stateMap["west bengal"],
    location: {
      type: "Point",
      coordinates: [88.4370, 26.5236]
    }
  },
  {
    name: "Sandakphu",
    type: "Mountain",
    description: "Highest peak in West Bengal",
    elevation: 3636,
    state: stateMap["west bengal"],
    location: {
      type: "Point",
      coordinates: [88.0127, 27.1127]
    }
  }
];

module.exports = { natureEntities };
