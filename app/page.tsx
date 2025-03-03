// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-neutral-100 p-4">
      <div className="max-w-3xl text-center">
        <div className="space-y-6">
          <div className="mb-4">
            <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50/50 px-2 py-0.5 text-[10px] text-blue-600/80">
              EARLY ACCESS
            </span>
          </div>

          <h1 className="text-3xl font-normal leading-tight md:text-4xl">
            Skint is an{" "}
            <span className="inline-flex items-center">
              <span className="mx-1 inline-flex h-7 w-7 items-center justify-center rounded-lg bg-purple-50 text-2xl leading-none">
                ✨
              </span>
            </span>
            AI powered
            <br />
            personal finance tool built
            <br />
            by Aussies{" "}
            <span className="inline-flex items-center">
              <Image
                src="https://oscarg.ws/img/oscar.jpg"
                alt="Oscar"
                width={30}
                height={30}
                className="mx-1 overflow-hidden rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.1)]"
              />
            </span>{" "}
            that costs less than <br />a flat white{" "}
            <span className="inline-flex translate-y-[1px] items-center">
              <span className="mx-1 inline-flex h-7 w-7 items-center justify-center rounded-lg bg-amber-50 text-2xl leading-none">
                ☕️
              </span>
            </span>
            !
          </h1>
          {/* 
          <div className="mx-auto w-full max-w-md">
            <div className="flex rounded-[20px] ">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 space-2 bg-transparent gap-2 px-4 text-base text-gray-600 placeholder:text-gray-500 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Button className="rounded-md bg-black px-6 text-white hover:bg-black/90">
                Join waitlist
              </Button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
