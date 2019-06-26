const axios = require('axios')

function addUserTenant(email, first_name, last_name, unit_id,property_id,number,movein_date){
  console.log("enter")
  let auth = "?manager_id=7514&key=e1cf2256d714f28cd4da02818247ab4f"
  let data = `&email=${email}&first_name=${first_name}&last_name=${last_name}&unit_id=${unit_id}&property_id=${property_id}&number=${number}&movein_date=${movein_date}`
   console.log("SSSS",data)
  return axios({
    method: 'GET',
    url: `https://app.payyourrent.com/sys/api/partner/tenants/addUserTenant.json${auth}${data}`,
  })
  .then(function (response) {
     console.log("ccccc", response.data)
     return response.data
   })
  .catch(err => console.log("AAAAA",err))
  
}


function getTenantList(){
  let auth = `?manager_id=7514&key=e1cf2256d714f28cd4da02818247ab4f&property_id=33818`
  axios({
    method: 'GET',
    url: `https://app.payyourrent.com/sys/api/partner/tenants/getTenantList.json${auth}`,
  })
  .then(function (response) {
     console.log("ccccc", response.data)
     //return response.data
   })
   .catch(err => console.log(err))
}
 
function getAllProperty(){
  let auth = "?manager_id=7514&key=e1cf2256d714f28cd4da02818247ab4f"
  return axios({
    method: 'GET',
    url: ` https://app.payyourrent.com/sys/api/partner/properties/getAll.json${auth}`,
  })
  .then(function (response) {
   // console.log("ccccc", response.data.properties)
    return response.data.properties
  })
  .catch(err => console.log(err))
}
function editTenant(tenant_id, unit_id,number ){
  let auth = "?manager_id=7514&key=e1cf2256d714f28cd4da02818247ab4f"
  let data = `&tenant_id=${tenant_id}&unit_id=${unit_id}}&number=${number}`
   console.log("SSSS",data)
  return axios({
    method: 'POST',
    url: `https://app.payyourrent.com/sys/api/partner/tenants/edit.json${auth}${data}`,
  })
  .then(function (response) {
     console.log("ccccc", response.data)
     return response.data
   })
  .catch(err => console.log("AAAAA",err))
  
}




module.exports ={
  addUserTenant,
  getTenantList,
  getAllProperty,
  editTenant


}