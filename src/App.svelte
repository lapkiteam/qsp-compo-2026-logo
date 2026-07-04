<script lang="ts">
  import { concat } from "./lib/utils"
  import type { Card } from "./lib/card"
  import Diff from "./component/Diff.svelte"

  const diffs: { left: Card, right: Card }[] = [
    {
      left: {
        title: "Темная тема без обводки",
        src: "./темная-тема.png",
      },
      right: {
        title: "Темная тема с обводкой",
        src: "./темная-тема-с-обводкой.png",
      },
    },
    {
      left: {
        title: "Светлая тема без обводки",
        src: "./светлая-тема-без-обводки.png",
      },
      right: {
        title: "Светлая тема с обводкой",
        src: "./светлая-тема-с-обводкой.png",
      },
    },
    {
      left: {
        title: "Модальное окно, темная тема",
        src: "./модальное-окно-темная-тема.png",
      },
      right: {
        title: "Модальное окно, темная тема с обводкой",
        src: "./модальное-окно-темная-тема-с-обводкой.png",
      },
    },
    {
      left: {
        title: "Модальное окно, светлая тема",
        src: "./модальное-окно-светлая-тема.png",
      },
      right: {
        title: "Модальное окно, светлая тема с обводкой",
        src: "./модальное-окно-светлая-тема-с-обводкой.png",
      },
    },
  ]
</script>

<main class={concat([
  "flex",
  "flex-col",
  "gap-3",
])}>
  {#each diffs as diff}
    <Diff cardLeft={diff.left} cardRight={diff.right} />
  {/each}
</main>
