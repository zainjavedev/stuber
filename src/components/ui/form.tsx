import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function LoginForm() {
  return (
    <Card className="w-full max-w-md bg-black border-0">
      <CardHeader>
        <CardTitle className="text-2xl text-primary ">Join the Waitlist and Get 100% OFF on your first 10 Rides</CardTitle>
        {/* <CardDescription className="text-accent">
          Join us and get out of the dictatorship run by big cab companies.
        </CardDescription> */}
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="uberhater@gmail.com" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" required />
        </div>
      </CardContent>
      <CardFooter>
      <Button 
        className="w-full bg-primary text-black hover:bg-black hover:text-white !border-primary !border-5 !border-solid"
        >
        Join Us
        </Button>

      </CardFooter>
    </Card>
  )
}
