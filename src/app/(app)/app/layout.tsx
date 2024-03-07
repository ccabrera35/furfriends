import Header from "@/components/app-header";
import Footer from "@/components/app-footer";
import BackgroundPattern from "@/components/background-pattern";
import { PetContextProvider } from "@/contexts/pet-context-provider";
import { SearchContextProvider } from "@/contexts/search-context-provider";
import { checkAuth, getPetsByUserId } from "@/lib/server-utils";
import { Toaster } from "@/components/ui/sonner";

type LayoutProps = {
  children: React.ReactNode;
};

export default async function Layout({
  children,
}: LayoutProps) {
  const session = await checkAuth();
  const pets = await getPetsByUserId(session.user.id);

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
