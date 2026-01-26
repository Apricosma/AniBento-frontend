import { Card } from "../ui/card";
import ContentCard from "./ContentCard";
import FilterBar from "./filterbar/FilterBar";

export default function MainContent() {
  return (
    <div className="bg-card flex-1 h-full pt-2 rounded-lg border border-accent shadow-md overflow-y-auto">
      <FilterBar />
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-8 p-4">
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
      </div>
    </div>
  );
}
