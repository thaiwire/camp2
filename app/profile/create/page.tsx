
import FormInput from "@/components/form/FormInput";
import { Button } from "@/components/ui/button";


const createProfileAction = async (formData: FormData) => {
  "use server";
  const firstName = formData.get("firstName") as string;
  // validate
  // insert db
  // return
  console.log("hello", firstName);
};

const CreateProfile = () => {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">new user</h1>
      <div className="border p-8 rounded-md max-w-lg">
        <form action={createProfileAction}>
          <FormInput 
            name="firstName"
            label="First Name2"
            type="text" 
            placeholder="Enter your first name"
            defaultValue="John"     

          />
          <Button type="submit" size="lg">
            Create Profile
          </Button>
        </form>
      </div>
    </section>
  );
};
export default CreateProfile;
