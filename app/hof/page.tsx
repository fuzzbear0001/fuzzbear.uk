import { useState } from "react";
import { title } from "@/components/primitives";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Avatar } from "@nextui-org/avatar";
import {SearchIcon} from "./SearchIcon";
import {Input} from "@nextui-org/input";
import cards from "@/json/hof.json"; 



export default function Hof() {
  const [searchTerm, setSearchTerm] = useState("");

  // Function to filter cards based on the search term
  const filteredCards = cardsData.filter((card) =>
    card.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1 className="rainbow-wave text-3xl lg:text-4xl text-center">Hall Of Autism</h1>
      
      {/* Centered Search Input */}
      <div className="flex justify-center mt-4">
        <Input
          label="Search"
          isClearable
          radius="lg"
          classNames={{
            label: "text-black/50 dark:text-white/90",
            input: [
              "bg-transparent",
              "text-black/90 dark:text-white/90",
              "placeholder:text-default-700/50 dark:placeholder:text-white/60",
            ],
            innerWrapper: "bg-transparent",
            inputWrapper: [
              "shadow-xl",
              "bg-default-200/50",
              "dark:bg-default/60",
              "backdrop-blur-xl",
              "backdrop-saturate-200",
              "hover:bg-default-200/70",
              "dark:hover:bg-default/70",
              "group-data-[focus=true]:bg-default-200/50",
              "dark:group-data-[focus=true]:bg-default/60",
              "!cursor-text",
            ],
          }}
          placeholder="Type to search..."
          startContent={
            <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
          }
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="mt-4">
        <div className="gap-2 grid grid-cols-2 sm:grid-cols-2">
          {filteredCards.map((card, index) => (
            <Card className="py-4" key={index}>
              <CardHeader className="pb-0 pt-2 px-4 flex items-center justify-center">
                <div className="flex items-center justify-center">
                  <Avatar
                    isBordered
                    radius="sm"
                    src={card.avatar}
                    className="w-20 h-20 text-large"
                  />
                </div>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <div className="flex items-center justify-center">
                  {card.gold ? (
                    <h6 className={title({ color: "yellow", size: "xsmall" })}>
                      {card.name}
                    </h6>
                  ) : (
                    <h4 className="font-bold text-large">{card.name}</h4>
                  )}
                </div>
                <p>{card.description}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}