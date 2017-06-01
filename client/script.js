$(document).ready(() => {
  axios.get('http://localhost:3000/')
    .then(function (response) {
      response.data.forEach(datum => {
        newItem = $($('#tweets').prop('content')).children().clone();
        newItem.find('.tweet-avatar').attr('src',datum.user.profile_image_url_https);
        newItem.find('.username').text(`@${datum.user.screen_name}`);
        newItem.find('.tweet-content').text(datum.text);
        $('#tweet-list').append(newItem);
      });
    })
    .catch(function (error) {
      console.log(error);
    });

  $('#search-tweet').click(function(event) {
    $('#search-list').empty();
    let searchForm = $('#search-form').serializeArray().reduce(function(obj, item) {
          obj[item.name] = item.value;
          return obj;
    }, {});
    //let search = $('#search-form').serializeArray()
    let search = searchForm.search;
    axios.post('http://localhost:3000/search', {search:search})
      .then (function (response) {
        response.data.statuses.forEach(datum => {
          newItem = $($('#tweets').prop('content')).children().clone();
          newItem.find('.tweet-avatar').attr('src',datum.user.profile_image_url_https);
          newItem.find('.username').text(`@${datum.user.screen_name}`);
          newItem.find('.tweet-content').text(datum.text);
          $('#search-list').append(newItem);
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  });

  $('refresh-twit').click(function(event) {
    $('tweet-list').empty();
    axios.get('http://localhost:3000/')
      .then(function (response) {
        response.data.forEach(datum => {
          newItem = $($('#tweets').prop('content')).children().clone();
          newItem.find('.tweet-avatar').attr('src',datum.user.profile_image_url_https);
          newItem.find('.username').text(`@${datum.user.screen_name}`);
          newItem.find('.tweet-content').text(datum.text);
          $('#tweet-list').append(newItem);
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  });

  $('#tweet-it').click(function(event) {
    let status = $('#new-tweet').val();
    axios.post('http://localhost:3000/newStatus', {status:status})
      .then (function(response) {
        if(response.data.text) $('#newTweet').append(`<p class="col s12 m6 push-m3 grey-text center">Tweet is successfully created: ${response.data.text}</p>`);
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  });
});
