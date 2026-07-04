<script lang="ts">
  import { concat } from "../../lib/utils"
  import { type Card } from "../../lib/card"

  export let content: Card
</script>

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
