/** 起点对应的颜色 */
export const startColors: any[] = ['primary', 'success', 'warning', 'danger']
export const startColors2: string[] = ['#409eff', '#67c23a', '#e6a23c', '#f56c6c']
/** 起点最多的数量 */
export const START_MAX_COUNT = 4;

/** 获取旗子的图片 */
export const getFlagImg = (flagIndex: number, isHtml: boolean = true) => {
  const color = startColors2[flagIndex]
  const svgStr = `<svg t="1696667356250" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2422" data-darkreader-inline-fill="" width="200" height="200">
  <path d="M246.4 682.9V173.3c-1.8-13 1.4-32.8 15.8-51.1 30.6-38.5 100.1-58 206.6-58 66.3 0 111.8 41.6 148.4 75 21.6 19.7 42 38.3 60.5 42.9 55.5 13.6 144.3-27.7 173.8-44.8l46.6-27-63.5 464.2-7.9 6.5c-3 2.5-74.5 60.9-158.7 40.7-31.5-7.6-60.6-19.7-88.7-31.5C542.1 574.7 507 560 474.1 560c-115.8 0-181.2 71.1-181.8 71.8l-45.9 51.1z m227.7-175.6c43.4 0 85.2 17.4 125.5 34.3 26.2 11 53.3 22.3 80.7 28.9 45 10.8 87.9-13.1 104.9-24.4l46.6-340.6c-44.2 19.1-112.1 41.2-166.8 27.7-31.6-7.8-56.8-30.8-83.5-55.1-33-30.1-67-61.2-112.9-61.2-117.8 0-153.7 25.3-163.7 36.2-5.6 6.1-6.4 10.9-6.4 12.8l1.4 3.7-1 1.5V559c37.4-24.4 96.7-51.7 175.2-51.7z m335.8 53.5h0.1-0.1zM298.3 165.1" fill="${color}" p-id="2423" data-darkreader-inline-fill="" style="--darkreader-inline-fill: ${color};"></path>
  <path d="M272.8 894c-14.5 0-26.3-11.8-26.3-26.3V177.2c0-14.5 11.8-26.3 26.3-26.3s26.3 11.8 26.3 26.3v690.5c0.1 14.5-11.7 26.3-26.3 26.3z" fill="${color}" p-id="2424" data-darkreader-inline-fill="" style="--darkreader-inline-fill: ${color};"></path>
  <path d="M278.3 959.8c-85.5 0-152.4-42.9-152.4-97.6s66.9-97.6 152.4-97.6 152.4 42.9 152.4 97.6-66.9 97.6-152.4 97.6z m0-142.5c-60.9 0-99.7 26.6-99.7 44.9s38.8 44.9 99.7 44.9 99.7-26.6 99.7-44.9-38.8-44.9-99.7-44.9z" fill="${color}" p-id="2425" data-darkreader-inline-fill="" style="--darkreader-inline-fill: ${color};"></path>
  </svg>`
  const src = 'data:image/svg+xml,' + encodeURIComponent(svgStr)
  if(isHtml) {
    const img = new Image();
    img.src = src;
    return img
  }
  return src
}
