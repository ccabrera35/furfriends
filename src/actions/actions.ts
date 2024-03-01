"use server";
import prisma from "@/lib/db";

export async function addPet(pet) {
  return await prisma.pet.create({
    data: pet
  });
}
