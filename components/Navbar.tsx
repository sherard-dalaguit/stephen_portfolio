import {FloatingDock} from "@/components/ui/floating-dock";
import {navBarLinks} from "@/data";

const Navbar = () => {
	return (
    <div className="flex items-center justify-center h-[35rem] w-full">
      <FloatingDock items={navBarLinks}/>
    </div>
  )
}

export default Navbar;