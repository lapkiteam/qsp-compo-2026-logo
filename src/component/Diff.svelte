<script lang="ts">
  import { concat } from "../lib/utils"
  import { type Card } from "../lib/card"
  import CardView from "./Card.svelte"

  export let cardLeft: Card
  export let cardRight: Card
</script>

<section class={concat([
  "w-fit",
])}>
  <div class={concat([
    "px-6",
    "pt-2",
    "pb-6",
    "flex",
    "gap-4",
  ])}>
    <CardView content={cardLeft} />
    <CardView content={cardRight} />
  </div>
</section>
