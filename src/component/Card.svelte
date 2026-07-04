<script lang="ts">
  import { concat } from "../lib/utils"
  import { type Card } from "../lib/card"

  export let content: Card
</script>

<div class={concat([
  "size-full",
  "flex",
  "flex-col",
  "gap-3",
  "max-w-[258px]",
])}>
  <h2 class={concat([
    "text-xl",
    "text-center",
  ])}>{content.title}</h2>
  <div class={concat([
    "overflow-clip",
    "aspect-[258/353]",
    "flex",
  ])}>
    <img
      class={concat([
        "aspect-square",
        "object-cover",
        "object-top",
      ])}
      src={content.src}
      alt="темная-тема.png"
    >
  </div>
</div>
