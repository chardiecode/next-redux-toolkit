import Matches from "@/components/competitions/Matches";
import Players from "@/components/competitions/Players";
import Info from "@/components/competitions/Info";

type Props = {
  params: {
    tab: string;
  };
};

function CompetitionPage({ params: { tab } }: Props) {
  switch (tab) {
    case "matches":
      return <Matches />;
    case "players":
      return <Players />;
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

export default CompetitionPage;
