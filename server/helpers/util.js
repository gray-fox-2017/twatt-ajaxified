var getContent = function(data) {
  let result = [];
  data = JSON.parse(data)
  data.statuses.forEach(status => {
    let datas = {}
    datas.username = status.user.screen_name;
    datas.text = status.text;
    datas.created_at = status.created_at
    result.push(datas)
  })
  return result;
}

module.exports = {
  getContent
};