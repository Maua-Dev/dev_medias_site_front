import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Navbar } from './components/layout/Navbar';
import { Sidebar } from './components/layout/Sidebar';
import { Button } from './components/ui/Button';

export function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#030626] flex flex-col font-sans select-none">
      {/* Navbar no topo */}
      <Navbar
        onOpenSidebar={() => setIsSidebarOpen(true)}
        onOpenReportModal={() => alert('Abrir modal de reporte de erro')}
      />

      {/* Menu Lateral (Issue #3) */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        onOpenChangeCourseModal={() => alert('Abrir PopUp de mudar curso e ano')}
        onOpenDeleteAllModal={() => alert('Abrir PopUp de apagar todas as matérias')}
      />

      {/* Conteúdo da 1ª Tela */}
      <main className="flex-1 flex flex-col items-center pt-8 px-4">
        {/* Barra de Adicionar Matéria centralizada */}
        <div className="w-full max-w-xl bg-white rounded-lg px-4 py-2 flex items-center justify-between shadow-md">
          <input
            type="text"
            placeholder="Adicionar Matéria"
            className="w-full bg-transparent text-gray-700 placeholder-gray-500 font-medium text-sm focus:outline-none pr-2"
          />
          <Button variant="icon" aria-label="Adicionar Matéria">
            <Plus className="w-4 h-4 stroke-[3]" />
          </Button>
        </div>

        {/* Mensagem quando não tem matérias cadastradas */}
        <div className="flex-1 flex items-center justify-center pb-24">
          <p className="text-white text-lg sm:text-xl font-bold text-center tracking-normal">
            Você não tem matérias cadastradas
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;