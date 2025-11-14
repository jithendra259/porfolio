"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Textarea, TextareaProps } from "@/components/ui/textarea"

// ChatInput: a small wrapper around the project's Textarea component
// Exported as a named export so callers can `import { ChatInput } from '@/components/ui/chat-input'`
export type ChatInputProps = TextareaProps

export function ChatInput({ className, ...props }: Readonly<ChatInputProps>) {
  return (
    <Textarea
      {...props}
      className={cn("min-h-12 resize-none rounded-lg bg-background border-0 p-3 shadow-none focus-visible:ring-0", className)}
    />
  )
}