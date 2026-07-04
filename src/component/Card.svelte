<script lang="ts">
  import { concat } from "../lib/utils"
  import { type Card } from "../lib/card"

  export let content: Card
</script>

<div class={concat([
  "flex",
  "flex-col",
  "gap-3",
  "w-[258px]",
])}>
  <h2 class={concat([
    "text-xl",
    "text-center",
  ])}>{content.title}</h2>
  <div class={concat([
    "h-[353px]",
    "overflow-clip",
  ])}>
    <img
      class={concat([
        "w-full",
        "object-contain",
      ])}
      src={content.src}
      alt="темная-тема.png"
    >
  </div>
</div>
