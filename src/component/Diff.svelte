<script lang="ts">
  import { concat } from "../lib/utils"
  import { type Card } from "../lib/card"
  import CardHeader from "./Card/Header.svelte"
  import CardImage from "./Card/Image.svelte"

  export let cardLeft: Card
  export let cardRight: Card
</script>

<section>
  <div class={concat([
    "px-6",
    "pt-2",
    "pb-6",
    "grid",
    "grid-cols-2",
    "gap-4",
  ])}>
    <CardHeader content={cardLeft} />
    <CardHeader content={cardRight} />
    <CardImage content={cardLeft} />
    <CardImage content={cardRight} />
  </div>
</section>
