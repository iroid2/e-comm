"use client";  

import { Button } from "@/components/ui/button";  
import {  
  Card,  
  CardContent,  
  CardDescription,  
  CardHeader,  
  CardTitle,  
} from "@/components/ui/card";  

import { useRouter } from "next/navigation";  
import { useState } from "react";  
import { useForm } from "react-hook-form";  
import FormHeader from "../FormHeader";  
import TextInput from "@/components/front/formInputs/TextInput";  
import TextArea from "@/components/front/formInputs/TextAreaInput";  
import MultipleImageInput from "@/components/front/formInputs/MultipleImageInput";  
import FormFooter from "../FormFooter";  
import PasswordInput from "@/components/front/formInputs/PasswordInput";
import FormSelectInput from "@/components/front/formInputs/FormSelectInput";
import { TabsContent } from "@/components/ui/tabs";
import { countriesList } from "@/countries";

// Define the option type  
export type SelectOptionProps = {  
  label: string;  
  value: string;  
};  

// Define the form props type  
type singleStudentFormProps = {  
  editingId?: string | undefined;  
  initialData?: any | undefined | null;  
};  

// Define the student properties, including an array for image URLs  
export type studentProps = {  
  name: string;  
  email: string;  
  password: string;  
  imageUrls: string[]; // Change to an array for multiple images  
};  

