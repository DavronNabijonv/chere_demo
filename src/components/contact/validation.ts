export const validateName = (name: string): string => {
    const regex = /^[a-zA-Z\u0400-\u04FF\s]+$/;
    if (!name.trim()) return "Ism maydoni bo'sh bo'lishi mumkin emas";
    if (!regex.test(name)) return "Faqat harflardan foydalaning";
    return "";
  };
  
  export const validatePhone = (phone: string): string => {
    const regex = /^\d{9}$/; // faqat 9 ta raqam kutiladi
    if (!phone.trim()) return "Telefon raqami bo'sh bo'lishi mumkin emas";
    if (!regex.test(phone)) return "Telefon raqami 9 ta raqam bo'lishi kerak";
    return "";
  };
  