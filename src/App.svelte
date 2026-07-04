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
  "w-full",
  "p-3",
  "flex",
  "flex-col",
  "items-center",
  "bg-gray-800",
  "text-white",
])}>
  <h1 class={concat([
    "text-4xl",
    "text-center",
    "py-3",
  ])}>Улучшение лого QSP-COMPO-2026: добавить обводку</h1>
  <img class={concat([
    "w-[300px]",
    "py-14",
  ])} src="./qsp-compo-2026-outline.png" alt="">
  <h2 class={concat([
    "text-center",
    "text-3xl",
    "pb-6",
  ])}>Сравнение</h2>
  <div class={concat([
    "flex",
    "flex-col",
    "gap-3",
  ])}>
    {#each diffs as diff}
      <Diff cardLeft={diff.left} cardRight={diff.right} />
    {/each}
  </div>
</main>
