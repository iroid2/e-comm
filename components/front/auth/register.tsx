"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, LogIn, Mail, Phone, User, Apple, Carrot } from "lucide-react";
import { createUser } from "@/actions/users";
import toast from "react-hot-toast";

  
 
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import TextInput from "../formInputs/TextInput";
import PasswordInput from "../formInputs/PasswordInput";
import SubmitButton from "../formInputs/SubmitButton";
import CustomCarousel from "../Custom-coursel";

export type RegisterInputProps = {
  name: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  image: string;
};

export default function Register() {
  const [loading, setLoading] = useState(false);
  const [emailErr, setEmailErr] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterInputProps>();
  const router = useRouter();

  async function onSubmit(data: RegisterInputProps) {
    console.log(data);
    setLoading(true);
    data.name = `${data.firstName} ${data.lastName}`;
    data.image =
      "https://utfs.io/f/59b606d1-9148-4f50-ae1c-e9d02322e834-2558r.png";
    try {
      const res = await createUser(data);
      if (res.status === 409) {
        setLoading(false);
        setEmailErr(res.error);
      } else if (res.status === 200) {
        setLoading(false);
        toast.success("Account Created successfully");
        router.push("/login");
      } else {
        setLoading(false);
        toast.error("Something went wrong");
      }
    } catch (error) {
      setLoading(false);
      console.error("Network Error:", error);
      toast.error("It seems something is wrong, try again");
    }
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <div className="flex-1 flex items-center justify-center p-8">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <div className="flex items-center justify-center mb-4">
              <Apple className="h-8 w-8 text-green-600" />
              <Carrot className="h-8 w-8 text-orange-500 -ml-2" />
              <span className="ml-2 text-2xl font-bold text-gray-900">FreshMart</span>
            </div>
            <CardTitle className="text-2xl font-bold text-center">Create an Account</CardTitle>
            <CardDescription className="text-center">
              Join FreshMart for fresh groceries delivered to your doorstep!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <TextInput
                  label="First Name"
                  register={register}
                  name="firstName"
                  errors={errors}
                  placeholder="John"
                  icon={User}
                />
                <TextInput
                  label="Last Name"
                  register={register}
                  name="lastName"
                  errors={errors}
                  placeholder="Doe"
                  icon={User}
                />
              </div>
              <TextInput
                label="Email Address"
                register={register}
                name="email"
                type="email"
                errors={errors}
                placeholder="johndoe@example.com"
                icon={Mail}
              />
              {emailErr && (
                <p className="text-red-500 text-xs mt-1">{emailErr}</p>
              )}
              <TextInput
                label="Phone"
                register={register}
                name="phone"
                errors={errors}
                placeholder="+1234567890"
                icon={Phone}
              />
              <PasswordInput
                icon={Lock}
                label="Password"
                register={register}
                name="password"
                type="password"
                errors={errors}
                placeholder="******"
                forgotPasswordLink="/forgot-password"
              />
              <SubmitButton
                buttonIcon={LogIn}
                title="Create account"
                loading={loading}
                loadingTitle="Creating please wait..."
              />
            </form>
          </CardContent>
          <Separator className="my-4" />
          <CardFooter className="flex justify-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link href="/login" className="text-green-600 hover:underline font-medium">
                Sign in
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
      <div className="hidden lg:block lg:w-1/2 relative">
        <CustomCarousel />
      </div>
    </div>
  );
}

