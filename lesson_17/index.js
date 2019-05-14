const fetch = require('node-fetch');

async function main() {
  const response = await fetch("https://www.ubereats.com/rtapi/eats/v2/marketplaces", {
    "credentials": "include",
    "headers": {
      "accept": "*/*",
      "accept-language": "en-UA",
      "cache-control": "max-age=0",
      "content-type": "application/json",
      "pragma": "no-cache",
      "x-csrf-token": "1556179300-01-30T9txT-0ZFmaOkjm4nViFPXQP6CXDVAHBDwwLMdUQI",
      "x-requested-with": "XMLHttpRequest"
    },
    "referrer": "https://www.ubereats.com/en-UA/stores/",
    "referrerPolicy": "no-referrer-when-downgrade",
    "body": "{\"targetLocation\":{\"latitude\":50.4389072,\"longitude\":30.5026699,\"reference\":\"EiZTYWtzYWhhbnNrb2hvIFN0LCBLeWl2LCBVa3JhaW5lLCAwMjAwMCIuKiwKFAoSCSdhplX3ztRAEclhUpMrIB1yEhQKEgkFRVrhTs_UQBH-RgEX0jFJdg\",\"type\":\"google_places\",\"address\":{\"title\":\"Saksahanskoho Street\",\"address1\":\"Saksahanskoho Street\",\"city\":\"Kyiv\"}},\"hashes\":{\"stores\":\"\"},\"feed\":\"combo\",\"feedTypes\":[\"STORE\",\"SEE_ALL_STORES\"],\"feedVersion\":2}",
    "method": "POST",
    "mode": "cors"
  }).then(response => response.json());

  console.log('Response=', response);
}

main();
