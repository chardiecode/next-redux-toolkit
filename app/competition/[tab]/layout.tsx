import CompetitionHeader from "@/components/headers/CompetitionHeader";

export const metadata = {
  title: "Competitions",
  description: "This is competitions from sb",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CompetitionHeader />
      <main>{children}</main>
    </>
  );
}
