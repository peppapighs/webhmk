/*
 * This program is free software: you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option) any later
 * version.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU General Public License for more
 * details.
 *
 * You should have received a copy of the GNU General Public License along with
 * this program. If not, see <https://www.gnu.org/licenses/>.
 */

import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"

export default function NotFound() {
  return (
    <main className="flex h-screen flex-col items-center justify-center p-12 text-center">
      <h1 className="text-4xl font-extrabold tracking-tight">Page Not Found</h1>
      <div className="mt-6">
        <Link
          href="/"
          replace
          className={buttonVariants({ variant: "default", size: "lg" })}
        >
          Back to Home
        </Link>
      </div>
    </main>
  )
}
