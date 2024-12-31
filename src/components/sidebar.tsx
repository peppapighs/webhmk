import { ProfileSelector } from "./profile-selector"
import { Button } from "./ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { ScrollArea } from "./ui/scroll-area"

export function Sidebar() {
  return (
    <ScrollArea className="h-full">
      <div className="flex flex-col gap-4 p-4">
        <Card>
          <CardHeader>
            <CardTitle>Device</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="text-sm text-muted-foreground">
              <li className="truncate">
                <span className="font-semibold">Name:</span> GAUSS64
              </li>
              <li className="truncate">
                <span className="font-semibold">Vendor ID:</span> 0xAB50
              </li>
              <li className="truncate">
                <span className="font-semibold">Product ID:</span> 0xAB01
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="destructive" className="w-full">
              Exit Configurator
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Profile</CardTitle>
          </CardHeader>
          <CardFooter>
            <ProfileSelector />
          </CardFooter>
        </Card>
      </div>
    </ScrollArea>
  )
}
