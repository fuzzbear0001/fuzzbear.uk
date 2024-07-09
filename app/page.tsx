import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Image } from "@nextui-org/image";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { TiktokIcon } from "@/components/icons";
import { Chip } from "@nextui-org/chip";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Hello i'm&nbsp;</h1>
        <h1 className={title({ color: "green" })}>Fuzzbear&nbsp;</h1>
        <br />
        <h1 className={title()}>A FullStack Developer</h1>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.tiktok}
        >
          <TiktokIcon size={20} />
          TikTok
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>

      <section className="inline-block max-w-lg text-center justify-center mt-8">
        <h2 className={title()}>My Expertise</h2>
        <p className="mt-4">
          With over 4 years of experience in full-stack development, I
          specialize in creating dynamic, responsive, and user-friendly web
          applications.
        </p>
        <div className="skills">
          <div className="mt-4">
            <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
              <Card className="max-w-[400px]">
                <CardHeader className="flex gap-3">
                  <Image
                    alt="nextui logo"
                    height={40}
                    radius="sm"
                    src="https://pub-310a2360dab34aa8a9c722a4c2cbe6dc.r2.dev/JavaScript-logo.png"
                    width={40}
                  />
                  <div className="flex flex-col">
                    <p className="text-md">JavaScript</p>
                    <Chip isDisabled color="success">
                      4 years
                    </Chip>
                  </div>
                </CardHeader>
              </Card>
              <Card className="max-w-[400px]">
                <CardHeader className="flex gap-3">
                  <Image
                    alt="nextui logo"
                    height={40}
                    radius="sm"
                    src="https://pub-310a2360dab34aa8a9c722a4c2cbe6dc.r2.dev/nodejs-logo-FBE122E377-seeklogo.com.png"
                    width={40}
                  />
                  <div className="flex flex-col">
                    <p className="text-md">Node.JS</p>
                    <Chip isDisabled color="success">
                      4 years
                    </Chip>
                  </div>
                </CardHeader>
              </Card>
              <Card className="max-w-[400px]">
                <CardHeader className="flex gap-3">
                  <Image
                    alt="nextui logo"
                    height={40}
                    radius="sm"
                    src="https://pub-310a2360dab34aa8a9c722a4c2cbe6dc.r2.dev/kisspng-express-js-node-js-javascript-mongodb-node-js-5b461d28173fc6.1251392115313216400952.jpg"
                    width={40}
                  />
                  <div className="flex flex-col">
                    <p className="text-md">express.js</p>
                    <Chip isDisabled color="success">
                      4 years
                    </Chip>
                  </div>
                </CardHeader>
              </Card>

              <Card className="max-w-[400px]">
                <CardHeader className="flex gap-3">
                  <Image
                    alt="nextui logo"
                    height={40}
                    radius="sm"
                    src="https://pub-310a2360dab34aa8a9c722a4c2cbe6dc.r2.dev/React-icon.svg.png"
                    width={40}
                  />
                  <div className="flex flex-col">
                    <p className="text-md">React</p>
                    <Chip isDisabled color="success">
                      2 years
                    </Chip>
                  </div>
                </CardHeader>
              </Card>
              <Card className="max-w-[400px]">
                <CardHeader className="flex gap-3">
                  <Image
                    alt="nextui logo"
                    height={40}
                    radius="sm"
                    src="https://pub-310a2360dab34aa8a9c722a4c2cbe6dc.r2.dev/next-js.svg"
                    width={40}
                  />
                  <div className="flex flex-col">
                    <p className="text-md">Next.js</p>
                    <Chip isDisabled color="success">
                      2 years
                    </Chip>
                  </div>
                </CardHeader>
              </Card>
              <Card className="max-w-[400px]">
                <CardHeader className="flex gap-3">
                  <Image
                    alt="nextui logo"
                    height={40}
                    radius="sm"
                    src="https://pub-310a2360dab34aa8a9c722a4c2cbe6dc.r2.dev/html-1.svg"
                    width={40}
                  />
                  <div className="flex flex-col">
                    <p className="text-md">HTML 5</p>
                    <Chip isDisabled color="success">
                      2 years
                    </Chip>
                  </div>
                </CardHeader>
              </Card>
              <Card className="max-w-[400px]">
                <CardHeader className="flex gap-3">
                  <Image
                    alt="nextui logo"
                    height={40}
                    radius="sm"
                    src="https://pub-310a2360dab34aa8a9c722a4c2cbe6dc.r2.dev/CSS3_logo.svg.png"
                    width={40}
                  />
                  <div className="flex flex-col">
                    <p className="text-md">CSS 6</p>
                    <Chip isDisabled color="success">
                      2 years
                    </Chip>
                  </div>
                </CardHeader>
              </Card>
              <Card className="max-w-[400px]">
                <CardHeader className="flex gap-3">
                  <Image
                    alt="nextui logo"
                    height={40}
                    radius="sm"
                    src="https://pub-310a2360dab34aa8a9c722a4c2cbe6dc.r2.dev/2945272.webp"
                    width={40}
                  />
                  <div className="flex flex-col">
                    <p className="text-md">TypeScript</p>
                    <Chip isDisabled color="success">
                      1 year
                    </Chip>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
