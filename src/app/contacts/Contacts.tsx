import { back_hero } from "@/assets";
import { IoLocationSharp } from "react-icons/io5";
import { useTranslations } from "@/hooks/useTranslations";
import { useState } from "react";
import { validateName, validatePhone } from "@/components/contact/validation";
import { FormInput } from "@/components/contact/FormInput";

// icons
import { FaPhoneAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";

function Contacts() {
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
    <div
      className="flex items-center justify-center bg-gradient-to-br from-[#f1ece7] via-[#f4f8fd] to-[#bdcbed] bg-cover bg-center bg-no-repeat pt-50 pb-30"
      style={{ backgroundImage: `url(${back_hero})` }}
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center justify-center gap-15">
        <h1 className="bg-gradient-to-b from-[#000000] via-[#1A367C] to-[#1A367C] bg-clip-text text-[20px] font-bold text-transparent sm:text-[30px] lg:text-[50px]">
          Bog‘lanish
        </h1>
        <div className="flex w-full items-start justify-around">
          <div className="flex w-full max-w-[500px] flex-col gap-5 rounded-[24px] bg-white px-5 py-8 shadow-[0px_1px_10px_#0000001F]">
            <h1 className="text-[30px] font-[600] text-black">
              Ma’lumot qoldiring
            </h1>
            <p className="max-w-[400px] text-[20px] font-[300]">
              Ma’lumotlaringizni qoldiring va operatorimiz sizga darhol aloqaga
              chiqadi.
            </p>

            {/* form part */}
            <form
              onSubmit={handleSubmit}
              className="mt-5 flex w-full max-w-[500px] flex-col flex-wrap items-center justify-center gap-5"
            >
              <FormInput
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                placeholder={t.contact_comp.form.userName}
                cssStyle="w-full"
              />
              <div className="flex w-full items-center gap-2">
                <FormInput
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  error={errors.phone}
                  placeholder={t.contact_comp.form.phoneNumber}
                  cssStyle="w-full"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-[#DDAE57] px-6 py-2 text-white"
              >
                {t.buttons.remind}
              </button>
            </form>
          </div>

          {/* contact information , phone , location , work hours */}
          <div className="flex flex-col gap-10">
            <div className="flex items-center gap-3">
              <span className="rounded-[100%] bg-[#DDAE57] p-2.5 text-white">
                <IoLocationSharp size={20} />
              </span>
              <p className="w-full max-w-[300px]">
                Manzil: Toshkent shahar, Uchtepa tumaniBog‘ishamol koz-‘chasi,
                3-uy
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="rounded-[100%] bg-[#DDAE57] p-2.5 text-white">
                <FaPhoneAlt size={20} />
              </span>
              <p className="w-full max-w-[180px]">
                Biz bilan bog‘laning: +99892 200 33 55 +99892 566 22 77
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="rounded-[100%] bg-[#DDAE57] p-2.5 text-white">
                <FaClock size={20} />
              </span>
              <p className="w-full max-w-[120px]">
                Murojaat vaqti: 09:00 - 18:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
