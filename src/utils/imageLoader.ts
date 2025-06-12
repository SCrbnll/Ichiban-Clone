export function generateHeroFrameUrls(totalFrames: number) {
  return Array.from({ length: totalFrames }, (_, i) => {
    const frameNumber = `${(i + 1).toString().padStart(3, "0")}`;
    return `/frames/moto-${frameNumber}.webp`;
  });
}