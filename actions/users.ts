"use server";

// import axios from "axios";
import { db } from "@/prisma/db";
import { UserProps } from "@/types/types";
import bcrypt from "bcrypt";
import { isEmailBlacklisted } from "@/lib/isEmailBlackListed";
import { User } from "@prisma/client";
export async function createUser(data: UserProps) {
  const { email,
     password, firstName, lastName,   phone } = data;


  console.log(data)
  try {
    if (isEmailBlacklisted(email)) {
      return {
        error: `Please use a valid, non-temporary email address.`,
        status: 409,
        data: null,
      };
    }

    const existingUser = await db.user.findUnique({
      where: {
        email,
      },
    });
    if (existingUser) {
      return {
        error: `Email already exists`,
        status: 409,
        data: null,
      };
    }
    // Hash the PAASWORD
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await db.user.create({
      data: {
        email,
        password: hashedPassword,
        firstName,
        lastName,
        phone,
         
      },
    });
    // revalidatePath("/dashboard/users");
    console.log(newUser);
    return {
      error: null,
      status: 200,
      data: newUser,
    };
  } catch (error) {
    console.log(error);
    return {
      error: `Something Went wrong, Please try again`,
      status: 500,
      data: null,
    };
  }
}

export async function getAllUsers() {
  try {
    const users = await db.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return users;
  } catch (error) {
    console.error("Error fetching the count:", error);
    return 0;
  }
}
