$( document ).ready(function() {
	$.getJSON('http://jsonplaceholder.typicode.com/users', function (data) {
      let firstN = Math.floor(Math.random() * data.length);
      let secondN = Math.floor(Math.random() * data.length);
      let userList = '';
      let userArray = [];
      let userArrayHTML = '';
      if (firstN == secondN) {
        firstN = Math.floor(Math.random() * data.length);
        for (let i = 0; i < data.length; i++) {
          if (i != firstN && i != secondN) {
            userList = data[i].name + ' ' + data[i].username;
            userArray.push(userList);
          }
        }
        
        console.log(userArray);
        userArrayHTML = '[';
        for (let i = 0; i < (userArray.length - 1); i++) {
          userArrayHTML = userArrayHTML + ("'" + userArray[i] + "'" + ', ');
        }
        userArrayHTML = userArrayHTML + ("'" + userArray[userArray.length - 1] + "'");
        userArrayHTML = userArrayHTML + ']';
        $('.result').html(userArrayHTML);
      } else {
          for (let i = 0; i < data.length; i++) {
            if (i != firstN && i != secondN) {
              userList = data[i].name + ' ' + data[i].username;
              userArray.push(userList);
            }
          }
          
          console.log(userArray);
          userArrayHTML = '[';
          for (let i = 0; i < (userArray.length - 1); i++) {
            userArrayHTML = userArrayHTML + ("'" + userArray[i] + "'" + ', ');
          }
          userArrayHTML = userArrayHTML + ("'" + userArray[userArray.length - 1] + "'");
          userArrayHTML = userArrayHTML + ']';
          $('.result').html(userArrayHTML);
      }
  })
});

//$('.result').html(userList);
//userList = [data[i].name + data[i].username];