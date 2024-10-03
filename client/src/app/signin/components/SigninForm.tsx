"use client";
import axios from "axios";
import {baseUrl} from "../../../constants/index"
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import { useState } from "react";
import { Label } from "../../../components/ui/label";
import { Input } from "../../../components/ui/input";
import { cn } from "@/utils/cn";

interface SignupForm {
  email: string;
  password: string;
}

const SigninForm = () => {
  const [formData, setFormData] = useState<SignupForm>({
    email: "",
    password: "",
  });

  const router = useRouter(); // Use the router hook

  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post(baseUrl + "/user/signin", formData);
      const token = response.data.token;

      localStorage.setItem("authToken", token);
      console.log("Login successful", response.data);
      router.push('/')

    } catch (err: any) {
      setError(err.response?.data?.message || "Login failed");
    } 
  };

  return (
    <div>
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black mt-60">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Sign in
        </h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form className="my-8" onSubmit={handleSubmit}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              placeholder="projectmayhem@fc.com"
              type="email"
              name="email"
              value={formData.email}
              required
              onChange={handleChange}
            />
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              placeholder="••••••••"
              type="password"
              name="password"
              value={formData.password}
              required
              onChange={handleChange}
            />
          </LabelInputContainer>

          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Sign in &rarr;
            <BottomGradient />
          </button>
        </form>
      </div>
    </div>
  );
};

export default SigninForm;

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
