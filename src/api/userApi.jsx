const   BASE_URL =  process.env.REACT_APP_USER_API_URL;

export const postSignup = async ({login, name, password}) => {
  var urlencoded = new URLSearchParams();
  urlencoded.append("login", login);
  urlencoded.append("name", name);
  urlencoded.append("password", password);

  const response = await fetch(BASE_URL + 'signup',{
    method: 'POST', 
    headers: {
      "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"  
    },
    body: urlencoded,  
  });
  if (response.ok) {
    return await response.json();
  }
  else {
    return response;
  }
}

export const postLogin = async ({login, password}) => {
  var urlencoded = new URLSearchParams();
  urlencoded.append("login", login);
  urlencoded.append("password", password);

  const response = await fetch(BASE_URL + 'login',{
    method: 'POST', 
    headers: {
      "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"  
    },
    body: urlencoded,  
  });
  return response;
}
