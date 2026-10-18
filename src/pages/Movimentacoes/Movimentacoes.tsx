import { Button, EmConstrucao, PageHeader } from '@/components/common'
import { useTituloPagina } from '@/hooks/useTituloPagina'

/* ------------------------------------------------------------------
 * PÁGINA: Movimentações  (rota: /movimentacoes)
 * STATUS: esqueleto — seções 4.4 e 4.5 do documento de design.
 *
 * O que falta implementar:
 *  - filtros em linha (período, categoria, conta) + busca por descrição;
 *  - painel/modal "Filtros" (tipo e "Recorrentes apenas");
 *  - tabela: Data · Descrição · Categoria · Conta · Tipo · Valor · Ações;
 *  - paginação, edição e exclusão (com confirmação);
 *  - formulário "Nova movimentação" (campos de MovimentacaoRequest).
 * Dados: movimentacaoService, contaService e categoriaService.
 * Sugestão: crie os componentes da tela em "components/" dentro desta pasta.
 * ------------------------------------------------------------------ */
export function Movimentacoes() {
  useTituloPagina('Movimentações')

  return (
    <>
      <PageHeader titulo="Movimentações" acao={<Button disabled>+ Nova movimentação</Button>} />
      <EmConstrucao descricao="Listagem, filtros e cadastro de movimentações." />
    </>
  )
}
