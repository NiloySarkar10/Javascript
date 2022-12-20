// Code to demonstrate how Fetch requests work in JS

// Fetch uses asynchronous handling

// GET request
fetch("https://httpbin.org/ip")
  .then(function (response) {
    console.log(response);
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.log(err);
  });

// POST request (with some commonly used params)
fetch("https://httpbin.org/post", {
  method: "POST", // default is GET
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json", // Not always needed, only when the server serves different types but we only accept a specific one
  },
//   mode: "cors", // This is the default which should be allowed by the server else the request will be rejected
  // in case a CORS error occurs we can set it to 'no-cors' which will allow us to execute the request without
  // any failure but will hide the response from us (from JS code), but can be used by eg: if an image is returned
  // the img tag in HTML can use it even if it is hidden
  body: {
    message: "Testing the POST from Fetch. Thanks!",
  },
})
  .then(function (response) {
    console.log('!!!!', response);
    return response.json();
  })
  .then(function (data) {
    console.log('....', data);
  })
  .catch(function (err) {
    console.log(err);
  });
