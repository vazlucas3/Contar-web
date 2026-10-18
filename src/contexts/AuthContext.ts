import { createContext } from 'react'

/* Contrato do contexto de autenticação (o que as telas podem usar). */
export interface AuthContextValor {
  /** true quando existe um token salvo. */
  autenticado: boolean
  /** Guarda o token recebido no login. */
  entrar: (token: string) => void
  /** Remove o token (logout). */
  sair: () => void
}

export const AuthContext = createContext<AuthContextValor | null>(null)
