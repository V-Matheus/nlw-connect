"use client"

import { IconButton } from "@/components/IconButton"
import { InputFild, InputIcon, InputRoot } from "@/components/Input"
import { Copy, Link } from "lucide-react"

interface InviteLinkInputProps {
  inviteLink: string
}

export default function InviteLinkInput({ inviteLink }: InviteLinkInputProps) {
  function copyInviteLink() {
    navigator.clipboard.writeText(inviteLink)
  }

  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>

      <InputFild readOnly defaultValue={inviteLink} />

      <IconButton onClick={copyInviteLink} className="-mr-2">
        <Copy className="size-5" />
      </IconButton>
    </InputRoot>
  )
}
