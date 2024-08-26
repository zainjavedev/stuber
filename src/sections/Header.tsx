import Link from "next/link"
import { Menu} from "lucide-react"

import { Button } from "@/components/ui/button"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"


export function Header() {
  return (
    <div className=" bg-black">
      <header className="sticky py-6  items-center gap-4  bg-black ">


       {/* for Medium Sizes (Tablets, Computer)  */}
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row justify-between">
    <div className="flex-1">
      <Link
        href="#"
        className="text-primary transition-colors text-2xl font-uber fw-lighter"
      >
        Stuber
      </Link>
    </div>
    <div className="flex justify-end gap-6">
      <Link
        href="#"
        className="text-muted-foreground font-poppins transition-colors hover:text-primary"
      >
        Become a member
      </Link>
      <Link
        href="#"
        className="text-muted-foreground transition-colors hover:text-primary"
      >
        Contact
      </Link>
      <Link
        href="#"
        className="text-muted-foreground transition-colors hover:text-primary"
      >
        About
      </Link>
      <Link
        href="#"
        className="text-foreground transition-colors hover:text-primary"
      >
        Settings
      </Link>
    </div>
        </nav>

        <Sheet>
          <div className="px-3">
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden bg-black px-"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          </div>
          
          <SheetContent side="left" className="bg-black">
            <nav className="grid gap-6 text-lg font-medium bg-black">

              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Dashboard
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Orders
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Products
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Customers
              </Link>
              <Link href="#" className="hover:text-foreground">
                Settings
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        
      </header>
    </div>
  )
}