export default function ParentForms({  
  editingId,  
  initialData,  
}: singleStudentFormProps) {  
  const [selectedParent, setSelectedParent] =
  useState<any>(null);
  const parents=[
    {
      label:"iroid",
      value:"12345"
    },
    {
      label:"amaka",
      value:"12345"
    },
    {
      label:"Piera",
      value:"1292"
    },
  ]
  const [selectClass, setselectClass] =
  useState<any>(null);
  const classes=[
    {
      label:"s2",
      value:"12345"
    },
    {
      label:"s1",
      value:"12345"
    },
    {
      label:"p5",
      value:"1292"
    },
  ]

  const initialCountryCode="UG"
  const initialCountry=countriesList.find((item)=>item.phoneCode===initialCountryCode)
  const [selectNationality, setSelectNationality] =
  useState<any>(null);
  const [selectStream, setselectStream] =
  useState<any>(initialCountry);
  const Streams=[
    {
      label:"s2A",
      value:"12345"
    },
    {
      label:"s2A",
      value:"12345"
    },
    {
      label:"s2B",
      value:"1292"
    },
  ]
  const [selectGenders, setSelectGenders] =
  useState<any>(null);
  const gender=[
    {
      label:"MALE",
      value:"MALE"
    },
    {
      label:"FEMALE",
      value:"FEMALE"
    }     
  ]
  const [selectReligion, setselectReligion] =
  useState<any>(null);
  const religions=[
    {
      label:"Anglican",
      value:"Anglican"
    },
    {
      label:"Catholic",
      value:"Catholic"
    } ,
    {
      label:"MOSLEM",
      value:"MOSLEM"
    }     
  ]
  const [selectTitle, setselectTitle] =
  useState<any>(null);
  const title=[
    {
      label:"Mr.",
      value:"Mr."
    },
    {
      label:"Mrs",
      value:"Mrs."
    }  
  ]
  // Use the appropriate type for your use case  

  const relationships = [  
    {  
      label: "Mother",  
      value: "Mother"  
    },  
    {  
      label: "Father",  
      value: "Father"  
    },  
    {  
      label: "Guardian",  
      value: "Guardian"  
    },  
    {  
      label: "Other",  
      value: "Other"  
    }  
  ];  
  const [selectRelationship, setSelectRelationship] = useState<any>(relationships[1]);
  const {  
    register,  
    handleSubmit,  
    reset,  
    formState: { errors },  
  } = useForm<studentProps>({  
    
    defaultValues: {  
      name: "",  
      email: "",  
      password: "",  
    },  
  });  



  const router = useRouter();  
  const [loading, setLoading] = useState(false);  
  
  // Initialize with an array for multiple images  
  const initialImages = initialData?.imageUrls || ["/images/reading.png"];  
  const [imageUrls, setImageUrls] = useState<string[]>(initialImages);   

  async function saveStudent(data: studentProps) {  
    try {  
      setLoading(true);  
      data.imageUrls = imageUrls; // Assign the image URLs to the data  

      if (editingId) {  
        // Your update logic here  
        // Example: await updateStudentById(editingId, data);  
        console.log("Updated Successfully!", data);  
      } else {  
        // Your create logic here  
        // Example: await createStudent(data);  
        console.log("Successfully Created!", data);  
      }  
      
      // Reset after submission  
      reset();  
      setImageUrls(["/placeholder.svg"]); // Reset images after submission  
      router.push("/dashboard/categories"); // Redirect after save  
    } catch (error) {  
      console.log(error);  
      setLoading(false);  
    } finally {  
      setLoading(false);  
    }  
  }  

  async function handleDeleteAll() {  
    setLoading(true);  
    try {  
      // Your delete logic here  
      console.log("Deleted all items!");  
    } catch (error) {  
      console.log(error);  
    } finally {  
      setLoading(false);  
    }  
  }  

  return (  
    <TabsContent
    value="single"
    className="mt-4 rounded-lg border border-gray-200 p-4"
  >
    <form className="" onSubmit={handleSubmit(saveStudent)}>  
      <FormHeader   
        href="/parents"  
        parent="users"  
        title="Student"  
        editingId={editingId}  
        loading={loading}  
      />  

      <div className="grid grid-cols-12 gap-6 py-8">  
        <div className="lg:col-span-12 col-span-full space-y-3">  
          {/* <Card>   */}
            <CardHeader>  
              <CardTitle>Student Details</CardTitle>  
              <CardDescription>  
                Lipsum dolor sit amet, consectetur adipiscing elit  
              </CardDescription>  
            </CardHeader>  
            <CardContent>  
              <div className="grid gap-6">  
                <div className="grid md:grid-cols-3 gap-3">  
                <FormSelectInput  
                    label={'Title'}
                    options={title}
                    option={selectTitle}
                    setOption={setselectTitle}
                    
                    // type="date"  
                  />  
                       <FormSelectInput  
                    label={'Relationship'}
                    options={relationships}
                    option={selectRelationship}
                    setOption={setSelectRelationship}
                    toolTipText={'Add new Class'}
                    href={'/dashboard/academics/new'}
                    // type="date"  
                  />  
                    <TextInput  
                    register={register}  
                    errors={errors}  
                    label="National Id /Passport "  
                    name="NIN"  
                    type="text"
                  />  
                </div>  
                <div className="grid md:grid-cols-3 g gap-3">  
                 
                    <FormSelectInput  
                    label={'Gender'}
                    options={gender}
                    option={selectGenders}
                    setOption={setSelectGenders}
                    isSearchable={false}
                    // type="date"  
                  />  
                   <FormSelectInput  
                    label={'Parent'}
                    options={parents}
                    option={selectedParent}
                    setOption={setSelectedParent}
                    toolTipText={'Add new Parent'}
                    href={'/dashboard/parents/new'}
                    // type="date"  
                  />  
                </div>  
                <div className="grid md:grid-cols-3 gap-3"> 
                   
                <TextInput  
                    register={register}  
                    errors={errors}  
                    label="Phone"  
                    name="phone"
                    type="tel"  
                  /> 
                  <FormSelectInput  
                    label={'Nationality'}
                    options={countriesList}
                    option={selectNationality}
                    setOption={setSelectNationality}
                    toolTipText={'Add new Class'}
                    href={'/dashboard/academics/new'}
                    // type="date"  
                  /> 
                <PasswordInput  
                    register={register}  
                    errors={errors}  
                    label="Password"  
                    name="password"  
                    type="password"
                    toolTipText="Paswword will be used by students to access the portal"
                  /> 
              
                    {/* <PasswordInput  
                    register={register}  
                    errors={errors}  
                    label="Password"  
                    name="password"  
                    type="password"
                  />   */}
                </div> 
                <div className="grid grid-cols-3 gap-4">
                <FormSelectInput  
                    label={'Classes'}
                    options={classes}
                    option={selectClass}
                    setOption={setselectClass}
                    toolTipText={'Add new Class'}
                    href={'/dashboard/academics/new'}
                    // type="date"  
                  /> 
                  
                  <TextInput  
                    register={register}  
                    errors={errors}  
                    label="Village/State"  
                    name="state"
                
                  /> 
                  <TextInput  
                    register={register}  
                    errors={errors}  
                    label="Birth Certificate Number "  
                    name="BCN"
                
                  /> 
                </div>
                <div className="">
                <div className="grid grid-cols-2 gap-3">
                <FormSelectInput  
                    label={'Religion'}
                    options={religions}
                    option={selectReligion}
                    setOption={setselectReligion}
                    toolTipText={'Select Your Religion'}
                    
                    // type="date"  
                  />
                  <FormSelectInput  
                    label={'Streams'}
                    options={Streams}
                    option={selectStream}
                    setOption={setselectStream}
                    toolTipText={'Select Your  stream'}

                  />
                </div>
                </div>
                <div className="grid gap-4 grid-cols-2">
                  <div className="">
                  <div className="grid grid-cols-2 gap-4">
                  <TextInput  
                    register={register}  
                    errors={errors}  
                    label="Registration Number"  
                    name="regNo"
                  /> 
                   <TextInput  
                    register={register}  
                    errors={errors}  
                    label="Admission DATE"  
                    name="admissionDate"
                
                  /> 
                </div>
                <div className="grid gap-3">  
                  <TextArea  
                    register={register}  
                    errors={errors}  
                    label="Description"  
                    name="description"  
                  />  
                </div> 
                  </div>
                  <MultipleImageInput  
              title="student ProfiLE Image" // Updated to plural for clarity  
              imageUrls={imageUrls} // Use imageUrls  
              setImageUrls={setImageUrls} // Pass setter for images  
              endpoint="studentProfileImage"  
              className="object-contain"
            />  
                  </div> 
              </div>  
            </CardContent>  
          {/* </Card>   */}
        </div>  
        
      </div>  
     
      <FormFooter  
        href="/categories"  
        editingId={editingId}  
        loading={loading}  
        title="Category"  
        parent=""  
      />  
    </form> 
  </TabsContent>
     
  );  
}