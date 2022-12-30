class API {
    static getData() {
        const response = fetch("https://dog.ceo/api/breeds/image/random")
            .then(res => {
                if (!res.ok) {
                    throw Error(res.status)
                }
                return res.json()
            })
        return response;
    }
}

// class API {
//     static getData() {
//         return new Promise((resolve, reject) => {
//             let xml = new XMLHttpRequest();
//             xml.open("get", "https://dog.ceo/api/breeds/image/ranom");
//             xml.onreadystatechange = () => {
//                 if (xml.readyState === 4 && xml.status === 200) {
//                     resolve(JSON.parse(xml.responseText))
//                 } else if (xml.status === 404) {
//                     reject("xml.status")
//                 }
//             }
//             xml.send();
//         }
//         )

//     }
// }
