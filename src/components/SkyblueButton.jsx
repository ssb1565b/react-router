import React from "react";
import Button from "./Button";

export default function SkyblueButton({ text, clickEvent }) {
  return (
    <Button
      clickEvent={clickEvent}
      mainColor="#56a4e8"
      subColor="#1a4de6"
      hoverColor="#6bbaff"
    >
      {text}
    </Button>
  );
}
