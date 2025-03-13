(async()=> {
    const response = await fetch('https://restaurant-api.dicoding.dev/list');
    const responseJson = await response.json();
    console.log(responseJson);
}) ();