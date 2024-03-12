const showList = document.querySelector('.showList')
const vegetablesBtn = document.querySelector('.vegetablesBtn')
const fruitsBtn = document.querySelector('.fruitsBtn')
const flowersBtn = document.querySelector('.flowersBtn')

axios.get('https://data.moa.gov.tw/Service/OpenData/FromM/FarmTransData.aspx?IsTransData=1&UnitId=037').then(function (response,index) {
  let arr = response.data
  let str = ""
  arr.forEach(function(item,index){
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

vegetablesBtn.addEventListener('click', function(e){
  axios.get('https://data.moa.gov.tw/Service/OpenData/FromM/FarmTransData.aspx?IsTransData=1&UnitId=037').then(function (response,index){
    let arr = response.data
    let str = ""
    arr.forEach(function(item,index){
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


