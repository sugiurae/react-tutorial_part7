'use strict';

export  function phpJson() {
  const URL = "/js/reports/php.json";
  return  fetch(URL)
      .then(res => res.json())
      .then(json => {
        console.log(JSON.stringify(json));
          return Reflect.get(json)
        })
}

// export async function corpName() {
//   const URL = `/reports/corpName.json`;
//   const OPTIONS = {
//       method: "GET",
//       mode: "cors",
//       cache: "no-cache",
//       headers: {
//         "Authorization": 1,
//         "Content-Type": "application/json"
//       }
//   }
//   return await fetch(URL)
//       .then(res => res.json())
//       .then(json => {
//           // console.log(JSON.stringify(json));
//           return Reflect.get(json, "data")
//       })
// }