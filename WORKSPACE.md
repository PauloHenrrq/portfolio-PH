# WORKSPACE

## Projeto: Portfolio PH
**Tipo:** Portfolio
**Stack:** Next.js (App Router), TypeScript, GSAP, Lenis, Vanilla CSS.

---

## 🧭 True North
O ponto de entrada principal para o desenvolvimento é o `src/App.tsx`. 
Os estilos globais e tokens de design estão em `src/styles/global.css`.
A estrutura de layout e background global está centralizada em `src/styles/layout.css`.

---

## 🛠️ Progresso & Logs

### [2026-05-01] - Intensificação Estética: Projetos Glow
- **Glow Dinâmico:** Implementação de uma camada de brilho central no `.wf-shell` que atinge sua intensidade máxima (vermelho vibrante) no início da seção de Projetos e suaviza conforme o scroll progride.
- **Arquitetura de Background:** O fundo agora utiliza 3 camadas (vignette fixa, glow dinâmico scrollável e base de cor) para criar profundidade sem sacrificar a performance.
- **Reforço de Transparência:** Revalidação e aplicação de `background: transparent` em todos os componentes de seção para garantir a visibilidade total do fundo global.

---

## 📝 Próximos Passos
- [ ] Validar a suavidade da transição de cor em diferentes velocidades de scroll.
- [ ] Verificar se o contraste dos textos de "Projetos" se mantém ideal com o novo brilho intenso.
- [ ] Aplicar micro-interações nos cards de Stacks para acompanhar o novo nível estético.
