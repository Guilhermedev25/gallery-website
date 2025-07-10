# Gallery Website

Um site de galeria responsivo com menu hamburger para dispositivos móveis.

## 📁 Estrutura do Projeto

```
galery/
├── index.html          # Página principal
├── css/
│   ├── style.css       # CSS compilado
│   └── style.css.map   # Source map do SASS
├── sass/
│   ├── style.sass      # Arquivo principal SASS
│   ├── _variables.sass # Variáveis SASS
│   └── _mixins.sass    # Mixins SASS
├── js/
│   └── main.js         # JavaScript principal
└── img/                # Imagens da galeria
    ├── animais.jpg
    ├── arquitetura.jpg
    ├── cidade.jpg
    ├── decoracao.jpg
    ├── esportes.jpg
    ├── natureza.jpg
    ├── paisagem.jpg
    ├── pessoas.jpg
    └── refeicoes.jpg
```

## 🚀 Funcionalidades

### Menu Hamburger

- **Responsivo**: Aparece apenas em telas ≤ 425px
- **Animação**: Transformação suave em X
- **Overlay**: Menu full-screen com fundo escuro
- **Auto-close**: Fecha ao clicar nos links ou fora do menu

### Galeria

- **Grid responsivo**: 3 colunas no desktop, 1 coluna no mobile
- **Efeitos hover**: Zoom e remoção do filtro grayscale
- **Categorias**: 9 categorias diferentes de fotos

## 🛠️ Tecnologias

- **HTML5**: Estrutura semântica
- **SASS**: Pré-processador CSS com variáveis e mixins
- **CSS3**: Flexbox, Grid, animações e media queries
- **JavaScript**: Interatividade do menu hamburger
- **Font Awesome**: Ícones de redes sociais

## 📱 Responsividade

- **Desktop**: > 425px - Menu horizontal
- **Mobile**: ≤ 425px - Menu hamburger

## 🎨 Cores

- **Primária**: #FFF (Branco)
- **Secundária**: #20C997 (Verde)
- **Fundo**: #000 (Preto)
- **Texto**: #777 (Cinza)

## 🔧 Como Usar

1. Clone o repositório
2. Abra `index.html` no navegador
3. Para desenvolvimento, edite os arquivos SASS e compile com:
   ```bash
   sass sass/style.sass css/style.css
   ```

## 📝 Organização do Código

### SASS

- **Variáveis**: Cores, tamanhos e breakpoints
- **Mixins**: Reutilização de código CSS
- **Estrutura**: Organizado por seções com comentários

### JavaScript

- **Modular**: Código organizado em funções
- **Eventos**: Listeners para interatividade
- **Comentários**: Documentação em português

### HTML

- **Semântico**: Uso correto de tags HTML5
- **Acessível**: Estrutura clara e navegável
- **Organizado**: Seções bem definidas

## 🎯 Melhorias Futuras

- [ ] Adicionar lazy loading para imagens
- [ ] Implementar filtros de categoria
- [ ] Adicionar lightbox para visualização de fotos
- [ ] Implementar sistema de busca
- [ ] Adicionar animações de scroll
