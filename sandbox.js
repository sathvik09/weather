const key = 'BnMHxTHLkW548xYm4HMH7ooq9E19vziA';

// weather condition

const getcondition = async (id) => {
  const base = 'http://dataservice.accuweather.com/currentconditions/v1/'
  const qk = `${id}?apikey=${key}`;

  const response = await fetch(base + qk)
  const datac = await response.json();
     return datac[0];
 };

const getcity =  async (city) => {
  const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  const q = `?apikey=${key}&q=${city}`;

   const response = await fetch(base+q);
   const data = await response.json();
    return data[0];

}
/*getcity('manchester')
 .then( data => {
    return getcondition(data.Key);
 }).then(datac => {
   console.log(datac);
 })
 .catch(err => 'error');
*/
