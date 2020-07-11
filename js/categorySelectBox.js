class CategorySelectBox {
  constructor(el){
    this.url = "https://api.gnavi.co.jp/master/CategoryLargeSearchAPI/v3/"
    this.element = document.getElementById(el)
  }

  load(){
    var oReq = new XMLHttpRequest();
    oReq.open("GET", `${this.url}?keyid=${API_KEY}`);      
    oReq.send();
    oReq.addEventListener("load", () => {
      var categoryJson = JSON.parse(oReq.responseText)
      categoryJson.category_l.forEach((category) => {
        var _opt = document.createElement("option")
        _opt.value = category.category_l_code
        _opt.innerText = category.category_l_name
        this.element.appendChild(_opt)
      })
    })
  }
}