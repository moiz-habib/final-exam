;
import DisplayCards from "@/components/displayCards/displayCards";
import Header from "@/components/header/header";
import InputField from "@/components/input/inputField";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col justify-center gap-6 ">
      <Header></Header>
      <InputField></InputField>
      <DisplayCards></DisplayCards>
    </div>
  );
};

export default Home;
