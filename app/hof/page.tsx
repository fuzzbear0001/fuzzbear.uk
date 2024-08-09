import { title } from "@/components/primitives";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Avatar } from "@nextui-org/avatar";
import {SearchIcon} from "./SearchIcon";
import cards from "@/json/hof.json"; 

export default function Hof() {
  return (
    <div>
      <h1 className="rainbow-wave text-3xl lg:text-4xl">Hall Of Autism</h1>
      <div className="mt-4">
        <div className="gap-2 grid grid-cols-2 sm:grid-cols-2">
          {cards.map((card, index) => (
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