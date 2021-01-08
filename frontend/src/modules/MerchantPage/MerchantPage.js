import React from "react";

import MerchantDetails from "./MerchantDetails/MerchantDetails";

const marcheImages = [
  "https://media.marche-movenpick.com/karmarun//image/upload/q_60,w_1600,h_1024,c_fill/marche/S1VkTFsKP-Christmas%20Pre-order%202020.jpg",
  "https://media.marche-movenpick.com/karmarun//image/upload/q_60,w_1600,h_1024,c_fill/marche/rJ9U_zxbD-Breakfast%20Favourites%20-%20Feature%20all%20breakfast%20deals%20and%20menu.jpg",
  "https://media.marche-movenpick.com/karmarun//image/upload/q_60,w_1600,h_1024,c_fill/marche/By8DVlYZw-Promotions.jpg",
  "https://media.marche-movenpick.com/karmarun//image/upload/q_60,w_1600,h_1024,c_fill/marche/SykMS2tvI-Online%20delivery%20ver2.jpg",
];

const info = {
  location: "Bishan",
  phone: "123456789",
  currentNumber: 1,
  averageWaiting: 40,
};

export default function MerchantPage(props) {
  const { match } = props;
  return (
    <>
      <MerchantDetails
        merchantName={match.params.name}
        info={info}
        images={marcheImages}
      ></MerchantDetails>
    </>
  );
}
