'use client'

import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phoneNumber: z.string().min(10, { message: "Phone number must be at least 10 digits." }),
  schoolName: z.string().min(2, { message: "School name must be at least 2 characters." }),
  country: z.string().min(2, { message: "Country must be at least 2 characters." }),
  numberOfStudents: z.string().min(1, { message: "Number of students is required." }),
  schoolWebsite: z.string().url({ message: "Invalid URL." }).optional().or(z.literal('')),
  role: z.string().min(2, { message: "Role must be at least 2 characters." }),
  productInterest: z.string().min(10, { message: "Product interest must be at least 10 characters." }),
  howDidYouHear: z.string().min(1, { message: "Please select how you heard about us." }),
})

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      schoolName: "",
      country: "",
      numberOfStudents: "",
      schoolWebsite: "",
      role: "",
      productInterest: "",
      howDidYouHear: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log("Submitted phone number:", values.phoneNumber)
    console.log(values)
    setIsSubmitting(false)
    alert('Form submitted successfully!')
    form.reset()
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-6 text-primary">Contact Us</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="john@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Controller
                    name="phoneNumber"
                    control={form.control}
                    render={({ field }) => (
                      <PhoneInput
                        country={'us'}
                        value={field.value}
                        onChange={phone => field.onChange(phone)}
                        inputStyle={{
                          width: '100%',
                          height: '40px',
                          fontSize: '16px',
                          paddingLeft: '48px',
                        }}
                      />
                    )}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          </div>
         
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="schoolName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>School Name</FormLabel>
                  <FormControl>
                    <Input placeholder="ABC School" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country</FormLabel>
                  <FormControl>
                    <Input placeholder="United States" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="numberOfStudents"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Number of Students</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="500" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="schoolWebsite"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>School Website/Social Page</FormLabel>
                  <FormControl>
                    <Input placeholder="https://www.school.edu" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Role</FormLabel>
                <FormControl>
                  <Input placeholder="Principal" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="productInterest"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product Interest (Your pain points, which features are you looking for?)</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Tell us about your needs and interests..."
                    className="min-h-[100px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="howDidYouHear"
            render={({ field }) => (
              <FormItem>
                <FormLabel>How did you hear about us?</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="search">Search Engine</SelectItem>
                    <SelectItem value="social">Social Media</SelectItem>
                    <SelectItem value="referral">Referral</SelectItem>
                    <SelectItem value="advertisement">Advertisement</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </Button>
        </form>
      </Form>
    </div>
  )
}