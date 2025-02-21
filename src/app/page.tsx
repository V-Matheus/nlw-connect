import { Button } from '@/components/Button';
import { IconButton } from '@/components/IconButton';
import { InputFild, Inputicon, InputRoot } from '@/components/Input';
import { ArrowRight, Copy, Mail } from 'lucide-react';

export default function Home() {
  return (
    <main>
      <div>Hello world!</div>
      <Button>
        Enviar
        <ArrowRight />
      </Button>

      <IconButton>
        <Copy />
      </IconButton>

      <div>
        <InputRoot>
          <Inputicon>
            <Mail className="size-5" />
          </Inputicon>

          <InputFild />
        </InputRoot>
      </div>
    </main>
  );
}
