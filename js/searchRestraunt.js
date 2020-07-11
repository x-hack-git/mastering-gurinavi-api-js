const SEARCH_BUTTON = document.getElementById("search-button")
const SEARCH_TEXT = document.getElementById("search-text")
const REST_INFO = document.getElementById("restaurant-informations")
const URL_BASE = "https://api.gnavi.co.jp/RestSearchAPI"

SEARCH_BUTTON.addEventListener("click", () => seachShop())

// テンプレートリテラル 式展開・変数展開
function generateUrl(){
  return `
    ${URL_BASE}/v3/?&keyid=${API_KEY}&pref=${PREF_SELECT_BOX.element.value}&category_l=${CATEGORY_SELECT_BOX.element.value}&freeword=${SEARCH_TEXT.value}
  `
}

function createShopListElement(el){
  // ここで、要素を作ってあげればOK
  const _div = document.createElement("div")
  const _img = document.createElement("img")

  _div.innerText = el.name
  _img.src = el.image_url.shop_image1

  REST_INFO.appendChild(_div)
  REST_INFO.appendChild(_img)
}

function seachShop(){

  if(API_KEY === "YOUR API KEY"){
    alert("ぐるなび API KEY を入力してください")
    return
  }

  // 検索前に結果を空にする
  REST_INFO.innerText = ""
  const searchUrl = generateUrl()
  console.log(searchUrl)

  var oReq = new XMLHttpRequest();
  oReq.open("GET", generateUrl());
  oReq.send();
  oReq.addEventListener("load", () => {
    let response = JSON.parse(oReq.responseText)
    console.log(response)
    response.rest.forEach(el => {
      createShopListElement(el)
    });
  })
}