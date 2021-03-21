const initialState = {
  img1: "../img/sung1.jpg",
  title1: "Reyban",
  img2: "../img/bag8.jpg",
  title2: "Wallet bag",
  img3: "../img/bag9.jpg",
  title3: "Fila bag",
  img4: "../img/watch2.jpg",
  title4: "Swiess watch",
  img5: "../img/shoe2.jpg",
  title5: "Catterpilar shoe",
  img6: "../img/tshirt3.jpg",
  title6: "Nike tshirt",
  name: "sa",
  type: "",
  age: 22,
};

const reducer = (state = initialState, action: { type: string }) => {
  const newState = { ...state };

  if (action.type === "Shoe") {
    newState.title1 = "Nike";
    newState.img1 = "../img/shoe93.jpg";
    newState.title2 = "Fila";
    newState.img2 = "../img/newshoe2.jpg";
    newState.title3 = "Caterpilar";
    newState.img3 = "../img/shoe3.jpg";
    newState.title4 = "Addidas";
    newState.img4 = "../img/shoe4.jpg";
    newState.title5 = "Addidas";
    newState.img5 = "../img/shoe4.jpg";
    newState.title6 = "Addidas";
    newState.img6 = "../img/shoe5.jpg";
    newState.type = "Shoe";
    console.log("hello");
  }

  if (action.type === "Bags") {
    newState.title1 = "Schicher";
    newState.img1 = "../img/bag4.jpg";
    newState.title2 = "Fila";
    newState.img2 = "../img/bag5.jpg";
    newState.title3 = "Caterpilar";
    newState.img3 = "../img/bag7.jpg";
    newState.title4 = "Addidas";
    newState.img4 = "../img/bag8.jpg";
    newState.title5 = "Wallet";
    newState.img5 = "../img/bag7.jpg";
    newState.title6 = "Addidas";
    newState.img6 = "../img/bag9.jpg";
    newState.type = "Bags";
  }

  if (action.type === "Shirt") {
    newState.title1 = "Nike";
    newState.img1 = "../img/jacket2.jpg";
    newState.title2 = "Fila";
    newState.img2 = "../img/jacket3.jpg";
    newState.title3 = "Caterpilar";
    newState.img3 = "../img/jacket4.jpg";
    newState.title4 = "Addidas";
    newState.img4 = "../img/tshirt3.jpg";
    newState.title5 = "Tommy";
    newState.img5 = "../img/tshirt3.jpg";
    newState.title6 = "361";
    newState.img6 = "../img/tshirt3.jpg";
    newState.type = "Shirt";
  }

  if (action.type === "Sun") {
    newState.title1 = "Reyban";
    newState.img1 = "../img/sung1.jpg";
    newState.title2 = "Caterpilar";
    newState.img2 = "../img/sun2.jpg";
    newState.title3 = "Caterpilar";
    newState.img3 = "../img/sun3.jpg";
    newState.title4 = "Reyban";
    newState.img4 = "../img/sun4.jpg";
    newState.title5 = "Tommy";
    newState.img5 = "../img/sun2.jpg";
    newState.title6 = "361";
    newState.img6 = "../img/sun3.jpg";
    newState.type = "Sun";
  }
  return newState;
};

export default reducer;
