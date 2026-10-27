import { useState } from 'react';
import { Plus, Search } from 'lucide-react';
import { Navbar } from './components/layout/Navbar';
import { Sidebar } from './components/layout/Sidebar';
import { Button } from './components/ui/Button';
import { SubjectCard } from './components/ui/SubjectCard';

// 1. Mini Banco de Dados Mockado
const MOCK_DATABASE = [
  { code: 'ADM113', name: 'Cálculo e Pesquisa Operacional' },
  { code: 'ENG204', name: 'Física para Engenharia' },
  { code: 'COMP301', name: 'Programação Orientada a Objetos' },
  { code: 'COMP302', name: 'Estrutura de Dados' },
  { code: 'MAT101', name: 'Cálculo Diferencial e Integral I' },
];

// Tipo para as matérias salvas (adicionando a nota opcional)
type SavedSubject = typeof MOCK_DATABASE[0] & { grade?: number };

export function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [savedSubjects, setSavedSubjects] = useState<SavedSubject[]>([]);

  // 2. Filtra o banco de dados com base no que o utilizador digita
  const filteredSubjects = MOCK_DATABASE.filter(
    (subject) =>
      subject.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      subject.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // 3. Função para adicionar matéria à lista de salvas
  const handleAddSubject = (subject: typeof MOCK_DATABASE[0]) => {
    // Evita adicionar a mesma matéria duas vezes
    if (!savedSubjects.find((s) => s.code === subject.code)) {
      setSavedSubjects([...savedSubjects, subject]);
    }
    setSearchQuery(''); // Limpa a barra de pesquisa após adicionar
  };

  return (
    <div className="min-h-screen bg-[#030626] flex flex-col font-sans select-none">
      <Navbar
        onOpenSidebar={() => setIsSidebarOpen(true)}
        onOpenReportModal={() => alert('Abrir modal de reporte de erro')}
      />

      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        onOpenChangeCourseModal={() => alert('Abrir PopUp de mudar curso e ano')}
        onOpenDeleteAllModal={() => setSavedSubjects([])} // Já conectamos o botão de limpar!
      />

      <main className="flex-1 flex flex-col items-center pt-8 px-4">
        {/* Barra de Adicionar Matéria / Pesquisa */}
        <div className="w-full max-w-xl bg-white rounded-lg px-4 py-2 flex items-center justify-between shadow-md mb-8 transition-all">
          <input
            type="text"
            placeholder="Adicionar Matéria"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent text-gray-700 placeholder-gray-500 font-medium text-sm focus:outline-none pr-2"
          />
          {/* Alterna o ícone entre Lupa (pesquisando) e o + (vazio) */}
          {searchQuery.length > 0 ? (
            <Search className="w-5 h-5 text-[#6B1513] stroke-[3] shrink-0" />
          ) : (
            <Button variant="icon" aria-label="Adicionar Matéria">
              <Plus className="w-4 h-4 stroke-[3]" />
            </Button>
          )}
        </div>

        {/* Lógica de Renderização: Mostra a Pesquisa OU as Matérias Salvas */}
        {searchQuery.length > 0 ? (
          // RESULTADOS DA PESQUISA (Tela 3 do Figma)
          <div className="w-full max-w-xl flex flex-col gap-3 pb-12">
            {filteredSubjects.length > 0 ? (
              filteredSubjects.map((subject) => (
                <SubjectCard
                  key={subject.code}
                  name={subject.name}
                  code={subject.code}
                  variant="search"
                  onClick={() => handleAddSubject(subject)}
                />
              ))
            ) : (
              <p className="text-white/60 text-center font-medium mt-4">
                Nenhuma matéria encontrada.
              </p>
            )}
          </div>
        ) : (
          // MATÉRIAS SALVAS (Tela 4 do Figma)
          <>
            {savedSubjects.length > 0 ? (
              <div className="w-full max-w-xl flex flex-col gap-3 pb-12">
                {savedSubjects.map((subject) => (
                  <SubjectCard
                    key={subject.code}
                    name={subject.name}
                    code={subject.code}
                    grade={subject.grade}
                    variant="saved"
                    onClick={() => alert(`Abrir o painel de notas de ${subject.name}`)}
                  />
                ))}
              </div>
            ) : (
              <div className="flex-1 flex items-center justify-center pb-24">
                <p className="text-white text-lg sm:text-xl font-bold text-center tracking-normal">
                  Você não tem matérias cadastradas
                </p>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}

export default App;