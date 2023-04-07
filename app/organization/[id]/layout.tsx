import OrganizationHeader from "@/components/headers/OrganizationHeader";

export const metadata = {
  title: "Organizations",
  description: "This is organization page",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <OrganizationHeader />
      <main>{children}</main>
    </>
  );
}
