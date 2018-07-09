var request = new XMLHttpRequest();

request.onreadystatechange = function() {
  if(request.readyState === 4) {
    if(request.status === 200) {
      console.log(request.responseText);
    } else {
      console.log(request.status + ' ' + request.statusText);
    }
  }
}
request.open('Get', 'test.txt');
request.send();
