const natureEntities = [
  /* ===================== UTTARAKHAND ===================== */
  {
    name: "Jim Corbett National Park",
    type: "National Park",
    description: "India’s oldest national park, famous for Bengal tigers",
    stateName: "Uttarakhand",
    location: {
      type: "Point",
      coordinates: [78.7747, 29.5300]
    }
  },
  {
    name: "Valley of Flowers",
    type: "National Park",
    description: "UNESCO World Heritage alpine flower valley",
    stateName: "Uttarakhand",
    location: {
      type: "Point",
      coordinates: [79.6044, 30.7280]
    }
  },
  {
    name: "Nanda Devi Peak",
    type: "Mountain",
    description: "Second highest peak in India",
    stateName: "Uttarakhand",
    elevation: 7816,
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
    stateName: "Himachal Pradesh",
    location: {
      type: "Point",
      coordinates: [77.3441, 31.7516]
    }
  },
  {
    name: "Beas River",
    type: "River",
    description: "Major river flowing through Kullu and Manali",
    stateName: "Himachal Pradesh",
    location: {
      type: "Point",
      coordinates: [77.1887, 32.2396]
    }
  },
  {
    name: "Reo Purgyil",
    type: "Mountain",
    description: "Highest mountain peak in Himachal Pradesh",
    stateName: "Himachal Pradesh",
    elevation: 6816,
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
    stateName: "Karnataka",
    location: {
      type: "Point",
      coordinates: [76.6220, 11.6544]
    }
  },
  {
    name: "Jog Falls",
    type: "Waterfall",
    description: "Second highest plunge waterfall in India",
    stateName: "Karnataka",
    height: 253,
    location: {
      type: "Point",
      coordinates: [74.8167, 14.2167]
    }
  },
  {
    name: "Mullayanagiri",
    type: "Mountain",
    description: "Highest peak in Karnataka",
    stateName: "Karnataka",
    elevation: 1930,
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
    stateName: "Kerala",
    location: {
      type: "Point",
      coordinates: [76.4330, 11.1296]
    }
  },
  {
    name: "Athirappilly Waterfalls",
    type: "Waterfall",
    description: "Largest waterfall in Kerala",
    stateName: "Kerala",
    height: 24,
    location: {
      type: "Point",
      coordinates: [76.5694, 10.2856]
    }
  },
  {
    name: "Anamudi Peak",
    type: "Mountain",
    description: "Highest peak in South India",
    stateName: "Kerala",
    elevation: 2695,
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
    stateName: "Rajasthan",
    location: {
      type: "Point",
      coordinates: [76.5026, 26.0173]
    }
  },
  {
    name: "Keoladeo National Park",
    type: "National Park",
    description: "World-famous bird sanctuary",
    stateName: "Rajasthan",
    location: {
      type: "Point",
      coordinates: [77.5210, 27.1595]
    }
  },
  {
    name: "Guru Shikhar",
    type: "Mountain",
    description: "Highest point of the Aravalli Range",
    stateName: "Rajasthan",
    elevation: 1722,
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
    stateName: "West Bengal",
    location: {
      type: "Point",
      coordinates: [88.8883, 21.9497]
    }
  },
  {
    name: "Teesta River",
    type: "River",
    description: "Major river flowing through North Bengal",
    stateName: "West Bengal",
    location: {
      type: "Point",
      coordinates: [88.4370, 26.5236]
    }
  },
  {
    name: "Sandakphu",
    type: "Mountain",
    description: "Highest peak in West Bengal",
    stateName: "West Bengal",
    elevation: 3636,
    location: {
      type: "Point",
      coordinates: [88.0127, 27.1127]
    }
  }
];

module.exports = { data: natureEntities };
