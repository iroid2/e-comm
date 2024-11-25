// "use client";
// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
 
// import { Send } from "lucide-react";
 
// import toast from "react-hot-toast";
// // import { createContact } from "@/actions/admin";
// import { countriesList } from "@/countries";
// import TextInput from "./front/formInputs/TextInput";
// import PhoneInput from "./front/formInputs/PhoneInput";
// import FormSelectInput from "./front/formInputs/FormSelectInput";
// import TextArea from "./front/formInputs/TextAreaInput";
// import SubmitButton from "./front/formInputs/SubmitButton";
// const removeLeadingZero = (phoneNumber: string) => {
//   // Convert to string in case number is passed
//   const numberStr = phoneNumber.toString();
//   // Check if the number starts with 0
//   if (numberStr.startsWith("0")) {
//     // Return the string without the first character (0)
//     return numberStr.substring(1);
//   }

//   // If no leading zero, return original number
//   return numberStr;
// };
// export type ContactProps = {
//   fullName: string;
//   email: string;
//   phone: string;
//   school: string;
//   country: string;
//   schoolPage: string;
//   students: number;
//   role: string;
//   media: string;
//   message: string;
  
// };
// const ContactUs: React.FC = () => {
//   const [loading, setLoading] = useState(false);
//   const [phoneCode, setPhoneCode] = useState("");
//   const initialCountryCode = "UG";
//   const initialCountry = countriesList.find(
//     (item:any) => item.countryCode === initialCountryCode
//   );
//   const [selectedCountry, setSelectedCountry] = useState<any>(initialCountry);
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm<ContactProps>();
//   const roles = [
//     {
//       label: "Principal/Leadership/Mgt",
//       value: "Principal",
//     },
//     {
//       label: "School Administrator",
//       value: "Administrator",
//     },
//     {
//       label: "Head Teacher",
//       value: "Headteacher",
//     },
//     {
//       label: "Teacher/Parent/Student",
//       value: "teacher/parent/student",
//     },
//     {
//       label: "Consultant/Reseller",
//       value: "consultant/reseller",
//     },
//     {
//       label: "Other",
//       value: "other",
//     },
//   ];
//   const media = [
//     {
//       label: "Blog",
//       value: "blog",
//     },
//     {
//       label: "Google",
//       value: "google",
//     },
//     {
//       label: "Friend",
//       value: "Friend",
//     },
//     {
//       label: "Other",
//       value: "other",
//     },
//   ];
//   const [selectedRole, setSelectedRole] = useState<any>(roles[0]);
//   const [selectedMedia, setMedia] = useState<any>(media[0]);
//   async function onSubmit(data: ContactProps) {
 
//     const [loading, setLoading] = useState(false);
//     const [phoneCode, setPhoneCode] = useState("");
//     data.phone = removeLeadingZero(data.phone);
//     const phoneNumber = `${phoneCode}${data.phone}`;
//     data.phone = phoneNumber;
//     data.country = selectedCountry.label;
//     data.role = selectedRole.value;
//     data.media = selectedMedia.value;
//     data.students = Number(data.students);
//     console.log(data);
//     try {
//       setLoading(true);
//       console.log(data);
//       const res = await createContact(data);
//       console.log(res);
//       setLoading(false);
//       // toast.success("Your Request has been Successfully Submitted!");
//       reset();
//       // router.push("/dashboard/categories");
//     } catch (error) {
//       setLoading(false);
//       console.log(error);
//     }
//   }

//   return (
//     <section className="bg-gray-100 py-16 px-4">
//       <div className="max-w-6xl mx-auto">
//         <div className="flex items-center justify-center">
//           <div className="col-span-2 bg-white p-6 rounded-2xl shadow">
//             <h3 className="text-2xl text-center font-semibold ">
//               Tell us about your institution and requirements
//             </h3>
//             <p className="text-muted-foreground text-sm text-center px-4 py-2 mb-4 max-w-xl mx-auto">
//               Our team will reach out within 24 hours to schedule a personalized
//               demo and discuss your specific needs.
//             </p>
//             <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
//               <TextInput
//                 label="Your Full Name"
//                 register={register}
//                 name="fullName"
//                 errors={errors}
//                 placeholder="John Doe"
//               />
//               <div className="grid md:grid-cols-2 gap-4">
//                 <TextInput
//                   label="Email Address"
//                   register={register}
//                   name="email"
//                   type="email"
//                   errors={errors}
//                   placeholder="Eg. johndoe@gmail.com"
//                 />
//                 {/* <PhoneInput
//                   register={register}
//                   errors={errors}
//                   label="Phone (eg 0762063160 )"
//                   name="phone"
//                   toolTipText="Select Code and write ur number"
//                   placeholder="Phone number"
//                   setPhoneCode={setPhoneCode}
//                 /> */}
//               </div>
//               <div className="grid md:grid-cols-2 gap-4">
//                 <TextInput
//                   label="School Name"
//                   register={register}
//                   name="school"
//                   errors={errors}
//                   placeholder="Evernote High school"
//                 />
//                 {/* <FormSelectInput
//                   label="Country"
//                   options={countries}
//                   option={selectedCountry}
//                   setOption={setSelectedCountry}
//                 /> */}
//               </div>
//               <div className="grid md:grid-cols-2 gap-4">
//                 <TextInput
//                   label="School Website/Social Media Page(fb,linkedin)"
//                   register={register}
//                   name="schoolPage"
//                   errors={errors}
//                   placeholder="https:www.evernotehisghschool.com"
//                 />
//                 <TextInput
//                   label="Number of Students"
//                   register={register}
//                   name="students"
//                   errors={errors}
//                   placeholder="300"
//                 />
//               </div>
//               <div className="grid md:grid-cols-2 gap-4">
//                 <FormSelectInput
//                   label="Role"
//                   options={roles}
//                   option={selectedRole}
//                   setOption={setSelectedRole}
//                 />
//                 <FormSelectInput
//                   label="Which Media did hear about Us"
//                   options={media}
//                   option={selectedMedia}
//                   setOption={setMedia}
//                 />
//               </div>
//               <TextArea
//                 label="Please share with us the key pain points you want to solve"
//                 register={register}
//                 name="message"
//                 errors={errors}
//               />

//               <SubmitButton
//                 buttonIcon={Send}
//                 title="Submit"
//                 loading={loading}
//                 loadingTitle="Sending in please wait..."
//               />
//             </form>
//           </div>
//         </div>
//         <div className="py-8 grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className="bg-green-800 text-white p-6 rounded-2xl">
//             <h3 className="font-semibold text-xl mb-2">
//               Speak to someone in sales
//             </h3>
//             <p className="text-sm mb-4 py-4">
//               To create a more value-added solution, is essential to an analysis
//               of the possibilities of improvement.
//             </p>
//             <button className="bg-white text-green-800 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition duration-300">
//               Book Appointment
//             </button>
//           </div>
//           <div className="bg-lime-400 p-6 rounded-2xl">
//             <h3 className="font-semibold mb-2 text-xl">Contact to our team</h3>
//             <p className="text-sm mb-4 py-4">
//               To create a more value-added solution, is essential to an analysis
//               of the possibilities of improvement.
//             </p>
//             <button className="bg-green-800 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-700 transition duration-300">
//               Send a Mail
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactUs;
