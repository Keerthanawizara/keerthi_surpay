const axios = require('axios')

function getAllProperty(){
  let auth = "?manager_id=7514&key=e1cf2256d714f28cd4da02818247ab4f"
  //let data = `&property_id=${property_id}`
  //console.log()
 return axios({
    method: 'GET',
    url: `https://app.payyourrent.com/sys/api/partner/properties/getAll.json${auth}`,
  })
  .then (res => console.log(res))
  .catch(err => console.log(err))
  
}
module.exports ={
     getAllProperty
}