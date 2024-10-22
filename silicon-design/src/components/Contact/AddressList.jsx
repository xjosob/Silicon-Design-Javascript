import React from "react";
import AdressItem from "./AdressItem";

const AddressList = () => {
  const addresses = [
    {
      name: "Medical Center 1",
      location: "4517 Washington Ave. Manchester, Kentucky 39495",
      phone: "(406) 555-0120",
      hours: {
        weekdays: "Mon - Fri: 9:00 am - 10:00 pm",
        weekend: "Sat - Sun: 9:00 am - 10:00 pm",
      },
    },
    {
      name: "Medical Center 2",
      location: "2464 Royal Ln. Mesa, New Jersey 45463",
      phone: "(406) 544-0123",
      hours: {
        weekdays: "Mon - Fri: 9:00 am - 10:00 pm",
        weekend: "Sat - Sun: 9:00 am - 10:00 pm",
      },
    },
  ];
  return (
    <>
      {addresses.map((address, index) => (
        <AdressItem key={index} {...address} />
      ))}
    </>
  );
};

export default AddressList;
