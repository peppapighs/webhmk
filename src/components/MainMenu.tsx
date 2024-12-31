'use client'

import Link from 'next/link'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'
import { useDevice } from '@/hooks/useDevice'
import { KEYBOARDS } from '@/constants/keyboards'

export default function MainMenu() {
  const router = useRouter()

  const { device, connect } = useDevice()

  return (
    <div className="flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
        WEBHMK
      </h1>
      <p className="mt-2 leading-7 lg:mt-4">
        A web configurator for libhmk Hall-effect keyboards
      </p>
      <div className="mt-6 flex flex-col space-y-4 lg:flex-row lg:space-x-6 lg:space-y-0">
        <Button
          size="lg"
          onClick={async () => {
            if (device.status !== 'connected') {
              await connect(
                KEYBOARDS.map((k) => ({
                  vendorId: k.vendorId,
                  productId: k.appProductId,
                })),
              )
            }
            router.push('/app')
          }}
          className="text-base font-semibold"
        >
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
