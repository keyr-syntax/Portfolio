import { Copyright } from "lucide-react";

export default function Footer() {
  const footerDate = new Date();
  const footerYear = footerDate.getFullYear().toString();
  return (
    <>
      <p className="flex flex-row gap-2 mt-8 mx-auto w-[80%] justify-center items-center sm:max-w-[300px] text-[18px] text-center rounded">
        <Copyright size={20} /> {footerYear} Keyru Nasir
      </p>
      <p className="my-2 mb-8 mx-auto w-[50%] sm:max-w-[300px] text-[18px]  gap-1 text-center rounded">
        All Rights Reserved
      </p>
    </>
  );
}
