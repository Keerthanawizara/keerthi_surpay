const axios = require('axios')
axios.defaults.baseURL = 'http://139.59.36.120';

  axios({
    method: 'post',
    url: 'http://139.59.36.120/countyDetail',
    data: {
        county :"Kaee",
        city:"salem" ,
        state:"tamilnadu",
        zip:"897453"  
    }
  })
  .then((response)=> {
    console.log(response.data);
    
  })
  .catch((error)=> {
    console.log(error);
  })
  
  axios({
    method: 'get',
    url: 'http://139.59.36.120/countyDataList',
  })
  .then (res=>res)
  .catch(err=>err)

//update api 

  let content ={
    county:'kaNe'
}
axios({
  method: 'post',
  url: ('http://139.59.36.120/countyRecordUpdate/5ccaca697cb86066d1ee69d5',content.county)
})
    .then((response)=> {
      console.log(response);
      
    })
    .catch((error)=> {
      console.log(error);
    })




