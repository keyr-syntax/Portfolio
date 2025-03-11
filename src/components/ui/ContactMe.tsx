import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Textarea } from "./textarea";
import { Button } from "./button";
type Input = string;
export default function ContactMe() {
  const [name, setName] = useState<Input>("");
  const [email, setEmail] = useState<Input>("");
  const [message, setMessage] = useState<Input>("");
  const [loading, setLoading] = useState<boolean>(false);
  const form = useRef<HTMLFormElement | null>(null);
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      toast.error("Missing configuration for email service");
      return;
    }
    if (!form.current) {
      return;
    }

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      () => {
        setLoading(false);
        setName("");
        setEmail("");
        setMessage("");
        toast.success("Message sent");
      },
      (error) => {
        toast.error("Failed to send Message");
        console.log("Failed to send Message", error);
      }
    );
  };
  return (
    <>
      <div id="contactme" className="flex flex-col mb-[10px]">
        <p className="my-6 mx-auto w-[50%] sm:max-w-[300px] text-[24px] font-semibold  p-1 text-center rounded">
          Contact me
        </p>
        <p className="flex my-1 mx-auto w-[80%] sm:max-w-[300px] text-[20px] p-1 text-start rounded">
          <Phone size={30} className="mr-3" /> <span>0716967559</span>
        </p>
        <p className="flex mt-1 mb-3 mx-auto w-[80%] sm:max-w-[300px] text-[20px] p-1 text-start rounded flex-wrap">
          <Mail size={30} className="mr-3 " />{" "}
          <span className="text-wrap break-words">keyrsyntax@gmail.com</span>
        </p>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-2 mx-auto mt-5 w-[80%] max-w-[500px] border border-solid border-[rgb(255,255,255,0.2)] p-8 rounded-lg"
        >
          <p className="text-center text-[24px]">Let us talk</p>
          <div className="grid gap-2 ">
            <Label className="text-md" htmlFor="name">
              Name
            </Label>
            <Input
              className="block border border-solid border-[rgb(255,255,255,0.2)]"
              id="name"
              name="from_name"
              type="text"
              placeholder="Your name"
              required
              value={name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="grid gap-2 ">
            <Label className="text-md" htmlFor="email">
              Email
            </Label>
            <Input
              className="block border border-solid border-[rgb(255,255,255,0.2)]"
              id="email"
              name="user_email"
              type="email"
              placeholder="Your email"
              required
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="grid gap-2 ">
            <Label className="text-md" htmlFor="message">
              Message
            </Label>
            <Textarea
              className="block border border-solid border-[rgb(255,255,255,0.2)]"
              id="email"
              name="message"
              placeholder="Your message"
              required
              value={message}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                setMessage(e.target.value);
              }}
            />
          </div>
          <Button
            className="text-lg w-[150px]"
            disabled={loading}
            type="submit"
          >
            {loading ? "Sending message" : "Send"}
          </Button>
        </form>
        <Toaster />
      </div>
    </>
  );
}
