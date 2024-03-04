import Header from "@/components/app-header";
import BackgroundPattern from "@/components/background-pattern";
import Footer from "@/components/app-footer";
import { PetContextProvider } from "@/contexts/pet-context-provider";
import { SearchContextProvider } from "@/contexts/search-context-provider";
import prisma from "@/lib/db";
import { Toaster } from "@/components/ui/sonner";


type LayoutProps = {
  children: React.ReactNode;
};

export default async function Layout({ children }: LayoutProps) {
  const pets = await prisma.pet.findMany()

  return (
    <>
      <BackgroundPattern />
      <div className="flex flex-col max-w-[1050px] mx-auto px-4 min-h-screen">
        <Header />

        <SearchContextProvider>
          <PetContextProvider data={pets}>{children}</PetContextProvider>
        </SearchContextProvider>

        <Footer />
      </div>
      <Toaster position="top-right" />
    </>
  );
}
