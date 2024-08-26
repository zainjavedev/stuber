import { LoginForm } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="bg-black text-white md:py-[11%] min-h-screen">
      <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-4xl font-bold leading-tight">
           F*ck Uber and 
          </h1>
          <p className="text-lg">
            Join our community of drivers who are maximizing their earnings with
            flexible hours and reliable support. Start your journey with us today.
          </p>
          <div className="flex space-x-4">
            <Button className="bg-primary text-black hover:bg-black hover:text-white border-primary border-2">
              Learn More
            </Button>
            <Button className="bg-secondary text-white hover:bg-white hover:text-black border-secondary border-2">
              Sign Up Now
            </Button>
          </div>
        </div>
        <div className="text-center align-middle mx-auto">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
