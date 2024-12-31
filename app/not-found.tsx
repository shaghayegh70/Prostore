"use client";
import { APP_NAME } from "@/lib/constant";
import Image from "next/image";
import { Button } from "@/components/ui/button";
const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-content min-h-screen">
      <Image
        src="/images/logo.svg"
        alt={`${APP_NAME} logo`}
        width={48}
        height={48}
        priority={true}
      />
      <div className="p-6 w-1/3 rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold mb-4">Not found</h1>
        <p className="text-destructive">Could not found requested page</p>
        <Button
          variant={"outline"}
          onClick={() => (window.location.href = "/")}
          className="mt-4 ml-2"
        >
          Go back to home
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
