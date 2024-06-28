"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { CiTrash } from "react-icons/ci";

const DisplayCards = () => {
  const cardInfo = [
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
    {
      id: 3,
      task: "brush your teeth",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center">
      {cardInfo?.map((cardInfo: any) => (
        <Card
          key={cardInfo.id}
          className=" flex justify-between items-center w-[1000px]"
        >
          <CardHeader>
            <CardTitle>{cardInfo.task}</CardTitle>
          </CardHeader>
          <div className="flex justify-center items-center">
            <Button
              variant={"outline"}
              className="rounded-full border border-black"
            >
              ❣️ Marked as complete
            </Button>
            <CiTrash className="m-5" size={20} />
          </div>
        </Card>
      ))}
      ,
    </div>
  );
};

export default DisplayCards;
