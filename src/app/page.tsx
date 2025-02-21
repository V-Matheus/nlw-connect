import { Button } from '@/components/Button';
import { IconButton } from '@/components/IconButton';
import { ArrowRight, Copy } from 'lucide-react';

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
    </main>
  );
}
