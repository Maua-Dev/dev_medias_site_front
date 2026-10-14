import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Navbar } from './components/layout/Navbar';
import { Button } from './components/ui/Button';

export function App() {
  const [isReportOpen, setIsReportOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#030626] flex flex-col font-sans">
      {/* Navbar no topo */}
      <Navbar
        onOpenSidebar={() => setIsSidebarOpen(true)}
        onOpenReportModal={() => setIsReportOpen(true)}
      />

      {/* Conteúdo da 1ª Tela (Home) */}
      <main className="flex-1 flex flex-col items-center px-4 pt-12">
        {/* Barra de Adicionar Matéria */}
        <div className="w-full max-w-xl bg-white rounded-xl px-4 py-2.5 flex items-center justify-between shadow-md">
          <input
            type="text"
            placeholder="Adicionar Matéria"
            className="w-full bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none text-base"
          />
          <Button variant="icon" aria-label="Adicionar Matéria">
            <Plus className="w-5 h-5 stroke-[2.5]" />
          </Button>
        </div>

        {/* Mensagem de Estado Vazio */}
        <div className="flex-1 flex items-center justify-center pb-24">
          <p className="text-white text-xl font-bold tracking-wide text-center">
            Você não tem matérias cadastradas
          </p>
        </div>
      </main>

      {/* 2ª Tela: PopUp de Reportar Erro (Usando o BaseModal + Button) */}
      
    </div>
  );
}

export default App;