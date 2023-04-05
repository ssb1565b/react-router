import React from "react";
import Button from "./Button";

export default function OrangeButton({ children, clickEvent }) {
  return (
    <Button
      clickEvent={clickEvent}
      mainColor="#fae243"
      subColor="#fa9f1a"
      hoverColor="#faf000"
    >
      {children}
    </Button>
  );
}
