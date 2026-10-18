/* Contratos de movimentação — espelham MovimentacaoRequestDTO / MovimentacaoResponseDTO. */

export type TipoMovimentacao = 'RECEITA' | 'DESPESA'
export type TipoDespesa = 'FIXA' | 'VARIAVEL'

export interface MovimentacaoRequest {
  contaId: number
  categoriaId: number
  descricao: string
  /** Deve ser positivo; o sinal é dado pelo tipo da movimentação. */
  valor: number
  tipoMovimentacao: TipoMovimentacao
  /** Opcional; usado apenas em despesas. */
  tipoDespesa?: TipoDespesa | null
  /** Formato "aaaa-mm-dd". */
  data: string
  recorrente: boolean
}

export interface MovimentacaoResponse {
  id: number
  contaId: number
  categoriaId: number
  descricao: string
  valor: number
  tipoMovimentacao: TipoMovimentacao
  tipoDespesa: TipoDespesa | null
  data: string
  recorrente: boolean
}
