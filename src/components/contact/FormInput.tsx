interface FormInputProps {
    id: string;
    name: string;
    type?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    placeholder?: string;
  }
  
  export const FormInput = ({
    id,
    name,
    type = "text",
    value,
    onChange,
    error,
    placeholder,
  }: FormInputProps) => (
    <div>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className={`w-full rounded-[16px] bg-[#fff] border px-4 py-2 ${
          error ? "border-red-500" : "border-gray-300"
        }`}
        placeholder={placeholder}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
  