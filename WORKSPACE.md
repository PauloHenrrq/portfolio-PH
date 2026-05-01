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

### [2026-05-01] - Refinamento Estético e Conectividade Global
- **Vignette Global:** Migração do background para o `.wf-shell` em `layout.css`. Implementado degradê horizontal fixo (preto -> vermelho sutil -> preto) e transição vertical (preto -> cinza #1a1a1a) que se ativa na seção de Projetos.
- **Transparência de Seções:** Todas as seções (Hero, About, Projects, Stacks, Contact) foram configuradas com `background: transparent` para expor o fundo unificado.
- **Card GitHub:** Refatoração do card final de Projetos para ser linkável, com efeito shimmer no link e tipografia em vermelho morto.
- **Ajustes de Layout:** Centralização responsiva do label "PROJETOS" e remoção de redundâncias de background em arquivos CSS individuais.

---

## 📝 Próximos Passos
- [ ] Validar performance do background fixed em dispositivos mobile.
- [ ] Revisar transições de cores entre EnergyConnectors e o novo fundo cinza.
- [ ] Adicionar micro-interações nos cards de Stacks.
