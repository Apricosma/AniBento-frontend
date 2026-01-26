import { Input } from "@/components/ui/input";
import FilterButtonGroup from "./FilterButtonGroup";

export default function FilterBar() {
  return (
    <div className="flex items-center px-4 py-0 justify-center">
      <div className="flex justify-between items-center px-4 bg-accent rounded-md w-full h-16 border-b border-accent">
        <h2 className="text-xl font-semibold tracking-wide">Name of Collection [T]</h2>
        <div className="flex items-center">
          <Input type="search" className="w-64 mr-4" placeholder="Search..." />
          <FilterButtonGroup />
        </div>
      </div>
    </div>
  );
}
