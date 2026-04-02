import {FloatingDock} from "@/components/ui/floating-dock";
import {minimalNavBarLinks, navBarLinks} from "@/data";

const Navbar = ({ minimal }: { minimal?: boolean }) => {
	return (
    <div className="flex items-center justify-center h-[35rem] w-full">
      {minimal ? (
        <FloatingDock items={minimalNavBarLinks} />
      ) : (
        <FloatingDock items={navBarLinks} />
      )}
    </div>
  )
}

export default Navbar;