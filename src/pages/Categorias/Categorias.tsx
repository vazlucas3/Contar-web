import { useNavigate } from 'react-router-dom'
import { Button, Card, PageHeader } from '@/components/common'
import { useTituloPagina } from '@/hooks/useTituloPagina'
import { CAMINHOS } from '@/routes/caminhos'
import type { CategoriaResponse } from '@/types'
import { TabelaCategorias } from './components/TabelaCategorias'
import { useCategorias } from './useCategorias'
import estilos from './Categorias.module.css'

export function Categorias() {
  useTituloPagina('Categorias')

  const navegar = useNavigate()
  const { categorias, carregando, erro, tentarNovamente, excluir } = useCategorias()

  /* Pede confirmação antes de excluir. */
  function aoExcluir(categoria: CategoriaResponse) {
    if (window.confirm(`Excluir a categoria "${categoria.nome}"?`)) {
      void excluir(categoria.id)
    }
  }

  return (
    <>
      <PageHeader
        titulo="Categorias"
        acao={<Button onClick={() => navegar(CAMINHOS.novaCategoria)}>+ Nova categoria</Button>}
      />

      {/* Mensagem de erro (carregar ou excluir) */}
      {erro && (
        <div className={estilos.erro} role="alert">
          <span>{erro}</span>
          <Button variante="secundario" onClick={tentarNovamente}>
            Tentar novamente
          </Button>
        </div>
      )}

      {/* Estados da lista: carregando, vazia ou com dados */}
      {carregando ? (
        <Card><p className={estilos.mensagem}>Carregando categorias...</p></Card>
      ) : categorias.length === 0 && !erro ? (
        <Card><p className={estilos.mensagem}>Nenhuma categoria cadastrada ainda.</p></Card>
      ) : (
        <TabelaCategorias categorias={categorias} aoExcluir={aoExcluir} />
      )}
    </>
  )
}