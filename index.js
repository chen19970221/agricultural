function getData(){
  axios.get('https://data.moa.gov.tw/Service/OpenData/FromM/FarmTransData.aspx?IsTransData=1&UnitId=037').then(function (response) {
    let data = response.data
    init(data)
  });
}
getData()


function init(arr){
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
}