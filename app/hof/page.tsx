import { title } from "@/components/primitives";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Avatar } from "@nextui-org/avatar";

export default function hof() {
  return (
    <div>
      <h1 className="rainbow-wave text-3xl lg:text-4xl">Hall Of Autism</h1>
      <div className="mt-4">
        <div className="gap-2 grid grid-cols-2 sm:grid-cols-2">
          <Card className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex items-center justify-center">
              <div className="flex items-center justify-center">
                <Avatar
                  isBordered
                  radius="sm"
                  src="https://pub-310a2360dab34aa8a9c722a4c2cbe6dc.r2.dev/Screenshot 2024-07-09 004546.png"
                  className="w-20 h-20 text-large"
                />
              </div>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <div className="flex items-center justify-center">
                <h6 className={title({ color: "yellow", size: "xsmall" })}>
                  Ivelin
                </h6>
              </div>
              <p>
                Always here for me and a great person, but again, like everyone,
                he is high on the spectrum.
              </p>
            </CardBody>
          </Card>
          <Card className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex items-center justify-center">
              <div className="flex items-center justify-center">
                <Avatar
                  isBordered
                  radius="sm"
                  src="https://pub-310a2360dab34aa8a9c722a4c2cbe6dc.r2.dev/Screenshot 2024-07-09 005256.png"
                  className="w-20 h-20 text-large"
                />
              </div>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <div className="flex items-center justify-center">
                <h6 className={title({ color: "yellow", size: "xsmall" })}>
                  Adrian
                </h6>
              </div>
              <p>
                Adrian thinks he’s bad and thinks he can fight when he’s just an
                autistic coon
              </p>
            </CardBody>
          </Card>
          <Card className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex items-center justify-center">
              <div className="flex items-center justify-center">
                <Avatar
                  isBordered
                  radius="sm"
                  src="https://pub-310a2360dab34aa8a9c722a4c2cbe6dc.r2.dev/Screenshot%202024-07-09%20001739.png"
                  className="w-20 h-20 text-large"
                />
              </div>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <div className="flex items-center justify-center">
                <h6 className={title({ color: "yellow", size: "xsmall" })}>
                  John
                </h6>
              </div>
              <p>
                John is a crazy autistic bitch but help's me code so i don't
                care.
              </p>
            </CardBody>
          </Card>
          <Card className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex items-center justify-center">
              <div className="flex items-center justify-center">
                <Avatar
                  isBordered
                  radius="sm"
                  src="https://pub-310a2360dab34aa8a9c722a4c2cbe6dc.r2.dev/Screenshot%202024-07-08%20220610.png"
                  className="w-20 h-20 text-large"
                />
              </div>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <div className="flex items-center justify-center">
                <h4 className="font-bold text-large">Macey</h4>
              </div>
              <p>
                Is very high on the spectrum and is a crazy bitch but she's a
                ginger and that make's up for it!
              </p>
            </CardBody>
          </Card>
          <Card className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex items-center justify-center">
              <div className="flex items-center justify-center">
                <Avatar
                  isBordered
                  radius="sm"
                  src="https://pub-310a2360dab34aa8a9c722a4c2cbe6dc.r2.dev/Screenshot 2024-07-09 005149.png"
                  className="w-20 h-20 text-large"
                />
              </div>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <div className="flex items-center justify-center">
                <h4 className="font-bold text-large">Leon</h4>
              </div>
              <p>Annoying cunt but a nice cunt</p>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
