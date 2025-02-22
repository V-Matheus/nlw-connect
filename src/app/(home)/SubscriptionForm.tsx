import { Button } from "@/components/Button"
import { InputFild, InputIcon, InputRoot } from "@/components/Input"
import { ArrowRight, Mail, User } from "lucide-react"

export default function SubscriptionForm() {
  return (
    <form
      className="bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 w-full md:max-w-[440px]"
      action=""
    >
      <h2 className="font-heading font-semibold tex-gray-200 text-xl">
        Inscrição
      </h2>

      <div className="space-y-3">
        <InputRoot>
          <InputIcon>
            <User />
          </InputIcon>

          <InputFild type="text" placeholder="Nome completo" />
        </InputRoot>

        <InputRoot>
          <InputIcon>
            <Mail />
          </InputIcon>

          <InputFild type="email" placeholder="E-mail" />
        </InputRoot>
      </div>

      <Button type="submit">
        Confirmar
        <ArrowRight />
      </Button>
    </form>
  )
}
