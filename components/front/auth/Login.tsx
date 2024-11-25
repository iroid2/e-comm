"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Apple, Carrot, LogIn, Mail, Lock } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import TextInput from "../formInputs/TextInput"
 

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long.",
  }),
})

type FormData = z.infer<typeof formSchema>

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  async function onSubmit(data: FormData) {
    setIsLoading(true)
    // Here you would typically send the login request to your backend
    console.log(data)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsLoading(false)
    // Redirect to dashboard or home page after successful login
    router.push('/dashboard')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center mb-4">
            <Apple className="h-8 w-8 text-green-600" />
            <Carrot className="h-8 w-8 text-orange-500 -ml-2" />
            <span className="ml-2 text-2xl font-bold text-gray-900">FreshMart</span>
          </div>
          <CardTitle className="text-2xl font-bold text-center">Welcome back</CardTitle>
          <CardDescription className="text-center">
            Enter your email to sign in to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <TextInput
              label="Email Address"
              register={register}
              name="email"
              type="email"
              errors={errors}
              icon={Mail}
              placeholder="Eg. johndoe@gmail.com"
            />
            <TextInput
              label="Password"
              register={register}
              name="password"
              type="password"
              errors={errors}
              icon={Lock}
              placeholder="Enter your password"
            />
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>Logging in...</>
              ) : (
                <>
                  <LogIn className="mr-2 h-4 w-4" /> Sign In
                </>
              )}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-sm text-center">
            <Link href="/forgot-password" className="text-green-600 hover:underline">
              Forgot your password?
            </Link>
          </div>
          <div className="text-sm text-center">
            Don't have an account?{" "}
            <Link href="/register" className="text-green-600 hover:underline">
              Sign up
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

