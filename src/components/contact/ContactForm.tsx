import { useState } from "react";
import { validateName, validatePhone } from "./validation";
import { FormInput } from "./FormInput";
import { useTranslations } from "@/hooks/useTranslations";

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
    const nameError = validateName(formData.name);
    const phoneError = validatePhone(formData.phone);

    setErrors({ name: nameError, phone: phoneError });

    if (!nameError && !phoneError) {
      console.log({
        name: formData.name,
        phone: `+998${formData.phone}`,
      });

      alert("Buyurtma yuborildi!");
      setFormData({ name: "", phone: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-start justify-center flex-wrap gap-5 mt-5 w-full">
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
  );
}
