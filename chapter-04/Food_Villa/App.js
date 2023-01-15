import React from "react";
import ReactDOM from "react-dom/client";
const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <h3>Food Villa</h3>
      </div>
      <div className="header__right">
        <ul>
          <li>Search</li>
          <li>About</li>
          <li>Cart</li>
          <li>help</li>
        </ul>
      </div>
    </div>
  );
};

const data = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "453659",
      name: "Chicking",
      uuid: "f13d6dbc-9296-42af-8340-1e9d7f55ae39",
      city: "66",
      area: "Choondal",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId: "moa5lmmlyvlsrcxaxn2o",
      cuisines: [
        "Snacks",
        "Grill",
        "Fast Food",
        "American",
        "Pizzas",
        "Mexican",
        "Beverages",
      ],
      tags: [],
      costForTwo: 50000,
      costForTwoString: "₹500 FOR TWO",
      deliveryTime: 34,
      minDeliveryTime: 34,
      maxDeliveryTime: 34,
      slaString: "34 MINS",
      lastMileTravel: 4.5,
      slugs: {
        restaurant: "chicking-kunnamkullam-kunnamkullam",
        city: "thrissur",
      },
      cityState: "66",
      address:
        "Mansor Foods India Pvt Ltd, Door No: 8/232, Kaders Mall, Choondal P O , Kunnamkulam Circle, Thrissur, Kerala-680502",
      locality: "Kunnamkullam",
      parentId: 251,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "60% off",
        shortDescriptionList: [
          {
            meta: "60% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹120 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "60% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹120 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5715648~p=1~eid=00000185-b53f-ad5c-3ea1-d83500bb0172",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "4.5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "453659",
        deliveryTime: 34,
        minDeliveryTime: 34,
        maxDeliveryTime: 34,
        lastMileTravel: 4.5,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.0",
      totalRatings: 500,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "649873",
      name: "Havilah Restaurant",
      uuid: "67196ea3-25a3-46e7-b4b1-11e52148f397",
      city: "66",
      area: "Kunnamkullam",
      totalRatingsString: "Too Few Ratings",
      cloudinaryImageId: "13cb77bde21712de052312b001696b95",
      cuisines: ["Chinese", "Fast Food", "Arabian"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 35,
      minDeliveryTime: 35,
      maxDeliveryTime: 35,
      slaString: "35 MINS",
      lastMileTravel: 3,
      slugs: {
        restaurant: "havilah-restaurant-kunnamkullam-kunnamkullam",
        city: "thrissur",
      },
      cityState: "66",
      address:
        "NO.15/557, 15557A, THRISSUR KUNNAMKULAM ROAD, CHOONDAL ,Kunnamkulam Circle,Thrissur,Kerala-680501",
      locality: "Thrissur Kunnamkulam Road",
      parentId: 391196,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "649873",
        deliveryTime: 35,
        minDeliveryTime: 35,
        maxDeliveryTime: 35,
        lastMileTravel: 3,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "--",
      totalRatings: 0,
      new: true,
    },
    subtype: "basic",
  },
];
const HotelCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  avgRating,
  slaString,
  costForTwoString,
}) => {
  return (
    <div className="card py-2">
      <div className="card__info">
        <div className="card__details">
          <img
            className="py-1"
            src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}
          />
          <h3>{name}</h3>
          <p className="card__cuisines">{cuisines.join(", ")}</p>
        </div>
        <div className="cardinfo__bottom py-1">
          <h4>{avgRating}</h4>
          <h4>{slaString}</h4>
          <h4>{costForTwoString}</h4>
        </div>
      </div>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body__outline py-3">
      <div className="container">
        <div className="items">
          {data.map((data) => {
            return <HotelCard key={data.data.id} {...data.data} />;
          })}
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <h1>This is Footer</h1>
    </div>
  );
};
const AppLayout = () => {
  return (
    /*
            1)Header
                - Title
                - Navbar
                - Cart
            2)Body
                - Searchbar
                - HotelList
                    - Card
                        - img
                        - name
                        - price
                        - rating 
            3)Footer
                - Links
                - CopyRight
        */
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
