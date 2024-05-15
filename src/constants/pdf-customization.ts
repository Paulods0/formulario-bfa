import { Resolution, Margin } from "react-to-pdf"

export const pdf_options = {
  method: "open",
  resolution: Resolution.HIGH,
  page: {
    margin: Margin.SMALL,
    format: "letter",
    orientation: "landscape",
  },
  canvas: {
    mimeType: "image/png",
    qualityRatio: 1,
  },

  overrides: {
    pdf: {
      compress: true,
    },

    canvas: {
      useCORS: true,
    },
  },
}
