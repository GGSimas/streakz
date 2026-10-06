# Streakz Mobile

Aplicativo mobile do **Streakz**, uma plataforma social de desafios de treino com grupos, check-ins, comprovação por mídia, ranking, XP, níveis e conquistas.

Este projeto é a implementação mobile em React Native/Expo do MVP descrito em [`../../docs/STREAKZ_PROJECT_SPEC.md`](../../docs/STREAKZ_PROJECT_SPEC.md).

## Stack

- Expo SDK 57
- React Native 0.86
- React 19
- TypeScript
- Expo Router
- React Native Reanimated
- Expo Image
- Expo Image Picker
- Expo Localization
- i18next + react-i18next
- Lucide React Native

## Estrutura

```text
src/
├── app/                 # Rotas do Expo Router
├── components/          # Componentes compartilhados
│   └── ui/              # Componentes base de UI
├── features/            # Funcionalidades por domínio
│   └── auth/            # Fluxos de autenticação/onboarding
├── i18n/                # Internacionalização
├── services/            # Serviços de plataforma e integrações
└── theme/               # Tokens de design e ThemeProvider
```

Rotas devem permanecer finas. A lógica de domínio e componentes de tela vivem em `src/features`.

## Como rodar

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run start
```

Atalhos úteis:

```bash
npm run ios
npm run android
npm run web
```

## Scripts

```bash
npm run start       # inicia o Expo
npm run ios         # abre no iOS
npm run android     # abre no Android
npm run web         # abre no navegador
npm run lint        # executa expo lint
npm run typeCheck   # executa tsc --noEmit
npm run commit      # inicia commitizen
```

Antes de finalizar uma mudança relevante, rode:

```bash
npm run lint
npm run typeCheck
```

## Internacionalização

O app usa `expo-localization`, `i18next` e `react-i18next`.

Arquivos principais:

```text
src/i18n/index.ts
src/i18n/useAppTranslation.ts
src/i18n/locales/pt-BR.json
src/i18n/locales/en.json
src/i18n/locales/es.json
```

Idiomas suportados:

- `pt-BR`
- `en`
- `es`

O idioma padrão é `pt-BR`. O app resolve o idioma inicial a partir do locale do dispositivo e atualiza o i18n no layout raiz.

Para usar traduções em componentes:

```tsx
import { useAppTranslation } from "@/i18n";

const { t } = useAppTranslation();

return <Text>{t("login.title")}</Text>;
```

Ao adicionar textos novos:

- adicione a chave em todos os arquivos de `src/i18n/locales`;
- prefira chaves por domínio ou fluxo, como `auth`, `profile`, `groups` e `checkins`;
- evite strings visíveis hardcoded em componentes;
- mantenha códigos e estados de domínio estáveis, traduzindo apenas a apresentação.

## Convenções de desenvolvimento

- Use Expo Router para navegação. Rotas ficam em `src/app`.
- Use componentes reutilizáveis de `src/components/ui` antes de criar novos.
- Use tokens de `src/theme` para cores, espaçamento, tipografia, sombras e bordas.
- Mantenha regras de negócio fora de componentes visuais.
- Para estado remoto, prefira TanStack Query quando essa camada for adicionada ao app.
- Para estado global local, use Zustand ou Context API apenas quando houver necessidade clara.
- Para permissões de câmera/fotos, use os serviços em `src/services/permissions`.
- Para mudanças de produto, consulte a especificação em `docs/STREAKZ_PROJECT_SPEC.md`.

## Produto

O MVP do Streakz deve priorizar:

- autenticação e perfil;
- grupos e desafios;
- check-ins com foto ou vídeo;
- moderação manual;
- ranking por grupo;
- XP, níveis, conquistas e títulos;
- experiência mobile nativa, acessível e consistente.

Regras críticas como XP, ranking, permissões, aprovação de check-ins e limites diários não devem depender apenas do cliente. Quando essas áreas forem implementadas, a autoridade deve estar no backend/Supabase.

## Observações

O app está configurado com Continuous Native Generation. Não edite diretórios `ios/` ou `android/` manualmente caso eles sejam gerados. Configure comportamento nativo via `app.json`, config plugins e comandos do Expo.
