const apiUrl = 'https://my-portfolio-a7eb9-default-rtdb.firebaseio.com/';

const client = async (
  endpoint,
  { data, token, headers: customHeaders, ...customConfig } = {}
) => {
  const config = {
    method: data ? "POST" : "GET",
    body: data ? JSON.stringify(data) : undefined,
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined,
      "Content-Type": data ? "application/json" : undefined,
      customHeaders
    },
    ...customConfig
  };

  return window
    .fetch(`${apiUrl}/${endpoint}`, config)
    .then(async (response) => {
      if (response.status === 401) {
        console.log("401");
      }
      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        return Promise.reject();
      }
    });
};

export { client };
