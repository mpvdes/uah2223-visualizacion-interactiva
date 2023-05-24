let url = [
  "https://coolors.co/39375b-ed217c-87c38f-ffffff",
  "https://coolors.co/e63946-f1faee-a8dadc-457b9d-1d3557",
  "https://coolors.co/ef476f-ffd166-06d6a0-118ab2-073b4c",
  "https://coolors.co/ffbe0b-fb5607-ff006e-8338ec-3a86ff",
  "https://coolors.co/00e0b0-14213d-fca311-e5e5e5-cf7f3f"
];
function createPalette(_url) {
  
  let slash_index = _url.lastIndexOf('/');
  let pallate_str = _url.slice(slash_index + 1);
  let arr = pallate_str.split('-');
  for (let i = 0; i < arr.length; i++) {
    arr[i] = color('#' + arr[i]);
  }
  return arr;
}
