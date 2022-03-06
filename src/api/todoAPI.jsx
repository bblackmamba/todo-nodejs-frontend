const   BASE_URL =  process.env.REACT_APP_TODO_API_URL;

export const getItems = async () => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + localStorage.getItem("jwt"));

  const response = await fetch(BASE_URL, {
    headers: myHeaders,
  });
  if (response.ok) {
    return await response.json();
  }
  else {
    return null;
  }
}

export const createItem = async (text) => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + localStorage.getItem("jwt"));
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");

  const response = await fetch(BASE_URL, {
    method: 'POST', 
    headers: myHeaders,  
    body: 'text=' + text,  
  });
  if (response.ok) {
    return await response.json();
  }
  else {
    alert("Ошибка HTTP: " + response.status);
  }
}

export const checkedItem = async (id) => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + localStorage.getItem("jwt"));
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");

  const response = await fetch(BASE_URL, {
    method: 'PATCH',
    headers: myHeaders,  
    body: 'id=' + id, 
  });
  if (response.ok) {
    return await response.json();
  }
  else {
    alert("Ошибка HTTP: " + response.status);
  }
}

export const deleteChecked = async () => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + localStorage.getItem("jwt"));
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");

  const response = await fetch(BASE_URL, {
    method: 'DELETE',
    headers: myHeaders,
  });
  if (response.ok) {
    return await response.json();
  }
  else {
    alert("Ошибка HTTP: " + response.status);
  }
}
