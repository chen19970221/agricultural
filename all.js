const showList = document.querySelector('.showList')
const vegetablesBtn = document.querySelector('.vegetablesBtn')
const fruitsBtn = document.querySelector('.fruitsBtn')
const flowersBtn = document.querySelector('.flowersBtn')
const sortSelect = document.querySelector('#js-select')
const searchBtn = document.querySelector('.search')
const crop = document.querySelector('#crop')
const cropName = document.querySelector("#js-crop-name")


axios.get('https://data.moa.gov.tw/Service/OpenData/FromM/FarmTransData.aspx?IsTransData=1&UnitId=037').then(function (response) {
  let arr = response.data
  let str = ""
  arr.forEach(function(item){
    let product = item.作物名稱
    let market = item.市場名稱
    let highPrice = item.上價
    let midPrice = item.中價
    let lowPrice = item.下價
    let averagePrice = item.平均價
    let tradingVolume= item.交易量
    let content = `<tr><td>${product}</td>
      <td>${market}</td>
      <td>${highPrice}</td>
      <td>${midPrice}</td>
      <td>${lowPrice}</td>
      <td>${averagePrice}</td>
      <td>${tradingVolume}</td></tr>`
    str += content
  })
  showList.innerHTML = str
});



fruitsBtn.addEventListener('click', function(e){
  axios.get('https://data.moa.gov.tw/Service/OpenData/FromM/FarmTransData.aspx?IsTransData=1&UnitId=037').then(function (response){
    let arr = response.data
    let str = ""
    arr.forEach(function(item){
      let product = item.作物名稱
      let market = item.市場名稱
      let highPrice = item.上價
      let midPrice = item.中價
      let lowPrice = item.下價
      let averagePrice = item.平均價
      let tradingVolume= item.交易量
      let kind = item.種類代碼
      if ( kind !== 'N04'){
        return
      }else {
        let content = `<tr><td>${product}</td>
        <td>${market}</td>
        <td>${highPrice}</td>
        <td>${midPrice}</td>
        <td>${lowPrice}</td>
        <td>${averagePrice}</td>
        <td>${tradingVolume}</td></tr>`
      str += content
      }
    showList.innerHTML = str  
    })
  })
})

vegetablesBtn.addEventListener('click', function(e){
  axios.get('https://data.moa.gov.tw/Service/OpenData/FromM/FarmTransData.aspx?IsTransData=1&UnitId=037').then(function (response){
    let arr = response.data
    let str = ""
    arr.forEach(function(item){
      let product = item.作物名稱
      let market = item.市場名稱
      let highPrice = item.上價
      let midPrice = item.中價
      let lowPrice = item.下價
      let averagePrice = item.平均價
      let tradingVolume= item.交易量
      let kind = item.種類代碼
      if ( kind !== 'N05'){
        return
      }else {
        let content = `<tr><td>${product}</td>
        <td>${market}</td>
        <td>${highPrice}</td>
        <td>${midPrice}</td>
        <td>${lowPrice}</td>
        <td>${averagePrice}</td>
        <td>${tradingVolume}</td></tr>`
      str += content
      }
    showList.innerHTML = str  
    })
  })
})

flowersBtn.addEventListener('click', function(e){
  axios.get('https://data.moa.gov.tw/Service/OpenData/FromM/FarmTransData.aspx?IsTransData=1&UnitId=037').then(function (response){
    let arr = response.data
    let str = ""
    arr.forEach(function(item){
      let product = item.作物名稱
      let market = item.市場名稱
      let highPrice = item.上價
      let midPrice = item.中價
      let lowPrice = item.下價
      let averagePrice = item.平均價
      let tradingVolume= item.交易量
      let kind = item.種類代碼
      if ( kind !== 'N06'){
        return
      }else {
        let content = `<tr><td>${product}</td>
        <td>${market}</td>
        <td>${highPrice}</td>
        <td>${midPrice}</td>
        <td>${lowPrice}</td>
        <td>${averagePrice}</td>
        <td>${tradingVolume}</td></tr>`
      str += content
      }
    showList.innerHTML = str  
    })
  })
})

sortSelect.addEventListener('change', function(e){
  let selectedValue = sortSelect.value
  sortData(selectedValue)
})

function sortData(sortObj) {
  axios.get('https://data.moa.gov.tw/Service/OpenData/FromM/FarmTransData.aspx?IsTransData=1&UnitId=037').then(function (response){
    let arr = response.data
    arr.sort(function(a, b) {
      return a[sortObj] - b[sortObj];
    });
    let str = ""
    arr.forEach(function(item){
      let product = item.作物名稱
      let market = item.市場名稱
      let highPrice = item.上價
      let midPrice = item.中價
      let lowPrice = item.下價
      let averagePrice = item.平均價
      let tradingVolume= item.交易量
      let content = `<tr><td>${product}</td>
        <td>${market}</td>
        <td>${highPrice}</td>
        <td>${midPrice}</td>
        <td>${lowPrice}</td>
        <td>${averagePrice}</td>
        <td>${tradingVolume}</td></tr>`
      str += content
    })
    showList.innerHTML = str
  })
}



searchBtn.addEventListener("click",function(e){
  let searchText = crop.value
  if (searchText.toLowerCase().trim()==""){
    alert("請輸入關鍵字");
    return;
  }else {
    filterData(searchText)
  }
})

function filterData(searchText) {
  axios.get('https://data.moa.gov.tw/Service/OpenData/FromM/FarmTransData.aspx?IsTransData=1&UnitId=037').then(function (response){
    let items = response.data
    let str = ''
    let filterItems = items.filter((item) => searchText == item.作物名稱)

    filterItems.forEach(function(item){
      let product = item.作物名稱
      let market = item.市場名稱
      let highPrice = item.上價
      let midPrice = item.中價
      let lowPrice = item.下價
      let averagePrice = item.平均價
      let tradingVolume= item.交易量
      let content = `<tr><td>${product}</td>
        <td>${market}</td>
        <td>${highPrice}</td>
        <td>${midPrice}</td>
        <td>${lowPrice}</td>
        <td>${averagePrice}</td>
        <td>${tradingVolume}</td></tr>`
      str += content
    })
    showList.innerHTML = str
  })
}

// 1.get 所有資料
// 2.get 關鍵字
// 3.filter
// 4.render

// search.addEventListener("click",function(e){
//   if(e.target.nodeName == "BUTTON" && text.value.trim() == ""){
//       alert("請輸入作物名稱");
//       return;
//   }else{
//       showData = data.filter((item) => text.value == item.作物名稱)
//       if(showData == ""){
//           showList.innerHTML = `<tr>
//           <td colspan="7" class="text-center p-3">查詢不到當日的交易資訊QQ^＿^</td></tr>`
//           searchName.textContent = `查看「${text.value}」的比價結果`;;
//           text.value = "";
//           return
//       }
//   }
//   searchName.textContent = `查看「${text.value}」的比價結果`;
//   text.value = "";
//   init(showData);
// })
