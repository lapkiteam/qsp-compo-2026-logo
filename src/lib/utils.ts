export function concat(classes: string []) {
  return classes.join(" ")
}

export function initVh() {
  // from https://github.com/Faisal-Manzer/postcss-viewport-height-correction/blob/ff1ab0b01f3d0a5b90c8ddae378e6b6f5f7ba784/README.md#installation
  const customViewportCorrectionVariable = "vh"
  function setViewportProperty(doc: HTMLElement) {
    let prevClientHeight: number
    const customVar = "--" + (customViewportCorrectionVariable || "vh")
    function handleResize() {
      const clientHeight = doc.clientHeight
      if (clientHeight === prevClientHeight) return
      requestAnimationFrame(() => {
        doc.style.setProperty(customVar, `${clientHeight * 0.01}px`)
        prevClientHeight = clientHeight
      })
    }
    handleResize()
    return handleResize
  }
  window.addEventListener("resize", setViewportProperty(document.documentElement))
}

export function loadImage(
  fileOrBlob: Blob | MediaSource
): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(fileOrBlob)
    const img = new Image()
    img.onload = () => {
      console.log("load");
      URL.revokeObjectURL(url)
      resolve(img)
    }
    img.onerror = reject
    img.src = url
  })
}

export async function resizeAndCrop(
  fileOrBlob: Blob | MediaSource,
  targetW: number,
  targetH: number,
): Promise<Parameters<BlobCallback>[0]> {
  const img = await loadImage(fileOrBlob)

  // Масштабируем по ширине (258px) и сохраняем пропорции
  const scale = targetW / img.naturalWidth
  const scaledW = targetW
  const scaledH = Math.round(img.naturalHeight * scale)

  // Рендерим в canvas с полученной "растянутой" высотой
  const canvas = document.createElement("canvas")
  canvas.width = scaledW
  canvas.height = scaledH

  const ctx = canvas.getContext("2d")
  if (!ctx) { throw console.error("Не могу создать контекст") }
  ctx.drawImage(img, 0, 0, scaledW, scaledH)

  // Обрезаем высоту до 353px (сверху по умолчанию)
  const cropH = Math.min(targetH, scaledH)

  const out = document.createElement("canvas")
  out.width = targetW
  out.height = targetH

  const outCtx = out.getContext("2d")
  if (!outCtx) { throw console.error("Не могу создать контекст") }

  // Если scaledH < targetH — добьем снизу прозрачностью (или закрасьте при желании)
  const yStart = 0 // чтобы резать сверху если нужно по центру:
  // const yStart = Math.max(0, Math.floor((scaledH - targetH) / 2))

  outCtx.drawImage(
    canvas,
    0, yStart, targetW, cropH, // source
    0, 0, targetW, cropH       // destination
  )

  return new Promise(resolve => out.toBlob(resolve, "image/png"))
}


// fs.readFile("public/модальное-окно-светлая-тема-с-обводкой.png")
//   .then(imageBuffer => {
//     const blob = new Blob(
//       [imageBuffer],
//       { type: "image/png" }
//     )
//     return resizeAndCrop(blob)
//   })
//   .then(async image => {
//     if (!image) {
//       throw new Error("toBlog вернул null")
//     }
//     const arrayBuffer = await image.arrayBuffer()
//     const buffer = Buffer.from(arrayBuffer)
//     await fs.writeFile("public/output.png", buffer)
//   })
//   .catch(e => {
//     console.error(e)
//   })
