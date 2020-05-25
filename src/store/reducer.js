const initialState = {
  phones: [
    {
      id: 1,
      name: "Samsung Galaxy A40 - 64GB - Zwart",
      description:
        "Meet the Samsung Galaxy A40! The A40 is characterized by an Infinity-you Display, intelligent camera, fast charge and a storage memory of 64 GB.",
      price: 199,
      brand: "Samsung",
      image: "https://media.s-bol.com/mQgrGGyYkQ1E/550x762.jpg",
    },
    {
      id: 2,
      name: "Alcatel 3X (2019) - 128GB - Zwart",
      description:
        'The Alcatel 3X has a large impressive screen, powerful hardware and a triple camera for taking creative photos. The large 6.52" HD+ screen with mini notch is ideal for viewing all your media on the go. The Alcatel 3X comes with a Google assistant button on the side of the phone, so you can request information anytime, anywhere.',
      price: 169,
      brand: "Alcatel",
      image: "https://media.s-bol.com/gJyMDLMEWVMr/550x702.jpg",
    },
    {
      id: 3,
      name: "Huawei P40 Pro - 5G - 256GB - Zwart",
      description:
        "Use the Huawei P40 Pro to take the most beautiful photos both day and night. With 256GB of storage, you don't have to worry about too little memory on the smartphone, if this is the case, you can extend to 256GB with an NM card. And with the 4200 mAh battery, your smartphone lasts all day, should you unexpectedly run out of battery, you can charge your P40 Pro wirelessly super easily. Unlock your Huawei P40 Pro super fast through facial recognition or fingerprint unlocking.",
      price: 919,
      brand: "Huawei",
      image: "https://media.s-bol.com/N9wMDXmx1kPz/550x793.jpg",
    },
    {
      id: 4,
      name: "Samsung Galaxy S20+ - 5G - 128GB - Cloud Blue",
      description:
        "Discover the world in a new way with the Samsung Galaxy S20+. With this device, Samsung sets the tone for the new generations of smartphones, by introducing the Space Zoom camera, which can zoom in to 30x. The Samsung Galaxy S20+ has a super smooth touchscreen with fingerprint scanner in the screen and an infinity-o display. The device is compatible with hyperfast 5G, but of course also with the 4G network.",
      price: 999,
      brand: "Samsung",
      image: "https://media.s-bol.com/qjgWn9rl5NX0/550x763.jpg",
    },
    {
      id: 5,
      name: "Huawei P30 Lite - 128GB - Midnight Zwart",
      description:
        "With the Huawei P30 Lite, you choose the best battery and camera for the best price. The Huawei P30 Lite has an ultra-wide Triple camera system that allows you to take the most beautiful pictures, including from a distance.",
      price: 249,
      brand: "Huawei",
      image: "https://media.s-bol.com/738OOjxW4nNO/550x765.jpg",
    },
    {
      id: 6,
      name: "Alcatel IDOL 4S",
      description:
        "The Alcatel IDOL 4S is the best horse stable under all Alcatel equipment. With a 5.5 inch QHD screen, a 16 Megapixel camera and 32 GB of storage memory you will nothing with this smartphone. In addition, you can use the box in which this unit comes as Virtual Reality glasses for your smartphone. Discover the performance and quality of this unit!",
      price: 289,
      brand: "Alcatel",
      image: "https://media.s-bol.com/N9wMDXmx1kPz/550x793.jpg",
    },
  ],
  cart: [],
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "Sort_Phone": {
      return {
        ...state,
        phones: action.payload,
      };
    }
    case "ADD_TO_CART": {
      const product = action.payload;
      const existingProduct = state.cart.find((p) => {
        return p.id === product.id;
      });
      if (!existingProduct) {
        return {
          ...state,
          cart: [
            ...state.cart,
            {
              id: action.payload.id,
              name: action.payload.name,
              price: action.payload.price,
              bought: 1,
            },
          ],
        };
      } else {
        const updatedCart = state.cart.map((p) => {
          return p.id === product.id ? { ...p, bought: p.bought + 1 } : p;
        });
        return { ...state, cart: updatedCart };
      }
    }
    case "REMOVE_FROM_CART": {
      const updatedCart = state.cart.map((p) => {
        return p.id === action.payload.id ? { ...p, bought: p.bought - 1 } : p;
      });
      return { ...state, cart: updatedCart };
    }
    case "ADD_QUANTITY_CART": {
      const updatedCart = state.cart.map((p) => {
        return p.id === action.payload.id ? { ...p, bought: p.bought + 1 } : p;
      });
      return { ...state, cart: updatedCart };
    }
    case "EMPTY": {
      return { ...state, cart: [] };
    }
    default: {
      return state;
    }
  }
}
