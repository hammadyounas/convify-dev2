"use client"

import {
  Bell,
  ChevronDown,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Plus,
  Search,
  ShoppingCart,
  Users,
} from "lucide-react"
import { signOut } from "next-auth/react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

import { FlowsList } from "@/components/flows"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

interface User {
  name: string
  email: string
  image: string
  id: string
}

export default function DashboardPage() {
  const [openCreateFlow, setOpenCreatedFlow] = useState(false)
  const [userData, setUserData] = useState<User>()
  const router = useRouter()

  console.log(userData)

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => setUserData(data))
      .catch((error) => console.error("Error fetching user data:", error))
  }, [])

  const handleOpenCreateFlow = () => {
    setOpenCreatedFlow(true)
  }

  const handleLogout = async () => {
    await signOut({ redirect: false })
    // document.cookie = "next-auth.session-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    router.push("/login")
  }

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="fixed flex h-full max-h-screen flex-col gap-2 md:w-[220px] lg:w-[280px]">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              {/* <Package2 className="size-6" /> */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 720 524"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_2503_36160"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="65"
                  y="65"
                  width="590"
                  height="394"
                >
                  <rect
                    x="65.4551"
                    y="65.4551"
                    width="589.091"
                    height="392.727"
                    fill="#D9D9D9"
                  />
                </mask>
                <g mask="url(#mask0_2503_36160)">
                  <path
                    d="M114.547 507.273L286.365 261.819L114.547 16.3643"
                    stroke="white"
                    strokeWidth="98.1818"
                  />
                  <path
                    d="M114.547 507.273L286.365 261.819L114.547 16.3643"
                    stroke="black"
                    strokeWidth="98.1818"
                  />
                  <path
                    d="M261.818 507.273L433.637 261.819L261.818 16.3643"
                    stroke="white"
                    strokeWidth="98.1818"
                  />
                  <path
                    d="M261.818 507.273L433.637 261.819L261.818 16.3643"
                    stroke="black"
                    strokeOpacity="0.6"
                    strokeWidth="98.1818"
                  />
                  <path
                    d="M409.092 507.273L580.91 261.819L409.092 16.3643"
                    stroke="white"
                    strokeWidth="98.1818"
                  />
                  <path
                    d="M409.092 507.273L580.91 261.819L409.092 16.3643"
                    stroke="black"
                    strokeOpacity="0.2"
                    strokeWidth="98.1818"
                  />
                </g>
              </svg>
              <span className="">Convify</span>
            </Link>
            <Button variant="outline" size="icon" className="ml-auto size-8">
              <Bell className="size-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1 overflow-y-auto overflow-x-hidden">
            <nav className="grid items-start px-2 pt-2 text-sm font-medium lg:px-4">
              <form>
                <div className="relative">
                  <Search className="absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Find workspace or flow"
                    className="w-full appearance-none bg-background pl-8 shadow-none "
                  />
                </div>
              </form>
              <Separator className="my-4" />
              <div className="flex items-center gap-3 rounded-lg px-3 py-2 uppercase text-muted-foreground">
                <ChevronDown className="size-4" />
                {/* <User className="h-4 w-4" /> */}
                Private
              </div>

              {/* <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <ShoppingCart className="h-4 w-4" />
                Orders
                <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                  6
                </Badge>
              </Link> */}
              <div
                onClick={() => setOpenCreatedFlow(true)}
                // href="/dashboard/flows"
                className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:cursor-pointer hover:text-primary"
              >
                <Package className="size-4" />
                My workspace{" "}
                <Badge className="ml-auto flex size-6 shrink-0 items-center justify-center rounded-full bg-transparent text-black hover:bg-transparent hover:text-black">
                  1
                </Badge>
              </div>
              {/* <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Users className="h-4 w-4" />
                Customers
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <LineChart className="h-4 w-4" />
                Analytics
              </Link> */}
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="sticky top-0 z-20">
          <header className="flex h-14 items-center gap-4 border-b bg-[#fafbfc] px-4 lg:h-[60px] lg:px-6">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="shrink-0 md:hidden"
                >
                  <Menu className="size-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent className="flex flex-col">
                <nav className="grid gap-2 text-lg font-medium">
                  <Link
                    href="#"
                    className="flex items-center gap-2 text-lg font-semibold"
                  >
                    <Package2 className="size-6" />
                    <span className="sr-only">Convify</span>
                  </Link>
                  <Link
                    href="#"
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  >
                    <Home className="size-5" />
                    Dashboard
                  </Link>
                  <Link
                    href="#"
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
                  >
                    <ShoppingCart className="size-5" />
                    Orders
                    <Badge className="ml-auto flex size-6 shrink-0 items-center justify-center rounded-full">
                      6
                    </Badge>
                  </Link>
                  <Link
                    href="#"
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  >
                    <Package className="size-5" />
                    Products
                  </Link>
                  <Link
                    href="#"
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  >
                    <Users className="size-5" />
                    Customers
                  </Link>
                  <Link
                    href="#"
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  >
                    <LineChart className="size-5" />
                    Analytics
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
            <div className="w-full flex-1">
              {/* <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                />
              </div>
            </form> */}
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="secondary"
                  size="sm"
                  className="!size-10 rounded-full bg-[#eaeaec] text-base font-bold hover:bg-[#eaeaec]"
                >
                  {userData && userData?.name?.charAt(0).toUpperCase()}
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </header>
        </div>

        <main className="flex flex-1 flex-col p-4 lg:p-6">
          <div className="mb-4 flex items-center">
            <h1 className="text-lg font-semibold md:text-lg">My workspace</h1>
          </div>
          <div
            className={`flex flex-1 items-center justify-center rounded-lg shadow-sm ${
              openCreateFlow ? "border-none" : "border"
            }`}
            x-chunk="dashboard-02-chunk-1"
          >
            {openCreateFlow ? (
              <FlowsList />
            ) : (
              <div className="flex flex-col items-center gap-1 text-center">
                <img
                  src="/images/character.svg"
                  alt=""
                  className="mb-4 h-[104px]"
                />
                <h3 className="text-2xl font-bold tracking-tight">
                  There&apos;s not a flow in sight
                </h3>
                <p className="text-sm text-muted-foreground">
                  Click on &quot;Create new flow&quot; or use one of flow <br />{" "}
                  suggestions above to get started
                </p>
                <Button
                  className="itmes-center mt-4 flex gap-2"
                  onClick={handleOpenCreateFlow}
                >
                  <Plus size={16} /> Create new flow
                </Button>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
