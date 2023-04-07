import Info from "@/components/organizations/Info";
import Payments from "@/components/organizations/Payments";
import Players from "@/components/organizations/Players";
import Teams from "@/components/organizations/Teams";

type Props = {
  params: {
    id: string;
  };
};

function OrganizationPage({ params: { id } }: Props) {
  switch (id) {
    case "players":
      return <Players />;
    case "payments":
      return <Payments />;
    case "teams":
      return <Teams />;
    case "info":
      return <Info />;
    default:
      return (
        <div className="flex flex-col h-screen overflow-hidden">
          Page not found
        </div>
      );
  }
}

export default OrganizationPage;
