<script lang="ts">
  import { concat } from "../../lib/utils"
  import { type Card } from "../../lib/card"

  export let content: Card
</script>

<h2 class={concat([
  "text-xl",
  "text-center",
])}>{content.title}</h2>
