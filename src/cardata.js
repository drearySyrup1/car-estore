import astonMartinDbs from "./imgs/cars/astonmartin-dbs.jpg";
import ferrariSf90 from "./imgs/cars/ferrari-sf90.jpg";
import masseratiMc20 from "./imgs/cars/masserati-mc20.jpg";
import audiR8 from "./imgs/cars/audi-r8.jpg";
import lamborghiniAvendator from "./imgs/cars/lamborghini-avendatorjpg.jpg";
import nissanGtr from "./imgs/cars/nissan-gtr.jpg";
import bmwM4 from "./imgs/cars/bmw-m4.jpg";
import lamborghiniHurracan from "./imgs/cars/lamborghini-hurracan.jpg";
import porsche911 from "./imgs/cars/porsche-911.jpg";
import ferrariRoma from "./imgs/cars/ferrari-roma.jpg";
import lexusLfa from "./imgs/cars/lexus-lfa.jpg";
import porscheTaycan from "./imgs/cars/porsche-taycan.jpg";

export const carData = [
  {
    img: astonMartinDbs,
    name: "Aston Martin DBS",
    price: 238725,
    description: [
      {
        name: "Number of doors",
        value: 2,
      },
      {
        name: "Acceleration 0-62 mph",
        value: "3.4 to 3.6 seconds",
      },
      {
        name: "Cargo volume",
        value: "270 L",
      },
      {
        name: "Engine cylinder configuration",
        value: "V engine",
      },
      {
        name: "Dimensions",
        value: "4,715 mm L x 1,970 mm W x 1,285-1,295 mm H",
      },
      {
        name: "Driveline",
        value: "Rear-wheel drive",
      },
    ],
    id: "aa362a06-045d-4c60-b4db-74e68f39cf81",
  },
  {
    img: ferrariSf90,
    name: "Ferrari SF90",
    price: 376048,
    description: [
      {
        name: "Number of doors",
        value: 2,
      },
      {
        name: "Acceleration 0-62 mph",
        value: "2.5 seconds",
      },
      {
        name: "Cargo volume",
        value: "74 L",
      },
      {
        name: "Engine cylinder configuration",
        value: "V engine",
      },
      {
        name: "Dimensions",
        value: "4,710 mm L x 1,972 mm W x 1,186 mm",
      },
      {
        name: "Driveline",
        value: "Four-wheel drive",
      },
    ],
    id: "b60f28e0-8c17-42cb-81c5-d7ecf69a5dc6",
  },
  {
    img: masseratiMc20,
    name: "Maserati MC20",
    price: 197994,
    description: [
      {
        name: "Number of doors",
        value: 2,
      },
      {
        name: "Acceleration 0-62 mph",
        value: "2.9 to 3 seconds",
      },
      {
        name: "Cargo volume",
        value: "148 L",
      },
      {
        name: "Engine cylinder configuration",
        value: "V engine",
      },
      {
        name: "Dimensions",
        value: "4,669 mm L x 1,965 mm W x 1,218-1,224 mm H",
      },
      {
        name: "Driveline",
        value: "Rear-wheel drive",
      },
    ],
    id: "28c11026-ff17-4ed1-8c20-72226659f598",
  },
  {
    img: audiR8,
    name: "Audi R8",
    price: 129725,
    description: [
      {
        name: "Number of doors",
        value: 2,
      },
      {
        name: "Acceleration 0-62 mph",
        value: "3.1 to 3.2 seconds",
      },
      {
        name: "Cargo volume",
        value: "112 L",
      },
      {
        name: "Engine cylinder configuration",
        value: "V engine",
      },
      {
        name: "Dimensions",
        value: "4,429 mm L x 1,940 mm W x 1,236-1,242 mm H",
      },
      {
        name: "Driveline",
        value: "Four-wheel drive, Rear-wheel drive",
      },
    ],
    id: "ec06f52a-f3d4-4415-93a8-0cbf2f8ce1bc",
  },
  {
    img: lamborghiniAvendator,
    name: "Lamborghini Avendator",
    price: 271146,
    description: [
      {
        name: "Number of doors",
        value: 2,
      },
      {
        name: "Acceleration 0-62 mph",
        value: "2.8 to 2.9 seconds",
      },
      {
        name: "Cargo volume",
        value: "140 L",
      },
      {
        name: "Engine cylinder configuration",
        value: " V engine",
      },
      {
        name: "Dimensions",
        value: "4,797-4,943 mm L x 2,030-2,098 mm W x 1,136 mm H",
      },
      {
        name: "Driveline",
        value: "Four-wheel drive",
      },
    ],
    id: "a88b77a8-f9ab-4a2a-b1f1-5192edcc13b0",
  },
  {
    img: nissanGtr,
    name: "Nissan GTR",
    price: 88485,
    description: [
      {
        name: "Number of doors",
        value: 2,
      },
      {
        name: "Acceleration 0-60 mph",
        value: "2.9 seconds",
      },
      {
        name: "Cargo volume",
        value: "315 liters",
      },
      {
        name: "Engine cylinder configuration",
        value: "V6 Twin Turbo Petrol Engine",
      },
      {
        name: "Dimensions",
        value:
          "Length	4,671mm, Width (mirrors folded)	1,902mm, Height	1,369mm",
      },
      {
        name: "Driveline",
        value: "All Wheel Drive",
      },
    ],
    id: "3d14b433-99d4-438e-9465-6c586a5c4b65",
  },
  {
    img: bmwM4,
    name: "BMW M4",
    price: 77150,
    description: [
      {
        name: "Number of doors",
        value: 2,
      },
      {
        name: "Acceleration 0-60 mph",
        value: "3.8 seconds",
      },
      {
        name: "Cargo volume",
        value: "420 L",
      },
      {
        name: "Engine cylinder configuration",
        value: "twin-turbocharged 3.0-liter inline-six",
      },
      {
        name: "Dimensions",
        value:
          "4794 mm in length, 1887 mm in width and 1393 mm in height, with a wheelbase of 2857 mm",
      },
      {
        name: "Driveline",
        value: "Rear Wheel Drive, All Wheel Drive",
      },
    ],
    id: "382be564-b9a2-4797-85ac-ae912da3a1cd",
  },
  {
    img: lamborghiniHurracan,
    name: "Lamborghini Huracan",
    price: 164400,
    description: [
      {
        name: "Number of doors",
        value: 2,
      },
      {
        name: "Acceleration 0-62 mph",
        value: "2.9 to 3.5 seconds",
      },
      {
        name: "Cargo volume",
        value: "60 to 70 L",
      },
      {
        name: "Engine cylinder configuration",
        value: "V engine 5.2 L V10",
      },
      {
        name: "Dimensions",
        value: "4,520 mm L x 1,933 mm W x 1,165-1,180 mm H",
      },
      {
        name: "Driveline",
        value: "Four-wheel drive, Rear-wheel drive",
      },
    ],
    id: "ed45a016-4bea-4f56-a40c-d9e759b2a1a1",
  },
  {
    img: porsche911,
    name: "Porsche 911",
    price: 89800,
    description: [
      {
        name: "Number of doors",
        value: 2,
      },
      {
        name: "Acceleration 0-62 mph",
        value: "2.7 to 4.4 seconds",
      },
      {
        name: "Cargo volume",
        value: "128 to 132 L",
      },
      {
        name: "Engine cylinder configuration",
        value: "Flat engine",
      },
      {
        name: "Dimensions",
        value:
          "4,519-4,573 mm L x 1,852-1,900 mm W x 1,279-1,322 mm H",
      },
      {
        name: "Driveline",
        value: "Four-wheel drive, Rear-wheel drive",
      },
    ],
    id: "6aa2c0b7-4408-45fd-995f-b9030d8b9538",
  },
  {
    img: ferrariRoma,
    name: "Ferrari Roma",
    price: 170984,
    description: [
      {
        name: "Number of doors",
        value: 2,
      },
      {
        name: "Acceleration 0-62 mph",
        value: "3.4 seconds",
      },
      {
        name: "Cargo volume",
        value: "272 L",
      },
      {
        name: "Engine cylinder configuration",
        value: "V engine",
      },
      {
        name: "Dimensions",
        value: "4,656 mm L x 1,974 mm W x 1,301 mm H",
      },
      {
        name: "Driveline",
        value: "Rear-wheel drive",
      },
    ],
    id: "e4a2118f-ac94-49ba-b9c2-91cb4d25d758",
  },
  {
    img: lexusLfa,
    name: "Lexus LFA",
    price: 800000,
    description: [
      {
        name: "Number of doors",
        value: 2,
      },
      {
        name: "Acceleration 0-62 mph",
        value: "3.7 seconds",
      },
      {
        name: "Engine cylinder configuration",
        value: "4.8 L V10",
      },
      {
        name: "Dimensions",
        value:
          "Length	4,505 mm (177.4 in), Width	1,895 mm (74.6 in), Height	1,220 mm (48.0 in)",
      },
      {
        name: "Driveline",
        value: "Rear Wheel Drive",
      },
    ],
    id: "e093a9df-a367-4cef-92fc-851ee9cae3b8",
  },
  {
    img: porscheTaycan,
    name: "Porsche Taycan",
    price: 75500,
    description: [
      {
        name: "Number of doors",
        value: "4, 5",
      },
      {
        name: "Acceleration 0-62 mph",
        value: "2.8 to 5.4 seconds",
      },
      {
        name: "Cargo volume",
        value: "450 to 530 L, 1,171 to 1,212 L with seat area",
      },
      {
        name: "Battery",
        value: "79.2-93.4 kWh 800 V lithium-ion",
      },
      {
        name: "Dimensions",
        value:
          "4,963-4,974 mm L x 1,966-1,967 mm W x 1,378-1,412 mm H",
      },
      {
        name: "Driveline",
        value: "All Wheel Drive",
      },
    ],
    id: "b0cb84e7-a534-4c0a-9c60-7866fdb4dec0",
  },
];
