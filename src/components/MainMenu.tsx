import Link from 'next/link'
import { Button } from './ui/button'

export default function MainMenu() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
        WEBHMK
      </h1>
      <p className="mt-2 leading-7 lg:mt-4">
        A web configurator for libhmk Hall-effect keyboards
      </p>
      <div className="mt-6 flex flex-col space-y-4 lg:flex-row lg:space-x-6 lg:space-y-0">
        <Button size="lg" className="text-base font-semibold">
          Connect
        </Button>
        <Link href="/demo">
          <Button
            variant="secondary"
            size="lg"
            className="text-base font-semibold"
          >
            Demo
          </Button>
        </Link>
      </div>
    </div>
  )
}
