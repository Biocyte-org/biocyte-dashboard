"use client" // Ensures this runs client-side

import * as React from "react"
import { Moon, Sun, Monitor } from 'lucide-react'
import { useTheme } from "next-themes"

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Tabs defaultValue={theme} onValueChange={(value) => setTheme(value as "light" | "dark" | "system")}>
      <TabsList className="flex space-x-4">
        {/* Light Theme Tab */}
        <TabsTrigger value="light" className="p-2">
          <Sun className="h-[1.2rem] w-[1.2rem] transition-all" />
          <span className="sr-only">Light Theme</span>
        </TabsTrigger>

        {/* Dark Theme Tab */}
        <TabsTrigger value="dark" className="p-2">
          <Moon className="h-[1.2rem] w-[1.2rem] transition-all" />
          <span className="sr-only">Dark Theme</span>
        </TabsTrigger>

        {/* System Theme Tab */}
        <TabsTrigger value="system" className="p-2">
          <Monitor className="h-[1.2rem] w-[1.2rem] transition-all" />
          <span className="sr-only">System Theme</span>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="light">
        {/* This tab will apply the Light theme */}
      </TabsContent>
      <TabsContent value="dark">
        {/* This tab will apply the Dark theme */}
      </TabsContent>
      <TabsContent value="system">
        {/* This tab will apply the System theme */}
      </TabsContent>
    </Tabs>
  )
}
