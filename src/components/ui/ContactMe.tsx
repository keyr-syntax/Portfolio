import toast, { Toaster } from "react-hot-toast";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
type Input = string;
export default function ContactMe() {
  const [name, setName] = useState<Input>("");
  const [email, setEmail] = useState<Input>("");
  const [message, setMessage] = useState<Input>("");
  const form = useRef<HTMLFormElement | null>(null);
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
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
        <p className="my-6 mx-auto w-[50%] sm:max-w-[300px] text-[20px] font-semibold  p-1 text-center rounded">
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
          className="flex flex-col w-[80%] md:max-w-[500px] rounded-md mx-auto border border-solid border-borderColor py-10 px-[20px]"
          onSubmit={sendEmail}
        >
          <label className="py-1 mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="h-[40px] px-2 rounded-md text-white  bg-borderColor border border-solid border-borderColor focus:bg-borderColor focus:border focus:border-solid focus:border-white text-sm"
            type="text"
            name="from_name"
            placeholder="Write your name"
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setName(e.target.value);
            }}
            required
          />
          <label className="py-1 mt-3 mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="h-[40px] text-sm px-2 rounded text-white bg-borderColor border border-solid border-borderColor focus:bg-borderColor focus:border focus:border-solid focus:border-white"
            type="text"
            name="user_email"
            placeholder="Write email address"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(e.target.value);
            }}
            required
          />
          <label className="py-1 mt-3 mb-2" htmlFor="email">
            Message
          </label>
          <textarea
            className="text-white text-sm px-2 py-2 rounded bg-borderColor border border-solid border-borderColor focus:bg-borderColor focus:border focus:border-solid focus:border-white"
            name="message"
            placeholder="Write your message here"
            rows={3}
            value={message}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
              setMessage(e.target.value);
            }}
            required
          />
          <button
            className="mt-3 py-1 rounded mx-auto border border-solid border-borderColor w-[50%]"
            type="submit"
          >
            Submit
          </button>
        </form>
        <Toaster />
      </div>
    </>
  );
}
