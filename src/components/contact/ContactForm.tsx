import { useState } from "react";
import { validateName, validatePhone } from "./validation";
import { FormInput } from "./FormInput";
import { useTranslations } from "@/hooks/useTranslations";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [errors, setErrors] = useState({ name: "", phone: "" });
  const t = useTranslations();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "name")
      setErrors((prev) => ({ ...prev, name: validateName(value) }));
    else if (name === "phone")
      setErrors((prev) => ({ ...prev, phone: validatePhone(value) }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const token = "7940057045:AAHRFPvgUCo_7pqpXD6uq4li7-_DYx2J96g"; // Use environment variable
    const chatId = 6134458285;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const nameError = validateName(formData.name);
    const phoneError = validatePhone(formData.phone);

    setErrors({ name: nameError, phone: phoneError });

    if (!nameError && !phoneError) {
      console.log({
        name: formData.name,
        phone: `+998${formData.phone}`,
      });
      const info_user = `Ism: ${formData.name}, Phone number: ${formData.phone}`;

      try {
        axios
          .post(url, {
            chat_id: chatId,
            text: info_user,
          })
          .then(() => {
            toast.success("Successfull!", {
              position: "top-right",
            });
          });
      } catch (error) {
        toast.error("Error.", {
          position: "top-right",
        });
        console.error("Yuborishda xatolik:", error);
      } finally {
        setFormData({ name: "", phone: "" });
      }
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="mt-5 flex w-full flex-wrap items-start justify-center gap-5"
      >
        <FormInput
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          placeholder={t.contact_comp.form.userName}
        />
        <div className="flex items-center gap-2">
          <FormInput
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
            placeholder={t.contact_comp.form.phoneNumber}
          />
        </div>
        <button
          type="submit"
          className="rounded-md bg-[#DDAE57] px-6 py-2 text-white"
        >
          {t.buttons.remind}
        </button>
      </form>
      <ToastContainer />
    </>
  );
}
