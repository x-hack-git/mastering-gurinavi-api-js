class PrefSelectBox {
  constructor(el){
    this.url = "https://api.gnavi.co.jp/master/PrefSearchAPI/v3/"
    this.element = document.getElementById(el)
  }

  load(areaCode){
    this.element.innerHTML = ""

    let data = (pref) => {
      if(areaCode === pref.area_code){
        var _opt = document.createElement("option")
        _opt.value = pref.pref_code
        _opt.innerText = pref.pref_name
        this.element.appendChild(_opt)
      }
    }
    
    var oReq = new XMLHttpRequest();
    oReq.open("GET", `${this.url}?keyid=${API_KEY}`);
    oReq.send();
    oReq.addEventListener("load", () => {
      // 返ってきたデータを使って子要素を追加していく
      var prefJson = JSON.parse(oReq.responseText)
      prefJson.pref.forEach(data)
    })
  }
}
