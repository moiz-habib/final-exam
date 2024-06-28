import React from "react";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export const DisplayCards = () => {
  cardInfo: [
    {
      id: 0,
      task: "brush your teeth",
    },
    {
      id: 1,
      task: "brush your teeth",
    },
    {
      id: 2,
      task: "brush your teeth",
    },
  ];

  return (
    <div>
      <Card>
        {cardInfo.map()}
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
        </CardHeader>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
};
