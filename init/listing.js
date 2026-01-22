const sampleListings = (stateMap) => [
  {
    title: "Mechuka Valley Retreat",
    description: "A peaceful valley surrounded by snow-capped mountains and Buddhist monasteries.",
    img: "https://img-cdn.publive.online/filters:format(webp)/english-betterindia/media/media_files/2025/12/26/dzongu-04-2025-12-26-19-23-19.jpg",
    price: 4500,
    country: "India",
    state: stateMap["arunachal pradesh"],
    city: "Mechuka"
  },
  {
    title: "Spiti River Camp",
    description: "Camping experience beside the cold desert river with starry night views.",
    img: "https://www.emperortraveline.com/wp-content/uploads/2024/08/spiti-cover-1024x561.webp",
    price: 3200,
    country: "India",
    state: stateMap["himachal pradesh"],
    city: "Spiti Valley"
  },
  {
    title: "Rann of Kutch Desert Stay",
    description: "White salt desert experience with cultural folk nights.",
    img: "https://soultravelindia.com/wp-content/uploads/2021/10/1_Diphlu-River-Lodge-Bedroom.jpg",
    price: 5000,
    country: "India",
    state: stateMap["gujarat"],
    city: "Kutch"
  },
  {
    title: "Munnar Tea Garden Cottage",
    description: "Stay inside lush green tea plantations with misty mornings.",
    img: "https://static.toiimg.com/thumb/msid-102357947,width-748,height-499,resizemode=4,imgsize-83072/Thenmala-Kerala.jpg",
    price: 3800,
    country: "India",
    state: stateMap["kerala"],
    city: "Munnar"
  },
  {
    title: "Ziro Valley Homestay",
    description: "Tribal culture and scenic rice fields surrounded by hills.",
    img: "https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2022/04/Savandurga-Hill-Karnataka.jpg",
    price: 2800,
    country: "India",
    state: stateMap["arunachal pradesh"],
    city: "Ziro"
  },
  {
    title: "Coorg Coffee Estate Stay",
    description: "Luxury stay amid coffee plantations with forest views.",
    img: "https://static.toiimg.com/thumb/109792797/ITC-Maurya.jpg",
    price: 4200,
    country: "India",
    state: stateMap["karnataka"],
    city: "Coorg"
  },
  {
    title: "Ladakh Mountain Camp",
    description: "High-altitude camping experience with stunning Himalayan landscapes.",
    img: "https://img-cdn.publive.online/filters:format(webp)/english-betterindia/media/media_files/2025/12/26/dzongu-04-2025-12-26-19-23-19.jpg",
    price: 6000,
    country: "India",
    state: stateMap["ladakh"],
    city: "Leh"
  },
  {
    title: "Chopta Forest Hut",
    description: "Gateway to Tungnath trek surrounded by alpine forests.",
    img: "https://res.cloudinary.com/worldpackers/image/upload/c_limit,f_auto,q_auto,w_1140/qticr4gptrkhnqzfi0q0",
    price: 2500,
    country: "India",
    state: stateMap["uttarakhand"],
    city: "Chopta"
  },
  {
    title: "Sundarbans Mangrove Stay",
    description: "Explore mangrove forests and wildlife near the delta.",
    img: "https://soultravelindia.com/wp-content/uploads/2021/10/1_Diphlu-River-Lodge-Bedroom.jpg",
    price: 3500,
    country: "India",
    state: stateMap["west bengal"],
    city: "Sundarbans"
  },
  {
    title: "Andaman Beach Resort",
    description: "Private beach resort with crystal clear water views.",
    img: "https://static.toiimg.com/thumb/109792651/Spice-Village-CGH-Earth.jpg",
    price: 7000,
    country: "India",
    state: stateMap["andaman and nicobar islands"],
    city: "Havelock Island"
  },
  {
    title: "Tawang Monastery View Lodge",
    description: "Scenic stay overlooking Tawang Monastery and valleys.",
    img: "https://hblimg.mmtcdn.com/content/hubble/img/uttarakhand/mmt/destination/m_destination-uttarakhand-landscape_l_400_640.jpg",
    price: 4000,
    country: "India",
    state: stateMap["arunachal pradesh"],
    city: "Tawang"
  },
  {
    title: "Kasol Riverside Camp",
    description: "Chill riverside camping experience with mountain vibes.",
    img: "https://s7ap1.scene7.com/is/image/incredibleindia/lingdum-monastery-gangtok-sikkim-1-attr-hero?qlt=82&ts=1742166048831",
    price: 3000,
    country: "India",
    state: stateMap["himachal pradesh"],
    city: "Kasol"
  },
  {
    title: "Valley of Flowers Stay",
    description: "Stay close to UNESCO heritage flower valley trails.",
    img: "https://www.emperortraveline.com/wp-content/uploads/2024/08/spiti-cover-1024x561.webp",
    price: 3600,
    country: "India",
    state: stateMap["uttarakhand"],
    city: "Chamoli"
  },
  {
    title: "Mount Abu Hill Resort",
    description: "Only hill station of Rajasthan with serene lake views.",
    img: "https://www.clubmahindra.com/blog/images/Himachal-Pradesh-resized2.jpg",
    price: 3400,
    country: "India",
    state: stateMap["rajasthan"],
    city: "Mount Abu"
  },
  {
    title: "Mahabaleshwar Forest Resort",
    description: "Strawberry fields and dense forests all around.",
    img: "https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2022/04/Savandurga-Hill-Karnataka.jpg",
    price: 3900,
    country: "India",
    state: stateMap["maharashtra"],
    city: "Mahabaleshwar"
  },
  {
    title: "Ooty Lake View Cottage",
    description: "Calm cottage overlooking Ooty Lake and hills.",
    img: "https://res.cloudinary.com/worldpackers/image/upload/c_limit,f_auto,q_auto,w_1140/qticr4gptrkhnqzfi0q0",
    price: 3100,
    country: "India",
    state: stateMap["tamil nadu"],
    city: "Ooty"
  },
  {
    title: "Dzukou Valley Camp",
    description: "Camping at one of the most beautiful valleys in Northeast India.",
    img: "https://hblimg.mmtcdn.com/content/hubble/img/uttarakhand/mmt/destination/m_destination-uttarakhand-landscape_l_400_640.jpg",
    price: 2800,
    country: "India",
    state: stateMap["nagaland"],
    city: "Dzukou Valley"
  },
  {
    title: "Kodaikanal Pine Forest Stay",
    description: "Stay surrounded by pine forests and cool climate.",
    img: "https://s7ap1.scene7.com/is/image/incredibleindia/pithoragarh-rural-hero?qlt=82&ts=1726643529094",
    price: 3300,
    country: "India",
    state: stateMap["tamil nadu"],
    city: "Kodaikanal"
  },
  {
    title: "Jim Corbett Jungle Lodge",
    description: "Wildlife stay near tiger reserve with jungle safaris.",
    img: "https://s7ap1.scene7.com/is/image/incredibleindia/lingdum-monastery-gangtok-sikkim-1-attr-hero?qlt=82&ts=1742166048831",
    price: 5500,
    country: "India",
    state: stateMap["uttarakhand"],
    city: "Jim Corbett"
  },
  {
    title: "Alleppey Backwater Houseboat",
    description: "Traditional houseboat cruise through Kerala backwaters.",
    img: "https://www.clubmahindra.com/blog/images/Himachal-Pradesh-resized2.jpg",
    price: 8000,
    country: "India",
    state: stateMap["kerala"],
    city: "Alleppey"
  },
  {
    title: "Rishikesh Riverside Ashram Stay",
    description: "Peaceful yoga and meditation stay by the Ganga.",
    img: "https://static.toiimg.com/thumb/109792651/Spice-Village-CGH-Earth.jpg",
    price: 2200,
    country: "India",
    state: stateMap["uttarakhand"],
    city: "Rishikesh"
  },
  {
    title: "Cherrapunji Waterfall Homestay",
    description: "Stay near waterfalls in one of the wettest places on Earth.",
    img: "https://www.incredibleindia.gov.in/content/dam/incredible-india/images/arunachal-pradesh/external-blogs/likabali-to-mechuka/Likabali-to-Mechuka1-popular.jpeg",
    price: 2700,
    country: "India",
    state: stateMap["meghalaya"],
    city: "Cherrapunji"
  },
  {
    title: "Shillong Hill View Hotel",
    description: "Panoramic hill views with modern comfort.",
    img: "https://hblimg.mmtcdn.com/content/hubble/img/states_img/mmt/activities/m_Manipur_landscape_1_l_444_1000.jpg",
    price: 3600,
    country: "India",
    state: stateMap["meghalaya"],
    city: "Shillong"
  },
  {
    title: "Pangong Lake Camp",
    description: "Luxury tents beside the iconic blue lake.",
    img: "https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2022/04/Savandurga-Hill-Karnataka.jpg",
    price: 6500,
    country: "India",
    state: stateMap["ladakh"],
    city: "Pangong"
  },
  {
    title: "Bir Billing Paragliding Stay",
    description: "Adventure stay near world-famous paragliding site.",
    img: "https://s7ap1.scene7.com/is/image/incredibleindia/pithoragarh-rural-hero?qlt=82&ts=1726643529094",
    price: 2900,
    country: "India",
    state: stateMap["himachal pradesh"],
    city: "Bir"
  },
  {
    title: "Pushkar Desert Camp",
    description: "Royal desert camp with camel safari experience.",
    img: "https://static.toiimg.com/thumb/msid-102357947,width-748,height-499,resizemode=4,imgsize-83072/Thenmala-Kerala.jpg",
    price: 4100,
    country: "India",
    state: stateMap["rajasthan"],
    city: "Pushkar"
  },
  {
    title: "Auli Ski Resort",
    description: "Snow-covered slopes and cable car views.",
    img: "https://www.indianholiday.com/wordpress/wp-content/uploads/2018/05/Lahaul-Spiti-Himachal-Prad.jpg",
    price: 5200,
    country: "India",
    state: stateMap["uttarakhand"],
    city: "Auli"
  },
  {
    title: "Nainital Lake View Hotel",
    description: "Romantic lake-facing rooms in hill town.",
    img: "https://www.incredibleindia.gov.in/content/dam/incredible-india/images/arunachal-pradesh/external-blogs/likabali-to-mechuka/Likabali-to-Mechuka1-popular.jpeg",
    price: 3700,
    country: "India",
    state: stateMap["uttarakhand"],
    city: "Nainital"
  },
  {
    title: "Gokarna Beach Hut",
    description: "Minimalist beach huts with sunset views.",
    img: "https://hblimg.mmtcdn.com/content/hubble/img/states_img/mmt/activities/m_Manipur_landscape_1_l_444_1000.jpg",
    price: 2600,
    country: "India",
    state: stateMap["karnataka"],
    city: "Gokarna"
  },
  {
    title: "Tirthan Valley Riverside Stay",
    description: "Hidden Himalayan valley with river and forest views.",
    img: "https://www.indianholiday.com/wordpress/wp-content/uploads/2018/05/Lahaul-Spiti-Himachal-Prad.jpg",
    price: 3000,
    country: "India",
    state: stateMap["himachal pradesh"],
    city: "Tirthan Valley"
  }
];

module.exports = { sampleListings };



// stateMap is a lookup table (JavaScript object):
// {
//   "Uttarakhand": ObjectId("65b8c..."),
//   "Kerala": ObjectId("65b8d..."),
//   "Himachal Pradesh": ObjectId("65b8e...")
// }
// Meaning:
// “If I know the state name, give me its ObjectId.”

// to init our listing index.js has the logic how to map each state of listing.js with state id of state.js