const getData = (callback, type, offset, limit) => {
  $.get(
    'https://script.google.com/macros/s/AKfycbwp3Wi6HnmN_hsMo8mUN6iXo5o5LHoGbqkCkm4JlpV8iaFqMzws/exec',
    {
      type: type,
      offset: offset,
      limit: limit
    },
    callback
  )
}

const getEvents = (callback, offset, limit) => {
  getData((data) => {
    callback(data.map((entry) => ({
      title: entry['Events Title'],
      date: moment(entry['Events Started At']).format('YYYY/MM/DD'),
      url: entry['Events Event Url']
    })).sort((a, b) => a.date < b.date))
  }, 'connpass_owner', offset, limit);
}

const getQiita = (callback, offset, limit) => {
  getData((data) => {
    callback(data.map((entry) => ({
      title: entry['Title'],
      date: moment(entry['Created At']).format('YYYY/MM/DD'),
      url: entry['Url']
    })).sort((a, b) => a.date < b.date))
  }, 'qiita', offset, limit);
}

const getQiita = (callback, offset, limit) => {
  getData((data) => {
    callback(data.map((entry) => ({
      title: entry['Title'],
      date: moment(entry['lastBuildDate']).format('YYYY/MM/DD'),
      url: entry['URL']
    })).sort((a, b) => a.date < b.date))
  }, 'zenn', offset, limit);
}
