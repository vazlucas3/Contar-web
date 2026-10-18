import type { MovimentacaoRequest, MovimentacaoResponse } from '@/types'
import { http } from './http'

/* Movimentações — /movimentacoes.
 * Os filtros da API são por rota (data, categoria ou conta, um por vez).
 * Filtros combinados (período, tipo, recorrentes, busca) devem ser feitos no
 * frontend sobre o resultado de "buscarTodas" — ou pedidos como evolução da API. */
export const movimentacaoService = {
  buscarTodas: () => http.get<MovimentacaoResponse[]>('/movimentacoes'),
  buscarPorData: (data: string) => http.get<MovimentacaoResponse[]>(`/movimentacoes/data/${data}`),
  buscarPorCategoria: (categoriaId: number) =>
    http.get<MovimentacaoResponse[]>(`/movimentacoes/categoria/${categoriaId}`),
  buscarPorConta: (contaId: number) =>
    http.get<MovimentacaoResponse[]>(`/movimentacoes/conta/${contaId}`),
  criar: (dados: MovimentacaoRequest) => http.post<MovimentacaoResponse>('/movimentacoes', dados),
  atualizar: (id: number, dados: MovimentacaoRequest) =>
    http.put<MovimentacaoResponse>(`/movimentacoes/${id}`, dados),
  deletar: (id: number) => http.delete(`/movimentacoes/${id}`),
}
