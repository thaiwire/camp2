import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type FormInputProps = {
    name: string;
    type: string;
    label?: string;
    defaultValue?: string;
    placeholder?: string;
}

const FormInput = (props:FormInputProps) => {
  const { name, type, label,defaultValue,placeholder } = props;

  console.log("FormInput props", props.name);

  return (
    <div className="mb-2">
      <Label htmlFor={name} className="block mb-4">
        {label}
      </Label>
      <Input name={name} type={type}
      placeholder={placeholder}
      defaultValue={defaultValue}
       />
    </div>
  );
};

export default FormInput;
