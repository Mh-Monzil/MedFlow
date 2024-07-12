import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";


const SignUpForm = () => {

    const handleForm = (event)=>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, email, password)
    }
    return (
       <div>

<form onSubmit={handleForm}>
            <Label htmlFor="name">Name</Label>

            <Input className="mt-2 mb-4 rounded-3xl bg-white focus:outline-primaryDark" type="text" name="name" placeholder="Enter your name here"/>

            <Label htmlFor="email">Email</Label>

            <Input className="mt-2 mb-4 rounded-3xl bg-white focus:outline-primaryDark" type="email" name="email" placeholder="Enter your email here"/>

            <Label htmlFor="email">Password</Label>

            <Input className="mt-2 mb-4 rounded-3xl bg-white focus:outline-primaryDark" type="password" name="password" placeholder="Enter your password here"/>

            <Button className="bg-primaryDark w-full" type="submit">Sign Up</Button>
        </form>

        <div className="flex justify-center items-center flex-col my-5 gap-4">
            <p>Or  </p>

            <Button  className="flex gap-4 w-full  items-center rounded-3xl" variant="outline">
            <FcGoogle />
            Sign in with Google
            </Button>
        </div>

        <div className="mt-6 text-center ">
    <a href="#" className="text-sm text-blue-500 hover:underline dark:text-blue-400">
        Already have an account? <Link to="/signin">Sign In</Link> 
    </a>
</div>
       </div>
        
    );
};

export default SignUpForm;

