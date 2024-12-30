import { IKeyboard } from '@/types/keyboard'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card'
import { Button } from './ui/button'
import { displayUInt16 } from '@/lib/display'
import { useApp } from '@/hooks/useApp'
import { Toggle } from './ui/toggle'

interface ISidebarProps {
  keyboard: IKeyboard
}

export default function Sidebar({ keyboard }: ISidebarProps) {
  const { profile, setProfile } = useApp()

  return (
    <div className="flex flex-col gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Device</CardTitle>
          <CardDescription>
            <table className="w-full table-auto">
              <tbody>
                <tr>
                  <td>Name: </td>
                  <td className="text-right">{keyboard.metadata.name}</td>
                </tr>
                <tr>
                  <td>Vendor ID: </td>
                  <td className="text-right">
                    {displayUInt16(keyboard.metadata.vendorId)}
                  </td>
                </tr>
                <tr>
                  <td>Product ID: </td>
                  <td className="text-right">
                    {displayUInt16(keyboard.metadata.appProductId)}
                  </td>
                </tr>
              </tbody>
            </table>
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button className="w-full">Exit</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Profiles</CardTitle>
        </CardHeader>
        <CardFooter>
          <div className="flex w-full flex-col gap-4">
            {[...Array(keyboard.metadata.numProfiles)].map((_, i) => (
              <Toggle
                key={i}
                variant="outline"
                pressed={profile === i}
                onPressedChange={(pressed) => pressed && setProfile(i)}
              >
                Profile {i + 1}
              </Toggle>
            ))}
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
