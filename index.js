// var requestOptions = {
//   method: 'GET',
//   redirect: 'follow'
// };
function updatemap() {


  fetch("https://corona.lmao.ninja/v2/countries")
    .then(response => response.json())
    .then(result => {
      const data = result
      console.log(data)
      data.forEach(element => {
        // country 

        lat = element.countryInfo.lat
        long = element.countryInfo.long
        // console.log(lat ,long)

        // popup text
        var popup = new mapboxgl.Popup({ offset: 25 })
          .setText(
            `${element.country}

            Total: ${element.cases}
            Active: ${element.active}
            Deaths: ${element.deaths}
            Recovered: ${element.recovered}


            `
          );

        var el = document.createElement('div');
        el.className = 'marker';

        var marker = new mapboxgl.Marker()
          .setLngLat([long, lat])
          .setPopup(popup)
          .addTo(map);


      });

    })
}
updatemap()