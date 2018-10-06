class Request {
  get(url) {
    return Request._request(url);
  }

  getText(url) {
    return fetch(url)
      .then(resp => resp.text());
  }

  post(url, data) {
    return Request._request(url, {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  put(url, data) {
    return Request._request(url, {
      method: 'put',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  delete(url, data) {
    return Request._request(url, {
      method: 'delete',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  static _request(url, options = {}) {
    return fetch(url, options)
      .then(Request.checkStatus)
      .then(Request.parseJSON);
  }

  static parseJSON(response) {
    if (response.status === 204 || response.status === 205) {
      return null;
    }
    return response.json();
  }

  static checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }

    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

export default new Request();
